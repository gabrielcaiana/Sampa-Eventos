export const state = () => ({
  dialog: false,
});

export const mutations = {
  SET_DIALOG(state, payload) {
    state.dialog = payload;
  },
};

export const actions = {
  showDialog({ commit }, payload) {
    commit('SET_DIALOG', payload);
  },
};

export const getters = {
  $dialog: (state) => state.dialog,
};
