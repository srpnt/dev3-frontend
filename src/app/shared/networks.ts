import { providers } from 'ethers'
import {
  Matic as TPMatic,
  Mumbai as TPMumbai,
} from '../../../dev3-tokenizer-library/deployments'
import ReconnectingWebSocket from 'reconnecting-websocket'

export enum ChainID {
  ETHEREUM_MAINNET = 1,
  MATIC_MAINNET = 137, // Polygon
  MUMBAI_TESTNET = 80001, // Polygon
  AURORA_MAINNET = 1313161554,
  GOERLI_TESTNET = 5,
  OPTIMISM = 10,
  ARBITRUM = 42161,
  AVALANCHE = 43114,
  BSC = 56,
  MOONRIVER = 1285,
  OASIS_EMERALD = 42262,
  CELO_MAINNET = 42220,
  CELO_TESTNET = 44787,
  GNOSIS_NETWORK = 100,
  FANTOM_NETWORK = 250,
  COINEX = 52,
  COINEX_TESTNET = 53,
}

export interface Network {
  chainID: ChainID
  name: string
  iconURL?: string
  shortName: string
  nativeCurrency: {
    name: string
    symbol: string
  }
  maxGasPrice: number
  rpcURLs: string[]
  wssRpcURLs?: string[]
  explorerURLs: string[]
  tokenizerConfig: TokenizerConfig
  ramp?: RampConfig
}

interface TokenizerConfig {
  apxRegistry: string
  issuerFactory: {
    basic: string
  }
  assetFactory: {
    basic: string
    transferable: string
    simple: string
  }
  cfManagerFactory: {
    basic: string
    vesting: string
  }
  queryService: string
  payoutService: string
  payoutManager: string
  nameRegistry: string
  campaignFeeManager: string
  defaultWalletApprover: string
  defaultStableCoin: string
}

interface RampConfig {
  swapAsset: string
  url?: string // needed only for testing environments
}

export const MaticNetwork: Network = {
  chainID: ChainID.MATIC_MAINNET,
  name: 'Polygon',
  shortName: 'matic',
  iconURL: 'https://cdn.iconscout.com/icon/free/png-256/polygon-token-4086725-3379855.png',
  nativeCurrency: {
    name: 'MATIC',
    symbol: 'MATIC',
  },
  maxGasPrice: 1500,
  rpcURLs: [
    'https://polygon-rpc.com'
  ],
  wssRpcURLs: [
  ],
  explorerURLs: ['https://polygonscan.com/'],
  tokenizerConfig: {
    apxRegistry: TPMatic.apxRegistry.address,
    issuerFactory: TPMatic.issuerFactory,
    assetFactory: TPMatic.assetFactory,
    cfManagerFactory: TPMatic.cfManagerFactory,
    queryService: TPMatic.queryService,
    payoutService: TPMatic.payoutService,
    payoutManager: TPMatic.payoutManager,
    nameRegistry: TPMatic.nameRegistry.address,
    campaignFeeManager: TPMatic.campaignFeeManager.address,
    defaultWalletApprover: TPMatic.walletApproverService.address,
    defaultStableCoin: '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174',
  },
  ramp: {
    swapAsset: 'MATIC',
  },
}

