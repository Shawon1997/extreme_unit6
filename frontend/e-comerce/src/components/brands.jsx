import React, { useEffect, useState } from 'react'
//import axios from "axios"

export const Brands = () => {
  const [brand, setbrand] = useState([])
  const [id,brandName]=brand
  const fectuser = async () => {
    //let res = await fetch("http://localhost:8080/brand/").then((e) => e.json()).catch((err) => console.log(err))
    //res=await res.json()
    try {
      let res = await fetch("http://localhost:8080/brand/")
      const data=await res.json()
      //console.log(data,13)
      setbrand(data)
      
    } catch (err) {
      console.log(err.message)
    }
  
  }
  useEffect(() => {
    fectuser()
  }, [])
  //console.log(brand,24)
  return (
    <div>
      <h2>All Brands</h2>
      {/*{brandName}*/}
      {brand ?.map((e) => (

        <div key={e.id}>
          <p>{e.brandName}</p>
        </div>)
      )}
    </div>
  )
}
