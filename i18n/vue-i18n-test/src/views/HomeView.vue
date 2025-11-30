<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
import { ref } from "vue";
import html2pdf from "html2pdf.js";
const componentRef = ref();

const handlePrint = () => {
  const element = componentRef.value.$el;
  const opt = {
  margin:       1,
  filename:     'myfile.pdf',
  image:        { type: "jpeg", quality: 0.98 },
  html2canvas:  { scale: 2 },
  jsPDF:        { unit: 'in', format: 'letter',
   orientation: 'portrait' }
  } as const;
  html2pdf()
    .from(element)
    .set(opt)
    .save();
};

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
