"use strict";

var app = angular.module('ToDoApp', ['ngRoute'])
            .constant('FirebaseURL', 'https://todolist-anglr.firebaseio.com');

app.config(function($routeProvider){
  $routeProvider
  .when('/items/list', {
    templateUrl: 'partials/item-list.html',
    controller: 'ItemListCtrl'
  })
  .when('/items/new',{
    templateUrl: 'partials/item-form.html',
    controller: 'ItemNewCtrl'
  })
  .when('/items/view/:itemId', {
    templateUrl: 'partials/item-details.html',
    controller: 'ItemViewCtrl'
  })
  .when('/items/edit/:itemId', {
    templateUrl: 'partials/item-edit.html',
    controller: 'ItemEditCtrl'
  })
  .otherwise('/items/list');
});
