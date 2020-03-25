//@flow
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import { ApolloLink } from 'apollo-link';

const cache = new InMemoryCache()

// Helper function to get data from the cache
const getState = (query: any) => {
    return cache.readQuery({ query }).state;
};

// Helper function to write data back to the cache
const writeState = (state: any) => {
    return cache.writeData({ data: { state } });
};

// initial apollo local state
const initState = () => {
    const state = {
        appState: {},
        __typename: 'State',
    };

    writeState(state);
};

const client = new ApolloClient({
    link: ApolloLink.from([
        onError(({ graphQLErrors, networkError }) => {
            if (graphQLErrors)
                graphQLErrors.forEach(({ message, locations, path }) =>
                    console.log(
                        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
                    ),
                );
            if (networkError) console.log(`[Network error]: ${networkError}`);
        }),
        new HttpLink({
            uri: '/graphql',
            credentials: 'same-origin'
        })
    ]),
    cache
});