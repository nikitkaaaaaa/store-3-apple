import React from "react";
import CategoryProducts from "../componets/category_products/CategoryProducts";
import Banner from "../componets/banner/Banner";
const Main = () => {
  return (
    <div style={{ paddingBottom: "100px", width: "1280px", margin: "auto" }}>
      <Banner />
      <CategoryProducts />
    </div>
  );
};

export default Main;
