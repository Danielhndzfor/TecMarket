import { useState, useEffect } from 'react';
import styles from './Home.module.css';
import { getProducts } from '../api/products';
import Buscar from '../assets/buscar.svg';
import Nav from '../App';
import Warning from '../assets/warning.svg';
import unLike from '../assets/unlike.svg';


interface Product {
  _id: string;
  title: string;
  price: number;
  stock: number;
  deliveryType: 'envio a domicilio' | 'retiro en tienda' | 'entrega personal';
  condition: 'nuevo' | 'usado' | 'seminuevo';
  category: string[];
  images: string[];
}

const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getProducts();
        setProducts(response.data as Product[]);
      } catch (error) {
        console.error('Error al obtener productos:', error);
      }
    };

    fetchData();
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(e.target.value);
  };

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filter ? product.category.includes(filter) : true;
    return matchesSearch && matchesFilter;
  });

  return (
    <>
      <Nav />
      <div className={styles.homeContainer}>
        <div className={styles.productListingContainer}>

          <div className={styles.actions}>
            <div className={styles.buscador}>
              <input
                className={styles.inputBuscar}
                type="text"
                placeholder="Buscar en TecMarket"
                value={searchQuery}
                onChange={handleSearchChange}
              />
              <button className={styles.btnBuscar}>
                <img src={Buscar} alt="buscar" className={styles.icoBuscar} />
              </button>
            </div>
            <div className={styles.filtro}>
              <label htmlFor="filtro">Filtrar por:</label>
              <select
                name="filtro"
                id="filtro"
                value={filter}
                onChange={handleFilterChange}
              >
                <option value="">Todas las categorías</option>
                <option value="envio a domicilio">Envío a domicilio</option>
                <option value="retiro en tienda">Retiro en tienda</option>
                <option value="entrega personal">Entrega personal</option>
              </select>
            </div>
          </div>
          <div className={styles.productsGrid}>
            {filteredProducts.map((product) => (
              <div className={styles.productCard} key={product._id}>
                <div className={styles.cardHeader}>
                  <img src={Warning} alt="advertencia" className={styles.warningIcon} />
                  <img src={unLike} alt="like" className={styles.likeIcon} />
                </div>
                <img
                  src={product.images.length > 0 ? product.images[0] : 'https://via.placeholder.com/200'}
                  alt={product.title}
                  className={styles.mainImage}
                  onError={(error) => {
                    console.log(`Error al cargar la imagen: ${product.images[0]}`, error);
                  }}
                />
                <div className={styles.info}>
                  <h3 className={styles.productTitle}>{product.title}</h3>
                  <p className={styles.productPrice}>Precio: ${product.price}</p>
                  <div className={styles.cardFooter}>
                    <div className={styles.rating}>0/5</div>
                    <button className={styles.viewMoreButton}>Ver más</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

