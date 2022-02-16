import '../style/Logo.css';

function Logo() {

    return (
        <header>
            {/*
            Les images affichées dans les JSX doivent se trouver
            -> dans le répertoire public
            */}
            <img id="spin" alt="" src="images/logo192.png"/>
            <h1>Formation React</h1>
        </header>
 
    )

}

export default Logo;
