let toDos = [];
let toDoIdCount = 0;

class toDo {
  constructor(title) {
    this.id = Number();
    this.title = title;
    this.selected = false;
    this.list = [
      // this.listItem = {
      //     this.id = Number(),
      //     itemContent = "",
      //     itemSelected = false,
      // }
    ];
    this.completedList = [];
  }
  addListItem(content) {
    this.list.push(content);
  }
  completeSelected(items) {}
  removeCompleted(items) {}
}

function deleteBtn(id, target) {
  //btn id
  //target to delete
}

function displayToDos() {
  $(".listContainer").html("");
  for (let i = 0; i < toDos.length; i++) {
    id = `list${toDos[i].id}`
    $(".listContainer").append(`<div id="${id}" class="list">${toDos[i].title}</div>`);
  }
}

function addToDoBtn(btnId, impId) {
  $(btnId).click(function() {
    $(btnId).hide();
    $(impId).val("");
    $(impId).show();
    $(impId).focus();
  });
  $(impId).keypress(function(e) {
    if (e.which == 13) {
      titleValue = $(impId).val();
      let tempObj = new toDo();
      tempObj.id = toDoIdCount;
      tempObj.title = titleValue;
      toDos.push(tempObj);
      toDoIdCount++;
      $(btnId).show();
      $(impId).hide();
      displayToDos();
      showList();
      return false;
    }
  });
}

function showList() {
  $('.list').each(function(i, obj) {
    //for every list show a list and set selected true
});
}

addToDoBtn("#newToDo", "#nameToDo");