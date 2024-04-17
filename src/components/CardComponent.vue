<template>

    <div class="flip-card">
        <div class="flip-card-inner">
            <div class="flip-card-front">
                <img :src="img" :alt="title" >
            </div>
            <div class="flip-card-back  ">
                <div class="pt-5">
                    <p>
                        <h6>original tile: <br> {{ title }}</h6>
                        <h6>second title: <br> {{ secondTitle }}</h6>
                        <h6>original language: <br>{{ language }}</h6>
                        <h6>vote: <br>{{ vote }}</h6>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CardComponent',
    props: ['title', 'secondTitle', 'language', 'vote', 'img'],
}
</script>

<style lang="scss" scoped>
.flip-card {
  background-color: transparent;
  width: 300px;
  height: 470px;
  perspective: 1000px; 
  margin-bottom: 30px;
}
.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}
.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}
.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; 
  backface-visibility: hidden;
}
.flip-card-front {
  background-color: #bbb;
  color: black;
}
.flip-card-back {
  background-color: black;
  color: white;
  transform: rotateY(180deg);
}
img{
    width: 100%;
    height:100%;
}
h6{
    padding-bottom: 20px;
}

</style>