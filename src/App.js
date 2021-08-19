import logo from './logo.svg';
import './App.css';
import Routes from './Routes';
import proteinBarImg from './proteinBar.jpg'; 
import questBar from './quest.jpg';
import slimJim from './slimJim.jpg';

function App() {
  const snacks = [
    {name: 'Protein Bar', img: proteinBarImg}, 
    {name: 'Candy Bar Disguised As Protein Bar', img: questBar}, 
    {name: 'Slim Jim', img: slimJim}
  ];
  
  console.log(snacks);

  return <Routes snacks={snacks} />;
}

export default App;
