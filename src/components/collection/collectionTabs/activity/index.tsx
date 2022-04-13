import React from 'react'
import ActivityFilter from './ActivityFilter'
import ActivityChart from './ActivityChart'
import ActivityList from './ActivityList'

const style = {
  container: `flex flex-wrap w-[100%] border border`,
  wrapper: `flex border border w-[100vw]`,
  childwrap: `flex sticky top-0`,
}

const CollectionActivity = () => {
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <div className={style.childwrap}>
          <ActivityFilter />
        </div>
        <div>
          <div className={style.container}>
            <ActivityChart />
            <ActivityList />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CollectionActivity
