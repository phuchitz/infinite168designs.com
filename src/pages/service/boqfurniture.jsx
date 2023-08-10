import React from 'react'
import MainLayout from '../../layouts/main'
import PageHeader from '../../components/Page-header'
import ProjectIntro from '../../components/Project-Intro'

function boqfurniture() {
  return (
    <>
    <MainLayout>
        <PageHeader 
            title="BOQ Furniture"
            fullPath={[
                { id: 1, name: "home", url: "/"},
                { id: 2, name: "service", url: "/service/"},
                { id: 3, name: "boqfurniture", url: "/service/boqfurniture"}
            ]}
            // image="/public/assets/img/service/sitesurvey/"
        />
        <ProjectIntro />
    </MainLayout>
    </>
  )
}

export default boqfurniture