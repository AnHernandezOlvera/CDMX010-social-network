/* eslint-disable no-param-reassign */
/* eslint-disable import/no-cycle */
import Footer, { registerEvents } from './components/Footer.js';
import { onNavigate } from './routes.js';

const getSearchParam = (param) => (new URLSearchParams(window.location.search)).get(param);

export const posting = async (target, firebase) => {
  const html = `
  <div id="post-form">
    <form id="form">
      <h1>Escribe tu post</h1>
      <input id="title" type="text" placeholder="Título" required>
      <input id="location" type="text" placeholder="Coordenadas" required>
      <textarea id="description" type="text" placeholder="Descripción" required minlength="20" rows="8"></textarea>
      <button id="save" value="submit">Publicar</button>
    </form>  
  </div>
  ${Footer()}
  `;
  target.innerHTML = html;
  registerEvents(firebase);
  const postId = getSearchParam('id');
  const postForm = document.getElementById('form');
  postForm.title.focus();
  let post = null;

  if (postId) {
    post = await firebase.getPostById(postId);
    postForm.title.value = post.title;
    postForm.location.value = post.location;
    postForm.description.value = post.description;
    postForm.save.innerText = 'Actualizar';
  }

  postForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const postData = {
      title: postForm.title.value,
      location: postForm.location.value,
      description: postForm.description.value,
      likes: post.likes,
    };

    if (post) {
      await firebase.updatePost(postId, postData);
      postForm.save.innerText = 'Guardar';
      onNavigate('/singlepost' + '?' + 'id=' + postId);
    } else {
      await firebase.savePost(postData);
      // limpia o resetea el formulario
      postForm.reset();
    }
  });
};

export default posting;
