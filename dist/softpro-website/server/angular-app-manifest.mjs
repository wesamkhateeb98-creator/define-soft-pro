
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/home",
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-4U3FEHXC.js",
      "chunk-EGTXCO63.js",
      "chunk-G5QEHTRC.js",
      "chunk-YMOQVHJE.js",
      "chunk-M7HPAJHL.js",
      "chunk-U3PMWUJK.js",
      "chunk-X52TWHMD.js"
    ],
    "route": "/home"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-E22R4F6V.js",
      "chunk-EGTXCO63.js",
      "chunk-X52TWHMD.js"
    ],
    "route": "/services"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-777E6FEN.js",
      "chunk-G5QEHTRC.js",
      "chunk-X52TWHMD.js"
    ],
    "route": "/solutions"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-6IXN2AT5.js",
      "chunk-YMOQVHJE.js",
      "chunk-X52TWHMD.js"
    ],
    "route": "/portfolio"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-EWGHBVDM.js",
      "chunk-M7HPAJHL.js",
      "chunk-X52TWHMD.js"
    ],
    "route": "/about"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DUD4AG7A.js",
      "chunk-U3PMWUJK.js",
      "chunk-X52TWHMD.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "redirectTo": "/home",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 23590, hash: '6baa19efea8611110c809331e46d4bd9255bc1fc8cc6bb25fc66bd163e887da2', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 15327, hash: '4e6be6994e906ca1eb6af345c3b8526999983fcf437cb78ef6e1b3012a2911ca', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 50658, hash: '9d411b0296e7135bcb4188d6e0b716e60614ecdfd397d2db1d9d48628b600179', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'services/index.html': {size: 46992, hash: '4f58da18cf343f521c2de115daaf1ca5bed195c8f34466720584e7c810e14ecc', text: () => import('./assets-chunks/services_index_html.mjs').then(m => m.default)},
    'portfolio/index.html': {size: 52596, hash: 'fbf80c59722955ac43de812debb2bf1980118b1d3957b4d0bb60d19ddd364e1d', text: () => import('./assets-chunks/portfolio_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 85793, hash: '61f1a106814038115249bab01e1c5619bc181755bb96a4be5444dd0a931ef2ac', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'solutions/index.html': {size: 48731, hash: 'f7ec7d0eb53978406c551fdc80602092da0bb99619f26fa6261afa554edd16d4', text: () => import('./assets-chunks/solutions_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 51269, hash: '3f24ff2fb6989842be3853e82fae8f138f210a20fba3738d5bc8bff2fb4c37b4', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'styles-R6QHMPGN.css': {size: 37124, hash: 'KZlKf2x3xZM', text: () => import('./assets-chunks/styles-R6QHMPGN_css.mjs').then(m => m.default)}
  },
};
