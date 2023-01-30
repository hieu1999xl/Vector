import { SCButtonNormal } from './style'

interface ButtonNormalProps {
  onChange: () => void;
  text: string;
}
const ButtonNormal = ({ onChange, text }: ButtonNormalProps) => {
  return (
    <SCButtonNormal
      onChange={() => onChange}
    >{text}</SCButtonNormal>

  );
};

export default ButtonNormal;
