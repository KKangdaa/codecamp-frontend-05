export const CheckFileValidation = (file?: File) => {
  if (!file?.size) {
    // file?.size으로 했을 때 조건이 중복 될 수 있다 (if문이 try catch를 감싼다)
    alert("파일이 존재하지 않습니다.");
    return false;
  }

  if (file.size > 5 * 1024 * 1024) {
    alert("파일 용량이 너무 큽니다. (제한: 5MB)");
    return false;
  }

  if (!file.type.includes("jpg") && !file.type.includes("png")) {
    alert("jpg 파일 또는 png 파일만 업로드 가능합니다.");
    return false;
  }

  return true;
};
