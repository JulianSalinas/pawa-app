export default theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        minHeight: "100px",
        padding: theme.spacing.unit * 2,
    },
    avatar: {
        paddingLeft: theme.spacing.unit * 8,
        paddingRight: theme.spacing.unit * 8,
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2
    },
    profile: {
        width: "125px",
        height: "125px"
    }
});