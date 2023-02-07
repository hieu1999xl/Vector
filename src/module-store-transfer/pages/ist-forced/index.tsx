import { SCBoxFilter } from './styes'
import { ProductFilter, LocationFilter } from './../../../components/index'
const IstForced = () => {
  return (
    <>
      <SCBoxFilter>
        <ProductFilter />
        <img src="../assets/img/ist/and.svg" alt="and" />
        <LocationFilter />
      </SCBoxFilter>
    </>
  )
}

export default IstForced