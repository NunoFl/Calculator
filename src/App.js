import "./styles.css";

export default function App() {
  // 👇️ Get current Year
  const date = new Date().getFullYear();
  // 👇️ Get year of specific date

  let diffYear = 0;
  //query
  const query = {
    props: {
      startValue: 10000,
      statedValue: 6600,
      year: 1992,
      km: 25000,
      status: 1
    }
  };

  function calcAgeIndex(date) {
    diffYear = date - query.props.year;
    return diffYear;
  }

  function calcDevalAge() {
    if (diffYear > 10) {
      return <h1>10</h1>;
    }
    if (diffYear >= 11 && diffYear < 15) {
      return <h1>11-15</h1>;
    }
    if (diffYear >= 16) {
      return <h1>16+</h1>;
    }
  }

  return (
    <div className="App">
      <h1>Showing Data</h1>
      <h2>Result</h2>
      <div>
        <h2>
          Data from query
          <br />
        </h2>
        <h3>
          {query.props.year}, {date}
        </h3>
        <h2>
          Data from functions
          <br />
        </h2>
        <h3 style={{ color: "red" }}>{diffYear}</h3>
      </div>
    </div>
  );
}
