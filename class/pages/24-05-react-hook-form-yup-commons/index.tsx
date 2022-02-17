import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Button01 from "../../src/components/commons/buttons/01";
import Input01 from "../../src/components/commons/inputs/01";

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
    mode: "onChange",
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

      {/* 이메일: <input type="text" {...register("myEmail")} /> <br /> */}
      <Input01 type="text" register={register("myEmail")} />
      <div>{formState.errors.myEmail?.message}</div>

      {/* 비밀번호: <input type="text" {...register("myPassword")} /> <br /> */}
      <Input01 type="password" register={register("myPassword")} />
      <div>{formState.errors.myPassword?.message}</div>

      <Button01 type="submit" isValid={formState.isValid} name="로그인" />
    </form>
  );
}
