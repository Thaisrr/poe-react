const ShowForm = ({create}) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const user = {};
        for(let i = 0; i < form.length-1; i++) { // On excluse le dernier input ( bouton )
            const input = form[i];
            user[input.id] = input.value;
        }
        console.log(user);
        create(user);
    }

    return (
        <>
            <fieldset>
                <legend>Nouvel.le utilisateur.trice (2)</legend>
                <form onSubmit={handleSubmit}>
                    <p>
                        <label htmlFor="name">Nom</label>
                        <input id="name"/>
                    </p>
                    <p>
                        <label htmlFor="email">Email</label>
                        <input id="email"/>
                    </p>
                    <p>
                        <button type="submit">Créer</button>
                    </p>
                </form>
            </fieldset>
        </>
    )
}

export default ShowForm;
