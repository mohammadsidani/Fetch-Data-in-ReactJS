const { useEffect } = require("react");

function App() {
  useEffect(() => {
    axios
      .get("https://website.com/")
      .then((response) => console.log(response.data));
  }, []);
  return <div> How to fetch data by different ways</div>;
}
