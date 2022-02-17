import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../../../src/components/commons/input";
import Button from "../../../src/components/commons/button";

interface IData {
  writer?: string;
  password?: string;
  title?: string;
  contents?: string;
}

const schema = yup.object().shape({
  writer: yup.string().max(5, "작성자는 5글자 이내 문자열입니다.").required(),
  password: yup
    .string()
    .matches(
      /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*#?&])[a-zA-Z\d@$!%*#?&]{1,8}$/,
      "비밀번호는 영문, 숫자, 특수문자를 포함한 8자리 이내 입니다."
    )
    .required(),
  title: yup.string().max(100).required(),
  contents: yup.string().max(1000).required(),
});

export default function ReactHookForm() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
  });

  const onClickSubmit = (data: IData) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
      작성자 : <Input type="text" register={register("writer")} />
      <span>{formState.errors.writer?.message}</span>
      <br />
      비밀번호 : <Input type="password" register={register("password")} />
      <span>{formState.errors.password?.message}</span>
      <br />
      제목 : <Input type="text" register={register("title")} />
      <span>{formState.errors.title?.message}</span>
      <br />
      내용 : <Input type="text" register={register("contents")} />
      <span>{formState.errors.contents?.message}</span>
      <br />
      <Button name="등록하기" isValid={formState.isValid}></Button>
    </form>
  );
}
