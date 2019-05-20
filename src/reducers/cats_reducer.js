const catsReducer = (state = {
  loading: false,
  pictures: []
}, action) => {
  switch (action.type) {
    case 'LOADING_CATS':
      return state;
    case 'FETCH_CATS':
      return { loading: false, pictures: action.payload };
    default:
      return state;
  }
}

export default catsReducer;