export const EthereumMainnet: Network = {
  chainID: ChainID.ETHEREUM_MAINNET,
  name: 'Ethereum',
  shortName: 'eth',
  iconURL: 'https://iconarchive.com/download/i109534/cjdowner/cryptocurrency-flat/Ethereum-ETH.ico',
  nativeCurrency: {
    name: 'ETH',
    symbol: 'ETH',
  },
  maxGasPrice: 20,
  rpcURLs: ['https://eth-rpc.gateway.pokt.network'],
  explorerURLs: ['https://etherscan.io/'],
  tokenizerConfig: {
    apxRegistry: '',
    issuerFactory: {
      basic: '0xCaf30A0B45B8E9A5f7310274f0FAec83cF307936',
    },
    assetFactory: {
      basic: '',
      transferable: '',
      simple: '',
    },
    cfManagerFactory: {
      basic: '',
      vesting: '',
    },
    queryService: '0x041e15af5ecbc0c93f106b2f6a7f5ffa847ef9e4',
    payoutService: '0xa3BFC3A48Ee93290bDa5a0eF0Ed22414262c3043',
    payoutManager: '0xa61AD00d16d2f40b7C3CC5339B8cBB8fD23972F5',
    nameRegistry: '0x6cbf0950e22ff08ba4a13ffd2443519e4cf56550',
    campaignFeeManager: '',
    defaultWalletApprover: '0x4b13e95bc24e983E3F55B11aB608508CF7D31d35',
    defaultStableCoin: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48', // custom stablecoin issued by filip
  },
}

export const MumbaiNetwork: Network = {
  chainID: ChainID.MUMBAI_TESTNET,
  name: 'Mumbai Testnet',
  shortName: 'mumbai',
  iconURL: 'https://cdn.iconscout.com/icon/free/png-256/polygon-token-4086725-3379855.png',
  nativeCurrency: {
    name: 'MATIC',
    symbol: 'MATIC',
  },
  maxGasPrice: 20,
  rpcURLs: ['https://matic-mumbai.chainstacklabs.com'],
  wssRpcURLs: [
  ],
  explorerURLs: ['https://mumbai.polygonscan.com/'],
  tokenizerConfig: {
    apxRegistry: TPMumbai.apxRegistry.address,
    issuerFactory: TPMumbai.issuerFactory,
    assetFactory: TPMumbai.assetFactory,
    cfManagerFactory: TPMumbai.cfManagerFactory,
    queryService: TPMumbai.queryService,
    payoutService: TPMumbai.payoutService,
    payoutManager: TPMumbai.payoutManager,
    nameRegistry: TPMumbai.nameRegistry.address,
    campaignFeeManager: TPMumbai.campaignFeeManager.address,
    defaultWalletApprover: TPMumbai.walletApproverService.address,
    defaultStableCoin: '0x1eDaD4f5Dac6f2B97E7F6e5D3fF5f04D666685c3',
  },
  ramp: {
    swapAsset: 'MATIC',
    url: 'https://ri-widget-staging.firebaseapp.com/',
  },
}

export const GoerliNetwork: Network = {
  chainID: ChainID.GOERLI_TESTNET,
  name: 'Görli Testnet',
  shortName: 'goerli',
  iconURL: 'https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/256/Ethereum-ETH-icon.png',
  nativeCurrency: {
    name: 'ETH',
    symbol: 'ETH',
  },
  maxGasPrice: 20,
  rpcURLs: ['https://rpc.ankr.com/eth_goerli'],
  explorerURLs: ['https://goerli.etherscan.io/'],
  tokenizerConfig: {
    apxRegistry: '0x95e1F87B3E5EC566CC0676DED8Ce992cE0E51Ed7',
    issuerFactory: {
      basic: '0x0361B0A1333A0BF88ce2c3a4d7192C5E8A5Efea9',
    },
    assetFactory: {
      basic: '0xE58FA32f73D0EeeaD05EFf3c769F596773D446c7',
      transferable: '0xB70E991eda75820Df751ddd90cC58a769f044c1d',
      simple: '0x0D4c488fA3339C3D68640964242252F7da3886FC',
    },
    cfManagerFactory: {
      basic: '0xa468ad0f01819D995191802A89148d268B04C750',
      vesting: '0x64F09Cc15d9359a68A75cfEB4711701160EA5178',
    },
    queryService: '0x5A22bc3a5078801CB0e8B5C61bb8361D16C8Ed73',
    payoutService: '',
    payoutManager: '',
    nameRegistry: '0x41b90C4C84f6388c29835CBA03Cd50D92fB24e8E',
    campaignFeeManager: '',
    defaultWalletApprover: '0x893152e259BdDEa9D42f935f38d7c2c88431c748',
    defaultStableCoin: '0x7A6E8B47ab83cA0374ef6D59a0B0459BCB5c0510', // custom stablecoin issued by filip
  },
}

