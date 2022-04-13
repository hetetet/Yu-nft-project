export interface Collections {
  data: Data
}

export interface Data {
  trendingCollections?: TrendingCollections
  collections?: TrendingCollections
}

export interface TrendingCollections {
  edges: Edge[]
  pageInfo: PageInfo
}

export interface Edge {
  node: Node
  cursor: string
}

export interface Node {
  slug: string
  logo: string
  banner: string
  description: string
  name: string
  shortDescription: any
  isVerified: boolean
  owner?: Owner
  stats: Stats
  defaultChain: DefaultChain
  relayId: string
  id: string
  __typename: string
}

export interface Owner {
  address: string
  config?: string
  isCompromised: boolean
  user: User
  displayName?: string
  imageUrl: string
  id: string
}

export interface User {
  publicUsername?: string
  id: string
}

export interface Stats {
  totalSupply: number
  id: string
}

export interface DefaultChain {
  identifier: string
}

export interface PageInfo {
  endCursor: string
  hasNextPage: boolean
}
