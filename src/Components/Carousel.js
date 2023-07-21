import React from 'react'

export const Carousel = () => {
    return (
        <div>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" style={{objectFit:"contain !important"}}>

            
                <div className="carousel-inner" id='corousel' >
                    
                    <div className="carousel-item active">
                        <img src="https://source.unsplash.com/random/300×300/?burger" className="d-block w-100" style={{filter: "brightness(30%"}} alt="..."></img>
                    </div>
                    <div className="carousel-item">
                        <img src="https://source.unsplash.com/random/300×300/?pastry" className="d-block w-100" style={{filter: "brightness(30%"}} alt="..."></img>
                    </div>
                    <div className="carousel-item">
                        <img src="https://source.unsplash.com/random/300×300/?barbeque" className="d-block w-100" style={{filter: "brightness(30%"}} alt="..."></img>
                    </div>
                </div>
                <br></br>
                <div className='corousel-caption ' >
                        <form className='d-flex'  >
                            <input className='form-control me-2' type='search' placeholder='Search' aria-label='Search'></input>
                            <button className='btn btn-outline-success text-white bg-success' type='submit'>Search</button>
                        </form>
                    </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}
