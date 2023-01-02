// We want to check to see if the user is logged in and if so, we will render different links

import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../../actions/auth';

import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

import './Navbar.css'


const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <ul>
      <li>
        <Link to='/dashboard'>
          <PersonIcon />{' '}
          <span className='hide-sm'>Dashboard</span>
        </Link>
      </li>
      <li>
        <a onClick={logout} href='#!'>
          <ExitToAppIcon />{' '}
          <span className='hide-sm'>Logout</span>
        </a>
      </li>
    </ul>
  );

  const guestLinks = (
    <div className="linkHolder">
      <ul>
        <a href="#FAQs">FAQs</a>
        <Link to='/register'>Register</Link>
        <Link to='/login'>Login</Link>
      </ul>
    </div>
    
  );

  return (
    <nav className='navbar bg-dark'>
      <navbar-h1>
        <Link to='/'>
          {/* <HomeIcon />  */}
          AuthorityGenius
        </Link>
      </navbar-h1>
      {!loading && (
        <>{isAuthenticated ? authLinks : guestLinks}</>
      )}
    </nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
