import { onNavigate } from "../routes.js";

const Footer = () => `
<footer>
    <div id="iconsFooter" class="iconsfooter">
    <span><a id="toHome" href="#"><i class="fas fa-arrow-alt-circle-left"></i></a></span>
    <span><a id="toPosting" href="#"> <i class="fas fa-plus-circle"></i></a></span>
    <span><a id="signOut" href="#"><i class="fas fa-sign-out-alt"></i></a></span>
    </div>
  </footer>
`;

export const registerEvents = (firebase) => {
    // Funciones para botones de navegación
    document.getElementById('toHome').addEventListener('click', (e) => {
        e.preventDefault();
        onNavigate('/home');
    });
  
  document.getElementById('toPosting').addEventListener('click', async (e) => {
    e.preventDefault();
    onNavigate('/posting');
  });
  // Botón de salir
const signOutButton = document.getElementById('signOut');
signOutButton.addEventListener('click', async (e) => {
  e.preventDefault();
  await firebase.signOut(onNavigate);
});
};


export default Footer;