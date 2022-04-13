import React from 'react'
import AssetFilter from './filter'
import AssetList from './list'

const style = {
  container: `flex`,
  wrapper: ` flex flex-1`,
  bodywrapper: `flex flex-col`,
}

const Assets = () => {
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <AssetFilter />
      </div>
      <div className={style.bodywrapper}>
        <AssetList />
      </div>
    </div>
  )
}

export default Assets
