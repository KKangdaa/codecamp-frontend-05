export default function BasketPage() {
  const basket = JSON.parse(localStorage.getItem("items"));

  return (
    <div>
      {basket.map((el, index) => (
        <div key={el._id} style={{ borderBottom: "1px solid black" }}>
          <div>게시글{[index]}</div>
          <div>제목 : {el.title}</div>
          <div>내용 : {el.contents}</div>
          <div>작성자 : {el.writer}</div>
        </div>
      ))}
    </div>
  );
}
