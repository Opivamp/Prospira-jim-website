"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

export interface BookingModalData {
  defaultPlan?: string;
  defaultProgram?: string;
  defaultCoach?: string;
  defaultClass?: string;
  sourceContext?: string;
}

interface BookingModalContextType {
  isOpen: boolean;
  modalData: BookingModalData;
  openBookingModal: (data?: BookingModalData) => void;
  closeBookingModal: () => void;
}

const BookingModalContext = createContext<BookingModalContextType | undefined>(undefined);

export function BookingModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [modalData, setModalData] = useState<BookingModalData>({});

  const openBookingModal = (data?: BookingModalData) => {
    if (data) {
      setModalData(data);
    } else {
      setModalData({});
    }
    setIsOpen(true);
  };

  const closeBookingModal = () => {
    setIsOpen(false);
  };

  return (
    <BookingModalContext.Provider
      value={{
        isOpen,
        modalData,
        openBookingModal,
        closeBookingModal,
      }}
    >
      {children}
    </BookingModalContext.Provider>
  );
}

export function useBookingModal() {
  const context = useContext(BookingModalContext);
  if (!context) {
    throw new Error("useBookingModal must be used within a BookingModalProvider");
  }
  return context;
}
