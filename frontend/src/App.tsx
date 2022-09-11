import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import HeaderImage from "./components/HeaderImage"
import SalesCard from "./components/SalesCard"

function App() {
  return (
    <>
    <ToastContainer />
      <HeaderImage />
      <main>
        <section id="sales">
          <div className="dsmeta-container">
            <SalesCard/>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
