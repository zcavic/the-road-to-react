import React from "react";

function App() {
    const stories = [
        {
            title: "React",
            url: "some url",
            author: "John Doe",
            key: 1
        },
        {
            title: "Vue",
            url: "some url 2",
            author: "John Doe 2",
            key: 2
        },
        {
            title: "Angular",
            url: "some url 2",
            author: "John Doe 2",
            key: 3
        },
        {
            title: "NativeJavascript",
            url: "some url 2",
            author: "John Doe 2",
            key: 4
        }
    ];

    const List = (props) => (
        <ul>
            {props.list.map((item) => (
                <Item key={item.key} item={item}></Item>
            ))}
        </ul>
    );

    const Item = (props) => (
        <li>
            <span>
                <a href={props.item.url}>{props.item.title}</a>
            </span>
        </li>
    );

    const Search = () => {
        const [searchTerm, setSearchTerm] = React.useState("");
        const handleChange = (event) => {
            setSearchTerm(event.target.value);
        };
        return (
            <div>
                <label htmlFor="search">Search:</label>
                <input id="search" type="text" onChange={handleChange}></input>
            </div>
        );
    };

    return (
        <div>
            <List list={stories}></List>
        </div>
    );
}

export default App;
