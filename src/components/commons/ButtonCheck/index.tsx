import './styles.css'
import { useState } from 'react'
interface ButtonCheckProps {
  onClick: any;
  text: string;
  toggled: boolean
}
const ButtonCheck = ({ onClick, text, toggled }: ButtonCheckProps) => {
  const [isToggled, toggle] = useState(toggled)
  const callback = () => {
    toggle(!isToggled)
    onClick(!isToggled)
  }
  return (
    <>
      <input className="checkbox_ist" type="checkbox" defaultChecked={isToggled} onClick={callback} id="Checkbox" name="Checkbox" />
      <label htmlFor="Checkbox">
        <span className="label-name">{text}</span>
        <div className="checkmark">
          <img src="../assets/img/status/status.svg" />
        </div>
      </label>
    </>
  )
}

export default ButtonCheck