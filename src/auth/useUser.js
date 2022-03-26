import { useState, useEffect } from 'react';
// import firebase from 'firebase/app';
// import firebase from 'firebase/compat/app';
import { getAuth, onAuthStateChanged } from "firebase/auth";



export const useUser = () => {

    const auth = getAuth();
    // const user = auth.currentUser;


    // if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        // ...
        const [userInfo, setUserInfo] = useState(() => {
            // const user = firebase.auth().currentUser;
            const user = auth.currentUser;
            const isLoading = !user;
            return { isLoading, user };
        });
    //   } else {
        // No user is signed in.
    //   }

    //   const [userInfo, setUserInfo] = useState(() => {
    //     const user = firebase.auth().currentUser;
    //     const isLoading = !user;
    //     return { isLoading, user };
    // });

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
              const uid = user.uid;
              console.log(user)
            } else { 
                console.log("no user is curently logged in");
            }
        //   });
            setUserInfo({ isLoading: false, user });
        });
        
    }, []);
 
    // onAuthStateChanged(auth, (user) => {
    //     if (user) {
    //       const uid = user.uid;
          
    //     } else { 
    //     }
    //   });
      
    // useEffect(() => {
    //     return firebase.auth().onAuthStateChanged(user => {
    //         setUserInfo({ isLoading: false, user });
    //     });
    // }, []);

    return userInfo;
}

// *******below version does not work
// import { useState, useEffect } from 'react';
//  import firebase from 'firebase/app';
// // import firebase from 'firebase/compat/app';
// // import firebase from 'firebase.app';


// export const useUser = () => {
//     const [userInfo, setUserInfo] = useState(() => {
//         const user = firebase.auth().currentUser;
//         const isLoading = !user;
//         return { isLoading, user };
//     });

//     useEffect(() => {
//         return firebase.auth().onAuthStateChanged(user => {
//             setUserInfo({ isLoading: false, user });
//         });
//     }, []);

//     return userInfo;
// }