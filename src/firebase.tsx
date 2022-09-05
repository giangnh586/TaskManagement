import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useContext } from 'react';
import AuthContext from './components/store/auth-context';



const firebaseConfig = {
  apiKey: 'AIzaSyCyxHea55lsdI3zkaHeTU4xo_70EbtFnyQ',
  authDomain: 'trello-demo-76706.firebaseapp.com',
  projectId: 'trello-demo-76706',
  storageBucket: 'trello-demo-76706.appspot.com',
  messagingSenderId: '805788136825',
  appId: '1:805788136825:web:7de6df540f60d4ecd3eba8'
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


//import login
// const provider = new GoogleAuthProvider();

// export const signInWithGoogle = () => {
//   signInWithPopup(auth, provider)
//     .then((result) => {
//       const name = result.user.displayName;
//       const email = result.user.email;
//       const profilePic = result.user.photoURL;

//       localStorage.setItem('token', 'loginconfirm');
//       localStorage.setItem('name', name ?? '');
//       localStorage.setItem('email', email ?? '');
//       localStorage.setItem('profilePic', profilePic ?? '');
      
      
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };
