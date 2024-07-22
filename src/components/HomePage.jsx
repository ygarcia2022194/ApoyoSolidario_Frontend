import React from 'react';
import styled from 'styled-components';
import mainImage from '../assets/imagenPrincipal.png';

export const HomePage = () => {
  return (
    <Container>
      <Navbar>
        <NavLeft>
          <Date>DATE XX, 2024</Date>
          <Product>PRODUCT / FEATURE NAME</Product>
        </NavLeft>
        <NavRight>
          <CompanyName>COMPANY NAME</CompanyName>
        </NavRight>
      </Navbar>
      <MainContent>
        <Title>Apoyo solidario</Title>
        <Image src={mainImage} alt="Apoyo Solidario" />
        <Overlay>
          <Heading>Apoyo Solidario</Heading>
          <Subheading>Ayudamos a los que ayudan</Subheading>
          <Description>
            La misión de la página es potenciar la visibilidad de fundaciones con poco apoyo, ayudándolas a ganar reconocimiento y apoyo. A través de la difusión de información clave sobre estas organizaciones, la página busca ampliar su alcance y conectar con donantes, voluntarios y socios potenciales. Su objetivo es proporcionar un espacio para que las fundaciones sean vistas y apoyadas, facilitando la colaboración y el respaldo necesario para cumplir con sus objetivos y hacer una diferencia significativa en sus comunidades.
          </Description>
          <Duration></Duration>
        </Overlay>
      </MainContent>
      <Footer>
        <FooterLink href="#">About us</FooterLink>
        <FooterLink href="#">Contact</FooterLink>
      </Footer>
    </Container>
  );
};


const Container = styled.div`
  font-family: Arial, sans-serif;
  color: white;
`;

const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: black;
  padding: 10px;
`;

const NavLeft = styled.div`
  display: flex;
`;

const Date = styled.div`
  margin-right: 10px;
`;

const Product = styled.div``;

const NavRight = styled.div``;

const CompanyName = styled.div``;

const MainContent = styled.div`
  position: relative;
  text-align: center;
  color: white;
`;

const Title = styled.h1`
  margin-top: 0;
  background-color: black;
  padding: 10px 0;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const Overlay = styled.div`
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -20%);
  text-align: center;
  width: 80%;
`;

const Heading = styled.h1`
  font-size: 50px;
  margin: 0;
`;

const Subheading = styled.h2`
  font-size: 30px;
  margin: 10px 0;
`;

const Description = styled.p`
  font-size: 20px;
  margin: 20px 0;
  line-height: 1.5;
`;

const Duration = styled.div`
  font-size: 20px;
`;

const Footer = styled.div`
  display: flex;
  justify-content: center;
  background-color: black;
  padding: 10px;
`;

const FooterLink = styled.a`
  color: white;
  margin: 0 15px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
