import { useState } from 'react'
import { SelectInput } from './../../index';
import { SCLocationFilter, SCProducFilterHeader, SCProductBoxSelect, SCProductFilterText } from './styles'

const LocationFilter = () => {
  const grp = ['Donor Loc Grp', 'Donor Loc Grp', 'Donor Loc Grp']
  const regon = ['Donor Loc Region', 'Donor Loc Region', 'Donor Loc Region']
  const loc = ['Donor Loc', 'Donor Loc', 'Donor Loc']
  const recvr = ['Recvr Channel', 'Recvr Channel', 'Recvr Channel']
  const [currentOption, setCurrentOption] = useState()
  const handleChangeSelect = (e: any) => {
    setCurrentOption(e.target.value)
    console.log(' aho hio')
  }
  return (
    <SCLocationFilter>
      <SCProducFilterHeader>
        <img src="../assets/img/ist/filter.svg" alt="filter" />
        <SCProductFilterText>Location Filter</SCProductFilterText>
      </SCProducFilterHeader>
      <SCProductBoxSelect>
        <SelectInput name="brand" value={currentOption} handleChange={handleChangeSelect} items={grp} icon="location" />
        <SelectInput name="subBrand" value={currentOption} handleChange={handleChangeSelect} items={regon} icon="location" />
        <SelectInput name="test" value={currentOption} handleChange={handleChangeSelect} items={loc} icon="location" />
        <SelectInput name="category" value={currentOption} handleChange={handleChangeSelect} items={recvr} icon="location" />
        <SelectInput name="style" value={currentOption} handleChange={handleChangeSelect} items={grp} icon="location" />
        <SelectInput name="MRP" value={currentOption} handleChange={handleChangeSelect} items={regon} icon="location" />
        <SelectInput name="test" value={currentOption} handleChange={handleChangeSelect} items={loc} icon="location" />
        <SelectInput name="category" value={currentOption} handleChange={handleChangeSelect} items={recvr} icon="location" />
      </SCProductBoxSelect>
    </SCLocationFilter>
  )
}

export default LocationFilter