export const AuroraNetwork: Network = {
  chainID: ChainID.AURORA_MAINNET,
  name: 'Aurora',
  shortName: 'aurora',
  iconURL: 'https://dynamic-assets.coinbase.com/04a9730129d20e0748b2319425853c788b5121350e77f68458dd421c92106e11c1ab2fa1dc92a6b697eb2b149ffee8b2ed5346914e2aa6a44e28d91296875375/asset_icons/542a05514a97115aa9eaad25e1905909e19874cc0abdbf43add5267904b19c55.png',
  nativeCurrency: {
    name: 'ETH',
    symbol: 'ETH',
  },
  maxGasPrice: 20,
  rpcURLs: ['https://mainnet.aurora.dev'],
  wssRpcURLs: [],
  explorerURLs: ['https://aurorascan.dev/'],
  tokenizerConfig: {
    apxRegistry: '',
    issuerFactory: {
      basic: '0x6da35932606866801762cBEC8698BD684d9D1699',
    },
    assetFactory: {
      basic: '',
      transferable: '',
      simple: '',
    },
    cfManagerFactory: {
      basic: '',
      vesting: '',
    },
    queryService: '0x7a21F1618bb0F5EaD292292d441e646E0DB9bf3e',
    payoutService: '0x6556Bf8Ed99161eD58753994006E7Ef9CE188ac5',
    payoutManager: '0x041e15aF5ecBc0C93F106B2F6a7F5fFa847eF9e4',
    nameRegistry: '0x1f57044153fb762dbc35168CE5e29d32E958BD52',
    campaignFeeManager: '',
    defaultWalletApprover: '0xa61AD00d16d2f40b7C3CC5339B8cBB8fD23972F5',
    defaultStableCoin: '0xb12bfca5a55806aaf64e99521918a4bf0fc40802', // custom stablecoin issued by filip
  },
}

export const OasisEmeraldChain: Network = {
  chainID: ChainID.OASIS_EMERALD,
  name: 'Oasis Emerald',
  shortName: 'oasis_emerald',
  iconURL: 'https://avatars.githubusercontent.com/u/52803776?s=280&v=4',
  nativeCurrency: {
    name: 'ROSE',
    symbol: 'ROSE',
  },
  maxGasPrice: 20,
  rpcURLs: ['https://emerald.oasis.dev'],
  wssRpcURLs: [''],
  explorerURLs: ['https://explorer.emerald.oasis.dev/'],
  tokenizerConfig: {
    apxRegistry: '',
    issuerFactory: {
      basic: '0x6da35932606866801762cBEC8698BD684d9D1699',
    },
    assetFactory: {
      basic: '',
      transferable: '',
      simple: '',
    },
    cfManagerFactory: {
      basic: '',
      vesting: '',
    },
    queryService: '0xCaf30A0B45B8E9A5f7310274f0FAec83cF307936',
    payoutService: '0x6556Bf8Ed99161eD58753994006E7Ef9CE188ac5',
    payoutManager: '0x7a21F1618bb0F5EaD292292d441e646E0DB9bf3e',
    nameRegistry: '0x1f57044153fb762dbc35168CE5e29d32E958BD52',
    campaignFeeManager: '',
    defaultWalletApprover: '0xa61AD00d16d2f40b7C3CC5339B8cBB8fD23972F5',
    defaultStableCoin: '0x3cA9dbbb1C64b5AbCb35B283441E817129c15544', // custom stablecoin issued by filip
  },
}

