import React from 'react';
import "./homepage.css";


export const HomePage = () => {
  return (
    <div className="home-page">
      <header className="home-header">
        <h1>Bienvenido a Fundaciones de Ayuda</h1>
        <p>Encuentra información sobre fundaciones y lugares que ayudan a las personas de distintas formas.</p>
      </header>
      <section className="categories">
        <h2>Áreas de Ayuda</h2>
        <div className="category-list">
          <div className="category-item">
            <h3>Educación</h3>
            <p>Fundaciones que ofrecen becas, programas de tutoría, y recursos educativos.</p>
          </div>
          <div className="category-item">
            <h3>Salud</h3>
            <p>Fundaciones que brindan atención médica, apoyo psicológico, y programas de salud.</p>
          </div>
          <div className="category-item">
            <h3>Alimentación</h3>
            <p>Fundaciones que proporcionan comidas, bancos de alimentos, y programas de nutrición.</p>
          </div>
          <div className="category-item">
            <h3>Vivienda</h3>
            <p>Fundaciones que ayudan con albergues, viviendas asequibles, y asistencia para el alquiler.</p>
          </div>
        </div>
      </section>
      <footer className="home-footer">
        <p>&copy; 2024 Fundaciones de Ayuda. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};