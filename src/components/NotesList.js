import { useEffect, useState } from "react";

const NotesList = () => {

    const [notes, setNotes] = useState([]);

    useEffect((e) => {

        fetch('http://localhost:3004/items')
            .then(res => res.json())
            .then(data => setNotes(data))
    }, [])

    const del = (id) => {
        fetch(`http://localhost:3004/items/${id}`, {
            method: 'DELETE'
        });
    }

    // Edit

  

    return (
        <div className="container">
            <div>
                <table className="table table-bordered">
                    <thead className="thead-dark">
                        <th>S.No</th>
                        <th>Name</th>
                        <th>Actions</th>
                    </thead>
                    <tbody>
                        {notes.map(n => {
                            return (
                                <tr key={n.id}>
                                    <td>{n.id}</td>
                                    <td>{n.note}</td>
                                    <td>
                                        <div className="btn">
                                            <button className="btn btn-primary"> Edit</button>
                                            <button className="btn btn-danger" onClick={() => del(n.id)}> Delete</button>
                                        </div>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>

        </div>
    );
}

export default NotesList;