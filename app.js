const header = document.querySelector('.header')
const closeModalBtn = document.querySelector('.close_btn')
const section_4 = document.querySelector('.section_4')
const modalImg = document.querySelector('.modal_Img')
const nodeArr = document.querySelectorAll('.project_img')

////////  IMPLEMENT SCROLLING
header.addEventListener('click', function (e) {
  e.preventDefault();
  // Matching strategy
  if (e.target.classList.contains('direct_link')) {
    const id = e.target.getAttribute('href')
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' })
  }
});

//IMPLEMENTING IMAGE SELECTING 
let img_address;
for (let i = 0; i < nodeArr.length; i++) {
  nodeArr[i].addEventListener('click', function (e) {
    e.preventDefault()
    let img_address = nodeArr[i].getAttribute('src')
    // console.log(img_address)
    modalImg.setAttribute('src', img_address)
    section_4.classList.remove('hidden')
  })
}

//CLOSING SELECTED IMAGE
closeModalBtn.addEventListener('click', function (e) {
  e.preventDefault()
  section_4.classList.add('hidden')
})
