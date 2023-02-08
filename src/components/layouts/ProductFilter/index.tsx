import { SelectInput } from './../../index';
import { useState } from 'react'
import { SCProductFilter, SCProductFilterText, SCProductBoxSelect, SCProducFilterHeader } from './styles'
const ProductFilter = () => {

  const brand = ['Brand', 'Brand', 'Brand']
  const subBrand = ['Sub Brand', 'Sub Brand', 'Sub Brand']
  const category = ['Category', 'Category', 'Category']
  const fit = ['Fit', 'Fit', 'Fit']
  const style = ['Style', 'Style', 'Style']
  const mrp = ['MRP', 'MRP', 'MRP']

  const [currentOption, setCurrentOption] = useState()
  const handleChangeSelect = (e: any) => {
    setCurrentOption(e.target.value)
    console.log(' aho hio')
  }
  return (
    <SCProductFilter>
      <SCProducFilterHeader>
        <img src="../assets/img/ist/filter.svg" alt="filter" />
        <SCProductFilterText>Product Filter</SCProductFilterText>
      </SCProducFilterHeader>
      <SCProductBoxSelect>
        <SelectInput name="brand" value={currentOption} handleChange={handleChangeSelect} items={brand} icon="target" />
        <SelectInput name="subBrand" value={currentOption} handleChange={handleChangeSelect} items={subBrand} icon="target" />
        <SelectInput name="test" value={currentOption} handleChange={handleChangeSelect} items={category} icon="option" />
        <SelectInput name="category" value={currentOption} handleChange={handleChangeSelect} items={fit} icon="margin" />
        <SelectInput name="style" value={currentOption} handleChange={handleChangeSelect} items={style} icon="margin" />
        <SelectInput name="MRP" value={currentOption} handleChange={handleChangeSelect} items={mrp} icon="money" />
      </SCProductBoxSelect>
    </SCProductFilter>
  )
}

export default ProductFilter