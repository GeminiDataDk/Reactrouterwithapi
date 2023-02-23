import { Grid } from "@mui/material";
import { useEffect, } from "react";
import axios from "axios";

function About() {
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/albums')
        .then((res)=>{console.log("Getting Data",res.data)})
        .catch((err)=>{console.log(err.data)});
          
        }, [])
    
     useEffect(() => {
            axios.post('https://jsonplaceholder.typicode.com/albums',{
                        
                          userId:'Daniyal',
                          id: '1',
                          title: 'DKCoder'
            })
            .then((res)=>{console.log("Posting Data",res)})
            .catch((err)=>{console.log(err.data)});
              
            }, [])

    useEffect(() => {
                axios.put('https://jsonplaceholder.typicode.com/albums/1',{ userID: 'Ali'})
                .then((res)=>{console.log("Putting Data",res)})
                .catch((err)=>{console.log(err.data)});
                  
                }, [])

    useEffect(() => {
                axios.delete('https://jsonplaceholder.typicode.com/albums/4')
                .then((res)=>{console.log("Deleting Data",res)})
                .catch((err)=>{console.log(err.data)});
                  
                }, [])
  return (
    <>
      <Grid container justifyContent={"center"}>
        <Grid>
          <h1>About</h1>
          <p>This is About page</p>
        </Grid>
      </Grid>
    </>
  );
}

export default About;