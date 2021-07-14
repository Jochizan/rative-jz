import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import { createTask, getTask, updateTask } from '../API';
import Layout from '../components/Layout';

const initialTask = {
  title: '',
  description: ''
};

const TaskFormScreen = ({ navigation, route }) => {
  const [task, setTask] = useState(initialTask);
  const [editing, setEditing] = useState(false);

  const handleTextChange = (name, value) => setTask({ ...task, [name]: value });

  const handleSubmit = async () => {
    try {
      if (!editing) {
        await createTask(task);
      } else {
        await updateTask(route.params.id, task);
      }
    } catch (err) {
      console.error(err);
    }
    navigation.navigate('HomeScreen');
  };

  useEffect(() => {
    if (route.params && route.params.id) {
      navigation.setOptions({ headerTitle: 'Updating a Task' });
      setEditing(true);

      (async () => {
        const res = await getTask(route.params.id);
        setTask({ title: res.title, description: res.description });
      })();
    }
  }, []);

  return (
    <Layout>
      <TextInput
        style={styles.input}
        placeholder='write a title'
        placeholderTextColor='#546574'
        onChangeText={(text) => handleTextChange('title', text)}
        value={task.title}
      />

      <TextInput
        style={styles.input}
        placeholder='write a description'
        placeholderTextColor='#546574'
        onChangeText={(text) => handleTextChange('description', text)}
        value={task.description}
      />

      {!editing ? (
        <TouchableOpacity style={styles.buttonSave} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Save Task</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.buttonUpdate} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Update Task</Text>
        </TouchableOpacity>
      )}
    </Layout>
  );
};

const styles = StyleSheet.create({
  input: {
    width: '90%',
    marginBottom: 7,
    fontSize: 14,
    borderWidth: 1,
    borderColor: '#10ac84',
    height: 35,
    color: '#fefefe',
    textAlign: 'center',
    borderRadius: 4,
    padding: 4
  },
  buttonSave: {
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 5,
    marginBottom: 4,
    backgroundColor: '#10ac84',
    width: '90%'
  },
  buttonText: {
    color: '#fefefe',
    textAlign: 'center'
  },
  buttonUpdate: {
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 5,
    marginBottom: 4,
    backgroundColor: '#e58e26',
    width: '90%'
  }
});

export default TaskFormScreen;
