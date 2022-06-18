import './App.css';
import Home from './components/Home/home';
import Details from './components/Mobile/mobileDetail';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';

function App() {
  return (
    <div className="home">
      <Header />
      <Home />
      <Footer />
      <Details />
      <Footer />
    </div>
  );
}

export default App;
