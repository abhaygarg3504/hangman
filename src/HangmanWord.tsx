type HangingManProps = {
    guessLetters: string[],
    wordToGuess: string
}

const HangmanWord = ({guessLetters, wordToGuess}: HangingManProps) => {
     return (
    <div className="flex gap-[.25em] font-bold-text-[6em] text-transform-uppercase  ">
      {
        wordToGuess.split("").map((letter, index)=>(
            <span className="border-b-[0.15em] border-black" key={index}>
                <span className={guessLetters.includes(letter) ? "visible" : "hidden"}>
                    {letter}
                </span>
            </span>
        ))
      }
    </div>
  )
}

export default HangmanWord
