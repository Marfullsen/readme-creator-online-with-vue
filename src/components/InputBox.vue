<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <article class="flex flex-center flex-col">
    <div class="borde-negro p-2 back-card" :class="cardInfo[this.currentTitle].color">
    </div>
    <div class="borde-negro p-2 z-2 front-card">
      <form @submit.prevent="goToNextStep" class="content">
        <label class="title" for="currentInput">{{cardInfo[this.currentTitle].title}}</label>
        <div>
          <input type="text" v-model="inputPrincipal" :placeholder="cardInfo[this.currentTitle].subtitle" id="currentInput" :required="cardInfo[this.currentTitle].required">
          <button
            :class="cardInfo[this.currentTitle].color" class="button-next">➤</button>
        </div>
      </form>
    </div>
  </article>
</template>

<script>
export default {
  setup () {
    return {}
  },
  data() {
    return {
      currentTitle: 0,
      inputPrincipal: '',
      cardInfo: [
        { title: '¿Cómo se llama el proyecto?', subtitle: 'Nombre del proyecto', color: 'yellowCard', required: true, value: '' },
        { title: 'Cuéntalo en pocas palabras', subtitle: 'En simples palabras', color: 'blueCard', required: true, value: '' },
        { title: 'Descríbelo de manera general', subtitle: 'Explícalo en un resumen', color: 'orangeCard', required: false, value: '' },
        { title: '¿Qué tecnologías usaste?', subtitle: 'Tecnologías usadas', color: 'greenCard', required: false, value: '' },
        { title: 'Encuentra un ícono', subtitle: 'Buscar un ícono', color: 'greyCard', required: false, value: '' },
        { title: 'Sube algunas capturas', subtitle: 'Subir screenshots', color: 'pinkCard', required: false, value: '' },
        { title: 'Nombra algunas referencias', subtitle: 'Referencias, agradecimientos.', color: 'purpleCard', required: false, value: '' },
      ]
    }
  },
  methods: {
    goToNextStep() {
      // Almacenar el valor ingresado.
      this.cardInfo[this.currentTitle].value = this.inputPrincipal;

      // Limpiar el input para poder ingresar los demás valores.
      this.inputPrincipal = '';

      // Reiniciar si se llegó al final.
      if (this.currentTitle < this.cardInfo.length-1) {
        this.currentTitle++
      } else {
        this.currentTitle = 0
      }
    },
  },
}
</script>

<style scoped>
.borde-negro {
      border: solid 1px black;
    }
    
    .p-2 {
      padding: 2px;
    }

    .flex {
      display: flex;
    }

    .flex-center {
      justify-content: center;
      align-items: center;
    }

    .flex-col {
      flex-direction: column;
    }

    .content {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      padding: 1rem;
    }

    .w-100 {
      width: 100vw;
    }

    .h-100 {
      height: 100vh;
    }

    .back-card {
      width: 260px;
      height: 70px;
      background-color: #FFF2CC;
      border: solid 2px #D6B656;
      border-radius: 12px;
      transform: translateX(-18px) translateY(55px) rotate(5deg);
      z-index: 1;
    }

    .button-next {
      background-color: #FFF2CC;
      border: solid 2px #D6B656;
      border-radius: 5px;
      margin-left: -20px;
    }

    .front-card {
      width: 275px;
      background-color: #fff;
      border: solid 2px lightgrey;
      border-radius: 12px;
    }

    .z-2 {
      z-index: 2;
    }

    input {
      padding: 0.5rem;
      text-align: center;
    }

    .title {
      margin-bottom: .5rem;
    }

    .yellowCard {
      background-color: #FFF2CC;
      border-color: #D6B656;
    }

    .blueCard {
      background-color: #DAE8FC;
      border-color: #6C8EBF;
    }

    .greyCard {
      background-color: #F5F5F5;
      border-color: #666666;
    }

    .greenCard {
      background-color: #D5E8D4;
      border-color: #82B366;
    }

    .orangeCard {
      background-color: #FFE6CC;
      border-color: #D79B00;
    }

    .pinkCard {
      background-color: #F8CECC;
      border-color: #B85450;
    }

    .purpleCard {
      background-color: #E1D5E7;
      border-color: #9673A6;
    }
</style>
