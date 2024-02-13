import PaperList from "../components/Papers/PaperList";
const paperDetails = [
  {
    id: 1,
    courseName: 'Introduction to React',
    imageLink: 'https://images.pexels.com/photos/3640930/pexels-photo-3640930.jpeg',
    faculty: 'John Doe',
    questionPaperLink: 'https://example.com/react_question_paper.pdf',
  },
  {
    id: 2,
    courseName: 'Advanced JavaScript',
    imageLink:'https://images.pexels.com/photos/3640930/pexels-photo-3640930.jpeg',
    faculty: 'Jane Smith',
    questionPaperLink: 'https://example.com/js_question_paper.pdf',
  },
  {
    id: 3,
    courseName: 'Web Development Basics',
    imageLink: 'https://images.pexels.com/photos/3640930/pexels-photo-3640930.jpeg' ,
    faculty: 'Mark Johnson',
    questionPaperLink: 'https://example.com/webdev_question_paper.pdf',
  },
 
];


function ReviewPapers() {
  return (
    <section>
    <PaperList paperDetails={paperDetails}/>
    </section>
      
  );
}

export default ReviewPapers;
