import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import GroupIcon from "@mui/icons-material/Group";
import CommentIcon from "@mui/icons-material/Comment";
import AttachmentIcon from "@mui/icons-material/Attachment";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

function CardItem() {
  return (
    <>
     <Card
          sx={{
            cursor: "pointer",
            boxShadow: "0 1px 1px rgba(0,0,0,0.2)",
            overflow: "unset",
          }}
        >
          <CardMedia
            sx={{ height: 140 }}
            image="https://img.pikbest.com/origin/09/41/85/916pIkbEsTzRC.jpg!bwr800"
            title="green iguana"
          />
          <CardContent sx={{ p: 1.5, "&:last-child": { p: 1.5 } }}>
            <Typography>Lizard</Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions sx={{ p: "0px 4px 8px 4px" }}>
            <Button size="small" startIcon={<GroupIcon />}>
              20
            </Button>
            <Button size="small" startIcon={<CommentIcon />}>
              15
            </Button>
            <Button size="small" startIcon={<AttachmentIcon />}>
              10
            </Button>
          </CardActions>
        </Card>
    </>
  )
}

export default CardItem