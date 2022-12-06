import './style.css';
import ButtonInverse from "../../components/ButtonInverse";
import ButtonPrimary from "../../components/ButtonPrimary";
import HeaderClient from "../../components/HeaderCliet";
import ProductDetailsCard from "../../components/ProductDetailsCard";

import { ProductDTO } from '../../models/product';

//Variavel temporaria
const product: ProductDTO = {
   id: 2,
   name: "Smart Tv",
   description: "Esta Tv é muito bonita",
   imgUrl : "https://i.zst.com.br/thumbs/12/3e/37/1553975765.jpg",
   price : 2500.99,
   categories: [
      {
         id : 2,
         name : "Eletronicos"
      },
      {
         id : 1,
         name : "Computadores"
      },
      {
         id : 3,
         name : "Importados"
      }
   ]
}

export default function ProductDetails() {

   return (
      <>
         <HeaderClient></HeaderClient>
         <main>
            <section id="product-details-section" className="dsc-container">
               <ProductDetailsCard product={product} />
               <div className="dsc-btn-page-container">
                  <ButtonPrimary></ButtonPrimary>
                  <ButtonInverse></ButtonInverse>
               </div>
            </section>
         </main>
      </>
   );
}