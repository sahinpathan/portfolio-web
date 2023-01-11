import clsx from 'clsx';
import { m } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

type AnimationValue = {
  key: number;
  x: number | Array<number>;
  y: number | Array<number>;
  duration: number;
};

function randomBetween(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

/**
 * function to generate animation values, which will be
 * mapped and animated as a framer-motion component.
 */
function getRandomAnimationValue(): AnimationValue {
  // create a random value for the component key
  const key = randomBetween(0, 1000);

  // random to x points (left and right)
  const x = randomBetween(-40, 40);

  // random to y points (top length)
  const y = randomBetween(-230, -170);

  // random duration, but calculated using the top length
  const duration = randomBetween(1.6, 1.9) + y / 1000;

  return {
    // additional: move element in the middle of the animation
    x: [0, x - randomBetween(-10, 10), x],
    y,
    duration,
    key,
  };
}

const emojiMotion = {
  initial: {
    scale: 1,
  },
  hover: {
    scale: 1.2,
  },
  tap: {
    scale: 0.8,
  },
};

interface EmojiReactionProps {
  title: string;
  defaultImage: string;
  animatedImage: string;
  onClick?: () => void;
}

function EmojiReaction({
  title,
  defaultImage,
  animatedImage,
  onClick = () => {},
}: EmojiReactionProps) {
  const [history, setHistory] = useState<Array<AnimationValue>>([]);
  const [src, setSrc] = useState<string>(defaultImage);

  return (
    <m.button
      title={title}
      aria-label={title}
      className="relative cursor-pointer select-none"
      whileTap="tap"
      whileHover="hover"
      onHoverStart={() => {
        setSrc(animatedImage);
      }}
      onHoverEnd={() => {
        setSrc(defaultImage);
      }}
      onClick={() => {
        setHistory((current) => [...current, getRandomAnimationValue()]);

        onClick();
      }}
    >
      {history.map(({ x, y, duration, key }) => (
        <m.div
          key={key}
          className="pointer-events-none absolute h-10 w-10 select-none"
          initial={{ y: 0, x: 0, opacity: 1 }}
          animate={{
            x,
            y,
            // fade out, start from the middle of animation
            opacity: [1, 1, 0],
          }}
          transition={{
            ease: 'easeOut',
            duration,
          }}
          onAnimationComplete={() => {
            // cleanup: remove from DOM
            setHistory((current) => current.filter((el) => el.key !== key));
          }}
        >
          <Image
            className={clsx('h-full w-full')}
            alt={title}
            src={animatedImage}
            width={48}
            height={48}
            unoptimized
            priority
          />
        </m.div>
      ))}

      <m.div className={clsx('h-10 w-10')} variants={emojiMotion}>
        <Image
          className={clsx('pointer-events-none h-full w-full')}
          alt={title}
          src={src}
          width={48}
          height={48}
          unoptimized
          priority
        />
      </m.div>
    </m.button>
  );
}

export default EmojiReaction;
