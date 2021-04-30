export default function User(props) {
    return (
        <div class="usuario">
            <img src={props.user.image} />
            <div class="texto">
                <strong>{props.user.username}</strong>
                {props.user.name}
            </div>
        </div>
    );
}
