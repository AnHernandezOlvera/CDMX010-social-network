// En este documento solamente tenemos lo que manipula el DOM
import { onNavigate } from './routes.js';
// Importamos navigate para manipular el DOM con los botones del footer
import { getPostById } from './lib/firebase.js';

const postForm = document.getElementById('form');
const postCard = document.getElementById('mainPost');
// Funciones para botones de navegación
document.getElementById('toHome').addEventListener('click', (e) => {
  e.preventDefault();
  onNavigate('/');
});

document.getElementById('toPosting').addEventListener('click', async (e) => {
  e.preventDefault();
  onNavigate('/posting');
});

document.getElementById('toPost').addEventListener('click', (e) => {
  e.preventDefault();
  onNavigate('/post');
});
// Botón de editar
const btnsEdit = document.querySelectorAll('.btn-edit');
btnsEdit.forEach((btn) => {
  btn.addEventListener('click', async (e) => {
    const postEditing = await getPostById(e.target.dataset.id);
    // eslint-disable-next-line no-undef
    id = doc.id;
    postForm['post-title'].value = postEditing.title;
    postForm['post-location'].value = postEditing.location;
    postForm['post-description'].value = postEditing.description;
    postForm.save.innerText = 'Actualizar';
  });
});

// Botón de cada post
const btnsPost = document.querySelectorAll('.single-post');
btnsPost.forEach((btn) => {
  btn.addEventListener('click', async (e) => {
    const postById = await getPostById(e.target.dataset.id);
    // eslint-disable-next-line no-undef
    id = doc.id;
  });
});
