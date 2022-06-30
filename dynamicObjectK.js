//dot notation 
const person = {
    name: 'batuhan'
};

person.age = 25;

// square bracet notation
let appState = 'loading';

const app = {
    [appState]:true // { loading:true}
}


const state = {
    loading: true,
    name: '',
    job: '',
}

function updateState(key,value) {
    state[key] = value
}

updateState('name','batuhan')