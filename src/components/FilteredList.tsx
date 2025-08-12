import { useState, useMemo } from "react";

const items = Array.from({ length: 1000 }, (_, i) => `Элемент ${i + 1}`);

export default function FilteredList() {
  const [filter, setFilter] = useState("");

  return (
    <div>
      <input
        placeholder="Поиск..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <ul>{/* Отобразить отфильтрованные элементы */}</ul>
    </div>
  );
}
