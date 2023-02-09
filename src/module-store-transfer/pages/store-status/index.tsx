import { LocationFilter, ButtonOutline, TableStore } from './../../../components/index';
import { SCQuickFiltersText, SCQuickFilterBox, SCQuickFilterFlex } from './styles'
const StoreStatus = () => {
  const onChange = () => {

  }

  return (
    <>
      <SCQuickFilterFlex>
        <LocationFilter />
        <SCQuickFilterBox>
          <SCQuickFiltersText>Quick Filters -</SCQuickFiltersText>
          <ButtonOutline icon='' text='Active' onChange={onChange} />
          <ButtonOutline icon='' text='InActive' onChange={onChange} />
        </SCQuickFilterBox>
      </SCQuickFilterFlex>
      <TableStore />
    </>
  )
}

export default StoreStatus