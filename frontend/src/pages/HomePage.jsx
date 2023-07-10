import React from 'react' ;
import Header from '../components/Layout/Header';
import BelowHeader from '../components/Route/BelowHeader';
import Categories from '../components/Route/Categories';
import BestDeals from '../components/Route/BestDeals';
import FeaturedProduct from '../components/Route/FeaturedProduct';
import Events from '../components/Route/events/Events';
import Sponsored from '../components/Route/Sponsored';
import Footer from '../components/Layout/Footer';

function HomePage() {
  return (
    <div>
      <Header activeHeading={1}/>
      <BelowHeader />
      <Categories />
      <BestDeals />
      <Events />
      <FeaturedProduct />
      <Sponsored />
      <Footer />
    </div>
  )
}

export default HomePage
