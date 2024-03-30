import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'

import { DolarApiFetcher } from '~/config/adapters/dolarApi.adapter'
import { useStore } from '~/core/store/useStore'
import * as UseCases from '~/core/use-cases'

export const useQuotations = () => {
    const { setQuotations, setError } = useStore()
    const allQuotes = useQuery({
        queryKey: ['Get quotations'],
        queryFn: () => UseCases.getAllDollarQuotations(DolarApiFetcher())
    })

    useEffect(() => {
        if (allQuotes.status === 'success') {
            setQuotations(allQuotes.data)
            return
        }
        if (allQuotes.status === 'error') {
            setError(allQuotes.error.message)
            return
        }
    }, [allQuotes.status])


    return allQuotes
}
