const usernameInput = document.getElementById("username");
const titleInput = document.getElementById("title");
const contentInput = document.getElementById("content");

function createAndRenderBlog() {
    const blog = {
        username: usernameInput.value,
        title: titleInput.value,
        content: contentInput.value,
    };
    const blogs = localStorage.getItem('blogs');
    blogs.push(blog);
    localStorage.setItem(blog, JSON.stringify(blogs));
}