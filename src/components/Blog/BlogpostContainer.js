import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import {BASE_URL} from  "../../constraints/index.js";
import Blogpost from './Blogpost'




function BlogpostContainer() {
    
    const [blogposts, setBlogposts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const {id} = useParams();


    // READ BLOGPOST
  
    useEffect(() => {
      setTimeout(() => {
      fetch(`${BASE_URL}blogposts`)
        .then(res => {
            if (!res.ok) {
                throw Error('could not fetch comments');
            }
            return res.json();
          })
        .then(json => {
            setBlogposts(json);
            setIsLoading(false);
            setError(null);
        })
        .catch(error => {
            console.log('Danger Will Robinson there is a prolem with your fetch request', error);
        })
      }, 1000);
    }, [id]);
  
    function populateBlogposts() {
      console.log(blogposts);
      return blogposts.map((blogpost, idx) => (
        <Blogpost blogpost={blogpost} updateBlogpost={updateBlogpost} deleteBlogpost={deleteBlogpost} key={blogpost.id} />
      ));
    }
  
    
  
    //  UPDATE BLOGPOST
         
    function updateBlogpost(blogpost) {
      fetch(BASE_URL + "blogposts/" + blogpost.id, {
          method: "PUT",
          body: JSON.stringify(blogpost),
          headers: {
         "Accept": "applicaton/json",
         "Content-Type": "application/json",
         },
      });
    
    const newBlogposts = blogposts.map ((nb) => {
      if (nb.id === blogpost.id) {
          nb = blogpost;
      }
      
      return nb;
  });
  setBlogposts(newBlogposts);
  
  
  }
  // DELETE BLOGPOST

  function deleteBlogpost(blogpost) {
    fetch(BASE_URL + "blogposts/" + blogpost.id, {
      method: "DELETE",
    });
    const newBlogposts = blogposts.filter((nb) => nb.id !== blogpost.id);
    setBlogposts(newBlogposts);
    alert('Your blogpost was Successfully deleted from our database! After clicking OK, create something new & try again!')
  }
      
      return (
          <div>
             { error && <div>{ error }</div> }
     { isLoading && <div>LOADING...</div> }
          <h2 className="blogposts-header">Blogs</h2>
        
         <p>Read some of our Bloggers thoughts or Post your own!</p>
        
         
          <div className="blogpost-container">{blogposts && populateBlogposts()}</div>
          
        </div>
      );
  }


export default BlogpostContainer;