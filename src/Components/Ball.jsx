import * as React from 'react';
import Chip from '@mui/material/Chip';

export default function Ball(props) {
    const { ballValue } = props
    return (
        <div><Chip
            className=""

            label={`${ballValue}`}
            color="default"
        />
        </div>
    );
}