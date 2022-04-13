export interface Assets {
  next: string
  previous: any
  assets: Asset[]
}

export interface Asset {
  id: number
  num_sales: number
  background_color: any
  image_url: string
  image_preview_url: string
  image_thumbnail_url: string
  image_original_url: string
  animation_url?: string
  animation_original_url: string
  name: string
  description: string
  external_link: any
  asset_contract: AssetContract
  permalink: string
  collection: Collection
  decimals: number
  token_metadata: string
  is_nsfw: boolean
  owner: Owner
  sell_orders: any
  creator: Creator
  traits: Trait[]
  last_sale: any
  top_bid: any
  listing_date: any
  is_presale: boolean
  transfer_fee_payment_token: any
  transfer_fee: any
  token_id: string
}

export interface AssetContract {
  address: string
  asset_contract_type: string
  created_date: string
  name: string
  nft_version: string
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

export interface Collection {
  banner_image_url: string
  chat_url: any
  created_date: string
  default_to_fiat: boolean
  description: string
  dev_buyer_fee_basis_points: string
  dev_seller_fee_basis_points: string
  discord_url: string
  display_data: DisplayData
  external_url: string
  featured: boolean
  featured_image_url: any
  hidden: boolean
  safelist_request_status: string
  image_url: string
  is_subject_to_whitelist: boolean
  large_image_url: string
  medium_username: any
  name: string
  only_proxied_transfers: boolean
  opensea_buyer_fee_basis_points: string
  opensea_seller_fee_basis_points: string
  payout_address: string
  require_email: boolean
  short_description: any
  slug: string
  telegram_url: any
  twitter_username: string
  instagram_username: any
  wiki_url: any
  is_nsfw: boolean
}

export interface DisplayData {
  card_display_style: string
}

export interface Owner {
  user?: User
  profile_img_url: string
  address: string
  config: string
}

export interface User {
  username?: string
}

export interface Creator {
  user: User
  profile_img_url: string
  address: string
  config: string
}

export interface Trait {
  trait_type: string
  value: any
  display_type: any
  max_value: any
  trait_count: number
  order: any
}
