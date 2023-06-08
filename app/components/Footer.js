export default function Footer() {
    const socialsNets = ['Twitter', 'LinkedIn', 'Instagram', 'Twitch'];

    const listSocials = socialsNets.map((social, index) => 
    <li key={index}>{social}</li>
    )

    return(
        <footer>
            <nav><h4>Retrouvez-moi sur les réseaux</h4>
                <ul>{listSocials}</ul>
            </nav>
        </footer>
    )
}