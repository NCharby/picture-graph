//@flow
import React from 'react'
import { useQuery } from '@apollo/react-hooks';
import { Header } from '../header/index'
import { Results } from '../results/index'

import { Q } from '../../g/index'

export default function AppWrapper() {

    const { loading, error, data } = useQuery(Q.GET_DEFAULT_RESULTS, {
        variables: {page: 1}
    });

    return (
        <div>
            <Header />
            <Results />
        </div>
    )

}