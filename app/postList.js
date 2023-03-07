const postList = document.querySelector(".posts");
export const setupPosts = (data) => {
    //let html = "Iniciaste sesion OK";
    //postList.innerHTML = html;
    if (data.length) {
        postList.innerHTML = data;
    } else {
        postList.innerHTML =
            '<h4 class="text-white">Inicia sesion para ver</h4>';
    }
};
/*
export const setupPosts = (data) => {
  if (data.length) {
    let html = "";
    data.forEach((doc) => {
      const post = doc.data();
      const li = `
      <li class="list-group-item list-group-item-action">
        <h5>${post.title}</h5>
        <p>${post.content}</p>
      </li>
    `;
      html += li;
    });
    postList.innerHTML = html;
  } else {
    postList.innerHTML = '<h4 class="text-white">Login to See Posts</h4>';
  }
};
*/
