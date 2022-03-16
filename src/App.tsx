import './App.css';
import AboutUs from './components/AboutUs/AboutUs';
import ContactUs from './components/ContactUs/ContactUs';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import MainBlock from './components/MainBlock/MainBlock';
import Portfolio from './components/Portfolio/Portfolio';

const App = () => {
  
  return (
    <div >
      <div className='app-wrapper'>
        <Header />
         <MainBlock />
        <Portfolio />
        <AboutUs />
        <ContactUs />
        <Footer /> 
      </div>

    </div>
  );
}

export default App;
