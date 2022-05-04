import { Paper, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"

const Result = ()=>{
    const data:any = useLocation().state;
    
    const rightAns = Array.from(data)?.filter((item:any)=>{
        return JSON.stringify(item.ans) === JSON.stringify(Array.from(item.userAns).sort())
    })

  const  score = rightAns.length;


    return(
        <>
        <Typography variant="h4" sx={{m:3,textAlign:'center',textDecoration:'underline'}}>RESULT</Typography>
        <Paper>
            <Paper sx={{float:'left',p:3}}>
                <Paper sx={{width:'20vw',p:2,textAlign:'center', backgroundColor:'lightcyan'}}>
                    <Typography>
                        Total Score is <b>{score}/5</b>
                    </Typography>
                    <Typography>
                        Total percentage is <b>{((score*100)/5).toFixed(2)}%</b>
                    </Typography>
                </Paper>
                <Paper sx={{mt:3,ml:2,backgroundColor:'whitesmoke',p:2}}>
                    {Array.from(data)?.map((item:any,idx:any)=>{
                        return (
                            item.type !== 'multi'?
                            <>
                            <Typography variant="h6">
                                Q{item.id}. {item.que}
                            </Typography>
                            <Typography sx={{backgroundColor:'lightgreen',m:1,p:1}}>
                                Correct Answer is --- {[...item.ans]}
                            </Typography>
                            <Typography sx={{backgroundColor:'lightyellow',m:1,p:1}}>
                                Your Answer is --- {[...item.userAns]}
                            </Typography>
                            </>
                            :
                            <>
                             <Typography variant="h6">
                                Q{item.id}. {item.que}
                            </Typography>
                            <Typography sx={{backgroundColor:'lightgreen',m:1,p:1}}>
                                Correct Answer is --- {item.ans[0]} , {item.ans[1]}
                            </Typography>
                            <Typography sx={{backgroundColor:'lightyellow',m:1,p:1}}>
                                Your Answer is --- {item.userAns[0]} ,  {item.userAns[1]} 
                            </Typography>
                            </>
                        )
                    })}
                </Paper>

            </Paper>
            
            <Paper sx={{float:'right',p:3,mr:20,mt:5}}>
                <div data-testid='piechart' style={{
                    width:'20rem',
                    height:'20rem',
                    borderRadius:'50%',
                    position:'sticky',
                    top:'10px',
                    backgroundImage:`conic-gradient(green 0deg, green ${score * 75}deg, red ${score * 75}deg, red 360deg)`
                }}>
                    <Typography variant="h4" sx={{color:'white',textAlign:'right',mr:'2rem',pt:20,pr:1}}>
                    <b>{((score*100)/5).toFixed(2)}%</b>
                    </Typography>
                </div>
            </Paper>
        </Paper>
        </>
    )
}

export default Result