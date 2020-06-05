import React from 'react';
import '../assets/styles/nav.scss';
import { Dropdown } from 'react-bootstrap';
import PropTypes from 'prop-types';
import logOut from '../util/logOut';

const ProfileInfo = ({ firstName, profileImage, translate }) => (
  <li className="profile">
    {firstName}
    <img
      src={profileImage}
      alt="user profile"
      className="avatar--small"
    />
    <Dropdown className="dropdown">
      <Dropdown.Toggle variant="" id="dropdown-basic" />
      <Dropdown.Menu>
        <Dropdown.Item href="/profile">
          {translate('View profile.1')}
        </Dropdown.Item>
        <Dropdown.Item href="/" onClick={logOut}>{translate('Logout.1')}</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  </li>
);
ProfileInfo.propTypes = {
  firstName: PropTypes.string.isRequired,
  profileImage: PropTypes.string,
  translate: PropTypes.func.isRequired,
};

ProfileInfo.defaultProps = {
  profileImage: 'https://via.placeholder.com/150',
};
export default ProfileInfo;