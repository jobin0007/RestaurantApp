import { RESTAURANT_LIST_SUCCESS } from '../consatants/retaurantConstants'



export const restaurantsListReducer = (states = { restaurants: [] }, actions) => {
    switch (actions.type) {
        case RESTAURANT_LIST_SUCCESS:
            return { restaurants: actions.payload }
        default:
            return states
    }
}