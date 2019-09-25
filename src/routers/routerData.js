// The key property is used for Antd Menu Component
export const sidebarData = [
  {
    key: 'Dashboard',
    title: {
      icon: 'bank',
      text: 'Quản lý cơ sở'
    },
    children: [
      {
        key: '/danh-sach-co-so',
        text: 'Danh sách cơ sở',
        path: '/danh-sach-co-so'
      },
      {
        key: '/thong-tin-co-so',
        text: 'Thông tin cơ sở',
        path: '/thong-tin-co-so'
      }
    ]
  },
  {
    key: 'Quản lý khách hàng',
    title: {
      icon: 'solution',
      text: 'Quản lý khách hàng'
    },
    children: [
      {
        key: 'Thông tin khách hàng',
        text: 'Thông tin khách hàng',
        path: '/thong-tin-khach-hang'
      },
      {
        key: 'Thêm khách hàng',
        text: 'Thêm khách hàng',
        path: '/them-khach-hang'
      }
    ]
  },
  {
    key: 'Quản lý nhân viên',
    title: {
      icon: 'team',
      text: 'Quản lý nhân viên'
    },
    children: [
      {
        key: '/danh-sach-nhan-vien',
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
  },
  {
    key: 'Quản lý nâng hạng thẻ',
    title: {
      icon: 'idcard',
      text: 'Quản lý nâng hạng thẻ'
    },
    children: []
  },
  {
    key: 'Quản lý chấm công',
    title: {
      text: 'Quản lý chấm công',
      icon: 'clock-circle'
    },
    children: []
  }
];

export const groupKey = sidebarData.map(item => item.key);
