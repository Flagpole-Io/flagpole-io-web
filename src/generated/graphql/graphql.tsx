import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Configuration = {
  __typename?: 'Configuration';
  hasLights: Scalars['Boolean'];
  hasMotor: Scalars['Boolean'];
  hasWeatherProofFlag: Scalars['Boolean'];
  pushoverApiToken?: Maybe<Scalars['String']>;
  pushoverUserKey?: Maybe<Scalars['String']>;
};

export type ConfigurationInput = {
  hasLights: Scalars['Boolean'];
  hasMotor: Scalars['Boolean'];
  hasWeatherProofFlag: Scalars['Boolean'];
  pushoverApiToken?: InputMaybe<Scalars['String']>;
  pushoverUserKey?: InputMaybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addRequest?: Maybe<Scalars['Int']>;
  sendNotification?: Maybe<Scalars['Boolean']>;
  updateConfiguration?: Maybe<Configuration>;
};


export type MutationAddRequestArgs = {
  input: RequestInput;
};


export type MutationSendNotificationArgs = {
  input: NotificationInput;
};


export type MutationUpdateConfigurationArgs = {
  input: ConfigurationInput;
};

export type NotificationInput = {
  message: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  configuration?: Maybe<Configuration>;
  requests: Array<Request>;
  status?: Maybe<Status>;
};

export type Request = {
  __typename?: 'Request';
  action: Scalars['String'];
  value?: Maybe<Scalars['Int']>;
};

export type RequestInput = {
  action: Scalars['String'];
  value?: InputMaybe<Scalars['Int']>;
};

export type Status = {
  __typename?: 'Status';
  flag?: Maybe<Scalars['String']>;
  lights?: Maybe<Scalars['String']>;
};

export type GetConfigurationQueryVariables = Exact<{ [key: string]: never; }>;


export type GetConfigurationQuery = { __typename?: 'Query', configuration?: { __typename?: 'Configuration', hasMotor: boolean, hasWeatherProofFlag: boolean, hasLights: boolean, pushoverApiToken?: string | null, pushoverUserKey?: string | null } | null };

export type UpdateConfigurationMutationVariables = Exact<{
  input: ConfigurationInput;
}>;


export type UpdateConfigurationMutation = { __typename?: 'Mutation', updateConfiguration?: { __typename?: 'Configuration', hasMotor: boolean, hasWeatherProofFlag: boolean, hasLights: boolean, pushoverApiToken?: string | null, pushoverUserKey?: string | null } | null };

export type SendNotificationMutationVariables = Exact<{
  input: NotificationInput;
}>;


export type SendNotificationMutation = { __typename?: 'Mutation', sendNotification?: boolean | null };

export type GetRequestsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetRequestsQuery = { __typename?: 'Query', requests: Array<{ __typename?: 'Request', action: string, value?: number | null }> };

export type AddRequestMutationVariables = Exact<{
  input: RequestInput;
}>;


export type AddRequestMutation = { __typename?: 'Mutation', addRequest?: number | null };

export type GetStatusQueryVariables = Exact<{ [key: string]: never; }>;


export type GetStatusQuery = { __typename?: 'Query', status?: { __typename?: 'Status', flag?: string | null, lights?: string | null } | null };


export const GetConfigurationDocument = gql`
    query getConfiguration {
  configuration {
    hasMotor
    hasWeatherProofFlag
    hasLights
    pushoverApiToken
    pushoverUserKey
  }
}
    `;

