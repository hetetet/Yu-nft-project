import React from 'react'
import Browse from '../components/Home/browse/browse'
import CreateAndSell from '../components/Home/createAndSell/createAndSell'
import Hero from '../components/Home/Hero/hero'
import MeetOpenSea from '../components/Home/meetOpenSea/meetOpenSea'
import NotableDrop from '../components/Home/notableDrop/notableDrop'
import Resource from '../components/Home/resourcePart/resource'
import TopCollection from '../components/Home/topCollection/topCollection'
import TrendingHome from '../components/Home/trending/trendingHome'
import Layout from '../components/Layout'

const index = () => {
  return (
    <Layout title={''} description={''}>
      <Hero />
      <NotableDrop />
      <TopCollection />
      <TrendingHome />
      <CreateAndSell />
      <Resource />
      <Browse />
      <MeetOpenSea />
    </Layout>
  )
}

export default index
