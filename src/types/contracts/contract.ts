
interface TokenConstant {
  address: string,
  abi: any,
}

export interface TokenPairConstant {
  token1: TokenConstant,
  token2: TokenConstant,
  uniswap: string,
  geyser: string,
}

export interface TokenInfo {
  name: string,
  address: string,
  decimals: string,
}