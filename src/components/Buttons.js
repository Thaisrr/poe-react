import '../style/Buttons.css';
import PropTypes from "prop-types";

export const Btn = ({action, txt, loading=false, disabled = false}) => {
    return (
        <button disabled={disabled} onClick={action}>
            { (!loading)? txt : <span className="bounce"/> }
        </button>
    )
}

Btn.propTypes = {
    action: PropTypes.func.isRequired,
    txt: PropTypes.string.isRequired,
    loading : PropTypes.bool,
    disabled : PropTypes.bool
}
