import jwt from 'jsonwebtoken'
import jwt_encode from 'jwt-encode'

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { useQuery, gql } from '@apollo/client';


export const jwt_token = ( (id, ntid, role) => {
    const key = '357af2e8640cf0aebf80e21bfaf1202b'
    const payload = {
        "https://hasura.io/jwt/claims": {
            "x-hasura-default-role": role,
            "x-hasura-allowed-roles": [
            "user",
            "manager",
            "admin"
            ],
            "x-hasura-user-id": ntid
        }
    }
    const token = jwt_encode(payload, key)
    return token
})

export const jwt_token_login_auth = ( () => {
    const key = '357af2e8640cf0aebf80e21bfaf1202b'
    const payload = {
        "https://hasura.io/jwt/claims": {
            "x-hasura-default-role": "admin",
            "x-hasura-allowed-roles": [
            "user",
            "manager",
            "admin"
            ],
            "x-hasura-user-id": "taioh"
        }
    }
    const token = jwt_encode(payload, key)
    return token
})
