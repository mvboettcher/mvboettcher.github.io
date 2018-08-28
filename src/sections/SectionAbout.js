import React from 'react'

const SectionAbout = () => {
  return (
    <div className="primary-container" style={{ backgroundColor: '#006494' }}>
      <div className="title-about">About Me</div>
      <hr
        className="divider"
        style={{ backgroundColor: '#e8f1f2', marginBottom: 50 }}
      />
      <div className="about-paragraph">
        I'm a full-stack software developer living in Charleston, SC and I'm
        always looking for opportunities to challenge myself and improve my
        programming skills. When I'm not coding, I like drinking craft beer,
        shooting pool, and going on the occasional camping trip.
      </div>
      <center className="btn-align">
        <button className="btn">LEARN MORE</button>
      </center>
    </div>
  )
}

export default SectionAbout
