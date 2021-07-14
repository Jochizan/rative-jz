const API = 'http://localhost:5200/tasks';

export const getTasks = async () => {
  const res = await fetch(API);
  return await res.json();
};

export const getTask = async (id) => {
  const res = await fetch(`${API}/${id}`);
  return await res.json();
};

export const createTask = async (newTask) => {
  console.log(newTask);
  const res = await fetch(API, {
    method: 'POST',
    headers: { accept: 'application/json', 'content-type': 'application/json' },
    body: JSON.stringify(newTask)
  });
  return await res.json();
};

export const deleteTask = async (id) => {
  await fetch(`${API}/${id}`, {
    method: 'DELETE'
  });
};

export const updateTask = async (id, newTask) => {
  const res = await fetch(`${API}/${id}`, {
    method: 'PUT',
    headers: { accept: 'application/json', 'content-type': 'application/json' },
    body: JSON.stringify(newTask)
  });
  return res.json();
};
