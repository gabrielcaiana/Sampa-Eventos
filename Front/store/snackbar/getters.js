export default {
  $snackbar(state) {
    return {
      visible: state.snackbar.visible,
      message: state.snackbar.message,
    };
  },
};
