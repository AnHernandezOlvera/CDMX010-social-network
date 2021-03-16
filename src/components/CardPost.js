const CardPost = (post) => {
  return `
    <div id="mainPost">
            <h2 class="title">${post.title}</h2>
            <p class="plocation">${post.location}</p>
            <p class="pdescription">${post.description}</p>
            <div id="icons">
              <i class="far fa-trash-alt btn-delete" data-id="${post.id}"></i>
              <button id="like"><i class="fas fa-heart">${post.likes.length}</i></button>
              <a href="/posting?id=${post.id}" class="btn-edit"><i class="fas fa-pencil-alt"></i></a>
            </div>  
        </div>
    `;
};
export default CardPost;
