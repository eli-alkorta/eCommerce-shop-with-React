import React from 'react';
import Title from './Title';
import {ProductConsumer} from '../context';
import Product from './Product';
import styled from 'styled-components';

class ProductList extends React.Component {
  
  render() {
    return (
      <React.Fragment>
      <div className="py-5">
      <div className="container">
      <Title name="M'Art" title="-My products"/>
      <div className="row">
      <ProductConsumer>
      {(value) =>{
        return value.products.map(product =>{
          return <Product key={product.id} product={product}/>})
        }}
        </ProductConsumer>
        </div>
        </div>
        </div>
        <FooterWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
        <div className="navbar-brand">
        <small>Marta Artacho Abascal &copy;2020</small>
        </div>
        <div className="ml-auto d-flex d-xs-block">
        <a href="http://martaartacho.blogspot.com/" target="_blank" rel="noopener noreferrer" title="Blogger.com" className="nav-item ml-5">
        <span className="mr-2">
        <i id="footer-icon" className="fab fa-blogger"/>
        </span>
        </a>
        <a href="https://www.instagram.com/marta_artacho_abascal/?hl=es" target="_blank" rel="noopener noreferrer" title="Instagram" className="nav-item ml-5">
        <span className="mr-2">
        <i id="footer-icon" className="fab fa-instagram"/>
        </span>
        </a>
        <a href="https://www.facebook.com/martaartacho" target="_blank" rel="noopener noreferrer" title="Facebook" className="nav-item ml-5">
        <span className="mr-2">
        <i id="footer-icon" className="fab fa-facebook-square"/>
        </span>
        </a>
        <a href="mailto:marta@gmail.com" target="_blank" rel="noopener noreferrer" title="Email" className="nav-item ml-5">
        <span className="mr-2">
        <i id="footer-icon" className="far fa-envelope"/>
        </span>
        </a>
        </div>
        </FooterWrapper>
        </React.Fragment>
        );
      }
    }
    
    const FooterWrapper = styled.nav`
    background: var(--lightBlue);
    height: 90px;
    `
    
    export default ProductList;