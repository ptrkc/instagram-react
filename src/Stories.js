import Story from "./Story.js";

const stories = [
    { username: "9gag", image: "assets/img/9gag.svg" },
    { username: "meowed", image: "assets/img/meowed.svg" },
    { username: "barked", image: "assets/img/barked.svg" },
    {
        username: "nathanwpylestrangeplanet",
        image: "assets/img/nathanwpylestrangeplanet.svg",
    },
    { username: "wawawicomics", image: "assets/img/wawawicomics.svg" },
    { username: "respondeai", image: "assets/img/respondeai.svg" },
    { username: "filomoderna", image: "assets/img/filomoderna.svg" },
    { username: "memeriagourmet", image: "assets/img/memeriagourmet.svg" },
];

export default function Stories() {
    return (
        <div class="stories">
            {stories.map((story) => (
                <Story image={story.image} username={story.username} />
            ))}

            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    );
}
