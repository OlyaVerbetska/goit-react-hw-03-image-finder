
import '../Button/Button.scss'

const Button = ({onClick, children}) => (
    <button type="button" className="Button" onClick = {onClick}>
 {children}
  </button>
)

export default Button;