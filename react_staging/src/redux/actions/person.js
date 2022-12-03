import { ADD_PERSON } from '../constant';

const addPerson = personObj => ({ type: ADD_PERSON, data: personObj })


export {
  addPerson
}
