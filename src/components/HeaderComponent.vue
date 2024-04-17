<template>
    <header class="py-3 d-flex justify-content-between">
       
        <h1 class="text-uppercase px-4 ">samflix</h1>

        <nav class="navbar">
            <div class="container-fluid">
                <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-danger" type="submit">Search</button>
                </form>
            </div>
        </nav>
    
    </header>
</template>

<script>
    export default {
        name: 'HeaderComponent',
    }
</script>

<style lang="scss" scoped>
    header{
        background-color: black;
    }

    h1{
        color: red;
    }
</style>