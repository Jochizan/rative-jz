import React, { useState, useEffect, useCallback } from 'react';
import { FlatList, RefreshControl } from 'react-native';
import { getTasks, deleteTask } from '../API';
import { useIsFocused } from '@react-navigation/native';

import TaskItem from './TaskItem';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const isFocused = useIsFocused();

  const loadTasks = async () => {
    const data = await getTasks();
    setTasks(data);
  };

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await loadTasks();
    setRefreshing(false);
  });

  const handleDelete = async (id) => {
    await deleteTask(id);
    await loadTasks();
  };

  const renderItem = ({ item }) => (
    <TaskItem task={item} handleDelete={handleDelete} />
  );

  useEffect(() => {
    console.log(isFocused);
    loadTasks();
  }, [isFocused]);

  return (
    <FlatList
      style={{ width: '100%' }}
      data={tasks}
      keyExtractor={(item) => item.id + ''}
      renderItem={renderItem}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          colors={['#78e08f']}
          onRefresh={onRefresh}
          progressBackgroundColor='#0a3d62'
        />
      }
    />
  );
};

export default TaskList;
