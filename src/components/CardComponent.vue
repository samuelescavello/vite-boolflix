<template>
    <div class="card my-2">
        <img :src="img" class="card-img-top" :alt="title">
        <div class="card-body">
            <h5 class="card-title text-uppercase text-center">{{title}}</h5>
            <p class="card-text text-center">
                <span>{{ secondTitle }}</span>
                <span>{{ lenguages }}</span>
                <span>{{ vote }}</span>
            </p>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'CardComponent',
        props:['title','secondTitle','lenguages','vote','img'],
    }
</script>

<style lang="scss" scoped>

</style>