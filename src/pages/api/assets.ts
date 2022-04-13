// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
import path from 'path'
import { Assets } from '../../models/assets'

const postsDirectory = path.join(process.cwd(), './src/mock')

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Assets>
) {
  const { slug } = req.query
  const filePath = path.join(postsDirectory, `${slug}/assets.json`)
  const rawdata = fs.readFileSync(filePath, 'utf8')
  let data = JSON.parse(rawdata)

  res.status(200).json(data)
}
