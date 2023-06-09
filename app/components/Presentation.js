export default function Presentation(props){
    return (
        <article>
            <h2>{props.label}</h2>
            <p>{props.children}</p>
        </article>
    )
}