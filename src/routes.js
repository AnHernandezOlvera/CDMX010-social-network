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
const homeViewFunction = routes[window.location.pathname];
homeViewFunction(rootDiv);

export const onNavigate = (path) => {
  const [pathname] = path.split('?')
  
  window.history.pushState(
    {},
    pathname,
    `${window.location.origin}${path}`,
  );

  const viewFunction = routes[pathname];
  viewFunction(rootDiv);
};

window.onpopstate = () => {
  const viewFunction  = routes[window.location.pathname];
  viewFunction(rootDiv);
};
