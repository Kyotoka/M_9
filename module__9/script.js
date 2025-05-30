// let tableBody = document.querySelector("#post-table tbody");

// fetch('https://jsonplaceholder.typicode.com/posts')
//   .then((response)=>response.json())
//   .then((posts)=>{
//   posts.forEach(post => {
//     const row = document.createElement("tr");
//     row.innerHTML = `
//       <td>${post.id}</td>
//       <td>${post.title}</td>
//       <td>${post.body}</td>
//     `;
//     tableBody.appendChild(row);
//   });
// })

// let tableBody = document.querySelector("#postsTable tbody");

let row = document.querySelector(".row");

const fetchData = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();

    posts.slice(0, 12).forEach((post) => {
      row.innerHTML += `
        <div class="col-4 d-flex justify-content-center mb-4">
          <div class="card border p-3 w-100">
            <h2>${post.id}</h2>
            <p>${post.title}</p>
            <p>${post.body}</p>
          </div>
        </div>
      `;
    });
  } catch (err) {
    console.log(err);
  }
};

fetchData();

