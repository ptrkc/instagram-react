export default function Suggestion(props) {
    return (
        <div class="sugestao">
            <div class="usuario">
                <img src={props.user.image} />
                <div class="texto">
                    <div class="nome">{props.user.username}</div>
                    <div class="razao">{props.reason}</div>
                </div>
            </div>
            <div class="seguir">Seguir</div>
        </div>
    );
}
