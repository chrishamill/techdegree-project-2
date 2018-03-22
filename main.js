const studentList = document.querySelector('.student-list').getElementsByTagName('li');
let noOfStudents = studentList.length;
const pageNumber = function pageLength () {
    let perPage = noOfStudents[Math.floor / 10];
  return perPage;
};

function showPage (studentList, pageNumber/* arguments here for page number and student list */) {
  // first hide all students on the page
  $(studentList).hide();

    // Then loop through all students in our student list argument
      for (i = 0; i < studentList.length; i += 1) {
        if (studentList[i] < 11) {
        studentList[i].show();
      }
    }
    };
       // if student should be on this page number
       // if () {
       //
       // }
       	// show the student


showPage(studentList, pageNumber);

// };
//
// function appendPageLinks () {
//
//
// };
//
// function searchList () {
//
// };
