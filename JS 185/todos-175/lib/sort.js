// Compare object titles alphabetically (case insensitive)
const compareByTitle = (itemA, itemB) => {
  let titleA = itemA.title.toLowerCase();
  let titleB = itemB.title.toLowerCase();

  if (titleA < titleB) {
    return -1;
  } else if (titleA > titleB) {
    return 1;
  } else {
    return 0;
  }
};

module.exports = {
  // Return a list of todo lists sorted by their completion status and title
  // (case-sensitive). The uncompleted and completed todo lists must be passed
  // to the method via the `undone` and `done` arguments.
  sortTodoLists(undone, done) {
    undone.sort(compareByTitle);
    done.sort(compareByTitle);
    return [].concat(undone, done);
  },

  // return the list of todos in the todo list sorted by completion status and
  // title.
  sortTodos(todoList) {
    let undone = todoList.todos.filter(todo => !todo.isDone());
    let done = todoList.todos.filter(todo => todo.isDone());
    undone.sort(compareByTitle);
    done.sort(compareByTitle);
    return [].concat(undone, done);
  },
};
