import React from "react";
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  Typography,
} from "@mui/material";
import { apiurl } from "../../common/constatnt";

interface Props {
  post: string;
  author: string;
  image: string;
  id: string;
}

const PostItem = ({ post, author, image, id }: Props) => {
  let cardImage = "";

  if (image) {
    if (image) {
      cardImage = `${apiurl}/uploads/${image}`;
    }
  }

  return (
    <Grid item xs={12} sm={12} md={6} lg={4}>
      <Card sx={{ maxWidth: 655, backgroundColor: '#22272b'}}>
        <CardActionArea>
        <Typography sx={{color: 'white'}}  variant="body2">
              Author {author}
            </Typography>
          <CardContent>
            <Typography sx={{color: 'white'}} variant="body2">
              {post}
            </Typography>
            <CardMedia component="img" height="100%" image={cardImage} />
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default PostItem;
