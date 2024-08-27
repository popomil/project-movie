import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'

function MoveDetails() {
    const paramse = useParams()
    console.log(paramse.id )
    const[movie, setMovie] = useState([])

// Get All Movies by axios
  const getMovieDetails = async () => {
      const res = await axios.get(`https://api.themoviedb.org/3/movie/${paramse.id}?api_key=52ef927bbeb21980cd91386a29403c78&language=ar`);
      console.log(res.data)
      setMovie(res.data)
      console.log('Homepage:', res.data.homepage); // تحقق من وجود خاصية homepage

}
useEffect(() =>{
    getMovieDetails();
}, [])

  
  return (
    <Container>
    <div>
        <Row className='justify-content-center my-3 detailsFilm'>
            <Col md="12" xs="12" className='mt-4'>
            <div className='card-detalis d-flex align-items-center'>
                <img 
                className='img-movie '
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}  alt={movie.title}
                />
                <div className='justify-content-center text-center mx-auto'>
                    <p className='card-text-details border-bottom'>اسم الفيلم: {movie.title}</p>
                    <p className='card-text-details border-bottom'>تاريخ الفيلم : {movie.release_date}</p>
                    <p className='card-text-details border-bottom'>عدد المقيمين : {movie.vote_count}</p>
                    <p className='card-text-details border-bottom'>التقييم : {movie.vote_average}</p>
                </div>
            </div>
            </Col>
        </Row>

    <Row className='justify-content-center storyFilm'>
        <Col md="12" xs="12" sm="12" className='mt-1'>
            <div className='card-story d-flex align-items-center'>
                <div className='text-end px-2'>
                    <p className='card-text-details border-bottom'>القصة :</p>
                </div>
                <div className='text-end'>
                    <p className='card-text-story '>{movie.overview
                    }</p>
                </div>

            </div>
        </Col>
    </Row>    
    <Row className='justify-content-center -3 buttonItem'>
  <Col md="10" xs="12" sm="12" className='mt-2 d-flex justify-content-center mt-2 mb-2'>
  <Link to={"/"}>

      <button style={{backgroundColor:"#b45b35", border:"none"}} className='btn btn-primary mx-2'>
        عوده للرئيسيه
      </button>
    </Link>
    <a href={movie.homepage}>
        <button style={{backgroundColor:"#b45b35", border:"none"}}  className='btn btn-primary  mx-2'>
          مشاهده الفيلم
        </button>
      </a>
  </Col>
</Row>

    </div>
</Container>
  )
}
export default MoveDetails