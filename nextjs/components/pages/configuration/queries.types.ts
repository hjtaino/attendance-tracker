import * as Types from '../../../types/graphql.types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetFunctionalLinesQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetFunctionalLinesQuery = { __typename?: 'query_root', functional_lines: Array<{ __typename?: 'functional_lines', id: number, name: string, key: string, active: boolean }> };

export type GetRequestTypesQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetRequestTypesQuery = { __typename?: 'query_root', request_types: Array<{ __typename?: 'request_types', id: number, name: string, key: string, active: boolean }> };

export type GetStatusQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetStatusQuery = { __typename?: 'query_root', status: Array<{ __typename?: 'status', id: number, name: string, sequence: number, active: boolean }> };

export type AddFunctionalLinesMutationVariables = Types.Exact<{
  name: Types.Scalars['String']['input'];
  key: Types.Scalars['String']['input'];
}>;


export type AddFunctionalLinesMutation = { __typename?: 'mutation_root', insert_functional_lines?: { __typename?: 'functional_lines_mutation_response', returning: Array<{ __typename?: 'functional_lines', id: number, name: string, key: string, active: boolean }> } | null };

export type AddRequestTypesMutationVariables = Types.Exact<{
  name: Types.Scalars['String']['input'];
  key: Types.Scalars['String']['input'];
}>;


export type AddRequestTypesMutation = { __typename?: 'mutation_root', insert_request_types?: { __typename?: 'request_types_mutation_response', returning: Array<{ __typename?: 'request_types', id: number, name: string, key: string, active: boolean }> } | null };

export type AddStatusMutationVariables = Types.Exact<{
  name: Types.Scalars['String']['input'];
  sequence: Types.Scalars['Int']['input'];
}>;


export type AddStatusMutation = { __typename?: 'mutation_root', insert_status?: { __typename?: 'status_mutation_response', returning: Array<{ __typename?: 'status', id: number, name: string, sequence: number, active: boolean }> } | null };

export type UpdateFunctionalLinesMutationVariables = Types.Exact<{
  id: Types.Scalars['bigint']['input'];
  name: Types.Scalars['String']['input'];
  key: Types.Scalars['String']['input'];
  active: Types.Scalars['Boolean']['input'];
}>;


export type UpdateFunctionalLinesMutation = { __typename?: 'mutation_root', update_functional_lines?: { __typename?: 'functional_lines_mutation_response', returning: Array<{ __typename?: 'functional_lines', id: number, name: string, key: string, active: boolean }> } | null };

export type UpdateRequestTypesMutationVariables = Types.Exact<{
  id: Types.Scalars['bigint']['input'];
  name: Types.Scalars['String']['input'];
  key: Types.Scalars['String']['input'];
  active: Types.Scalars['Boolean']['input'];
}>;


export type UpdateRequestTypesMutation = { __typename?: 'mutation_root', update_request_types?: { __typename?: 'request_types_mutation_response', returning: Array<{ __typename?: 'request_types', id: number, name: string, key: string, active: boolean }> } | null };

export type UpdateStatusMutationVariables = Types.Exact<{
  id: Types.Scalars['bigint']['input'];
  name: Types.Scalars['String']['input'];
  sequence: Types.Scalars['Int']['input'];
  active: Types.Scalars['Boolean']['input'];
}>;


export type UpdateStatusMutation = { __typename?: 'mutation_root', update_status?: { __typename?: 'status_mutation_response', returning: Array<{ __typename?: 'status', id: number, name: string, sequence: number, active: boolean }> } | null };

export type DeleteFunctionalLinesMutationVariables = Types.Exact<{
  id: Types.Scalars['bigint']['input'];
}>;


export type DeleteFunctionalLinesMutation = { __typename?: 'mutation_root', delete_functional_lines?: { __typename?: 'functional_lines_mutation_response', returning: Array<{ __typename?: 'functional_lines', id: number }> } | null };

export type DeleteRequestTypesMutationVariables = Types.Exact<{
  id: Types.Scalars['bigint']['input'];
}>;


