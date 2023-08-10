import React from 'react'
import MainLayout from '../../layouts/main'
import PageHeader from '../../components/Page-header'
import ProjectIntro from '../../components/Project-Intro'

function shopdrawing() {
  return (
    <>
    <MainLayout>
        <PageHeader 
            title="Shop Drawing"
            fullPath={[
                { id: 1, name: "home", url: "/"},
                { id: 2, name: "service", url: "/service/"},
                { id: 3, name: "shopdrawing", url: "/service/shopdrawing"}
            ]}
            // image="/public/assets/img/service/sitesurvey/"
        />
        <ProjectIntro />
    </MainLayout>
    </>
  )
}

export default shopdrawing