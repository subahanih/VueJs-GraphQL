<template>
    <div>
        <Header />
        <Body />
        <Footer />
    </div>  
</template>

<script>
import Header from './Header';
import Body from './Body';
import Footer from './Footer';

export default {
    name: 'Home',
    mounted() {
        if (!sessionStorage.getItem('isLoggedIn')) {
            this.$router.push({ path: "/login" })
        }
    },
    components: {
        Header,
        Body,
        Footer
    }
}
</script>

<style scoped>

</style>