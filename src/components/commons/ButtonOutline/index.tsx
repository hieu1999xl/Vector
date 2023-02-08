import { SCButtonOutline } from './styles'
interface ButtonOutline {
  onChange: () => void;
  text: string;
  icon: string;
}

const ButtonOutline = ({ onChange, text, icon }: ButtonOutline) => {
  return (
    <SCButtonOutline style={icon ? { backgroundColor: '#fff', color: '#000000' } : { color: '#929292', border: '1px solid #929292', width: '90px', backgroundColor: '#F9F9F9' }}
      onClick={onChange}
    >{icon ? <img style={{ paddingRight: 10 }} src={`../assets/img/forced/${icon}.svg`} /> : ''} {text}</SCButtonOutline>

  )
}

export default ButtonOutline