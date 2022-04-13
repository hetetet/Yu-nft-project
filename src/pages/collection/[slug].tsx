import React from 'react'
import { useRouter } from 'next/router'
import Layout from '../../components/Layout'
import Collection from '../../components/collection'

const index = () => {
  const router = useRouter()
  const { slug } = router.query

  if (slug === undefined) {
    return <></>
  }
  return (
    <Layout title={''} description={''}>
      <Collection slug={slug} />
    </Layout>
  )
}

export default index
