import React from 'react'

function List() {
    const user=["xyz","asd","qwe"]

    const users=[
        {id:1,name:"xyz"},
        {id:2,name:"asd"},
        {id:3,name:"qwe"},
        
    ]
    return (
        <>
        <h1>list comp</h1>
        {/* {
            user.map((u)=>(
                <p>{u}</p>
            ))
        } */}
        {/* {
            user.map((u,key)=>(
                <p key={key}>{u}- {key}</p>
            ))
        } */}
        {/* {
            users.map((u)=>(
                <p key={u.id}>{u.name}- {u.id}</p>
            ))
        } */}
        {
            users.map((u)=>(
                <div key={u.id}>
                    <h2>{u.name}</h2>
                    <p>{u.id}</p>
                </div>
            ))
        }
        </>
    )
}

export default List
