import { onNavigate } from './routes.js';

import { access, observer, validacion } from './lib/firebase.js';

export const login = async (target) => {
  const templeteLogin = `
        <div id="loginView">
        <form id="loginForm">
        <h4>Acceso</h4>
        <input type="email" id="emailAccess" placeholder="Email" />
        <input type="password" id="passwordAccess" placeholder="Password" />
        <button id="access">Acceder</button>
        </form>
        </div>
  `;
    // eslint-disable-next-line no-param-reassign
  target.innerHTML = templeteLogin;

  const accessButton = document.getElementById('access');

  accessButton.addEventListener('click', async (e) => {
    e.preventDefault();
    const emailAccess = document.getElementById('emailAccess').value;
    const passwordAccess = document.getElementById('passwordAccess').value;
    access(emailAccess, passwordAccess);
    console.log(emailAccess, passwordAccess);
    const usuario = await validacion(emailAccess);
    console.log(usuario);
    onNavigate('/home');
  });
};
export default login;
