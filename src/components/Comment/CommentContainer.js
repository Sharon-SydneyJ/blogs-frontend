import React, { useEffect, useState } from 'react';
import { BASE_URL } from '../../constraints';
import { useParams } from 'react-router';
import Comment from './Comment';
import CommentForm from './CommentForm';

function CommentContainer() {
    
    const [comments, setComments] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);


    const { id } = useParams();

    // READ

  useEffect(() => {
    setTimeout(() => {
    fetch(`${BASE_URL}users/${id}/blogposts/${id}/comments`)
      .then(res => {
          if (!res.ok) {
              throw Error('could not fetch comments');
          }
          return res.json();
        })
      .then(json => {
          setComments(json);
          setIsLoading(false);
          setError(null);
      })
      .catch(error => {
          console.log('Danger Will Robinson there is a prolem with your fetch request', error);
      })
    }, 1000);
  }, [id]);

  function populateComments() {
    console.log(comments);
    return comments.map((comment, idx) => (
      <Comment comment={comment} key={comments.id} />
    ));
  }

  // CREATE

  function createComment(comment) {
    fetch(BASE_URL + `users/${id}/blogposts/${id}/comments`, {
      method: "POST",
      body: JSON.stringify(comment),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => setComments([...comments, json]));

  }

  //  UPDATE
       
  function updateComment(comment) {
    fetch(BASE_URL + `users/${id}/blogposts/${id}/comments` + id, {
        method: "PUT",
        body: JSON.stringify(comment),
        headers: {
       "Accept": "applicaton/json",
       "Content-Type": "application/json",
       },
    });
  
  const newComments = comments.map ((nc) => {
    if (nc.id === comment.id) {
        nc = comment;
    }
    
    return nc;
});
setComments(newComments);
}

function deleteComment(comment) {
  fetch(BASE_URL + `users/${id}/blogposts/${id}/comments` + comment.id, {
    method: "DELETE",
  });
  const newComments = comments.filter((nc) => nc.id !== comment.id);
  setComments(newComments);
}
    
    return (
        <div>
         { error && <div>{ error }</div> }
     { isLoading && <div>LOADING...</div> }
        <div className="commentForm">

        <CommentForm createComment={createComment} />
        </div>
        <div className="user-container">{comments && populateComments()}</div>
        
      </div>
    );
}

export default CommentContainer;