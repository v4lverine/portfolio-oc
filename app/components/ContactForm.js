//en cours de fabrication

export default function ContactForm(){
    return (
        <section>
            <form>
                <label>Prénom/Nom</label>
                <input required/>
                <label>E-mail</label>
                <input required/>
                <label>Message</label>
                <input required/>
                <button>Envoyer</button>
            </form>
        </section>
    )
}