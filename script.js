function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "user" && password === "password") {
        window.location.href = "blog.html";
    } else {
        document.getElementById("error-message").innerText = "Invalid username or password";
    }
}

function create() {
    alert("Blog post created!");
}

function read() {
    alert("Reading blog posts...");
}

function update() {
    alert("Blog post updated!");
}

function deletePost() {
    alert("Blog post deleted!");
}

