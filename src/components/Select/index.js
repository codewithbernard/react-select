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
      selected: {}
    };

    this.openDropdown = this.openDropdown.bind(this);
    this.closeDropdown = this.closeDropdown.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.setSelected = this.setSelected.bind(this);
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

  /**
   *
   * @param {Object} selected - Selected item
   */
  setSelected(selected) {
    const { handleChange } = this.props;

    this.setState({ selected, open: false });
    handleChange(selected);
  }

  /**
   * Opens dropdown
   */
  openDropdown() {
    this.setState({ open: true });
  }

  /**
   * Closes dropdown
   */
  closeDropdown() {
    this.setState({ open: false });
  }

  render() {
    const { open, selected, placeHolder } = this.state;
    const { options } = this.props;

    return (
      <SelectContainer ref={this.containerRef}>
        <SelectButton onClick={this.openDropdown}>
          {selected.label || placeHolder}
        </SelectButton>
        <SelectDropdown open={open}>
          {options.map(item => (
            <SelectDropdownOption
              key={item.id}
              onClick={() => this.setSelected(item)}
            >
              {item.label}
            </SelectDropdownOption>
          ))}
        </SelectDropdown>
      </SelectContainer>
    );
  }
}

Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  placeHolder: PropTypes.string,
  handleChange: PropTypes.func
};

Select.defaultProps = {
  placeHolder: "",
  handleChange: () => null
};

export default Select;
