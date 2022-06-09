import React,{ useEffect, useState }  from 'react'
import "./product.css"

export const Products = () => {
    const [product, setproduct] = useState([])
    //const [id,brandName]=brand
    const fectuser = async () => {
   
      try {
        let res = await fetch("http://localhost:8080/product/")
        const data=await res.json()
        console.log(data)
        setproduct(data)
        
      } catch (err) {
        console.log(err.message)
      }
    
    }
    useEffect(() => {
      fectuser()
    },[])
  return (
    <div className='product'>
        {product ?.map((e) => (

        <div key={e.id}>
        <img src={e.image}/>
        <p>{e.title}</p>
        <p>{e.price}</p>
        </div>)
        )}
    </div>
  )
}
