const CardPost = (post) => `
<div class="card" id="mainPost">
        <h2 class="title">${post.title}</h2>
        <p class="plocation">${post.location}</p>
        <p class="pdescription">${post.description}</p>
        <div id="icons">
        <i class="far fa-trash-alt btn-delete" data-id="${post.id}"></i>
          <span><i class="fas fa-heart"></i></span>
          <a href="/posting?id=${post.id}" class="btn-edit"><i class="fas fa-pencil-alt"></i></a>
        </div>
    </div>    
    <div id="commentsBox">
        <form id="commentsForm">
            <textarea name="" id="comment" cols="5" rows="5">Escribe tu comentario</textarea>
            <button id="sendComment" value="submit">Enviar Comentario</button>
        </form>
        <div id="commentsList">
            <p>Sin comentarios</p>
        </div>
    </div> 
    `;
export default CardPost;
