import React, { useState } from 'react';
import styled from 'styled-components';
import BurguerButton from './BurguerButton';

export const Navbar = ({ onNavClick }) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <NavContainer>
      <h2>Apoyo <span>Solidario</span></h2>
      <div className='burguer'>
        <BurguerButton clicked={clicked} handleClick={handleClick} />
      </div>
      <div className={`links ${clicked ? 'active' : ''}`}>
        <a onClick={() => { handleClick(); onNavClick('home'); }} href="#home">Inicio</a>
        <a onClick={() => { handleClick(); onNavClick('publicaciones'); }} href="#publicaciones">Publicaciones</a>
        <a onClick={() => { handleClick(); onNavClick('sobrenosotros'); }} href="#sobrenosotros">Sobre nosotros</a>
        <a onClick={() => { handleClick(); onNavClick('contacto'); }} href="#contacto">Contacto</a>
        <a onClick={() => { handleClick(); onNavClick('opciones'); }} href="#opciones">Opciones</a>
      </div>
      <BgDiv className={`initial ${clicked ? 'active' : ''}`}></BgDiv>
    </NavContainer>
  );
};

export default Navbar;

const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  padding: .4rem;
  background-color: #333;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h2 {
    color: white;
    font-weight: 400;
    span {
      font-weight: bold;
    }
  }

  .burguer {
    z-index: 1002;
    display: block; /* Siempre visible en pantallas pequeñas */

    @media(min-width: 768px) {
      display: none; /* Ocultar en pantallas grandes */
    }
  }

  .links {
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: #333;
    text-align: center;
    transition: all .5s ease;
    z-index: 1001;
    
    a {
      color: white;
      font-size: 2rem;
      display: block;
      padding: 1rem 0;
    }

    @media(min-width: 768px) {
      display: flex; /* Mostrar en pantallas grandes */
      position: initial;
      height: auto;
      background: transparent;
      justify-content: flex-end;

      a {
        font-size: 1rem;
        padding: 0;
        margin: 0 1rem;
      }
    }
  }

  .links.active {
    display: block;
  }
`;

const BgDiv = styled.div`
  background-color: #222;
  position: fixed;
  top: -1000px;
  left: -1000px;
  width: 100%;
  height: 100%;
  z-index: 999;
  transition: all .6s ease;

  &.active {
    border-radius: 0 0 80% 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  @media(min-width: 768px) {
    display: none;
  }
`;
