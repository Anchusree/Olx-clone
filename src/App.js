import React, { useContext, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router,Route } from 'react-router-dom';
import Home from './Pages/Home';
import SignupPage from './Pages/Signup';
import Login from './Pages/Login';
import Create from './Pages/Create';
import { AuthContext, FirebaseContext } from './Store/FirebaseContext';
import Header from './Components/Header/Header';
import ViewPost from './Pages/ViewPost';
import Post  from './Store/PostContext';

function App() {

  const {setUser} = useContext(AuthContext)
  const {firebase} = useContext(FirebaseContext)

  useEffect(()=>{
    firebase.auth().onAuthStateChanged((user)=>{
      setUser(user)
    })
  },[setUser])

  return (
    <div>
      <Post>
        <Router>
        <Header />
          <Route exact path="/"> <Home /></Route>
          <Route path="/signup"> <SignupPage /></Route>
          <Route path="/login"> <Login /></Route>
          <Route path="/create"> <Create /></Route>
          <Route path="/view"> <ViewPost /></Route>

        </Router>

      </Post>
      
     
    </div>
  );
}

export default App;
