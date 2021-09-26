import Main from '@/components/main'

/**
 * iview-admin中meta除了原生参数外可配置的参数:
 * meta: {
 *  title: { String|Number|Function }
 *         显示在侧边栏、面包屑和标签栏的文字
 *         使用'{{ 多语言字段 }}'形式结合多语言使用，例子看多语言的路由配置;
 *         可以传入一个回调函数，参数是当前路由对象，例子看动态路由和带参路由
 *  hideInBread: (false) 设为true后此级路由将不会出现在面包屑中，示例看QQ群路由配置
 *  hideInMenu: (false) 设为true后在左侧菜单不会显示该页面选项
 *  notCache: (false) 设为true后页面在切换标签后不会缓存，如果需要缓存，无需设置这个字段，而且需要设置页面组件name属性和路由配置的name一致
 *  access: (null) 可访问该页面的权限数组，当前路由设置的权限会影响子路由
 *  icon: (-) 该页面在左侧菜单、面包屑和标签导航处显示的图标，如果是自定义图标，需要在图标名称前加下划线'_'
 *  beforeCloseName: (-) 设置该字段，则在关闭当前tab页时会去'@/router/before-close.js'里寻找该字段名对应的方法，作为关闭前的钩子函数
 * }
 */

export default [
  {
    path: '/login',
    name: 'login',
    meta: {
      title: 'Login - 登录',
      hideInMenu: true
    },
    component: () => import('@/view/login/login.vue')
  },
  {
    path: '/',
    name: 'home',
    redirect: '/equipmentPurchaseManagement',
    component: Main,
    children: [
      {
        path: 'equipmentPurchaseManagement',
        name: 'equipmentPurchaseManagement',
        meta: {
          title: '设备购入管理',
          icon: 'md-home'
        },
        component: () => import('@/view/equipmentPurchaseManagement')
      }
    ]
  },
  {
    path: '/equipmentArchivesManagement',
    name: 'equipmentArchivesManagement',
    component: Main,
    children: [
      {
        path: '/equipmentArchivesManagement',
        name: 'equipmentArchivesManagement',
        meta: {
          icon: 'md-home',
          title: '设备档案管理'
        },
        component: () => import('@/view/blank.vue')
      }
    ]
  },
  {
    path: '/assetBusinessManagement',
    name: 'assetBusinessManagement',
    component: Main,
    children: [
      {
        path: '/assetBusinessManagement',
        name: 'assetBusinessManagement',
        meta: {
          icon: 'md-home',
          title: '资产业务管理'
        },
        component: () => import('@/view/blank.vue')
      }
    ]
  },
  {
    path: '/machineMaintainableManagement',
    name: 'machineMaintainableManagement',
    component: Main,
    children: [
      {
        path: '/machineMaintainableManagement',
        name: 'machineMaintainableManagement',
        meta: {
          icon: 'md-home',
          title: '设备维修管理'
        },
        component: () => import('@/view/blank.vue')
      }
    ]
  },
  {
    path: '/equipmentUsageManagement',
    name: 'equipmentUsageManagement',
    component: Main,
    children: [
      {
        path: '/equipmentUsageManagement',
        name: 'equipmentUsageManagement',
        meta: {
          icon: 'md-home',
          title: '设备使用管理'
        },
        component: () => import('@/view/blank.vue')
      }
    ]
  },
  {
    path: '/vendorInformationManagement',
    name: 'vendorInformationManagement',
    component: Main,
    children: [
      {
        path: '/vendorInformationManagement',
        name: 'vendorInformationManagement',
        meta: {
          icon: 'md-home',
          title: '厂商信息管理'
        },
        component: () => import('@/view/blank.vue')
      }
    ]
  },
  {
    path: '/statisticalAnalysisManagement',
    name: 'statisticalAnalysisManagement',
    component: Main,
    children: [
      {
        path: '/statisticalAnalysisManagement',
        name: 'statisticalAnalysisManagement',
        meta: {
          icon: 'md-home',
          title: '统计分析管理'
        },
        component: () => import('@/view/blank.vue')
      }
    ]
  },
  {
    path: '/lifeFirstAid',
    name: 'lifeFirstAid(IOT)',
    component: Main,
    children: [
      {
        path: '/lifeFirstAid',
        name: 'lifeFirstAid(IOT)',
        meta: {
          icon: 'md-home',
          title: '生命急救（物联）'
        },
        component: () => import('@/view/blank.vue')
      }
    ]
  },
  {
    path: '/largeEquipment',
    name: 'largeEquipment(IOT)',
    component: Main,
    children: [
      {
        path: '/largeEquipment',
        name: 'largeEquipment(IOT)',
        meta: {
          icon: 'md-home',
          title: '大型装备（物联）'
        },
        component: () => import('@/view/blank.vue')
      }
    ]
  },
  {
    path: '/dataIntegrationManagement',
    name: 'dataIntegrationManagement',
    component: Main,
    children: [
      {
        path: '/dataIntegrationManagement',
        name: 'dataIntegrationManagement',
        meta: {
          icon: 'md-home',
          title: '数据集成管理'
        },
        component: () => import('@/view/blank.vue')
      }
    ]
  },
  {
    path: '/regionalMapManagement',
    name: 'regionalMapManagement',
    component: Main,
    children: [
      {
        path: '/regionalMapManagement',
        name: 'regionalMapManagement',
        meta: {
          icon: 'md-home',
          title: '区域地图管理'
        },
        component: () => import('@/view/blank.vue')
      }
    ]
  },
  {
    path: '/basicSystemManagement',
    name: 'basicSystemManagement',
    component: Main,
    children: [
      {
        path: '/basicSystemManagement',
        name: 'basicSystemManagement',
        meta: {
          icon: 'md-home',
          title: '系统基础管理'
        },
        component: () => import('@/view/blank.vue')
      }
    ]
  },
  {
    path: '/401',
    name: 'error_401',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/view/error-page/401.vue')
  },
  {
    path: '/500',
    name: 'error_500',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/view/error-page/500.vue')
  },
  {
    path: '*',
    name: 'error_404',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/view/error-page/404.vue')
  }
]
