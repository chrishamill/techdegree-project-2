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

$('.page-header').append("<div class='student-search'></div>");
  const searchText = '<input type="text" id="myInput" placeholder="Search for names..">'
  const searchButton = '<input type="submit" id="submitText" onclick="searchList()" value="Submit">'
  $('.student-search').append(searchText);
  $('.student-search').append(searchButton);

function searchList() {
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  fullList = document.getElementById("all-students");
  li = fullList.getElementsByTagName("li");


      // $(studentList).hide();

    // Loop through students, showing those which match, hiding others.
      for (let i = 0; i < noOfStudents; i += 1) {
        td = li[i].getElementsByTagName('li')[0];
        if (td) {
if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
  tr[i].style.display = "";
} else {
  tr[i].style.display = "none";
}

        }

        // if (studentList[i] === 0) {
        //   // show the student
        //   $(studentList[i]).show();

      }
      $('.pagination').hide();
    }
    // searchList();

  ;

// $('.page-header').append("<div class='student-search'></div>");
//const searchText = $('<input>').attr({type: 'text', placeholder: "Search for students"});
// const searchButton = $('<input>').attr({type: 'submit', value: 'Submit'});
//
// searchText.append(searchButton);
// $('.student-search').append(searchText);
// $('.student-search').append(searchButton);
//
// const form = document.getElementById('sf');
//
// $(searchButton).click(function (e) {
//   const text = input.value;
//   const result = text.toUpperCase();
//   input.value = "";
//
//   function searchList (result) {
//     $(studentList).hide();
//   // Loop through students, showing those which match, hiding others.
//     for (let i = 0; i < noOfStudents; i += 1) {
//       if (studentList[i] === 0) {
//         // show the student
//         $(studentList[i]).show();
//
//     }
//     $('.pagination').hide();
//   }
//   searchList();
// }
// });
