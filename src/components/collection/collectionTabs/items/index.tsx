import React from 'react'
import ItemsFilter from './ItemsFilter'
import ItemsList from './ItemsList'

const style = {
  container: `flex w-[100vw]`,
  bodyFilter: ``,
  bodycard: ``,
}

interface Params {
  slug: string | string[]
}

const CollectionItems = ({ slug }: Params) => {
  return (
    <div className={style.container}>
      <div className={style.bodyFilter}>
        <ItemsFilter />
      </div>
      <div className={style.bodycard}>
        <ItemsList slug={slug} />
      </div>
    </div>
  )
}

export default CollectionItems
