import ListContainer from "../layouts/ListContainer";
import ListItem from "./ListItem";

export default function List(props) {
    return (
        <ListContainer>
            <div class="list-group list-group-light">
                <h2 className="text-white m-2">Top Gamers</h2>
                {[
                    {
                        name: "welid wg",
                        rank: 1,
                        logo: "avatar.jpg",
                        followers: 20,
                    },
                    {
                        name: "ali ben lai",
                        rank: 2,
                        logo: "back2.jpg",
                        followers: 54,
                    },
                    {
                        name: "sawsen amal",
                        rank: 3,
                        logo: "back.jpg",
                        followers: 5800,
                    },
                    {
                        name: "M3kky",
                        rank: 4,
                        logo: "logoPurple.png",
                        followers: 4500,
                    },
                ].map((item) => {
                    return <ListItem key={item.rank} item={item} />;
                })}
            </div>
        </ListContainer>
    );
}
