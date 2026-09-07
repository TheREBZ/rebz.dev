import { useRef, useState } from "react";
import "../../styles/RebzLogo.css";

const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#@$%";

const RebzLogo = () => {
  const [text, setText] = useState("[REBZ]");
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  const handleClick = () => {
    if (isRunning) return;

    setIsRunning(true);

    let iteration = 0;
    const target = "[REBZ]";

    intervalRef.current = setInterval(() => {
      setText(
        target
          .split("")
          .map((letter, index) => {
            if (letter === "[" || letter === "]") {
              return letter;
            }

            if (index < iteration) {
              return target[index];
            }

            return chars[
              Math.floor(Math.random() * chars.length)
            ];
          })
          .join("")
      );

      iteration += 0.5;

      if (iteration >= target.length) {
        clearInterval(intervalRef.current);
        setText(target);
        setIsRunning(false);
      }
    }, 50);
  };

  return (
    <span
      className="rebz-logo"
      onClick={handleClick}
    >
      {text}
    </span>
  );
};

export default RebzLogo;