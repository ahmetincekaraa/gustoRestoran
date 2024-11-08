import Carousel from "../../../components/Carousel";
import Campaigns from "../../../components/Campaigns";
import MenuWrapper from "../../../components/product/MenuWrapper";
import About from "../../../components/About";
import Rezervation from "../../../components/Rezervation";
import Customers from "../../../components/customers/Customers";

const Index = ({ categoryList, productList }) => {
  return (
    <>
      <Carousel />
      <Campaigns />
      <MenuWrapper categoryList={categoryList} productList= {productList}/>
      <About />
      <Rezervation />
      <Customers />
    </>
  );
};



export default Index;
