import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import List from "./routes/List";
import Statistics from "./routes/Statistics";
import About from "./routes/About";
import Root from "./routes/Root";

export default function App() {
  const [data, setData] = useState([]);

  const handleAddItem = (item) => setData([...data, item]);

  const handleRemoveItem = (id) =>
    setData([...data.filter((item) => item.id !== id)]);

  const handleCheckItem = (id) =>
    setData([
      ...data.map((item) =>
        item.id === id
          ? {
              id: item.id,
              text: item.text,
              creationDate: item.creationDate,
              checked: !item.checked,
            }
          : item
      ),
    ]);

  const handleEditItem = (id, newText) =>
    setData([
      ...data.map((item) =>
        item.id === id
          ? {
              id: item.id,
              text: newText,
              creationDate: item.creationDate,
              checked: item.checked,
            }
          : item
      ),
    ]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "/",
          element: (
            <List
              data={data}
              onAddItem={handleAddItem}
              onRemoveItem={handleRemoveItem}
              onCheckItem={handleCheckItem}
              onEditItem={handleEditItem}
            />
          ),
        },
        {
          path: "statistics",
          element: <Statistics data={data} />,
        },
        {
          path: "about",
          element: <About />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