export const CeloChain: Network = {
  chainID: ChainID.CELO_MAINNET,
  name: 'Celo',
  shortName: 'celo',
  iconURL: 'https://assets.coingecko.com/coins/images/11090/small/InjXBNx9_400x400.jpg?1674707499',
  nativeCurrency: {
    name: 'CELO',
    symbol: 'CELO',
  },
  maxGasPrice: 20,
  rpcURLs: ['https://forno.celo.org'],
  wssRpcURLs: [],
  explorerURLs: ['https://explorer.celo.org/'],
  tokenizerConfig: {
    apxRegistry: '',
    issuerFactory: {
      basic: '0x6da35932606866801762cBEC8698BD684d9D1699',
    },
    assetFactory: {
      basic: '',
      transferable: '',
      simple: '',
    },
    cfManagerFactory: {
      basic: '',
      vesting: '',
    },
    queryService: '0xCaf30A0B45B8E9A5f7310274f0FAec83cF307936',
    payoutService: '0x6556Bf8Ed99161eD58753994006E7Ef9CE188ac5',
    payoutManager: '0x7a21F1618bb0F5EaD292292d441e646E0DB9bf3e',
    nameRegistry: '0x1f57044153fb762dbc35168CE5e29d32E958BD52',
    campaignFeeManager: '',
    defaultWalletApprover: '0xa61AD00d16d2f40b7C3CC5339B8cBB8fD23972F5',
    defaultStableCoin: '0x73a210637f6F6B7005512677Ba6B3C96bb4AA44B', // custom stablecoin issued by filip
  },
}

export const CeloTestChain: Network = {
  chainID: ChainID.CELO_TESTNET,
  name: 'Celo Alfajores',
  shortName: 'celo-testnet',
  iconURL: 'https://assets.coingecko.com/coins/images/11090/small/InjXBNx9_400x400.jpg?1674707499',
  nativeCurrency: {
    name: 'CELO',
    symbol: 'CELO',
  },
  maxGasPrice: 20,
  rpcURLs: ['https://alfajores-forno.celo-testnet.org'],
  wssRpcURLs: [],
  explorerURLs: ['https://alfajores.celoscan.io/'],
  tokenizerConfig: {
    apxRegistry: '',
    issuerFactory: {
      basic: '0x6da35932606866801762cBEC8698BD684d9D1699',
    },
    assetFactory: {
      basic: '',
      transferable: '',
      simple: '',
    },
    cfManagerFactory: {
      basic: '',
      vesting: '',
    },
    queryService: '0xCaf30A0B45B8E9A5f7310274f0FAec83cF307936',
    payoutService: '0x6556Bf8Ed99161eD58753994006E7Ef9CE188ac5',
    payoutManager: '0x7a21F1618bb0F5EaD292292d441e646E0DB9bf3e',
    nameRegistry: '0x1f57044153fb762dbc35168CE5e29d32E958BD52',
    campaignFeeManager: '',
    defaultWalletApprover: '0xa61AD00d16d2f40b7C3CC5339B8cBB8fD23972F5',
    defaultStableCoin: '0x874069Fa1Eb16D44d622F2e0Ca25eeA172369bC1', // custom stablecoin issued by filip
  },
}

export const BSCNetwork: Network = {
  chainID: ChainID.BSC,
  name: 'Binance Smart Chain',
  shortName: 'bsc',
  iconURL: 'https://pbs.twimg.com/profile_images/1394323505907437570/nP6b3IGJ_400x400.png',
  nativeCurrency: {
    name: 'BSC',
    symbol: 'BSC',
  },
  maxGasPrice: 20,
  rpcURLs: ['https://bscrpc.com'],
  wssRpcURLs: [],
  explorerURLs: ['https://bscscan.com/'],
  tokenizerConfig: {
    apxRegistry: '',
    issuerFactory: {
      basic: '0xCaf30A0B45B8E9A5f7310274f0FAec83cF307936',
    },
    assetFactory: {
      basic: '',
      transferable: '',
      simple: '',
    },
    cfManagerFactory: {
      basic: '',
      vesting: '',
    },
    queryService: '0x041e15aF5ecBc0C93F106B2F6a7F5fFa847eF9e4',
    payoutService: '0xa3BFC3A48Ee93290bDa5a0eF0Ed22414262c3043',
    payoutManager: '0xa61AD00d16d2f40b7C3CC5339B8cBB8fD23972F5',
    nameRegistry: '0x6Cbf0950E22ff08BA4a13FFD2443519e4cF56550',
    campaignFeeManager: '',
    defaultWalletApprover: '0x4b13e95bc24e983E3F55B11aB608508CF7D31d35',
    defaultStableCoin: '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d', // custom stablecoin issued by filip
  },
}

