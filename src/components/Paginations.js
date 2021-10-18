import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Pagination from 'react-bootstrap/Pagination';
const Paginations = ({ postsPerPage, totalPosts }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <Nav>
            <Pagination>
                {pageNumbers.map(number => (
                    <Pagination.Item key={number}>
                        <a href="!#" className="page-link">
                            {number}
                        </a>
                    </Pagination.Item>
                ))}
            </Pagination>
        </Nav>
    )
}

export default Paginations;