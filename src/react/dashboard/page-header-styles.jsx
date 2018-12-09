const pageHeaderStyles = theme => ({
    appbar: {
        transition: "all 150ms ease 0s"
    },
    toolbar: {
        display:"flex",
        flexWrap: "wrap",
        flexDirection: "row",
        backgroundColor: "#FFF",
        justifyContent: "flex-end"
    },
    toolbarLinks: {
        height: "100%"
    },
    profileInfo: {
        height: "100%"
    },
    profileImage: {
        height: "100%"
    },
    medal:{
        width: "15px",
        height: "15px",
        marginRight: "5px"
    },
    profileIcon: {
        color: "#999",
        width: "35px",
        height: "35px",
        marginRight: "30px"
    },
    notificationSpan: {
        zIndex: "4",
        top: "2px",
        right: "4px",
        color: "#FFF",
        height: "16px",
        fontSize: "9px",
        minWidth: "16px",
        display: "block",
        lineHeight: "16px",
        textAlign: "center",
        borderRadius: "10px",
        position: "absolute",
        background: "#66b5bc",
        verticalAlign: "middle",
        border: "1px solid #FFF",
    },
    exitIcon: {
        color: "#999",
        fontSize: "2em"
    },
});

export default pageHeaderStyles;
