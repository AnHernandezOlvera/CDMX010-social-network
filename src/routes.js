import { home } from './home.js';
import { posting } from './posting.js';
import { post } from './post.js';
import { singlepost } from './singlepost.js';
import { onGetPost } from './lib/firebase.js';

export const routes = {
  '/': home,
  '/post': post,
  '/posting': posting,
  '/singlepost': singlepost,
};

const rootDiv = document.getElementById('root');
rootDiv.innerHTML = routes[window.location.pathname];

export const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );
  rootDiv.innerHTML = routes[pathname];
};

window.onpopstate = () => {
  rootDiv.innerHTML = routes[window.location.pathname];
};
