import { useState } from "react";
import logo from "../images/kidsmagz.svg"

function Login() {

    const [check, setCheck] = useState(false)

    function Signin() {
        const sign_in_btn = document.querySelector("#sign-in-btn");
        const container = document.querySelector(".container");

        
        sign_in_btn.addEventListener('click', () => {
            container.classList.remove("sign-up-mode");
        });
    }

    function Signup() {
        const sign_up_btn = document.querySelector("#sign-up-btn");
        const container = document.querySelector(".container");

        sign_up_btn.addEventListener('click', () => {
            container.classList.add("sign-up-mode");
        });
        
    }

    const email = () => {
        if (check === false) {
            setCheck(true)
        } else {
            setCheck(false)
        }
    }

    return (
        <div class="contain">
            <div class="container">
                <div class="forms-container">
                    <div class="signin-signup">
                        <form action="" class="sign-in">
                            <h2 class="title">Login</h2>
                            <div class="input-field">
                                <i class="fas fa-user"></i>
                                <input type="text" placeholder="username"></input>
                            </div>
                            <div class="input-field">
                                <i class="fas fa-lock"></i>
                                <input type="password" placeholder="password"></input>
                            </div>
                            <input type="submit" value="Login" class="btn solid"></input>
                        </form>

                        <form action="" class="sign-up">
                            <h2 class="title">Register</h2>
                            <div class="input-field">
                                <i class="fas fa-user"></i>
                                <input type="text" placeholder="username"></input>
                            </div>
                            <div class="input-field">
                                <i class="fas fa-envelope"></i>
                                <input type="text" placeholder={check ? 'Email' : 'Parents-Email'} id="email"></input>
                            </div>
                            <div class="input-field">
                                <i class="fas fa-lock"></i>
                                <input type="password" placeholder="password"></input>
                            </div>
                            <div class="checkbox">
                                <input type="checkbox" id="agelimit" name="agelimit" defaultChecked={check} onChange={email} ></input>
                                <label for="agelimit">I am above 13 years</label>
                            </div>
                            <input type="submit" value="Login" class="btn solid"></input>
                        </form>
                    </div>
                </div>
                <div class="panels-container">
                    <div class="panel left-panel">
                        <div class="content">
                            <img src={logo} className="image" alt=""></img>
                            <h3>New Here, <strong id="sign-up-btn" onClick={Signup}>Register</strong></h3>
                        </div>

                    </div>

                    <div class="panel right-panel">
                        <div class="content">
                            <img src={logo} className="image" alt=""></img>
                            <h3>One of us, <strong id="sign-in-btn" onClick={Signin}>Login</strong></h3> 
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;
