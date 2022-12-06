import './style.css';



import HeaderClient from '../../components/HeaderCliet';
import SearchBar from '../../components/SearchBar';
import CatalogCard from '../../components/CatalogCard';
import ButtonNextPage from '../../components/ButtonNextPage';

import { ProductDTO } from '../../models/product';

//Variavel temporaria
const product: ProductDTO = {
   id: 2,
   name: "Smart Tv",
   description: "Esta Tv é muito bonita",
   imgUrl: "https://i.zst.com.br/thumbs/12/3e/37/1553975765.jpg",
   price: 2500.99,
   categories: [
      {
         id: 2,
         name: "Eletronicos"
      },
      {
         id: 1,
         name: "Computadores"
      },
      {
         id: 3,
         name: "Importados"
      }
   ]
}

export default function Catalog() {

   return (
      <>
         <HeaderClient></HeaderClient>
         <main>
            <section id="catalog-section" className="dsc-container">
               <SearchBar></SearchBar>

               <div className="dsc-catalog-cards dsc-mb20 dsc-mt20">
                  
                  
                  <CatalogCard product={product} />
                  <CatalogCard product={product} />
                  <CatalogCard product={product} />
                  <CatalogCard product={product} />
                  <CatalogCard product={product} />
                  <CatalogCard product={product} />
                  <CatalogCard product={product} />
                  <CatalogCard product={product} />
                  <CatalogCard product={product} />
                  <CatalogCard product={product} />
                  <CatalogCard product={product} />
                  <CatalogCard product={product} />
                  <CatalogCard product={product} />
                  <CatalogCard product={product} />
                  <CatalogCard product={product} />

                  


               </div>

               <ButtonNextPage></ButtonNextPage>
            </section>
         </main>
      </>
   );
}