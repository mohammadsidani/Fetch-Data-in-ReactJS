import axios from "axios";
import { useQuery } from "react-query";

function App() {
  const { isLoading, error, data } = useQuery("posts", () =>
    axios("https://website.com")
  );

  console.log(data);

  return <div>How to fetch data by different ways</div>;
}
