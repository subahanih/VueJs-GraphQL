<template>
    <div class="login-bg">
        <p class="about-me-txt">Powerd by: Mahaboob Subahan | email: subahanih@gmail.com | mobile: +358 466182902
            <br> This sample application is developed using VueJs &#38; GraphQL. 
        </p>
        <div class="login-main-panel">
            <div class="login-left-panel">
                <div class="login-input-panel">
                    <h1 class="login-text">Login</h1>
                    <input class="text-field" placeholder="Username" type="text" v-model="username" />
                    <input class="text-field" placeholder="Password"  type="password" v-model="password" />
                    <button class="forgot-button" @tap="submit">Forgot Password?</button>
                    <button class="login-button" v-on:click="submit">LOGIN</button>
                    <label class="login-notification">{{notification}}</label>
                </div>
            </div>
            <div class="login-right-panel"></div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            notification: "",
            username: "",
            password: "",
            fake: {
                username: "user",
                password: "password"
            }
        }
    },
    methods: {
        submit() {
            if (!this.username || !this.password) {
                this.notification = "Please provide both a username address and password."
            } else {
                if (this.fake.username == this.username && this.fake.password == this.password) {
                    sessionStorage.setItem('isLoggedIn', true);
                    this.$router.push({ path: "/home" });
                } else {
                    this.notification = 'Username or Password is invalid'
                }
            }
        }
    },
    mounted() {
        if (sessionStorage.getItem('isLoggedIn')) {
            this.$router.push({ path: "/home" })
        }
    }
}
</script>

<style scoped>
    .login-bg {
        position: absolute;
        text-align: center;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        background-image: linear-gradient(to bottom left, rgba(63,94,251,1), rgba(252,70,107,1));
    }

    .login-main-panel {
        position:absolute;
        width:900px;
        height:500px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        box-shadow: 0px 0px 20px 5px rgba(100, 100, 100, 0.8);
        -moz-box-shadow: 0px 0px 20px 5px rgba(100, 100, 100, 0.8);
        -webkit-box-shadow: 0px 0px 20px 5px rgba(100, 100, 100, 0.8);
    }

    .login-left-panel {
        width:100%;
        height:100%;
        background-color: #FFFF55;
        position: absolute;
        background-image: linear-gradient(to bottom left, #ffffff, #d1d1d1);
    }
    
    .login-right-panel {
        width:485px;
        height:500px;
        float: right;
        background-size: 180% 100%;
        background-image: url('../assets/digital-banner.jpg');
        clip-path: polygon(
            0 0,
            100% 0,
            100% 100%,
            calc(100% - 0vw) 100%
        );
    }

    .login-input-panel {
        width: 250px;
        height: 500px;
        position: absolute;
        top: 50%;
        left: 24%;
        transform: translate(-50%, -50%);
        text-align: center;
    }

    .login-text {
        font: bold 32px arial, sans-serif;
        padding: 90px 0px 20px 10px;
        color: #c7005d;
        float: left;
    }

    .text-field {
        width: 246px;
        height: 35px;
        text-indent: 10px;
        font-size: 15px;
        border-radius: 8px;
        color: #e7006c;
        background-color: hsl(0, 0%, 90%);
        border-color:#e7006c;
        margin: 0 0 20px 0;
    }

    .text-field:focus {
        outline: none;
    }

    .forgot-button {
        color: #c7005d;
        outline: 0;
        border-width: 0px;
        cursor: pointer;
        background-color: transparent;
        padding: 10px 0px 0px 0px;
        float: left;
    }

    .login-button {
        color: #ffffff;
        width: 100%;
        height: 38px;
        background-color: #e7006c;
        outline: 0;
        border-width: 0px;
        cursor: pointer;
        margin: 25px 0 25px 0;
        border-radius: 8px;
    }

    .login-button:hover {
        background-color: #ff0077;
    }

    .login-button:active {
        background-color: #d40365;
    }

    .login-notification {
        font-size: 14px;
        color: #ff0000;
    }

    .about-me-txt {
        font-size: 14px;
        font-weight: 100;
        color: #ffffff;
        margin-top: 10px;
        line-height: 20px;
    }
</style>