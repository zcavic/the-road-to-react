import React from "react";

const useStorageSpace = (key, initialState) => {
    const [value, setValue] = React.useState(localStorage.getItem(key) || initialState);
    React.useEffect(() => {
        localStorage.setItem(key, value);
    }, [value, key]);
    return [value, setValue];
};

function App() {
    const initialStories = [
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
    const [stories, setStories] = React.useState(initialStories);

    const handleSearch = (event) => {
        console.log(event.target.value);
        setSearchTerm(event.target.value);
    };

    const handleRemoveStory = (item) => {
        const newStories = stories.filter((story) => story.key !== item.key);
        setStories(newStories);
    };

    const List = ({ list }) => (
        <ul>
            {list.map((item) => (
                <Item key={item.key} item={item} onRemove={handleRemoveStory}></Item>
            ))}
        </ul>
    );

    const Item = ({ item, onRemove }) => (
        <li>
            <span>
                <a href={item.url}>{item.title}</a>
            </span>
            <span>
                <button type="button" onClick={() => onRemove(item)}>
                    Remove
                </button>
            </span>
        </li>
    );

    const InputWithLabel = ({ id, label, value, type = "text", onInputChange, isFocused }) => {
        const inputRef = React.useRef();
        React.useEffect(() => {
            if (isFocused && inputRef.current) {
                inputRef.current.focus();
            }
        }, [isFocused]);
        return (
            <>
                <label htmlFor={id}>{label}</label>
                &nbsp;
                <input ref={inputRef} id={id} type={type} onChange={onInputChange} value={value} />
            </>
        );
    };

    return (
        <div>
            <h1>Frontend frameworks</h1>
            <InputWithLabel id="search" label="Search" value={searchTerm} onInputChange={handleSearch} isFocused></InputWithLabel>
            <List list={stories.filter((item) => item.title.toLowerCase().includes(searchTerm.toLowerCase()))}></List>
        </div>
    );
}

export default App;
