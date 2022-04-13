import React from 'react'
import { useRouter } from 'next/router'
import Layout from '../components/Layout'
import UserPage from '../components/user'

export default function User() {
  const router = useRouter()
  const { slug } = router.query

  if (slug === undefined) {
    return <></>
  }

  return (
    <Layout title={''} description={''}>
      <UserPage slug={slug} />
    </Layout>
  )
}
