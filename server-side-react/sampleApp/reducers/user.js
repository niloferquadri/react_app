import objectAssign from 'object-assign';

const sample = (state = {
  user: {
    name: 'Andrew',
    age: '47',
    email: 'andrew@1mg.com',
    job: 'Sales Person'
  }
}, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default sample;
