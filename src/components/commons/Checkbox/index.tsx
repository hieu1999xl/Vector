interface CheckboxProps {
  onChange: () => void;
  name: string;
  value: string
}

const Checkbox = ({ onChange, name, value }: CheckboxProps) => {
  return (
    <>
      <input type="checkbox" id="vehicle1" name={name} onClick={onChange} value={value}></input>
    </>
  )
}

export default Checkbox