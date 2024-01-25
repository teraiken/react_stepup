export const Practice3 = () => {
  const getTotalFree = (num: number): number => {
    return num * 1.1;
  };

  const onClickPractice = () => {
    let total: number = 0;
    total = getTotalFree(1000);
    alert(total);
  };

  return (
    <div>
      <p>練習問題:変数の型指定</p>
      <button onClick={onClickPractice}>練習問題3を実行</button>
    </div>
  );
};
