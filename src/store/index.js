import { configureStore } from "@reduxjs/toolkit";
import sessionSlice from './session';
// import perksSlice from "./perks-slice";
// import conditionSlice from "./condition-slice";
// import profSlice from "./proficiencies-slice";
// import gearSlice from "./gear-slice";
// import pcSlice from "./pc-slice";
// import skillsSlice from "./skills-slice";
// import spellsSlice from "./spells-slice";

const store = configureStore({
    reducer: { 
        sessionSlice: sessionSlice.reducer,
        // charStats: charStatSlice.reducer,
        // condition: conditionSlice.reducer,
        // perks: perksSlice.reducer,
        // proficiencies: profSlice.reducer,
        // gear: gearSlice.reducer,
        // skills: skillsSlice.reducer,
        // spells: spellsSlice.reducer,
    }
});

export default store;