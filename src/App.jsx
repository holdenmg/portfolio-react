import { Outlet } from 'react-router-dom';
import Nav from './components/Navigation';
import Header from './components/Header';
import Footer from './components/Footer';
import background from './assets/R0000242.png'


function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <>
     
      <Nav />
      
      <main style={{ backgroundImage: `url(${background})`, backgroundSize: "cover", backgroundPosition: "center center", backgroundRepeat: "no-repeat", height: "1000px",
      width: "100%",}} className="">
      <Header />
        <Outlet />
       
      
      </main>
    </>
  );
}

export default App;