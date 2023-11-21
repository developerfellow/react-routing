import React, { Component } from 'react';
import axios from 'axios';
 import { Route,Link,NavLink } from 'react-router-dom';
 import Posts from '../Posts/Posts';
 import NewPost from '../../components/NewPost/NewPost';
 import FullPost from '../../components/FullPost/FullPost';
import './Blog.css';

class Blog extends Component {

    render () {
      
        return (
            <div className='Blog'>
                <header>
                    <nav>
                        <ul>
                            <li><NavLink 
                            exact 
                            activeClassName="my-active"
                            
                            to="/">Home</NavLink></li>
                             <li>
                                <NavLink  activeClassName="my-active" to={{
                                    pathname:'/new-post',
                                    hash:'#submit',
                                    search:'?quick-submit=true'
                                }}>New Post</NavLink>
                             </li>
                        </ul>
                    </nav>
                </header>
             {/*    <Posts /> */}
            
              <Route exact path="/" component={Posts} />
             <Route path="/new-post" component={NewPost} />
             <Route path="/post/:id" component={FullPost} />
             
            
             
          
                {/*<section>
                    <FullPost id={this.state.selctedPostId} />
                </section>
                <section>
                    <NewPost />
                </section> */}
            </div>
        );
    }
}

export default Blog;