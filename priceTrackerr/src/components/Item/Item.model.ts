export interface ItemProps {
  readonly marketCoin: Coin;
}

export interface Coin {
  readonly id: string;
  readonly name: string;
  readonly symbol: string;
  readonly image: string;
  readonly current_price: number;
  readonly market_cap_rank: number;
  readonly price_change_percentage_24h: number;
  readonly market_cap: number;
}
