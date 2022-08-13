import {
    MAINMENUDATA, NORMALREQUESTSMENU, SAVEMAINMENUDATA, SAVENORMALREQUESTSMENU, SAVETSCREQUESTSMENU, TSCREQUESTSMENU, 
} from '../constants/AdvanceRequests'

export const getAdvanceRequestMainMenu = () => {
    return {
        type: MAINMENUDATA
    }
}

export const saveAdvanceRequestMainMenu = (advanceRequestMainMenu) => {
    return {
        type: SAVEMAINMENUDATA,
        advanceRequestMainMenu
    }
}

export const getNormalRequestsMainMenu = () => {
    return {
        type: NORMALREQUESTSMENU
    }
}

export const saveNormalRequestsMainMenu = (normalRequestMainMenu) => {
    return {
        type: SAVENORMALREQUESTSMENU,
        normalRequestMainMenu
    }
}

export const getTscMainMenu = () => {
    return {
        type: TSCREQUESTSMENU
    }
}

export const saveTSCMainMenu = (tscRequestMainMenu) => {
    return {
        type: SAVETSCREQUESTSMENU,
        tscRequestMainMenu
    }
}