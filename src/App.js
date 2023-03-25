import './App.css';
import Cosmetics from './components/Cosmetics/Cosmetics';
import RvallageNas from './components/rvallageNas/RvallageNas';
import Shoes from './components/Shoes/Shoes';

function App() {
  return (
    <div className="App">
      <header>
            <Cosmetics /> <Shoes/> <RvallageNas/>
      </header>
    </div>
  );
}

export default App;
