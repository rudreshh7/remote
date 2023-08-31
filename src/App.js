import './App.css';
import Sidebar from './components/dashboard/Sidebar';
import Header from './components/dashboard/Header';
import Main from './components/dashboard/Main';

function App() {
  return (
    <div className="App">
      <div className="rudresh">
      <Sidebar />
      {/* Header and Main */}
      <div>
      <Header/>
      <div>
      <Main/>
      </div>
      
      </div>
      

      </div>
      


      
     
    </div>
  );
}

export default App;
