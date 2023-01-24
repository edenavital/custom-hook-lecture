import { useCounter } from "./hooks/useCounter";
export const CompA = (props) => {
  const { counter, setCounter } = useCounter();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <p>{` Hey from comp B, counter: ${counter}`}</p>
      <button
        style={{
          width: 50,
          height: 50,
          justifyContent: "center",
          alignItems: "center",
          marginLeft: 15,
        }}
        onClick={(e) => setCounter((prev) => prev + 1)}
      >
        INC
      </button>
    </div>
  );
};
