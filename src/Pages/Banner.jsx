import React from 'react'
import TypewriterComponent from 'typewriter-effect'
export const Banner = () => {
  return (
    <div className="container-fluid">
      <div id='banner'>
        <div id='banner-box'>
          <TypewriterComponent
        options={{
          strings:["","<h2>FASHION CHANGING ALWAYS</h2>"],
          autoStart:true,
          loop:true,
        }}/>
        </div>
      </div>
    </div>

  )
}
