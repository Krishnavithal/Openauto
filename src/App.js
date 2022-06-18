import './App.css';
import Home from './components/Home/home';
import Details from './components/Details/mobileDetail';
import Header from './components/Header/header';

function App() {
  return (
    <div className="home">
      <Header />
      <Home />
      <Details />
    </div>
  );
}

export default App;
