import React from "react";
import axios from "axios";
class Get extends React.Component{
    constructor(){
        super();

        this.state ={
            posts: [],
            error: ''
        }
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then( Response => {
            console.log(Response)
            this.setState({posts: Response.data})
         })
        .catch(error =>{
            console.log(error)
            this.setState({errorMsg:'Error in Retriving the data' })
        })
    }
    render(){
        const {posts,errorMsg} = this.state
        return<div>To get data from the server
            {
                posts.length?
                posts.map(post => <div key ={post.id}>{post.userId} {post.title}</div>):null
            }
            {
                errorMsg?
                <div>{errorMsg}</div>:null
            }
        </div>

    }
}
export default Get;