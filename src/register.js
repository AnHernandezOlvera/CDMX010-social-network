import { onNavigate } from './routes.js';

export const register = async (target, firebase) => {
  const templeteLogin = `
        <div id="loginView">
        <form id="loginForm">
        <input type="email" id="email" placeholder="Email">
        <input type="password" id="password" placeholder="Password">
        <button id="enviar">Enviar</button>
        <button id="registerGoogle">Regístrarse con Google</button>
        </form>
        </div>
  `;
    // eslint-disable-next-line no-param-reassign
  target.innerHTML = templeteLogin;
  const icons = document.getElementById('iconsFooter');
icons.style.display = "none";
  const buttonEnviar = document.getElementById('enviar');
  buttonEnviar.addEventListener('click', async (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    await firebase.registerUsser(email, password, onNavigate);
  });
// Registro con Google
const googleButton = document.querySelector('#registerGoogle');
googleButton.addEventListener('click', async (e) => {
  e.preventDefault();
  await firebase.google(onNavigate); 
})
};
export default register;