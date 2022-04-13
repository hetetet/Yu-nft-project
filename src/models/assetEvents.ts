export interface AssetEvents {
  next: string
  previous: any
  asset_events: AssetEvent[]
}

export interface AssetEvent {
  approved_account: any
  asset: Asset
  asset_bundle: any
  auction_type?: string
  bid_amount?: string
  collection_slug: string
  contract_address: string
  created_date: string
  custom_event_name: any
  dev_fee_payment_event: any
  dev_seller_fee_basis_points?: number
  duration?: string
  ending_price?: string
  event_type: string
  from_account?: FromAccount
  id: number
  is_private?: boolean
  owner_account: any
  payment_token?: PaymentToken
  quantity: string
  seller?: Seller
  starting_price?: string
  to_account?: ToAccount
  total_price?: string
  transaction?: Transaction
  winner_account?: WinnerAccount
  listing_time?: string
}

export interface Asset {
  id: number
  num_sales: number
  background_color: any
  image_url: string
  image_preview_url: string
  image_thumbnail_url: string
  image_original_url: string
  animation_url: string
  animation_original_url: string
  name: string
  description: any
  external_link: string
  asset_contract: AssetContract
  permalink: string
  collection: Collection
  decimals: any
  token_metadata: string
  is_nsfw: boolean
  owner: Owner
  token_id: string
}

export interface Collection {
  name: string
  id: string
  displayData: DisplayData
  slug: string
  isMintable: boolean
  isSafelisted: boolean
  isVerified: boolean
}

export interface DisplayData {
  cardDisplayStyle: string
}
export interface AssetContract {
  address: string
  asset_contract_type: string
  created_date: string
  name: string
  nft_version: any
  opensea_version: any
  owner: number
  schema_name: string
  symbol: string
  total_supply: any
  description: string
  external_link: string
  image_url: string
  default_to_fiat: boolean
  dev_buyer_fee_basis_points: number
  dev_seller_fee_basis_points: number
  only_proxied_transfers: boolean
  opensea_buyer_fee_basis_points: number
  opensea_seller_fee_basis_points: number
  buyer_fee_basis_points: number
  seller_fee_basis_points: number
  payout_address: string
}

export interface Owner {
  user: User
  profile_img_url: string
  address: string
  config: string
}

export interface User {
  username: string
}

export interface FromAccount {
  user: User
  profile_img_url: string
  address: string
  config: string
}

export interface PaymentToken {
  symbol: string
  address: string
  image_url: string
  name: string
  decimals: number
  eth_price: string
  usd_price: string
}

export interface Seller {
  user: User
  profile_img_url: string
  address: string
  config: string
}

export interface ToAccount {
  user: User
  profile_img_url: string
  address: string
  config: string
}

export interface Transaction {
  block_hash: string
  block_number: string
  from_account: FromAccount
  id: number
  timestamp: string
  to_account: ToAccount
  transaction_hash: string
  transaction_index: string
}

export interface WinnerAccount {
  user: User
  profile_img_url: string
  address: string
  config: string
}