export const AvalancheNetwork: Network = {
  chainID: ChainID.AVALANCHE,
  name: 'Avalanche',
  shortName: 'avalanche',
  iconURL: 'https://glacier-api.avax.network/proxy/chain-assets/main/chains/43114/token-logo.png',
  nativeCurrency: {
    name: 'ETH',
    symbol: 'ETH',
  },
  maxGasPrice: 20,
  rpcURLs: ['https://api.avax.network/ext/bc/C/rpc'],
  wssRpcURLs: [''],
  explorerURLs: ['https://snowtrace.io/'],
  tokenizerConfig: {
    apxRegistry: '',
    issuerFactory: {
      basic: '0x459464B13A89F65E01291944f72E6842ad0Cbe34',
    },
    assetFactory: {
      basic: '',
      transferable: '',
      simple: '',
    },
    cfManagerFactory: {
      basic: '',
      vesting: '',
    },
    queryService: '0x0B3038562aCb5715254734E77C5Cb4064070Ab1f',
    payoutService: '0x713D963569DC7157DE0C1D1815679c4f3A30e078',
    payoutManager: '0x71Af6221c6AdE382a872B7A7B1B8068688E16ae5',
    nameRegistry: '0xaCeC98CD043f3b84F3272Bbc55A4d7A0dC8A0175',
    campaignFeeManager: '',
    defaultWalletApprover: '0x5C5c3a6DD68953B6d77413B88329174Ce03a75Bc',
    defaultStableCoin: '0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E', // custom stablecoin issued by filip
  },
}

export const OptimismNetwork: Network = {
  chainID: ChainID.OPTIMISM,
  name: 'Optimism',
  shortName: 'optimism',
  iconURL: 'https://gateway.optimism.io/static/media/optimism.caeb9392.svg',
  nativeCurrency: {
    name: 'ETH',
    symbol: 'ETH',
  },
  maxGasPrice: 20,
  rpcURLs: ['https://mainnet.optimism.io'],
  wssRpcURLs: [],
  explorerURLs: ['https://optimistic.etherscan.io/'],
  tokenizerConfig: {
    apxRegistry: '',
    issuerFactory: {
      basic: '0x6da35932606866801762cBEC8698BD684d9D1699',
    },
    assetFactory: {
      basic: '',
      transferable: '',
      simple: '',
    },
    cfManagerFactory: {
      basic: '',
      vesting: '',
    },
    queryService: '0xCaf30A0B45B8E9A5f7310274f0FAec83cF307936',
    payoutService: '0xa61AD00d16d2f40b7C3CC5339B8cBB8fD23972F5',
    payoutManager: '0x7a21F1618bb0F5EaD292292d441e646E0DB9bf3e',
    nameRegistry: '0x1f57044153fb762dbc35168CE5e29d32E958BD52',
    campaignFeeManager: '',
    defaultWalletApprover: '0x6556Bf8Ed99161eD58753994006E7Ef9CE188ac5',
    defaultStableCoin: '0x7f5c764cbc14f9669b88837ca1490cca17c31607', // custom stablecoin issued by filip
  },
}

