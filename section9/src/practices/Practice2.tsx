export const Practice2 = () => {
  const getTotalFree = (num: number): number => {
    return num * 1.1;
  };

  const onClickPractice = () => console.log(getTotalFree(1000));

  return (
    <div>
      <p>練習問題:返却値の型指定</p>
      <button onClick={onClickPractice}>練習問題2を実行</button>
    </div>
  );
};
