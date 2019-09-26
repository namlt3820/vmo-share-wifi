// The key property is used for Antd Menu Component
export const sidebarData = [
  {
    key: 'Dashboard',
    title: {
      icon: 'dashboard',
      text: 'Dashboard',
      path: '/dashboard'
    },
    children: []
  },
  {
    key: 'Accounts',
    title: {
      icon: 'users',
      text: 'Accounts'
    },
    children: []
  },
  {
    key: 'Wifi',
    title: {
      icon: 'wifi',
      text: 'Wifi'
    },
    children: [
      {
        key: '/list',
        text: 'Danh sách nhân viên',
        path: '/danh-sach-nhan-vien'
      },
      {
        key: '/danh-sach-hop-dong',
        text: 'Danh sách hợp đồng',
        path: '/danh-sach-hop-dong'
      },
      {
        key: '/danh-sach-nhan-vien/thong-tin-nhan-vien',
        text: 'Thông tin nhân viên',
        path: '/danh-sach-nhan-vien/thong-tin-nhan-vien'
      }
    ]
  },
  {
    key: 'Quản lý dịch vụ',
    title: {
      text: 'Quản lý dịch vụ',
      icon: 'tool'
    },
    children: [
      {
        key: '/danh-sach-dich-vu',
        text: 'Danh sách dịch vụ',
        path: '/danh-sach-dich-vu'
      },
      {
        key: '/tao-moi-dich-vu',
        text: 'Tạo mới dịch vụ',
        path: '/tao-moi-dich-vu'
      }
    ]
  },
  {
    key: 'Quản lý lương',
    title: {
      text: 'Quản lý lương',
      icon: 'dollar'
    },
    children: [
      {
        key: '/lich-su-thu-nhap',
        text: 'Lịch sử thu thập',
        path: '/lich-su-thu-nhap'
      },
      {
        key: '/tong-hop-luong',
        text: 'Tổng hợp lương',
        path: '/tong-hop-luong'
      }
    ]
  }
];

export const groupKey = sidebarData.map(item => item.key);
