import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

// in src/App.js
//import React from 'react';
import { Admin, Resource, ListGuesser } from "react-admin";
//import jsonServerProvider from "ra-data-json-server";
//import simpleRestProvider from 'ra-data-simple-rest';
//import fakeDataProvider from "ra-data-fakerest";
import jsonServerProvider from "../json-server-providerB.js";
import simpleRestDataProvider from "../simple-rest-providers2.js";
import fakeDataProvider from "../fakeDataProvider2.js";

//const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");
//const dataProvider = jsonServerProvider("https://8qp7u.sse.codesandbox.io"); // JSONserver set up by TS in codesandbox
//const dataProvider = jsonServerProvider("http://165.22.121.46:3030/RA");
const dataProvider = jsonServerProvider("https://dev1.frectal.net/RA/");
//const dataProvider = simpleRestDataProvider("https://8qp7u.sse.codesandbox.io"); // JSONserver set up by TS in codesandbox

// comment line extra
//const App = () => <Admin dataProvider={dataProvider} />;
/*
const dataProvider = fakeDataProvider(
  {
    posts: [{ id: 0, title: "Hello, world!" }, { id: 1, title: "FooBar" }],
    comments: [
      { id: 0, post_id: 0, author: "John Doe", body: "Sensational!" },
      { id: 1, post_id: 0, author: "Jane Doe", body: "I agree" }
    ],
    users: [
      {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz"
      },
      {
        id: 2,
        name: "Ervin Howell",
        username: "Antonette",
        email: "Shanna@melissa.tv"
      }
    ]
  },
  true
);
<Resource name="comments" list={ListGuesser} />
*/
//export default App;

function App() {
  return (
    <>
      <Admin dataProvider={dataProvider}>
        <Resource name="users" list={ListGuesser} />
        <Resource name="posts" list={ListGuesser} />
      </Admin>

      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
      </div>
    </>
  );
}
/**/

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
