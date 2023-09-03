import { Show } from "solid-js";

export default function Card(props) {
    return (
        <div class="rounded-xl bg-surface0 p-8 overflow-hidden shadow-md">
            {props.children}
        </div>
    );
}
