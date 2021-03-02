// importamos todas nuestras páginas
// '/pathname'
const routes = {
  '/': home,
  '/form': form,
  '/post': post,
  '/singlepost': singlepost,
};
const rootDiv = document.getElementById('root');
rootDiv.innerHTML = routes[window.location.pathname];
const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname
  )
  rootDiv.innerHTML = routes[pathname]
}

window.onpopstate = () => {
  rootDiv.innerHTML = routes[window.location.pathname]
}