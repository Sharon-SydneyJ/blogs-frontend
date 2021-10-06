import React from 'react';
import { useEffect, useState } from 'react';
import {BASE_URL} from  "../../constraints/index.js";
import Blogpost from './Blogpost'
import BlogpostForm from './BlogpostForm.js';



function BlogpostContainer() {
    const [blogposts, setBlogposts] = useState([]);


    // READ
  
    useEffect(() => {
      fetch(BASE_URL + "blogposts")
        .then(res => {
            if (!res.ok) {
                throw Error('could not fetch blogposts');
            }
            return res.json();
          })
        .then(json => {
            setBlogposts(json);
        })
        .catch(error => {
            console.error('Danger Will Robinson there is a prolem with your fetch request', error);
        })
    }, []);
  
    function populateBlogposts() {
      console.log(blogposts);
      return blogposts.map((blogpost, idx) => (
        <Blogpost blogpost={blogpost} updateBlogpost={updateBlogpost} deleteBlogpost={deleteBlogpost} key={blogpost.id} />
      ));
    }
  
    // CREATE
  
    function createBlogpost(blogpost) {
      fetch(BASE_URL + "blogposts", {
        method: "POST",
        body: JSON.stringify(blogpost),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((json) => setBlogposts([...blogposts, json]));
  
    }
  
    //  UPDATE
         
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
  
  function deleteBlogpost(blogpost) {
    fetch(BASE_URL + "blogposts/" + blogpost.id, {
      method: "DELETE",
    });
    const newBlogposts = blogposts.filter((nb) => nb.id !== blogpost.id);
    setBlogposts(newBlogposts);
  }
      
      return (
          <div>
          <h2 className="blogposts-header">Blogs</h2>
        
         <p>Read some of our Bloggers thoughts or Post your own!</p>
        
          <div className="blogpostForm">
  
          <BlogpostForm createUser={createBlogpost} />
          </div>
          <div className="blogpost-container">{blogposts && populateBlogposts()}</div>
          
        </div>
      );
  }


export default BlogpostContainer;