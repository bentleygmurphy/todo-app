class ToDoCollection {
  constructor() {
    this.collection = [];
  }
  add(title) {
    this.collection.push(new ToDo(title));
  }
}

var myToDos = new ToDoCollection();

class ToDo {
  constructor(title) {
    this.title = title;
    this.selected = false;
    this.collection = [];
    this.completedCollection = [];
  }
  add(content) {
    this.collection.push(content);
  }
}
