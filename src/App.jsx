
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Pricing from './Components/Pricing/Pricing';
import Recharts from './Components/Recharts/Recharts';

const pricingData=fetch("PricingCard.json").then((res)=>res.json());

function App() {


  return (
    <>
    <header>
      <Navbar></Navbar>

      

    </header>
    <main className=''>
      <Pricing pricingData={pricingData}></Pricing>

    </main>
    <footer>

      <Recharts></Recharts>

    </footer>
   
    
    </>
  )
}

export default App
