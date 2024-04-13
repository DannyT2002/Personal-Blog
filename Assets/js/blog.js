// Check if the page is blog.html to load posts from localStorage
if (window.location.pathname.includes("blog.html")) {
    displayPosts();
}

// Function to display posts from localStorage
function displayPosts() {
    const postsList = document.getElementById("postsList");
    postsList.innerHTML = "";

    const posts = JSON.parse(localStorage.getItem("posts")) || [];

    posts.forEach(post => {
        const postElement = document.createElement("div");
        postElement.classList.add("post");
        postElement.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.content}</p>
            <p>Author: ${post.username}</p>
        `;
        postsList.appendChild(postElement);
    });
}
