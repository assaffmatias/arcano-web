<!-- este lo hizo chatgpT xdxd -->
<template>
  <div class="container">
    <div class="search-component">
      <div class="search-input">
        <input
          v-model="searchQuery"
          @input="filterSuggestions"
          placeholder="Buscar..."
        />
        <button class="search-icon" @click="executeSearch">🔍</button>
      </div>

      <div class="search-tags">
        <div
          v-for="(tag, index) in displayedTags"
          :key="index"
          class="tag-item"
        >
          {{ tag }}
          <button @click="removeTag(index)" class="remove-tag">x</button>
        </div>
      </div>

      <NuxtButton class="search-btn" @click="executeSearch">Buscar</NuxtButton>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'SearchComponent',
  setup() {
    const searchQuery = ref('');
    const suggestions = ref(['rondas', 'pendulo', 'amor', 'mundo', 'felicidad']);
    const displayedTags = ref(['rondas', 'pendulo', 'amor']);
    const filteredSuggestions = ref([]);

    const filterSuggestions = () => {
      filteredSuggestions.value = suggestions.value.filter((suggestion) =>
        suggestion.toLowerCase().includes(searchQuery.value.toLowerCase())
      );
    };

    const selectSuggestion = (suggestion) => {
      if (!displayedTags.value.includes(suggestion)) {
        displayedTags.value.push(suggestion);
      }
      searchQuery.value = '';
      filteredSuggestions.value = [];
    };

    const removeTag = (index) => {
      displayedTags.value.splice(index, 1);
    };

    const executeSearch = () => {
      alert('Buscando con los filtros: ' + displayedTags.value.join(', '));
    };

    return {
      searchQuery,
      displayedTags,
      filteredSuggestions,
      filterSuggestions,
      selectSuggestion,
      removeTag,
      executeSearch,
    };
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  width: 100%;
}

.search-component {
  width: 70%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
  margin: 0 auto;
}

.search-input {
  display: flex;
  align-items: center;
  width: 30%; /* Ocupa el 30% del componente */
}

.search-input input {
  width: 80%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px 0 0 4px;
  outline: none;
}

.search-icon {
  width: 20%;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  outline: none;
}

.search-tags {
  display: flex;
  gap: 8px;
  width: 30%; /* Ocupa el 30% del componente */
  flex-wrap: wrap;
}

.tag-item {
  display: flex;
  align-items: center;
  padding: 4px 8px;
  background-color: #e1e1e1;
  border-radius: 16px;
  font-size: 14px;
}

.remove-tag {
  background: none;
  border: none;
  margin-left: 5px;
  cursor: pointer;
  font-size: 12px;
  outline: none;
}

.search-btn {
  width: 10%; /* Ocupa el restante del componente */
  padding: 8px 16px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  align-self: flex-end;
}

.search-btn:hover {
  background-color: #218838;
}
</style>
