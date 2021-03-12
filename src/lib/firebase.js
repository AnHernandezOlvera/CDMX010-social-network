// llamar a Firestore
export const dataBase = firebase.firestore();
const likes2 = [];
export const savePost = ({
  title, location, description, comments,
}) => dataBase.collection('post').doc().set({
  title,
  location,
  description,
  likes2,
  comments,
});

// de la colección quiero un documento con el id que se obtiene al dar click
export const getAllPosts = async () => { // quitamos id de
  const querySnapshot = await dataBase.collection('post').get();
  const posts = [];
  querySnapshot.forEach((doc) => {
    const post = doc.data();
    post.id = doc.id;
    posts.push(post);
  });

  return posts;
};

export const getPostById = async (id) => {
  const doc = await dataBase.collection('post').doc(id).get();
  const post = doc.data();
  post.id = id;
  return post;
};
/* export const getPostById = async (id) => {
  const doc = await dataBase.collection('post').doc(id).get();
  return { ...doc.data(), id };
}; */

export const onGetPost = (callback) => dataBase.collection('post').onSnapshot(callback);
// para eliminar un post da un parametro id
export const deletePost = (id) => dataBase.collection('post').doc(id).delete();
// función actuaalizar en firebase
export const updatePost = (id, updatedPost) => dataBase.collection('post').doc(id).update(updatedPost);
// función para enviar mensajes
export function addComment(id, comment) {
  firebase.firestore().ref(`post/${id}/Comentarios`).set({
    comments: comment,
  });
}
// Verificar
export function verify() {
  const user = firebase.auth().currentUser;
  user.sendEmailVerification().then(() => {
  // Email sent.
    console.log('Enviando correo');
  }).catch((error) => {
  // An error happened.
    console.log(error);
  });
}
// función para registro
export function registerUsser(email, password) {
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(() => {
      verify();
    })
    .catch((error) => {
      console.log(error);
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
}
// acceder
export function access(emailAccess, passwordAccess) {
  firebase.auth().signInWithEmailAndPassword(emailAccess, passwordAccess)
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
}
// Observer
export function observer() {
  firebase.auth().onAuthStateChanged((user) => {
    const usuario = user;
    if (usuario) {
      const email = user.email;
      const emailVerified = user.emailVerified;
      const uid = user.uid;
      const providerData = user.providerData;
      // console.log(user);
    } else {
      console.log('no registrdo');
    }
  });
}
//
export const validacion = async (emailAccess) => {
  const state = await firebase.auth().onAuthStateChanged((user) => {
    const emailVerified = user.emailVerified;
  });
  console.log(user);
  return user;
};
