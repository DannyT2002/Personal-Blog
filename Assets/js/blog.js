// Function to display posts from localStorage
function displayPosts() {
    const postsList = document.getElementById("postsList");
    postsList.innerHTML = "";

    const posts = JSON.parse(localStorage.getItem("posts")) || [];

    posts.forEach((post, index) => {
        const postElement = document.createElement("div");
        postElement.classList.add("post");
        postElement.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.content}</p>
            <p>Author: ${post.username}</p>
            <button class="delete-button" data-index="${index}">Delete</button> <!-- Add delete button -->
        `;
        postsList.appendChild(postElement);
    });

    // Add event listeners to delete buttons
    const deleteButtons = document.querySelectorAll(".delete-button");
    deleteButtons.forEach(button => {
        button.addEventListener("click", function() {
            const index = parseInt(button.dataset.index);
            deletePost(index);
        });
    });
}

// Function to delete post from localStorage
function deletePost(index) {
    const posts = JSON.parse(localStorage.getItem("posts")) || [];
    posts.splice(index, 1);
    localStorage.setItem("posts", JSON.stringify(posts));
    location.reload(); // Refresh the page to reflect changes
}

// Check if the page is blog.html to load posts from localStorage
if (window.location.pathname.includes("blog.html")) {
    displayPosts();
}
