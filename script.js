document.getElementById("button")
.addEventListener("click", () => { 
  const todoInput = document.getElementById("todo"); 
  const text = todoInput.value; 

  if (text === '') { 
    alert('please enter in a todo'); 
    return; 
  }

  const todo = createTodo(text); 

  document.querySelector('.list')
  .append(todo); 
  todoInput.value = ''; 
})


function createTodo(text) { 
  const todoListItem = document.createElement('li'); 
  const todoParagraph = createTodoParagraph(text);
  const deleteButton = createDeleteButton(todoListItem); 

  todoListItem.append(todoParagraph); 
  todoListItem.append(deleteButton); 
  
  return todoListItem; 
}

function createTodoParagraph(text) { 
  const todoParagraph = document.createElement('p'); 
  todoParagraph.textContent = text; 

  todoParagraph.addEventListener('click', () => { 
      todoParagraph.classList.toggle('completed'); 
  })

  return todoParagraph; 
}


function createDeleteButton(todo) { 
  const deleteButton = document.createElement('button'); 
  deleteButton.textContent = 'delete'; 

  deleteButton.addEventListener('click', () => { 
    todo.remove(); 
  })

  return deleteButton; 
}



//get user input (done)
//create todo (done)
//add user input to todo (done)
//create a delete button (done)
//create a way to toggle a todo (done)
//append it to the todos list (done)