export default function Boards(props) {
  return (
    <div>
      {props.data?.fetchBoards?.map((el) => (
        <div key={el.id}>
          {el.title} {el.writer}
        </div>
      ))}
    </div>
  );
}
