import Nav from "./components/Nav"
import './App.css'
import { NavProvider } from "./components/NavContext";
import LandingPage from "./components/LandingPage";

function App() {

  return (
    <div className="mx-auto sm:max-w-screen-2xl p-3">
      <div>
        <Nav />
      </div>

      <div className="container mx-auto sm:p-3">
        <main>
          <LandingPage />
        </main>
      </div>
    </div>
  ); 


}


export default App
