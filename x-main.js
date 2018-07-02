// Variable with all students details listed
const studentList = document.getElementById('all-students').querySelectorAll('.student-item')
// Variable with total number of students
let noOfStudents = studentList.length;
const pageSize = 10;
let pageNumber = 1;
// Calculate number of required paged based on number of students
let noOfPages = Math.ceil(noOfStudents / pageSize);

function showPage (studentList, pageNumber) {
  // first hide all students on the page
  $(studentList).hide();
    // Then loop through all students in our student list argument
    for (let i = 0; i < noOfStudents; i += 1) {
      // if student should be on this page number
      if (i >= pageSize * (pageNumber -1) && i < pageSize * pageNumber) {
        // show the student
        $(studentList[i]).show();
          }
        }
    };

showPage(studentList, pageNumber);

function appendPageLinks (noOfStudents, noOfPages) {
  // add div to contain the pagination detail
  $('.page').append("<div class='pagination'> </div>")
  // add unordered list for page numbers
  $('.pagination').append("<ul> </ul>")
  // Loop through all page numbers
    for (let i = 1; i <= noOfPages; i += 1) {
  // Prevents pagination if only one page
      if (noOfPages === 1) {
        return
      } else {
      let currentPage = i;
      // add list item for each page number
      $('.pagination ul').append(
        "<li> <a href='#'>" + currentPage + "</a> </li>");
      }
    }
    // event listener on all pagination links
    $('ul li a').click(function (e) {
      // remove current class from all links
      $('ul li a.active').removeClass('active');
      // add current class to clicked link
      $(this).closest('a').addClass('active');
      // set page number to clicked page number
      pageNumber = $('.active').text();
      // change text data to integer
      pageNumber = parseInt(pageNumber);
      // run showPage function, requesting to show students from clicked page number
      showPage(studentList, pageNumber);
    })
};

appendPageLinks(noOfStudents, noOfPages);

$('.page-header').append("<form id='sf' class='student-search'></form>");
const form = getElementById('sf');
const searchText = $('<input>').attr({type: 'text', placeholder: "Search Students"});
const searchButton = $('<input>').attr({type: 'submit', value: 'Submit'});

form.append(searchText);
form.append(searchButton);
$('.page-header').append(form);

searchButton.addEventListener('submit', (e) => {
  const text = input.value;
  const result = text.toUpperCase();

  // function searchList () {
  //   $(studentList).hide();
  // // Loop through students, showing those which match, hiding others.
  //   for (let i = 0; i < noOfStudents; i += 1) {
  //     if (studentList[i]) {
  //       // show the student
  //       $(studentList[i]).show();
  //
  //   }
  //   $('.pagination').hide();
  // }
  // searchList();
});
