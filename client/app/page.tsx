"use client";
import MainContainer from "./components/container/MainContainer";
import Hero from "./components/home/hero/Hero";
import TodayBest from "./components/home/todayBest/TodayBest";
import TopCategory from "./components/home/topcategory/TopCategory";

export default function Home() {
  return (
    <>
      <Hero />
      <TopCategory />
      <TodayBest />
    </>
  );
}
