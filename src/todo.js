
export function toDo() {
    const toDo = document.getElementById('todo');

    let title = document.createElement('h1');
    title.textContent = 'Done Deal';
    title.setAttribute("class", "title");
    toDo.appendChild(title);
    
    let description = document.createElement('p');
    description.textContent = 'Your production starts here.';
    description.setAttribute("class", "description");
    toDo.appendChild(description);
}

