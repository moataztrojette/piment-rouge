import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <nav className="sidebar sidebar-offcanvas" id="sidebar">
        <ul className="nav">
          <li className="nav-item">
              <Link to ={'/'}><a className="nav-link">
              <i className="mdi mdi-grid-large menu-icon" />
              <Link to ={'/'}><span className="menu-title">Dashboard</span></Link>
            </a></Link>
          </li>
   
        </ul>
      </nav>
      
      );
}
 
export default Sidebar;