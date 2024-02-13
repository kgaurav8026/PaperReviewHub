import Card from "../ui/Card";
import { useRef } from "react";
import classes from "./NewPaperForm.module.css";
import { app } from "../../base";

function NewPaperForm(props) {
  //for uploading file
  const onChange = (e) => {

    const file = e.target.files[0];
    const storageRef = app.storage().ref(); // Ensure app is correctly initialized
    const fileRef = storageRef.child(file.name);
    fileRef.put(file).then(() => {
      console.log("Uploaded a file");
    });
  };
  const idInputRef = useRef();
  const courseNameInputRef = useRef();
  const facultyInputRef = useRef();
  const imageLinkInputRef = useRef();
  const questionPaperLinkInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredId = idInputRef.current.value;
    const enteredcourseName = courseNameInputRef.current.value;
    const enteredfaculty = facultyInputRef.current.value;
    const enteredimageLink = imageLinkInputRef.current.value;
    const enteredquestionPaperLink = questionPaperLinkInputRef.current.value;

    const paperDetails = {
      id: enteredId,
      courseName: enteredcourseName,
      faculty: enteredfaculty,
      imageLink: enteredimageLink,
      questionPaperLink: enteredquestionPaperLink,
    };

    props.onAddPaper(paperDetails);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <h1>Add New Paper</h1>
        <div className={classes.control}>
          <label htmlFor="id">Id</label>
          <input type="text" required id="id" ref={idInputRef} />
          <label htmlFor="coursename">CourseName</label>
          <input
            type="text"
            required
            id="coursename"
            ref={courseNameInputRef}
          />
          <label htmlFor="faculty">Faculty</label>
          <input type="text" required id="faculty" ref={facultyInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="imageLink">imageLink</label>
          <input type="url" required id="imageLink" ref={imageLinkInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="questionpaperlink">questionPaperLink</label>
          <input
            type="url"
            required
            id="questionpaperlink"
            ref={questionPaperLinkInputRef}
          />
        </div>
        <div className={classes.actions}>
          <button>Add Paper</button>
        </div>
      </form>
      <div className={classes.fileinputcontainer}>
        <input
          type="file"
          id="fileInput"
          className={classes.hidden}
          onChange={onChange}
        />
        <label htmlFor="fileInput" className={classes.custombutton}>
          Choose a File
        </label>
      </div>
    </Card>
  );
}
export default NewPaperForm;
