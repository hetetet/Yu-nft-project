import React from 'react'
import useSWR from 'swr'
import Error from 'next/error'

const fetcher = (url: RequestInfo) => fetch(url).then((res) => res.json())

interface Params {
  slug: string | string[]
}

const UserPage = ({ slug }: Params) => {
  const { data, error } = useSWR(`/api/user/${slug}`, fetcher)

  if (error) {
    return <Error statusCode={400} />
  }

  if (data === undefined) {
    return <Error statusCode={404} />
  }
  return <div>User</div>
}

export default UserPage
