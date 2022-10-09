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

    const [searchTerm, setSearchTerm] = React.useState("React");

    const handleSearch = (event) => {
        console.log(event.target.value);
        setSearchTerm(event.target.value);
    };

    const List = ({ list }) => (
        <ul>
            {list.map((item) => (
                <Item key={item.key} item={item}></Item>
            ))}
        </ul>
    );

    const Item = ({ item }) => (
        <li>
            <span>
                <a href={item.url}>{item.title}</a>
            </span>
        </li>
    );

    const Search = ({ onSearch, search }) => {
        return (
            <div>
                <label htmlFor="search">Search:</label>
                <input id="search" type="text" onChange={onSearch} value={search}></input>
                <p>
                    Search for <strong>...</strong>
                </p>
            </div>
        );
    };

    return (
        <div>
            <h1>Frontend frameworks</h1>
            <Search onSearch={handleSearch} search={searchTerm}></Search>
            <List list={stories.filter((item) => item.title.toLowerCase().includes(searchTerm.toLowerCase()))}></List>
        </div>
    );
}

export default App;