export type DeleteRequestTypesMutation = { __typename?: 'mutation_root', delete_request_types?: { __typename?: 'request_types_mutation_response', returning: Array<{ __typename?: 'request_types', id: number }> } | null };

export type DeleteStatusMutationVariables = Types.Exact<{
  id: Types.Scalars['bigint']['input'];
}>;


export type DeleteStatusMutation = { __typename?: 'mutation_root', delete_status?: { __typename?: 'status_mutation_response', returning: Array<{ __typename?: 'status', id: number }> } | null };


export const GetFunctionalLinesDocument = gql`
    query GetFunctionalLines {
  functional_lines(order_by: {name: asc}) {
    id
    name
    key
    active
  }
}
    `;

/**
 * __useGetFunctionalLinesQuery__
 *
 * To run a query within a React component, call `useGetFunctionalLinesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFunctionalLinesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFunctionalLinesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetFunctionalLinesQuery(baseOptions?: Apollo.QueryHookOptions<GetFunctionalLinesQuery, GetFunctionalLinesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetFunctionalLinesQuery, GetFunctionalLinesQueryVariables>(GetFunctionalLinesDocument, options);
      }
export function useGetFunctionalLinesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetFunctionalLinesQuery, GetFunctionalLinesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetFunctionalLinesQuery, GetFunctionalLinesQueryVariables>(GetFunctionalLinesDocument, options);
        }
export type GetFunctionalLinesQueryHookResult = ReturnType<typeof useGetFunctionalLinesQuery>;
export type GetFunctionalLinesLazyQueryHookResult = ReturnType<typeof useGetFunctionalLinesLazyQuery>;
export type GetFunctionalLinesQueryResult = Apollo.QueryResult<GetFunctionalLinesQuery, GetFunctionalLinesQueryVariables>;
export const GetRequestTypesDocument = gql`
    query GetRequestTypes {
  request_types(order_by: {name: asc}) {
    id
    name
    key
    active
  }
}
    `;

/**
 * __useGetRequestTypesQuery__
 *
 * To run a query within a React component, call `useGetRequestTypesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRequestTypesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRequestTypesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetRequestTypesQuery(baseOptions?: Apollo.QueryHookOptions<GetRequestTypesQuery, GetRequestTypesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetRequestTypesQuery, GetRequestTypesQueryVariables>(GetRequestTypesDocument, options);
      }
export function useGetRequestTypesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetRequestTypesQuery, GetRequestTypesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetRequestTypesQuery, GetRequestTypesQueryVariables>(GetRequestTypesDocument, options);
        }
export type GetRequestTypesQueryHookResult = ReturnType<typeof useGetRequestTypesQuery>;
export type GetRequestTypesLazyQueryHookResult = ReturnType<typeof useGetRequestTypesLazyQuery>;
export type GetRequestTypesQueryResult = Apollo.QueryResult<GetRequestTypesQuery, GetRequestTypesQueryVariables>;
export const GetStatusDocument = gql`
    query GetStatus {
  status(order_by: {name: asc}) {
    id
    name
    sequence
    active
  }
}
    `;

/**
 * __useGetStatusQuery__
 *
 * To run a query within a React component, call `useGetStatusQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetStatusQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetStatusQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetStatusQuery(baseOptions?: Apollo.QueryHookOptions<GetStatusQuery, GetStatusQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetStatusQuery, GetStatusQueryVariables>(GetStatusDocument, options);
      }
export function useGetStatusLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetStatusQuery, GetStatusQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetStatusQuery, GetStatusQueryVariables>(GetStatusDocument, options);
        }
export type GetStatusQueryHookResult = ReturnType<typeof useGetStatusQuery>;
export type GetStatusLazyQueryHookResult = ReturnType<typeof useGetStatusLazyQuery>;
export type GetStatusQueryResult = Apollo.QueryResult<GetStatusQuery, GetStatusQueryVariables>;
export const AddFunctionalLinesDocument = gql`
    mutation AddFunctionalLines($name: String!, $key: String!) {
  insert_functional_lines(objects: {name: $name, key: $key}) {
    returning {
      id
      name
      key
      active
    }
  }
}
    `;
export type AddFunctionalLinesMutationFn = Apollo.MutationFunction<AddFunctionalLinesMutation, AddFunctionalLinesMutationVariables>;

/**
 * __useAddFunctionalLinesMutation__
 *
 * To run a mutation, you first call `useAddFunctionalLinesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddFunctionalLinesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addFunctionalLinesMutation, { data, loading, error }] = useAddFunctionalLinesMutation({
 *   variables: {
 *      name: // value for 'name'
 *      key: // value for 'key'
 *   },
 * });
 */
