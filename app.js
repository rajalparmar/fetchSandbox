document.getElementById('button1').addEventListener('click', getText);
document.getElementById('button2').addEventListener('click', getJson);
document.getElementById('button3').addEventListener('click', getExternal);

// Text data
function getText() {
    fetch('test.txt')
    .then(function(response) {
        return response.text();
    })
    .then(function(data) {
        document.getElementById('output').innerHTML = data;
    })
    .catch(function(err) {
        console.log(err);
    });
}
// JSON data
function getJson() {
    fetch('posts.json')
    .then(function(response) {
        return response.json();
    })
    .then(function(posts) {
        let output = '';
        posts.forEach(post => {
            output += `
            <ul>${post.title}
                <li>${post.body}</li>
            </ul>
            `
        });
        document.getElementById('output').innerHTML = output;
    })
    .catch(function(err) {
        console.log(err);
    });
}

// External API
function getExternal() {
    fetch('https://api.github.com/users')
    .then(function(response) {
        return response.json();
    })
    .then(function(users) {
        let output = '';
        users.forEach(user => {
            output += `<li>${user.login}</li>`
        });
        document.getElementById('output').innerHTML = output;
    })
    .catch(function(err) {
        console.log(err);
    });
}

