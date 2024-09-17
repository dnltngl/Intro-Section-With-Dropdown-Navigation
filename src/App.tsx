import Nav from "./components/Nav"
import './App.css'
import { NavProvider } from "./components/NavContext";
import LandingPage from "./components/LandingPage";

function App() {

  return (
    <>
      <div className="">
        <Nav />
      </div>

      <div className="container mx-auto sm:max-w-screen-2xl sm:p-3">
        <main>
          <LandingPage />
        </main>
      </div>
    </>
  ); 


}


export default App
