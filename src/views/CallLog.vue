<template>
  <div>
    <h2>Journal d'Appels</h2>
    <ul>
      <li v-for="entry in callLog" :key="entry.dateTime">
        {{ entry.dateTime }} - {{ entry.contact }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    callLog: Array,
  },
};
</script>
