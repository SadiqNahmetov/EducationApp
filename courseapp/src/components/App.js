import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './navbar/Navbar';
import Slider from './slider/Slider';



function App() {
  return (
    <>
      <div className='container'>
        <MyNavbar />
      </div>
      <Slider />
    </>
  );
}

export default App;
