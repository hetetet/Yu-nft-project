import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { log } from '../../utils/log'

const style = {
  container: ` flex hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]]`,
  wrapper: `border-solid-gray border-2 flex-auto  w-[26rem] h-[25rem] my-10 mx-5 rounded-2xl overflow-hidden cursor-pointer `,
  imgContainer: ` w-full overflow-hidden flex justify-center items-center`,
  nftImg: `w-full h-[12rem] object-cover`,
  profilewrap: ` w-12 h-12 mt-[-2rem] border-4 border-white rounded-full`,
  displayName: `text-blue-600 visited:text-purple-600 hover:text-blue-800`,
  name: `font-bold`,
  details: `p-3 flex flex-col justify-center items-center -mt-10`,
  description: `flex mt-3 text-center text-[#808080] text-ellipsis overflow-hidden line-clamp-3`,
}

interface Params {
  collection: any
}

const CollectionCard = ({ collection }: Params) => {
  const { cursor, node } = collection
  log('cursor: ', cursor)
  log('node: ', node)

  const [displayName, setDisplayName] = useState<string>()

  useEffect(() => {
    if (node && node.owner) {
      const name = node.owner.displayName
        ? node.owner.displayName
        : node.owner.address.substring(2, 8).toUpperCase()
      setDisplayName(name)
    }
  }, [node])

  return (
    <div className={style.container}>
      <Link href={`/collection/${node.slug}`}>
        <div className={style.wrapper}>
          <div className={style.imgContainer}>
            <Image
              src={
                node.banner ||
                node.logo ||
                'https://c4.wallpaperflare.com/wallpaper/142/420/52/cinema-4d-digital-art-wallpaper-thumb.jpg'
              }
              className={style.nftImg}
              width="420"
              height="199"
            />
          </div>
          <div className={style.details}>
            <Image
              src={
                node.owner?.imageUrl ||
                'https://c4.wallpaperflare.com/wallpaper/142/420/52/cinema-4d-digital-art-wallpaper-thumb.jpg'
              }
              className={style.profilewrap}
              width="44"
              height="44"
            />

            <div className={style.name}>{node.name || 'Not Available'}</div>
            <div>
              {node.owner && (
                <>
                  by{' '}
                  <Link
                    href={`/${node.owner?.displayName || node.owner.address}`}
                  >
                    <a className={style.displayName}>{displayName}</a>
                  </Link>
                </>
              )}
            </div>
            <div className={style.description}>
              {node.description || 'Not Available'}
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default CollectionCard
