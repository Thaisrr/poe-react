import '../style/Buttons.css';

export const Btn = ({action, txt, loading=false, disabled = false}) => {
    return (
        <button disabled={disabled} onClick={action}>
            { (!loading)? txt : <span className="spin"/> }
        </button>
    )
}


