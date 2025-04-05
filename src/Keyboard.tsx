type KeyboardProps = {
    activeLetter: string[];
    inactiveLetter: string[];
    addGuessedLetter: (letter: string) => void;
    disable?: boolean;
  };
  
  const Keyboard = ({
    activeLetter,
    inactiveLetter,
    addGuessedLetter, disable
  }: KeyboardProps) => {
    const rows = ['qwertyuiop', 'asdfghjkl', 'zxcvbnm'];
  
    return (
      <div className="flex flex-col items-center gap-1">
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="flex gap-1">
            {row.split('').map((letter, index) => {
              const isActive = activeLetter.includes(letter);
              const isInactive = inactiveLetter.includes(letter);
  
              return (
                <button
                  key={index}
                  onClick={() => addGuessedLetter(letter)}
                  disabled={isActive || isInactive || disable}
                  className={`p-2 w-10 h-10 flex items-center justify-center 
                              border-2 cursor-pointer font-bold rounded 
                              ${
                                isActive
                                  ? 'bg-green-500 text-white border-green-700'
                                  : isInactive
                                  ? 'bg-gray-400 text-white border-gray-500 cursor-not-allowed'
                                  : 'bg-[#e4e4e4] hover:bg-[hsl(200,100%,75%)] hover:text-white'
                              }`}
                >
                  {letter.toUpperCase()}
                </button>
              );
            })}
          </div>
        ))}
      </div>
    );
  };
  
  export default Keyboard;
  