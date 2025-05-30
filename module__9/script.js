let tableBody = document.querySelector("#post-table tbody");

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

// let tableBody = document.querySelector("#postsTable tbody");

// const fetchData = async () => {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//     const posts = await response.json();

//     posts.slice(0, 10).forEach((post) => {
//       let row = document.createElement("tr");
//       row.innerHTML = `
//         <td>${post.id}</td>
//         <td>${post.title}</td>
//         <td>${post.body}</td>
//       `;
//       tableBody.appendChild(row);
//     });
//   } catch (err) {
//     console.log(err);
//   }
// };

// fetchData();
