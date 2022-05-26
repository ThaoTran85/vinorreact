import Accessories from './components/Accessories';
import Contact from './components/Contact';
import Customer from './components/Customer';
import Decoration from './components/Decoration';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Map from './components/Map';
import Products from './components/Products';
import Send from './components/Send';
import Share from './components/Share';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="l-main">
        <Home />
        <Share />
        <Decoration />
        <Products />
        <Accessories />
        <Send />
        <Customer />
        <Contact />
        <Map />
      </main>
      <Footer />
    </div>
  );
}

export default App;
