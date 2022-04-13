import React from 'react'
import TransferItems from '../../explore-collections/Activity/Transfer/transferItem'

const style = {
  container: `flex flex-col`,
}

const ActivityInfo = () => {
  return (
    <div className={style.container}>
      <TransferItems />
    </div>
  )
}

export default ActivityInfo
