import React, { FC } from 'react'
import { IProjectPage } from '../interfaces/IProjectPage'
import { ProjectPageContainer } from '../styles/pages/ProjectPage'

const ProjectPage : FC<IProjectPage> = ({ id }) => {
  return (
    <ProjectPageContainer id={id}>ProjectPage</ProjectPageContainer>
  )
}

export default ProjectPage