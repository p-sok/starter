<template id="item">
    <section class="item-section">
        <router-link :to="{ name: 'home', params: { userId: 123 }}">Back to home</router-link>
        <br /><br />
        <h2 class="h2">{{ $route.params.name }}</h2>
    </section>
</template>

<script>
    /* ex link : <router-link :to="{ name: 'user', params: { userId: 123 }}">User</router-link> */
    export default {
        template: '#item'
    }
</script>
