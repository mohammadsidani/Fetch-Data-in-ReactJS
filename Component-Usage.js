import useFetch from "./useFetch";
const App = () => {
  const { isLoading, serverError, apiData } = useFetch("https://website.com");
  return (
    <div>
      <h2>API Data</h2>
      {isLoading && <span>Loading...</span>}
      {!isLoading && serverError ? (
        <span>Error in fetching data...</span>
      ) : (
        <span>{JSON.stringify(apiData)}</span>
      )}
    </div>
  );
};
