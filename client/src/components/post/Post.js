import React, { Fragment, useEffect } from 'react'
import PropTypes from 'prop-types';
import Spinner from '../layout/Spinner';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import  PostItem  from '../posts/PostItem';
import { getPost } from '../../actions/post';
import CommentForm from './CommentForm';
import CommentItem from './CommentItem';


const Post = ({ getPost, post: { post, loading }, match }) => {
    useEffect(() => {
        getPost(match.params.id);
    }, [getPost, match.params.id]);

    return loading || post === null ? (
        <Spinner />
    ) : ( 
        <Fragment>
            <Link to='/posts' className='btn'>
                Back To posts
            </Link>
        <PostItem post={post} showActions={false} />
        <CommentForm  postId={post.id} />
        <div className="comments">
            {post.comment.map(comment => (
                <CommentItem key={comment.id} comment={comment} postId={post.id} />
            ))}
        </div>
        </Fragment>
    );
};
    
Post.propTypes = {
    getPost: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired
};

const mapStateToProps = state => ({ 
    post: state.post
});

export default connect(mapStateToProps, {getPost})(Post);
