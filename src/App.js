import './App.css';
import Cosmetics from './components/Cosmetics/Cosmetics';

import Shoes from './components/Shoes/Shoes';

function App() {
  return (
    <div className="App">
      <header>
            <Cosmetics /> <Shoes/> 
      </header>
    </div>
  );
}

export default App;
