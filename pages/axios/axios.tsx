import axios from 'axios';
import { Container, HeadingH2, Typography } from '../../styles/main';

// axios.get('https://gscore-back.herokuapp.com/api/users/me').then(response => {
//   console.log(response);
// });

// axios.post('https://gscore-back.herokuapp.com/api/users/sign-up',
//   {
//     "email": "testemail@gmail.com",
//     "username": "testusername",
//     "password": "testpassword"
//   }
// ).then(response => { console.log(response) });

axios.post('https://gscore-back.herokuapp.com/api/users/sign-in',
  {
    "email": "testemail@gmail.com",
    "password": "testpassword"
  }
).then(response => { console.log(response) });

// axios.get('https://gscore-back.herokuapp.com/api/users/me')
//   .then(response => { console.log(response) });

export default function AxiosComponent() {

  return (
    <Container>
      <br />
      <br />
      <HeadingH2>Axios trainig page</HeadingH2>
    </Container>
  );
}