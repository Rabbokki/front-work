function orders() {
    //상품 선택
    event.preventDefault();
    const gift3kg = document.querySelector("#gift3kg");
    const gift3 = document.querySelector("#gift3");
    const gift5kg = document.querySelector("#gift5kg");
    const gift5 = document.querySelector("#gift5");

    const home3kg = document.querySelector("#home3kg");
    const home3 = document.querySelector("#home3");
    const home5kg = document.querySelector("#home5kg");
    const home5 = document.querySelector("#home5");

    const wrap = document.getElementsByName("wrap");
    let whatWrap;

    //배송 정보
    const name = document.querySelector("#name");
    const address = document.querySelector("#address");
    const email = document.querySelector("#email");
    const phone = document.querySelector("#phone");
    const deliveryAddress = document.querySelector("#deliveryAddress");
    const memo = document.querySelector("#memo");

    // if (gift3kg.checked) {     const gift3Value = parseInt(gift3.value, 10);
    // if (gift3Value <= 5) {         console.log('선물용 3kg ' + gift3Value + '개');
    // } else {         console.log('최대 5개만 가능합니다.');     } } if (gift5kg.checked) {
    // const gift5Value = parseInt(gift5.value, 10);     if (gift5Value <= 5) {
    // console.log('선물용 3kg ' + gift5Value + '개');     } else {
    // console.log('최대 5개만 가능합니다.');     } }

    wrap.forEach((x) => {
        if (x.checked) {
            whatWrap = x.value;
        }
    })

    function checkOn(checkBox, inputField, productName) {
        if (checkBox.checked) {
            const productValue = parseInt(inputField.value, 10);
            if (productValue <= 5) {
                console.log(`${productName} ${productValue}개`);
            } else {
                console.log(`최대 5개만 가능합니다.`);
            }
        }
    }

    checkOn(gift3kg, gift3, "선물용 3kg");
    checkOn(gift5kg, gift5, "선물용 5kg");
    checkOn(home3kg, home3, "가정용 3kg");
    checkOn(home5kg, home5, "가정용 5kg");
    console.log('포장 유무 : ' + whatWrap);

    console.log('이름 : ' + name.value);
    console.log('주소 : ' + address.value);
    console.log('이메일 : ' + email.value);
    console.log('연락처 : ' + phone.value);
    console.log('날짜 : ' + deliveryAddress.value);
    console.log('메모 : ' + memo.value);

}
