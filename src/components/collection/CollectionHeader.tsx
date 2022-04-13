import React from 'react'

interface Params {
  slug: string | string[] | undefined
}

const CollectionHeader = ({ slug }: Params) => {
  return (
    <>
      <div className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow">
        <div className="flex flex-1 flex-col p-8">
          <img
            className="mx-auto h-32 w-32 flex-shrink-0 rounded-full"
            src="https://c4.wallpaperflare.com/wallpaper/142/420/52/cinema-4d-digital-art-wallpaper-thumb.jpg"
            alt=""
          />
          <h3 className="mt-6 text-sm font-medium text-gray-900">{slug}</h3>
          <dl className="mt-1 flex flex-grow flex-col justify-between">
            <dt className="sr-only">Owner</dt>
            <dd className="text-sm text-gray-500">Created by {slug}</dd>
            <dt className="sr-only">Role</dt>
            <dd className="mt-3">
              <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                {slug}
              </span>
            </dd>
          </dl>
        </div>
      </div>
      <div className="flex justify-center">
        items, owners, floor price, volume traded{' '}
      </div>
    </>
  )
}

export default CollectionHeader
