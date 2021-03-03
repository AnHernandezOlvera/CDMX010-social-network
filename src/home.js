// target es un parametro arbitrario que siempre recibe root/rootDIv
import { onGetPost } from './lib/firebase.js';

export const home = () => {
  const rootDiv = document.getElementById('root');
  const templeteHome = `
    <div id="back-list"><div id="post-list"></div>
`;
  rootDiv.innerHTML = templeteHome;
};
onGetPost((querySnapshot) => {
  const postList = document.getElementById('post-list');
  postList.innerHTML = '';
  querySnapshot.forEach((doc) => {
    // contante para llamar la data del post
    const post = doc.data();
    // llama al id del post
    post.id = doc.id;
    // console.log(post);
    postList.innerHTML += `
      <a href="#" class="single-post" data-id="${post.id}">
        <h2 class="title-list">${post.title}</h2>
      </a>
    `;
  });
});
export default home;
