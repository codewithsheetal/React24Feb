import React from 'react'

function Filter() {
    const products=[
        {id:1, name:'ciphone', price:200},
        {id:2, name:'avivo', price:150},
        {id:3, name:'bMI', price:100},
    ]

    
    let sortlist =[...products];
    // const sortedList = sortlist.sort((a,b)=>a.price - b.price)
    // const sortedList = sortlist.sort((a,b)=>b.price - a.price)

    // const Alphasortlist = sortlist.sort((a,b)=>a.name.localeCompare(b.name));
    const Alphasortlist = sortlist.sort((a,b)=>b.name.localeCompare(a.name));

    const filterproduct = products.filter(product =>product.price>=140);
    return (
        <>
        {/* {
            filterproduct.map((u)=>(
                <div key={u.id}>
                    <h2>{u.name}</h2>
                    <p>{u.price}</p>
                </div>
            ))
        } */}
        {/* {
            sortedList.map((u)=>(
                <div key={u.id}>
                    <h2>{u.name}</h2>
                    <p>{u.price}</p>
                </div>
            ))
        } */}
        {
            Alphasortlist.map((u)=>(
                <div key={u.id}>
                    <h2>{u.name}</h2>
                    <p>{u.price}</p>
                </div>
            ))
        }
        </>
    )
}

export default Filter
