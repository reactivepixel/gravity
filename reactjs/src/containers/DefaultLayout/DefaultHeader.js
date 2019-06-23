import React from 'react';
import { Nav } from 'reactstrap';
import PropTypes from 'prop-types';

import {
  AppNavbarBrand, AppSidebarToggler,
} from '@coreui/react';

import logo from '../../assets/img/brand/Logo@1x.svg';
import sygnet from '../../assets/img/brand/sygnet.svg';

const propTypes = {
  // eslint-disable-next-line
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultHeader extends React.Component {
  render() {
    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <AppSidebarToggler className="d-lg-none" display="md" mobile />
        <AppNavbarBrand
          full={{
            src: logo, width: 89, height: 25, alt: 'CoreUI Logo',
          }}
          minimized={{
            src: sygnet, width: 30, height: 30, alt: 'CoreUI Logo',
          }}
        />
        <AppSidebarToggler className="d-md-down-none" display="lg" />
        <Nav className="ml-auto" navbar>
          {/* <AppHeaderDropdown>
            <DropdownToggle nav>
              <img src={avatar} className="img-avatar" alt="admin@bootstrapmaster.com" />
            </DropdownToggle>
            <DropdownMenu right style={{ right: 'auto', height: '400px' }}>
              AppHeaderDropdown
            </DropdownMenu>
          </AppHeaderDropdown> */}
        </Nav>
        {/* <AppAsideToggler className="d-md-down-none" /> */}
        {/* <AppAsideToggler className="d-lg-none" mobile /> */}
      </React.Fragment>
    );
  }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default DefaultHeader;
