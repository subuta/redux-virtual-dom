// Simple hash based conditional loading.
if (location.hash === '' || location.hash === '#/snabbdom') {
  require('./components/snabbdom/app.js').default()
} else if (location.hash === '#/vidom') {
  require('./components/vidom/app.js').default()
}

// Fake full-reload for simple demo.
window.onhashchange = function() {
  location.reload()
}
