import React from 'react';
import styles from './footer.module.css'
const footer = (props)=>{
    let Partners = props.companyLogos.map(image =>(<li><img src ={image} ></img></li>))
    return(
        <div className ={styles.innews}>
            <div>
                <br></br>
                <h1>Zebpay In News</h1>
            </div>
            
            <ul className = {styles.list}>
            {Partners}
            </ul>
            <hr></hr>
            <div className={styles.count}>
                <div>
                    <h1>2B+</h1>
                    <p>Value transacted</p>
                </div>
                <div>
                    <h1>4.1</h1>
                    <p>Star app rating</p>
                </div>
                <div>
                    <h1> 3M+</h1>
                    <p>Satisfied customers</p>
                </div>
            </div>
            <hr></hr>
        </div>      
    )
}
export default footer