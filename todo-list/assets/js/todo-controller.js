module.exports = ['$scope',function($scope){
    $scope.deleteTodo =function(deleteTodo){
        _.remove($scope.todos,todo=>todo == deleteTodo)
        
        $scope.setTodos($scope.todos);
    }
}]