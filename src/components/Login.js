function Login() {
    return (
        <div class="container">
            <div class="left-section">
                <form action="" class="sign-in">
                    <h3 class="title">Login</h3>
                    <div class="input-field">
                        <input type="text" placeholder="username"></input>
                    </div>
                    <div class="input-field">
                        <input type="password" placeholder="password"></input>
                    </div>
                    <input type="submit" value="Login" class="btn solid"></input>
                </form>
                <form action="" class="sign-up">
                    <div class="input-field">
                        <input type="text" placeholder="username"></input>
                    </div>
                    <div class="input-field">
                        <input type="email" placeholder="parent's email-id"></input>
                    </div>
                    <div class="input-field">
                        <input type="password" placeholder="password"></input>
                    </div>
                    <input type="submit" value="Login" class="btn solid"></input>
                </form>
            </div>
            <div class="right-section">

            </div>
        </div>
    );
}

export default Login;