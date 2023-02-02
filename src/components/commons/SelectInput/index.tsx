import React, { useState } from "react";
import { SCSellectOption, SCSellectIcon, SCSellectBox } from './styles'

interface SelectOptionProps {
  name: string;
  handleChange: (e: any) => void;
  value: any;
  items: any;
  icon: string

}
const SelectInput = ({ name, value, handleChange, items, icon }: SelectOptionProps) => {
  return (
    <SCSellectOption>
      <SCSellectIcon src={`../assets/img/ist/${icon}.svg`} />
      <SCSellectBox style={icon === 'target' ? { paddingLeft: 26 } : { paddingLeft: 20 }} name={name} value={value} onChange={handleChange}>
        {items.map((item: any) => (
          <option key={JSON.stringify(item)} value={item}>
            {item}
          </option>
        ))}
      </SCSellectBox>
    </SCSellectOption>
  );
};

export default SelectInput;
