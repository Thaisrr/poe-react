const Static = () => {
    let message = "Les JSX servent à interpréter du Javascript " +
    " entre {}, on peut donc y manipuler des données.";

     const fruits = ['Pomme', 'Poire', 'Banane', 'Ananas'];

    return (
        <>
            <h1>Données Statiques</h1>

            <main>
                <div className="card">{message}</div>


                <article>
                    <h2>Les listes</h2>
                    <ul>
                        {/* 
                            -> Pour chaque élément du tableau, on veut récupérer
                            un élément <li> qui contient le nom du fruit
                            La fonction map nous permet d'itéré dans le tableau, 
                            et de renvoyé une valeur pour chaque élément, 
                            On s'en sert donc pour retourner du JSX

                            prop "key" : doit contenir une valeur unique 
                            (comme la propriété id)
                        */}
                        { fruits.map( fruit => <li key={fruit}>{fruit}</li> ) }

                        {/*
                            fruit.map( function (fruit) {
                                return (<li>{fruit}</li>)
                            })
                        */}
                    </ul>





                </article>
            </main>
        </>
    )
}

export default Static;