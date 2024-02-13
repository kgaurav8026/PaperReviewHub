import NewPaperForm from "../components/Papers/NewPaperForm";

function AddPaper() {
  function addPaperHandler(paperDetails){
    fetch(
      'https://paper-review-hub-default-rtdb.asia-southeast1.firebasedatabase.app/paperDetails.json',
      {
        method : 'POST',
        body: JSON.stringify(paperDetails),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  }
  return (
    <section>
      <NewPaperForm onAddPaper={addPaperHandler} />
    </section>
  );
}

export default AddPaper;
