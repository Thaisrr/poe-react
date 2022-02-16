import PropTypes from 'prop-types';

export const Product = (props) => {
    console.log(props);
    return (
        <div className="card">
            <h3>{props.name}</h3>
        </div>
    )
}

export const ProductObj = ({name, price, currency = "€"}) => {
    return (
        <div className="card">
            <h3>{name}</h3>
            <p>Prix (HT) : {price}{currency}</p>
            <p>Prix (TTC) : {price * 1.2}{currency}</p>
        </div>
    )
}

export const ProductTyped = ({name, price, action, currency = "€"}) => {
    return (
        <div className="card">
            <h3>{name}</h3>
            <p>Prix (HT) : {price}{currency}</p>
            <p>Prix (TTC) : {price * 1.2}{currency}</p>
            {action && <button onClick={action}>Clic</button> }
        </div>
    )
}

// Avec la librairie prop-types : rendre des données obligatoires et typées
ProductTyped.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    currency: PropTypes.string,
    action: PropTypes.func
}
