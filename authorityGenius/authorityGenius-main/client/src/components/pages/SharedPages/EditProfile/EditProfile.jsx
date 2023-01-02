import React from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { ExpertProfileEdit } from '../../ExpertPages'
import { PubProfileEdit } from '../../PublisherPages'

const EditProfile = ({accountType}) => {
  if (accountType === 'Publisher') return <PubProfileEdit/>
  else if (accountType === 'Reviewer') return <ExpertProfileEdit/>
  else {
    return (<div>Error rendering EditProfile</div>)
  }
}

EditProfile.propTypes = {
  accountType: PropTypes.string
};

const mapStateToProps = (state) => ({
  accountType: state.auth.user.accountType,
});

export default connect(mapStateToProps, {})(EditProfile)