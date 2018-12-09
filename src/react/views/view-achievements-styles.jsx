export default theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing.unit * 2,
    },
    brief: {
        padding: theme.spacing.unit * 2,
    },
    trophies: {
        padding: 16,
        border: "1px solid #c9c9c9"
    },
    legend: {
        display: 'flex',
        margin: 'auto',
        flexDirection: 'row',
    },
    legendLabel: {
        paddingTop: theme.spacing.unit,
        whiteSpace: 'nowrap',
    },
    legendItem: {
        flexDirection: 'column',
    },
    briefChartTitle: {
        whiteSpace: 'pre',
        marginBottom: theme.spacing.unit * 4,
        fontcolor: theme.palette.textSecondary
    }
});
