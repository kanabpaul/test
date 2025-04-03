
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 13497, hash: '473840ae7dc36cced7c367852c8e7809cdff4ee7d05be2e780518050e4dec951', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 12321, hash: 'd317b5984ac70ea4f2e7c3ba2a9762154c7793a8e1f9836d89bad1f4050d7ae9', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-FLFBWCDI.css': {size: 1572, hash: 'wnbryxdbwXo', text: () => import('./assets-chunks/styles-FLFBWCDI_css.mjs').then(m => m.default)}
  },
};
