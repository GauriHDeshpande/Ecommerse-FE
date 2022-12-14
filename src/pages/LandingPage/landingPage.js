import React, { useEffect, useState } from 'react';
import './landingPage.css';
import Navbar from "../../components/Navbar/Navbar";
import { getAllCategory } from '../../api/category';

const LandingPage = () => {
  const [categories, setCategories] = useState([]);

    const fetchCategories = async () => {
      try {
        const result = await getAllCategory();
        console.log(result);
        setCategories(result.data);
      } catch (error) {
        console.log(error);
      }
    }

    useEffect(() => {
      fetchCategories();
    }, []);
  const renderComponents = () =>{
    return(
      <>
      <Navbar/>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className='home-title'>Welcome to Online Shopping...</h2>
          </div>
          <div className="col-12">
            <div className="category-list">
              <div className="category-item">
                All Products
              </div>
              {
                categories.map(category => (
                  <div className="category-item" key={category.id}>
                    {category.name}
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
      </>
    )
  }
  return (
    renderComponents()
  )
}

export default LandingPage;
