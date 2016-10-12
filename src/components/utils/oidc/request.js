import store from '../../../store';

// a request helper which reads the access_token from the redux state and passes it in its HTTP request
export default function apiRequest(url, method = 'GET') {
  const token = store.getState().oidc.user.access_token;
  const headers = new Headers();
  headers.append('Accept', 'application/json');
  headers.append('Authorization', `Bearer ${token}`);

  const options = {
    method,
    headers
  };

  return fetch(url, options)
      .then(function(response) {
        res.json()

      }).catch(function(err) {
      	// Error :(
      });
}