export const ArbitrumNetwork: Network = {
  chainID: ChainID.ARBITRUM,
  name: 'Arbitrum',
  shortName: 'arbitrum',
  iconURL: 'https://www.xdefi.io/wp-content/uploads/2022/05/logo-9.png',
  nativeCurrency: {
    name: 'ETH',
    symbol: 'ETH',
  },
  maxGasPrice: 20,
  rpcURLs: [
    'https://endpoints.omniatech.io/v1/arbitrum/one/public'
  ],
  wssRpcURLs: [
  ],
  explorerURLs: ['https://arbiscan.io/'],
  tokenizerConfig: {
    apxRegistry: '',
    issuerFactory: {
      basic: '0x6da35932606866801762cBEC8698BD684d9D1699',
    },
    assetFactory: {
      basic: '',
      transferable: '',
      simple: '',
    },
    cfManagerFactory: {
      basic: '',
      vesting: '',
    },
    queryService: '0xCaf30A0B45B8E9A5f7310274f0FAec83cF307936',
    payoutService: '0xa61AD00d16d2f40b7C3CC5339B8cBB8fD23972F5',
    payoutManager: '0x7a21F1618bb0F5EaD292292d441e646E0DB9bf3e',
    nameRegistry: '0x1f57044153fb762dbc35168CE5e29d32E958BD52',
    campaignFeeManager: '',
    defaultWalletApprover: '0x6556Bf8Ed99161eD58753994006E7Ef9CE188ac5',
    defaultStableCoin: '0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1', // custom stablecoin issued by filip
  },
}

export const MoonriverNetwork: Network = {
  chainID: ChainID.MOONRIVER,
  name: 'Moonriver',
  shortName: 'moonriver',
  iconURL: 'https://dynamic-assets.coinbase.com/802dc36a9152a022f9d9159f16fa0f4ee70985496d621df163f35373e91d3634fc9697b884062cdd48070503efed726f9e545f2c27cc9eccc72777a80484893e/asset_icons/16c95ff455a193d937c96685c18a3ace93ec68fb22f7d62e761f7a3101293cfd.png',
  nativeCurrency: {
    name: 'MOVR',
    symbol: 'MOVR',
  },
  maxGasPrice: 20,
  rpcURLs: [
    'https://moonriver.public.blastapi.io'
  ],
  wssRpcURLs: [
  ],
  explorerURLs: ['https://moonriver.moonscan.io/'],
  tokenizerConfig: {
    apxRegistry: '',
    issuerFactory: {
      basic: '0x6da35932606866801762cBEC8698BD684d9D1699',
    },
    assetFactory: {
      basic: '',
      transferable: '',
      simple: '',
    },
    cfManagerFactory: {
      basic: '',
      vesting: '',
    },
    queryService: '0xCaf30A0B45B8E9A5f7310274f0FAec83cF307936',
    payoutService: '0x6556Bf8Ed99161eD58753994006E7Ef9CE188ac5',
    payoutManager: '0x7a21F1618bb0F5EaD292292d441e646E0DB9bf3e',
    nameRegistry: '0x1f57044153fb762dbc35168CE5e29d32E958BD52',
    campaignFeeManager: '',
    defaultWalletApprover: '0xa61AD00d16d2f40b7C3CC5339B8cBB8fD23972F5',
    defaultStableCoin: '0xE3F5a90F9cb311505cd691a46596599aA1A0AD7D', // custom stablecoin issued by filip
  },
}

