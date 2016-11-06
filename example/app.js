// Conditional loading based on url
if (location.pathname === '/' || location.pathname === '/snabbdom') {
  require('./components/snabbdom/app.js').default()
} else if (location.pathname === '/vidom') {
  require('./components/vidom/app.js').default()
}
