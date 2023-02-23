import { Grid } from "@mui/material";
import { useEffect, } from "react";
import axios from "axios";

function Blog() {

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/photos')
        .then((res)=>{console.log("Getting Data",res.data)})
        .catch((err)=>{console.log(err.data)});
          
        }, [])
    
     useEffect(() => {
            axios.post('https://jsonplaceholder.typicode.com/photos',{
                        
                          albumId:'Daniyal',
                          id: 23,
                          title: 'DKCoder',
                          url:'https://images.unsplash.com/photo-1677056781459-4f85f82df5fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
            })
            .then((res)=>{console.log("Posting Data",res)})
            .catch((err)=>{console.log(err.data)});
              
            }, [])

    useEffect(() => {
                axios.put('https://jsonplaceholder.typicode.com/photos/3',{ albumId: 'Ali', id: 10, title: 'StreetBoy'})
                .then((res)=>{console.log("Putting Data",res)})
                .catch((err)=>{console.log(err.data)});
                  
                }, [])

    useEffect(() => {
                axios.delete('https://jsonplaceholder.typicode.com/photos/4')
                .then((res)=>{console.log("Deleting Data",res)})
                .catch((err)=>{console.log(err.data)});
                  
                }, [])

                
  return (
    <>
      <Grid container justifyContent={"center"}>
        <Grid>
          <h1>Blog</h1>
          <p>This is Blog page</p>
        </Grid>
      </Grid>
    </>
  );
}

export default Blog;