import styled from "styled-components";

const SelectContainer = styled.div`
  position: relative;
`;

const SelectButton = styled.button`
  border: none;
  background: #ffffff;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  font-size: 16px;
  color: #333333;
  width: 100%;
  height: 50px;
  text-align: left;
  padding: 0 25px;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

const SelectDropdown = styled.ul`
  list-style: none;
  margin: 20px 0;
  padding: 20px 0;
  background: #ffffff;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  position: absolute;
  width: 100%;
  top: 75px;
  overflow: hidden;
`;

const SelectDropdownOption = styled.li`
  font-weight: 600;
  font-size: 16px;
  color: #4f4f4f;
  padding: 5px 17px;
  cursor: pointer;
  background-color: #ffffff;
  will-change: background-color;
  transition: background-color 0.3s;

  &:hover {
    background-color: #f2f2f2;
  }
`;

export { SelectContainer, SelectButton, SelectDropdown, SelectDropdownOption };
