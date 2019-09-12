import React, { Component } from 'react';
import { Label, InputStyle } from '../Authentication';

export default class FormInput extends Component {
  render() {
    const {
      placeholder,
      label,
      handleBlur,
      name,
      value,
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
        />
      </div>
    );
  }
}