export function useAddFunctionalLinesMutation(baseOptions?: Apollo.MutationHookOptions<AddFunctionalLinesMutation, AddFunctionalLinesMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddFunctionalLinesMutation, AddFunctionalLinesMutationVariables>(AddFunctionalLinesDocument, options);
      }
export type AddFunctionalLinesMutationHookResult = ReturnType<typeof useAddFunctionalLinesMutation>;
export type AddFunctionalLinesMutationResult = Apollo.MutationResult<AddFunctionalLinesMutation>;
export type AddFunctionalLinesMutationOptions = Apollo.BaseMutationOptions<AddFunctionalLinesMutation, AddFunctionalLinesMutationVariables>;
export const AddRequestTypesDocument = gql`
    mutation AddRequestTypes($name: String!, $key: String!) {
  insert_request_types(objects: {name: $name, key: $key}) {
    returning {
      id
      name
      key
      active
    }
  }
}
    `;
export type AddRequestTypesMutationFn = Apollo.MutationFunction<AddRequestTypesMutation, AddRequestTypesMutationVariables>;

/**
 * __useAddRequestTypesMutation__
 *
 * To run a mutation, you first call `useAddRequestTypesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddRequestTypesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addRequestTypesMutation, { data, loading, error }] = useAddRequestTypesMutation({
 *   variables: {
 *      name: // value for 'name'
 *      key: // value for 'key'
 *   },
 * });
 */
export function useAddRequestTypesMutation(baseOptions?: Apollo.MutationHookOptions<AddRequestTypesMutation, AddRequestTypesMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddRequestTypesMutation, AddRequestTypesMutationVariables>(AddRequestTypesDocument, options);
      }
export type AddRequestTypesMutationHookResult = ReturnType<typeof useAddRequestTypesMutation>;
export type AddRequestTypesMutationResult = Apollo.MutationResult<AddRequestTypesMutation>;
export type AddRequestTypesMutationOptions = Apollo.BaseMutationOptions<AddRequestTypesMutation, AddRequestTypesMutationVariables>;
export const AddStatusDocument = gql`
    mutation AddStatus($name: String!, $sequence: Int!) {
  insert_status(objects: {name: $name, sequence: $sequence}) {
    returning {
      id
      name
      sequence
      active
    }
  }
}
    `;
export type AddStatusMutationFn = Apollo.MutationFunction<AddStatusMutation, AddStatusMutationVariables>;

/**
 * __useAddStatusMutation__
 *
 * To run a mutation, you first call `useAddStatusMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddStatusMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addStatusMutation, { data, loading, error }] = useAddStatusMutation({
 *   variables: {
 *      name: // value for 'name'
 *      sequence: // value for 'sequence'
 *   },
 * });
 */
export function useAddStatusMutation(baseOptions?: Apollo.MutationHookOptions<AddStatusMutation, AddStatusMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddStatusMutation, AddStatusMutationVariables>(AddStatusDocument, options);
      }
