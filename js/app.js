const input = document.querySelector('input')


const btn = document.querySelector("#submit-button")
btn.addEventListener('click', function(evt) {
  const newLi = document.createElement('li')
  const inp = document.querySelector('input')
  newLi.textContent = inp.value
  if (inp.value !== '') {
    document.querySelector('ul').appendChild(newLi)
    inp.value = ''
    console.log(newLi)
  }

});


const uList = document.querySelector('#todo-list')

