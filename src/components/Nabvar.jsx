import React, { useState } from 'react';
import styled from 'styled-components';
import BurguerButton from './BurguerButton';

export const Navbar = ({ onNavClick }) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <>
      <NavContainer>
        <h2>Apoyo <span>Solidario</span></h2>
        <div className={`links ${clicked ? 'active' : ''}`}>
          <a onClick={() => { handleClick(); onNavClick('home'); }} href="#home">Inicio</a>
          <a onClick={() => { handleClick(); onNavClick('publicaciones'); }} href="#publicaciones">Publicaciones</a>
          <a onClick={handleClick} href="#sobrenosotros">Sobre nosotros</a>
          <a onClick={handleClick} href="#contacto">Contacto</a>
          <a onClick={handleClick} href="#opciones">Opciones</a>
        </div>
        <div className='burguer'>
          <BurguerButton clicked={clicked} handleClick={handleClick} />
        </div>
        <BgDiv className={`initial ${clicked ? ' active' : ''}`}></BgDiv>
      </NavContainer>
    </>
  );
};

export default Navbar;

const NavContainer = styled.nav`
  position: fixed;  /* Cambiar a fixed para que siempre esté encima */
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;  /* Asegúrate de que el z-index sea mayor que el de las cards */
  
  h2 {
    color: white;
    font-weight: 400;
    span {
      font-weight: bold;
    }
  }
  padding: .4rem;
  background-color: #333;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    color: white;
    text-decoration: none;
    margin-right: 1rem;
  }

  .links {
    position: absolute;
    top: -700px;
    left: -2000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all .5s ease;
    z-index: 1001;  /* Asegúrate de que los links tienen un z-index mayor que las cards */
    
    a {
      color: white;
      font-size: 2rem;
      display: block;
    }

    @media(min-width: 768px) {
      position: initial;
      margin: 0;

      a {
        font-size: 1rem;
        color: white;
        display: inline;
      }
      display: block;
    }
  }

  .links.active {
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 30%;
    left: 0;
    right: 0;
    text-align: center;

    a {
      font-size: 2rem;
      margin-top: 1rem;
      color: white;
    }
  }

  .burguer {
    z-index: 1002;  /* Asegúrate de que el botón de hamburguesa tiene un z-index mayor que las cards */
    @media(min-width: 768px) {
      display: none;
    }
  }
`;

const BgDiv = styled.div`
  background-color: #222;
  position: fixed;  /* Cambiar a fixed para que siempre esté encima */
  top: -1000px;
  left: -1000px;
  width: 100%;
  height: 100%;
  z-index: 999;  /* Asegúrate de que el z-index sea mayor que el de las cards */
  transition: all .6s ease;

  &.active {
    border-radius: 0 0 80% 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;