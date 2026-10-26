/**
 * PROSPIRA GYM MANAGEMENT ARCHITECTURE
 * Entity-Relationship Data Models for Production Gym Platform
 */

export type MembershipTierLevel = "ESSENTIAL" | "PERFORMANCE" | "ELITE";

export type SubscriptionStatus =
  | "ACTIVE"
  | "PAUSED"
  | "PENDING_CANCELLATION"
  | "CANCELLED"
  | "PAST_DUE";

export type BookingStatus =
  | "RESERVED"
  | "CHECKED_IN"
  | "CANCELLED_ON_TIME"
  | "LATE_CANCEL"
  | "NO_SHOW";

export type PaymentStatus = "SUCCEEDED" | "PENDING" | "FAILED" | "REFUNDED";

export interface MemberEntity {
  id: string; // UUID primary key
  email: string; // Unique index
  passwordHash: string; // Argon2 / Bcrypt secure hash
  firstName: string;
  lastName: string;
  phone: string;
  emergencyContact: {
    name: string;
    phone: string;
    relationship: string;
  };
  keycardBadgeId?: string; // NFC / RFID token for 24/7 access gates
  dateOfBirth: string;
  hasSignedWaiver: boolean;
  waiverSignedAt?: string;
  movementScreenNotes?: string;
  assignedTrainerId?: string; // Foreign key -> TrainerEntity
  createdAt: string;
  updatedAt: string;
}

export interface MembershipPlanEntity {
  id: string; // Primary key (e.g. "plan_performance_monthly")
  tier: MembershipTierLevel;
  name: string;
  monthlyDuesCents: number; // e.g. 22500 ($225.00)
  annualCommitmentDuesCents: number; // e.g. 19500 ($195.00/mo)
  guestPassAllotment: number;
  ptSessionAllotment: number;
  hasRecoverySuiteAccess: boolean;
  has247Access: boolean;
  advanceBookingDays: number;
  isActive: boolean;
}

export interface MemberSubscriptionEntity {
  id: string; // UUID
  memberId: string; // Foreign key -> MemberEntity.id
  planId: string; // Foreign key -> MembershipPlanEntity.id
  billingInterval: "MONTHLY" | "ANNUAL";
  status: SubscriptionStatus;
  currentPeriodStart: string;
  currentPeriodEnd: string;
  cancelAtPeriodEnd: boolean;
  pauseStartDate?: string;
  pauseResumeDate?: string;
  paymentProviderCustomerId: string; // Stripe customer ID (cus_xxx)
  paymentProviderSubscriptionId: string; // Stripe sub ID (sub_xxx)
  createdAt: string;
  updatedAt: string;
}

export interface PaymentRecordEntity {
  id: string; // UUID
  memberId: string;
  subscriptionId?: string;
  amountCents: number;
  currency: string; // "USD"
  status: PaymentStatus;
  paymentMethodType: "CARD" | "ACH_TRANSFER";
  stripePaymentIntentId: string; // Idempotency reference
  receiptUrl?: string;
  createdAt: string;
}

export interface TrainerEntity {
  id: string; // UUID
  slug: string; // Unique index (e.g. "marcus-vance")
  name: string;
  role: string;
  email: string;
  bio: string;
  philosophy: string;
  specializations: string[];
  maxPrivateClients: number;
  activePrivateClients: number;
  hireDate: string;
}

export interface TrainingProgramEntity {
  id: string;
  slug: string;
  title: string;
  category: "STRENGTH" | "CONDITIONING" | "PERSONAL" | "RECOVERY";
  sessionLengthMinutes: number;
  maxCoachToMemberRatio: string; // "1:12"
  isActive: boolean;
}

export interface ClassSessionEntity {
  id: string; // UUID
  programId: string; // Foreign key -> TrainingProgramEntity.id
  trainerId: string; // Foreign key -> TrainerEntity.id
  dayOfWeek: number; // 0 = Sunday, 1 = Monday, etc.
  startTimeUTC: string; // "06:00"
  endTimeUTC: string; // "07:05"
  roomZone: string; // "Platform 1 & Rig Area"
  capacityLimit: number;
  currentEnrollment: number;
  isActive: boolean;
}

export interface ClassBookingEntity {
  id: string; // UUID
  sessionId: string; // Foreign key -> ClassSessionEntity.id
  memberId: string; // Foreign key -> MemberEntity.id
  sessionDate: string; // "2026-11-02"
  status: BookingStatus;
  reservedAt: string;
  cancelledAt?: string;
}

export interface AttendanceRecordEntity {
  id: string; // UUID
  memberId: string; // Foreign key -> MemberEntity.id
  entryGate: "MAIN_TURNSTILE" | "RECOVERY_SUITE" | "PRIVATE_STUDIO";
  verifiedAt: string;
  method: "NFC_KEYCARD" | "APP_QR_CODE" | "CONCIERGE_MANUAL";
}

export interface ContactEnquiryEntity {
  id: string; // UUID
  ticketRef: string; // "ENQ-849201"
  fullName: string;
  email: string;
  phone?: string;
  enquiryType: string;
  message: string;
  hasConsented: boolean;
  ipAddressHash: string; // Anonymized SHA256 for abuse prevention
  resolved: boolean;
  resolvedByTrainerId?: string;
  createdAt: string;
}
