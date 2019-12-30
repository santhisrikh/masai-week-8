import React from 'react'
import styles from './navbar.module.css'
export default function navbar (){
    return(
    <div>
        <div class={styles.topnav}>
            <a><img src = "/zeb-logo.png"/></a>
        <div className={styles.logos}>
            <a><img src = "/android.png" height="30px" width="30px"/></a>
            <a><img src = "/apple.jpeg" height="30px" width="30px"/></a> 
        </div>
        <div className={styles.navleft}>         
            <a href="#AboutUs">About Us</a> 
            <a href="#Products">Products</a>
            <a href="#signin">Sign In</a>
            <button href = "#signup">Sign Up</button>        
        </div>    
        </div>       
    </div>
    )
}
 
