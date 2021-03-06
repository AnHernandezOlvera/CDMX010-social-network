/* eslint-disable no-alert */
/* eslint-disable no-unused-vars */
// llamar a Firestore
const dataBase = firebase.firestore();

export const savePost = ({
  title, location, description, likes,
}) => dataBase.collection('post').doc().set({
  title,
  location,
  description,
  likes,
});

// de la colección quiero un documento con el id que se obtiene al dar click
export const getAllPosts = async (id) => {
  const querySnapshot = await dataBase.collection('post').get();
  const posts = [];
  querySnapshot.forEach((doc) => {
    const post = doc.data();
    post.id = doc.id;
    posts.push(post);
  });

  return posts;
};
// Modificación getPostByID
export const getPostById = async (id) => {
  const doc = await dataBase.collection('post').doc(id).get();
  const post = doc.data();
  post.id = id;
  return post;
};
export const onGetPost = (callback) => dataBase.collection('post').onSnapshot(callback);
// para eliminar un post da un parametro id
export const deletePost = (id) => dataBase.collection('post').doc(id).delete();
// función actuaalizar en firebase

export const updatePost = (id, updatedPost) => dataBase.collection('post').doc(id).update(updatedPost);

// acceder
export const access = (emailAccess, passwordAccess, onNavigate) => {
  firebase.auth().signInWithEmailAndPassword(emailAccess, passwordAccess)
    .then((user) => {
      onNavigate('/home');
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert('Correo o contraseña incorrecto, verifica tu información o regístrate');
    });
};
// Verificar
export function verify() {
  const user = firebase.auth().currentUser;
  user.sendEmailVerification().then(() => {
  // Email sent
  }).catch((error) => {
  // An error happened
  });
}
// función para registro
export function registerUsser(email, password, onNavigate) {
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(() => {
      verify();
      onNavigate('/login');
    })
    .catch((error) => {
      alert('usuario ya registrado');
    });
}
// Función de registro con google
export const google = (onNavigate) => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider)
    .then((result) => {
      onNavigate('/home');
    })
    .catch((err) => {
    });
};
// Función signOut
export function signOut(onNavigate) {
  firebase.auth().signOut()
    .then(() => {
      onNavigate('/');
    })
    .catch((error) => {
    });
}
// Obtener información de usurio
export const observer = async () => {
  const user = await firebase.auth().currentUser;
  const userUid = user.uid;
  return userUid;
};
export const updatePostLike = (id, uid) => dataBase.collection('post').doc(id).update({
  likes: firebase.firestore.FieldValue.arrayUnion(uid),
});
export const updatePostUnLike = (id, uid) => dataBase.collection('post').doc(id).update({
  likes: firebase.firestore.FieldValue.arrayRemove(uid),
});
