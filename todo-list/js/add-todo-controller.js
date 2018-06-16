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