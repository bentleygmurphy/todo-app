function printToDo() {
  $(".listContainer").html("");
  for (let i = 0; i < myToDos.collection.length; i++) {
    listId = `list${i}`;
    listXId = `listX${i}`;
    $(".listContainer").append(
      `<div id="${listId}" class="list">
      ${myToDos.collection[i].title}
      <i id="${listXId}" class="far fa-window-close closeX"></i>
      </div>`
    );
  }
}

function clickTodo() {
  $(".list").each(function(i) {
    $(`#list${i}`).click(function() {
      for (let j = 0; j < myToDos.collection.length; j++) {
        $(`#list${j}`).css("background-color", "");
      }
      id = `item${i}`;
      printList(i);
      $(`#list${i}`).css("background-color", "grey");
    });
  });
}

function printList(toDo) {
  $(".toDoList").html("");
  for (let i = 0; myToDos.collection[toDo].collection[i]; i++) {
    $(".toDoList").append(
      `<div id="${id}" class="item">${myToDos.collection[toDo].collection[i]}</div>`
    );
  }
  $(".toDoList").append(
    `<a id="newItem" class="addBtn">
      <i class="fas fa-plus"></i>
      </a>
      <input id="nameItem" class="addImp" type="text" />`
  );
}

//make semantic with list add
function addToDoBtn(btnId, impId) {
  $(btnId).click(function() {
    $(btnId).hide();
    $(impId).val("");
    $(impId).show();
    $(impId).focus();
  });
  $(impId).keypress(function(e) {
    if (e.which == 13) {
      if ($(impId).val() != "") {
        titleValue = $(impId).val();
        myToDos.add(titleValue);
      }
      $(btnId).show();
      $(impId).hide();
      printToDo();
      clickTodo();
      return false;
    }
  });
}

addToDoBtn("#newToDo", "#nameToDo");
