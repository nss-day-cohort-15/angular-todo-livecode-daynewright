"use strict";

app.factory('ItemStorage', ($q, $http, FirebaseURL) => {

  let getItemList = () => {
    let items = [];
    return $q((resolve, reject) => {
      $http.get(`${FirebaseURL}/items.json`)
      .success((itemObject) => {
        Object.keys(itemObject).forEach((key)=> {
          itemObject[key].id = key;
          items.push(itemObject[key]);
        });
        resolve(items);
      })
      .error((error) => {
        reject(error);
      });
    });
  };

  let getItem = (itemId) => {
    return $q((resolve, reject)=> {
      $http.get(`${FirebaseURL}/items/${itemId}.json`)
      .success((singleItem) =>{
        resolve(singleItem);
      })
      .error((error)=> reject(error));
    });
  };

  let postNewItem = (newItem) => {
    return $q( (resolve, reject) => {
      $http.post(`${FirebaseURL}/items.json`, JSON.stringify(newItem))
        .success( (objFromFirebase) => {
          resolve(objFromFirebase);
        })
      .error( (error) => {
        reject(error);
      });
    });
  };

  let deleteItem = (itemId) => {
    return $q((resolve, reject) => {
      $http.delete(`${FirebaseURL}/items/${itemId}.json`)
      .success((objFromFirebase) => resolve(objFromFirebase))
      .error((error) => console.log(`error: ${error}`));
    });
  };

  let editItem = (itemId, newDataObj) => {
    return $q((resolve, reject) =>{
      $http.patch(`${FirebaseURL}/items/${itemId}.json`, newDataObj)
      .success((result) => resolve(result))
      .error((error) => console.error(error.error));
    });
  };

  return {getItemList, postNewItem, deleteItem, editItem, getItem};
});
