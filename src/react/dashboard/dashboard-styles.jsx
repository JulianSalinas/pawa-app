export default theme => ({

    // It is all the screen
    layout: {
        height: "100vh",
        backgroundColor: "#f8f8f8"
    },

    // Where the header, content and footer are.
    panel: {
        width: "auto",
        height: "100vh",
        float: "right",
        overflow: "auto",
        position: "relative",
        overflowScrolling: "touch",
        [theme.breakpoints.up("md")]: {
            width: `calc(100% - ${260}px)`
        }
    },

    // Where each route is change
    body: {
        marginTop: theme.spacing.unit * 14,
        marginLeft: theme.spacing.unit * 8,
        marginRight: theme.spacing.unit * 8,
        marginBottom: theme.spacing.unit * 8,
        // backgroundColor: "#ffe7d6"
    }

});
