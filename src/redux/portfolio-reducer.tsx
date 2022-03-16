import { Dispatch } from "react";

const SHOW_ALL = 'SHOW_ALL';
const SHOW_WEB_DESIGN = 'SHOW_WEB_DESIGN';
const RESET = 'RESET';
const SHOW_GRAPHIC_DESIGN = 'SHOW_GRAPHIC_DESIGN';
const SHOW_FLAT_DESIGN = 'SHOW_FLAT_DESIGN';

interface PortfolioState {
    isPhotoIcon: boolean,
    isMusicIcon: boolean,
    isSettingsIcon: boolean,
    isCompassIcon: boolean,
    isPhoneIcon: boolean,
    isBubblesIcon: boolean,
    isPhotoIcon2: boolean,
    isMusicIcon2: boolean,
    activeButton: boolean | string,
}

interface PortfolioAction {
    type: string,
}

let initialState: PortfolioState = {
    isPhotoIcon: false,
    isMusicIcon: false,
    isSettingsIcon: false,
    isCompassIcon: false,
    isPhoneIcon: false,
    isBubblesIcon: false,
    isPhotoIcon2: false,
    isMusicIcon2: false,
    activeButton: false,
};

const portfolioReducer = (state = initialState, action: PortfolioAction): PortfolioState => {

    switch (action.type) {

        case SHOW_ALL: {
            return {
                ...state,
                isPhotoIcon: true,
                isMusicIcon: true,
                isSettingsIcon: true,
                isCompassIcon: true,
                isPhoneIcon: true,
                isBubblesIcon: true,
                isPhotoIcon2: true,
                isMusicIcon2: true,
                activeButton: 'all',
            }
        }
        case SHOW_WEB_DESIGN: {
            return {
                ...state,
                isPhotoIcon: true,
                isCompassIcon: true,
                isPhoneIcon: true,
                isMusicIcon2: true,
                activeButton: 'web',
            }
        }
        case SHOW_GRAPHIC_DESIGN: {
            return {
                ...state,
                isPhotoIcon: true,
                isSettingsIcon: true,
                // isCompassIcon: true,
                isPhoneIcon: true,
                isMusicIcon2: true,
                isBubblesIcon: true,
                activeButton: 'graphic',
            }
        }
        case SHOW_FLAT_DESIGN: {
            return {
                ...state,
                isPhotoIcon: true,
                isSettingsIcon: true,
                isCompassIcon: true,
                isBubblesIcon: true,
                activeButton: 'flat',
            }
        }
        case RESET: {
            return {
                ...state,
                isPhotoIcon: false,
                isMusicIcon: false,
                isSettingsIcon: false,
                isCompassIcon: false,
                isPhoneIcon: false,
                isBubblesIcon: false,
                isPhotoIcon2: false,
                isMusicIcon2: false,
                activeButton: false,
            }
        }
        default:
            return state;
    }
}

export const showAll = () => ({ type: SHOW_ALL });
export const showWebDesign = () => ({ type: SHOW_WEB_DESIGN });
export const showGraphicDesign = () => ({ type: SHOW_GRAPHIC_DESIGN });
export const showFlatDesign = () => ({ type: SHOW_FLAT_DESIGN })
export const reset = () => ({ type: RESET });

export const showAllIcons = () => {
    return async (dispatch: Dispatch<PortfolioAction>) => {
        try {
            dispatch(reset());
            dispatch(showAll());
        } catch (e) {
            dispatch(reset())
        }
    }
}

export const showWebDesignIcons = () => {
    return async (dispatch: Dispatch<PortfolioAction>) => {
        try {
            dispatch(reset());
            dispatch(showWebDesign());
        } catch (e) {
            dispatch(reset())
        }
    }
}

export const showGraphicDesignIcons = () => {
    return async (dispatch: Dispatch<PortfolioAction>) => {
        try {
            dispatch(reset());
            dispatch(showGraphicDesign());
        } catch (e) {
            dispatch(reset())
        }
    }
}

export const showFlatDesignIcons = () => {
    return async (dispatch: Dispatch<PortfolioAction>) => {
        try {
            dispatch(reset());
            dispatch(showFlatDesign());
        } catch (e) {
            dispatch(reset())
        }
    }
}

export default portfolioReducer;    