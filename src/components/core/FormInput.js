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
      handleChange
    } = this.props;
    return (
      <div>
        <Label>{label}</Label>
        <InputStyle
          placeholder={placeholder}
          onChange={handleChange}
          onBlur={handleBlur}
          name={name}
          value={value}
          type={type}
        />
        <Label type="error">{error}</Label>
      </div>
    );
  }
}
