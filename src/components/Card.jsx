export default function Card(props) {
    const extraClass = props.class ? " " + props.class : "";
    return (
        <div class={"rounded-xl bg-surface0 p-4 m-4 overflow-hidden shadow-md" + extraClass}>
            {props.children}
        </div>
    );
}
