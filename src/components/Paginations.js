import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Pagination from 'react-bootstrap/Pagination';
const Paginations = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <Nav className="justify-content-center">
            <Pagination >
                {pageNumbers.map(number => (
                    <Pagination.Item key={number} onClick={() => paginate(number)}>
                        <a href="!#" className="page-link p-0">
                            {number}
                        </a>
                    </Pagination.Item>
                ))}
            </Pagination>
        </Nav >
    )
}

export default Paginations;