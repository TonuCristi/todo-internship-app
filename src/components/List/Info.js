export default function Info({ item }) {
  return (
    <div className="info">
      <p className="data">Id: {item.id + 1}</p>
      <p className="data">Text: {item.text}</p>
      <p className="data">Creation Date: {item.creationDate}</p>
    </div>
  );
}
