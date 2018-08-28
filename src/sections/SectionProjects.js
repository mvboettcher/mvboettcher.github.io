import React from 'react'
import ProjectModal from '../components/ProjectModal'

const SectionProject = () => {
  return (
    <div className="primary-container" style={{ backgroundColor: '#13293d' }}>
      <div className="title-about">What I've Done</div>
      <hr className="divider" style={{ backgroundColor: '#e8f1f2' }} />
      <div
        className="column"
        style={{
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <ProjectModal />
      </div>
    </div>
  )
}

export default SectionProject
