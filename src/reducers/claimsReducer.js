

const initialState = {
  claims: {}
}

const RETRIEVE_CLAIMS = 'RETRIEVE_CLAIMS';



export default (state = initialState, action = {}) => {

    switch (action.type) {


        case RETRIEVE_CLAIMS:
            return Object.assign({}, state, {
                claims: action.payload.claims,
            });

    }

    return state
}
