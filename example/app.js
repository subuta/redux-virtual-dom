// Conditional loading based on url
if (location.pathname === '/' || location.pathname === '/snabbdom') {
  require('./components/snabbdom/app.js');
}
