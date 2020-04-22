const withResolve = (api) => {
  return new Promise((resolve, _) => {
    api()
      .then(res => {
        resolve([null, res.data])
      })
      .catch(err => {
        resolve([err, null])
      })
  })
}

export default withResolve

// Example
// import axios from 'axios'
// import withResolve from '../js/withResolve'

// const link = '/api/user'
// const getUser = async (pid = null) => {
//   const api = () => { return axios.get(`${link}${pid !== null ? `/${pid}` : ''}`) }
//   const [err, result] = await withResolve(api)
//   if (err) return err.response
//   return result
// }

// export default getUser
