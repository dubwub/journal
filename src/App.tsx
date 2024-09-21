import { useState } from 'react'
import { useForm } from '@mantine/form'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { feelings_wheel, flat_emotions, base_emotions, color_map } from './utils/feelings-wheel';
import { Button, Input, Tabs, TextInput } from '@mantine/core';
import { getHotkeyHandler } from '@mantine/hooks';

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

  const [journalInput, setJournalInput] = useState("")
  const [journal, setJournal] = useState<any[]>([])
  function submit() {
    setJournal([...journal, journalInput]);
  }

  return (
    <>
      <Tabs>
        <Tabs.List>
          <Tabs.Tab value="journaltest">Journal (test)</Tabs.Tab>
          <Tabs.Tab value="feelingswheeltest">Feelings Wheel (test)</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="journaltest">
          <>
            <TextInput 
                onKeyDown={getHotkeyHandler([
                  ['Enter', submit],
                ])}
                onChange={(e) => setJournalInput(e.target.value)}
            ></TextInput>
            {JSON.stringify(journal)}
          </>
        </Tabs.Panel>
        <Tabs.Panel value="feelingswheeltest">
          <>
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
        </Tabs.Panel>
      </Tabs>
    </>
  )
}

export default App
