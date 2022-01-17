export interface AssetsItemProps {
  readonly assetItem: {
    readonly name: string;
    readonly ticker: string;
    readonly image: string;
    readonly currentPrice: number;
    readonly quantity: number;
    readonly priceChangePercentage: number;
  };
}
