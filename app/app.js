"use strict";

var app = angular.module('ToDoApp', ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider
  .when('/items/list', {
    templateUrl: 'partials/item-list.html',
    controller: 'TodoCrtl'
  })
  .when('/items/new',{
    templateUrl: 'partials/item-form.html',
    controller: 'TodoCrtl'
  })
  .otherwise('/items/list');
});
