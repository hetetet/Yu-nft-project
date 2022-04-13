import React from 'react'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { ExploreCollectionTab } from '../../models/exploreCollectionTab'
import TopNavigation from '../common/TopNavigation'

const ExploreTab = dynamic(() => import('./ExploreTab'))

const style = {
  titleContainer: `pt-[4rem] flex flex-col items-center justify-center`,
  title: `text-center font-bold text-4xl`,
  navBarContainer: `pt-[4rem] item-center z-1 sticky mb-6 flex justify-center space-x-5 border-b border-gray-200 bg-white`,
  navBar: `pb-[1rem] mx-5 flex items-center justify-between overflow-x-auto overflow-y-hidden`,
}

const ExploreCollections = () => {
  const router = useRouter()
  const { tab } = router.query
  const isLoading = false

  return (
    <>
      <div className={style.titleContainer}>
        <div className={style.title}> Explore Collections</div>
      </div>
      <div className={style.navBarContainer}>
        <div className={style.navBar}>
          <TopNavigation
            selectedTab={tab ?? ExploreCollectionTab.Trending}
            baseUrl={`/explore-collections`}
            options={Object.values(ExploreCollectionTab)}
            disabled={isLoading}
            renderItem={(item: ExploreCollectionTab) => item}
          />
        </div>
      </div>
      <ExploreTab
        slug={typeof tab === 'undefined' ? 'trending' : (tab as string)}
      />
    </>
  )
}

export default ExploreCollections
