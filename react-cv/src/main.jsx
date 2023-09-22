import React from 'react'
import ReactDOM from 'react-dom/client'
import Section1 from './components/Section1/Section1.jsx'
import Section2 from './components/Section2/Section2.jsx'
import Section3 from './components/Section3/Section3.jsx'
import Section4 from './components/Section4/Section4.jsx'
import Footer from './components/Footer/Footer.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Footer/>
      
  
  </React.StrictMode>,
)
