// Form submission
const blogForm = document.getElementById("blogForm"); // Get the form element by its ID
blogForm.addEventListener("submit", function(event) { // Add a submit event listener to the form
    event.preventDefault(); // Prevent the default form submission behavior

    // Get the values of the username, title, and content input fields
    const username = document.getElementById("username").value;
    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;

    // Check if all required fields are filled
    if (username && title && content) {
        // If all fields are filled, create a new post object
        const newPost = {
            username: username,
            title: title,
            content: content
        };

        // Retrieve existing posts from local storage or initialize an empty array
        const posts = JSON.parse(localStorage.getItem("posts")) || [];

        // Add the new post to the posts array
        posts.push(newPost);

        // Save the updated posts array to local storage
        localStorage.setItem("posts", JSON.stringify(posts));

        // Redirect the user to the blog.html page
        window.location.href = "blog.html";
    } else {
        // If any required field is empty, display a message to the user
        document.getElementById("formMessage").classList.remove("hidden");
    }
});
