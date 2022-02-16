import {Product, ProductObj, ProductTyped} from "../components/Product.js";
import {Btn} from "../components/Buttons.js";
import {useState} from "react";

const Props = () => {
    const prod = 'Ecran';
    const products = ['Ordinateur', 'Souris', 'Clavier'];
    const obj_products = [
        {id: 1, name: 'Pomme', price: 2},
        {id: 2, name: 'Mouchoirs', price: 1},
        {id: 3, name: 'T-shirt', price: 20},
    ]
    const [isLoading, setLoading] = useState(false);

    const testBtn = () => {
        setLoading(true);
        console.log("Coucou");
        setTimeout(() => {
            setLoading(false)
        }, 5000)
    }

    return (
        <>
            <h1>Les Props</h1>
            <main>
                <article>
                    <h2>Fonctionnement</h2>
                    <h3>Simple : </h3>
                    <div className="grid">
                        <Product name="Tasse"/>
                        <Product name={prod}/>
                        <Product/>
                        { products.map(p => <Product key={p} name={p}/>)}
                    </div>

                    <h3>Objets</h3>
                    <div className="grid">
                        {obj_products.map(p => (
                            <ProductObj key={p.id} name={p.name} price={p.price}/>
                        ))}
                        <ProductObj name="Café" price="2" currency="$"/>
                        <ProductObj name="Thé"/>
                        <ProductObj name="Beurre de Cacahuète" price="quatre"/>
                        <ProductObj name="Beurre d'amande'" prix="5"/>
                    </div>
                </article>

                <article>
                    <h2>Typage</h2>
                    <p>Les props, et la souplesse de JS sur les types peuvent poser problème : </p>
                    <ul>
                        <li>Propriété non passée</li>
                        <li>Mauvais type</li>
                        <li>Erreur sur le nom d'une prop</li>
                    </ul>
                    <p> Pour pallier à ça, il existe une librairie : prop-types.</p>
                    <p><code> npm i prop-types </code></p>
                    <p>Attention : </p>
                    <ul>
                        <li>Ne fonctionne qu'avec les attributs calculés { 'prop={valeur}' }</li>
                        <li>C'est une librairie de développement, qui ne lance que des warnings</li>
                    </ul>

                    <h3>Produits typés : </h3>
                    <div className="grid">
                        <ProductTyped name={'Machin'} price={300}/>
                        <ProductTyped name={'Bidule'} price={300} action={() => alert('Coucou')}/>
                    </div>
                </article>

                <article>
                    <h2>Test Bouton : </h2>
                    <div>
                        <Btn action={testBtn} loading={isLoading} txt={'Clic Clic'}/>
                        <Btn action={testBtn} disabled={true} txt={'Clic Clic'}/>
                    </div>
                </article>

            </main>
        </>
    )
}

export default Props;
