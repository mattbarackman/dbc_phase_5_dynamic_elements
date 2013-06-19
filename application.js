$(document).ready(function() {

  var todoTemplate = $.trim($('#todo_template').html());

  function bindEvents() {
    // Bind functions which add, remove, and complete todos to the appropriate
    // elements

    // Add Todo
    $('.toolbox').on('click', '.add', function(e){
      e.preventDefault();
      var todo_text = $('.todo').val();
      var builtTodo = buildTodo(todo_text);
      addTodo(builtTodo);
    });

    // Remove Todo
    $('.todo_list').on('click', '.delete', function(e){
      e.preventDefault();
      var todo = $(this).closest('.todo');
      removeTodo(todo);
    });

    $('.todo_list').on('click', '.complete', function(e){
      e.preventDefault();
      var todo = $(this).closest('.todo');
      if (todo.hasClass('completed')) {
        markTodoIncomplete(todo);
      } else {markTodoComplete(todo);}
    });
  }

  //Create functions to add, remove and complete todos

  function buildTodo(todoName) {
    // Creates an jQueryDOMElement from the todoTemplate.
    var $todo = $(todoTemplate);
    // Modifies it's text to use the passed in todoName.
    $todo.find('h2').text(todoName);
    // Returns the jQueryDOMElement to be used elsewhere.
    return $todo;
  }

  function addTodo(todo) {
    $('.todo_list').prepend(todo);
  }

  function removeTodo(todo) {
    $(todo).toggle(500, function() { $(todo).remove(); });
  }

  function markTodoComplete(todo) {
    $(todo).addClass('completed');
    $(todo).find('.complete').html("Mark incomplete");
  }

  function markTodoIncomplete(todo) {
    $(todo).removeClass('completed');
    $(todo).find('.complete').html("Mark complete");
  }

  bindEvents();
});
