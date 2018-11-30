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
        // height: "auto",
        margin: theme.spacing.unit * 10,
        backgroundColor: "#ffe7d6"
    }

});
