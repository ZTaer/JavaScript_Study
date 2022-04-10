import { makeStyles } from '@material-ui/core/styles';

export const bkmItemUseStyles = makeStyles({
    cardContainer: {
        // minWidth: "270px",
        width:"100%",
        border: "1px solid #000",
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9 - 作用于图片，真的是独特的写法
    },
    actions: {
        display: "flex",
        justifyContent: "flex-end",
        padding: "1.3rem ",
    }
});