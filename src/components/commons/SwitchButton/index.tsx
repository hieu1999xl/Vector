import './styles.css'
const ButtonOutline = () => {
  return (
    <div className="button-switch">
      <input type="checkbox" id="switch-orange" className="switch" />
      <label className="lbl-off">MOQ Not Met</label>
      <label className="lbl-on">MOQ Met</label>
    </div>
  )
}

export default ButtonOutline