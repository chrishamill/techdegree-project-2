// const studentArray = document.querySelector('.student-list');
// const studentList = studentArray.getElementsByTagName('li');
const studentList = document.getElementsByTagName('li')

let noOfStudents = studentList.length;

// pageNumber will need to be linked to the class pagination and active
const pageNumber = 1;


function showPage (studentList, pageNumber/* arguments here for page number and student list */) {
  // first hide all students on the page
  $(studentList).hide();

    // Then loop through all students in our student list argument
      for (let i = 0; i < 10; i += 1) {
        console.log(studentList[i]);

        // if (studentList[i] < 11) {
        $(studentList[i]).show();
      // }
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
