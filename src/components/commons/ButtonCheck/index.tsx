import './styles.css'
const ButtonCheck = () => {
  return (
    <>
      <input className="checkbox_ist" type="checkbox" id="Checkbox" name="Checkbox" />
      <label htmlFor="Checkbox">
        <span className="label-name">Item Code</span>
        <div className="checkmark">
          <img src="../assets/img/status/status.svg" />
        </div>
      </label>
    </>
  )
}

export default ButtonCheck