const Head = (
  <div className="w-[50px] h-[50px] rounded-full border-[4px] border-black absolute top-[50px] right-[-21px]" />
);

const Body = (
  <div className="w-[8px] h-[145px] bg-black absolute top-[100px] right-0" />
);

const RightArm = (
  <div className="w-[100px] h-[10px] bg-black absolute top-[150px] right-[-90px] rotate-[-30deg] origin-left-bottom" />
);

const LeftArm = (
  <div className="w-[100px] h-[10px] bg-black absolute top-[150px] right-[0px] rotate-[30deg] origin-right-bottom" />
);

const RightLeg = (
  <div className="w-[100px] h-[10px] bg-black absolute top-[280px] right-[-20px] rotate-[-60deg] origin-left-bottom" />
);

const LeftLeg = (
  <div className="w-[100px] h-[10px] bg-black absolute top-[280px] right-[-70px] rotate-[60deg] origin-right-bottom" />
);
const Body_parts= [Head, Body, RightArm, LeftArm, RightLeg, LeftLeg]

type HangingDrwaingProps={
    numberOfGuess: number
}

const HangmanDrawing = ({numberOfGuess}: HangingDrwaingProps ) => {
  return (
    <div className="relative">
     {
        Body_parts.slice(0, numberOfGuess)
     }

      <div className="absolute top-0 right-0 h-[50px] w-[10px] bg-black" />
      <div className="ml-[120px] h-[10px] w-[200px] bg-black" />
      <div className="ml-[120px] h-[400px] w-[10px] bg-black" />
      <div className="h-[10px] w-[250px] bg-black" />
    </div>
  );
};

export default HangmanDrawing;
