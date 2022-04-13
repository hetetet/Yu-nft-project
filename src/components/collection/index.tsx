import React from 'react'
import { log } from '../../utils/log'
import CollectionHeader from './CollectionHeader'
import CollectionTabs from './collectionTabs'

interface Params {
  slug: string | string[]
}

const Collection = ({ slug }: Params) => {
  return (
    <>
      <CollectionHeader slug={slug} />
      <CollectionTabs slug={slug} />
    </>
  )
}

export default Collection
