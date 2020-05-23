<template>
  <div class="home">
    <h1>Notes</h1>
    <Loader v-if="isLoadingNotes" />
    <CustomList v-else :listLength="notes.length">
      <NotesItem
        v-for="note in notes"
        :key="note.id"
        :note="note"
        @delete-note="deleteNote(note.id)"
      />
    </CustomList>
  </div>
</template>

<script>
import CustomList from '@/components/CustomList.vue';
import NotesItem from '@/components/NotesItem.vue';
import Loader from '@/components/Loader.vue';


export default {
  name: 'Home',
  components: {
    CustomList,
    NotesItem,
    Loader,
  },
  data() {
    return {
    };
  },
  computed: {
    notes() {
      return this.$store.getters.NOTES;
    },
    isLoadingNotes() {
      return this.$store.getters.IS_LOADING_NOTES;
    },
  },
  methods: {
    deleteNote(noteId) {
      this.$store.dispatch('DELETE_NOTE', noteId);
    },
  },
  async created() {
    await this.$store.dispatch('GET_NOTES');
  },
};
</script>

<style lang="scss" scoped>

</style>
