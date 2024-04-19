<template>
    <div class="loader">
        <div class="cube">n</div>
        <div class="cube">e</div>
        <div class="cube">t</div>
        <div class="cube">f</div>
        <div class="cube">l</div>
        <div class="cube">i</div>
        <div class="cube">x</div>
    </div>
</template>

<script>
    export default {
        name: 'LoaderComponent',
        data () {
            return {
               
            }
        },
    }
</script>

<style lang="scss" scoped>
    .loader{
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: #564D4D;
        z-index: 999;
    }
    .cube {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        margin-right: 10px;
        background-color: red;
        text-align: center;
        line-height: 100px;
        color: white;
        font-size: 50px;
        font-weight: bold;
        text-transform: uppercase;

        &:first-child {
            animation: left 1s infinite;
        }

        &:last-child {
            animation: right 1s infinite 0.5s;
        }
    }
    @keyframes left{
        40%{
            transform: translateX(-60px);
        }
        50%{
            transform: translate(0);
        }
    }
    @keyframes right{
        40%{
            transform: translateX(60px);
        }
        50%{
            transform: translate(0);
        }
    }
</style>