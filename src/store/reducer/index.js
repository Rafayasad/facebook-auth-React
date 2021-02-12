
const INITIAL_STATE = {
    users:[
        {
            name:'rafay asad',
            email:'asad@gamil.com'
        },
        {
            name:'hamad rizvi',
            email:'hamad@gamil.com'
        }
    ]
}

export default (state = INITIAL_STATE , action)=>{
    console.log("action==>",action);
    switch(action.type){
        case 'SETDATA':
            return({
                ...state,
                users:[...state.users,action.user]
            })
    }
    return state;
}