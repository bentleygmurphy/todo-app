let toDos = [];
let idcount = 0;

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

function displayItems() {
  $(".listContainer").html("");
  for (let i = 0; i < toDos.length; i++) {
    $(".listContainer").append(`<div>${toDos[i].title}</div>`);
  }
}

//for every entry put todo into objects

//for every listItem show div

function deleteBtn(id, target) {
  //btn id
  //target to delete
}

function addBtn(btnId, impId) {
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
      tempObj.id = idcount;
      tempObj.title = titleValue;
      toDos.push(tempObj);
      idcount ++;
      displayItems();
      $(btnId).show();
      $(impId).hide();
      return false;
    }
  });
}

addBtn("#newToDo", "#nameToDo");
