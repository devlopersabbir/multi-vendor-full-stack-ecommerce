"use client";
import { Divider } from "@chakra-ui/react";
import MainContainer from "./components/container/MainContainer";
import Hero from "./components/home/hero/Hero";
import TodayBest from "./components/home/todayBest/TodayBest";
import TopCategory from "./components/home/topcategory/TopCategory";
import ByBrand from "./components/home/byBrand/ByBrand";
import Product from "./components/products/productCard/Product";
import Headings from "./components/common/Headings";
import BackBanner from "./components/home/cashBackBanner/BackBanner";
import FlashSell from "./components/home/flash/FlashSell";

export default function Home() {
  return (
    <>
      <Hero />
      <TopCategory />
      <MainContainer>
        <Divider />
      </MainContainer>
      <TodayBest />
      <MainContainer>
        <Divider />
      </MainContainer>
      <ByBrand />
      <MainContainer>
        <Divider />
      </MainContainer>
      <MainContainer>
        <Headings text="Weekly Popular Products" />
        <Product />
      </MainContainer>
      <BackBanner />
      <FlashSell />
    </>
  );
}
