import { useState } from "react";

const initialData = [
    {
      id: 1,
      value: "Feliz 😁"
    },
    {
      id: 2,
      value: "Amor 😘"
    },
    {
      id: 3,
      value: "Triste 😥"
    },
    {
      id: 4,
      value: "Enojado 😡"
    }
];

const allowedEmoji = [
    "😊",
    "🙃",
    "🤪",
    "🤓",
    "🤯",
    "😴",
    "💩",
    "👻",
    "👽",
    "🤖",
    "👾",
    "👐"
];

const Desafio8 = () => {
    const [data, setData] = useState([]);

    const addItem = () => {
        const item = addNewItem(data);
        setData((prev) => [...prev, item]);
    }

    const deleteItem = (itemId) => {
        const updateItem = data.filter(item => item.id !== itemId);
        setData(updateItem);
    }

    const addNewItem = (data) => {
        const id = data.length + 1;
        const newItem = {
          id,
          value: `Some Text ${
            allowedEmoji[Math.floor(Math.random() * allowedEmoji.length)]
          }`
        };
    
        return newItem;
    };
    
    return (
        <div>
          <h1>Selecciona</h1>
          <button onClick={addItem}>Agrega un nuevo elemento</button>
          {data.map((item, i) => (
            <li className="item" key={item.id}>
              {item.value}
              <select>
                <option>Mal</option>
                <option>Okay</option>
                <option>Me gusta</option>
              </select>
              <button onClick={() => deleteItem(item.id)}>Borrar</button>
            </li>
          ))}
        </div>
    );
}

export default Desafio8;