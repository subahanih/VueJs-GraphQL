<template>
    <div>
        <div class="header">
            <img class="product-img" src="../assets/product-logo.png" />
            <img class="signout-img" src="../assets/sign-out.png" v-on:click="logout"/>
        </div>
        <div class="stripe">
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        logout() {
            sessionStorage.removeItem('isLoggedIn');
            this.$router.push({ path: "/login" });
        }
    }
}
</script>

<style scoped>
.header {
    top: 0;
    width: 100%;
    height: 80px;
    position: fixed;
    background: rgb(63,94,251);
    background: linear-gradient(90deg, rgba(63,94,251,1) 10%, rgba(252,70,107,1) 90%);
}

.stripe {
    width: 100%;
    height: 5px;
    top: 80px;
    position: fixed;
    background-color: #575757;
}

.signout-img {
    width: 30px;
    height: 30px;
    margin: 25px;
    cursor: pointer;
    float: right;
}

.product-img {
    width: 200px;
    height: 60px;
    float: left;
    padding: 10px;
}
</style>