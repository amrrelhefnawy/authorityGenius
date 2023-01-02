// This file turns any Route passed through into a PrivateRoute by checking to see if the user is authenticated and if the app is loading a current user before rendering the route
// IGNORE FOR NOW
import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const PrivateRoutes = ({ auth: { isAuthenticated, loading } }) =>
  !isAuthenticated && !loading ? <Navigate to='/login' /> : <Outlet />;

PrivateRoutes.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(PrivateRoutes);
