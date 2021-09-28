import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import LinkButton from './Button';
import Snoker from "../images/snoker.jpg"
export default function MainCard() {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={Snoker}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom align="center" variant="h5" component="div">
                        משחק הרולטה
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <h3>איך משחקים-</h3>
                        <ul>
                            <li>בוחרים כמות משתתפים</li>
                            <li>מגרילים מספרים</li>
                        </ul>
                        <h3>הוראות-</h3>
                        <p> כל משתתף מקבל 3  כדורים רק המגריל יודע את מספר הכדורים שלו </p>
                        <p> מטרתו היא להכניס את הכדורים של היריבים שלו מבלי שיכנסו כל הכדורים שלו </p>
                        <p>   מי שהצליח לעשות זאת ניצח  </p>
                    </Typography>
                </CardContent>
            </CardActionArea>
            <LinkButton route="/FormInput" text="להתחלת משחק!"></LinkButton>
        </Card>

    );
}
