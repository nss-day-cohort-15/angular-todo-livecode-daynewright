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

  let postNewItem = (newItem) => {
    return $q( (resolve, reject) => {
      $http.post(`${FirebaseURL}/items.json`, JSON.stringify(newItem))
        .success( (ObjFromFirebase) => {
          resolve(ObjFromFirebase);
        })
      .error( (error) => {
        reject(error);
      });
    });
  };

  return {getItemList, postNewItem};
});