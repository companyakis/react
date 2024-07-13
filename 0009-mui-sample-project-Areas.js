import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

function Areas({ areaName, areaDesciption, areaPicture }) {
  return (
    <Card>
      <CardMedia component="img" height="160" image={areaPicture}></CardMedia>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {areaName}
        </Typography>
        <Typography  variant="body2" color="text.secondary">
          {areaDesciption}
        </Typography>
      </CardContent>
    </Card>

  );
}

export default Areas;

