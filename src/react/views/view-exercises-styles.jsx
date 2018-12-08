export default theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing.unit * 2,
    },
    mainVideo: {
        width: "100%",
        height: "80vh",
    },
    mainVideoContainer: {
        height: "80vh",
        overflow: "hidden"
    },
    videoThumbnail: {
        color: "#FFF",
        width: "100%",
        height: "150px",
        overflow: "hidden",
        borderRadius: "5px",
        transition: "transform .2s",
        alignItems: "center",
        justifyContent: "center",
        background: theme.palette.secondary.main,
        "&:hover": {
            transform: "scale(1.1)",
            background: theme.palette.secondary.dark
        }
    },
    videoThumbnailPlay: {
        width: "100%",
        height: "100%",
        padding: theme.spacing.unit * 5
    },
    recommendedVideos: {
        minHeight: "100%",
        overflow: "hidden",
        // padding: theme.spacing.unit * 2
    },
    buttonDivider: {
        minWidth: "2px",
        background: "#000"
    },
    nextButtonIcon: {
        marginLeft: theme.spacing.unit
    },
    previousButtonIcon: {
        marginRight: theme.spacing.unit
    },
    nextButton: {
        color: "#FFF",
        borderTopLeftRadius: "0px",
        borderBottomLeftRadius: "0px",
        background: theme.palette.secondary.main,
        "&:hover": {background: theme.palette.secondary.dark}
    },
    previousButton: {
        color: "#FFF",
        borderTopRightRadius: "0px",
        borderBottomRightRadius: "0px",
        background: theme.palette.secondary.main,
        "&:hover": {background: theme.palette.secondary.dark}
    }
});
