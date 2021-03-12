import { onNavigate } from './routes.js';
import { registerUsser } from './lib/firebase.js';

export const register = async (target) => {
  const templeteLogin = `
        <div id="loginView">
        <form id="loginForm">
        <input type="email" id="email" placeholder="Email">
        <input type="password" id="password" placeholder="Password">
        <button id="enviar">Enviar</button>
        </form>
        </div>
  `;
    // eslint-disable-next-line no-param-reassign
  target.innerHTML = templeteLogin;
  const buttonEnviar = document.getElementById('enviar');
  buttonEnviar.addEventListener('click', async (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    await registerUsser(email, password);
  });
};
export default register;
