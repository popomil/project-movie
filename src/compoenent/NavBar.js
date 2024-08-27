
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { getAllMovie, getMovieSearch } from '../redux/actions/movieAction';
import { useDispatch } from 'react-redux';

 function NavBar() {
    const  onSearch = (wordSearch) =>{
        search(wordSearch)
    }
    const dispatch = useDispatch()
      // Search by URL by backend
  const search = async (word) => {
    if (word === "") {
      dispatch(getAllMovie()) // استرجاع الأفلام عندما يكون البحث فارغًا
    }else{
        dispatch(getMovieSearch(word))
    }

      } 

  return (
    <div className='nav-style '>
        <Container>
            <Row className='pt-2'>
                <Col xs="2" lg="1">
                <a href= "/"><img className='logo' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVbxg2MwUWmqgoTg844zXnXAYuqHcKd7gUgw&s' alt='dfs'/></a>
                </Col>
                <Col xs="10" lg="11" className='d-flex align-items-center'>
                <div className='search w-100'>
                    <i className='fa fa-search'></i>
                    <input onChange={(e) => onSearch(e.target.value)} type='text' className='form-control' placeholder='ابحث'/>
                </div>
                </Col>

            </Row>
        </Container>
      
    </div>
  )
}
export default NavBar
