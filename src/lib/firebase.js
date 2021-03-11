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
// función para login
export const createUsser = (email, password) => {
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
};
