// Form submission
const blogForm = document.getElementById("blogForm");
blogForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;

    if (username && title && content) {
        const newPost = {
            username: username,
            title: title,
            content: content
        };

        const posts = JSON.parse(localStorage.getItem("posts")) || [];
        posts.push(newPost);
        localStorage.setItem("posts", JSON.stringify(posts));

        window.location.href = "blog.html";
    } else {
        document.getElementById("formMessage").classList.remove("hidden");
    }
});
