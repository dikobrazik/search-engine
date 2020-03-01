document.querySelector('input').addEventListener('keyup', ({ target }) => {
  fetch('/users?search=' + target.value, {
    method: 'GET'
  }).then((response) => {
    response.json().then((users) => {
      document.querySelector('ul').innerHTML = '';
      users.forEach((user) => {
        const listItem = document.createElement('li');
        listItem.innerText = user;
        document.querySelector('ul').appendChild(listItem);
      })
    })
  });
})