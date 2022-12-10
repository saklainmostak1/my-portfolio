var typed = new Typed('.typing', {
    String: ['Fornt-End Developer', 'Mern Stack Developer', 'Web Developer'],
    typeSpeed: 40,
    BackSpeed: 30,
    loop: true
})

const nav = document.querySelector('.nav'),
navList = nav.querySelectorAll('li')
allSection = document.querySelectorAll('.section')
totalSection = allSection.length
totalNavList = navList.length
for(let i = 0; i<totalNavList; i++)
{
    // console.log(navList[i]);
    const a = navList[i].querySelector('a')
    console.log(a)
    a.addEventListener('click', function(){
        for(let j = 0; j<totalNavList; j++)
        {
            navList[j].querySelector('a').classList.remove('active')
        }
        this.classList.add('active')
        showSection(this)
    })
}
function showSection(element){
    for(let i = 0; i < totalSection; i++){
        allSection[i].classList.remove('active')
    }
  const target =  element.getAttribute('href').split('#')[1];
  console.log(target);
  document.querySelector('#' + target).classList.add('active')

}