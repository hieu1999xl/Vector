import { SCButtonOutline } from './styles'
interface ButtonOutlineCheck {
  onChange: () => void;
  text: string;
  icon: string;
}

const ButtonOutlineCheck = ({ onChange, text, icon }: ButtonOutlineCheck) => {
  return (
    <SCButtonOutline style={icon === 'accept' ? { background: 'linear-gradient(180deg, #BC3D81 0%, #820F4C 100%)', color: '#fff', border: 'none' } : { color: '#929292', border: '1px solid #929292', backgroundColor: '#F9F9F9' }}
      onClick={onChange}
    >{icon ? <img style={{ paddingRight: 10 }} src={`../assets/img/check/${icon}.svg`} /> : ''} {text}</SCButtonOutline>

  )
}

export default ButtonOutlineCheck