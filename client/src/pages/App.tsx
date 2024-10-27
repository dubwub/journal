import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import { Button, Checkbox, Group, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';



function App() {

  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      id: '',
      title: '',
      body: '',
    },
  });

  async function getAllNotes() {
    const response = await fetch("http://localhost:5050/note", 
      {
        method: "GET",
      }
    )
    console.log(response.json());
  }

  getAllNotes();

  async function onSubmit(values: any) {
    const response = await fetch("http://localhost:5050/note", 
      {
        method: "PUT",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      }
    )
    console.log(response.json());
  }
  

  return (
    <>
      <form onSubmit={
        form.onSubmit((values) => {
          console.log(values)
          onSubmit(values);
        })
      }>
        <TextInput
          key={form.key('id')}
          {...form.getInputProps('id')}
        />
        <TextInput
          key={form.key('title')}
          {...form.getInputProps('title')}
        />
        <TextInput
          key={form.key('body')}
          {...form.getInputProps('body')}
        />
        <Group justify="flex-end" mt="md">
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </>
  )
}

export default App
