import ContextProvider from '../Context/Context'
import Hero from '../Hero/Hero'
import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'
import Submenu from '../Submenu/Submenu'
import './App.css'

function App() {

  return (
    <>
    <main className='relative'>
      <ContextProvider>
      <Navbar/>
      <Hero/>
      <Sidebar/>
      <Submenu/>
    </ContextProvider>
    </main>
    
    </>
  )
}

export default App
