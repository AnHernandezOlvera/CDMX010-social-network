export const singlepost = () => {
  const rootDiv = document.getElementById('root');
  const templeteSinglePost = `
      <div id="post-container"></div>
    `;
  rootDiv.innerHTML = templeteSinglePost;
};
export default singlepost;
