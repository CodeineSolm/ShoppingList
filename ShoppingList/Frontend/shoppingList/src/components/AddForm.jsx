import { Button, Input, Textarea } from "@chakra-ui/react";
import { useState } from "react";

export default function AddForm({onCreate}) {
  const [item, setItem] = useState(null);
  const onSubmit = (e) => {
    e.preventDefault();
    setItem(null);
    onCreate(item);
  };

  return (
      <form onSubmit={onSubmit} className="w-full flex flex-col gap-3">
              <h3 className="font-bold text-xl">Добавить предмет</h3>
              <Input placeholder="Название" value={item?.title ?? ""}
              onChange={(e) => setItem({...item, title: e.target.value})}/>
              <Textarea placeholder="Описание" value={item?.description ?? ""}
              onChange={(e) => setItem({...item, description: e.target.value})}/>
              <Input placeholder="Цена" value={item?.price ?? 0}
              onChange={(e) => setItem({...item, price: e.target.value})}/>
              <Button type="submit" colorScheme="blue">Добавить</Button>
            </form>
      );
}