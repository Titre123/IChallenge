# IChallenge
This is our challenge app for the completion of our foundation year at ALX

## What This App will do
This app is a challenge App that enable programmers to be able to challenge each other.

## How To Use the App
To use this application.
1. Create An account Using Github Email or quicken registration by using your Github account to sign up.
2. User is redirected to the signIn page.
3. User can access dashboard
4. A user can challenge another user to a 30 days of coding challenge

## Some code that we used
```
const type = statedType ? 'text' : 'password';

    const handleSubmit = (event) => {
        event.preventDefault()
        logInWithEmailAndPassword(auth, input.email, input.password)
    }

    const handleChange = (e) => {
        const {value, name} = e.target;
        setInput(prev => { 
            return{
                ...prev,
                [name]: value
            }
        })
    }
```

## Credit
Taiwo Ola-Balogun 
Email : [taiwotriumphant@gmail.com](taiwotriumphant@gmail.com)

Tolulope Adeleke
Email : [tolulupeadeleke@gmail.com](tolulupeadeleke@gmail.com)
