<template>
    <div class="col-md-4" @click="switchCharacter">
        <div class="character-card">
          <div class="card-block">
            <h4 class="card-title">{{character.name}}</h4>
            <p class="card-text">Height: {{character.height}}cm</p>
            <p class="card-text">Mass: {{character.mass}}kg</p>
            <p class="card-text">Hair Color: {{character.hair_color}}</p>
            <p class="card-text">Eye Color: {{character.eye_color}}</p>
          </div>
          <button class="btn btn-primary" @click.stop="lastCharacter">Back</button>
        </div>
    </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      character: {},
      history_id: []
    };
  },
  methods: {
    fetchCharacter(id) {
      fetch(`https://swapi.co/api/people/${id}`, {
        method: "GET"
      })
        .then(response => response.json())
        .then(json => (this.character = json));
    },
    switchCharacter() {
      let random_id = Math.floor(Math.random() * 83) + 1;
      this.history_id.push(random_id);
      this.fetchCharacter(random_id);
    },
    lastCharacter() {
      let last_id;
      if (this.history_id.length > 1) {
        last_id = this.history_id.pop();
      } else {
        last_id = this.history_id[0];
      }
      this.fetchCharacter(last_id);
    }
  },
  created() {
    this.history_id.push(this.id);
    this.fetchCharacter(this.id);
  }
};
</script>