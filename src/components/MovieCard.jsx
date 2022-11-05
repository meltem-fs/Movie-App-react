import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useState } from "react";

export default function MediaCard({ movie }) {
  const [isShown, setIsShown] = useState(100);
  console.log("movie :>> ", movie);
  return (
    <Card
      sx={{ minWidth: 320, minHeight: 400, position: "relative" }}
      onMouseEnter={() => setIsShown(0)}
      onMouseLeave={() => setIsShown(100)}
    >
      <CardMedia
        sx={{ maxWidth: "320px", height: "100%", objectFit: "cover" }}
        component="img"
        image={`https://image.tmdb.org/t/p/w1280${movie.poster_path}`}
        alt={movie.title}
      />
      <div
        style={{
          position: "absolute",
          top: "0",
          left: `${isShown}%`,
          backgroundColor: "rgba(0,0,0,.5)",
          height: "100%",
        }}
      >
        <Typography
          style={{
            fontSize: "2rem",
            fontWeight: "900",
            color: "yellow",
            whiteSpace: "nowrap",
          }}
        >
          {movie.title}
        </Typography>
        <Typography
        variant="body1"
          style={{
            color:"white",
            whiteSpace:"pre-wrap"
          }}
        >
          {movie.overview}
        </Typography>

        <Typography
        variant="h3"
        sx={{
          color:"white",
          position:"absolute",
          bottom:"1rem",
          right:"1rem"
        }}
        >
           {movie.vote_average}
        </Typography>

       
      </div>
      {/* {isShown && (
        
      )} */}
    </Card>
  );
}
