import { useQuery } from '@apollo/client';
import { companyByIdQuery } from '../graphql/queries';

export function useCompany(id) {
    const { data, loading, error } = useQuery(companyByIdQuery, {
      variables: { id },
    });
  
    return { company: data?.company, loading, error: Boolean(error)  }
  }