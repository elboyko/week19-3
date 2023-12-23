// Получаем элементы со страницы
const inputTitle = document.querySelector('.input-title');
const inputText = document.querySelector('.input-text');
const buttonOut = document.querySelector('.btn-add');


//функция для добавления постов на страницу
function addPosts(title, body) {
   fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
         title: title,
         body: body,
         userId: 1
      }),
      headers: {
         "Content-type": "application/json; charset=UTF-8"
      }
   })
      .then(response => response.json())
      .then((json) => {
         //добавляем пост на страницу
         const postOut = document.querySelector('.post-out');
         const post = document.createElement('div');
         post.innerHTML = `
                     <h2>${json.title}</h2>
                     <p>${json.body}</p>
                           `;
         postOut.append(post);
      })
      .catch((error) => console.log(error))
}


//вешаем обработчик события на кнопку
buttonOut.addEventListener('click', createPosts)
function createPosts() {
   const title = inputTitle.value;
   const body = inputText.value;
   addPosts(title, body);
   inputTitle.value = '';
   inputText.value = ''
}
