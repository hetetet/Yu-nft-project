import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
import path from 'path'
import { Collections } from '../../../models/collections'
import { log } from '../../../utils/log'

const postsDirectory = path.join(process.cwd(), './src/mock')

interface Params {
  query: {
    category: string
  }
}

export default function collectionHandler(
  { query }: Params,
  res: NextApiResponse<Collections>
) {
  try {
    const fileName = query.category + '.json'
    const filePath = path.join(postsDirectory, fileName)
    const rawdata = fs.readFileSync(filePath, 'utf8')

    let collections = JSON.parse(rawdata) as Collections
    res.status(200).json(collections)
  } catch (error: any) {
    log('error in api: ', error)
    res.status(404)
  }
}
