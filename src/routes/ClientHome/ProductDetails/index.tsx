import './style.css';
import ButtonInverse from "../../../components/ButtonInverse";
import ButtonPrimary from "../../../components/ButtonPrimary";
import ProductDetailsCard from "../../../components/ProductDetailsCard";
import * as productServices from '../../../services/product-services'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function ProductDetails() {

   const params = useParams();

   const product = productServices.findById(Number(params.productId));


   return (
      <>
         <main>
            <section id="product-details-section" className="dsc-container">

               {
                  product &&
                  <ProductDetailsCard product={product} />
               }

               <div className="dsc-btn-page-container">
                  <ButtonPrimary text="Comprar" />
                  <Link to={`/`}>
                  <ButtonInverse text="Inicio" />
                  </Link>
               </div>
            </section>
         </main>
      </>
   );
}