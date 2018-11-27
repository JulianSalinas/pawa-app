export default theme => ({
    close: {
        width: "24px",
        height: "24px"
    },
    icon: {
        top: "50%",
        left: "15px",
        width: "30px",
        height: "30px",
        display: "block",
        marginLeft: "5px",
        marginTop: "-15px",
        position: "absolute"
    },
    message: {
        padding: "0",
        display: "block",
        marginLeft: "24px",
    },
    root: {
        padding: "20px",
        flexWrap: "unset",
        borderRadius: "3px",
        position: "relative",
        marginBottom: "60px",
        backgroundColor: theme.palette.primary.dark,
        boxShadow: "0 12px 20px -10px rgba(255, 255, 255, 0.28)"
    }
});
