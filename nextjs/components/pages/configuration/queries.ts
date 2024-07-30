import { gql } from '@apollo/client'

// Read
export { useGetFunctionalLinesQuery } from './queries.types'
export const GET_FUNCTIONAL_LINES = gql`
query GetFunctionalLines {
    functional_lines(order_by: {name: asc}){
        id
        name
        key
        active
    }
  }
`;

// Create
export { useAddFunctionalLinesMutation } from './queries.types'
export const ADD_FUNCTIONAL_LINES = gql`
mutation AddFunctionalLines($name: String!, $key: String!) {
    insert_functional_lines(objects: {
        name: $name,
        key: $key,
        }
    ) {
        returning {
            id
            name
            key
            active
        }
    }
    }
`;

// Update
export { useUpdateFunctionalLinesMutation } from './queries.types'
const UPDATE_FUNCTIONAL_LINES = gql`
mutation UpdateFunctionalLines(
    $id: bigint!,
    $name: String!
    $key: String!
    $active: Boolean!
) {
    update_functional_lines(
        where: {id: {_eq: $id }}, 
        _set: {
            name: $name
            key: $key
            active: $active
        }
    ) {
        returning {
            id
            name
            key
            active
        }
    }
    }
`;

// Delete
export { useDeleteFunctionalLinesMutation } from './queries.types'
export const DELETE_FUNCTIONAL_LINES = gql`
mutation DeleteFunctionalLines($id: bigint!) {
    delete_functional_lines(where: { id: { _eq: $id } }) {
        returning {
            id
        }
    }
}
`;