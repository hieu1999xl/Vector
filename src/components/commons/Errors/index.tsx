interface ErrorsProps {
  errors: any,
  name: string
}
const Errors = ({ errors, name }: ErrorsProps) => {
  const renderError = () => {
    switch (errors[name].type) {
      case 'required':
        return `This ${name} is required field`
    
        // case 'maxLength':
        //   return `This ${name} do not more than`

      default:
        return null
    }
  }
  return (
    <p style={{color: 'red', marginTop: 10, fontSize: 12}}>{errors[name] && renderError() }</p>
  )
}

export default Errors;