/*let tableBody = document.querySelector("#post-table tbody");

fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response)=>response.json())
  .then((posts)=>{
  posts.forEach(post => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${post.id}</td>
      <td>${post.title}</td>
      <td>${post.body}</td>
    `;
    tableBody.appendChild(row);
  });
})
*/
let row = document.querySelector(".row");

const fetchData = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();

    posts.slice(0, 12).forEach((post) => {
      // let row = document.createElement("tr");

      row.innerHTML += `
        <div class="col-4">
          <div class="card bg-dark text-white mb-3 border p-3">
            <h2>${post.id}</h2>
            <p>${post.title}</p>
            <p>${post.body}</p>
          </div>
        </div>
      `;

      // row.appendChild(row);
    });
  } catch (err) {
    console.log(err);
  }
};

fetchData();

// fetchData();
