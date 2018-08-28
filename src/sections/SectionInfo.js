import React from 'react'

const SectionInfo = () => {
  return (
    <div className="primary-container" style={{ backgroundColor: '#e8f1f2' }}>
      <div className="title-tools">Connect</div>
      <hr
        className="divider"
        style={{ backgroundColor: '#006494', marginBottom: 70 }}
      />
      <div className="row" style={{ justifyContent: 'center' }}>
        <div className="box-i">
          <a href="mailto:mvboettcher@gmail.com">
            <img src="/images/email-black-circle_icon.png" alt="email icon" />
          </a>
        </div>
        <div className="box-i">
          <a href="/images/max-boettcher_2018.pdf" target="_blank">
            <img src="/images/resume-black2_icon.png" alt="resume icon" />
          </a>
        </div>
        <div className="box-i">
          <a href="https://www.linkedin.com/in/maxboettcher/" target="_blank">
            <img
              src="/images/linkedin-circle-black_icon.png"
              alt="linkedin icon"
            />
          </a>
        </div>
        <div className="box-i">
          <a href="https://github.com/mvboettcher" target="_blank">
            <img src="/images/github-circle-black_icon.png" alt="github icon" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default SectionInfo
