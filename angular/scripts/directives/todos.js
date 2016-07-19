angular.module('todoListApp').directive('todos', function(){
   return {
   templateUrl: 'templates/todos.html', //defines template
  // could erase controler from file and define here with:  controller: 'mainCtrl'
     replace:true // get rid of todo tags in html
   }
});