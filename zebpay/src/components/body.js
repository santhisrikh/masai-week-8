import React from 'react'
import styles from './body.module.css'
export default function body (){
    return(
        <div>
            <div className= {styles.container1}>
                <div>
                    <h2>Setting <br></br>Crypto free</h2>
                    <p> As the torchbearer of<br></br>
                    liberating crypto from all shackles<br></br>
                    Zebpay invites Crypto enthusiasts to<br></br>
                    buy/sell crypto instantly & securly</p>
                    <input type = "tel" placeholder="Enter Mobile Number"></input>
                    <button>Sign Up</button>
                </div>
                <div>
                    <img src = "/kangaroo.png"/>
                </div>
            </div>


            <div className={styles.rocket}>
                <img src ="/rocket.jpeg" />
                <div className = {styles.buycrypto}>
                    <p>Now Buy/Sell Bitcoin,Ether,Bitcoin Cash,Ripple & <br></br>
                    Lite Coin instantly </p>
                <button>Buy Crypto Instantly</button>           
                </div>
            </div>


            <div className = {styles.clutterimg}>
                <img src = "/clutter.png" height ="600px"></img>
                <div className={styles.clutter}>
                    <h2>Clutter Free</h2>
                    <ul>
                        <li>Refreshing New Look</li>
                        <li>Clean. Intuitive. Simple</li>
                        <li>Advanced Trading Features</li>
                    </ul>
                    <div className ={styles.feature}>
                    <img src = "/android.png" height="30px" width="30px"/>
                    <img src = "/apple.jpeg" height="30px" width="30px"/>
                    <a href="#">SEE FEATURES></a>                   
                 </div>                 
                </div>
            </div>


            <div className = {styles.barriercont}>
                <div className={styles.barrier}>
                <h2>Barrier Free</h2>
                    <ul>
                        <li>Trade Across 5 AUD-Crypto Pairs</li>
                        <li>Zero Deposit Fees (FIAT & Crypto) </li>
                        <li>Zero Withdrawal Fees (FIAT)</li>
                    </ul>
                </div>
                <img src = "/barrier.png" height ="600px"></img>
            </div>


            <div className = {styles.stressimg}>
                <img src = "/stress.png" height ="600px"></img>
                <div className={styles.stress}>
                    <h2>Stress Free</h2>
                    <ul>
                        <li>Multi-Sig & Multi-Geo Authentication for Cold Wallets</li>
                        <li>Proprietary Multi-Layered Security Protocols</li>
                        <li>Stringent Compliance & Regulations</li>
                    </ul>                    
                    <a href="#">More></a>                         
                </div>
            </div>

            <div className={styles.likepro}>
                <h2>Like a Pro</h2>
                <div>
                    <p>Trade like you do. Trade like a pro<a href="#">  Go To Pro></a>  </p>
                </div>
                <img src = "/pro.png"></img>
            </div>
           
   </div>
    )
}