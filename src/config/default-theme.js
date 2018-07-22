export default {
    palette: {
        primary: {
            light: '#67acf3',
            main: '#4298f0',
            dark: '#2e6aa8',
            contrastText: '#fff'
        },
        secondary: {
            light: '#b74368',
            main: '#a61443',
            dark: '#740e2e',
            contrastText: '#fff'
        }
    },
    overrides: {
        MuiCard: {
            root: {
                backgroundColor: 'rgba(0,0,0,0.5)',
                borderRadius: 0,
                boxShadow: 'none',
                margin: 5,
                '&:after': {
                    transform: 'skewY(-45deg)',
                    zIndex: '-1'
                }
            }
        },
        MuiTabs: {
            root: {
                backgroundColor: 'rgba(0,0,0,0.5)'
            },
            indicator: {
                height: '100%'
            }
        },
        MuiTab: {
            root: {
                backgroundColor: 'none',
                zIndex: 10,
            },
            textColorInherit: {
                color: '#fff',
            },
        }
    }
};
