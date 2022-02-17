import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import styled from "@emotion/styled";

interface IMyButtonProps {
  isValid: boolean;
}

const MyButton = styled.button`
  background: ${(props: IMyButtonProps) => (props.isValid ? "gold" : "")};
`;

const schema = yup.object().shape({
  myEmail: yup
    .string()
    .email("이메일 형식이 적합하지 않습니다.")
    .required("이메일은 필수 입력 사항입니다."),
  // @빠지면 .email()안의 값이 출력되며, .required()은 빈 값일 경우 출력됨
  myPassword: yup
    .string()
    .min(4, "비밀번호는 최소 4자리 이상 입력 바랍니다.")
    .max(15, "비밀번호는 최대 15자리 이하 입력 바랍니다.")
    .required("비밀번호는 필수 입력 사항입니다."),
});

interface FormValues {
  myEmail?: string;
  myPassword?: string;
}

export default function ReactHookFormPage() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
  });

  const onClickSubmit = (data: FormValues) => {
    console.log(data);
  };
  // rerendering이 안됨 (비제어 컴포넌트 사용한 것임)
  // 원래는 event가 발행할 때 마다 console에 찍힌것 처럼 rerendering이 되었음..(제어 컴포넌트 사용)

  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
      {/* onClickSubmit은 handleSubmit이 조종함 */}
      이메일: <input type="text" {...register("myEmail")} /> <br />
      <div>{formState.errors.myEmail?.message}</div>
      비밀번호: <input type="text" {...register("myPassword")} /> <br />
      <div>{formState.errors.myPassword?.message}</div>
      <MyButton isValid={formState.isValid}>로그인</MyButton>
      {/* {formState.isValid}은 값이 알맞게 들어갔으면 색이 변경됨 */}
      {/* button의 type에 대한 default값이 submit임
      (나만의 버튼을 만들고 싶은 경우 type='button'을 사용하면 됨 => form에 onSubmit은 작동 안되게끔) */}
    </form>
  );
}
