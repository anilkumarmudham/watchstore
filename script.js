
// document.addEventListener('DOMContentLoaded', () => {
//   new Swiper('.hero-slider', {
//     loop: true,
//     autoplay: {
//       delay: 4000,
//     },
//     pagination: {
//       el: '.swiper-pagination',
//       clickable: true,
//     },
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
//   });
// });
function grade(student1Marks, MaxMarks)
{
  let Student1percentage = (student1Marks/MaxMarks) * 100;
  let student1cGrade;

  if(Student1percentage >= 90){

    student1cGrade = "A";
  }
  else if(Student1percentage>=70){
    student1cGrade = "B";

  }
  else{
    student1cGrade = "F";
  }
  console.log(student1cGrade)
}

grade(90,100);
grade(50,100);