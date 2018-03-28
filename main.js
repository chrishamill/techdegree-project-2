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
        let currentPage = i;
        // add list item for each page number
        $('.pagination ul').append(
          "<li> <a href='#'>" + currentPage + "</a> </li>");
      }
      // event listener on all pagination links
      $('ul li a').click(function (e) {
        // remove current class from all links
        $('ul li.current').removeClass('current');
        // add current class to clicked link
        $(this).closest('li').addClass('current');
        // set page number to clicked page number
        pageNumber = $('.current a').text();
        // change text data to integer
        pageNumber = parseInt(pageNumber);
        // run showPage function, requesting to show students from clicked page number
        showPage(studentList, pageNumber);
      })
};

appendPageLinks(noOfStudents, noOfPages);
