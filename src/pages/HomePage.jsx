import React from 'react'
import Hero from '../components/Hero'
import HomeCards from '../components/HomeCards'
import JobListings from '../components/JobListings'
import ViewAllJovs from '../components/ViewAllJovs'

const HomePage = () => {
  return (
    <>
    <Hero></Hero>
    <HomeCards></HomeCards>
    <JobListings isHome={true}></JobListings>
    <ViewAllJovs></ViewAllJovs>
    </>
  )
}

export default HomePage
