import { SCButtonOutline } from './styles'
interface ButtonOutline {
  onChange: () => void;
  text: string;
  icon: string;
}

const ButtonOutline = ({ onChange, text, icon }: ButtonOutline) => {
  return (
    <SCButtonOutline
      onClick={onChange}
    >{icon ? <img src={`../assets/img/forced/${icon}.svg`} />: ''} {text}</SCButtonOutline>

  )
}

export default ButtonOutline