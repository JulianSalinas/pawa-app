export default theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing.unit * 2,
    },
    paperPosition: {
        color: "#FFF",
        height: "100%",
        padding: theme.spacing.unit * 2,
        backgroundColor: theme.palette.primary.dark,
    },
    paperPositionContent: {
        height: "100%",
        paddingLeft: theme.spacing.unit * 8,
        paddingRight: theme.spacing.unit * 8,
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2
    }
});
