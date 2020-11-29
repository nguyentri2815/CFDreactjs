// https://www.cfdtraining.vn/api/danh-sach-khoa-hoc : GET khoa hoc
// https://www.cfdtraining.vn/api/contact: POST - name, phone, email, title, content
// https://www.cfdtraining.vn/api/cap-nhat-thong-tin-ca-nhan: POST - name, phone, email, facebook
// https://www.cfdtraining.vn/api/dang-ky-khoa-hoc : POST - name, phone, email, facebook
// https://www.cfdtraining.vn/api/dang-nhap : POST - username, password
// https://www.cfdtraining.vn/api/hoc-vien-khoa-hoc: GET

// GET khoa hoc

async function khoahoc(){
    let res = await fetch('https://www.cfdtraining.vn/api/danh-sach-khoa-hoc')
    .then(res => res.json())
    let htmlOnline ='';
    let htmlOffline ='';
    console.log(res);
    for (let i in res){
        let thubnail =JSON.parse(res[i].thubnail)
        if(res[i].course_type="online"){
            htmlOnline+= ` <div class="col-md-4">
                        <div class="box-thumb">
                            <div class="box-thumb__img"><img class="img" src="https://www.cfdtraining.vn/${thubnail.link}" alt="">
                                <div class="box-thumb__overlay">
                                    <div class="box-thumb__overlay-icon">
                                        <ul>
                                            <li><img src="./images/home/user.png" alt=""><span>12</span></li>
                                            <li><img src="./images/home/heart.png" alt=""><span>100</span></li>
                                        </ul>
                                    </div><a class="box-thumb__viewmore" href=""><img src="./images/home/viewmore.svg" alt=""></a>
                                </div>
                            </div>
                            <div class="box-thumb__content">
                                <h3><a href="">${res[i].title}</a></h3>
                                <p>${res[i].short_description}</p>
                            </div>
                            <div class="box-thumb__author">
                                <div class="author">
                                    <div class="author-img"><img src="./images/home/avt.jpg" alt=""></div>
                                    <h4>${res[i].cfd_teacher[0].title}</h4>
                                </div>
                                <div class="author-btn"><a href="">Đăng ký</a></div>
                            </div>
                        </div>
                    </div>`
        }
        if(res[i].course_type="offline"){
            htmlOffline+= ` <div class="col-md-4">
                        <div class="box-thumb">
                            <div class="box-thumb__img"><img class="img" src="https://www.cfdtraining.vn/${thubnail.link}" alt="">
                                <div class="box-thumb__overlay">
                                    <div class="box-thumb__overlay-icon">
                                        <ul>
                                            <li><img src="./images/home/user.png" alt=""><span>12</span></li>
                                            <li><img src="./images/home/heart.png" alt=""><span>100</span></li>
                                        </ul>
                                    </div><a class="box-thumb__viewmore" href=""><img src="./images/home/viewmore.svg" alt=""></a>
                                </div>
                            </div>
                            <div class="box-thumb__content">
                                <h3><a href="">${res[i].title}</a></h3>
                                <p>${res[i].short_description}</p>
                            </div>
                            <div class="box-thumb__author">
                                <div class="author">
                                    <div class="author-img"><img src="./images/home/avt.jpg" alt=""></div>
                                    <h4>${res[i].cfd_teacher[0].title}</h4>
                                </div>
                                <div class="author-btn"><a href="">Đăng ký</a></div>
                            </div>
                        </div>
                    </div>`
        }
    }
    document.querySelector('.home-course__online .row').innerHTML=htmlOnline;
    document.querySelector('.home-course__offline .row').innerHTML=htmlOffline;
}
khoahoc();

// ============================
// post contact
function contact(){
    let name="tri";
    let phone="0969473360";
    let email="nguyentri2815@gmail.com"
    let title="nguyen van tri"
    let content="blu ble bla"
    fetch('https://www.cfdtraining.vn/api/contact',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name,
            phone,
            email,
            title,
            content
            
        })
    })
    .then( res => res.json())
}
contact();
// ============================
// post thong tin ca nhan
function myinfo(){
    let name="tri";
    let phone="0969473360";
    let  email="nguyentri2815@gmail.com";
    let facebook="fb/ngueyntri2815";
    fetch('https://www.cfdtraining.vn/api/cap-nhat-thong-tin-ca-nhan',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name,
            phone,
            email,
            facebook
        })
    })
    .then( res => res.json())
    // .then (res=>{
    //     console.log(res);
    // })
}
myinfo();
// ============================
// post đang ky khoa hoc
function dangkykhoahoc(){
    let name="tri";
    let phone="0969473360";
    let  email="nguyentri2815@gmail.com";
    let facebook="fb/ngueyntri2815";
    fetch('https://www.cfdtraining.vn/api/dang-ky-khoa-hoc',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name,
            phone,
            email,
            facebook
        })
    })
    .then( res => res.json())
}
dangkykhoahoc()
// ============================
// post dang nhap
function dangnhap(){
    let username="vantri";
    let password="0969473360";
    fetch('https://www.cfdtraining.vn/api/dang-nhap',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username,
            password
        })
    })
    .then( res => res.json())
}
dangnhap()
// ============================
// get hoc vien
async function hocvien(){
    let res = await fetch('https://www.cfdtraining.vn/api/hoc-vien-khoa-hoc')
    .then(res => res.json())
    console.log(res);
}
hocvien();