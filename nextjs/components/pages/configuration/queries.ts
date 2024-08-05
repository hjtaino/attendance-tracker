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

export { useGetRequestTypesQuery } from './queries.types'
export const GET_REQUEST_TYPES = gql`
query GetRequestTypes {
    request_types(order_by: {name: asc}){
        id
        name
        key
        active
    }
  }
`;

export { useGetStatusQuery } from './queries.types'
export const GET_STATUS = gql`
query GetStatus {
    status(order_by: {sequence: asc}){
        id
        name
        sequence
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

export { useAddRequestTypesMutation } from './queries.types'
export const ADD_REQUEST_TYPES = gql`
mutation AddRequestTypes($name: String!, $key: String!) {
    insert_request_types(objects: {
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

export { useAddStatusMutation } from './queries.types'
export const ADD_STATUS = gql`
mutation AddStatus($name: String!, $sequence: Int!) {
    insert_status(objects: {
        name: $name,
        sequence: $sequence,
        }
    ) {
        returning {
            id
            name
            sequence
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

export { useUpdateRequestTypesMutation } from './queries.types'
const UPDATE_REQUEST_TYPES = gql`
mutation UpdateRequestTypes(
    $id: bigint!,
    $name: String!
    $key: String!
    $active: Boolean!
) {
    update_request_types(
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

export { useUpdateStatusMutation } from './queries.types'
const UPDATE_STATUS = gql`
mutation UpdateStatus(
    $id: bigint!,
    $name: String!
    $sequence: Int!
    $active: Boolean!
) {
    update_status(
        where: {id: {_eq: $id }}, 
        _set: {
            name: $name
            sequence: $sequence
            active: $active
        }
    ) {
        returning {
            id
            name
            sequence
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

export { useDeleteRequestTypesMutation } from './queries.types'
export const DELETE_REQUEST_TYPES = gql`
mutation DeleteRequestTypes($id: bigint!) {
    delete_request_types(where: { id: { _eq: $id } }) {
        returning {
            id
        }
    }
}
`;

export { useDeleteStatusMutation } from './queries.types'
export const DELETE_STATUS = gql`
mutation DeleteStatus($id: bigint!) {
    delete_status(where: { id: { _eq: $id } }) {
        returning {
            id
        }
    }
}
`;