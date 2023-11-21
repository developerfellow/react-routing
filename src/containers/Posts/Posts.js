/* import React, { Component } from 'react'
import axios from 'axios';
import Post from '../../components/Post/Post';
 class Posts extends Component {
    constructor(props) {
      super(props)
      this.state = {
        posts:[],
        selctedPostId:null
     }
      
    
    
    }
    postClickHandler = (id) => {
        this.setState({selctedPostId:id})
      }
      componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
         .then(response => this.setState({posts:response.data.slice(0,3)}) )
         .catch(err => console.log(err.message));
    }
    
  render() {
    const postData = this.state.posts.map(
        (post) => {
            return (
                <Post 
                key={post.id} 
                title={post.title} 
                click={() => this.postClickHandler(post.id)}
                />  
            )
        }
    )
    return (
        <section className="Posts">
                    {postData}
                </section>
    )
  }
}

export default Posts
 */

import React,{useState,useEffect} from 'react';
import Post from '../../components/Post/Post';
import axios from 'axios';
import {Link} from 'react-router-dom';
import './Posts.css';
function Posts() {
    const [posts,setPosts] = useState([]);
    const [selectPostId,setSelectedPost] = useState(null);
    const  postClickHandler = (id) => {
       // this.setState({selctedPostId:id})
       alert(id);
       setSelectedPost(id);
      }
     useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => setPosts(...posts,response.data.slice(0,3)))
        .catch(err => console.log(err.message));
     },[]);

     const postData = posts.map(
        (post) => {
            return (
              <Link key={post.id}  to={{pathname:`/post/${post.id}`}}>
                    <Post 
                title={post.title} 
                /* click={() => postClickHandler(post.id)} */
                />
              </Link>
            )
        }
     )


  return (
    <section className="Posts">
                    {postData}
                </section>
  )
}

export default Posts;
