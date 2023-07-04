export default function Calculator() {
  const createDigits = () => {
    const digits = [];
    for (let i = 9; i > 0; i -= 1) {
      digits.push(<button type="button">{i}</button>);
    }
    return digits;
  };
  return (
    <div className="container">
      <div className="main-screen">
        <span className="table">0</span>
      </div>
      <div className="middle">
        <button type="button">AC</button>
        <button type="button">+/-</button>
        <button type="button">%</button>
        {createDigits()}
        <button className="double" type="button">0</button>
        <button type="button">.</button>
      </div>
      <div className="operators">
        <button className="operator" type="button">÷</button>
        <button className="operator" type="button">×</button>
        <button className="operator" type="button">-</button>
        <button className="operator" type="button">+</button>
        <button className="operator" type="button">+</button>
      </div>
    </div>
  );
}
