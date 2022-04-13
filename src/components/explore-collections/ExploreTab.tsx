import React from 'react'
import useSWR from 'swr'
import Error from 'next/error'
import { Collections } from '../../models/collections'
import CollectionCard from '../collectionCard'

const style = {
  container: `flex flex-wrap items-center justify-center`,
  // container: `items-center grid
  // grid-cols-1 gap-x-4 gap-y-8 mx-2
  // sm:grid-cols-2 sm:gap-x-2 sm: mx-2
  // lg:grid-cols-3 md:gap-x-6 lg: mx-6
  // xl:grid-cols-4 xl:gap-x-8 xl: mx-8,
  // 2xl:grid-cols-5 2xl:gap-x-10 wxl: mx-8`,
}

const fetcher = async (url: RequestInfo) => {
  const res = await fetch(url)
  const data = await res.json()

  if (res.status !== 200) {
    throw new Error(data.message)
  }
  return data
}

interface Params {
  slug: string
}

const ExploreTab = ({ slug }: Params) => {
  const { data, error } = useSWR<Collections>(
    `/api/collections/${slug}`,
    fetcher
  )

  if (error) return <Error statusCode={404} />

  if (!data) return <div>Loading...</div>
  const collections = data.data.collections || data.data.trendingCollections

  if (!collections) {
    return <Error statusCode={400} />
  }

  return (
    <div className={style.container}>
      {collections.edges.map((collection: any, index: number) => (
        <CollectionCard key={index} collection={collection} />
      ))}
    </div>
  )
}

export default ExploreTab
