import "./styles.css";

export default function App() {
  const handleSubmit = (e) => {
    return alert(`hey! you clicked:${e.target.id}`);
  };

  return (
    <div>
      <div>
        <div id="Div-element" onClick={handleSubmit}>
          I am DIV
        </div>
        <span id="Span-element" onClick={handleSubmit}>
          I am SPAN
        </span>
        <br></br>
        <button id="Button-element" onClick={handleSubmit}>
          I am BUTTON
        </button>
        <br></br>
        <a href="#" id="Link-element" onClick={handleSubmit}>
          I am link
        </a>
      </div>
      <br></br>
      <div>
        <div>
          <div id="Div-element-2" className="button" onClick={handleSubmit}>
            I am DIV
          </div>
        </div>
        <br></br>
        <div>
          <span id="Span-element-2" className="button" onClick={handleSubmit}>
            I am SPAN
          </span>
        </div>
        <br></br>
        <div>
          <button
            id="button-element-2"
            className="button"
            onClick={handleSubmit}
          >
            I am BUTTON
          </button>
        </div>
        <br></br>
        <a
          href="#"
          id="Link-element-2"
          className="button"
          onClick={handleSubmit}
        >
          I am link
        </a>
      </div>
    </div>
  );
}
