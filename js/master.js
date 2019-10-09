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
    //list push listItem {-content -selected}
  }
  completeSelected(items) {}
  removeCompleted(items) {}
}

let toDos = [];

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
      $(btnId).show();
      $(impId).hide();
      //$('form#login').submit();
      //create new object here
      return false;
    }
  });
}

addBtn("#newToDo", "#nameToDo");
