//Welcome to the wild west 🌵

$(window).on("load", refreshLocal());
$(window).on("load", printToDo());
$(window).on("load", clickTodo());

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
      refreshLocal();
      printToDo();
      clickTodo();
      deleteTodo();
      return false;
    }
  });
}

addToDoBtn("#newToDo", "#nameToDo");

function printToDo() {
  $(".toDoContainer").html("");
  for (let i = 0; i < myToDos.collection.length; i++) {
    toDoId = `toDo${i}`;
    selId = `selId${i}`;
    $(".toDoContainer").append(
      `<div id="${toDoId}" class="toDo">
        ${myToDos.collection[i].title}
        <div id="${selId}">
        </div>
      </div>`
    );
  }
}

function clickTodo() {
  $(".toDo").each(function(i) {
    $(`#toDo${i}`).click(function() {
      $(".listBtnContainer").css("display", "flex");
      for (let j = 0; j < myToDos.collection.length; j++) {
        myToDos.collection[j].selected = false;
        $(`#selId${j}`).html("");
      }
      myToDos.collection[i].selected = true;
      $(`#selId${i}`).append(`<i class="fas fa-arrow-right"></i>`);
      printListItem();
      $("#deleteBtn").css("display", "block");
    });
  });
}

function deleteTodo() {
  $("#deleteBtn").click(function() {
    for (let i = 0; i < myToDos.collection.length; i++) {
      if (myToDos.collection[i].selected == true) {
        myToDos.collection.splice(i, 1);
      }
    }
    refreshLocal();
    printToDo();
    clickTodo();
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
        for (let i = 0; i < myToDos.collection.length; i++) {
          if (myToDos.collection[i].selected == true) {
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
  for (let i = 0; i < myToDos.collection.length; i++) {
    if (myToDos.collection[i].selected == true) {
      $(".listContainer").html("");
      for (let j = 0; j < myToDos.collection[i].collection.length; j++) {
        $(".listContainer").append(
          `<div class="listItem">
          - ${myToDos.collection[i].collection[j]}
          </div>`
        );
      }
    }
  }
}

function refreshLocal() {
  localStorage.removeItem(myToDos);
  localStorage.setItem("myToDos", JSON.stringify(myToDos.collection));
}
