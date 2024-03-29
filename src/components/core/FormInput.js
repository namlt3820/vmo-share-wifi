import React, { Component } from 'react';
import { Label, InputStyle } from '../Authentication';

export default class FormInput extends Component {
  render() {
    const {
      placeholder,
      type,
      handleBlur,
      name,
      value,
      error,
      label,
      handleChange,
      keyPressed,
      disabled,
      popup
    } = this.props;
    return (
      <div>
        <Label>{label}</Label>
        <InputStyle
          popup={popup}
          placeholder={placeholder}
          onChange={handleChange}
          onBlur={handleBlur}
          onKeyDown={keyPressed}
          name={name}
          value={value}
          disabled={disabled}
          type={type}
        />
        <Label type="error">{error}</Label>
      </div>
    );
  }
}
