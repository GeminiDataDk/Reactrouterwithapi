import { Grid } from "@mui/material";
import { useEffect, } from "react";
import axios from "axios";

function Contact() {
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((res)=>{console.log("Getting Data",res.data)})
        .catch((err)=>{console.log(err.data)});
          
        }, [])
    
     useEffect(() => {
            axios.post('https://jsonplaceholder.typicode.com/users',{
                        
                          name:'Daniyal',
                          username: 'DKCoder',
                          email: 'daniyal_khan91@yahoo.com'
            })
            .then((res)=>{console.log("Posting Data",res)})
            .catch((err)=>{console.log(err.data)});
              
            }, [])

    useEffect(() => {
                axios.put('https://jsonplaceholder.typicode.com/users/1',{ name: 'Daniyal'})
                .then((res)=>{console.log("Putting Data",res)})
                .catch((err)=>{console.log(err.data)});
                  
                }, [])

    useEffect(() => {
                axios.delete('https://jsonplaceholder.typicode.com/users/4')
                .then((res)=>{console.log("Deleting Data",res)})
                .catch((err)=>{console.log(err.data)});
                  
                }, [])

  return (
    <>
      <Grid container justifyContent={"center"}>
        <Grid>
          <h1>Contact</h1>
          <p>This is Contact page</p>
        </Grid>
      </Grid>
    </>
  );
}

export default Contact;