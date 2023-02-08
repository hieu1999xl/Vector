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
      {icon ? <SCSellectIcon src={`../assets/img/ist/${icon}.svg`} /> : ''}
      <SCSellectBox style={icon === 'target' ? { paddingLeft: 26 } : icon ? { paddingLeft: 20, border: '1px solid #D8D8D8' } : { paddingLeft: 4, backgroundColor: '#F9F9F9', height: '46px', color: '#929292', border: '1px solid #929292' }} name={name} value={value} onChange={handleChange}>
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
