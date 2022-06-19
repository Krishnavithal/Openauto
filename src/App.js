import './App.css';
import Home from './components/Home/home';
import Details from './components/Details/mobileDetail';
import Header from './components/Header/header';
import { useTheme, useMediaQuery } from "@mui/material"

function App() {
  const theme = useTheme();
  const xsView = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <div className="home">
      <Header hideLeftActions={xsView} />
      <Home />
      <Details />
    </div>
  );
}

export default App;
