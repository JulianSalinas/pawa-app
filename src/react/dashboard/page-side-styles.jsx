import {defaultBoxShadow, drawerWidth, transition} from "./commons-styles";

const sidebarStyle = () => ({
    sidebar: {
        zIndex: "4",
        width: "260px",
        height: "100vh",
        overflow: "auto",
        position: "relative",
        overflowScrolling: "touch",
        border: "1px solid #999999",
        // borderTopRightRadius: "5px",
        // borderBottomRightRadius: "5px"
    },
    fixedDrawer: {
        top: "0",
        left: "0",
        bottom: "0",
        position: "fixed",
        overflowY: "visible",
        textAlign: "left",
        width: drawerWidth
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
        ...transition
    },
    wrappedLogo: {
        zIndex: "4",
        width: "100%",
        textAlign: "center",
        position: "relative",
        paddingTop: "3.5rem",
        paddingBottom: "3.0rem",
        backgroundColor: "#66b5bc"
    },
    item: {
        color: "#999",
        display: "block",
        fontSize: "20px", // 16
        fontWeight: "300", // 400
        textDecoration: "none",
        position: "relative",
        marginTop: "10px",
        marginRight: "23px",
        marginLeft: "-1px",
        border: "1px solid #999999", // #dedede
        // borderTopRightRadius: "5px",
        // borderBottomRightRadius: "5px",
        "&:hover": { color: "#999" }
    },
    itemLink: {
        width: "auto",
        display: "block",
        position: "relative"
    },
    itemActive: {
        color: "#FFF",
        // paddingLeft: "8px",
        // marginRight: "15px",
        backgroundColor: "#999999",
        // borderTopRightRadius: "5px",
        // borderBottomRightRadius: "5px",
        "&:hover": { color: "#FFF" }
    },
    itemIcon: {
        float: "left",
        width: "24px",
        height: "24px",
        color: "inherit",
        fontSize: "24px",
        lineHeight: "30px",
        block:"inline-block"
    },
    itemButton: {
        width: "100%",
        position: "absolute",
        marginTop: "8px",
        marginBottom: "8px"
    }
});

export default sidebarStyle;
