import React from 'react'
import { useRouter } from 'next/router'
import Error from 'next/error'
import AssetDetail from '../../../components/assets/detail'

const Detailpage = () => {
  const router = useRouter()
  const { id } = router.query

  console.log('id: ', id)

  if (id === undefined || !Array.isArray(id)) {
    return <Error statusCode={404} />
  }

  const ids = id as string[]

  // parse ids[0] as provider
  const chain = ids.length > 2 ? ids[0] : 'Ethereum'

  return <AssetDetail chain={chain} contractAddress={ids[1]} tokenId={ids[2]} />
}

export default Detailpage
