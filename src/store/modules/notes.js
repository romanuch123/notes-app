import db from '@/services/firebase';

const getters = {
  NOTES: (state) => state.notes,
};
const mutations = {
  ADD_NOTE: (state, payload) => {
    state.notes = [payload, ...state.notes];
  },
  EDIT_NOTE: (state, payload) => {
    state.notes = state.notes.map((el) => {
      if (el.id === payload.id) {
        return { ...el, ...payload };
      }
      return el;
    });
  },
  DELETE_NOTE: (state, payload) => {
    state.notes = state.notes.filter((el) => el.id !== payload);
  },
  SET_NOTES: (state, payload) => {
    state.notes = payload;
  },
};
const actions = {
  ADD_NOTE: async (context, payload) => {
    await db.collection('notes').doc().set({
      title: payload.title,
      todos: payload.todos,
    }).then(() => {
      console.log('Document successfully written!');
    });
    context.commit('ADD_NOTE', payload);
  },
  EDIT_NOTE: async (context, payload) => {
    await db.collection('notes').doc(payload.id).update({
      title: payload.title,
      todos: payload.todos,
    }).then(() => {
      console.log('Document successfully written!');
    });
    context.commit('EDIT_NOTE', payload);
  },
  DELETE_NOTE: async (context, payload) => {
    await db.collection('notes').doc(payload).delete()
      .then(() => {
        console.log('Document successfully deleted!');
      })
      .catch((error) => {
        console.error('Error removing document: ', error);
      });
    context.commit('DELETE_NOTE', payload);
  },
  GET_NOTES: async (context) => {
    context.commit('SET_LOADING_NOTES_STATUS', true);
    const newNotesList = [];
    await db.collection('notes').get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        newNotesList.push({
          id: doc.id,
          ...doc.data(),
        });
      });
    }).catch((error) => {
      console.log('Error getting documents: ', error);
    });
    context.commit('SET_NOTES', newNotesList);
    context.commit('SET_LOADING_NOTES_STATUS', false);
  },
};
const state = {
  notes: [],
};

export default {
  state,
  getters,
  mutations,
  actions,
};
