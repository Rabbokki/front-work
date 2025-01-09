function check() {
    //입력한거 그대로 유지
    event.preventDefault();
    const userId = document.querySelector("#uid");
    const email = document.querySelector('#email');
    const pwd1 = document.querySelector('#pwd1');
    const pwd2 = document.querySelector('#pwd2');
    const path = document.querySelector('#path');
    const memo = document.querySelector('#memo');
    const mailling = document.getElementsByName('mailling');
    //1. 아이디가 4~10자 인지 확인
    if (!(userId.value.length >= 4 && userId.value.length <= 10)) {
        alert('아이디는 4~10글자 입니다.')
        userId.focus();
    }

    //2. 이메일 비었는지 검사
    if (email.value.length === 0) {
        alert('이메일이 비었습니다. 입력ㄱㄱ');
        email.value = '';
        email.focus();
    }

    //3. 비밀번호와 비밀번호 확인값이 같은지 확인
    if (!(pwd1.value === pwd2.value)) {
        alert('비밀번호를 확인해주세요.')
        pwd1.focus();
    }

    //메일 수신 여부 검사
    let mailReceive;

    mailling.forEach((x) => {
        if (x.checked) {
            mailReceive = x.value;
        }
    })

    console.log('user Id : ' + userId.value);
    console.log('Email : ' + email.value);
    console.log('pwd1 : ' + pwd1.value);
    console.log('pwd2 : ' + pwd2.value);
    console.log('path : ' + path.value);
    console.log('memo : ' + memo.value);
    console.log('mail : ' + mailReceive);

    alert('가입 성공')
}
