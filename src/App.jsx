
import axios from 'axios';
import './App.css'
import AxiosFetch from './Components/AxiosFetch/AxiosFetch';
import Navbar from './Components/Navbar/Navbar'
import Pricing from './Components/Pricing/Pricing';
import Recharts from './Components/Recharts/Recharts';

const pricingData = fetch("PricingCard.json").then((res) => res.json());
const axiosdata = axios.get('Axios.json');

function App() {


  return (
    <>
      <header>
        <Navbar></Navbar>



      </header>
      <main className=''>
        <Pricing pricingData={pricingData}></Pricing>



      </main>

      <aside>
        <AxiosFetch axiosdata={axiosdata}></AxiosFetch>
      </aside>
      <footer>

        <Recharts></Recharts>

      </footer>


    </>
  )
}

export default App
