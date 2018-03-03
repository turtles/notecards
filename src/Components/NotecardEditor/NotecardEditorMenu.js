import React from 'react';
import PropTypes from 'prop-types';
import { Nav, NavItem, NavLink } from 'reactstrap';
import {CSVLink} from 'react-csv';
import CSVReader from 'react-csv-reader'
import '../../Styles/NotecardEditor.css'

const headers = [
  'id',
  'word',
  'definition'
];
// TODO: Use CSVReader's error prop.
const NotecardEditorMenu = ({notecards, onImportNotecards, onExportNotecards}) => (
    <Nav>
      <NavItem className="lol">
        <CSVReader
          cssClass="csv-input"
          onFileLoaded={onImportNotecards}
        />
      </NavItem>
      <NavItem>
        <CSVLink
          data={notecards}
          headers={headers}
            filename={"notecards.csv"}>
          Export
        </CSVLink>
      </NavItem>
    </Nav>
);

NotecardEditorMenu.propTypes = {
  notecards: PropTypes.array.isRequired,
  onImportNotecards: PropTypes.func.isRequired,
  onExportNotecards: PropTypes.func.isRequired,
};

export default NotecardEditorMenu;
