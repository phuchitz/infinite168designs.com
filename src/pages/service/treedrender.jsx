import React from 'react'
import MainLayout from '../../layouts/main'
import PageHeader from '../../components/Page-header'
import ProjectIntro from '../../components/Project-Intro'

function treedrender() {
  return (
    <>
    <MainLayout>
        <PageHeader 
            title="3D Render"
            fullPath={[
                { id: 1, name: "home", url: "/"},
                { id: 2, name: "service", url: "/service/"},
                { id: 3, name: "treedrender", url: "/service/treedrender"}
            ]}
            // image="/public/assets/img/service/sitesurvey/"
        />
        <ProjectIntro />
    </MainLayout>
    </>
  )
}

export default treedrender