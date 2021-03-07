const _nav =  [
  {
    _tag: 'CSidebarNavTitle',
    //_children: ['Components']
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Users',
    route: '/',
    icon: 'cil-user',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'list',
        to: '/',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'add',
        to: '/users/add',
      },
    ],
  },

  {
    _tag: 'CSidebarNavDivider'
  },
  {
    _tag: 'CSidebarNavDivider',
    className: 'm-2'
  },
  {
    _tag: 'CSidebarNavDivider',
    className: 'm-2'
  }
]

export default _nav
