<!--
References:
https://github.com/schoening/vue-typescript-class-component-jest
https://medium.freecodecamp.org/simple-unit-tests-with-vue-test-utils-and-jest-c384d7abc321
-->
<script lang="ts" src="./new-message-toggle.component.vue.ts"></script>
<template>
 <div>
  <p>{{message}}</p>
  <button id="toggle-message" @click="toggleMessage">
   Change message
  </button>
 </div>
</template>

