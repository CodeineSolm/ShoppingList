import axios from "axios";

export const fetchItems = async (filter) => {
    try {
        var response = await axios.get("https://localhost:44318/items", {
            params: {
                search: filter?.search,
                sortItem: filter?.sortItem,
                sortOrder: filter?.sortOrder,
            },
        });
        return response.data.items;
    } catch (e) {
        console.error(e);
    }
};

export const addItem = async (item) => {
    try {
        var response = await axios.post("https://localhost:44318/items", item);
        return response.status;
    } catch (e) {
        console.error(e);
    }
};