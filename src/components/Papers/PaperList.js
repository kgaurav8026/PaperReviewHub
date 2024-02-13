import PaperItems from './PaperItem';
import classes from './PaperList.module.css'
function PaperList(props){
    return (
        <ul className={classes.list}>
            {props.paperDetails.map((details)=>(
                <PaperItems key={details.id}
                id={details.id}
                imageLink = {details.imageLink}
                courseName={details.courseName}
                faculty={details.faculty}
                questionPaperLink={details.questionPaperLink}
                />
            ))}
        </ul>
    );
}
export default PaperList;