import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import { Button, Checkbox, Group, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';



function App() {

  const [noteMap, setNoteMap] = useState<any>(undefined);

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
    
    const text = response.json().then((value) => {
      setNoteMap(value);
      console.log(value);
    });
  }

  async function editNoteById(id: string, title: string, body: string) {
    let fetchBody: any = {
      _id: id,
      title: title,
      body: body,
    };
    console.log(fetchBody);
    const response = await fetch("http://localhost:5050/note", 
      {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(fetchBody),
      }
    ).then((value) => {
      console.log(value);
      getAllNotes();
    })
  }

  let noteDisplay = <></>;
  if (typeof noteMap === "undefined") getAllNotes();
  else {
    let _noteDisplay = [];
    for (const [key, value] of Object.entries(noteMap)) {
      _noteDisplay.push(<>
        <TextInput value={value.title} onChange={(e: any) => {
          editNoteById(key, "potato", value.body)
        }}></TextInput>
        <TextInput value={value.body}></TextInput>
      </>);
    }
    noteDisplay = <>
      {
       _noteDisplay 
      }
    </>
  }

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
      {noteDisplay}
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
