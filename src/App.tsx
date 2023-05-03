import React, { useState } from "react";
import "./app.css";
import {
  Box,
  Button,
  Grid,
  InputAdornment,
  InputLabel,
  Paper,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { BiDollar } from "react-icons/bi";
import { MdPersonOutline } from "react-icons/md";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
function App() {
  const [tip, setTip] = useState("5");
  // const [tipAmount, setTipAmount] = useState<number>(0);

  const buttonStyle = {
    marginRight: 2,
    marginTop: 1,
    height: "50px",
    width: "8rem",
    fontFamily: "Space Mono",
    fontSize: 24,
    color: "hsl(189, 41%, 97%)",
    bgcolor: "hsl(183, 100%, 15%)",
    "&:hover": {
      bgcolor: "hsl(185, 41%, 84%)",
      cursor: "pointer",
    },
  };

  const reset = () => {
    setValue("billInput", undefined);
    setValue("customTip", undefined);
    setValue("peopleInput", undefined);
    setTip("0");
  };
  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newTip: string
  ) => {
    setTip(newTip);
  };
  const {
    register,
    getValues,
    setValue,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  });

  // useEffect(() => calculateTip);
  return (
    <div className="App">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Space+Mono&display=swap"
        rel="stylesheet"
      />
      <div className="Container">
        <Typography className="Title" variant="h3">
          SPLI <br /> TTER
        </Typography>
        <Box component={Paper} sx={{ borderRadius: 5, padding: 3 }}>
          <Grid container rowSpacing={4}>
            <Grid item container xs={12} md={6} rowSpacing={4}>
              <Grid item container xs={12} md={11}>
                <Grid item md={8} xs={7}>
                  <InputLabel
                    sx={{
                      marginBottom: 1,
                      fontFamily: "Space Mono",
                      color: "hsl(184, 14%, 56%)",
                      fontWeight: "bold",
                    }}
                    htmlFor="billInput"
                  >
                    Bill
                  </InputLabel>
                </Grid>
                <Grid item md={4} xs={5}>
                  <ErrorMessage
                    errors={errors}
                    name="billInput"
                    render={({ message }) => (
                      <p
                        style={{
                          padding: "0px",
                          margin: 0,
                          color: "#bf3228",
                          fontFamily: "Space Mono",
                        }}
                      >
                        {message}
                      </p>
                    )}
                  />
                </Grid>
                <TextField
                  id="billInput"
                  fullWidth
                  size="small"
                  color="success"
                  placeholder="0"
                  margin="dense"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <BiDollar />
                      </InputAdornment>
                    ),
                    sx: {
                      borderRadius: 2,
                      direction: "rtl",
                      color: "hsl(183, 100%, 15%)",
                      fontSize: 20,
                      fontWeight: "bold",
                      fontFamily: "Space Mono",
                      backgroundColor: "hsl(185, 41%, 84%)",
                    },
                  }}
                  {...register("billInput", {
                    required: "Can't be zero",
                    pattern: {
                      value:
                        /(^(\d|,)*\.?\d*[1-9]+\d*$)|(^[1-9]+(\d|,)*\.\d*$)|(^[1-9]+(\d|,)*\d*$)/,
                      message: "Can't be zero",
                    },
                  })}
                  error={!!errors.billInput}
                />
              </Grid>
              <Grid item md={12} xs={12} />
              <Grid
                container
                rowSpacing={4}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <InputLabel
                  htmlFor="tip-selector"
                  sx={{
                    marginTop: 3,
                    marginBottom: 1,
                    fontFamily: "Space Mono",
                    color: "hsl(184, 14%, 56%)",
                    fontWeight: "bold",
                  }}
                >
                  Select Tip %
                </InputLabel>
                <ToggleButtonGroup
                  id="tip-selector"
                  value={tip}
                  exclusive
                  onChange={handleChange}
                  aria-label="Platform"
                  sx={{
                    display: "inline-block",
                  }}
                >
                  <ToggleButton sx={buttonStyle} value="5">
                    5%
                  </ToggleButton>
                  <ToggleButton sx={buttonStyle} value="10">
                    10%
                  </ToggleButton>
                  <ToggleButton sx={buttonStyle} value="15">
                    15%
                  </ToggleButton>

                  <ToggleButton sx={buttonStyle} value="25">
                    25%
                  </ToggleButton>
                  <ToggleButton sx={buttonStyle} value="50">
                    50%
                  </ToggleButton>
                  <ToggleButton
                    value=" "
                    sx={{ position: "relative", height: "50px", width: "8rem" }}
                    hidden
                  >
                    <TextField
                      id="customTip"
                      placeholder="Custom"
                      InputProps={{
                        sx: {
                          color: "hsl(186, 14%, 43%)",
                          height: "50px",
                          width: "8rem",
                          fontSize: 24,
                          fontWeight: "bold",
                          fontFamily: "Space Mono",
                          direction: "rtl",
                        },
                      }}
                      sx={{
                        zIndex: 9,
                        position: "absolute",
                        left: 1,
                        marginRight: 2,
                        marginTop: 1,
                        bgcolor: "hsl(189, 41%, 97%)",
                      }}
                      {...register("customTip", {
                        pattern: {
                          value: /^[1-9]+[0-9]*$/,
                          message: "Can't be zero ",
                        },
                      })}
                      error={!!errors.customTip}
                    />
                  </ToggleButton>
                </ToggleButtonGroup>
              </Grid>

              <Grid item container md={11} xs={12}>
                <Grid item md={8} xs={7}>
                  <InputLabel
                    sx={{
                      marginBottom: 1,
                      fontFamily: "Space Mono",
                      color: "hsl(184, 14%, 56%)",
                      fontWeight: "bold",
                    }}
                    htmlFor="peopleInput"
                  >
                    Number of People
                  </InputLabel>
                </Grid>
                <Grid item md={4} xs={5}>
                  <ErrorMessage
                    errors={errors}
                    name="peopleInput"
                    render={({ message }) => (
                      <p
                        style={{
                          padding: "0px",
                          margin: 0,
                          color: "#bf3228",
                          fontFamily: "Space Mono",
                        }}
                      >
                        {message}
                      </p>
                    )}
                  />
                </Grid>

                <TextField
                  id="peopleInput"
                  fullWidth
                  size="small"
                  color="success"
                  placeholder="0"
                  margin="dense"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <MdPersonOutline />
                      </InputAdornment>
                    ),
                    sx: {
                      borderRadius: 2,
                      direction: "rtl",
                      color: "hsl(183, 100%, 15%)",
                      fontSize: 20,
                      fontWeight: "bold",
                      fontFamily: "Space Mono",
                      backgroundColor: "hsl(185, 41%, 84%)",
                    },
                  }}
                  {...register("peopleInput", {
                    required: "Can't be zero",
                    pattern: {
                      value: /^[1-9]+[0-9]*$/,
                      message: "Can't be zero ",
                    },
                  })}
                />
              </Grid>
            </Grid>
            <Grid item md={6} xs={12}>
              <Box
                component={Paper}
                height={"100%"}
                sx={{
                  bgcolor: "hsl(183, 100%, 15%)",
                  borderRadius: 5,
                  marginBottom: 1,
                }}
              >
                <Grid container>
                  <Grid item md={6} xs={6}>
                    <p className="amount">Tip Amount</p>
                    <p className="per">/ person</p>
                  </Grid>
                  <Grid item md={6} xs={6}>
                    <p className="price">
                      $
                      {getValues("peopleInput") > 0
                        ? !isNaN(parseInt(tip))
                          ? (
                              (getValues("billInput") /
                                getValues("peopleInput")) *
                              (parseInt(tip) / 100)
                            ).toFixed(2)
                          : (
                              (getValues("billInput") /
                                getValues("peopleInput")) *
                              (getValues("customTip") / 100)
                            ).toFixed(2)
                        : 0}
                    </p>
                  </Grid>
                  <Grid item md={6} xs={6}>
                    <p className="amount">Total</p>
                    <p className="per">/ person</p>
                  </Grid>
                  <Grid item md={6} xs={6}>
                    <p className="price">
                      $
                      {getValues("peopleInput") > 0
                        ? !isNaN(parseInt(tip))
                          ? (
                              (getValues("billInput") /
                                getValues("peopleInput")) *
                                (parseInt(tip) / 100) +
                              getValues("billInput") / getValues("peopleInput")
                            ).toFixed(2)
                          : (
                              (getValues("billInput") /
                                getValues("peopleInput")) *
                                (getValues("customTip") / 100) +
                              getValues("billInput") / getValues("peopleInput")
                            ).toFixed(2)
                        : 0}
                    </p>
                  </Grid>
                  <Grid item md={12} xs={12}>
                    <Button
                      // disabled={!isValid}
                      sx={buttonStyles}
                      onClick={reset}
                    >
                      RESET
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
            <Grid container md={12}></Grid>
          </Grid>
          <>{console.log(getValues("customTip"))}</>
        </Box>
      </div>
    </div>
  );
}

const buttonStyles = {
  marginTop: "10%",
  bgcolor: "hsl(172, 67%, 45%)",
  width: "90%",
  marginLeft: "5%",
  color: "hsl(183, 100%, 15%)",
  fontFamily: "Space Mono",
  fontSize: "24px",
  fontWeight: "bolder",
  "&:hover": {
    bgcolor: "hsl(186, 14%, 43%)",
  },
};

export default App;
