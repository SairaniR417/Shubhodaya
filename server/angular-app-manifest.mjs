
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Shubhodaya/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Shubhodaya"
  },
  {
    "renderMode": 2,
    "route": "/Shubhodaya/about"
  },
  {
    "renderMode": 2,
    "route": "/Shubhodaya/services"
  },
  {
    "renderMode": 2,
    "route": "/Shubhodaya/contact"
  },
  {
    "renderMode": 2,
    "redirectTo": "/Shubhodaya",
    "route": "/Shubhodaya/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1202, hash: '3ee6f89508d56fd9f47e4a11d7bb868d737cb34fc2e06f6bd2e58120a7ea9de4', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1607, hash: '24948dc27fe8f00f6c69bc17f15af991deb4393e61057144f114ace34a2c5db6', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 6006, hash: '514dbc31a33364ef506437b2cfa83b79f888e9868dda45f07ff4ac4b1bef5513', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'index.html': {size: 7547, hash: 'ae828cddc4c70f698ae591a30bcd00e518b2b9b0131788a0dd695da9c480c03e', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 6690, hash: '66496ff135171e6362700158b1a270f32da149db5c44ca10f0afbcb6658b276c', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'services/index.html': {size: 6193, hash: '05de6a957f20338e527875a5d0432a854a6bc7d16204055befb3c442514780a8', text: () => import('./assets-chunks/services_index_html.mjs').then(m => m.default)},
    'styles-F3VWX5UC.css': {size: 250, hash: '8VipahUdAEw', text: () => import('./assets-chunks/styles-F3VWX5UC_css.mjs').then(m => m.default)}
  },
};
