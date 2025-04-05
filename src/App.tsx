import { useCallback, useEffect, useState } from "react"
import HangmanDrawing from "./HangmanDrawing"
import HangmanWord from "./HangmanWord"
import Keyboard from "./Keyboard"
import words from "./wordList.json"

const App = () => {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)]
  })

  const [guessedWords, setGuessedWords] = useState<string[]>([])

  const incorrectLetters = guessedWords.filter(
    letter => ! wordToGuess.includes(letter)
  )

  const isLoser = incorrectLetters.length >= 6
  const isWinner = wordToGuess.split("").every(letter => guessedWords.includes(letter))
  
  const addGuessWord= useCallback((letter: string) =>{
    if(guessedWords.includes(letter) || isLoser || isWinner ) return letter

    setGuessedWords(prev => [...prev, letter])
  }, [guessedWords, isLoser, isWinner])

  useEffect(()=>{
   
    const handler = (e: KeyboardEvent)=>{
      const key = e.key
      if(!key.match(/^[a-z]$/)) return
      e.preventDefault();
      setGuessedWords([])
      addGuessWord(key)
    }
    document.addEventListener("keypress", handler)
    return ()=>{
      document.removeEventListener("keypress", handler)
    }
  }, [guessedWords])

  return (
    <div className="flex flex-col gap-2 mx-auto max-w-[800px] items-center">
      <div className="text-xl text-center mb-4">
       {isWinner && "Winner! - Refresh to play Again "}
      {isLoser && "You Lost! - Nice Try Refresh to play Again"}
      </div>
      <HangmanDrawing numberOfGuess={incorrectLetters.length}  />
      <HangmanWord guessLetters={guessedWords} wordToGuess={wordToGuess}   />
      <Keyboard 
      disable ={isLoser || isWinner}
      activeLetter={guessedWords.filter(letter=> wordToGuess.includes(letter))}
      inactiveLetter={incorrectLetters}
      addGuessedLetter={addGuessWord}
      />
    </div>
  )
}

export default App
