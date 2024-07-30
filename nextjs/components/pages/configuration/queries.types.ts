import * as Types from '../../../types/graphql.types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetFunctionalLinesQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetFunctionalLinesQuery = { __typename?: 'query_root', functional_lines: Array<{ __typename?: 'functional_lines', id: number, name: string, key: string, active: boolean }> };

export type AddFunctionalLinesMutationVariables = Types.Exact<{
  name: Types.Scalars['String']['input'];
  key: Types.Scalars['String']['input'];
}>;


export type AddFunctionalLinesMutation = { __typename?: 'mutation_root', insert_functional_lines?: { __typename?: 'functional_lines_mutation_response', returning: Array<{ __typename?: 'functional_lines', id: number, name: string, key: string, active: boolean }> } | null };

export type UpdateFunctionalLinesMutationVariables = Types.Exact<{
  id: Types.Scalars['bigint']['input'];
  name: Types.Scalars['String']['input'];
  key: Types.Scalars['String']['input'];
  active: Types.Scalars['Boolean']['input'];
}>;


export type UpdateFunctionalLinesMutation = { __typename?: 'mutation_root', update_functional_lines?: { __typename?: 'functional_lines_mutation_response', returning: Array<{ __typename?: 'functional_lines', id: number, name: string, key: string, active: boolean }> } | null };

export type DeleteFunctionalLinesMutationVariables = Types.Exact<{
  id: Types.Scalars['bigint']['input'];
}>;


export type DeleteFunctionalLinesMutation = { __typename?: 'mutation_root', delete_functional_lines?: { __typename?: 'functional_lines_mutation_response', returning: Array<{ __typename?: 'functional_lines', id: number }> } | null };


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