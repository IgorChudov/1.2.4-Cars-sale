import ButtonActive from './ButtonActive'
import ButtonDisable from './ButtonDisable'

type ButtonProps = {
  condition: boolean
}

const Button = ({ condition }: ButtonProps) => {
  if (condition) {
    return <ButtonActive />
  }

  return <ButtonDisable />
}

export default Button