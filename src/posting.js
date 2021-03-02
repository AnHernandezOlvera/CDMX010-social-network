export const posting = `<div id="post-form">
    <form id="form">
      <h1>Escribe tu post</h1>
      <input id="post-title" type="text" placeholder="Título" required>
      <input id="post-location" type="text" placeholder="Coordenadas" required>
      <textarea id="post-description" type="text" placeholder="Descripción" required minlength="20" rows="8"></textarea>
      <button id="save" value="submit">Publicar</button>
    </form>  
  </div>
`;
export default posting;
