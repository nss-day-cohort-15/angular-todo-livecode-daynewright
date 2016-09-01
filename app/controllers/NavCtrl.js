"use strict";

app.controller('NavCtrl', function($scope){
  $scope.navItems = [
    { name: 'LogOut'},
    { name: 'All Items'},
    { name: 'New Items'}
  ];
});
