
document.getElementById("button")
.addEventListener('click', () => { 
  const todoList = document.querySelector('.list'); 
  const input = document.querySelector("input");
  const text = input.value; 

  if (text === '') {
    alert('enter in a todo'); 
    return; 
  }

  const todo = createTodo(text); 

  todoList.append(todo); 
  input.value = ''; 
})

function createTodo(text) { 
  const todoListItem = document.createElement('li'); 
  const textParagraph = createTextParagraph(text); 
  const deleteButton = createDeleteButton(todoListItem); 

  todoListItem.append(textParagraph); 
  todoListItem.append(deleteButton); 

  return todoListItem; 
}

function createTextParagraph(text) { 
  const textParagraph = document.createElement("p"); 
  textParagraph.textContent = text; 

  textParagraph.addEventListener('click', () => { 
      textParagraph.classList.toggle('completed'); 
  }); 

  return textParagraph; 
} 

function createDeleteButton(todo) { 
  const deleteButton = document.createElement('button'); 
  deleteButton.textContent = 'Delete'; 
  deleteButton.addEventListener('click', () => { 
    todo.remove(); 
  })
  
  return deleteButton; 
}



