import Post from "./Post.js";

const posts = [
    {
        poster: {
            image: "assets/img/meowed.svg",
            username: "meowed",
        },
        liker: {
            image: "assets/img/respondeai.svg",
            username: "respondeai",
        },
        image: "assets/img/gato-telefone.svg",
        likes: "101.523",
    },
    {
        poster: {
            image: "assets/img/barked.svg",
            username: "barked",
        },
        liker: {
            image: "assets/img/adorable_animals.svg",
            username: "adorable_animals",
        },
        image: "assets/img/dog.svg",
        likes: "99.159",
    },
];

export default function Posts() {
    return (
        <div class="posts">
            {posts.map((post) => (
                <Post
                    poster={post.poster}
                    liker={post.liker}
                    image={post.image}
                    likes={post.likes}
                />
            ))}
        </div>
    );
}
