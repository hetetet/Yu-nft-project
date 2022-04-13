import React from 'react'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import TopNavigation from '../../common/TopNavigation'
import { CollectionTab } from '../../../models/collectionTab'

const CollectionItems = dynamic(() => import('./items'))
const CollectionActivity = dynamic(() => import('./activity'))

const style = {
  titleContainer: `pt-[4rem] flex flex-col items-center justify-center`,
  title: `text-center font-bold text-4xl`,
  navBarContainer: `pt-[4rem] item-center z-1 sticky top-0 mb-6 flex justify-center space-x-5 border-b border-gray-200 bg-white`,
  navBar: `pb-5 scrollbar-hide mx-5 flex h-10 items-center justify-between overflow-x-auto overflow-y-hidden`,
}

interface Params {
  slug: string | string[]
}

const CollectionTabs = ({ slug }: Params) => {
  const router = useRouter()
  const { tab } = router.query
  const isLoading = false
  const compareTab = (CollectionTab: CollectionTab) => {
    return (
      typeof tab === 'string' &&
      tab.toLowerCase() === CollectionTab.toLowerCase()
    )
  }

  return (
    <>
      <div className={style.titleContainer}>
        <div className={style.title}> Explore Collections</div>
      </div>
      <div className={style.navBarContainer}>
        <div className={style.navBar}>
          <TopNavigation
            selectedTab={tab ?? CollectionTab.Items}
            baseUrl={`/collection/${slug}`}
            options={Object.values(CollectionTab)}
            disabled={isLoading}
            renderItem={(item: CollectionTab) => item}
          />
        </div>
      </div>
      {(typeof tab === 'undefined' || compareTab(CollectionTab.Items)) && (
        <CollectionItems slug={slug} />
      )}
      {compareTab(CollectionTab.Activity) && <CollectionActivity />}
    </>
  )
}

export default CollectionTabs
