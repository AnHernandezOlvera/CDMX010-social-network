export const singlepost = (target) => {
  const templeteSinglePost = `
      <div id="post-container"></div>
    `;
  // eslint-disable-next-line no-param-reassign
  target.innerHTML = templeteSinglePost;
};
export default singlepost;
