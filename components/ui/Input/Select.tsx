export default function Select({ config }) {
  const { innerText, inputValue } = config;

  // console.log("innerText:", innerText, "inputValue:", inputValue);

  const renderOptions = innerText.map((val) => {
    return <option key={innerText}>{val}</option>;
  });

  return <select>{renderOptions}</select>;
}
