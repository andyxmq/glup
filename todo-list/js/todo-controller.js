module.exports = ['$scope',function($scope){
    $scope.deleteTodo =function(deleteTodo){
        _.remove($scope.todos,function(todo){
            return todo == deleteTodo
        })
        $scope.setTodos($scope.todos);
    }
}]