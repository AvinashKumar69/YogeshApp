import axios from 'axios';

const TodoAPI = `https://calm-plum-jaguar-tutu.cyclic.app/todos`;

export const getTodos = async () => {
  const response = await fetch(TodoAPI);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
  //
  // try {
  //   // return await axios.get(TodoAPI);
  //   const response = await axios.get(TodoAPI);
  //   console.log('response-->', response);
  //   return response;
  // } catch (error) {
  //   console.error(error);
  // }
};

export const postTodos = async postTodoData => {
  // console.log('postTodoData==>', postTodoData);
  return await axios.post(TodoAPI, {
    ...postTodoData,
  });
};

export const deleteTodos = async iD => {
  // console.log('iD==>', iD);
  const iDToDelete = iD?.iD;
  return await axios.delete(
    `https://calm-plum-jaguar-tutu.cyclic.app/todos/${iDToDelete}`,
  );
};
