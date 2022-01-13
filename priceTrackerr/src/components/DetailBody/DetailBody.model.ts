export interface DetailBodyProps {
  readonly name: string;
  readonly symbol: string;
  readonly currentPrice: {
    readonly usd: number;
  };
  readonly prices: any;
  readonly priceChangePercentage: number;
}
