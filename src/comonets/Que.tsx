import { ArrowBack, ArrowForward } from "@mui/icons-material";
import {
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Paper,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { questions } from "../questions";

const Que = () => {
  const language = useLocation().state;
  const [data, setData]: any = useState();
  const [page, setPage] = useState(0);
  const [input, setInput] = useState("");
  const [count, setCont] = useState(0)

  const navigate = useNavigate();

  const fetchData = () => {
    if (language === "english") {
      setData(questions);
    } else {
      setData(questions);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handelInput = (e: any) => {
    console.log(e.target.value);
    setCont((p:any)=>p+1)
    data[page].isAnsd = true;
    setInput(e.target.value);
    data[page].userAns.splice(0,1)
    data[page].userAns.push(e.target.value);
    console.log(data[page]);
  };

  const handelArr = (e: any) => {
    data[page].isAnsd = true;
    if (e.target.value !== undefined) {
      setCont((p:any)=>p+1)
      if (data[page].userAns.length < 2) {
        data[page].userAns.push(e.target.value);
      } else {
        data[page].userAns.splice(0, 1);
        data[page].userAns.push(e.target.value);
      }
    }
    console.log(data[page]);
  };

  const displayOpt = () => {
    switch (data[page]?.type) {
      case "mcq":
        return (
          <>
            {data[page]?.opt.map((item: any, idx: any) => {
              return (
                <RadioGroup
                  key={idx}
                  onClick={handelInput}
                  // defaultValue={data[page]?.userAns}
                >
                  <FormControlLabel
                    data-testid={`mcq-${idx}`}
                    control={<Radio checked={data[page]?.userAns.includes(item)} />}
                    value={item}
                    label={item}
                  />
                </RadioGroup>
              );
            })}
          </>
        );
      case "fill":
        return (
          <>
            <TextField
              data-testid="fill"
              value={data[page]?.userAns}
              placeholder="enter your answer here"
              onChange={handelInput}
            />
          </>
        );
      case "bool":
        return (
          <>
            {data[page]?.opt.map((item: any, idx: any) => {
              return (
                <RadioGroup
                  key={idx}
                  onClick={handelInput}
                  // defaultValue={data[page]?.userAns}
                >
                  <FormControlLabel
                    data-testid={`bool-${idx}`}
                    control={<Radio checked={data[page]?.userAns.includes(item)}/>}
                    value={item}
                    label={item}
                  />
                </RadioGroup>
              );
            })}
          </>
        );
      case "match":
        return (
          <>
            <Grid>
              <Grid item>
                {data[page]?.match.map((item: any, idx: any) => {
                  return <Typography sx={{ m: 2 }}>{item}</Typography>;
                })}
              </Grid>
              <Grid item>
                {data[page]?.opt.map((item: any, idx: any) => {
                  return (
                    <RadioGroup
                      key={idx}
                      onClick={handelInput}
                      // defaultValue={data[page]?.userAns}
                    >
                      <FormControlLabel
                        data-testid={`match-${idx}`}
                        control={
                          <Radio checked={data[page]?.userAns.includes(item)} />
                        }
                        value={item}
                        label={item}
                      />
                    </RadioGroup>
                  );
                })}
              </Grid>
            </Grid>
          </>
        );
      case "multi":
        return (
          <>
            {data[page]?.opt.map((item: any, idx: any) => {
              return (
                <RadioGroup
                  key={idx}
                  onClick={handelArr}
                  // defaultValue={data[page]?.userAns}
                >
                  <FormControlLabel
                    data-testid={`multi-${idx}`}
                    control={
                      <Checkbox
                      //  checked={data[page]?.userAns.includes(item)}
                      />
                    }
                    value={item}
                    label={item}
                  />
                </RadioGroup>
              );
            })}
          </>
        );
    }
  };

  return (
    <>
      {data ? (
        <>
          <Typography sx={{ textAlign: "center", mb: 3 }}>
            {data?.map((item: any, idx: any) => {
              return (
                <Button
                  key={idx}
                  data-testid={`btn-${idx}`}
                  variant="outlined"
                  style={
                    item.isAnsd
                      ? { backgroundColor: "red", color: "white" }
                      : { backgroundColor: "gray", color: "white" }
                  }
                  sx={{ m: 2 }}
                  onClick={(e: any) => setPage(Number(e.target.innerText) - 1)}
                >
                  {item.id}
                </Button>
              );
            })}
          </Typography>
          <Paper
            elevation={16}
            sx={{ width: "30vw", ml: "32vw", mt: 4, mb: 4, p: 3 }}
          >
            <Typography variant="h6" sx={{ m: 1 }}>
              Q{data[page]?.id}. {data[page]?.que}
            </Typography>
            {displayOpt()}
          </Paper>

          <Grid container sx={{ mt: 4, ml: 3, mr: 3 }}>
            <Grid item xs={1}>
              <Button
                data-testid="back"
                variant="outlined"
                disabled={data[page]?.id <= 1}
                onClick={() => setPage((p: any) => p - 1)}
              >
                <ArrowBack />
              </Button>
            </Grid>
            <Grid item xs={8}></Grid>
            <Grid item xs={1}>
              <Button
                data-testid="submit"
                variant="outlined"
                sx={count<6 ? {display:'none'}:{display:'flex'}}
                onClick={() => navigate("/result", { state: data })}
              >
                Submit
              </Button>
            </Grid>
            <Grid item xs={1}>
              <Button
                data-testid="frd"
                variant="outlined"
                disabled={data[page]?.id >= data?.length}
                onClick={() => setPage((p: any) => p + 1)}
              >
                <ArrowForward />
              </Button>
            </Grid>
          </Grid>
        </>
      ) : null}
    </>
  );
};

export default Que;
