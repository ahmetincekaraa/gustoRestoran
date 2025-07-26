
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


