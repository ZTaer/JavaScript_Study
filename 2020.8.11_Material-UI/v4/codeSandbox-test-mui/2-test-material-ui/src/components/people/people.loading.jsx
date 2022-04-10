import React from "react";
import { Skeleton } from "@material-ui/lab";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    container: {
        display: "flex",
        justifyContent: "center",
        alignContent: "flex-start",
        flexWrap:"wrap",
        marginTop: "0.5rem",
    },
});

export const PeopleLoading = () => {

    const classes = useStyles();

    return (
        <div className={ classes.container } >
            <Skeleton 
                width="60%"
                height="100px"
                variant="text"
                animation="wave"
            />
            <Skeleton 
                width="60%"
                height="100px"
                variant="text"
                animation="wave"
            />
            <Skeleton 
                width="60%"
                height="100px"
                variant="text"
                animation="wave"
            />
            <Skeleton 
                width="60%"
                height="100px"
                variant="text"
                animation="wave"
            />
        </div>
    );
};
