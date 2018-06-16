var app = angular.module('TodoList',[]);
app.controller('TodosController',require('./todos-controller'))
.controller('AddTodoController',require('./add-todo-controller'))
.controller('TodoController',require('./todo-controller'))
