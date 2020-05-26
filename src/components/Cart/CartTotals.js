import React from 'react';
import {Link} from 'react-router-dom';
import PayPalButton from './PayPalButton';

function CartTotals ({value, history}) { 
   const {cartSubTotal, cartTax, cartTotal, clearCart} = value; 
   console.log(process.env)
   return(
      <React.Fragment>
      <div className="container-fluid">
      <div className="row">
      <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
      <Link to="/">
      <button className="btn btn-outline-danger text-uppercase mb-3 px-5 mr-3" type="button" onClick={()=>clearCart()}>
      clear cart
      </button>
      </Link>
      <h5>
      <span className="text-title">subtotal :</span>
      <strong className="mr-3">£{cartSubTotal}</strong>
      </h5>
      <h5>
      <span className="text-title">tax :</span>
      <strong className="mr-3">£{cartTax}</strong>
      </h5>
      <h5>
      <span className="text-title">total :</span>
      <strong className="mr-3">£{cartTotal}</strong>
      </h5>
      <div className="mr-3">
      <PayPalButton total={cartTotal} clearCart={clearCart} history={history}/>
      </div>
      </div>
      </div>
      </div>
      </React.Fragment>
      )}
      
      
      export default CartTotals;