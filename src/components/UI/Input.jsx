import React from "react";
import styled from "styled-components";

const Input = ({ placeholder, className, type, value, onChange, onBlur, icon, ...props }) => {
  let iconUrl = null;
  if (icon) {
    iconUrl = require(`../../assets/svg/${icon}.svg`);
  }

  return (
    <StyledInputWrap hasIcon={icon && true}>
      {icon && <img src={iconUrl} alt="Input icon" />}
      <input
        type={type}
        value={value}
        className={className}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        {...props}
      />
    </StyledInputWrap>
  );
};

const StyledInputWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;
  width: 100%;
  & input {
    padding: ${props => props.hasIcon ? '5px 30px 5px 10px' : '5px 10px'};
    color: var(--text-white);
    background-color: var(--gray-light);
    border: 0;
    border-radius: 10px;
    width: 100%;
    transition: all .3s;
    &:focus {
      box-shadow: var(--shadow);
    }
    &::placeholder {
      color: var(--text-gray);
      font-size: 12px;
    }
  }
  & img {
    width: 12px;
    height: auto;
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    z-index: 2;
  }
`;

export default Input;
