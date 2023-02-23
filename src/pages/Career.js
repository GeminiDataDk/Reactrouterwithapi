import { Grid } from "@mui/material";
import { useEffect, } from "react";
import axios from "axios";


function Career() {
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/todos')
        .then((res)=>{console.log("Getting Data",res.data)})
        .catch((err)=>{console.log(err.data)});
          
        }, [])
    
     useEffect(() => {
            axios.post('https://jsonplaceholder.typicode.com/todos',{
                        
                          userId:'Ahsan',
                          title: 'DKCoder',
                          completed: false
            })
            .then((res)=>{console.log("Posting Data",res)})
            .catch((err)=>{console.log(err.data)});
              
            }, [])

    useEffect(() => {
                axios.put('https://jsonplaceholder.typicode.com/todos/3',{ userId: 'Ali', title: 'StreetBoy', completed: true})
                .then((res)=>{console.log("Putting Data",res)})
                .catch((err)=>{console.log(err.data)});
                  
                }, [])

    useEffect(() => {
                axios.delete('https://jsonplaceholder.typicode.com/todos/4')
                .then((res)=>{console.log("Deleting Data",res)})
                .catch((err)=>{console.log(err.data)});
                  
                }, [])
  return (
    <>
      <Grid container justifyContent={"center"}>
        <Grid>
          <h1>Career</h1>
          <p>This is a career page</p>
        </Grid>
      </Grid>
    </>
  );
}

export default Career;