
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/about"
  },
  {
    "renderMode": 2,
    "route": "/services"
  },
  {
    "renderMode": 2,
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "redirectTo": "/",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1191, hash: '8263ffe996b153f57f6e7d91d1c472fe27447a059a89acedbbc9ddcb99889bb7', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1596, hash: '5654986780187aa6a8b044511cdd70c2e87aa90bc2403c07a81bfa4c2cdba6c0', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 5951, hash: '573cb2a97d0d4d71ea3162c56676a2bb88bbab13a6a695092b284f1a4930c4ad', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'services/index.html': {size: 6138, hash: '071ad7c3b0215b19fd84ebad04e021a5470a3ae7049defe789a844de282109d9', text: () => import('./assets-chunks/services_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 6635, hash: '5b0c09deb23382be9b8f1faf24f3cd10d4e49002e31c2dcc601c3eda22ae3bea', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'index.html': {size: 7492, hash: 'f45084ed6a4dadebda978758e13c99984b2cd44b2d682d1707b50b18f0988479', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-F3VWX5UC.css': {size: 250, hash: '8VipahUdAEw', text: () => import('./assets-chunks/styles-F3VWX5UC_css.mjs').then(m => m.default)}
  },
};