/**
 * __useGetConfigurationQuery__
 *
 * To run a query within a React component, call `useGetConfigurationQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetConfigurationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetConfigurationQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetConfigurationQuery(baseOptions?: Apollo.QueryHookOptions<GetConfigurationQuery, GetConfigurationQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetConfigurationQuery, GetConfigurationQueryVariables>(GetConfigurationDocument, options);
      }
export function useGetConfigurationLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetConfigurationQuery, GetConfigurationQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetConfigurationQuery, GetConfigurationQueryVariables>(GetConfigurationDocument, options);
        }
export type GetConfigurationQueryHookResult = ReturnType<typeof useGetConfigurationQuery>;
export type GetConfigurationLazyQueryHookResult = ReturnType<typeof useGetConfigurationLazyQuery>;
export type GetConfigurationQueryResult = Apollo.QueryResult<GetConfigurationQuery, GetConfigurationQueryVariables>;
export const UpdateConfigurationDocument = gql`
    mutation updateConfiguration($input: ConfigurationInput!) {
  updateConfiguration(input: $input) {
    hasMotor
    hasWeatherProofFlag
    hasLights
    pushoverApiToken
    pushoverUserKey
  }
}
    `;
export type UpdateConfigurationMutationFn = Apollo.MutationFunction<UpdateConfigurationMutation, UpdateConfigurationMutationVariables>;

/**
 * __useUpdateConfigurationMutation__
 *
 * To run a mutation, you first call `useUpdateConfigurationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateConfigurationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateConfigurationMutation, { data, loading, error }] = useUpdateConfigurationMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateConfigurationMutation(baseOptions?: Apollo.MutationHookOptions<UpdateConfigurationMutation, UpdateConfigurationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateConfigurationMutation, UpdateConfigurationMutationVariables>(UpdateConfigurationDocument, options);
      }
export type UpdateConfigurationMutationHookResult = ReturnType<typeof useUpdateConfigurationMutation>;
export type UpdateConfigurationMutationResult = Apollo.MutationResult<UpdateConfigurationMutation>;
export type UpdateConfigurationMutationOptions = Apollo.BaseMutationOptions<UpdateConfigurationMutation, UpdateConfigurationMutationVariables>;
export const SendNotificationDocument = gql`
    mutation sendNotification($input: NotificationInput!) {
  sendNotification(input: $input)
}
    `;
export type SendNotificationMutationFn = Apollo.MutationFunction<SendNotificationMutation, SendNotificationMutationVariables>;

/**
 * __useSendNotificationMutation__
 *
 * To run a mutation, you first call `useSendNotificationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendNotificationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendNotificationMutation, { data, loading, error }] = useSendNotificationMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSendNotificationMutation(baseOptions?: Apollo.MutationHookOptions<SendNotificationMutation, SendNotificationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SendNotificationMutation, SendNotificationMutationVariables>(SendNotificationDocument, options);
      }
export type SendNotificationMutationHookResult = ReturnType<typeof useSendNotificationMutation>;
export type SendNotificationMutationResult = Apollo.MutationResult<SendNotificationMutation>;
export type SendNotificationMutationOptions = Apollo.BaseMutationOptions<SendNotificationMutation, SendNotificationMutationVariables>;
export const GetRequestsDocument = gql`
    query getRequests {
  requests {
    action
    value
  }
}
    `;

/**
 * __useGetRequestsQuery__
 *
 * To run a query within a React component, call `useGetRequestsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRequestsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRequestsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetRequestsQuery(baseOptions?: Apollo.QueryHookOptions<GetRequestsQuery, GetRequestsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetRequestsQuery, GetRequestsQueryVariables>(GetRequestsDocument, options);
      }
export function useGetRequestsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetRequestsQuery, GetRequestsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetRequestsQuery, GetRequestsQueryVariables>(GetRequestsDocument, options);
        }
export type GetRequestsQueryHookResult = ReturnType<typeof useGetRequestsQuery>;
export type GetRequestsLazyQueryHookResult = ReturnType<typeof useGetRequestsLazyQuery>;
export type GetRequestsQueryResult = Apollo.QueryResult<GetRequestsQuery, GetRequestsQueryVariables>;
export const AddRequestDocument = gql`
    mutation addRequest($input: RequestInput!) {
  addRequest(input: $input)
}
    `;
export type AddRequestMutationFn = Apollo.MutationFunction<AddRequestMutation, AddRequestMutationVariables>;

/**
 * __useAddRequestMutation__
 *
 * To run a mutation, you first call `useAddRequestMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddRequestMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addRequestMutation, { data, loading, error }] = useAddRequestMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddRequestMutation(baseOptions?: Apollo.MutationHookOptions<AddRequestMutation, AddRequestMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddRequestMutation, AddRequestMutationVariables>(AddRequestDocument, options);
      }
export type AddRequestMutationHookResult = ReturnType<typeof useAddRequestMutation>;
export type AddRequestMutationResult = Apollo.MutationResult<AddRequestMutation>;
export type AddRequestMutationOptions = Apollo.BaseMutationOptions<AddRequestMutation, AddRequestMutationVariables>;
export const GetStatusDocument = gql`
    query getStatus {
  status {
    flag
    lights
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