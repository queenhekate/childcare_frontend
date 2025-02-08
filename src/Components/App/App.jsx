import React, { useEffect, useState } from 'react'
import './App.css'
import Header from '../Header/Header'
import Main from '../Main/Main'
import Booking from '../Booking/Booking'
import Footer from '../Footer/Footer';

function App() {

return <div className="page">
  <div className="page-content">
    <Header />
    <Main />
    <Booking />
    <Footer />
  </div>
  </div>
}

export default App
