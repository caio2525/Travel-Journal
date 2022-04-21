import logo from './logo.svg';
import './App.css';
import Header from "./components/Header"
import Travel from "./components/Travel"
import data from "./data"

function App() {
  return (
    <div>
      <Header/>
      <main>
        {
          data.map((travel, key) => {
            return(
              <Travel travel={travel}/>
            )
          })
        }

      </main>
    </div>
  );
}

export default App;
