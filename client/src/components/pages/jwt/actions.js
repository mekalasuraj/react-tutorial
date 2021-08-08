import axios from 'axios';

export const register = formData => {
    // try {
    //   const res = await api.post('/users', formData);
  
    //   dispatch({
    //     type: REGISTER_SUCCESS,
    //     payload: res.data
    //   });
    //   dispatch(loadUser());
    // } catch (err) {
    //   const errors = err.response.data.errors;
  
    //   if (errors) {
    //     errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    //   }
  
    //   dispatch({
    //     type: REGISTER_FAIL
    //   });
    // }
    try{
        axios.post('/api/auth/user/register',formData)
        .then(response=>{
            alert('form submitted');
        })
    } catch(err){
        throw new err;
    };
  };

  export const login = formData => {
    try{
        axios.post('/api/auth/user/login',formData)
        .then(response=>{
            alert('login success');
            console.log(response);
            axios.defaults.headers.common['x-auth-token'] = response.data.token;
            localStorage.setItem('token', response.data.token);
        })
    } catch(err){
        console.log(err)
        throw err;
    };
  };

  export const logout = () => {
      console.log('logout hitted');
    try{
        delete axios.defaults.headers.common['x-auth-token'];
        localStorage.removeItem('token');
    } catch(err){
        console.log(err)
        throw err;
    };
  };