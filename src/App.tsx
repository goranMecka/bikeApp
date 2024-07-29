


import './App.css'
import NavBarComponent from './Components/NavBarComponent/NavBarComponent'

import 'bootstrap/dist/css/bootstrap.min.css';

import Footer from './Components/FooterComponent/Footer';

import Filter from './Components/FiltersComponent/Filters';






function App() {
 

  return (
<>
 <NavBarComponent/>
 
    <div className='row p-2 mt-5'>
    
    
    <Filter/>
  
   <Footer/>
  
  
    
    </div>
  </>
  )
}

export default App
