import React from "react";
import { HomeHero } from "@/components/home/HomeHero";
import { HomeBrandIntro } from "@/components/home/HomeBrandIntro";
import { HomePrograms } from "@/components/home/HomePrograms";
import { HomeDifference } from "@/components/home/HomeDifference";
import { HomeFacilities } from "@/components/home/HomeFacilities";
import { HomeCoaches } from "@/components/home/HomeCoaches";
import { HomeMembership } from "@/components/home/HomeMembership";
import { HomeSchedulePreview } from "@/components/home/HomeSchedulePreview";
import { HomeTestimonials } from "@/components/home/HomeTestimonials";
import { HomeConversion } from "@/components/home/HomeConversion";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeBrandIntro />
      <HomePrograms />
      <HomeDifference />
      <HomeFacilities />
      <HomeCoaches />
      <HomeMembership />
      <HomeSchedulePreview />
      <HomeTestimonials />
      <HomeConversion />
    </>
  );
}
