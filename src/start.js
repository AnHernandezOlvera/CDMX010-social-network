import { onNavigate } from './routes.js';

export const options = async (target) => {
  const templeteOptions = `
    <div>
        <button id="login">Acceder</button>
        <button id="register">Regístrarse</button>
    </div>
    `;
  // eslint-disable-next-line no-param-reassign
  target.innerHTML = templeteOptions;
  const buttonLogin = document.getElementById('login');
  const buttonRegister = document.getElementById('register');
  buttonLogin.addEventListener('click', (e) => {
    e.preventDefault();
    onNavigate('/login');
  });
  buttonRegister.addEventListener('click', (e) => {
    e.preventDefault();
    onNavigate('/register');
  });
};
export default options;
