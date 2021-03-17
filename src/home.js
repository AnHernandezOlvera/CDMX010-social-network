/* eslint-disable import/no-cycle */
// eslint-disable-next-line import/no-cycle
import Footer, { registerEvents } from './components/Footer.js';
import { onNavigate } from './routes.js';

export const home = async (target, firebase) => {
  const templeteHome = `
    <div id="post-list"></div>
    ${Footer()}
`;
  // eslint-disable-next-line no-param-reassign
  target.innerHTML = templeteHome;
  registerEvents(firebase);
  // const icons = document.getElementById('iconsFooter');
  // icons.style.opacity = 1;
  // icons.style.display = 'flex';
  const posts = await firebase.getAllPosts();
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
