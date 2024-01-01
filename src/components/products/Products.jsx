import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './Products.css';
import ProductInfo from './ProductInfo';
import Navbar1 from '../navbar1/Navbar1';
import Navbar2 from '../navbar2/Navbar2';
import Footer1 from '../footer1/Footer1';
import Footer2 from '../footer2/Footer2';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCard, setSelectedCard] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('/api/v1/products')
      .then((response) => response.json())
      .then((responseData) => {
        if (responseData.success && responseData.products) {
          // Log the contents of the products array
          console.log('Products Array:', responseData.products);
          setData(responseData.products);
          setIsLoading(false);
        } else {
          console.error('Invalid API response:', responseData);
          setIsLoading(false);
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      });
  }, []);
  if (isLoading) {
    return <div>Loading...</div>;
  }

  const openModal = (card) => {
    setSelectedCard(card);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedCard(null);
  };

  const button = ['All', 'Medicines', 'Personol Care', 'Baby Care', 'Health Devices'];

  // Filter products based on selected category and search term
  const filteredProducts = data.filter((product) => {
    if (selectedCategory === 'All' || product.category.trim() === selectedCategory.trim()) {
      return product.name.toLowerCase().includes(searchTerm.toLowerCase());
    }
    return false;
  });

  return (
    <>
      <Navbar1 />
      <Navbar2 />
      <div className="container">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-sm-12">
              <div className="buttons">
                {button.map((btn) => (
                  <button
                    key={btn}
                    className={selectedCategory === btn ? 'Button3 active' : 'Button3'}
                    onClick={() => setSelectedCategory(btn)}
                  >
                    {btn}
                  </button>
                ))}
              </div>
            </div>
            <div className="col-lg-5 col-sm-12">
              <div className="search-bar d-flex">
                <input
                  type="text"
                  className="input-1"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <FontAwesomeIcon
                  icon={faSearch}
                  style={{ fontSize: 'larger', color: 'black' }}
                  className="mx-1"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="container-1">
        <div className="row cards">
          {filteredProducts.map((card) => (
            <div key={card.id} className="col-lg-3 col-sm-12">
              <div className="card-11">
                <img src={card.image} alt={card.name} className="card-image" />
                <a href="#" className="card-title1" onClick={() => openModal(card)}>
                  {card.name}
                </a>
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>

      {showModal && selectedCard && <ProductInfo cardData={selectedCard} closeModal={closeModal} />}
      <Footer1 />
      <Footer2 />
    </>
  );
};

export default Products;
