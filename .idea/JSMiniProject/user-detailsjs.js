// Отримати значення параметра id з URL
const urlParams = new URLSearchParams(window.location.search);
const userId = urlParams.get('id');
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
// Отримати користувача з масиву об'єктів за його id
const user = users.find(user => user.id === parseInt(userId));

// Вивести докладну інформацію про користувача на сторінці
const userDetailsDiv = document.createElement('div');
userDetailsDiv.innerHTML = `
    <h2>Детальна інформація про користувача:</h2>
    <p>ID: ${user.id}</p>
    <p>Name: ${user.name}</p>
    <p>Surname: ${user.surname}</p>
    <p>Email: ${user.email}</p>
    <p>Phone: ${user.phone}</p>
    <p>Order: ${user.order}</p>
`;
document.body.appendChild(userDetailsDiv);
        const postButton = document.createElement('button');
        postButton.textContent = 'post of current user';
        postButton.classList.add('postlButton'); // Додаємо клас для стилізації кнопки

// Додаємо обробник подій для кнопки
        postButton.addEventListener('click', () => {
            fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
                .then(response => response.json())
                .then(posts => {
                    // Створюємо блок для відображення заголовків постів
                    const postsDiv = document.createElement('div');
                    postsDiv.innerHTML = '<h3>Пости поточного користувача:</h3>';

                    // Додаємо заголовки постів до блоку
                    posts.forEach(post => {
                        const postTitle = document.createElement('p');
                        postTitle.textContent = post.title;
                        postsDiv.appendChild(postTitle);
                    });
                    // Додаємо блок з постами до сторінки
                    userDetailsDiv.appendChild(postsDiv);
                })
                .catch(error => console.error('Error fetching posts:', error)); // Обробляємо помилки тут
        });

// Додаємо кнопку до блоку з детальною інформацією
        userDetailsDiv.appendChild(postButton);

// Додаємо блок з детальною інформацією до тіла документу
        document.body.appendChild(userDetailsDiv);})





