import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { feelings_wheel, flat_emotions, base_emotions, color_map } from './utils/feelings-wheel';
import { Button } from '@mantine/core';

function App() {

  console.log(color_map);

  const [activeEmotions, setActiveEmotions] = useState<string[]>([]);
  
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
    setActiveEmotions([emotion, ...activeEmotions])
  }

  return (
    <>
      Active Emotions: { activeEmotions.toString() }
      {
        suggestedEmotions.map((emotion) => {
          return <Button color={emotion.background} style={{color: emotion.textColor}} onClick={()=>addEmotion(emotion.emotion)}>{emotion.emotion}</Button>  
        })
      }
    </>
  )
}

export default App
