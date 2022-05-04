import { Button, FormControlLabel, Paper, Radio, RadioGroup, TextField, Typography } from "@mui/material";
import { useState } from "react"
import { useNavigate } from "react-router-dom";

const Signup = ()=>{
    const [input,setInput] = useState('');
    const naviagte = useNavigate();
    const [name, setName] = useState('');
    const [gender, setgender] = useState('')

    const handelSubmit = (e:any)=>{
        console.log(input);
        e.preventDefault();
        naviagte('/quiz',{state:input})
    }

    return(
        <>
        <Paper elevation={12} sx={{width:'30vw',ml:'35vw',mt:3,p:2,backgroundColor:'blanchedalmond'}}>
            <form action="" onSubmit={handelSubmit}>
                <Typography variant="h4" sx={{textAlign:'center',m:3}}>Signup</Typography>

                <TextField placeholder="enter your name" value={name} onChange={(e:any)=>setName(e.target.value)}/>
                <Typography sx={{mt:2,mb:1}}>Select gender</Typography>
                <RadioGroup  row sx={{m:2}} onClick={(e:any)=>setgender(e.target.value)}>
                    <FormControlLabel data-testid='gender1' control={<Radio/>} label='male' value='male'/>
                    <FormControlLabel data-testid='gender2' control={<Radio/>} label='female' value='female'/>
                    <FormControlLabel data-testid='gender3' control={<Radio/>} label='other' value='other'/>
                </RadioGroup>
                <Typography sx={{mt:2,mb:1}} variant='h6'>Select language</Typography>
                <RadioGroup onClick={(e:any)=>setInput(e.target.value)} sx={{m:2}}>
                    <FormControlLabel data-testid='english' control={<Radio/>} label='english' value='english'/>
                    <FormControlLabel data-testid='hindi' control={<Radio/>} label='hindi' value='hindi'/>
                   
                </RadioGroup>
                <Typography sx={{textAlign:'center'}}>
                    <Button disabled={!input || !gender || !name} variant='contained' type='submit'>Start Test</Button>
                </Typography>
            </form>
        </Paper>
        </>
    )
}
export default Signup