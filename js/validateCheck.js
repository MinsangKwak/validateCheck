"use strict";

const userName = document.querySelector("#userName");
const userNameVal = document.querySelector("#userName").value;
const userNameNotice = document.querySelector(".notice");
const btnSubmit = document.querySelector("#btnSubmit");

const message = {
  succes: "회원가입이 완료되었습니다.",
  fail: "회원가입이 실패하였습니다.",
  none: "이름 입력은 필수입니다.",
  min: "이름 길이는 2자 이상이여야 합니다.",
  space: "공백 없이 입력해 주세요.",
  wrong: "입력형식이 올바르지 않습니다.",
};

btnSubmit.addEventListener("click", function () {
  submitForm();
});

// submitForm
function submitForm() {
  if (checkUserName() == true) {
    alert(message.success);
  } else {
    alert(message.fail);
  }
}

function checkUserName() {
  // 이름 유효성 검사, 숫자 포함안됨 영어 한글만 됨

  const patternNum = /[0-9]/; // 숫자 패턴
  const patternEng = /[a-zA-Z]/; // 영문 패턴
  const patternKor = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/; // 한글 패턴
  const patternSpc = /[~!@#$%^&*()_+|<>?:{}]/; // 특수문자

  userName.focus(); // focus처리

  if (userNameVal == null || userNameVal == "") {
    alert(message.none);
    return false;
  } else if (userNameVal.length < 2) {
    alert(message.min);
  } else if (userNameVal.search(/\s/) != -1) {
    alert(message.space);
    return false;
  } else if (patternSpc.test(userNameVal)) {
    alert(message.wrong);
    return false;
  } else if (patternNum.test(userNameVal)) {
    alert(message.wrong);
    return false;
  } else if (patternKor.test(userNameVal)) {
    return true;
  } else if (patternEng.test(userName)) {
    return true;
  } else {
    return true;
  }
}
