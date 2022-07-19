import "./styles.css"

function DataSettings() {
  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>Data</h2>
      <div className="body">
        <div className="btn-block">
          <button type="button">Создать переменную Х</button>
          <button type="button">Создать выражение {'X > 500'}</button>
        </div>
      </div>
    </main>
  );
}

export default DataSettings
