import { useForm } from "react-hook-form";

interface FormValues {
  myWriter?: string;
  myTitle?: string;
  myContents?: string;
}

export default function ReactHookFormPage() {
  const { register, handleSubmit /* , formState */ } = useForm();

  const onClickSubmit = (data: FormValues) => {
    // 여기서의 data는 myWriter, myTitle, myContents 등..
    console.log(data);
  };
  // rerendering이 안됨 (비제어 컴포넌트 사용한 것임)
  // 원래는 event가 발행할 때 마다 console에 찍힌것 처럼 rerendering이 되었음..(제어 컴포넌트 사용)

  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
      {/* onClickSubmit은 handleSubmit이 조종함 */}
      작성자: <input type="text" {...register("myWriter")} /> <br />
      제목: <input type="text" {...register("myTitle")} /> <br />
      내용: <input type="text" {...register("myContents")} /> <br />
      <button>등록하기</button>
      {/* button의 type에 대한 default값이 submit임
      (나만의 버튼을 만들고 싶은 경우 type='button'을 사용하면 됨 => form에 onSubmit은 작동 안되게끔) */}
    </form>
  );
}
