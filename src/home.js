// target es un parametro arbitrario que siempre recibe root/rootDIv
import { getAllPosts } from './lib/firebase.js';
// eslint-disable-next-line import/no-cycle
import { onNavigate } from './routes.js';

export const home = async (target) => {
  const templeteHome = `
      <div id="post-list"></div>
`;
  // eslint-disable-next-line no-param-reassign
  target.innerHTML = templeteHome;
  const posts = await getAllPosts();
  const postTemplates = posts.map((post) => `
  <div class= "card">
    <a href="/singlepost?id=${post.id}" class="single-post" data-id="${post.id}">
      <h2 class="title-list" data-id="${post.id}">${post.title}</h2>
    </a> 
  </div>
  `);

  const postList = document.getElementById('post-list');
  postList.innerHTML = postTemplates.join('');

  // función para single post
  const goToPostById = document.querySelectorAll('.single-post');
  goToPostById.forEach((btn) => {
    btn.addEventListener('click', async (e) => {
      e.preventDefault();
      const url = new URL(e.currentTarget.href);
      onNavigate(url.pathname + url.search);
    });
  });
};
export default home;
