import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { getPages } from '../redux/actions/movieAction';
import { useDispatch, useSelector } from 'react-redux';

const Paginationn = () => {
  const dispatch = useDispatch();
  const [pageCount, setPageCount] = useState(0);

  // الحصول على قيمة `pageCount` من الـ Redux store
  const pages = useSelector((state) => state.pageCount);

  // استدعاء الأفعال عند تحميل المكون
  useEffect(() => {
    // فرضًا أن `pages` يحتوي على قيمة صالحة
      setPageCount(pages);
  }, [pages]); // اضف pages كـ dependency


  const handlePageClick = (data) => {
    const selectedPage = data.selected + 1;
    dispatch(getPages(selectedPage)) // استدعاء الدالة لجلب الأفلام لصفحة معينة
    console.log(selectedPage); // Console log for debugging purposes
  };

  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="التالي"
      onPageChange={handlePageClick}
      marginPagesDisplayed={2}
      pageRangeDisplayed={2}
      pageCount={pageCount} // Use the pageCount passed as prop
      previousLabel="السابق"
      containerClassName={"pagination justify-content-center p-3"}
      pageClassName={"page-item"}
      pageLinkClassName={"page-link"}
      previousClassName={"page-item"}
      nextClassName={"page-item"}
      previousLinkClassName={"page-link"}
      nextLinkClassName={"page-link"}
      breakClassName={"page-item"}
      breakLinkClassName={"page-link"}
      activeClassName={"active"}
    />
  );
}

export default Paginationn