export type AddStatusMutationHookResult = ReturnType<typeof useAddStatusMutation>;
export type AddStatusMutationResult = Apollo.MutationResult<AddStatusMutation>;
export type AddStatusMutationOptions = Apollo.BaseMutationOptions<AddStatusMutation, AddStatusMutationVariables>;
export const UpdateFunctionalLinesDocument = gql`
    mutation UpdateFunctionalLines($id: bigint!, $name: String!, $key: String!, $active: Boolean!) {
  update_functional_lines(
    where: {id: {_eq: $id}}
    _set: {name: $name, key: $key, active: $active}
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
export type UpdateFunctionalLinesMutationFn = Apollo.MutationFunction<UpdateFunctionalLinesMutation, UpdateFunctionalLinesMutationVariables>;

/**
 * __useUpdateFunctionalLinesMutation__
 *
 * To run a mutation, you first call `useUpdateFunctionalLinesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateFunctionalLinesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateFunctionalLinesMutation, { data, loading, error }] = useUpdateFunctionalLinesMutation({
 *   variables: {
 *      id: // value for 'id'
 *      name: // value for 'name'
 *      key: // value for 'key'
 *      active: // value for 'active'
 *   },
 * });
 */
export function useUpdateFunctionalLinesMutation(baseOptions?: Apollo.MutationHookOptions<UpdateFunctionalLinesMutation, UpdateFunctionalLinesMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateFunctionalLinesMutation, UpdateFunctionalLinesMutationVariables>(UpdateFunctionalLinesDocument, options);
      }
export type UpdateFunctionalLinesMutationHookResult = ReturnType<typeof useUpdateFunctionalLinesMutation>;
export type UpdateFunctionalLinesMutationResult = Apollo.MutationResult<UpdateFunctionalLinesMutation>;
export type UpdateFunctionalLinesMutationOptions = Apollo.BaseMutationOptions<UpdateFunctionalLinesMutation, UpdateFunctionalLinesMutationVariables>;
export const UpdateRequestTypesDocument = gql`
    mutation UpdateRequestTypes($id: bigint!, $name: String!, $key: String!, $active: Boolean!) {
  update_request_types(
    where: {id: {_eq: $id}}
    _set: {name: $name, key: $key, active: $active}
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
export type UpdateRequestTypesMutationFn = Apollo.MutationFunction<UpdateRequestTypesMutation, UpdateRequestTypesMutationVariables>;

/**
 * __useUpdateRequestTypesMutation__
 *
 * To run a mutation, you first call `useUpdateRequestTypesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateRequestTypesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateRequestTypesMutation, { data, loading, error }] = useUpdateRequestTypesMutation({
 *   variables: {
 *      id: // value for 'id'
 *      name: // value for 'name'
 *      key: // value for 'key'
 *      active: // value for 'active'
 *   },
 * });
 */
export function useUpdateRequestTypesMutation(baseOptions?: Apollo.MutationHookOptions<UpdateRequestTypesMutation, UpdateRequestTypesMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateRequestTypesMutation, UpdateRequestTypesMutationVariables>(UpdateRequestTypesDocument, options);
      }
export type UpdateRequestTypesMutationHookResult = ReturnType<typeof useUpdateRequestTypesMutation>;
export type UpdateRequestTypesMutationResult = Apollo.MutationResult<UpdateRequestTypesMutation>;
export type UpdateRequestTypesMutationOptions = Apollo.BaseMutationOptions<UpdateRequestTypesMutation, UpdateRequestTypesMutationVariables>;
export const UpdateStatusDocument = gql`
    mutation UpdateStatus($id: bigint!, $name: String!, $sequence: Int!, $active: Boolean!) {
  update_status(
    where: {id: {_eq: $id}}
    _set: {name: $name, sequence: $sequence, active: $active}
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
export type UpdateStatusMutationFn = Apollo.MutationFunction<UpdateStatusMutation, UpdateStatusMutationVariables>;

/**
 * __useUpdateStatusMutation__
 *
 * To run a mutation, you first call `useUpdateStatusMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateStatusMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateStatusMutation, { data, loading, error }] = useUpdateStatusMutation({
 *   variables: {
 *      id: // value for 'id'
 *      name: // value for 'name'
 *      sequence: // value for 'sequence'
 *      active: // value for 'active'
 *   },
 * });
 */
export function useUpdateStatusMutation(baseOptions?: Apollo.MutationHookOptions<UpdateStatusMutation, UpdateStatusMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateStatusMutation, UpdateStatusMutationVariables>(UpdateStatusDocument, options);
      }
