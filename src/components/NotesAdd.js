import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NotesAdd = () => {

    // const notesList = [];
    const [note, setNote] = useState('');

    const submit = e => {
        e.preventDefault();

        fetch('http://localhost:3004/items', {
            method: 'POST',
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({ note })
        }).then(() => useNavigate.push('/'))

        console.log(note);
        setNote('');
    }

    return (
        <div className="jumbotron container">

            <form onSubmit={submit}>
                <div class="form-row align-items-center">
                    <div class="col-sm-3 my-1">
                        <input type="text" class="form-control" onChange={e => setNote(e.target.value)} placeholder="Add Item" />
                    </div>
                    <div class="col-auto my-1">
                        <button type="submit" class="btn btn-primary">Add</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default NotesAdd;