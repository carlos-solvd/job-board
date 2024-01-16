export const resolvers = {
    Query: {
        jobs: () => {
            return [
                {
                id: 'test-id',
                title: 'The Title',
                description: 'The description.',
            },
            {
                id: 'test-id2',
                title: 'The Title2',
                description: 'The description.',
            }
         ]
        }
    }
}