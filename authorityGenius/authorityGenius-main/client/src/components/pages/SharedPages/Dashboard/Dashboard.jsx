import React from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { ExpertDashboard } from '../../ExpertPages'
import { PublisherDashboard } from '../../PublisherPages'

const Dashboard = ({accountType}) => {
  if (accountType === 'Publisher') return <PublisherDashboard/>
  else if (accountType === 'Reviewer') return <ExpertDashboard/>
  else {
    return (<div>Error rendering Dashboard</div>)
  }
}

Dashboard.propTypes = {
  accountType: PropTypes.string
};

const mapStateToProps = (state) => ({
  accountType: state.auth.user.accountType,
});

export default connect(mapStateToProps, {})(Dashboard)