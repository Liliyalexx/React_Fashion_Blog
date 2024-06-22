import React from 'react';
import Header from './components/Header';
import Article from './components/Article';
import Footer from './components/Footer';
import './styles/style.css';

function App() {
  return (
    <div className='App'>
      <Header />
      <main>
        <Article
          title='Summer Trends 2024'
          date='June 21, 2024'
          imgSrc='summer-trends.jpg'
          altText='Summer Trends 2024'
          excerpt='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at libero nec libero posuere auctor. Integer dapibus felis nec urna blandit...'
        />
        <Article
          title='Top 10 Winter Coats'
          date='June 15, 2024'
          imgSrc='winter-coats.jpg'
          altText='Top 10 Winter Coats'
          excerpt='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at libero nec libero posuere auctor. Integer dapibus felis nec urna blandit...'
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
