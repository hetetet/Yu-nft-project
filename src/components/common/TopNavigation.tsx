import React from 'react'
import Link from 'next/link'

const style = {
  wrapper: `flex justify-between text-gray-400`,
  container: `flex justify-center overflow-x-auto space-x-8`,
}

interface Params<T> {
  selectedTab: string | string[] | undefined
  options: T[]
  disabled: boolean
  baseUrl: string
  renderItem: (item: T) => React.ReactNode
}

const TopNavigation = <T extends string>({
  selectedTab,
  options,
  disabled,
  baseUrl,
  renderItem,
}: Params<T>) => {
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        {options?.map((item, index) => {
          return (
            <Link
              key={index}
              href={`${baseUrl}${
                baseUrl.indexOf('?') >= 0 ? '&' : '?'
              }tab=${item}`.toLowerCase()}
            >
              <a
                className={`w-full whitespace-nowrap text-[#808080] hover:text-black ${
                  (selectedTab === item.toLocaleLowerCase() ||
                    renderItem(item) === selectedTab) &&
                  'border-b-4 border-primary'
                }`}
              >
                {renderItem(item)}
              </a>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default TopNavigation
