import Story from "./Story.js";

const stories = [
    { user: "9gag", image: "assets/img/9gag.svg" },
    { user: "meowed", image: "assets/img/meowed.svg" },
    { user: "barked", image: "assets/img/barked.svg" },
    {
        user: "nathanwpylestrangeplanet",
        image: "assets/img/nathanwpylestrangeplanet.svg",
    },
    { user: "wawawicomics", image: "assets/img/wawawicomics.svg" },
    { user: "respondeai", image: "assets/img/respondeai.svg" },
    { user: "filomoderna", image: "assets/img/filomoderna.svg" },
    { user: "memeriagourmet", image: "assets/img/memeriagourmet.svg" },
];

export default function Stories() {
    return (
        <div class="stories">
            {stories.map((story) => (
                <Story image={story.image} user={story.user} />
            ))}

            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    );
}
