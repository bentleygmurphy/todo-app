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
    this.collection = ["test", "test", "test"];
    this.completedCollection = [];
  }
  add(content) {
    this.collection.push(new ListItem(content));
  }
}

class ListItem {
  constructor(content) {
    this.content = content;
  }
}
