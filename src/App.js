import React from "react";

const useStorageSpace = (key, initialState) => {
    const [value, setValue] = React.useState(localStorage.getItem(key) || initialState);
    React.useEffect(() => {
        localStorage.setItem(key, value);
    }, [value, key]);
    return [value, setValue];
};

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

    const [searchTerm, setSearchTerm] = useStorageSpace("search", "r");

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

    const InputWithLabel = ({ id, label, value, type = "text", onInputChange }) => {
        return (
            <>
                <label htmlFor={id}>{label}</label>
                &nbsp;
                <input id={id} type={type} onChange={onInputChange} value={value}></input>
            </>
        );
    };

    return (
        <div>
            <h1>Frontend frameworks</h1>
            <InputWithLabel id="search" label="Search" value={searchTerm} onInputChange={handleSearch}></InputWithLabel>
            <List list={stories.filter((item) => item.title.toLowerCase().includes(searchTerm.toLowerCase()))}></List>
        </div>
    );
}

export default App;
