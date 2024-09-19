import { useState } from 'react'
import { useForm } from '@mantine/form'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { feelings_wheel, flat_emotions, base_emotions, color_map } from './utils/feelings-wheel';
import { Button, Input, TextInput } from '@mantine/core';

function App() {
  const [activeEmotions, setActiveEmotions] = useState<string[]>([]);
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      test: '',
    },
  });

  // TODO: adding happy then removing it, not sure why that bug exists
  let suggestedEmotions = base_emotions;
  for (let emotion of activeEmotions) {
    if (emotion in feelings_wheel) {
      for (let secondaryEmotion of feelings_wheel[emotion]) {
        if (suggestedEmotions.includes(secondaryEmotion)) continue;
        suggestedEmotions.push(secondaryEmotion);
      }
    }
  }
  
  suggestedEmotions = suggestedEmotions.filter((emotion) => {
    return !activeEmotions.includes(emotion.emotion)
  })

  suggestedEmotions = suggestedEmotions.sort((a: any, b: any) => {
    return a.background < b.background ? 1 : -1
  })

  function addEmotion(emotion: string) {
    setActiveEmotions([...activeEmotions, emotion])
  }

  function removeEmotion(emotion: string) {
    setActiveEmotions(activeEmotions.filter((_emotion: string) => emotion !== _emotion))
  }

  return (
    <>
      {/* <TextInput
        label="Test"
        placeholder="Test"
        key={form.key('test')}
        {...form.getInputProps('test')}
      />
      <Button
          onClick={() =>
            form.setValues({
              test: ,
              email: `${randomId()}@test.com`,
            })
          }
        >
          Set random values
        </Button> */}

      {
        activeEmotions.map((_emotion) => {
          let emotion = color_map[_emotion]
          return <Button 
            color={emotion.background}
            style={{color: emotion.textColor}}
            onClick={()=>removeEmotion(emotion.emotion)}>{emotion.emotion}</Button>  
        })
      }
      <br/> <br/>

      {
        suggestedEmotions.map((emotion) => {
          return <Button color={emotion.background} style={{color: emotion.textColor}} onClick={()=>addEmotion(emotion.emotion)}>{emotion.emotion}</Button>  
        })
      }
    </>
  )
}

export default App
