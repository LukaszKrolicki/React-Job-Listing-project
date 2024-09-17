import React from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import HomeCards from './components/HomeCards.jsx'
import JobListings from './components/JobListings.jsx'
import ViewAllJovs from './components/ViewAllJovs.jsx'
const App = () => {
  return (
    <>
    <Navbar />
    <Hero title="Test Title" subTitle="This is subtitle"/>
    <HomeCards></HomeCards>
    <JobListings></JobListings>
    <ViewAllJovs></ViewAllJovs>
    </>
  )
}

export default App
