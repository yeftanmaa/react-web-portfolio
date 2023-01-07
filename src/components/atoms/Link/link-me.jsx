import React from "react";
import { Button } from "@mui/material";
import './styles.scss';

const LinkMe = () => {
    return (
        <Button href="/" className="property">{'.me()'}</Button>
    );
}
 
export default LinkMe;