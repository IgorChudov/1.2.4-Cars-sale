import ButtonActive from './ButtonActive'
import ButtonDisable from './ButtonDisable'

const Button = ({condition}) => {
  if (condition) {
    return <ButtonActive />
  }

  return <ButtonDisable />
}

export default Button