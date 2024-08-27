
import { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllMovie } from '../redux/actions/movieAction';

function CardMovie() {
  const [movies, setMovies] = useState([]);
  // redux
  const dispatch = useDispatch()


 useEffect(() => {  // انا كده شغلت الداتاا
   dispatch(getAllMovie()) // الحصول على الأفلام عند تحميل المكون
 }, [dispatch]);

  const dataMovies = useSelector(state => state.movies)

  useEffect(() =>{
    setMovies(dataMovies)
  },[dataMovies])

  return (
    <Row className='card-row'>
      {movies.length ? (
        movies.map((movie) => (
          <Col key={movie.id} xs="7" sm="6" md="4" lg="3" className=''>
<Link to={`/movie/${movie.id}`}>
            <div className='card'>
              <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className='card__image' alt={movie.title} />
              <div className='card___overlay'>
                <div className='overlay___text text-center w-100 p-2'>
                  <p>اسم الفيلم: {movie.title}</p>
                  <p>تاريخ الاصدار: {movie.release_date}</p>
                  <p>النوع: {movie.genre_ids.join(', ')}</p>
                  <p >التقييم: {movie.vote_average}</p>
                </div>
              </div>
            </div>
</Link>
          </Col>
        ))
      ) : (
        <h1 className='text-center'>لا يوجد أفلام...</h1>
      )}
    </Row>
  );
}

export default CardMovie;




