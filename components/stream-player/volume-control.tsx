"use client";

import { Volume1, Volume2, VolumeX } from "lucide-react";
import Hint from "../hint";
import { Slider } from "../ui/slider";

interface VolumnControlProps {
  onChange: (volume: number) => void;
  onToggle: () => void;
  value: number;
}

export const VolumeControl = ({ onChange, onToggle, value }: VolumnControlProps) => {
  const isMuted = value === 0;
  const isAboveHalf = value > 50;

  let Icon = Volume1;

  if(isMuted) {
    Icon = VolumeX;
  }else if(isAboveHalf) {
    Icon = Volume2;
  }

  const label = isMuted ? "Unmute" : "Mute";

  const handleChange = (val: number[]) => {
    onChange(val[0]);
  };

  return (
    <div className="flex items-center gap-2" >
      <Hint label={label} asChild>
        <button onClick={onToggle} className="text-white p-1.5 hover:bg-white/10 rounded-lg">
          <Icon className="h-6 w-6" />
        </button>
      </Hint>
      <Slider
        className="w-[8rem] cursor-pointer"
        onValueChange={handleChange}
        value={[value]}
        max={100}
        step={1}
      />
    </div>
  );
};
