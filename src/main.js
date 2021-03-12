<<<<<<< HEAD
// Este es el punto de entrada de tu aplicacion

// import { myFunction } from './lib/index.js';

// myFunction();
// llamar a Firestore
const dataBase = firebase.firestore();
// llama al formulario y escucha el evento
=======
import { onNavigate, load, routes } from './routes.js';
import * as firebase from './lib/firebase.js';

load(firebase);

const rootDiv = document.getElementById('root');
const homeViewFunction = routes[window.location.pathname];
homeViewFunction(rootDiv, firebase);


>>>>>>> 8017969e46dcf8e6200d1e4b5787bab6faf4c41d
const postForm = document.getElementById('form');

// Funciones para botones de navegación
document.getElementById('toHome').addEventListener('click', (e) => {
  e.preventDefault();
  onNavigate('/');
});

document.getElementById('toPosting').addEventListener('click', async (e) => {
  e.preventDefault();
  onNavigate('/posting');
});

document.getElementById('toPost').addEventListener('click', (e) => {
  e.preventDefault();
  onNavigate('/post');
});
// const btnsDelete = document.querySelectorAll('.btn-delete');
// console.log(btnsDelete);
// btnsDelete.forEach(btn => {
//   console.log('main');
//   btn.addEventListener('click', async (e) => {
//     const confirmar = confirm('¿Seguro que quieres borrar tu post?');
//     if (confirmar === true) {
//       await deletePost(e.target.dataset.id);
//     }
//   });
// });
// llama al formulario y escucha el evento


// guardar status
let editStatus = false;
<<<<<<< HEAD
let id = '';
const savePost = (title, location, description) =>
  dataBase.collection('post').doc().set({
    title,
    location,
    description,
  });
  // obtiene valores guardados
const getPost = () => dataBase.collection('post').get();
// de la colección quiero un documento con el id que se obtiene al dar click
const getPostInfo = (id) => dataBase.collection('post').doc(id).get();

  const onGetPost = (callback) => dataBase.collection('post').onSnapshot(callback);
  // para eliminar un post da un parametro id
  const deletePost = id => dataBase.collection('post').doc(id).delete();
  // función actuaalizar en firebase
  const updatePost = (id, updatedPost) =>
  dataBase.collection('post').doc(id).update(updatedPost);
  // const getPost = () => dataBase.collection('post').get();
  // agrega escuchador de evento para obtener data
  window.addEventListener('DOMContentLoaded', async (e) => {
      onGetPost((querySnapshot) => {
        postContainer.innerHTML = '';
        postList.innerHTML = '';
        querySnapshot.forEach((doc) => {
        // contante para llamar la data del post
        const post = doc.data();
        // llama al id del post
        post.id = doc.id;
        // console.log(post);
        postContainer.innerHTML += `
=======

// obtiene valores guardados
// const getPost = () => dataBase.collection('post').get();
// const getPost = () => dataBase.collection('post').get();
// agrega escuchador de evento para obtener data


// cambiar para cargar en evento click
/* window.addEventListener('DOMContentLoaded', async (e) => {
  onGetPost((querySnapshot) => {
    postContainer.innerHTML = '';
    postList.innerHTML = '';
    querySnapshot.forEach((doc) => {
    // contante para llamar la data del post
      const post = doc.data();
      // llama al id del post
      post.id = doc.id;
      // console.log(post);
      postContainer.innerHTML += `
>>>>>>> 8017969e46dcf8e6200d1e4b5787bab6faf4c41d
        <div id="mainPost">
            <h2 class="title">${post.title}</h2>
            <p class="plocation">${post.location}</p>
            <p class="pdescription">${post.description}</p>
            <div id="icons">
              <i class="far fa-trash-alt btn-delete" data-id="${post.id}"></i>
              <span><i class="fas fa-heart"></i></span>
              <i class="fas fa-pencil-alt btn-edit" data-id="${post.id}"></i>
            </div>  
        </div>
        `;
      rootDiv.innerHTML += `
        <h2 class="title-list">${post.title}</h2>
        `;
<<<<<<< HEAD
        // Botón de borrar, escucha evento y recupera la data del id
        const btnsDelete = document.querySelectorAll('.btn-delete');
=======
    });
  });
}); */
// Botón de confirmar para eliminar. Manipulación del DOM.
/* const btnsDelete = document.querySelectorAll('.btn-delete');
btnsDelete.forEach(btn => {
  console.log('main');
  btn.addEventListener('click', async (e) => {
    const confirmar = confirm('¿Seguro que quieres borrar tu post?');
    if (confirmar === true) {
      await deletePost(e.target.dataset.id);
    }
  });
}); */
// Botón borrar con confirmación
/* const btnsDelete = document.querySelectorAll('.btn-delete');
        btnsDelete.forEach(btn => {
        btn.addEventListener('click', async (e) => {
          const confirmar = confirm('¿Seguro que quieres borrar tu post?');
          if (confirmar === true) {
            await deletePost(e.target.dataset.id);
          }
        });
      }); */
// Botón de borrar, escucha evento y recupera la data del id
/*         const btnsDelete = document.querySelectorAll('.btn-delete');
>>>>>>> 8017969e46dcf8e6200d1e4b5787bab6faf4c41d
        btnsDelete.forEach(btn =>{
            btn.addEventListener('click', async (e) =>{
                console.log(e.target.dataset.id);
                await deletePost(e.target.dataset.id);
            });
<<<<<<< HEAD
        });
        // Botón de editar
        const btnsEdit = document.querySelectorAll('.btn-edit');
        btnsEdit.forEach(btn => {
            btn.addEventListener('click', async (e) => {
                const doc = await getPostInfo(e.target.dataset.id);
                console.log(doc.data());
                const postEditing = doc.data();
                editStatus = true;
                id = doc.id;
                postForm['post-title'].value = postEditing.title;
                postForm['post-location'].value = postEditing.location;
                postForm['post-description'].value = postEditing.description;
                postForm['save'].innerText = 'Actualizar';
            });
        });
    });
  });
});
postForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const title = postForm['post-title'];
  const location = postForm['post-location'];
  const description = postForm['post-description'];
  if (!editStatus) {
    await savePost(title.value, location.value, description.value);
  } else {
      await updatePost(id, {
          title: title.value,
          location: location.value,
          description: description.value,
      });
      editStatus = false;
      postForm['save'].innerText='Guardar';
      id = '';
  }

  // limpia o resetea el formulario
  postForm.reset();
  title.focus();
  console.log(title,location, description);
=======
        }); */
// Botón de editar
const btnsEdit = document.querySelectorAll('.btn-edit');
btnsEdit.forEach(btn => {
  btn.addEventListener('click', async (e) => {
    const postEditing =  await getPostInfo(e.target.dataset.id);
    editStatus = true;
    id = doc.id;
    postForm['post-title'].value = postEditing.title;
    postForm['post-location'].value = postEditing.location;
    postForm['post-description'].value = postEditing.description;
    postForm['save'].innerText = 'Actualizar';
  });
});

// Botón de cada post
const btnsPost = document.querySelectorAll('.single-post');
btnsPost.forEach(btn => {
  btn.addEventListener('click', async (e) => {
    e.preventDefault();
    onNavigate('/singlepost');
  });
>>>>>>> 8017969e46dcf8e6200d1e4b5787bab6faf4c41d
});
