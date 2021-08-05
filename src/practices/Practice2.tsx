export const Practice2 = () => {
  const getTotalFee = (num: number): number => {
    //ここの引数のnumはanyなので良くない
    const total = num * 1.1;
    return total;
  };

  const onClickPractice = () => {
    alert(getTotalFee(1000));
  };

  return (
    <div>
      <p>練習問題：返却値の型指定</p>
      <button onClick={onClickPractice}> 練習問題１を実行</button>
    </div>
  );
};
