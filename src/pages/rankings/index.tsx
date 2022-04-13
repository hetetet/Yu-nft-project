import React from 'react'
import Layout from '../../components/Layout'
import ActivityPage from '../../components/stats/activityPage/activityPage'

export default function index() {
  return (
    <Layout title={''} description={''}>
      <ActivityPage />
    </Layout>
  )
}
