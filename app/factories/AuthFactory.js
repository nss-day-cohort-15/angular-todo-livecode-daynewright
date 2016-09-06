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

  return {createUser, loginUser, logoutUser};
});
