import { Table } from "antd"
import { useEffect } from "react"
import { useState } from "react"

export function Posts() {
    const [posts, setPosts] = useState([])

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
          },
          {
            title: 'Titulo',
            dataIndex: 'title',
            key: 'title',
          },

    ]

    useEffect(()=>{
        async function fetchPosts() {
           const response = await fetch("https://jsonplaceholder.typicode.com/posts")
           const data = await response.json()

           setPosts(data)
        }

        fetchPosts()

    }, [])

    return <div>
        <h1>Lista de Posts...</h1>
            <Table columns={columns} dataSource={posts}/>
    </div>
    

}