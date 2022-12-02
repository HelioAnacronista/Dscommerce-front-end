import './style.css';
import ButtonInverse from "../../components/ButtonInverse";
import ButtonPrimary from "../../components/ButtonPrimary";
import HeaderClient from "../../components/HeaderCliet";
import ProductDetailsCard from "../../components/ProductDetailsCard";

export default function ProductDetails() {

   return (
      <>
         <HeaderClient></HeaderClient>
         <main>
            <section id="product-details-section" className="dsc-container">
               <ProductDetailsCard></ProductDetailsCard>
               <div className="dsc-btn-page-container">
                  <ButtonPrimary></ButtonPrimary>
                  <ButtonInverse></ButtonInverse>
               </div>
            </section>
         </main>
      </>
   );
}