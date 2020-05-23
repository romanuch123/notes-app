<template>
  <li class="item">
    <input
      class="item__check"
      type="checkbox"
      v-model="item.isCompleted"
      :true-value="true"
      :false-value="false"
    >
    <span class="item__title" v-if="edit !== item.id">{{ item.title }}</span>
    <input class="form-control item__title--edit" v-else v-model="newTodoTitle">
    <span class="item__actions">
      <template v-if="!item.isCompleted">
        <CustomButton
          v-if="edit !== item.id"
          name="Edit"
          @click-handler="edit = item.id, newTodoTitle = item.title"
        />
        <CustomButton
          v-if="edit === item.id"
          name="Save"
          @click-handler="editTodo(item.id, newTodoTitle)"
          :disabled="!newTodoTitle.trim()"
        />
        <CustomButton
          v-if="edit === item.id"
          name="Cancel"
          @click-handler="edit = '', newTodoTitle = ''"
        />
      </template>
      <CustomButton v-if="edit !== item.id" name="Delete" @click-handler="deleteTodo"/>
    </span>
  </li>
</template>

<script>
import CustomButton from '@/components/CustomButton.vue';

export default {
  name: 'TodosItem',
  components: {
    CustomButton,
  },
  props: ['item'],
  data() {
    return {
      edit: false,
      newTodoTitle: '',
    };
  },
  methods: {
    deleteTodo() {
      this.$emit('delete-todo');
    },
    editTodo(id, newTodoTitle) {
      this.edit = false;
      this.$emit('edit-todo', newTodoTitle);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../styles/variables.scss';
@import '../styles/mixins.scss';

.item {
  @include flex-vertical-center(space-between);
  width: 80%;
  margin: 0 auto;
  margin-bottom: 10px;
  &__title{
    text-align: left;
    flex: 1;
    padding: 0 10px;
  }
  &__title--edit {
    flex: 1;
    padding: 0 10px;
  }
  &__actions {
    button {
      margin-left: 5px;
    }
  }
}
</style>
