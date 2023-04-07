angular.module('todoApp', [])
    .controller('todoCtrl', function($scope) {
      // Initialize the tasks array with any existing tasks from local storage
      $scope.tasks = JSON.parse(localStorage.getItem('tasks')) || [];

      // Define a function to add a new task to the array
      $scope.addTask = function() {
        $scope.tasks.push({title: $scope.newTask, completed: false});
        // Reset the input field after adding the task
        $scope.newTask = '';
        // Save the tasks to local storage
        $scope.saveTasks();
      };
     
      // Define a function to save the tasks array to local storage
      $scope.saveTasks = function() {
        localStorage.setItem('tasks', JSON.stringify($scope.tasks));
      };

      // Define a function to delete a task from the array
      $scope.deleteTask = function(task) {
        var index = $scope.tasks.indexOf(task);
        $scope.tasks.splice(index, 1);
        // Save the tasks to local storage
        $scope.saveTasks();
      };
    });