export default theme => ({
    name: {
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start"
    },
    points: {
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    position: {
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    medal: {
        width: "14px",
        height: "14px",
        margin: theme.spacing.unit,
    },
    neighbor: {
        color: "#999",
        backgroundColor: "#FFF"
    },
    host: {
        color: "#FFF",
        backgroundColor: theme.palette.primary.dark
    }
});
