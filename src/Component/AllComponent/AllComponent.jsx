import React from 'react'
import Home from '../Home'
import About from '../About'
import GetInTouch from '../GetInTouch'
import Service from '../Service'
import Portfoliyo from '../Portfoliyo'

export default function AllComponent() {
  return (
    <>
      <div id="home"><Home /></div>
      <div id="about"><About /></div>
      <div id="service"><Service /></div>
      <div id="portfolio"><Portfoliyo /></div>
      <div id="contact"><GetInTouch /></div>
    </>
  )
}
