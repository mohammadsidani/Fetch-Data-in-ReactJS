const { useEffect } = require("react");

function App() {
  useEffect(() => {
    (async () => {
      try {
        const result = await axios.get("https://website.com/");
        console.log(result.data);
      } catch (error) {
        console.error(error);
      }
    })();
  });
  return <div> How to fetch data by different ways</div>;
}
