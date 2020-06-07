import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';
import Modal from './components/Modal';
import Blog from './components/Blog';
import DetailMainPost from './components/Blog/DetailMainPost';
import DetailFeaturedPost1 from './components/Blog/DetailFeaturedPost1';
import DetailFeaturedPost2 from './components/Blog/DetailFeaturedPost2';

class App extends React.Component {

  render() {
    return (
   <React.Fragment>
     <NavBar/>
     <Switch>
       <Route exact path="/" component={ProductList}/>
       <Route path="/details" component={Details}/>
       <Route path="/cart" component={Cart}/>
       <Route path="/blog" component={Blog}/>
       <Route path="/detailmainpost" component={DetailMainPost}/>
       <Route path="/detailfeaturedpost1" component={DetailFeaturedPost1}/>
       <Route path="/detailfeaturedpost2" component={DetailFeaturedPost2}/>
       <Route component={Default}/>    
     </Switch>
     <Modal/>
   </React.Fragment>
    );
  }
}

export default App;
