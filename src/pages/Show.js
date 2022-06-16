import { useState } from 'react';

const Show = (props) => {
    const avatarURL = "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
    const id =  props.match.params.id;
    const person = props.people.find(p => p._id === id);
    const [ editForm, setEditForm ] = useState(person);
   /* 
   {
    _id: asfds
    name: Paul
    title: SE
    image: httpptpsdgdf
   }
   */

    const handleChange = (event) => {
            setEditForm({
                ...editForm,
                [event.target.name]: event.target.value
            });
    };

    const handleSubmit = (event) => {
        // 1) prevent default behavior of a form submission
            event.preventDefault();
            const { name, title, image, _id } = editForm;
            props.updatePeople({name, title, image}, _id)
    };


    const handleRemovePerson = (id) => {
        props.deletePeople(id);
        props.history.push('/');
    }




    return (
        <div className='person'>
            <h1>{person.name}</h1>
            <h2>{person.title}</h2>
            {
                    person.image
                    ? <img src={person.image} alt={person.name} /> 
                    : <img src={avatarURL} alt="placeholder" />        
            }
            <button onClick={() => handleRemovePerson(person._id)}>Delete</button>
            <form onSubmit={handleSubmit}>
                <input name="name" type="text" value={editForm.name} onChange={handleChange}/>
                <input name="title" type="text" value={editForm.title} onChange={handleChange}/>
                <input name="image" type="text" value={editForm.image} onChange={handleChange}/>
                <input type="submit" value="Update" />
            </form>
        </div>
    )
};

export default Show;