import React from 'react';
import { makeStyles } from '@mui/styles';
import { Button } from '@mui/material';
import skyline_image from '../../assets/images/skyline_image.png'

interface Props {
    title : string;
}

const useStyles = makeStyles({
    root : {
        padding : '0',
        margin : '0'
    },
    navbar_container : {
        display : 'flex',
        justifyContent : 'space-between',
        alignItems : 'center',
        backgroundColor : 'rgba(5, 5, 5, .9)'
    },
    logo : {
        margin : '0 0 0 0.45em'
    },
    logo_a : {
        color : 'rgba(222, 222, 222, .5)'
    },
    logo_navigation : {
        listStyle : 'none',
        textTransform : 'uppercase',
        fontFamily: 'Cormorant Garamond',
        textDecoration : 'none'
    },
    navigation : {
        display : 'flex'
    },
    nav_a : {
        display : 'block',
        padding : '1em',
        color : 'rgba(222, 222, 222, .5)',
        textDecoration : 'none'
    },
    main : {
        backgroundImage : `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.2)), url(${skyline_image})`,
        width : '100%',
        height : '100%',
        backgroundSize : 'cover',
        backgroundRepeat : 'no-repeat',
        backgroundPosition : 'center',
        position : 'absolute'
    },
    main_text : {
        textAlign : 'center',
        position : 'relative',
        top : '25%',
        tranform : 'translate(-50%, -50%)',
        color : 'rgba(300, 300, 300, .5)',
        fontFamily: 'Cormorant Garamond',
        fontSize : 35
    }
})

export const Home = (props : Props) => {
    const classes = useStyles();
    return(
        <div className = {classes.root}>
            <nav>
                <div className = {classes.navbar_container}>
                    <h1 className = {`${classes.logo}`}>
                        <a href="#" className = { `${classes.logo_a} ${classes.logo_navigation}`}>Laura DeJesus</a>
                    </h1>
                    <ul className = { `${classes.navigation} ${classes.logo_navigation}`}>
                        <li>
                            <a href="" className = {classes.nav_a}>Home</a>
                        </li>
                        <li>
                            <a href="" className = {classes.nav_a}>Tech</a>
                        </li>
                        <li>
                            <a href="" className = {classes.nav_a}>Food</a>
                        </li>
                        <li>
                            <a href="" className = {classes.nav_a}>Hobbies</a>
                        </li>
                    </ul>
                </div>
            </nav>

            <main className = {classes.main}>
                <div className = {classes.main_text}>
                    <h1> {props.title} </h1>
                </div>
            </main>
        </div>
    )
}