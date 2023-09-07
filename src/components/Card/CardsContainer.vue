<script setup lang="ts">
import { ref } from 'vue';
import { getCharacters } from '../../services/rm-api.service';
import {Character } from '../../interfaces';



let characters= ref<Character[]>()

const obtainTheCharacters =async ()=>{
  const response = await getCharacters();
  characters.value =response.results
  
  response.results
  console.log(response.results)
}

obtainTheCharacters()


</script>

<template>
  <div class="card_container" > 

    <div class="card
    " v-for="item in characters">
      

        <img 
        :src="item.image"
        :alt="item.name + 'image'"
        />
        <div class="content">

          <p>

            {{ item?.name}}
          </p>
          <p>

            {{ item?.gender}}
          </p>
          <p>

            {{ item?.episode[0]}}
          </p>
        
      </div>
      </div>
    </div>




</template>

<style>
.card_container {
  background: white;
  border-radius: .5rem;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  padding: .5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: .5rem;
}

.card {
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
}
.card img{
  width: 12rem;
}
.card .content{
  display: flex;
  flex-direction: column;
  
}

</style>
