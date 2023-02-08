import { SCBoxFilter, SCQuickFilters } from './styes'
import { ProductFilter, LocationFilter, ButtonOutline } from './../../../components/index'
const IstForced = () => {
  const onChange = () => {
    console.log('a hi hi')
  }
  return (
    <>
      <SCBoxFilter>
        <ProductFilter />
        <img src="../assets/img/ist/and.svg" alt="and" />
        <LocationFilter />
      </SCBoxFilter>
      <SCQuickFilters>
        <ButtonOutline icon='stack' text='Search By IST ID' onChange={onChange} />
      </SCQuickFilters>
    </>
  )
}

export default IstForced