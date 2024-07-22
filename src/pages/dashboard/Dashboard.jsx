import React, { useState } from 'react';
import {Navbar} from '../../components/Nabvar.jsx';
import {CardList} from '../../components/CardList.jsx';
import {HomePage} from '../../components/HomePage.jsx';
import {AboutUsPage} from "../../components/AboutUs.jsx"
import { NewsFeed } from '../../components/NewsFeed.jsx';

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
      {activeView === 'aboutUs' && <AboutUsPage />}
      {activeView === 'noticias' && <NewsFeed />}

    </>
  );
};

export default Dashboard;
