const SET_COMPANY = 'SET_COMPANY'

const defaultState = {
  companies: [],
}

export default function companyReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_COMPANY:
      return {
        ...state,
        companies: action.payload,
      }
    default:
      return state
  }
}

export const setCompany = (company) => ({ type: SET_COMPANY, payload: company })
