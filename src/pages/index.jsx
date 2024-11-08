
import Home from "./home/index"
import axios from "axios";
export default function Index({categoryList, productList}) {
  return (
    <div className="body">
     <link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"
/>
<div>

<Home categoryList={categoryList} productList={productList} />

</div>
    </div>
  );
}

export const getServerSideProps = async () => {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/categories`);
  const product = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/products`);
  return {
    props: {
      categoryList: res.data ? res.data : [],
      productList: product.data ? product.data : [],
    },
  };
};
