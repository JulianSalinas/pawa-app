const pageHeaderStyles = theme => ({
    profile: {
        height: "100%"
    },
    appbar: {
        transition: "all 150ms ease 0s"
    },
    toolbar: {
        backgroundColor: "#FFF",
        justifyContent: "flex-end"
    },
    medal:{
        width: theme.spacing.unit * 2,
        height: theme.spacing.unit * 2,
        marginRight: theme.spacing.unit
    }
});

export default pageHeaderStyles;
