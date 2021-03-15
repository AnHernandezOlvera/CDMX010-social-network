import { onNavigate } from './routes.js';

export const login = async (target, firebase) => {
  const templeteLogin = `
        <div id="loginView">
        <form id="loginForm">
        <h4>Acceso</h4>
        <input type="email" id="emailAccess" placeholder="Email" />
        <input type="password" id="passwordAccess" placeholder="Password" />
        <button id="access">Acceder</button>
        <button id="accessGoogle">Acceder con Google</button>
        </form>
        </div>
  `;
    // eslint-disable-next-line no-param-reassign
  target.innerHTML = templeteLogin;
const icons = document.getElementById('iconsFooter');
icons.style.display = "none";

  const accessButton = document.getElementById('access');
  accessButton.addEventListener('click', async (e) => {
    e.preventDefault();
    const emailAccess = document.getElementById('emailAccess').value;
    const passwordAccess = document.getElementById('passwordAccess').value;
    await firebase.access(emailAccess, passwordAccess, onNavigate);
  });
  // Acceso con Google
const googleButton = document.querySelector('#accessGoogle');
googleButton.addEventListener('click', async (e) => {
  e.preventDefault();
  await firebase.google(onNavigate); 
})
};
export default login;