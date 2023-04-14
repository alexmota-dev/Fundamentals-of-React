import React from "react";
import Post from "./Post";

function App(){
    return (
        <React.Fragment>
            <h1>Componente App</h1>
            <h2>{Math.random()}</h2>
            <Post
                title="Titulo 01"
                subtitle="Subtitulo 01"
            />
            <Post
                title="Titulo 02"
                subtitle="Subtitulo 02"
            />
            <Post
                title="Alex"
                subtitle="Dev do Ceará"
            />
        </React.Fragment>
    )
  }

  export default App;