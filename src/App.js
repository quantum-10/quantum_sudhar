import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Skills";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Sociallinks from "./components/Sociallinks";
import Footer from "./components/Footer";


function App() {
  return (
    <>
     <Navbar/>
     <Home/>
     <About/>
     <Portfolio/>
     <Experience/>
     <Contact/>
     <Footer/>
     
     <Sociallinks/>

    </>
  );
}

export default App;
