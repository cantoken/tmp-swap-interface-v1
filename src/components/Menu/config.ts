import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://tmp-swap-interface-v1.vercel.app/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    status: {
      text: 'MIGRATE',
      color: 'warning',
    },
    items: [
      {
        label: 'LP Migration',
        href: '/migrate',
      },
      {
        label: 'Exchange',
        href: 'https://tmp-swap-interface-v1.vercel.app/#/swap',
      },
      {
        label: 'Liquidity',
        href: 'https://tmp-swap-interface-v1.vercel.app/#/pool',
      },
      {
        label: 'V1 Liquidity (Old)',
        href: '/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'https://tmp-swap-interface-v1.vercel.app/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: 'https://tmp-swap-interface-v1.vercel.app/pools',
  },
  {
    label: 'Prediction',
    icon: 'PredictionsIcon',
    href: 'https://tmp-swap-interface-v1.vercel.app/prediction',
    status: {
      text: 'BETA',
      color: 'warning',
    },
  },
  {
    label: 'Lottery',
    icon: 'TicketIcon',
    href: 'https://tmp-swap-interface-v1.vercel.app/lottery',
  },
  {
    label: 'Collectibles',
    icon: 'NftIcon',
    href: 'https://tmp-swap-interface-v1.vercel.app/nft',
  },
  {
    label: 'Team Battle',
    icon: 'TeamBattleIcon',
    href: 'https://tmp-swap-interface-v1.vercel.app/competition',
  },
  {
    label: 'Teams & Profile',
    icon: 'GroupsIcon',
    items: [
      {
        label: 'Leaderboard',
        href: 'https://tmp-swap-interface-v1.vercel.app/teams',
      },
      {
        label: 'Task Center',
        href: 'https://tmp-swap-interface-v1.vercel.app/profile/tasks',
      },
      {
        label: 'Your Profile',
        href: 'https://tmp-swap-interface-v1.vercel.app/profile',
      },
    ],
  },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Overview',
        href: 'https://pancakeswap.info',
      },
      {
        label: 'Tokens',
        href: 'https://pancakeswap.info/tokens',
      },
      {
        label: 'Pairs',
        href: 'https://pancakeswap.info/pairs',
      },
      {
        label: 'Accounts',
        href: 'https://pancakeswap.info/accounts',
      },
    ],
  },
  {
    label: 'IFO',
    icon: 'IfoIcon',
    href: 'https://tmp-swap-interface-v1.vercel.app/ifo',
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Contact',
        href: 'https://docs.tmp-swap-interface-v1.vercel.app/contact-us',
      },
      {
        label: 'Voting',
        href: 'https://voting.tmp-swap-interface-v1.vercel.app',
      },
      {
        label: 'Github',
        href: 'https://github.com/pancakeswap',
      },
      {
        label: 'Docs',
        href: 'https://docs.tmp-swap-interface-v1.vercel.app',
      },
      {
        label: 'Blog',
        href: 'https://pancakeswap.medium.com',
      },
      {
        label: 'Merch',
        href: 'https://pancakeswap.creator-spring.com/',
      },
    ],
  },
]

export default config
