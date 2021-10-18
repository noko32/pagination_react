import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'

const Posts = ({ posts, loading }) => {
    if (loading) {
        return <h2>Loading...</h2>
    }
    return (
        <ListGroup className='mb-4'>
            {posts.map(post => (
                <ListGroup.Item key={post.id}>
                    {post.title}
                </ListGroup.Item>
            ))}
        </ListGroup>
    );
};

export default Posts;