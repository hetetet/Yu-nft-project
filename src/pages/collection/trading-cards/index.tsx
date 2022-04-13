import React from 'react'
import ExploreTab from '../../../components/explore-collections/ExploreTab'
import Layout from '../../../components/Layout'

export default function index() {
  return (
    <Layout title={''} description={''}>
      <ExploreTab slug={'trading cards'} />
    </Layout>
  )
}
