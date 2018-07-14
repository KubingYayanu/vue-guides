<template>
    <div id="app">
        <h3>{{title}}</h3>
    </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      title: "Generate Your Team"
    };
  },
  methods: {
    fetchCharacter() {
      fetch("http://swapi.co/api/people", {
        method: "GET"
      });
    }
  }
};
</script>
