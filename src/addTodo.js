
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
    todoInput.setAttribute('id', 'todoInput');
    form.appendChild(todoInput);

    let submitButton = document.createElement('button');
    submitButton.setAttribute('type', 'submit');
    submitButton.setAttribute('class', 'addButton');
    submitButton.textContent = 'Add todo';
    form.appendChild(submitButton);

    toDo.appendChild(form);

    return form;
}

export function addTodo() {

    const addTodo = document.getElementById('todoForm');
    const todoInput = document.getElementById('todoInput');
    
    addTodo.addEventListener('submit', function(e) {
        e.preventDefault();

        let myToDos = [];

        function toDoTemplate() {
            todoInput.value;
        }

        myToDos.push(toDoTemplate);

        myToDos.forEach(() => {

            const addInputCard = document.getElementById('todo');

            let todoCard = document.createElement('div');
            todoCard.setAttribute('class', 'todoCard');
            addInputCard.appendChild(todoCard);

            let todoInfo = document.createElement('p');
            todoInfo.textContent = todoInput.value;
            todoInfo.setAttribute('class', 'todoInfo')
            todoCard.appendChild(todoInfo);

            let todoDelete = document.createElement('button');
            todoDelete.textContent = 'Delete';
            todoDelete.setAttribute('class', 'todoDelete');
            todoDelete.setAttribute('id', 'todoDelete');
            todoDelete.addEventListener('click', function() {
                todoCard.remove();
            });
            todoCard.appendChild(todoDelete);

            let todoCompleted = document.createElement('p');
            todoCompleted.textContent = 'Complete';
            todoCompleted.setAttribute('class', 'todoComplete');
            let todoCheckmark = document.createElement('input');
            todoCheckmark.type = 'checkbox';
            todoCheckmark.name = 'name';
            todoCheckmark.value = 'value';
            todoCheckmark.setAttribute('class', 'todoCheckmark');
            todoCard.appendChild(todoCompleted);
            todoCompleted.appendChild(todoCheckmark);
        });
    });
}