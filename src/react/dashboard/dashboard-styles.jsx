import { container, transition, drawerWidth } from "./commons-styles";

export default theme => ({

    wrapper: {
        position: "relative",
        top: "0",
        height: "100vh"
    },

    mainPanel: {
        [theme.breakpoints.up("md")]: {
            width: `calc(100% - ${drawerWidth}px)`
        },
        overflow: "auto",
        position: "relative",
        float: "right",
        transition,
        maxHeight: "100%",
        width: "100%",
        overflowScrolling: "touch"
    },

    content: {
        marginTop: "70px",
        padding: "30px 15px",
        minHeight: "calc(100vh - 125px)"
    },

    container,

    map: {
        marginTop: "70px"
    }

});
