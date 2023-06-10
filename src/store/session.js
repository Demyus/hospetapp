import { createSlice } from "@reduxjs/toolkit";

const sessionSlice = createSlice({
    name: 'session',
    initialState: {
        loggedIn: false,
    },
    reducers: {
        logIn(state) {
            state['loggedIn'] = true;
        },
        logOff(state) {
            state['loggedIn'] = false;
        },
        addPerk(state, action) {
           const perk = action.payload;
           state[perk.slot] = perk.id;
        },
        removePerk(state, action) {
            const id = action.payload;
            //remove perk
            state.perks = state.perks.filter(perk => perk.id !== id )
            
        },
        addSlot(state) {            
            state.slots = state.slots + 1;
        },
        removeSlot(state) {            
            state.slots = state.slots - 1;
        }
    }
})

export const sessionActions = sessionSlice.actions;
export default sessionSlice;