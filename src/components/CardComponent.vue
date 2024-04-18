<template>

    <div class="flip-card">
        <div class="flip-card-inner">
            <div class="flip-card-front">
                <img :src="img" :alt="title" @error="imgDefault" >
            </div>
            <div class="flip-card-back  ">
                <div class="pt-5">
                    <p>
                        <h6>original tile: <br> {{ title }}</h6>
                        <h6>second title: <br> {{ secondTitle }}</h6>
                        <div class="flag">
                            <img :src="`/images/${language}.png`" :alt="language" @error="flagDefault">
                        </div>
                        <div class="star">
                          <i :class="{'fa-solid' : i <= votestar, 'fa-regular' : i > votestar}" class="fa-star" v-for="i in 5"></i>
                        </div>
                        <h6>
                            {{ overview }}
                        </h6>
                    </p>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
    name: 'CardComponent',
    props: ['title', 'secondTitle', 'language', 'vote', 'img','overview'],
    methods: {
      imgDefault(event){
        event.target.src = 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg'
      },
      flagDefault(event){
        event.target.src = '/images/help.webp'
      }
    },
    computed:{
      votestar () {
        return Math.ceil(this.vote / 2)
      }
    },
   }

</script>

<style lang="scss" scoped>
.star i {
    color: red
}
.flag {
    img{
        width: 40px;
    }
}
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
  overflow-y: auto;
  overflow-x: hidden;

}
img{
    width: 100%;
    height:100%;
}
h6{
    padding-bottom: 20px;
}
::-webkit-scrollbar {
  width: 5px;
}
::-webkit-scrollbar-track {
  background: black; 
}
::-webkit-scrollbar-thumb {
  background: red; 
}
::-webkit-scrollbar-thumb:hover {
  background: black; 
}
// ::-webkit-scrollbar {
//   width: 15px;
// }
// ::-webkit-scrollbar-track {
//   box-shadow: inset 0 0 3px grey; 
//   border-radius: 7px;
// }
// ::-webkit-scrollbar-thumb {
//   background: red; 
//   border-radius: 5px;
// }
// ::-webkit-scrollbar-thumb:hover {
//   background: #b30000; 
// }
</style>