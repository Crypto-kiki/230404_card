function Card({ symbol, score }) {
  return (
    <div
      className={`relative w-24 h-36 flex justify-center items-center border-2 ${
        symbol === "♠︎" || symbol === "♣︎"
          ? "border-black text-black"
          : "border-red-500 text-red-500"
      }`}
    >
      <div className="absolute top-0 left-0 m-1">{symbol}</div>
      <div>{score}</div>
      <div className="absolute bottom-0 right-0 m-1">{symbol}</div>
    </div>
  );
}

// 위 방법은 구조분해 방법임. props로 써도 됨.

export default Card;
