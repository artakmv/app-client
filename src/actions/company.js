import axios from 'axios'
import { setCompany } from '../reducers/companyReducer'

export const create = (
  name,
  address,
  service,
  employeesNumber,
  description,
  type,
  userId
) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('http://localhost:5000/companies/', {
        name,
        address,
        service,
        employeesNumber,
        description,
        type,
        userId,
      })

      console.log(response.data)
      dispatch(setCompany(response.data.companies))
    } catch (e) {
      console.log(e.response.data.message)
    }
  }
}
