import React, { useContext } from 'react';

import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import { AuthContext, FirebaseContext } from '../../Store/FirebaseContext';
import { Link, useHistory } from 'react-router-dom';



function Header() {

  const {user} = useContext(AuthContext)
  const {firebase} = useContext(FirebaseContext)
  const history = useHistory()

  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
          <Link to="/"><OlxLogo></OlxLogo></Link>
          
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span>ENGLISH </span>
          <Arrow></Arrow>
        </div>
        <div className="loginPage">
          {user ? <span>Welcome {user.displayName}!</span> : <h6><Link style={{color: '#002f34',
    padding: 0,height: 'auto',textDecoration:'none'}} to="/login">Login</Link></h6>}
          <hr />
        </div>
        {user && <span style={{cursor:'pointer'}} onClick={()=>{
          firebase.auth().signOut();
          history.push('/login')
        }}>Logout</span>}
        <div className="sellMenu">
          <Link to="/create"><SellButton></SellButton></Link>
       
          <div className="sellMenuContent">
          <Link to="/create"><SellButtonPlus></SellButtonPlus></Link>
            <span>SELL</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
