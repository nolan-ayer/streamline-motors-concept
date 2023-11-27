export default function Select({ config }) {
  const { innerText, inputValue } = config;

  const renderOptions = innerText.map((val) => {
    return (
      <option key={innerText} value={inputValue}>
        {val}
      </option>
    );
  });

  return <select>{renderOptions}</select>;
}
