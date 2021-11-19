export interface ICoin {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

export interface CoinInfo {
  id: string;
  name: string;
  symbol: string;
  parent: Parent;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
  tags: Tag[];
  team: Team[];
  description: string;
  message: string;
  open_source: boolean;
  hardware_wallet: boolean;
  started_at?: string;
  development_status: string;
  proof_type: string;
  org_structure: string;
  hash_algorithm: string;
  contract: string;
  platform: string;
  contracts: Contract[];
  links: {
    explorer: [];
    facebook: [];
    reddit: [];
    source_code: [];
    website: [];
    youtube: [];
    medium: [];
  };
  links_extended: ILink[];
  whitepaper: {
    link: string;
    thumbnail: string;
  };
  first_data_at: string;
  last_data_at: string;
}

export interface CoinPrice {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
  quotes: Quotes;
}

interface Contract {
  contract: string;
  platform: string;
  type: string;
}

interface Team {
  id: string;
  name: string;
  position: string;
}

interface Parent {
  id: string;
  name: string;
  symbol: string;
}

interface Tag {
  id: string;
  name: string;
  coin_counter: number;
  ico_counter: number;
}

interface ILink {
  url: string;
  type: string;
  stats: Object;
}

interface Quotes {
  BTC: QuoteElement;
  USD: QuoteElement;
}

interface QuoteElement {
  price: number;
  volume_24: number;
  volume_24h_change_24h: number;
  market_cap: number;
  market_cap_change_24h: number;
  percent_change_15m: number;
  percent_change_30m: number;
  percent_change_1h: number;
  percent_change_6h: number;
  percent_change_12h: number;
  percent_change_24h: number;
  percent_change_7d: number;
  percent_change_30d: number;
  percent_change_1y: number;
  ath_price: number;
  ath_date: string;
  percent_from_price_ath: number;
}
