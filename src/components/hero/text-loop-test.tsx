import { TextLoop } from "../motion-primitives/text-loop";

export function TextLoopTest() {
  return (
    <div className=" whitespace-pre-wrap font-semibold font-mono tracking-wider text-sm lg:text-xl hidden lg:block text-sky-500">
      I build and develop websites using{" "}
      <TextLoop
        className="overflow-y-clip"
        transition={{
          type: "spring",
          stiffness: 900,
          damping: 80,
          mass: 10,
        }}
        variants={{
          initial: {
            y: 20,
            rotateX: 90,
            opacity: 0,
            filter: "blur(4px)",
          },
          animate: {
            y: 0,
            rotateX: 0,
            opacity: 1,
            filter: "blur(0px)",
          },
          exit: {
            y: -20,
            rotateX: -90,
            opacity: 0,
            filter: "blur(4px)",
          },
        }}
      >
        <span className="text-pink-500">TypeScript</span>
        <span className="text-teal-400">Next.js</span>
        {/* <span>TailwindCSS</span>
        <span>Framer Motion</span>
        <span>Shadcn UI</span>
        <span>Zustand</span> */}
        {/* <span className="text-sky-500">Laravel for API</span> */}
      </TextLoop>
    </div>
  );
}
