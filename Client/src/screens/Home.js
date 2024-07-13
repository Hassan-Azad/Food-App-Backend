import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'
// import Carousal from '../components/Carousal'

export default function Home() {

  const [foodCat, setfoodCat] = useState([]);
  const [foodItem, setfoodItem] = useState([]);

  const [search, setSearch] = useState("");

  const loadData = async ()=>{
    let response = await fetch("http://localhost:5000/api/foodData",{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    response = await response.json();
    // console.log(response[0], response[1]);
    setfoodItem(response[0]);
    setfoodCat(response[1]);
  }

  useEffect(()=>{
    loadData()
  },[])





  return (
    <div>
      <div><Navbar /></div>
      <div>
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div
            className="carousel-caption d-none d-md-block"
            style={{ zIndex: "2" }}
          >
            <div class="d-flex justify-content-center">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={search}
                onChange={(e)=>{setSearch(e.target.value)}}
              />
              {/* <button class="btn btn-outline-success text-white bg-success" type="submit">
                Search
              </button> */}
            </div>
          </div>
          <div className="carousel-item active">
            <img
              src="images/pasta.jpg"
              className="d-block img-fluid"
              style={{
                width: "100%",
                height: "600px",
                filter: "brightness(50%)",
              }}
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="images/burger1.jpg"
              className="d-block img-fluid"
              style={{
                width: "100%",
                height: "600px",
                filter: "brightness(50%)",
              }}
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="images/pasta1.jpg"
              className="d-block img-fluid"
              style={{
                width: "100%",
                height: "600px",
                filter: "brightness(50%)",
              }}
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      </div>
      <div className='container'>
        {
          foodCat.length > 0
          ? foodCat.map((data)=>{
            return(
              <div className='row mb-3'>
              <div key={data._id} className='fs-3 m-3'>{data.CategoryName}</div>
              <hr />
              {foodItem.length > 0 
              ? foodItem.filter((item)=> (item.CategoryName === data.CategoryName) && (item.name.toLowerCase().includes(search.toLocaleLowerCase())))
              .map(filterItems=>{
                return(
                  <div key={filterItems._id} className='col-12 col-md-6 col-lg-3'>
                    <Card foodItem = {filterItems}
                          // foodName = {filterItems.name}
                          options = {filterItems.options[0]}
                          // imgSrc = {filterItems.img}
                    ></Card>
                  </div>
                )
              }): <div>No such data found</div>
              
              }
              </div>
            )
          })
          :""
        }
        {/* <Card/> */}
      </div>
      <div><Footer /></div>
    </div>
  )
}
