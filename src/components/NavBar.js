import React from 'react';
import {Link} from 'react-router-dom';
import bulb from '../bulb.png';
import ButtonContainer from './Button';
import styled from 'styled-components';

class NavBar extends React.Component {

    render() {
      return (
     <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
       {/* 
https://www.iconfinder.com/icons/335392/academic_academy_bulb_education_electricity_energy_handdrawn_idea_knowledge_lamp_learning_light_lightbulb_power_school_science_student_teach_teaching_university_icon
Creative Commons (Attribution 3.0 Unported);
       https://www.iconfinder.com/ymbproperties */}
       <Link to="/">
       <img src={bulb} alt="shop" className="navbar-brand"/>
       </Link>
       <ul className="navbar-nav d-flex d-xs-block ml-auto">
         <li className="nav-item ml-5">
           <Link to="/" className="nav-link">
             products
           </Link>
         </li>
       </ul>
       <div className="ml-auto">
       <Link to="/cart" className="ml-auto">
         <ButtonContainer headingCart>
           <span className="mr-2">
           <i className="fas fa-cart-plus"/>
           </span>
           my cart
         </ButtonContainer>
       </Link>
       <Link to="/blog" className="nav-item ml-5">
         <ButtonContainer headingCart>
           blog
         </ButtonContainer>
       </Link>
       </div>
     </NavWrapper>
      );
    }
  }

  const NavWrapper = styled.nav`
  background: var(--lightBlue);
  .nav-link{
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
  }
  
  `
  
  
  export default NavBar;
  