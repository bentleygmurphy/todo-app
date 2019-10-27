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

function printToDo() {
  $(".toDoContainer").html("");
  for (let i = 0; i < myToDos.collection.length; i++) {
    toDoId = `toDo${i}`;
    $(".toDoContainer").append(
      `<div id="${toDoId}" class="toDo">
      ${myToDos.collection[i].title}
      </div>`
    );
  }
}

function clickTodo() {
  $(".toDo").each(function(i) {
    $(`#toDo${i}`).click(function() {
      $(".listBtnContainer").css("display", "flex");
      for(let j = 0; j < myToDos.collection.length; j++){
        myToDos.collection[j].selected = false;
        $(`#toDo${j}`).css("background-color", "");
      }
      myToDos.collection[i].selected = true;
      $(`#toDo${i}`).css("background-color", "grey");
      printListItem();
    });
  });
}

function addListItemBtn(btnId, impId) {
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
        for(let i = 0; i < myToDos.collection.length; i++){
          if(myToDos.collection[i].selected == true) {
            myToDos.collection[i].add(titleValue);
          }
        }
      }
      printListItem();
      $(btnId).show();
      $(impId).hide();
      return false;
    }
  });
}

addListItemBtn("#newItem", "#nameItem");

function printListItem() {
  for(let i = 0; i < myToDos.collection.length; i++){
    if(myToDos.collection[i].selected == true) {
      $(".listContainer").html("");
      for(let j = 0; j < myToDos.collection[i].collection.length; j++) {
        $(".listContainer").append(
          `<div id="${toDoId}" class="toDo">
          ${myToDos.collection[i].collection[j]}
          </div>`
        );  
      }
    }
  }
}