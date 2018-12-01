export default theme => ({

    profileIcon:{
        width: "80px",
        height: "80px"
    },
    profileDisplayName:{
        display: "flex",
        alignSelf: "flex-center",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
    profileStyle: {
        display: "inline-block",
        verticalAlign: "middle",
        textDecoration: "none"
    },
    medalIcon:{
        width: "15px",
        height: "15px",
        marginRight: "5px"
    },
    name: {
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start"
    },
    position: {
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    points: {
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    pointsContainer: {
        height: "100%",
        display: "flex",
    },
    avatarContainer: {
        // backgroundColor: "#1bff4e"
    },
    host: {
        color: "#FFF",
        backgroundColor: theme.palette.primary.dark
    }

});
