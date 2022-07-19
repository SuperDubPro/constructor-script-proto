import "./styles.css"
import Square from "../../Square"
import Input from "../../Input"

function Constructor() {
  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>Constructor</h2>
      <div className="body">
        <Input disabled />
        <Square color="red" />
      </div>
    </main>
  );
}

export default Constructor
