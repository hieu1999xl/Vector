import { useState } from 'react'
import { Table } from '../../../components/index'
import { SelectInput, ButtonOutline } from '../../../components/index'
import { ButtonNormal } from '../../../components/index'
import { SCProductFilter, SCProducFilterHeader, SCProductBoxSelect, SCProductFilterText, SCLocationFilter, SCBoxFilter, SCQuickFilters, SCQuickFilterBox, SCQuickFiltersText } from './styles'






const Home = () => {
  const brand = ['Brand', 'Brand', 'Brand']
  const subBrand = ['Sub Brand', 'Sub Brand', 'Sub Brand']
  const category = ['Category', 'Category', 'Category']
  const fit = ['Fit', 'Fit', 'Fit']
  const style = ['Style', 'Style', 'Style']
  const mrp = ['MRP', 'MRP', 'MRP']

  const grp = ['Donor Loc Grp', 'Donor Loc Grp', 'Donor Loc Grp']
  const regon = ['Donor Loc Region', 'Donor Loc Region', 'Donor Loc Region']
  const loc = ['Donor Loc', 'Donor Loc', 'Donor Loc']
  const recvr = ['Recvr Channel', 'Recvr Channel', 'Recvr Channel']



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
      <SCBoxFilter>
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
        <img src="../assets/img/ist/and.svg" alt="and" />
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
      </SCBoxFilter>
      <SCQuickFilters>
        <SCQuickFilterBox>
          <SCQuickFiltersText>Quick Filters -</SCQuickFiltersText>
          <ButtonOutline text='Accepted' onChange={onChange} />
          <ButtonOutline text='Paused' onChange={onChange} />
          <ButtonOutline text='Rejected' onChange={onChange} />
        </SCQuickFilterBox>
        <SCQuickFilterBox>
          <ButtonOutline text='Auto' onChange={onChange} />
          <ButtonOutline text='Manual' onChange={onChange} />
        </SCQuickFilterBox>
      </SCQuickFilters>
      <Table />
      <Table />
    </>
  )
}

export default Home