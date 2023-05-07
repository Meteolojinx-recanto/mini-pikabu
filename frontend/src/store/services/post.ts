import { api } from '../services/index';
import { IPost } from '../../interfaces/IPost';

const postApi = api.injectEndpoints({
    endpoints: (build) => ({
        getPosts: build.query<IPost[], void>({
            query: () => `/posts`,
            providesTags: () => [{ type: 'Posts', id: 'LIST' }]
        }),
        createPost: build.mutation<IPost, FormData>({
            query: (post) => ({
                url: '/posts',
                method: 'POST',
                body: post
            }),
            invalidatesTags: ['Posts'],
        })
    }),
    overrideExisting: false
});

export const { useCreatePostMutation, useGetPostsQuery } = postApi;