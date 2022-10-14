import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const WeatherData: React.FC = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "left",
    color: theme.palette.text.secondary,
  }));
  const TopSection = styled(Box)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "left",
    color: theme.palette.text.secondary,
  }));
  const Wrapper = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  }));

  return (
    <Box sx={{ width: "100%" }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <TopSection>
            <Typography variant="body1" gutterBottom>
              Today's forcast for :
            </Typography>
            <Wrapper>
              <Box>
                <Typography variant="body1" gutterBottom>
                  Current Temperature
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Weather Condition
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Highest and lowest temperature
                </Typography>
              </Box>
              <Box>weather icon goes here</Box>
            </Wrapper>
          </TopSection>
          <TopSection>
            <Typography variant="body1" gutterBottom>
              Weekly Forecast for :
            </Typography>
            <Box>
              <Box>
                <Typography variant="body1" gutterBottom>
                  Current Temperature
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Weather Condition
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Highest and lowest temperature
                </Typography>
              </Box>
              <Box>weather icon goes here</Box>
            </Box>
          </TopSection>
        </Grid>
        <Grid item xs={6}>
          <Item>
            {" "}
            <Stack spacing={2} direction="row">
              <Button variant="contained">Clouds</Button>
              <Button variant="contained">Precipitation</Button>
              <Button variant="contained">Temp.</Button>
            </Stack>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default WeatherData;
