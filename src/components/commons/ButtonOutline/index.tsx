import { SCButtonOutline } from './styles'
interface ButtonOutline {
  onChange: () => void;
  text: string;
}

const ButtonOutline = ({ onChange, text }: ButtonOutline) => {
  return (
    <SCButtonOutline
      onClick={onChange}
    >{text}</SCButtonOutline>

  )
}

export default ButtonOutline