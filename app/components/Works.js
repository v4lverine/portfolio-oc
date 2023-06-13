import works from "../datas/works.json"

export default function Works() {
    const listWorks = works.map((work) => 
    <li key={work.id}>
        <h4>{work.title}</h4>
        <p>{work.description}</p>
        <a href={work.url}>{work.captionUrl}</a>
    </li>
    )

    return(
        <section>
            <h2>Mes différents travaux (en slideshow ?)</h2>
                <h3>En développement</h3>
                <ul>{listWorks}</ul>
        </section>
    )
} 