import React from 'react'
import { Row } from 'react-bootstrap'
import CardMovie from './CardMovie'
import Paginationn from './Paginationn'

function MovieList() {
  return (
     <Row className='mt-3 mx-2'>

         <CardMovie/>
         <Paginationn/>

     </Row>
   
  )
}
export default MovieList
