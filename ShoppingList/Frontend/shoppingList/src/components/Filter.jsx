import { Input, Select } from "@chakra-ui/react";

export default function Filter({filter, setFilter}) {
    return (
        <div className="flex flex-col gap-5">
            <Input placeholder="Поиск" onChange={(e) => setFilter({...filter, search: e.target.value})}/>
            <Select onChange={(e) => setFilter({...filter, sortOrder: e.target.value})}>
                <option value={"desc"}>По убыванию</option>
                <option value={"asc"}>По возрастанию</option>
            </Select>
        </div>
    );
}





