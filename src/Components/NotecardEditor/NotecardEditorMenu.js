import React from 'react';
import PropTypes from 'prop-types'
import { Nav, NavItem, NavLink } from 'reactstrap';

const NotecardEditorMenu = ({onImportNotecards, onExportNotecards}) => (
    <Nav>
      <NavItem>
        <NavLink href="#" onClick={onImportNotecards}>Import</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#" onClick={onExportNotecards}>Export</NavLink>
      </NavItem>
    </Nav>
);

NotecardEditorMenu.propTypes = {
  onImportNotecards: PropTypes.func.isRequired,
  onExportNotecards: PropTypes.func.isRequired,
};

export default NotecardEditorMenu;
