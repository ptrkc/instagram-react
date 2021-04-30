import User from "./User.js";
import Suggestions from "./Suggestions.js";

const userData = {
    name: "Catana",
    username: "catanacomics",
    image: "assets/img/catanacomics.svg",
};

export default function Sidebar() {
    return (
        <div class="sidebar">
            <User user={userData} />
            <Suggestions />

            <div class="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade •
                Termos • Localizações • Contas mais relevantes • Hashtags •
                Idioma
            </div>

            <div class="copyright">© 2021 INSTAGRAM DO FACEBOOK</div>
        </div>
    );
}
