import '../style/Buttons.css';
import PropTypes from "prop-types";
import {useNavigate} from "react-router-dom";

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


export const BackBtn = () => {
    const navigate = useNavigate();
    console.log(navigate);

    const back = () => navigate(-1);

    return <button onClick={back} className="secondary">{'<'} Back</button>

}


