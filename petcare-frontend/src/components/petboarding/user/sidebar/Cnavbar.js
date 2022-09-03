
import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './CnavbarData';
import './Cnavbar.css';
import { IconContext } from 'react-icons';

const styles={
  navbar:{
    backgroundColor: '#3a3a3a',
    height: '50px',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center'
  }
}

function Navbar() {

    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
        <IconContext.Provider value={{ color: '#fff' }}>
      <div style={styles.navbar}>
        <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar}/>
        </Link>
      </div>

      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'} style={{backgroundColor:'#3a3a3a'}}>
      <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle' style={{backgroundColor:'#3a3a3a'}}>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
      </nav>
    
      </IconContext.Provider>
      
    </>
  )
}

export default Navbar;


