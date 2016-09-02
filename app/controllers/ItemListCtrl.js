
"use strict";

app.controller('ItemListCtrl', function($scope, $location, ItemStorage, SearchTermData){
  $scope.searchText = SearchTermData;

  ItemStorage.getItemList()
  .then((itemCollectionArr) => {
    $scope.items = itemCollectionArr;
  });

  $scope.itemDelete = (itemId) => {
    ItemStorage.deleteItem(itemId)
    .then((response) => {
        ItemStorage.getItemList()
        .then((itemCollectionArr)=> $scope.items = itemCollectionArr);
    });
  };

  $scope.itemEditView = (itemId) => {
    $location.url(`/items/edit/${itemId}`);
  };

});
