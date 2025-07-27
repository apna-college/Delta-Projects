import React from "react";
import {Link} from "react-router-dom";
import {useState} from "react";


const Menu = () => {
  const [selectedMenu , setSelectedMenu] = useState(1);

  function handleClickSelection(num){
    setSelectedMenu(num);
  }
  return (
    <div className="menu-container">
      <img src="media/logo.png" style={{ width: "50px" }} />
      <div className="menus">
        <ul >
          <li>
            <Link to="/" style={{textDecoration : "none"}} className={selectedMenu == 1 ? "menu selected" : "menu" } onClick={()=>{handleClickSelection(1)}}>Dashboard</Link>
          </li>
          <li>
            <Link to="orders" style={{textDecoration : "none"}} className={selectedMenu == 2 ? "menu selected" : "menu" } onClick={()=>{handleClickSelection(2)}}>Orders</Link>
          </li>
          <li>
            <Link to="holdings"style={{textDecoration : "none"}} className={selectedMenu == 3 ? "menu selected" : "menu" } onClick={()=>{handleClickSelection(3)}} >Holdings</Link>
          </li>
          <li>
            <Link to="positions"style={{textDecoration : "none"}} className={selectedMenu == 4 ? "menu selected" : "menu" } onClick={()=>{handleClickSelection(4)}} >Positions</Link>
          </li>
          <li>
            <Link to="funds"style={{textDecoration : "none"}} className={selectedMenu == 5 ? "menu selected" : "menu" } onClick={()=>{handleClickSelection(5)}} >Funds</Link>
          </li>
          <li>
            <Link to="apps"style={{textDecoration : "none"}} className={selectedMenu == 6 ? "menu selected" : "menu" } onClick={()=>{handleClickSelection(6)}} >Apps</Link>
          </li>
        </ul>
        <hr />
        <div className="profile" >
          <div className="avatar">ZU</div>
          <p className="username">USERID</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;