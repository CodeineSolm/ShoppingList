import Filter from "./components/Filter";
import AddForm from "./components/AddForm";
import Item from "./components/Item";
import { useEffect, useState } from "react";
import { addItem, fetchItems } from "./services/items.js";

function App() {
    const [items, setItems] = useState([]);
    const [filter, setFilter] = useState({
        search: "",
        sortItem: "price",
        sortOrder: "desc",
    });

    useEffect(() => {
        const fetchData = async () => {
            let items = await fetchItems(filter);
            setItems(items);
        };

        fetchData();
    }, [filter]);

const onCreate = async (item) => {
    await addItem(item);
    let items = await fetchItems(filter);
    setItems(items);
};

  return (
  <section className="p-8 flex flex-row justify-start items-start gap-12">
      <div className="flex flex-col w-1/3 gap-10">
        <AddForm onCreate={onCreate}/>
        <Filter filter={filter} setFilter={setFilter}/>
      </div>

      <ul className="flex flex-col gap-5 w-1/2">
        {items.map((i) => (
            <li key={i.id}>
                <Item title={i.title} description={i.description} price={i.price}/>
            </li>
        ))}
      </ul>
  </section>
      );
}

export default App
