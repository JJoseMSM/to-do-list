
export function todoForm() {

    const toDo = document.getElementById('todo');

    let form = document.createElement('form');
    form.setAttribute('id', 'todoForm');

    let todoLabel = document.createElement('label');
    todoLabel.textContent = 'Todo: ';
    todoLabel.setAttribute('class', 'todoLabel');
    form.appendChild(todoLabel);

    let todoInput = document.createElement('input');
    todoInput.setAttribute('type', 'text');
    todoInput.setAttribute('name', 'name');
    todoInput.setAttribute('required', true);
    todoInput.setAttribute('class', 'todoInput');
    form.appendChild(todoInput);

    let submitButton = document.createElement('button');
    submitButton.setAttribute('type', 'submit');
    submitButton.setAttribute('class', 'addButton');
    submitButton.textContent = 'Add todo';
    form.appendChild(submitButton);

    toDo.appendChild(form);

    return form;
}