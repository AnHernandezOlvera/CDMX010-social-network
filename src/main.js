/* eslint-disable no-undef */
import { onNavigate, load, routes } from './routes.js';
import * as firebase from './lib/firebase.js';

load(firebase);

const rootDiv = document.getElementById('root');
const homeViewFunction = routes[window.location.pathname];
homeViewFunction(rootDiv, firebase);

const postForm = document.getElementById('form');

// Botón de editar
const btnsEdit = document.querySelectorAll('.btn-edit');
btnsEdit.forEach((btn) => {
  btn.addEventListener('click', async (e) => {
    const postEditing = await firebase.getPostInfo(e.target.dataset.id);
    editStatus = true;
    id = doc.id;
    postForm['post-title'].value = postEditing.title;
    postForm['post-location'].value = postEditing.location;
    postForm['post-description'].value = postEditing.description;
    postForm.save.innerText = 'Actualizar';
  });
});

// Botón de cada post
const btnsPost = document.querySelectorAll('.single-post');
// eslint-disable-next-line arrow-parens
btnsPost.forEach(btn => {
  btn.addEventListener('click', async (e) => {
    e.preventDefault();
    onNavigate('/singlepost');
  });
});
