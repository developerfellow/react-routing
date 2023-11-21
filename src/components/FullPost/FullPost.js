import React, { Component } from 'react';
import axios from 'axios';
import './FullPost.css';

class FullPost extends Component {
     constructor(props) {
       super(props)
     
       this.state = {
          loadedPost:null,
          flag:false
       }
     }
     
/*      componentDidUpdate(){
        console.log(this.props);
        if(this.props.id){
            if(!this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id!==this.props.id)){
                axios.get(`https://jsonplaceholder.typicode.com/posts/${this.props.id}`)
                .then(response => this.setState({loadedPost:response.data}))
                .catch(err => this.setState({flag:true}));
            }
         
        }
     } */
     componentDidMount(){
        console.log(this.props);
        
        if(this.props.match.params.id){
                axios.get(`https://jsonplaceholder.typicode.com/posts/${this.props.match.params.id}`)
                .then(response => this.setState({loadedPost:response.data}))
                .catch(err => this.setState({flag:true}));
            
         
        }
     }
    render () {
          if(this.state.flag){
            return(<h1 style={{textAlign:'center'}}>Something Went Wrong Please try again later</h1>);
          }
        let post = <p style={{textAlign:'center'}}>Please select a Post!</p>;
        if(this.props.match.params.id){
            post = <p style={{textAlign:'center'}}>Loading!!</p>;
        }
          if(this.state.loadedPost){
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <div className="Edit">
                        <button className="Delete">Delete</button>
                    </div>
                </div>
    
            );
        }
       
        return post;
    }
}

export default FullPost;