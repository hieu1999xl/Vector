import { useState } from 'react'
import { Table } from '../../../components/index'
import { SelectInput, ButtonOutline, SwitchButton, Checkbox, ProductFilter, LocationFilter } from '../../../components/index'
import { ButtonNormal } from '../../../components/index'
import { SCBoxFilter, SCQuickFilters, SCQuickFilterBox, SCQuickFiltersText, SCQuickAction, SCQuickActionSelect, SCQuickActionLabel, SCQuickActionSelectInput, SCQuickActionButton } from './styles'


const Home = () => {

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
        <ProductFilter />
        <img src="../assets/img/ist/and.svg" alt="and" />
        <LocationFilter />
      </SCBoxFilter>
      <SCQuickFilters>
        <SCQuickAction>
          <Checkbox name='action' value='action' onChange={onChange} />
          <SCQuickActionSelect>
            <SCQuickActionLabel >Select All For Action</SCQuickActionLabel>
            <SCQuickActionSelectInput name="cars" id="cars">
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </SCQuickActionSelectInput>
          </SCQuickActionSelect>
        </SCQuickAction>
        <SCQuickFilterBox>
          <SCQuickActionButton><img src="../assets/img/ist/White-Arrow.svg" alt="filter" /></SCQuickActionButton>
        </SCQuickFilterBox>
        <SCQuickFilterBox>
          <SCQuickFiltersText>Quick Filters -</SCQuickFiltersText>
          <ButtonOutline icon='' text='Accepted' onChange={onChange} />
          <ButtonOutline icon='' text='Paused' onChange={onChange} />
          <ButtonOutline icon='' text='Rejected' onChange={onChange} />
        </SCQuickFilterBox>
        <SCQuickFilterBox>
          <ButtonOutline icon='' text='Auto' onChange={onChange} />
          <ButtonOutline icon='' text='Manual' onChange={onChange} />
        </SCQuickFilterBox>
        <div><SwitchButton /></div>
      </SCQuickFilters>
      <Table />
      <Table />
    </>
  )
}

export default Home