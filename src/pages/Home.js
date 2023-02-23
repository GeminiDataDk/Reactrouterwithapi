import { Grid } from "@mui/material";
import { useEffect, } from "react";
import axios from "axios";

function Home() {

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((res)=>{console.log("Getting Data",res.data)})
        .catch((err)=>{console.log(err.data)});
          
        }, [])

        useEffect(() => {
            axios.post('https://jsonplaceholder.typicode.com/posts',{
                        
                          body:'Custom Body',
                          title: 'ABH',
                          userId: 1
            })
            .then((res)=>{console.log("Posting Data",res)})
            .catch((err)=>{console.log(err.data)});
              
            }, [])

         useEffect(() => {
                axios.put('https://jsonplaceholder.typicode.com/posts/1',{ body: "Custom Body"})
                .then((res)=>{console.log("Putting Data",res)})
                .catch((err)=>{console.log(err.data)});
                  
                }, [])

        useEffect(() => {
                axios.delete('https://jsonplaceholder.typicode.com/posts/4')
                .then((res)=>{console.log("Deleting Data",res)})
                .catch((err)=>{console.log(err.data)});
                  
                }, [])

        

  return (
    <>
      <Grid container justifyContent={"center"}>
        <Grid>
          <h1>Home</h1>
          <p>This is Home page</p>
        </Grid>
      </Grid>
    </>
    
  );
}

export default Home;