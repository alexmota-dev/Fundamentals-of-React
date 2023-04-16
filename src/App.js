import React, { useState } from "react";
import Header from "./Header";
import Post from "./Post";

function App(){
    const [posts, setPosts] = useState([
        {id:Math.random(),title:"Title#01", subtitle:"Sub#01", likes:21},
        {id:Math.random(),title:"Title#02", subtitle:"Sub#02",likes:23},
        {id:Math.random(),title:"Title#03", subtitle:"Sub#03", likes:18},
        {id:Math.random(),title:"Title#04", subtitle:"Sub#04", likes:20},
    ]);

    function handleRefresh(){
        console.log("click");
        
        setPosts([...posts,
           {
                id:Math.random(),
                title: `Title#0${posts.length+1}`,
                subtitle: `Sub#0${posts.length+1}`,
                likes: 50,
            },
        ])
        console.log(posts);
    }
    return (
        <React.Fragment>
            <Header title="Posts da Semana">
                <button onClick={handleRefresh}>Atualizar</button>
            </Header>

            <hr/>

            {posts.map((post)=>(
                <Post
                    key={post.id}
                    likes={post.likes}
                    post={{
                        title:post.title,
                        subtitle:post.subtitle,
                    }}
                />
            ))}
        </React.Fragment>
    )
  }

  export default App;