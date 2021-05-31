/* DO NOT EDIT! This file is auto-generated by graphql-code-generator - see `codegen.yml` */
import gql from 'graphql-tag';
import * as ApolloReactHooks from '@apollo/client';
/** unique or primary key constraints on table "app_public.resume_views" */
export var App_Public_Resume_Views_Constraint;
(function (App_Public_Resume_Views_Constraint) {
    /** unique or primary key constraint */
    App_Public_Resume_Views_Constraint["ResumeViewsPkey"] = "resume_views_pkey";
})(App_Public_Resume_Views_Constraint || (App_Public_Resume_Views_Constraint = {}));
/** select columns of table "app_public.resume_views" */
export var App_Public_Resume_Views_Select_Column;
(function (App_Public_Resume_Views_Select_Column) {
    /** column name */
    App_Public_Resume_Views_Select_Column["CreatedAt"] = "created_at";
    /** column name */
    App_Public_Resume_Views_Select_Column["Id"] = "id";
    /** column name */
    App_Public_Resume_Views_Select_Column["ResumeId"] = "resume_id";
    /** column name */
    App_Public_Resume_Views_Select_Column["UpdatedAt"] = "updated_at";
})(App_Public_Resume_Views_Select_Column || (App_Public_Resume_Views_Select_Column = {}));
/** update columns of table "app_public.resume_views" */
export var App_Public_Resume_Views_Update_Column;
(function (App_Public_Resume_Views_Update_Column) {
    /** column name */
    App_Public_Resume_Views_Update_Column["CreatedAt"] = "created_at";
    /** column name */
    App_Public_Resume_Views_Update_Column["Id"] = "id";
    /** column name */
    App_Public_Resume_Views_Update_Column["ResumeId"] = "resume_id";
    /** column name */
    App_Public_Resume_Views_Update_Column["UpdatedAt"] = "updated_at";
})(App_Public_Resume_Views_Update_Column || (App_Public_Resume_Views_Update_Column = {}));
/** unique or primary key constraints on table "app_public.resumes" */
export var App_Public_Resumes_Constraint;
(function (App_Public_Resumes_Constraint) {
    /** unique or primary key constraint */
    App_Public_Resumes_Constraint["ResumesPkey"] = "resumes_pkey";
    /** unique or primary key constraint */
    App_Public_Resumes_Constraint["ResumesSlugKey"] = "resumes_slug_key";
    /** unique or primary key constraint */
    App_Public_Resumes_Constraint["SlugIdx"] = "slug_idx";
})(App_Public_Resumes_Constraint || (App_Public_Resumes_Constraint = {}));
/** select columns of table "app_public.resumes" */
export var App_Public_Resumes_Select_Column;
(function (App_Public_Resumes_Select_Column) {
    /** column name */
    App_Public_Resumes_Select_Column["CreatedAt"] = "created_at";
    /** column name */
    App_Public_Resumes_Select_Column["Id"] = "id";
    /** column name */
    App_Public_Resumes_Select_Column["ResumeData"] = "resume_data";
    /** column name */
    App_Public_Resumes_Select_Column["Slug"] = "slug";
    /** column name */
    App_Public_Resumes_Select_Column["UpdatedAt"] = "updated_at";
    /** column name */
    App_Public_Resumes_Select_Column["UserId"] = "user_id";
})(App_Public_Resumes_Select_Column || (App_Public_Resumes_Select_Column = {}));
/** update columns of table "app_public.resumes" */
export var App_Public_Resumes_Update_Column;
(function (App_Public_Resumes_Update_Column) {
    /** column name */
    App_Public_Resumes_Update_Column["CreatedAt"] = "created_at";
    /** column name */
    App_Public_Resumes_Update_Column["Id"] = "id";
    /** column name */
    App_Public_Resumes_Update_Column["ResumeData"] = "resume_data";
    /** column name */
    App_Public_Resumes_Update_Column["Slug"] = "slug";
    /** column name */
    App_Public_Resumes_Update_Column["UpdatedAt"] = "updated_at";
    /** column name */
    App_Public_Resumes_Update_Column["UserId"] = "user_id";
})(App_Public_Resumes_Update_Column || (App_Public_Resumes_Update_Column = {}));
/** unique or primary key constraints on table "app_public.users" */
export var App_Public_Users_Constraint;
(function (App_Public_Users_Constraint) {
    /** unique or primary key constraint */
    App_Public_Users_Constraint["UsersPkey"] = "users_pkey";
})(App_Public_Users_Constraint || (App_Public_Users_Constraint = {}));
/** select columns of table "app_public.users" */
export var App_Public_Users_Select_Column;
(function (App_Public_Users_Select_Column) {
    /** column name */
    App_Public_Users_Select_Column["CreatedAt"] = "created_at";
    /** column name */
    App_Public_Users_Select_Column["Email"] = "email";
    /** column name */
    App_Public_Users_Select_Column["Id"] = "id";
    /** column name */
    App_Public_Users_Select_Column["UpdatedAt"] = "updated_at";
})(App_Public_Users_Select_Column || (App_Public_Users_Select_Column = {}));
/** update columns of table "app_public.users" */
export var App_Public_Users_Update_Column;
(function (App_Public_Users_Update_Column) {
    /** column name */
    App_Public_Users_Update_Column["CreatedAt"] = "created_at";
    /** column name */
    App_Public_Users_Update_Column["Email"] = "email";
    /** column name */
    App_Public_Users_Update_Column["Id"] = "id";
    /** column name */
    App_Public_Users_Update_Column["UpdatedAt"] = "updated_at";
})(App_Public_Users_Update_Column || (App_Public_Users_Update_Column = {}));
/** column ordering options */
export var Order_By;
(function (Order_By) {
    /** in ascending order, nulls last */
    Order_By["Asc"] = "asc";
    /** in ascending order, nulls first */
    Order_By["AscNullsFirst"] = "asc_nulls_first";
    /** in ascending order, nulls last */
    Order_By["AscNullsLast"] = "asc_nulls_last";
    /** in descending order, nulls first */
    Order_By["Desc"] = "desc";
    /** in descending order, nulls first */
    Order_By["DescNullsFirst"] = "desc_nulls_first";
    /** in descending order, nulls last */
    Order_By["DescNullsLast"] = "desc_nulls_last";
})(Order_By || (Order_By = {}));
export const CreateResumeDocument = gql `
    mutation CreateResume($slug: String!, $resumeData: json!) {
  insert_app_public_resumes_one(object: {slug: $slug, resume_data: $resumeData}) {
    id
  }
}
    `;
/**
 * __useCreateResumeMutation__
 *
 * To run a mutation, you first call `useCreateResumeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateResumeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createResumeMutation, { data, loading, error }] = useCreateResumeMutation({
 *   variables: {
 *      slug: // value for 'slug'
 *      resumeData: // value for 'resumeData'
 *   },
 * });
 */
export function useCreateResumeMutation(baseOptions) {
    return ApolloReactHooks.useMutation(CreateResumeDocument, baseOptions);
}