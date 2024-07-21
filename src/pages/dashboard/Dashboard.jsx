import React, { useState } from 'react';
import {Navbar} from '../../components/Nabvar.jsx';
import {CardList} from '../../components/CardList.jsx';
import {HomePage} from '../../components/HomePage.jsx';

export const Dashboard = () => {
  const [activeView, setActiveView] = useState('home');

  const handleNavClick = (view) => {
    setActiveView(view);
  };

  return (
    <>
      <Navbar onNavClick={handleNavClick} />
      {activeView === 'home' && <HomePage />}
      {activeView === 'publicaciones' && <CardList />}

    </>
  );
};

export default Dashboard;
