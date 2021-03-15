import { onNavigate } from './routes.js';

export const options = async (target, firebase) => {
  const templeteOptions= `
    <div id="options" >
        <button id="login">Acceder</button>
        <button id="register">Regístrarse</button>
    </div>
`;
  target.innerHTML = templeteOptions;
  const icons = document.getElementById('iconsFooter');
icons.style.display = "none";
 const loginButton = document.getElementById('login');
 loginButton.addEventListener('click',(e)=> {
    onNavigate('/login');
 });
 const registerButton = document.getElementById('register');
 registerButton.addEventListener('click',(e)=> {
    onNavigate('/register');
 });
};

export default options;
