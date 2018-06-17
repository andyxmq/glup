'use strict';

module.exports = ['$scope', function ($scope) {
    $scope.setTodos = function (todos) {
        localStorage.setItem('todos', JSON.stringify(todos));
    };
    $scope.getTodos = function () {
        var todos = localStorage.getItem('todos');
        if (todos) {
            todos = JSON.parse(todos);
        } else {
            todos = [];
        }
        return todos;
    };
    $scope.todos = $scope.getTodos();
}];