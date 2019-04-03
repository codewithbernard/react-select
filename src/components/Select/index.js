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
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.containerRef = React.createRef();
  }

  /**
   * Add click event to register click outside of drodpown
   */
  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  /**
   * Remove click event to register click outside of drodpown
   */
  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  /**
   * Check if click was outside dropdown element
   * @param {HtmlEvent} event
   */
  handleClickOutside(event) {
    const { open } = this.state;
    if (
      this.containerRef &&
      this.containerRef.current &&
      !this.containerRef.current.contains(event.target)
    ) {
      if (open) {
        this.setState({ open: false });
      }
    }
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
      <SelectContainer ref={this.containerRef}>
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
