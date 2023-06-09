import datas from "../datas.json"

export default function Footer() {

    const listSocials = datas.map((data) => 
    <li key={data.id}>
        <a href={data.url}>{data.name}</a>
    </li>
    )

    return(
        <footer>
            <h4>Retrouvez-moi sur les réseaux !</h4>
            <nav>
                <ul>{listSocials}</ul>
            </nav>
        </footer>
    )
}