export const FantomNetwork: Network = {
  chainID: ChainID.FANTOM_NETWORK,
  name: 'Fantom Opera',
  shortName: 'fantom',
  iconURL: 'https://pbs.twimg.com/profile_images/1292932673384714241/_BSnTr5s_400x400.png',
  nativeCurrency: {
    name: 'FTM',
    symbol: 'FTM',
  },
  maxGasPrice: 20,
  rpcURLs: [
    'https://rpc.ankr.com/fantom/'
  ],
  wssRpcURLs: [
  ],
  explorerURLs: ['https://ftmscan.com'],
  tokenizerConfig: {
    apxRegistry: '',
    issuerFactory: {
      basic: '0x6da35932606866801762cBEC8698BD684d9D1699',
    },
    assetFactory: {
      basic: '',
      transferable: '',
      simple: '',
    },
    cfManagerFactory: {
      basic: '',
      vesting: '',
    },
    queryService: '0xCaf30A0B45B8E9A5f7310274f0FAec83cF307936',
    payoutService: '0x6556Bf8Ed99161eD58753994006E7Ef9CE188ac5',
    payoutManager: '0x7a21F1618bb0F5EaD292292d441e646E0DB9bf3e',
    nameRegistry: '0x1f57044153fb762dbc35168CE5e29d32E958BD52',
    campaignFeeManager: '',
    defaultWalletApprover: '0xa61AD00d16d2f40b7C3CC5339B8cBB8fD23972F5',
    defaultStableCoin: '0x04068DA6C83AFCFA0e13ba15A6696662335D5B75', // custom stablecoin issued by filip
  },
}

export const GnosisNetwork: Network = {
  chainID: ChainID.GNOSIS_NETWORK,
  name: 'Gnosis/xDai',
  shortName: 'gnosis',
  iconURL: 'https://icons.iconarchive.com/icons/cjdowner/cryptocurrency/256/Gnosis-icon.png',
  nativeCurrency: {
    name: 'xDai',
    symbol: 'xDai',
  },
  maxGasPrice: 20,
  rpcURLs: [
    'https://rpc.gnosischain.com'
  ],
  wssRpcURLs: [
  ],
  explorerURLs: ['https://gnosisscan.io/'],
  tokenizerConfig: {
    apxRegistry: '',
    issuerFactory: {
      basic: '0x6da35932606866801762cBEC8698BD684d9D1699',
    },
    assetFactory: {
      basic: '',
      transferable: '',
      simple: '',
    },
    cfManagerFactory: {
      basic: '',
      vesting: '',
    },
    queryService: '0xCaf30A0B45B8E9A5f7310274f0FAec83cF307936',
    payoutService: '0x6556Bf8Ed99161eD58753994006E7Ef9CE188ac5',
    payoutManager: '0x7a21F1618bb0F5EaD292292d441e646E0DB9bf3e',
    nameRegistry: '0x1f57044153fb762dbc35168CE5e29d32E958BD52',
    campaignFeeManager: '',
    defaultWalletApprover: '0xa61AD00d16d2f40b7C3CC5339B8cBB8fD23972F5',
    defaultStableCoin: '0xDDAfbb505ad214D7b80b1f830fcCc89B60fb7A83', // custom stablecoin issued by filip
  },
}

export const CoinexChain: Network = {
  chainID: ChainID.COINEX,
  name: 'CoinEx Smart Chain',
  shortName: 'coinex',
  iconURL: 'https://assets.coingecko.com/coins/images/4817/small/coinex-token.png?1547040183',
  nativeCurrency: {
    name: 'CoinEx',
    symbol: 'CET',
  },
  maxGasPrice: 600,
  rpcURLs: ['https://rpc.coinex.net/'],
  wssRpcURLs: [],
  explorerURLs: ['https://www.coinex.net/'],
  tokenizerConfig: {
    apxRegistry: '',
    issuerFactory: {
      basic: '0x6da35932606866801762cBEC8698BD684d9D1699',
    },
    assetFactory: {
      basic: '',
      transferable: '',
      simple: '',
    },
    cfManagerFactory: {
      basic: '',
      vesting: '',
    },
    queryService: '0xCaf30A0B45B8E9A5f7310274f0FAec83cF307936',
    payoutService: '0x6556Bf8Ed99161eD58753994006E7Ef9CE188ac5',
    payoutManager: '0x7a21F1618bb0F5EaD292292d441e646E0DB9bf3e',
    nameRegistry: '0x1f57044153fb762dbc35168CE5e29d32E958BD52',
    campaignFeeManager: '',
    defaultWalletApprover: '0xa61AD00d16d2f40b7C3CC5339B8cBB8fD23972F5',
    defaultStableCoin: '0xF335B2440e62A953a42865aDf7bD73F4C6671A7b',
  },
}

