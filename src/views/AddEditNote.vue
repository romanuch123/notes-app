<template>
  <div class="add-edit-note">
    <h1 v-if="!id">Add Note</h1>
    <h1 v-else>Edit Note</h1>
    <Loader v-if="id && isLoadingEditNote" />
    <form v-else>
      <div class="form-row">
        <h2>Title</h2>
        <input
          type="text"
          name="note-title"
          id="note-title"
          class="note-title"
          placeholder="Note title"
          v-model="note.title"
        >
      </div>
      <div class="form-row">
        <h2>Add New Todo</h2>
        <div class="new-todo-wrapper">
          <input
            type="text"
            name="todo-title"
            id="todo-title"
            class="todo-title"
            placeholder="TODO title"
            v-model="newTodo"
          >
          <CustomButton @click-handler="addTodo" name="+" :disabled="!newTodo.trim()" />
        </div>
      </div>
      <div class="todos-wrapper">
        <h2>Uncompleted TODOs</h2>
        <CustomList :listLength="uncompletedTodos.length">
          <TodosItem
            v-for="item in uncompletedTodos"
            :item="item"
            :key="item.id"
            @change-todo-status="changeTodoStaus(item.id)"
            @delete-todo="deleteTodo(item.id)"
            @edit-todo="editTodo(item.id, $event)"
          />
        </CustomList>
      </div>
      <div class="todos-wrapper">
        <h2>Completed TODOs</h2>
        <CustomList :listLength="completedTodos.length">
          <TodosItem
            v-for="item in completedTodos"
            :item="item"
            :key="item.id"
            @change-todo-status="changeTodoStaus(item.id)"
            @delete-todo="deleteTodo(item.id)"
          />
        </CustomList>
      </div>
      <!-- <div class="form-actions">

      </div> -->
    </form>
    <ButtonsPanel>
      <!-- <button type="submit">Save</button>
      <button type="button">Cancel</button>
      <button type="button">Delete</button>
      <button type="button">Undo</button>
      <button type="button">Redo</button> -->
      <CustomButton @click-handler="saveNote" name="Save" :disabled="!note.title.trim()" />
      <CustomButton @click-handler="$router.push('/')" name="Cancel" />
      <CustomButton @click-handler="deleteNote" name="Delete" :disabled="!id" />
      <CustomButton @click-handler="$router.push('/')" name="Undo" />
      <CustomButton @click-handler="$router.push('/')" name="Redo" />
      <!-- <button
        v-for="btn in buttons"
        :key="btn.id"
        @click="btn.clickHandler"
        type="button"
      >{{ btn.name }}</button> -->
    </ButtonsPanel>
  </div>
</template>

<script>
import CustomList from '@/components/CustomList.vue';
import Loader from '@/components/Loader.vue';
import ButtonsPanel from '@/components/ButtonsPanel.vue';
import TodosItem from '@/components/TodosItem.vue';
import CustomButton from '@/components/CustomButton.vue';
import db from '@/services/firebase';

export default {
  name: 'AddEditNote',
  components: {
    CustomList,
    Loader,
    ButtonsPanel,
    TodosItem,
    CustomButton,
  },
  props: {
    id: String,
  },
  data() {
    return {
      note: {
        id: null,
        title: '',
        todos: [],
      },
      newTodo: '',
    };
  },
  computed: {
    isLoadingEditNote() {
      return this.$store.getters.IS_LOADING_EDIT_NOTE;
    },
    uncompletedTodos() {
      return this.note.todos.filter((el) => !el.isCompleted);
    },
    completedTodos() {
      return this.note.todos.filter((el) => el.isCompleted);
    },
  },
  methods: {
    saveNote() {
      if (this.note.id) {
        this.$store.dispatch('EDIT_NOTE', this.note).then(() => {
          this.$router.push('/');
        });
      } else {
        this.$store.dispatch('ADD_NOTE', this.note).then(() => {
          this.$router.push('/');
        });
      }
    },
    deleteNote(noteId) {
      this.$store.dispatch('DELETE_NOTE', noteId);
    },
    addTodo() {
      const id = `f${(+new Date()).toString(16)}`;
      this.note.todos.splice(0, 0, {
        id,
        title: this.newTodo,
        isCompleted: false,
      });
      this.newTodo = '';
    },
    deleteTodo(todoId) {
      this.note.todos = this.note.todos.filter((el) => el.id !== todoId);
    },
    editTodo(todoId, todoTitle) {
      const todo = this.note.todos.find((el) => el.id === todoId);
      todo.title = todoTitle;
    },
    changeTodoStaus(todoId) {
      const todo = this.note.todos.find((el) => el.id === todoId);
      todo.isCompleted = !todo.isCompleted;
    },
  },
  async created() {
    try {
      if (this.id) {
        this.$store.commit('SET_LOADING_EDIT_NOTE_STATUS', true);
        const editNote = await db.collection('notes').doc(this.id).get();
        if (!editNote.data()) {
          this.$router.push('/');
        } else {
          this.note = { ...this.note, ...editNote.data(), id: editNote.id };
          this.$store.commit('SET_LOADING_EDIT_NOTE_STATUS', false);
        }
      }
    } catch (error) {
      console.log(error);
    }
  },
};
</script>

<style lang="scss" scoped>
@import '../styles/variables.scss';
@import '../styles/mixins.scss';

form {
  @include form-style;
  width: 90%;
  margin: 0 auto;
  margin-bottom: 60px;
  width: 80%;
  label {
    display: block;
  }
  .form-row {
    width: 80%;
    margin: 0 auto;
  }
  .note-title {
    box-sizing: border-box;
    width: 100%;
  }
  .new-todo-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    input {
      flex: 1;
      margin-right: 10px;
    }
  }
  .todos-wrapper {
    margin-bottom: 20px;
  }
}
</style>
