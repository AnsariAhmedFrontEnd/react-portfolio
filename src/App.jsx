import styles from './App.module.css'
import  Hero  from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Experiance from './components/Experiance/Experiance';

function App() {
  
  

  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Experiance />
    </div>
  )
}

export default App
