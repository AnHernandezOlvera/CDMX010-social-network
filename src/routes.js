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

export const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );
  rootDiv.innerHTML = routes[pathname];
  onGetPost((querySnapshot) => {
    const postList = document.getElementById('post-list');
    postList.innerHTML = '';
    querySnapshot.forEach((doc) => {
      // contante para llamar la data del post
      const post = doc.data();
      // llama al id del post
      post.id = doc.id;
      // console.log(post);
      postList.innerHTML += `
        <a href="#" class="single-post" data-id="${post.id}">
          <h2 class="title-list">${post.title}</h2>
        </a>
      `;
    });
  });
};

window.onpopstate = () => {
  rootDiv.innerHTML = routes[window.location.pathname];
};
