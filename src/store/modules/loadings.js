const getters = {
  IS_LOADING_NOTES: (state) => state.isLoadingNotes,
  IS_LOADING_EDIT_NOTE: (state) => state.isLoadingEditNote,
};
const mutations = {
  SET_LOADING_NOTES_STATUS: (state, payload) => {
    state.isLoadingNotes = payload;
  },
  SET_LOADING_EDIT_NOTE_STATUS: (state, payload) => {
    state.isLoadingEditNote = payload;
  },
};
const actions = {
};
const state = {
  isLoadingNotes: true,
  isLoadingEditNote: true,
};

export default {
  state,
  getters,
  mutations,
  actions,
};
