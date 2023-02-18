# Fetch-Data-in-ReactJS
There are several different ways to fetch data from a server in ReactJS, depending on the specific needs of your application. Here are some common approaches:
# 1.Fetch Method
The fetch() method in JavaScript is used to request to the server and load information on the webpages. The request can be of any APIs that return the data of JSON format or XML. This method returns a promise.

![image](https://user-images.githubusercontent.com/86320260/219847390-f1a4922f-585c-4f3c-9404-41190b3dc380.png)

# 2.Async-Await
It is the preferred way of fetching the data from an API as it enables us to remove our .then() callbacks and return asynchronously resolved data. In the async block, we can use Await function to wait for the promise.

![image](https://user-images.githubusercontent.com/86320260/219847681-2e03c58f-923c-48e1-860c-b2e0dc47d5f2.png)

# 3.Axios Library
With Axios, we can easily send asynchronous HTTP requests to REST APIs and perform create, read, update and delete "CRUD" operations. Axios can be imported in plain JavaScript or with any library accordingly.

![image](https://user-images.githubusercontent.com/86320260/219847831-36bbe97a-3099-475e-a08c-3cff9de60316.png)

# 4.Custom Hook
It is basically a React component whose name will start with "use" like useFetch. It can use one or more React hooks inside them.

![image](https://user-images.githubusercontent.com/86320260/219847989-9070815e-73f3-4e01-b980-b096a1c80791.png)

# 5.Usage in the component
Import the useFetch hook and pass the URL of the API endpoint from where you want to fetch data. Now just like any React hook we can directly use our custom hook to fetch the data.

![image](https://user-images.githubusercontent.com/86320260/219856087-c8773594-70a3-4c37-b64b-51c456afaa86.png)

# 6.React Query Library
With this we can achieve a lot more than just fetching data. It provides support for caching and re-fetching, which impacts the overall user experience by preventing irregularities and ensuring our application feels faster.

![image](https://user-images.githubusercontent.com/86320260/219856209-fed64e8a-b87c-455d-9222-e0f2e22d6e01.png)


