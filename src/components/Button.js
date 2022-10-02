import PropTypes from 'prop-types';

const Button = ({text, onClickBtn}) => {
  return (
    <div className="d-grid gap-2">
        <button className="btn btn-primary m-2" onClick={onClickBtn}>{text}</button>
    </div>
  )
}

Button.defaultProps = {
    text: 'Add Task'
}

Button.propTypes = {
    text: PropTypes.string,
    onClickBtn: PropTypes.func
}

export default Button