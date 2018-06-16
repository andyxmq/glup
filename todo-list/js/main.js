(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
module.exports = ['$scope',function($scope){
    $scope.newTodo = '';
    $scope.addTodo = function(newTodo){
        if(!newTodo){
            return;
        }
        $scope.todos.push({
            name: newTodo
        });

        $scope.setTodos($scope.todos);
        $scope.newTodo = '';
    }
}]
},{}],2:[function(require,module,exports){
var app = angular.module('TodoList',[]);
app.controller('TodosController',require('./todos-controller'))
.controller('AddTodoController',require('./add-todo-controller'))
.controller('TodoController',require('./todo-controller'))

},{"./add-todo-controller":1,"./todo-controller":3,"./todos-controller":4}],3:[function(require,module,exports){
module.exports = ['$scope',function($scope){
    $scope.deleteTodo =function(deleteTodo){
        _.remove($scope.todos,function(todo){
            return todo == deleteTodo
        })
        $scope.setTodos($scope.todos);
    }
}]
},{}],4:[function(require,module,exports){
module.exports = ['$scope',function($scope){
    $scope.setTodos = function(todos){
        localStorage.setItem('todos',JSON.stringify(todos));
    }

    $scope.getTodos = function(){
        todos = localStorage.getItem('todos');
        if(todos){
            todos = JSON.parse(todos);
        }else{
            todos = [];
        }
        return todos;
    }
    $scope.todos = $scope.getTodos();
}];
},{}]},{},[2]);
