import React, { useEffect, useRef, useState } from 'react'
import { useDispatchCart, useCart } from './ContextReducer';

export default function Card(props) {

  let data = useCart();
  let dispatch = useDispatchCart();
  
  const priceRef = useRef();

  let options = props.options;
  let priceOptions = Object.keys(options)  // js built-in function


  const [qty, setQty] = useState(1);
  const [size, setSize] = useState("");

  const handleAddtoCart = async () => {

    let food = []
    for (const item of data) {
      if (item.id === props.foodItem._id) {
        food = item;
        break;
      }
    }
    if (food !== 0) {
      if (food.size === size) {
        await dispatch({ type: "UPDATE", id: props.foodItem._id, price: finalPrice, qty: qty })
        return
      }
      else if (food.size !== size) {

        await dispatch({ type: "ADD", id: props.foodItem._id, name: props.foodItem.name, price: finalPrice, qty: qty, size: size })
        console.log("Size different so simply ADD one more to the list")
        return
        // console.log(data)
      }
      return
    }

    await dispatch({ type: "ADD", id: props.foodItem._id, name: props.foodItem.name, price: finalPrice, qty: qty, size: size })

  }


  let finalPrice = qty * parseInt(options[size]);


  useEffect(() => {
    setSize(priceRef.current.value)
  }, [])

  return (
    <div>
      <div className="card mt-3" style={{ "width": "20rem", "maxHeight": "390px" }}>
        <img src={props.foodItem.img} className="card-img-top" alt="..." style={{ height: "200px", objectFit: "fill" }} />
        <div className="card-body">
          <h5 className="card-title">{props.foodItem.name}</h5>
          {/* <p className="card-text">Some quick example text to build.</p> */}
          {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
          <div className=' container w-100'>
            <select className='m-2 h-100 bg-success rounded' onChange={(e) => setQty(e.target.value)}>
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i} value={i + 1}>{i + 1}</option>
                )
              })}
            </select>
            <select className='m-2 h-100 bg-success rounded' ref={priceRef} onChange={(e) => setSize(e.target.value)}>
              {/* <option key='1' value='Half'>Half</option>
                <option key='2' value='Full'>Full</option> */}

              {
                priceOptions.map((data) => {
                  return <option key={data} value={data}>{data}</option>
                })
              }
            </select>
            <div className='d-inline fs-5'>${finalPrice}/-</div>
            <hr></hr>
            <button className='btn btn-success justify-center ms-2' onClick={handleAddtoCart}>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  )
}
