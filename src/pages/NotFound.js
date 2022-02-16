import {useLocation} from "react-router-dom";

const NotFound = () => {
    const location = useLocation();
    //  useLocation : hook de React router dom
    // Retourne un objet location
    console.log(location)

    return (
        <div>
            <h1>Oups !</h1>
            <h2>R U Lost ?</h2>
            <img alt="404 : page not found" src="https://img.buzzfeed.com/buzzfeed-static/static/2016-02/1/11/enhanced/webdr07/anigif_enhanced-21255-1454345675-2.gif"/>
            <p>Le chemin <i>{location.pathname}</i> n'existe pas</p>

        </div>
    )
}

export default NotFound;
