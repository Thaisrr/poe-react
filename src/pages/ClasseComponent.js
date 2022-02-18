import {Component} from "react";

class ClasseComponent extends Component {
    message = 'Coucou';
    interval;
    seconds1 = 0;

    constructor(props) {
        super(props);
        console.log("Dans le constructeur !")
        this.state = {seconds2: 0, data: 'Toto'}
    }

    componentDidMount() {
        console.log("Le composant est monté et rendu");
        // Pour faire les requêtes à faire au chargement
        // Equivalent de useEffect(func, [])
        this.interval = setInterval(() => {
            this.seconds1++;
            this.setState({seconds2 : this.state.seconds2 + 1});
            console.log("interval ", this.seconds1);
        }, 1000)
    }
    componentDidUpdate() {
        console.log("Mise à jour du composant")
    }
    componentWillUnmount() {
        console.log("Destruction du composant");
        // useState de nettoyage : désinscription aux flux,
        clearInterval(this.interval);
    }


    render() {
        // Ici : le JSX à retourner
        return (
            <>
                <h1>Class Component</h1>
                <main>
                    <h2>Présentation : </h2>
                    <p>{this.message}</p>
                    <p>Les props sont dans le constructeur,
                        pour les passer ça se passe comme dans un composant classique</p>
                    <p><code>{'<ClassComponent maprops="Coucou props"/>'}</code></p>
                    <p>Ma props : {this.props.maprops}</p>
                    <p>La props n'affiche pas de valeur, puisque pas de props</p>
                    <h2>Cycle de vie du composant</h2>
                    <div>
                        <img src="https://cdn-media-1.freecodecamp.org/images/1*_drMYY_IEgboMS4RhvC-lQ.png" alt="Cycle de vie d'un composant" title="Cycle de vie d'un composant" />
                    </div>
                    <div>
                        <img src="https://miro.medium.com/max/1400/1*u8hTumGAPQMYZIvfgQMfPA.jpeg" alt=""/>
                    </div>
                    <p>Des méthodes qui interviennent à un moment donné</p>
                    <p>Render() -> renvoie du JSX</p>
                    <p>Compteur 1: {this.seconds1}</p>
                    <p>Data : {this.state.data}</p>
                    <p>Compteur 2 : {this.state.seconds2}</p>

                </main>
            </>
        )
    }

}

export default ClasseComponent;



