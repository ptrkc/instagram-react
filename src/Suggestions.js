import Suggestion from "./Suggestion.js";
const suggestions = [
    {
        user: {
            image: "assets/img/bad.vibes.memes.svg",
            username: "bad.vibes.memes",
        },
        reason: "Segue você",
    },
    {
        user: {
            image: "assets/img/chibirdart.svg",
            username: "chibirdart",
        },
        reason: "Segue você",
    },
    {
        user: {
            image: "assets/img/razoesparaacreditar.svg",
            username: "razoesparaacreditar",
        },
        reason: "Novo no Instagram",
    },
    {
        user: {
            image: "assets/img/adorable_animals.svg",
            username: "adorable_animals",
        },
        reason: "Segue você",
    },
    {
        user: {
            image: "assets/img/smallcutecats.svg",
            username: "smallcutecats",
        },
        reason: "Segue você",
    },
];
export default function Suggestions() {
    return (
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>
            {suggestions.map((suggestion) => (
                <Suggestion user={suggestion.user} reason={suggestion.reason} />
            ))}
        </div>
    );
}
