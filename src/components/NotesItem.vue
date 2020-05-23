<template>
  <li class="list-item">
    <div class="list-item__container">
      <div class="title-wrapper">
        <span class="list-item__title">{{ note.title | capitalize }}</span>
      </div>
      <div class="list-item__actions">
        <CustomButton @click-handler="$router.push(`/edit/${note.id}`)" name="Edit" />
        <CustomButton @click-handler="deleteNote" name="Delete" />
      </div>
    </div>
    <div class="list-item__nested-list-wrapper">
      <h3>Todos:</h3>
      <ul v-if="note.todos.length" class="list-item__nested-list">
        <li
          v-for="(todoItem, index) in uncompletedTodos.slice(0, 3)"
          :key="todoItem.id"
          class="list-item__nested-list__item"
        >{{ `${index + 1}. ${todoItem.title}.` }}</li>
      </ul>
      <span v-else>List is empty...</span>
    </div>
  </li>
</template>

<script>
import CustomButton from '@/components/CustomButton.vue';

export default {
  name: 'NotesItem',
  components: {
    CustomButton,
  },
  props: {
    note: {
      type: Object,
      default() {
        return null;
      },
    },
  },
  data() {
    return {

    };
  },
  computed: {
    uncompletedTodos() {
      return this.note.todos.filter((el) => !el.isCompleted);
    },
  },
  methods: {
    deleteNote() {
      this.$emit('delete-note');
    },
  },
  filters: {
    capitalize(value) {
      if (!value) return '';
      const valueToStr = value.toString();
      return valueToStr.charAt(0).toUpperCase() + valueToStr.slice(1);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../styles/variables.scss';
@import '../styles/mixins.scss';

.list-item {
  &__title {
    font-weight: 600;
    font-size: 20px;
  }
  &__actions {
    button {
      margin-left: 5px;
    }
  }
  &__nested-list-wrapper {
    h3 {
      font-weight: 600;
      margin: 5px;
    }
  }
  &__nested-list {
    &__item {
      margin-bottom: 5px;
    }
  }
}

</style>