export const CoinexTestnetChain: Network = {
  chainID: ChainID.COINEX_TESTNET,
  name: 'CoinEx Smart Chain Testnet',
  shortName: 'coinex-testnet',
  iconURL: 'https://assets.coingecko.com/coins/images/4817/small/coinex-token.png?1547040183',
  nativeCurrency: {
    name: 'CoinEx',
    symbol: 'CETT',
  },
  maxGasPrice: 600,
  rpcURLs: ['https://testnet-rpc.coinex.net'],
  wssRpcURLs: [],
  explorerURLs: ['https://testnet.coinex.net/'],
  tokenizerConfig: {
    apxRegistry: '',
    issuerFactory: {
      basic: '0x6da35932606866801762cBEC8698BD684d9D1699',
    },
    assetFactory: {
      basic: '',
      transferable: '',
      simple: '',
    },
    cfManagerFactory: {
      basic: '',
      vesting: '',
    },
    queryService: '0x6Cbf0950E22ff08BA4a13FFD2443519e4cF56550',
    payoutService: '0xa61AD00d16d2f40b7C3CC5339B8cBB8fD23972F5',
    payoutManager: '0x6556Bf8Ed99161eD58753994006E7Ef9CE188ac5',
    nameRegistry: '0xCaf30A0B45B8E9A5f7310274f0FAec83cF307936',
    campaignFeeManager: '',
    defaultWalletApprover: '0xa3BFC3A48Ee93290bDa5a0eF0Ed22414262c3043',
    defaultStableCoin: '0x6bb92A5E17e28E9D3f7Eb2B58E9DA4E5278Da0bC',
  },
}

export const Networks: { [key in ChainID]: Network } = {
  [ChainID.ETHEREUM_MAINNET]: EthereumMainnet,
  [ChainID.MATIC_MAINNET]: MaticNetwork,
  [ChainID.MUMBAI_TESTNET]: MumbaiNetwork,
  [ChainID.GOERLI_TESTNET]: GoerliNetwork,
  [ChainID.AURORA_MAINNET]: AuroraNetwork,
  [ChainID.OPTIMISM]: OptimismNetwork,
  [ChainID.ARBITRUM]: ArbitrumNetwork,
  [ChainID.AVALANCHE]: AvalancheNetwork,
  [ChainID.BSC]: BSCNetwork,
  [ChainID.MOONRIVER]: MoonriverNetwork,
  [ChainID.OASIS_EMERALD]: OasisEmeraldChain,
  [ChainID.CELO_MAINNET]: CeloChain,
  [ChainID.CELO_TESTNET]: CeloTestChain,
  [ChainID.GNOSIS_NETWORK]: GnosisNetwork,
  [ChainID.FANTOM_NETWORK]: FantomNetwork,
  [ChainID.COINEX]: CoinexChain,
  [ChainID.COINEX_TESTNET]: CoinexTestnetChain,
}

const getEthersNetwork = (network: Network): providers.Network => ({
  name: network.shortName,
  chainId: network.chainID,
  _defaultProvider: (_providers: any) => {
    if (network.wssRpcURLs?.[0]) {
      return new providers.WebSocketProvider(
        new ReconnectingWebSocket(network.wssRpcURLs![0]) as any,
        network.chainID
      )
    }

    return new providers.StaticJsonRpcProvider(
      network.rpcURLs[0],
      network.chainID
    )
  },
})

export const EthersNetworks = Object.fromEntries(
  Object.entries(Networks).map((entry) => [
    entry[0],
    getEthersNetwork(entry[1]),
  ])
)
