const todoForm = document.querySelector('#todoform');
const todoList = document.querySelector('#todo-section-list')
const todoInput = document.querySelector('#todoinput')



todoForm.addEventListener('submit', e => {

    e.preventDefault()

    const todoListItem = document.createElement('li')
    const todoListItemChkbx = document.createElement('input')
    const todoListText = document.createTextNode(todoInput.value)
    // Add bootstrap classes
    todoListItem.classList.add('list-group-item')
    todoListItemChkbx.type = 'checkbox'
    todoListItemChkbx.classList.add('form-check-input')
    todoListItemChkbx.classList.add('me-1')

    todoListItem.appendChild(todoListItemChkbx)
    todoListItem.appendChild(todoListText)
    todoList.appendChild(todoListItem)
    todoInput.value = ''

    todoListItemChkbx.addEventListener('change', (e) => {
        todoListItem.classList.add('text-decoration-line-through')
        setTimeout(() => { todoListItem.remove() }, 5000)
    })
});