import './button.styles.scss';

// inverted button
// default button
// sign-in button

const BUTTON_TYPE_CLASSES = {
    provider: 'google-sign-in',
    inverted: 'inverted'
}

const Button = ({ children, buttonType, inputOptions}) => {
    return (
        <button className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}>
            {children}
        </button>
    )
}

export default Button;