/*Function การเติมอัตโนมัส Comma ","*/
function AutoComma() {
    /*รับค่าจาก User มาลบทุกอย่างที่ไม่ใข้ "ตัวเลข" และ "จุดทศนิยม"*/
    let input_Cal1 = document.getElementById('cal-1');
    let AutoComma = input_Cal1.value.replace(/[^0-9.]/g, '');

    console.log(AutoComma);
    /*---------------------------------------------------*/

    /*แบ่งส่วนทศนิยม*/
    let parts = AutoComma.split('.');
    let integerpart = parts[0];
    let decimalpart = parts.length > 1 ? '.' + parts[1] : ''
    /*---------------------------------------------------*/
    /*ให้ใส่ ',' ทุกๆจำนวนเต็ม 3 ตัว*/
    let result = "";
    let count = 0;

    for (let i = integerpart.length - 1 ; i >= 0; i--) {
        /*เก็บค่าที่ละตัว ไปเรียงใหม่*/
        let char = integerpart[i];
        console.log(char);
        /*นับครั้ง ครบ 3 ให้เติม ","*/
        count++;
        result = char + result;
        
        if(count % 3 === 0 && i > 0){
            result = "," + result;
        }
        
    }
    /*นำมารวมกัน*/
    result = result + decimalpart;
    console.log(result);
    /*นำไปแสดงผล*/
    input_Cal1.value = result
}

/*function การคำนวณและแสดงผล*/
function Calculator_1(obj) {

    console.log(obj)
}