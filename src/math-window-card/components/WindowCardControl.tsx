type WindowCardControlProps = {
  generateEquations: () => void;
  setRow: React.Dispatch<React.SetStateAction<number>>;
  setCol: React.Dispatch<React.SetStateAction<number>>;
};

const WindowCardControl = ({
  generateEquations,
  setRow,
  setCol,
}: WindowCardControlProps) => {
  return (
    <div className="control">
      <button className="btn" onClick={generateEquations}>
        Generate
      </button>
      <label htmlFor="row">Row</label>
      <select
        name="row"
        id="row"
        onChange={(e) => setRow(Number(e.target.value))}
      >
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="15">15</option>
        <option value="20">20</option>
      </select>
      <label htmlFor="col">Column</label>
      <select
        name="col"
        id="col"
        onChange={(e) => setCol(Number(e.target.value))}
      >
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="15">15</option>
        <option value="20">20</option>
      </select>
    </div>
  );
};

export default WindowCardControl;
