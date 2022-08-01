import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function ProfileCard(props) {
  return (
    <div id="app" className="App">
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="280"
          image="https://pbs.twimg.com/profile_images/1529881217964834819/fevy6a_v.jpg"
          alt="green iguana"
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.firstName} {props.lastName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Enrolled: {props.classEnrolled}
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
    </div>
  );
}

export default ProfileCard;