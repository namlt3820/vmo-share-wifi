// The key property is used for Antd Menu Component
export const sidebarData = [
  {
    key: 'Wifi',
    title: {
      icon: 'wifi',
      text: 'Wifi'
    },
    children: [
      {
        key: '/list',
        text: 'All Routers',
        icon: 'wifi',
        path: '/routers'
      },
      {
        key: '/addRouter',
        text: 'Add Router',
        icon: 'wifi',
        path: '/addRouter'
      }
    ]
  },
  {
    key: 'Data',
    title: {
      text: 'Data',
      icon: 'database'
    },
    children: [
      {
        key: '/userData',
        text: 'User Data',
        icon: 'database',
        path: '/userData'
      },
      {
        key: '/wifiData',
        text: 'Wifi Data',
        icon: 'wifi',
        path: '/wifiData'
      }
    ]
  },
  {
    key: 'Payment',
    title: {
      text: 'Payment',
      icon: 'dollar'
    },
    children: []
  }
];

export const sidebarDataOne = [
  {
    key: 'Dashboard',
    title: {
      icon: 'dashboard',
      text: 'Dashboard',
      path: '/dashboard'
    }
  },
  {
    key: 'Accounts',
    title: {
      icon: 'user',
      text: 'Accounts',
      path: '/allUser'
    }
  }
];

export const groupKey = sidebarData.map(item => item.key);
