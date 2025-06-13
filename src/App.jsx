import { useEffect, useState } from "react"
import "./App.css"
import { Inputs } from "./components/inputs"
import { Story } from "./components/story"

const App = () => {
  const [adjective, setAdjective] = useState("")
  const [weapon, setWeapon] = useState("")
  const [emotion, setEmotion] = useState("")
  const [wrestler, setWrestler] = useState("")
  const [noun, setNoun] = useState("")
  const [showStory, setShowStory] = useState(false)

  useEffect(() => {
    if (adjective && weapon && emotion && wrestler && noun) {
      setShowStory(true)
    }
  }, [adjective, weapon, emotion, wrestler, noun])

  return (
    <>
      <Inputs
        setAdjective={setAdjective}
        setWeapon={setWeapon}
        setEmotion={setEmotion}
        setWrestler={setWrestler}
        setNoun={setNoun}
      />
      {showStory ? (
        <Story
          adjective={adjective}
          weapon={weapon}
          emotion={emotion}
          wrestler={wrestler}
          noun={noun}
        />
      ) : (
        "Fill in all words to read the story!"
      )}
    </>
  )
}

export default App
