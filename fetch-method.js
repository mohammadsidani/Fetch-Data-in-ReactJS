const { useEffect } = require("react");

function App() {
  useEffect(() => {
    fetch("https://website.com/")
      .then((response) => response.json())
      .then((json) => console.log(json));
  }, []);
  return <div> How to fetch data by different ways</div>;
}


