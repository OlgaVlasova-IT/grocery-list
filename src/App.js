
import './App.css';
import img1 from './man.jpg'
import img2 from './shopping.jpg'
import List from './List';

function App() {
  return (
    <div className="App">
      <img src={img1} alt="man doing grocery shopping" width="250" />
    <List />
      <img src={img2} alt="man doing grocery shopping" width="250" />
      
    </div>
    
  );
}

export default App;
