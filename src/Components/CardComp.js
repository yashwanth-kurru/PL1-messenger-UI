import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';

const CardComp = ({ data, handleDelete }) => {

    return (
        <Card sx={{ maxWidth: 400 }}>
            <CardHeader
                action={
                    <IconButton onClick={() => handleDelete(data.id)}>
                        <DeleteIcon color="primary" />
                    </IconButton>
                }
                title={data.title}
                subheader={data.category}
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {data.details}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default CardComp;
