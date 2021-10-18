import React from 'react'

export const Posts = ({ posts, loading }) => {
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
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Morbi leo risus</ListGroup.Item>
            <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
    )
}
