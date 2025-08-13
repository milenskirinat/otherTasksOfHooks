import { useState, useMemo } from "react";

const items = Array.from({ length: 1000 }, (_, i) => `Элемент ${i + 1}`);

export default function FilteredList() {
  const [filter, setFilter] = useState("");

  const filtredElement = useMemo(() => {
    return items.filter((items) =>
      items.toLowerCase().includes(filter.toLowerCase())
    );
  }, [filter]);

  return (
    <div>
      <input
        placeholder="Searching..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <ul>
        {filtredElement.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

// Задача:
// Есть список из 1000 элементов. Добавь поле поиска,
// которое фильтрует список. Фильтрация должна происходить
// эффективно, без лишних вычислений.
