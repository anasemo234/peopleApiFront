import { Route } from 'react-router-dom';
import { useState, useEffect } from 'react'

// page components
import Index from '../pages/Index';
import Show from '../pages/Show';



const Main = (props) => {
    const [ people, setPeople ] = useState(null);

    const URL = 'http://localhost:4000/people/';

    const getPeople = async () => {
        if(!props.user) return;
        // JSON Web Token AKA 
        const token = await props.user.getIdToken();
        
        const response = await fetch(URL, {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + token
            }
        });
        const data = await response.json();
        setPeople(data);
    }


    const createPeople = async (person) => {
            if(!props.user) return;  // if there is no user return out of the function
            const token = await props.user.getIdToken();
            await fetch(URL, {
                method: 'POST',
                headers: {
                    'Content-type': 'Application/json',
                    'Authorization': 'Bearer ' + token
                },
                body: JSON.stringify(person)
            });
            getPeople();
    };


    const updatePeople = async (updatedPerson, id) => {
        if(!props.user) return;
        const token = await props.user.getIdToken();

            await fetch(URL + id, {
                method: "PUT",
                headers: {
                    'Content-type': 'Application/json',
                    'Authorization': 'Bearer ' + token

                },
                body: JSON.stringify(updatedPerson)
            });
            getPeople();
    }

    const deletePeople = async (id) => {
        if(!props.user) return;
        const token = await props.user.getIdToken();

        // confirm deletion operations go here
        // if yes
            await fetch(URL + id, {
                method: "DELETE",
                headers: {
                    'Authorization': 'Bearer ' + token
                },

            });
            getPeople();
            // if no
                // return to previous page
    }




    useEffect(() => {
            if(props.user) {
                getPeople();
            } else {
                setPeople(null);
            }
            getPeople();
    }, [props.user]);

    return (
        <main>
                <Route exact path="/">
                    <Index  user={props.user} people={people} createPeople={createPeople} />
                    </Route>
                <Route path="/people/:id" render={(renderProps) => (
                     <Show 
                            people={people}
                            {...renderProps} 
                            updatePeople={updatePeople}
                            deletePeople={deletePeople}
                         />
                    )} />



        </main>
    )
};

export default Main;