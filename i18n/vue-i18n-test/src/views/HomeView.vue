<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
import { useVueToPrint } from "vue-to-print";
import { reactive, ref } from "vue";

const componentRef = ref();
const state = reactive({ text: "old boring text" });


const { handlePrint } = useVueToPrint({
  content: componentRef,
  documentTitle: "AwesomeFileName",
  removeAfterPrint: true
});

</script>

<template>
  <main>
    <button class="print-button" @click="handlePrint">Imprimir 🖨️</button>

    <TheWelcome ref="componentRef" />
  </main>
</template>

<style scoped>
.print-button {
  padding: 12px 24px;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  border: none;
  border-radius: 8px;
  background-color: #ff5722;
  /* A bright deep orange */
  color: white;
  transition: background-color 0.3s ease;
}

.print-button:hover {
  background-color: #f44336;
  /* A slightly different bright red on hover */
}

@media print {
  .print-button {
    display: none;
  }
}
</style>
