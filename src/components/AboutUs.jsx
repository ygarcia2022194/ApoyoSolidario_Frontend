import React from 'react';
import styled from 'styled-components';
import img from "../assets/descarga.png"

const Container = styled.div`
  font-family: Arial, sans-serif;
  color: #333;
`;


const MainSection = styled.main`
  background: #f9f9f9;
  padding: 50px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 20px;
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  color: #666;
  margin-bottom: 50px;
`;

const Section = styled.section`
  margin: 50px 0;
`;

const SectionTitle = styled.h3`
  font-size: 2rem;
  margin-bottom: 20px;
`;

const SectionText = styled.p`
  font-size: 1rem;
  color: #666;
  max-width: 600px;
  margin: 0 auto 30px;
`;

const Card = styled.div`
  background: #3700b3;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin: 20px;
  display: inline-block;
  vertical-align: top;
  width: calc(33.333% - 40px);
`;

const CardTitle = styled.h4`
  color: white;
  font-size: 1.2rem;
  margin-bottom: 10px;
`;

const CardText = styled.p`
  font-size: 0.9rem;
  color: white;
`;

const CardImage = styled.img`
  width: 100%;
  border-radius: 8px;
`;

const Footer = styled.footer`
  background: #202020;
  color: #fff;
  padding: 20px;
  text-align: center;
`;


export const AboutUsPage = () => {
  return (
    <Container>
      <MainSection>
        <Title>Sobre Nosotros</Title>
        <Subtitle>Grupo enfocado en mostrar las ideas y las ayudas que fundaciones
             hacen para de alguna manera ayudar a las personas, con becas entre muchas cosas más.
        </Subtitle>
        <Section>
          <SectionTitle>Información</SectionTitle>
          <SectionText>La información se muestra por medio de publicaciones, pudes ver las publicaciones,
             al presionar las publicaciones, encontrarás como puedes ayudar, la manera en que trabajan
              entre otras cosas más.
          </SectionText>
        </Section>
        <Section>
          <SectionTitle>Equipo</SectionTitle>
          <div>
            <Card>
            <CardImage src={img} alt="Eoin Hinchy" />
              <CardTitle >Scrum</CardTitle>
              <CardText>Yojhan Standley</CardText>
            </Card>
            <Card>
            <CardImage src={img} alt="Eoin Hinchy" />
              <CardTitle>Developer</CardTitle>
              <CardText>Gary Galindo</CardText>
            </Card>
            <Card>
                <CardImage src={img} alt="Eoin Hinchy" />
              <CardTitle>Developer</CardTitle>
              <CardText>Adolfo González</CardText>
            </Card>
            <Card>
            <CardImage src={img} alt="Eoin Hinchy" />
              <CardTitle>Developer</CardTitle>
              <CardText>Diego</CardText>
            </Card>
          </div>
        </Section>
        <Section>
          <SectionTitle>
          </SectionTitle>
          <SectionText></SectionText>
          
          
        </Section>
        
      </MainSection>
      <Footer>
      </Footer>
    </Container>
  );
};