import React from "react";
import Banner from "../components/Banner";
import Cards from "../components/Cards";

export default function Home(props) {
  const { handleSetItem } = props;
  return (
    <>
      <Banner page="home" />
      <Cards handleSetItem={handleSetItem} />
    </>
  );
}