export type UpdateStatusMutationHookResult = ReturnType<typeof useUpdateStatusMutation>;
export type UpdateStatusMutationResult = Apollo.MutationResult<UpdateStatusMutation>;
export type UpdateStatusMutationOptions = Apollo.BaseMutationOptions<UpdateStatusMutation, UpdateStatusMutationVariables>;
export const DeleteFunctionalLinesDocument = gql`
    mutation DeleteFunctionalLines($id: bigint!) {
  delete_functional_lines(where: {id: {_eq: $id}}) {
    returning {
      id
    }
  }
}
    `;
export type DeleteFunctionalLinesMutationFn = Apollo.MutationFunction<DeleteFunctionalLinesMutation, DeleteFunctionalLinesMutationVariables>;

/**
 * __useDeleteFunctionalLinesMutation__
 *
 * To run a mutation, you first call `useDeleteFunctionalLinesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteFunctionalLinesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteFunctionalLinesMutation, { data, loading, error }] = useDeleteFunctionalLinesMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteFunctionalLinesMutation(baseOptions?: Apollo.MutationHookOptions<DeleteFunctionalLinesMutation, DeleteFunctionalLinesMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteFunctionalLinesMutation, DeleteFunctionalLinesMutationVariables>(DeleteFunctionalLinesDocument, options);
      }
export type DeleteFunctionalLinesMutationHookResult = ReturnType<typeof useDeleteFunctionalLinesMutation>;
export type DeleteFunctionalLinesMutationResult = Apollo.MutationResult<DeleteFunctionalLinesMutation>;
export type DeleteFunctionalLinesMutationOptions = Apollo.BaseMutationOptions<DeleteFunctionalLinesMutation, DeleteFunctionalLinesMutationVariables>;
export const DeleteRequestTypesDocument = gql`
    mutation DeleteRequestTypes($id: bigint!) {
  delete_request_types(where: {id: {_eq: $id}}) {
    returning {
      id
    }
  }
}
    `;
export type DeleteRequestTypesMutationFn = Apollo.MutationFunction<DeleteRequestTypesMutation, DeleteRequestTypesMutationVariables>;

/**
 * __useDeleteRequestTypesMutation__
 *
 * To run a mutation, you first call `useDeleteRequestTypesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteRequestTypesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteRequestTypesMutation, { data, loading, error }] = useDeleteRequestTypesMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteRequestTypesMutation(baseOptions?: Apollo.MutationHookOptions<DeleteRequestTypesMutation, DeleteRequestTypesMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteRequestTypesMutation, DeleteRequestTypesMutationVariables>(DeleteRequestTypesDocument, options);
      }
export type DeleteRequestTypesMutationHookResult = ReturnType<typeof useDeleteRequestTypesMutation>;
export type DeleteRequestTypesMutationResult = Apollo.MutationResult<DeleteRequestTypesMutation>;
export type DeleteRequestTypesMutationOptions = Apollo.BaseMutationOptions<DeleteRequestTypesMutation, DeleteRequestTypesMutationVariables>;
export const DeleteStatusDocument = gql`
    mutation DeleteStatus($id: bigint!) {
  delete_status(where: {id: {_eq: $id}}) {
    returning {
      id
    }
  }
}
    `;
export type DeleteStatusMutationFn = Apollo.MutationFunction<DeleteStatusMutation, DeleteStatusMutationVariables>;

/**
 * __useDeleteStatusMutation__
 *
 * To run a mutation, you first call `useDeleteStatusMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteStatusMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteStatusMutation, { data, loading, error }] = useDeleteStatusMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteStatusMutation(baseOptions?: Apollo.MutationHookOptions<DeleteStatusMutation, DeleteStatusMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteStatusMutation, DeleteStatusMutationVariables>(DeleteStatusDocument, options);
      }
export type DeleteStatusMutationHookResult = ReturnType<typeof useDeleteStatusMutation>;
export type DeleteStatusMutationResult = Apollo.MutationResult<DeleteStatusMutation>;
export type DeleteStatusMutationOptions = Apollo.BaseMutationOptions<DeleteStatusMutation, DeleteStatusMutationVariables>;