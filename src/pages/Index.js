import { useState } from 'react';
import { Link } from 'react-router-dom';

const Index = (props) => {
    
    const [newForm, setNewForm ] = useState({
        name: "",
        title: "",
        image: ""
    });

    const handleChange = (event) => {
        setNewForm({
            ...newForm,
            [event.target.name]: event.target.value
        });
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        props.createPeople(newForm);
    };

    const loaded = () => {
        return props.people.map(person => (
            <div key={person._id} className="person">
                <Link to={`/people/${person._id}`}>
                    <h1>{person.name}</h1>
                </Link>
                { person.image && 
                    <img src={person.image} alt={person.name} />
                }
                <h3>{person.title}</h3>
            </div>
        ));
    }
    
    const loading = () => {
        return <h1>Loading ...</h1>
    }


    return (
        <section>
            <form onSubmit={handleSubmit}>
                <input 
                    value={newForm.name} 
                    onChange={handleChange} 
                    name="name"
                    type="text" 
                />
                <input 
                    value={newForm.title} 
                    onChange={handleChange} 
                    name="title"
                    type="text" 
                />
                <input 
                    value={newForm.image} 
                    onChange={handleChange} 
                    name="image"
                    type="text" 
                />
                <input type="submit" value="Create Person" />
            </form>
            { props.people ? loaded() : loading() }
        </section>
    );
};

export default Index;