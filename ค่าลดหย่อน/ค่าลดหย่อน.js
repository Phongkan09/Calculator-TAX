window.addEventListener('DOMContentLoaded', (e) => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get('code');

    console.log('password : ', code);
    if(!code) {
        console.error("ไม่พบรหัสที่ส่งมาจากหน้าหลัก!");
        return;
    }

    let myCode, text
    if(code === 'spouse-1' || code === 'child-1' || code === 'momdad-1' || code === 'social-1') {
        myCode = 1;
    } else {
        myCode = 2;
    }

    if(code === 'spouse-1' || 'spouse-2') {
        text = 'คู่สมรส';
    } else if (code === 'child-1' || 'child-2') {
        text = 'บุตร';
    } else if (code === 'momdad-1' || 'momdad-2') {
        text = 'บิดา-มารดา';
    } else if (code === 'social-1' || 'social-2') {
        text = 'เงินประกันสังคม';
    }
    

    if(myCode == 1) {
        const link = document.getElementById('Click');
        link.innerHTML = '<div>Add</div>';
        link.classList.remove('done')

        link.addEventListener('click', function(obj) {
            //หยุดการทำงานปกติของลิงก์ก่อน
            obj.preventDefault(); 

            Swal.fire({
                title: 'คุณแน่ใจไหม?',
                text: "คุณต้องการเพิ่มค่าลดหย่อน" + text + "ใช่ไหม",
                icon: 'question', // รูปไอคอน (warning, error, success, info, question)
                showCancelButton: true,
                confirmButtonColor: '#3085d6', // สีปุ่มยืนยัน
                cancelButtonColor: '#d33',     // สีปุ่มยกเลิก
                confirmButtonText: 'Add',
                cancelButtonText: 'Cancel'
            }).then((result) => {
                if (result.isConfirmed) {
                    window.location.href = link.href + '?item=' + code;
                    console.log('ไปแล้วนะ');
                    console.log('Add')
                } else {
                    console.log('แย่จัง')
                }
            })
        })
    } else if(myCode == 2) {
        const link = document.getElementById('Click');
        link.innerHTML = '<div>Remove</div>';
        link.classList.add('done')

        link.addEventListener('click', function(obj) {
            //หยุดการทำงานปกติของลิงก์ก่อน
            obj.preventDefault(); 

            Swal.fire({
                title: 'คุณแน่ใจไหม?',
                text: "คุณต้องการลบค่าลดหย่อน" + text + "ใช่ไหม",
                icon: 'question', // รูปไอคอน (warning, error, success, info, question)
                showCancelButton: true,
                confirmButtonColor: '#3085d6', // สีปุ่มยืนยัน
                cancelButtonColor: '#d33',     // สีปุ่มยกเลิก
                confirmButtonText: 'Remove',
                cancelButtonText: 'Cancel'
            }).then((result) => {
                if (result.isConfirmed) {
                    window.location.href = link.href + '?item=' + code;
                    console.log('ไปแล้วนะ');
                    console.log('Remove')
                } else {
                    console.log('แย่จัง')
                }
            })
        })
    }

    /*------------------------------------------------------------------------------------*/
    
})

function AutoAdddate(obj) {
    let num = obj.value.replace(/[^0-9]/g, '');
    console.log(num)
    obj.value = num

    
}
