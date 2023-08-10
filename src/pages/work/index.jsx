import React from 'react'
import MainLayout from "../../layouts/main";
import WorkHeader from '../../components/Work-header';
import Portfolio2 from '../../components/Portfolio2';

function index() {
  return (
    <>
    <MainLayout>
        <WorkHeader
            title={{
            first: "Design Works",
            //second: "Design Works"
            //second: "By Infinfinite168design",
            }} 
            //title = "text"
            // content="Design Works"
        />
        <Portfolio2 />
    </MainLayout>
    </>
  )
}

export default index