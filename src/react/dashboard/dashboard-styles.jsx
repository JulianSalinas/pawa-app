import { container, transition, drawerWidth } from "./commons-styles";

export default theme => ({

    wrapper: {
        top: "0",
        height: "100vh",
        position: "relative"
    },

    panel: {
        transition,
        width: "100%",
        float: "right",
        overflow: "auto",
        maxHeight: "100%",
        position: "relative",
        overflowScrolling: "touch",
        [theme.breakpoints.up("md")]: {
            width: `calc(100% - ${drawerWidth}px)`
        }
    },

    content: {
        // Margin = Header
        marginTop: "66px",
        padding: "60px 80px",
        minHeight: "calc(100vh - 125px)"
    }

});
