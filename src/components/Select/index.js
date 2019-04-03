import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  SelectContainer,
  SelectButton,
  SelectDropdown,
  SelectDropdownOption
} from "./styled";

class Select extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };

    this.openDropdown = this.openDropdown.bind(this);
    this.closeDropdown = this.closeDropdown.bind(this);
  }

  openDropdown() {
    this.setState({ open: true });
  }

  closeDropdown() {
    this.setState({ open: false });
  }

  render() {
    const { open } = this.state;

    return (
      <SelectContainer>
        <SelectButton onClick={this.openDropdown}>Hola Hola</SelectButton>
        <SelectDropdown open={open}>
          <SelectDropdownOption>1</SelectDropdownOption>
          <SelectDropdownOption>2</SelectDropdownOption>
          <SelectDropdownOption>3</SelectDropdownOption>
        </SelectDropdown>
      </SelectContainer>
    );
  }
}

Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  placeHolder: PropTypes.string
};

Select.defaultProps = {
  placeHolder: ""
};

export default Select;
