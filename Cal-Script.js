/*Function การเติมอัตโนมัส Comma ","*/
function AutoComma() {
    /*รับค่าจาก User มาลบทุกอย่างที่ไม่ใข้ "ตัวเลข" และ "จุดทศนิยม"*/
    let input_Cal1 = document.getElementById('cal-1');
    let AutoComma = input_Cal1.value.replace(/[^0-9.]/g, '');

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
        /*นับครั้ง ครบ 3 ให้เติม ","*/
        count++;
        result = char + result;
        
        if(count % 3 === 0 && i > 0){
            result = "," + result;
        }
        
    }
    /*นำมารวมกัน*/
    result = result + decimalpart;
    console.log('รายได้(ต่อเดือน)', result);
    /*นำไปแสดงผล*/
    input_Cal1.value = result;
}

/*function การคำนวณและแสดงผล*/
function Calculator_1(obj) {
    //แสดงผล
    let Output = [
        document.querySelector('.item1'),
        document.querySelector('.item2')
    ];
    /*แปลงข้อมูลที่ได้ ให้เหลือแค่ ตัวเลข*/
    let value = obj.replace(/[^0-9]/g, '');

    /*รายได้ทั้งปี*/
    let income = value * 12;
    
    //แปลงเป็น String เพื่อไปใส่ Comma
    integer_income = income.toString()
    //ใส่ Comma
    result_1 = '';
    count = 0;

    for(let i = integer_income.length - 1 ; i >= 0 ; i--) {

        let char = integer_income[i];

        count++;
        result_1 = char + result_1
        if(count % 3 === 0 && i > 0) {
            result_1 = ',' + result_1;
        }
        
    }
    console.log('รายได้ทั้งปี', result_1);
    
    /*----------------------------------------------------------------------------------------*/
    //คำนวณ หักค่าใช้จ่าย
    let deduct_expenses = income*50/100

    if(deduct_expenses > 100000) {
        deduct_expenses = '100,000';
        result_2 = deduct_expenses;
    }else {
        integer_deduct_expenses = deduct_expenses.toString();
        result_2 = '';
        count = 0;

        for(let i = integer_deduct_expenses.length - 1 ; i >= 0 ; i--) {

            let char = integer_deduct_expenses[i];

            count++;
            result_2 = char + result_2;
 
            if(count % 3 == 0 && i > 0) {
                result_2 = ',' + result_2;
            }
        }
    }
    console.log('หักค่าใช้จ่ายได้', result_2)
    // แสดงผล
    Output[0].innerText = result_1;
    Output[1].innerText = result_2;
}

/*-----------------------------------------------------------------------------------------------*/
window.addEventListener('DOMContentLoaded', (event) => {
    const params = new URLSearchParams(window.location.search);
    const item = params.get('item');

    console.log(item);

    if(item === 'spouse-1') {
        let spouse = document.getElementById('spouse');
        console.log(spouse)

        spouse.classList.add('done', 'not-get');
        spouse.classList.remove('action')
        spouse.innerText = '● ค่าลดหย่อนคู่สมรส'
        spouse.href = 'ค่าลดหย่อน/คู่สมรส.html?code=spouse-2'
    }
})