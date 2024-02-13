import classes from "./PaperItems.module.css";
import Card from "../ui/Card";

function PaperItems(props) {
  return (
    <li className={classes.items}>
      <Card>
        <div className={classes.content}>
          <h3>{props.id}</h3>
          <h3>{props.courseName}</h3>
          <div>{props.faculty}</div>
        </div>
        <div className={classes.image}>
          <img src={props.imageLink} alt={props.courseName} />
        </div>
        <div className={classes.image}>
          <img src={props.questionPaperLink} alt={props.courseName} />
        </div>
        <div className={classes.actions}>
          <button>Reviewed</button>
        </div>
      </Card>
    </li>
  );
}
export default PaperItems;
