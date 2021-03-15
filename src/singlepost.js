import CardPost from './components/CardPost.js';
// eslint-disable-next-line import/no-cycle
import { onNavigate } from './routes.js';

const getSearchParam = (param) => (new URLSearchParams(window.location.search)).get(param);
export const singlepost = async (target, firebase) => {
  const templeteSinglePost = `
      <div id="post-container"></div>
    `;
  // eslint-disable-next-line no-param-reassign
  target.innerHTML = templeteSinglePost;
  const postId = getSearchParam('id');
  const post = await firebase.getPostById(postId);
  console.log(post);
  const postTemplates = CardPost(post);
  const postContainer = document.getElementById('post-container');
  postContainer.innerHTML = postTemplates;

  const btnsEdit = document.querySelectorAll('.btn-edit');
  btnsEdit.forEach((btn) => {
    btn.addEventListener('click', async (e) => {
      e.preventDefault();
      const url = new URL(e.currentTarget.href);
      onNavigate(url.pathname + url.search);
    });
  });
  // register/attach delete events
  const btnsDelete = document.querySelectorAll('.btn-delete');
  // eslint-disable-next-line arrow-parens
  btnsDelete.forEach(btn => {
    btn.addEventListener('click', async (e) => {
      // eslint-disable-next-line no-restricted-globals
      // eslint-disable-next-line no-alert
      const confirmar = confirm('¿Seguro que quieres borrar tu post?');
      if (confirmar) {
        await firebase.deletePost(e.target.dataset.id);
        onNavigate('/');
      }
    });
  });
};
export default singlepost;
