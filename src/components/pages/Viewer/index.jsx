import Input from "../../Input"
import Square from "../../Square"

function Viewer() {
  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>Viewer</h2>
      <div className="body">
        <Input />
        <Square color="red" />
      </div>
    </main>
  );
}

export default Viewer
