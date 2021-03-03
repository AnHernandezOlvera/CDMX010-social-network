// import CardPost from './components/CardPost';

export const post = () => {
  const rootDiv = document.getElementById('root');
  // const postContainer = document.getElementById('post-container');
  const templeteHome = `
    <div id="post-container"></div>
  `;
  rootDiv.innerHTML = templeteHome;
  // postContainer.innerHTML = CardPost;
};
export default post;
