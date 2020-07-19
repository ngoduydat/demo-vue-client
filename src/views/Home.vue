<template>
    <div class="container-fluid p-0">
        <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top">
            <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarTogglerDemo03"
                aria-controls="navbarTogglerDemo03"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <router-link class="navbar-brand" to="/">Lisod</router-link>

            <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li class="nav-item active">
                        <router-link :to="{ path: '/' }" class="nav-link"
                            >Home</router-link
                        >
                    </li>
                    <li class="nav-item">
                        <router-link :to="{ path: '/profile' }" class="nav-link"
                            >Profile</router-link
                        >
                    </li>
                    <li class="nav-item">
                        <router-link :to="{ path: '/user' }" class="nav-link"
                            >User</router-link
                        >
                    </li>
                </ul>
                <button class="btn btn-primary btn-sm" v-on:click="logout">
                    Logout <i class="fa fa-sign-out" aria-hidden="true"></i>
                </button>
            </div>
        </nav>
        <div class="wrapper d-flex justify-content-center align-items-center">
            <keep-alive>
                <router-view />
            </keep-alive>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Home',
    components: {},
    methods: {
        logout: function() {
            this.$store.dispatch('logout');
        }
    },
    watch: {
        '$store.state.isAuthenticated': {
            handler: function(val) {
                if (val === false) {
                    this.$router.push('/login').catch(() => {});
                }
            },
            immediate: true
        }
    }
};
</script>
<style lang="scss" scoped>
.wrapper {
    height: calc(100vh - 60px);
}
</style>
