'use strict';

app.factory('AuthFactory', ()=> {

  let createUser = (userObj)=> {
    return firebase.auth().createUserWithEmailAndPassword(userObj.email, userObj.password)
      .catch((error)=> {
        let errorCode = error.code;
        let errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  let loginUser = (userObj)=> {
    return firebase.auth().signInWithEmailAndPassword(userObj.email, userObj.password)
      .catch((error)=> {
        let errorCode = error.code;
        let errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  let logoutUser = ()=> {
    return firebase.auth().signOut();
  };

  let isAuthenticated = ()=> {
    return (firebase.auth().currentUser) ? true : false;
  };

  return {createUser, loginUser, logoutUser, isAuthenticated};
});
