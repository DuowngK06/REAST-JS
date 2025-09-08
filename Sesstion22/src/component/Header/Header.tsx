import React, { useState } from 'react'

export default function Header() {
    const [search, setSearch] = useState('');
    const [addItem, setAddItem] = useState('');
    const [items, setItems] = useState<string[]>([]);
    const [editIndex, setEditIndex] = useState<number | null>(null);

    const handleAdd = () => {
        if (addItem.trim() === '') return;
        if (editIndex !== null) {
            const newItems = [...items];
            newItems[editIndex] = addItem;
            setItems(newItems);
            setEditIndex(null);
        } else {
            setItems([...items, addItem]);
        }
        setAddItem('');
    };

    const handleDelete = (idx: number) => {
        setItems(items.filter((_, i) => i !== idx));
        if (editIndex === idx) setEditIndex(null);
    };

    const handleEdit = (idx: number) => {
        setAddItem(items[idx]);
        setEditIndex(idx);
    };


    const filteredItems = items.filter(item =>
        item.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div>
            <h1>Todo List</h1>
            <p>Get things done, one item at a time</p>
            {/* <input
                type="text"
                placeholder="Search..."
                value={search}
                onChange={e => setSearch(e.target.value)} */}
            />
            {/* <input
                type="text"
                placeholder="Filter..."
                disabled
            /> */}
            <p>Move done Items at the end?</p>
            <div>
                <h3>Add to the todo list</h3>
                <input
                    type="text"
                    placeholder="Add item..."
                    value={addItem}
                    onChange={e => setAddItem(e.target.value)}
                />
                <button onClick={handleAdd}>
                    {editIndex !== null ? 'Update Item' : 'Add Item'}
                </button>
            </div>
            <ul>
                {filteredItems.map((item, idx) => (
                    <li key={idx}>
                        {item}
                        <button onClick={() => handleEdit(items.indexOf(item))}>Edit</button>
                        <button onClick={() => handleDelete(items.indexOf(item))}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}