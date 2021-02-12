import Firebase from '../../config/firebase';
import firebase from 'firebase';

const set_data = () => {
    return (dispatch) => {
        dispatch({
            type: "SETDATA",
            user: { name: 'mustafa', email: 'mustafa@gmail.com' }
        })
        console.log("runn..");
    }
}

const facebook_login = () => {
    return (dispatch) => {
        var provider = new firebase.auth.FacebookAuthProvider();

        firebase
            .auth()
            .signInWithPopup(provider)
            .then((result) => {
                var credential = result.credential;
                var user = result.user;
                var accessToken = credential.accessToken;

                console.log("user==>",user);
            })
            .catch((error) => {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // var email = error.email;
                // var credential = error.credential;

                console.log("error===>",error);
            });
    }
}

export {
    set_data,
    facebook_login
}