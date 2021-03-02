import { routes, onNavigate } from './routes.js';

const rootDiv = document.getElementById('root');
rootDiv.innerHTML = routes[window.location.pathname];
// Buttons
const goToHome = document.getElementById('toHome');
const goToForm = document.getElementById('toForm');
const goToPost = document.getElementById('toPost');

goToHome.addEventListener('click', (e) => {
  e.preventDefault();
  onNavigate('/');
});
goToForm.addEventListener('click', (e) => {
  e.preventDefault();
  onNavigate('/post');
});
goToPost.addEventListener('click', (e) => {
  e.preventDefault();
  onNavigate('/posting');
});
/* // single post
const goToSingle = document.querySelectorAll('single-post');
goToSingle.addEventListener('click', (e) => {
  e.preventDefault();
  onNavigate('/singlepost');
}); */
