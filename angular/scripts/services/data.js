'use strict';
angular.module('todoListApp').service('dataService', function($http){

    
    this.getTodos = function(callback) {
      $http.get('todos.json').then(callback)
    }
    
    this.deleteTodo = function(todo) {
    console.log("The " + todo.name + " todo has been Deleted!");
    }
    this.saveTodos = function(todos) {
    console.log(todos.length + " todo(s) has been Saved!");
    }                
                
                
    });