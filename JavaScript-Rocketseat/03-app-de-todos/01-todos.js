/* Referenciar todos os elementos da DOM */

var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');


/* Armazenamento dos todos dentro do Javascript */

var todos = JSON.parse(localStorage.getItem('list_todos')) || [];


/* Criar uma função (renderTodos) para renderizar os Todos em tela dentro da nossa lista */

function renderTodos() { 
    listElement.innerHTML = ''; // tudo que tiver dentro da ul vai ficar vazio

    for (todo of todos) {
       var todoElement = document.createElement('li'); 
       var todoText = document.createTextNode(todo);

        /* Excluir um Todo da lista */

        var linkElement = document.createElement('a');
            linkElement.setAttribute('href', '#');

        var pos = todos.indexOf(todo);
            linkElement.setAttribute('onclick', 'deleteTodo(' + pos + ')');

        var linkText = document.createTextNode('Excluir');

            linkElement.appendChild(linkText);

            todoElement.appendChild(todoText);
            todoElement.appendChild(linkElement);
        
            listElement.appendChild(todoElement);
    }
}

renderTodos();


/* Adicionar um novo Todo */

function addTodo() {
    var todoText = inputElement.value;

    todos.push(todoText);
    inputElement.value = '';
    renderTodos();
    saveToStorage();
}

buttonElement.onclick = addTodo;



function deleteTodo(pos) {
    todos.splice(pos, 1);
    renderTodos();
    saveToStorage();

}


/* Função que salva no storage - vai salvar a list de todo no storage*/

function saveToStorage() {
    localStorage.setItem('list_todos', JSON.stringify(todos));
}