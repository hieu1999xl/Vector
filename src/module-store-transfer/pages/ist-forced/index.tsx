import { useState } from 'react'
import { SCBoxFilter, SCQuickFilters, SCBoxFilterButton, SCBoxFilterButtonFlex, SCBoxFilterButtonLabel } from './styes'
import { ProductFilter, LocationFilter, ButtonOutline, SelectInput } from './../../../components/index'
const IstForced = () => {
  const onChange = () => {
    console.log('a hi hi')
  }
  const ist = ['IST Ageing', 'IST Ageing', 'IST Ageing']
  const [currentOption, setCurrentOption] = useState()
  const handleChangeSelect = (e: any) => {
    setCurrentOption(e.target.value)
    console.log(' aho hio')
  }
  return (
    <>
      <SCBoxFilter>
        <ProductFilter />
        <img src="../assets/img/ist/and.svg" alt="and" />
        <LocationFilter />
      </SCBoxFilter>
      <SCQuickFilters>
        <div style={{ display: 'flex' }}>
          <SCBoxFilterButtonLabel></SCBoxFilterButtonLabel>
          <ButtonOutline icon='stack' text='Search By IST ID' onChange={onChange} />
          <ButtonOutline icon='date' text='Search By IST Date' onChange={onChange} />
        </div>
        <SCBoxFilterButton>
          <SCBoxFilterButtonLabel>Generation Type</SCBoxFilterButtonLabel>
          <SCBoxFilterButtonFlex>
            <ButtonOutline icon='' text='Donor LOC' onChange={onChange} />
            <ButtonOutline icon='' text='Donor LOC Name' onChange={onChange} />
          </SCBoxFilterButtonFlex>
        </SCBoxFilterButton>
        <SCBoxFilterButton>
          <SCBoxFilterButtonLabel>Generation Type</SCBoxFilterButtonLabel>
          <SCBoxFilterButtonFlex>
            <ButtonOutline icon='' text='Pushed To SAP' onChange={onChange} />
            <ButtonOutline icon='' text='STO Created' onChange={onChange} />
            <ButtonOutline icon='' text='Ready To Ship' onChange={onChange} />
            <SelectInput name='ist' value={currentOption} handleChange={onChange} items={ist} icon="" />
            <ButtonOutline icon='' text='Auto' onChange={onChange} />
            <ButtonOutline icon='' text='Manual' onChange={onChange} />
          </SCBoxFilterButtonFlex>
        </SCBoxFilterButton>
      </SCQuickFilters>
    </>
  )
}

export default IstForced