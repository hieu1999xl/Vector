import { useState } from 'react'
import { Table } from '../../../components/index'
import { SelectInput } from '../../../components/index'
import { ButtonNormal } from '../../../components/index'






const Home = () => {
  const brand = ['Brand', 'Brand', 'Brand']
  const subBrand = ['Sub Brand', 'Sub Brand', 'Sub Brand']
  const category = ['Category', 'Category', 'Category']
  const fit = ['Fit', 'Fit', 'Fit']
  const style = ['Style', 'Style', 'Style']
  const mrp = ['MRP', 'MRP', 'MRP']

  const [currentOption, setCurrentOption] = useState()
  const onChange = () => {
    console.log('a hi hi')
  }

  const handleChangeSelect = (e: any) => {
    setCurrentOption(e.target.value)
    console.log(' aho hio')
  }


  return (
    <>
      <div>
        <SelectInput name="brand" value={currentOption} handleChange={handleChangeSelect} items={brand} icon="target" />
        <SelectInput name="subBrand" value={currentOption} handleChange={handleChangeSelect} items={subBrand} icon="target" />
        <SelectInput name="test" value={currentOption} handleChange={handleChangeSelect} items={category} icon="option" />
        <SelectInput name="category" value={currentOption} handleChange={handleChangeSelect} items={fit} icon="margin" />
        <SelectInput name="style" value={currentOption} handleChange={handleChangeSelect} items={style} icon="margin" />
        <SelectInput name="MRP" value={currentOption} handleChange={handleChangeSelect} items={mrp} icon="money" />
      </div>
      {/* <ButtonNormal text="a hi hi" onChange={onChange} /> */}
      <Table />
      <Table />
    </>
  )
}

export default Home