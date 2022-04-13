import React from 'react'
import BodyActivity from './BodyActivity/bodyActivity'
import ActivityFilter from './FilterActivity/filterActivity'

const style = {
  container: `flex flex-wrap w-[100%] border border`,
  wrapper: `flex border border w-[100vw]`,
  childwrap: `flex sticky top-0`
}


const ActivityPage = () => {
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <div className={style.childwrap}>
          <ActivityFilter />
        </div>
        <div>
          <BodyActivity />
        </div>
      </div>
    </div>
  )
}

export default ActivityPage