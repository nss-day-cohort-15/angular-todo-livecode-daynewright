"use strict";

var app = angular.module('ToDoApp', ['ngRoute'])
            .constant('FirebaseURL', 'https://todolist-anglr.firebaseio.com');

app.config(function($routeProvider){
  $routeProvider
  .when('/', {
    templateUrl: 'partials/login.html',
    controller: 'LoginCtrl'
  })
  .when('/login', {
    templateUrl: 'partials/login.html',
    controller: 'LoginCtrl'
  })
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
  .otherwise('/');
});

app.run(($location, FBCreds)=> {
  let creds = FBCreds;
  let authConfig = {
    apiKey: creds.key,
    authDomain: creds.authDomain
  };

  firebase.initializeApp(authConfig);
});
