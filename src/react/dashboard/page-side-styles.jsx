const drawerWidth = 260;

const sidebarStyle = theme => ({
    sidebar: {
        zIndex: "4",
        height: "100vh",
        overflow: "auto",
        position: "relative",
        overflowScrolling: "touch",
        boxShadow: "0 0 30px 0 rgba(0,0,0,.1)"
    },
    fixedDrawer: {
        top: "0",
        left: "0",
        bottom: "0",
        border: "none",
        position: "fixed",
        textAlign: "left",
        overflowY: "visible",
        width: drawerWidth,
        backgroundColor: "#FFF"
    },
    tempDrawer: {
        top: "0",
        right: "0",
        left: "auto",
        zIndex: "1024",
        height: "100vh",
        display: "block",
        position: "fixed",
        width: drawerWidth,
        overflowY: "visible",
        textAlign: "left",
        transform: `translate3d(${drawerWidth}px, 500, 500)`,
        transition: "all 0.33s cubic-bezier(.33,.89,.38,.71)"
    },
    logo: {
        zIndex: "4",
        width: "100%",
        textAlign: "center",
        position: "relative",
        paddingTop: "3.5rem",
        paddingBottom: "1.0rem",
    },
    item: {
        color: "#999",
        display: "block",
        marginTop: "15px",
        marginRight: "23px",
        position: "relative",
        borderBottom: "1px dotted #dedede",
        "&:hover": {
            color: "#999",
            backgroundColor: "#dedede",
            borderTopRightRadius: "5px",
            borderBottomRightRadius: "5px"
        }
    },
    itemLink: {
        width: "auto",
        display: "block",
        position: "relative"
    },
    itemIcon: {
        float: "left",
        width: "24px",
        height: "24px",
        color: "inherit",
        block: "inline-block"
    },
    itemButton: {
        width: "100%",
        position: "absolute",
        marginTop: theme.spacing.unit,
        marginBottom: theme.spacing.unit,
    },
    itemActive: {
        color: "#FFF",
        borderTopRightRadius: "5px",
        borderBottomRightRadius: "5px",
        paddingLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit * 2,
        backgroundColor: theme.palette.primary.dark,
        "&:hover": {color: "#FFF", backgroundColor: theme.palette.primary.main}
    }
});

export default sidebarStyle;
