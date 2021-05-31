import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/client';
export declare type Maybe<T> = T | null;
export declare type Exact<T extends {
    [key: string]: unknown;
}> = {
    [K in keyof T]: T[K];
};
export declare type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]?: Maybe<T[SubKey]>;
};
export declare type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export declare type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
    citext: any;
    json: any;
    timestamp: any;
    uuid: any;
};
/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export declare type String_Comparison_Exp = {
    _eq?: Maybe<Scalars['String']>;
    _gt?: Maybe<Scalars['String']>;
    _gte?: Maybe<Scalars['String']>;
    /** does the column match the given case-insensitive pattern */
    _ilike?: Maybe<Scalars['String']>;
    _in?: Maybe<Array<Scalars['String']>>;
    /** does the column match the given POSIX regular expression, case insensitive */
    _iregex?: Maybe<Scalars['String']>;
    _is_null?: Maybe<Scalars['Boolean']>;
    /** does the column match the given pattern */
    _like?: Maybe<Scalars['String']>;
    _lt?: Maybe<Scalars['String']>;
    _lte?: Maybe<Scalars['String']>;
    _neq?: Maybe<Scalars['String']>;
    /** does the column NOT match the given case-insensitive pattern */
    _nilike?: Maybe<Scalars['String']>;
    _nin?: Maybe<Array<Scalars['String']>>;
    /** does the column NOT match the given POSIX regular expression, case insensitive */
    _niregex?: Maybe<Scalars['String']>;
    /** does the column NOT match the given pattern */
    _nlike?: Maybe<Scalars['String']>;
    /** does the column NOT match the given POSIX regular expression, case sensitive */
    _nregex?: Maybe<Scalars['String']>;
    /** does the column NOT match the given SQL regular expression */
    _nsimilar?: Maybe<Scalars['String']>;
    /** does the column match the given POSIX regular expression, case sensitive */
    _regex?: Maybe<Scalars['String']>;
    /** does the column match the given SQL regular expression */
    _similar?: Maybe<Scalars['String']>;
};
/** columns and relationships of "app_public.resume_views" */
export declare type App_Public_Resume_Views = {
    __typename?: 'app_public_resume_views';
    created_at?: Maybe<Scalars['timestamp']>;
    id: Scalars['uuid'];
    /** An object relationship */
    resume?: Maybe<App_Public_Resumes>;
    resume_id?: Maybe<Scalars['uuid']>;
    updated_at?: Maybe<Scalars['timestamp']>;
};
/** aggregated selection of "app_public.resume_views" */
export declare type App_Public_Resume_Views_Aggregate = {
    __typename?: 'app_public_resume_views_aggregate';
    aggregate?: Maybe<App_Public_Resume_Views_Aggregate_Fields>;
    nodes: Array<App_Public_Resume_Views>;
};
/** aggregate fields of "app_public.resume_views" */
export declare type App_Public_Resume_Views_Aggregate_Fields = {
    __typename?: 'app_public_resume_views_aggregate_fields';
    count: Scalars['Int'];
    max?: Maybe<App_Public_Resume_Views_Max_Fields>;
    min?: Maybe<App_Public_Resume_Views_Min_Fields>;
};
/** aggregate fields of "app_public.resume_views" */
export declare type App_Public_Resume_Views_Aggregate_FieldsCountArgs = {
    columns?: Maybe<Array<App_Public_Resume_Views_Select_Column>>;
    distinct?: Maybe<Scalars['Boolean']>;
};
/** order by aggregate values of table "app_public.resume_views" */
export declare type App_Public_Resume_Views_Aggregate_Order_By = {
    count?: Maybe<Order_By>;
    max?: Maybe<App_Public_Resume_Views_Max_Order_By>;
    min?: Maybe<App_Public_Resume_Views_Min_Order_By>;
};
/** input type for inserting array relation for remote table "app_public.resume_views" */
export declare type App_Public_Resume_Views_Arr_Rel_Insert_Input = {
    data: Array<App_Public_Resume_Views_Insert_Input>;
    /** on conflict condition */
    on_conflict?: Maybe<App_Public_Resume_Views_On_Conflict>;
};
/** Boolean expression to filter rows from the table "app_public.resume_views". All fields are combined with a logical 'AND'. */
export declare type App_Public_Resume_Views_Bool_Exp = {
    _and?: Maybe<Array<App_Public_Resume_Views_Bool_Exp>>;
    _not?: Maybe<App_Public_Resume_Views_Bool_Exp>;
    _or?: Maybe<Array<App_Public_Resume_Views_Bool_Exp>>;
    created_at?: Maybe<Timestamp_Comparison_Exp>;
    id?: Maybe<Uuid_Comparison_Exp>;
    resume?: Maybe<App_Public_Resumes_Bool_Exp>;
    resume_id?: Maybe<Uuid_Comparison_Exp>;
    updated_at?: Maybe<Timestamp_Comparison_Exp>;
};
/** unique or primary key constraints on table "app_public.resume_views" */
export declare enum App_Public_Resume_Views_Constraint {
    /** unique or primary key constraint */
    ResumeViewsPkey = "resume_views_pkey"
}
/** input type for inserting data into table "app_public.resume_views" */
export declare type App_Public_Resume_Views_Insert_Input = {
    created_at?: Maybe<Scalars['timestamp']>;
    id?: Maybe<Scalars['uuid']>;
    resume?: Maybe<App_Public_Resumes_Obj_Rel_Insert_Input>;
    resume_id?: Maybe<Scalars['uuid']>;
    updated_at?: Maybe<Scalars['timestamp']>;
};
/** aggregate max on columns */
export declare type App_Public_Resume_Views_Max_Fields = {
    __typename?: 'app_public_resume_views_max_fields';
    created_at?: Maybe<Scalars['timestamp']>;
    id?: Maybe<Scalars['uuid']>;
    resume_id?: Maybe<Scalars['uuid']>;
    updated_at?: Maybe<Scalars['timestamp']>;
};
/** order by max() on columns of table "app_public.resume_views" */
export declare type App_Public_Resume_Views_Max_Order_By = {
    created_at?: Maybe<Order_By>;
    id?: Maybe<Order_By>;
    resume_id?: Maybe<Order_By>;
    updated_at?: Maybe<Order_By>;
};
/** aggregate min on columns */
export declare type App_Public_Resume_Views_Min_Fields = {
    __typename?: 'app_public_resume_views_min_fields';
    created_at?: Maybe<Scalars['timestamp']>;
    id?: Maybe<Scalars['uuid']>;
    resume_id?: Maybe<Scalars['uuid']>;
    updated_at?: Maybe<Scalars['timestamp']>;
};
/** order by min() on columns of table "app_public.resume_views" */
export declare type App_Public_Resume_Views_Min_Order_By = {
    created_at?: Maybe<Order_By>;
    id?: Maybe<Order_By>;
    resume_id?: Maybe<Order_By>;
    updated_at?: Maybe<Order_By>;
};
/** response of any mutation on the table "app_public.resume_views" */
export declare type App_Public_Resume_Views_Mutation_Response = {
    __typename?: 'app_public_resume_views_mutation_response';
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int'];
    /** data from the rows affected by the mutation */
    returning: Array<App_Public_Resume_Views>;
};
/** on conflict condition type for table "app_public.resume_views" */
export declare type App_Public_Resume_Views_On_Conflict = {
    constraint: App_Public_Resume_Views_Constraint;
    update_columns?: Array<App_Public_Resume_Views_Update_Column>;
    where?: Maybe<App_Public_Resume_Views_Bool_Exp>;
};
/** Ordering options when selecting data from "app_public.resume_views". */
export declare type App_Public_Resume_Views_Order_By = {
    created_at?: Maybe<Order_By>;
    id?: Maybe<Order_By>;
    resume?: Maybe<App_Public_Resumes_Order_By>;
    resume_id?: Maybe<Order_By>;
    updated_at?: Maybe<Order_By>;
};
/** primary key columns input for table: app_public_resume_views */
export declare type App_Public_Resume_Views_Pk_Columns_Input = {
    id: Scalars['uuid'];
};
/** select columns of table "app_public.resume_views" */
export declare enum App_Public_Resume_Views_Select_Column {
    /** column name */
    CreatedAt = "created_at",
    /** column name */
    Id = "id",
    /** column name */
    ResumeId = "resume_id",
    /** column name */
    UpdatedAt = "updated_at"
}
/** input type for updating data in table "app_public.resume_views" */
export declare type App_Public_Resume_Views_Set_Input = {
    created_at?: Maybe<Scalars['timestamp']>;
    id?: Maybe<Scalars['uuid']>;
    resume_id?: Maybe<Scalars['uuid']>;
    updated_at?: Maybe<Scalars['timestamp']>;
};
/** update columns of table "app_public.resume_views" */
export declare enum App_Public_Resume_Views_Update_Column {
    /** column name */
    CreatedAt = "created_at",
    /** column name */
    Id = "id",
    /** column name */
    ResumeId = "resume_id",
    /** column name */
    UpdatedAt = "updated_at"
}
/** columns and relationships of "app_public.resumes" */
export declare type App_Public_Resumes = {
    __typename?: 'app_public_resumes';
    created_at?: Maybe<Scalars['timestamp']>;
    id: Scalars['uuid'];
    resume_data?: Maybe<Scalars['json']>;
    /** An array relationship */
    resume_views: Array<App_Public_Resume_Views>;
    /** An aggregate relationship */
    resume_views_aggregate: App_Public_Resume_Views_Aggregate;
    slug: Scalars['String'];
    updated_at?: Maybe<Scalars['timestamp']>;
    /** An object relationship */
    user?: Maybe<App_Public_Users>;
    user_auth_id?: Maybe<Scalars['String']>;
};
/** columns and relationships of "app_public.resumes" */
export declare type App_Public_ResumesResume_DataArgs = {
    path?: Maybe<Scalars['String']>;
};
/** columns and relationships of "app_public.resumes" */
export declare type App_Public_ResumesResume_ViewsArgs = {
    distinct_on?: Maybe<Array<App_Public_Resume_Views_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<App_Public_Resume_Views_Order_By>>;
    where?: Maybe<App_Public_Resume_Views_Bool_Exp>;
};
/** columns and relationships of "app_public.resumes" */
export declare type App_Public_ResumesResume_Views_AggregateArgs = {
    distinct_on?: Maybe<Array<App_Public_Resume_Views_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<App_Public_Resume_Views_Order_By>>;
    where?: Maybe<App_Public_Resume_Views_Bool_Exp>;
};
/** aggregated selection of "app_public.resumes" */
export declare type App_Public_Resumes_Aggregate = {
    __typename?: 'app_public_resumes_aggregate';
    aggregate?: Maybe<App_Public_Resumes_Aggregate_Fields>;
    nodes: Array<App_Public_Resumes>;
};
/** aggregate fields of "app_public.resumes" */
export declare type App_Public_Resumes_Aggregate_Fields = {
    __typename?: 'app_public_resumes_aggregate_fields';
    count: Scalars['Int'];
    max?: Maybe<App_Public_Resumes_Max_Fields>;
    min?: Maybe<App_Public_Resumes_Min_Fields>;
};
/** aggregate fields of "app_public.resumes" */
export declare type App_Public_Resumes_Aggregate_FieldsCountArgs = {
    columns?: Maybe<Array<App_Public_Resumes_Select_Column>>;
    distinct?: Maybe<Scalars['Boolean']>;
};
/** order by aggregate values of table "app_public.resumes" */
export declare type App_Public_Resumes_Aggregate_Order_By = {
    count?: Maybe<Order_By>;
    max?: Maybe<App_Public_Resumes_Max_Order_By>;
    min?: Maybe<App_Public_Resumes_Min_Order_By>;
};
/** input type for inserting array relation for remote table "app_public.resumes" */
export declare type App_Public_Resumes_Arr_Rel_Insert_Input = {
    data: Array<App_Public_Resumes_Insert_Input>;
    /** on conflict condition */
    on_conflict?: Maybe<App_Public_Resumes_On_Conflict>;
};
/** Boolean expression to filter rows from the table "app_public.resumes". All fields are combined with a logical 'AND'. */
export declare type App_Public_Resumes_Bool_Exp = {
    _and?: Maybe<Array<App_Public_Resumes_Bool_Exp>>;
    _not?: Maybe<App_Public_Resumes_Bool_Exp>;
    _or?: Maybe<Array<App_Public_Resumes_Bool_Exp>>;
    created_at?: Maybe<Timestamp_Comparison_Exp>;
    id?: Maybe<Uuid_Comparison_Exp>;
    resume_data?: Maybe<Json_Comparison_Exp>;
    resume_views?: Maybe<App_Public_Resume_Views_Bool_Exp>;
    slug?: Maybe<String_Comparison_Exp>;
    updated_at?: Maybe<Timestamp_Comparison_Exp>;
    user?: Maybe<App_Public_Users_Bool_Exp>;
    user_auth_id?: Maybe<String_Comparison_Exp>;
};
/** unique or primary key constraints on table "app_public.resumes" */
export declare enum App_Public_Resumes_Constraint {
    /** unique or primary key constraint */
    ResumesPkey = "resumes_pkey",
    /** unique or primary key constraint */
    ResumesSlugKey = "resumes_slug_key",
    /** unique or primary key constraint */
    SlugIdx = "slug_idx"
}
/** input type for inserting data into table "app_public.resumes" */
export declare type App_Public_Resumes_Insert_Input = {
    created_at?: Maybe<Scalars['timestamp']>;
    id?: Maybe<Scalars['uuid']>;
    resume_data?: Maybe<Scalars['json']>;
    resume_views?: Maybe<App_Public_Resume_Views_Arr_Rel_Insert_Input>;
    slug?: Maybe<Scalars['String']>;
    updated_at?: Maybe<Scalars['timestamp']>;
    user?: Maybe<App_Public_Users_Obj_Rel_Insert_Input>;
    user_auth_id?: Maybe<Scalars['String']>;
};
/** aggregate max on columns */
export declare type App_Public_Resumes_Max_Fields = {
    __typename?: 'app_public_resumes_max_fields';
    created_at?: Maybe<Scalars['timestamp']>;
    id?: Maybe<Scalars['uuid']>;
    slug?: Maybe<Scalars['String']>;
    updated_at?: Maybe<Scalars['timestamp']>;
    user_auth_id?: Maybe<Scalars['String']>;
};
/** order by max() on columns of table "app_public.resumes" */
export declare type App_Public_Resumes_Max_Order_By = {
    created_at?: Maybe<Order_By>;
    id?: Maybe<Order_By>;
    slug?: Maybe<Order_By>;
    updated_at?: Maybe<Order_By>;
    user_auth_id?: Maybe<Order_By>;
};
/** aggregate min on columns */
export declare type App_Public_Resumes_Min_Fields = {
    __typename?: 'app_public_resumes_min_fields';
    created_at?: Maybe<Scalars['timestamp']>;
    id?: Maybe<Scalars['uuid']>;
    slug?: Maybe<Scalars['String']>;
    updated_at?: Maybe<Scalars['timestamp']>;
    user_auth_id?: Maybe<Scalars['String']>;
};
/** order by min() on columns of table "app_public.resumes" */
export declare type App_Public_Resumes_Min_Order_By = {
    created_at?: Maybe<Order_By>;
    id?: Maybe<Order_By>;
    slug?: Maybe<Order_By>;
    updated_at?: Maybe<Order_By>;
    user_auth_id?: Maybe<Order_By>;
};
/** response of any mutation on the table "app_public.resumes" */
export declare type App_Public_Resumes_Mutation_Response = {
    __typename?: 'app_public_resumes_mutation_response';
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int'];
    /** data from the rows affected by the mutation */
    returning: Array<App_Public_Resumes>;
};
/** input type for inserting object relation for remote table "app_public.resumes" */
export declare type App_Public_Resumes_Obj_Rel_Insert_Input = {
    data: App_Public_Resumes_Insert_Input;
    /** on conflict condition */
    on_conflict?: Maybe<App_Public_Resumes_On_Conflict>;
};
/** on conflict condition type for table "app_public.resumes" */
export declare type App_Public_Resumes_On_Conflict = {
    constraint: App_Public_Resumes_Constraint;
    update_columns?: Array<App_Public_Resumes_Update_Column>;
    where?: Maybe<App_Public_Resumes_Bool_Exp>;
};
/** Ordering options when selecting data from "app_public.resumes". */
export declare type App_Public_Resumes_Order_By = {
    created_at?: Maybe<Order_By>;
    id?: Maybe<Order_By>;
    resume_data?: Maybe<Order_By>;
    resume_views_aggregate?: Maybe<App_Public_Resume_Views_Aggregate_Order_By>;
    slug?: Maybe<Order_By>;
    updated_at?: Maybe<Order_By>;
    user?: Maybe<App_Public_Users_Order_By>;
    user_auth_id?: Maybe<Order_By>;
};
/** primary key columns input for table: app_public_resumes */
export declare type App_Public_Resumes_Pk_Columns_Input = {
    id: Scalars['uuid'];
};
/** select columns of table "app_public.resumes" */
export declare enum App_Public_Resumes_Select_Column {
    /** column name */
    CreatedAt = "created_at",
    /** column name */
    Id = "id",
    /** column name */
    ResumeData = "resume_data",
    /** column name */
    Slug = "slug",
    /** column name */
    UpdatedAt = "updated_at",
    /** column name */
    UserAuthId = "user_auth_id"
}
/** input type for updating data in table "app_public.resumes" */
export declare type App_Public_Resumes_Set_Input = {
    created_at?: Maybe<Scalars['timestamp']>;
    id?: Maybe<Scalars['uuid']>;
    resume_data?: Maybe<Scalars['json']>;
    slug?: Maybe<Scalars['String']>;
    updated_at?: Maybe<Scalars['timestamp']>;
    user_auth_id?: Maybe<Scalars['String']>;
};
/** update columns of table "app_public.resumes" */
export declare enum App_Public_Resumes_Update_Column {
    /** column name */
    CreatedAt = "created_at",
    /** column name */
    Id = "id",
    /** column name */
    ResumeData = "resume_data",
    /** column name */
    Slug = "slug",
    /** column name */
    UpdatedAt = "updated_at",
    /** column name */
    UserAuthId = "user_auth_id"
}
/** columns and relationships of "app_public.users" */
export declare type App_Public_Users = {
    __typename?: 'app_public_users';
    auth_id: Scalars['String'];
    created_at?: Maybe<Scalars['timestamp']>;
    email?: Maybe<Scalars['citext']>;
    id: Scalars['uuid'];
    /** An array relationship */
    resumes: Array<App_Public_Resumes>;
    /** An aggregate relationship */
    resumes_aggregate: App_Public_Resumes_Aggregate;
    updated_at?: Maybe<Scalars['timestamp']>;
};
/** columns and relationships of "app_public.users" */
export declare type App_Public_UsersResumesArgs = {
    distinct_on?: Maybe<Array<App_Public_Resumes_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<App_Public_Resumes_Order_By>>;
    where?: Maybe<App_Public_Resumes_Bool_Exp>;
};
/** columns and relationships of "app_public.users" */
export declare type App_Public_UsersResumes_AggregateArgs = {
    distinct_on?: Maybe<Array<App_Public_Resumes_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<App_Public_Resumes_Order_By>>;
    where?: Maybe<App_Public_Resumes_Bool_Exp>;
};
/** aggregated selection of "app_public.users" */
export declare type App_Public_Users_Aggregate = {
    __typename?: 'app_public_users_aggregate';
    aggregate?: Maybe<App_Public_Users_Aggregate_Fields>;
    nodes: Array<App_Public_Users>;
};
/** aggregate fields of "app_public.users" */
export declare type App_Public_Users_Aggregate_Fields = {
    __typename?: 'app_public_users_aggregate_fields';
    count: Scalars['Int'];
    max?: Maybe<App_Public_Users_Max_Fields>;
    min?: Maybe<App_Public_Users_Min_Fields>;
};
/** aggregate fields of "app_public.users" */
export declare type App_Public_Users_Aggregate_FieldsCountArgs = {
    columns?: Maybe<Array<App_Public_Users_Select_Column>>;
    distinct?: Maybe<Scalars['Boolean']>;
};
/** Boolean expression to filter rows from the table "app_public.users". All fields are combined with a logical 'AND'. */
export declare type App_Public_Users_Bool_Exp = {
    _and?: Maybe<Array<App_Public_Users_Bool_Exp>>;
    _not?: Maybe<App_Public_Users_Bool_Exp>;
    _or?: Maybe<Array<App_Public_Users_Bool_Exp>>;
    auth_id?: Maybe<String_Comparison_Exp>;
    created_at?: Maybe<Timestamp_Comparison_Exp>;
    email?: Maybe<Citext_Comparison_Exp>;
    id?: Maybe<Uuid_Comparison_Exp>;
    resumes?: Maybe<App_Public_Resumes_Bool_Exp>;
    updated_at?: Maybe<Timestamp_Comparison_Exp>;
};
/** unique or primary key constraints on table "app_public.users" */
export declare enum App_Public_Users_Constraint {
    /** unique or primary key constraint */
    UsersAuthIdKey = "users_auth_id_key",
    /** unique or primary key constraint */
    UsersPkey = "users_pkey"
}
/** input type for inserting data into table "app_public.users" */
export declare type App_Public_Users_Insert_Input = {
    auth_id?: Maybe<Scalars['String']>;
    created_at?: Maybe<Scalars['timestamp']>;
    email?: Maybe<Scalars['citext']>;
    id?: Maybe<Scalars['uuid']>;
    resumes?: Maybe<App_Public_Resumes_Arr_Rel_Insert_Input>;
    updated_at?: Maybe<Scalars['timestamp']>;
};
/** aggregate max on columns */
export declare type App_Public_Users_Max_Fields = {
    __typename?: 'app_public_users_max_fields';
    auth_id?: Maybe<Scalars['String']>;
    created_at?: Maybe<Scalars['timestamp']>;
    email?: Maybe<Scalars['citext']>;
    id?: Maybe<Scalars['uuid']>;
    updated_at?: Maybe<Scalars['timestamp']>;
};
/** aggregate min on columns */
export declare type App_Public_Users_Min_Fields = {
    __typename?: 'app_public_users_min_fields';
    auth_id?: Maybe<Scalars['String']>;
    created_at?: Maybe<Scalars['timestamp']>;
    email?: Maybe<Scalars['citext']>;
    id?: Maybe<Scalars['uuid']>;
    updated_at?: Maybe<Scalars['timestamp']>;
};
/** response of any mutation on the table "app_public.users" */
export declare type App_Public_Users_Mutation_Response = {
    __typename?: 'app_public_users_mutation_response';
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int'];
    /** data from the rows affected by the mutation */
    returning: Array<App_Public_Users>;
};
/** input type for inserting object relation for remote table "app_public.users" */
export declare type App_Public_Users_Obj_Rel_Insert_Input = {
    data: App_Public_Users_Insert_Input;
    /** on conflict condition */
    on_conflict?: Maybe<App_Public_Users_On_Conflict>;
};
/** on conflict condition type for table "app_public.users" */
export declare type App_Public_Users_On_Conflict = {
    constraint: App_Public_Users_Constraint;
    update_columns?: Array<App_Public_Users_Update_Column>;
    where?: Maybe<App_Public_Users_Bool_Exp>;
};
/** Ordering options when selecting data from "app_public.users". */
export declare type App_Public_Users_Order_By = {
    auth_id?: Maybe<Order_By>;
    created_at?: Maybe<Order_By>;
    email?: Maybe<Order_By>;
    id?: Maybe<Order_By>;
    resumes_aggregate?: Maybe<App_Public_Resumes_Aggregate_Order_By>;
    updated_at?: Maybe<Order_By>;
};
/** primary key columns input for table: app_public_users */
export declare type App_Public_Users_Pk_Columns_Input = {
    id: Scalars['uuid'];
};
/** select columns of table "app_public.users" */
export declare enum App_Public_Users_Select_Column {
    /** column name */
    AuthId = "auth_id",
    /** column name */
    CreatedAt = "created_at",
    /** column name */
    Email = "email",
    /** column name */
    Id = "id",
    /** column name */
    UpdatedAt = "updated_at"
}
/** input type for updating data in table "app_public.users" */
export declare type App_Public_Users_Set_Input = {
    auth_id?: Maybe<Scalars['String']>;
    created_at?: Maybe<Scalars['timestamp']>;
    email?: Maybe<Scalars['citext']>;
    id?: Maybe<Scalars['uuid']>;
    updated_at?: Maybe<Scalars['timestamp']>;
};
/** update columns of table "app_public.users" */
export declare enum App_Public_Users_Update_Column {
    /** column name */
    AuthId = "auth_id",
    /** column name */
    CreatedAt = "created_at",
    /** column name */
    Email = "email",
    /** column name */
    Id = "id",
    /** column name */
    UpdatedAt = "updated_at"
}
/** Boolean expression to compare columns of type "citext". All fields are combined with logical 'AND'. */
export declare type Citext_Comparison_Exp = {
    _eq?: Maybe<Scalars['citext']>;
    _gt?: Maybe<Scalars['citext']>;
    _gte?: Maybe<Scalars['citext']>;
    /** does the column match the given case-insensitive pattern */
    _ilike?: Maybe<Scalars['citext']>;
    _in?: Maybe<Array<Scalars['citext']>>;
    /** does the column match the given POSIX regular expression, case insensitive */
    _iregex?: Maybe<Scalars['citext']>;
    _is_null?: Maybe<Scalars['Boolean']>;
    /** does the column match the given pattern */
    _like?: Maybe<Scalars['citext']>;
    _lt?: Maybe<Scalars['citext']>;
    _lte?: Maybe<Scalars['citext']>;
    _neq?: Maybe<Scalars['citext']>;
    /** does the column NOT match the given case-insensitive pattern */
    _nilike?: Maybe<Scalars['citext']>;
    _nin?: Maybe<Array<Scalars['citext']>>;
    /** does the column NOT match the given POSIX regular expression, case insensitive */
    _niregex?: Maybe<Scalars['citext']>;
    /** does the column NOT match the given pattern */
    _nlike?: Maybe<Scalars['citext']>;
    /** does the column NOT match the given POSIX regular expression, case sensitive */
    _nregex?: Maybe<Scalars['citext']>;
    /** does the column NOT match the given SQL regular expression */
    _nsimilar?: Maybe<Scalars['citext']>;
    /** does the column match the given POSIX regular expression, case sensitive */
    _regex?: Maybe<Scalars['citext']>;
    /** does the column match the given SQL regular expression */
    _similar?: Maybe<Scalars['citext']>;
};
/** Boolean expression to compare columns of type "json". All fields are combined with logical 'AND'. */
export declare type Json_Comparison_Exp = {
    _eq?: Maybe<Scalars['json']>;
    _gt?: Maybe<Scalars['json']>;
    _gte?: Maybe<Scalars['json']>;
    _in?: Maybe<Array<Scalars['json']>>;
    _is_null?: Maybe<Scalars['Boolean']>;
    _lt?: Maybe<Scalars['json']>;
    _lte?: Maybe<Scalars['json']>;
    _neq?: Maybe<Scalars['json']>;
    _nin?: Maybe<Array<Scalars['json']>>;
};
/** mutation root */
export declare type Mutation_Root = {
    __typename?: 'mutation_root';
    /** delete data from the table: "app_public.resume_views" */
    delete_app_public_resume_views?: Maybe<App_Public_Resume_Views_Mutation_Response>;
    /** delete single row from the table: "app_public.resume_views" */
    delete_app_public_resume_views_by_pk?: Maybe<App_Public_Resume_Views>;
    /** delete data from the table: "app_public.resumes" */
    delete_app_public_resumes?: Maybe<App_Public_Resumes_Mutation_Response>;
    /** delete single row from the table: "app_public.resumes" */
    delete_app_public_resumes_by_pk?: Maybe<App_Public_Resumes>;
    /** delete data from the table: "app_public.users" */
    delete_app_public_users?: Maybe<App_Public_Users_Mutation_Response>;
    /** delete single row from the table: "app_public.users" */
    delete_app_public_users_by_pk?: Maybe<App_Public_Users>;
    /** insert data into the table: "app_public.resume_views" */
    insert_app_public_resume_views?: Maybe<App_Public_Resume_Views_Mutation_Response>;
    /** insert a single row into the table: "app_public.resume_views" */
    insert_app_public_resume_views_one?: Maybe<App_Public_Resume_Views>;
    /** insert data into the table: "app_public.resumes" */
    insert_app_public_resumes?: Maybe<App_Public_Resumes_Mutation_Response>;
    /** insert a single row into the table: "app_public.resumes" */
    insert_app_public_resumes_one?: Maybe<App_Public_Resumes>;
    /** insert data into the table: "app_public.users" */
    insert_app_public_users?: Maybe<App_Public_Users_Mutation_Response>;
    /** insert a single row into the table: "app_public.users" */
    insert_app_public_users_one?: Maybe<App_Public_Users>;
    /** update data of the table: "app_public.resume_views" */
    update_app_public_resume_views?: Maybe<App_Public_Resume_Views_Mutation_Response>;
    /** update single row of the table: "app_public.resume_views" */
    update_app_public_resume_views_by_pk?: Maybe<App_Public_Resume_Views>;
    /** update data of the table: "app_public.resumes" */
    update_app_public_resumes?: Maybe<App_Public_Resumes_Mutation_Response>;
    /** update single row of the table: "app_public.resumes" */
    update_app_public_resumes_by_pk?: Maybe<App_Public_Resumes>;
    /** update data of the table: "app_public.users" */
    update_app_public_users?: Maybe<App_Public_Users_Mutation_Response>;
    /** update single row of the table: "app_public.users" */
    update_app_public_users_by_pk?: Maybe<App_Public_Users>;
};
/** mutation root */
export declare type Mutation_RootDelete_App_Public_Resume_ViewsArgs = {
    where: App_Public_Resume_Views_Bool_Exp;
};
/** mutation root */
export declare type Mutation_RootDelete_App_Public_Resume_Views_By_PkArgs = {
    id: Scalars['uuid'];
};
/** mutation root */
export declare type Mutation_RootDelete_App_Public_ResumesArgs = {
    where: App_Public_Resumes_Bool_Exp;
};
/** mutation root */
export declare type Mutation_RootDelete_App_Public_Resumes_By_PkArgs = {
    id: Scalars['uuid'];
};
/** mutation root */
export declare type Mutation_RootDelete_App_Public_UsersArgs = {
    where: App_Public_Users_Bool_Exp;
};
/** mutation root */
export declare type Mutation_RootDelete_App_Public_Users_By_PkArgs = {
    id: Scalars['uuid'];
};
/** mutation root */
export declare type Mutation_RootInsert_App_Public_Resume_ViewsArgs = {
    objects: Array<App_Public_Resume_Views_Insert_Input>;
    on_conflict?: Maybe<App_Public_Resume_Views_On_Conflict>;
};
/** mutation root */
export declare type Mutation_RootInsert_App_Public_Resume_Views_OneArgs = {
    object: App_Public_Resume_Views_Insert_Input;
    on_conflict?: Maybe<App_Public_Resume_Views_On_Conflict>;
};
/** mutation root */
export declare type Mutation_RootInsert_App_Public_ResumesArgs = {
    objects: Array<App_Public_Resumes_Insert_Input>;
    on_conflict?: Maybe<App_Public_Resumes_On_Conflict>;
};
/** mutation root */
export declare type Mutation_RootInsert_App_Public_Resumes_OneArgs = {
    object: App_Public_Resumes_Insert_Input;
    on_conflict?: Maybe<App_Public_Resumes_On_Conflict>;
};
/** mutation root */
export declare type Mutation_RootInsert_App_Public_UsersArgs = {
    objects: Array<App_Public_Users_Insert_Input>;
    on_conflict?: Maybe<App_Public_Users_On_Conflict>;
};
/** mutation root */
export declare type Mutation_RootInsert_App_Public_Users_OneArgs = {
    object: App_Public_Users_Insert_Input;
    on_conflict?: Maybe<App_Public_Users_On_Conflict>;
};
/** mutation root */
export declare type Mutation_RootUpdate_App_Public_Resume_ViewsArgs = {
    _set?: Maybe<App_Public_Resume_Views_Set_Input>;
    where: App_Public_Resume_Views_Bool_Exp;
};
/** mutation root */
export declare type Mutation_RootUpdate_App_Public_Resume_Views_By_PkArgs = {
    _set?: Maybe<App_Public_Resume_Views_Set_Input>;
    pk_columns: App_Public_Resume_Views_Pk_Columns_Input;
};
/** mutation root */
export declare type Mutation_RootUpdate_App_Public_ResumesArgs = {
    _set?: Maybe<App_Public_Resumes_Set_Input>;
    where: App_Public_Resumes_Bool_Exp;
};
/** mutation root */
export declare type Mutation_RootUpdate_App_Public_Resumes_By_PkArgs = {
    _set?: Maybe<App_Public_Resumes_Set_Input>;
    pk_columns: App_Public_Resumes_Pk_Columns_Input;
};
/** mutation root */
export declare type Mutation_RootUpdate_App_Public_UsersArgs = {
    _set?: Maybe<App_Public_Users_Set_Input>;
    where: App_Public_Users_Bool_Exp;
};
/** mutation root */
export declare type Mutation_RootUpdate_App_Public_Users_By_PkArgs = {
    _set?: Maybe<App_Public_Users_Set_Input>;
    pk_columns: App_Public_Users_Pk_Columns_Input;
};
/** column ordering options */
export declare enum Order_By {
    /** in ascending order, nulls last */
    Asc = "asc",
    /** in ascending order, nulls first */
    AscNullsFirst = "asc_nulls_first",
    /** in ascending order, nulls last */
    AscNullsLast = "asc_nulls_last",
    /** in descending order, nulls first */
    Desc = "desc",
    /** in descending order, nulls first */
    DescNullsFirst = "desc_nulls_first",
    /** in descending order, nulls last */
    DescNullsLast = "desc_nulls_last"
}
export declare type Query_Root = {
    __typename?: 'query_root';
    /** fetch data from the table: "app_public.resume_views" */
    app_public_resume_views: Array<App_Public_Resume_Views>;
    /** fetch aggregated fields from the table: "app_public.resume_views" */
    app_public_resume_views_aggregate: App_Public_Resume_Views_Aggregate;
    /** fetch data from the table: "app_public.resume_views" using primary key columns */
    app_public_resume_views_by_pk?: Maybe<App_Public_Resume_Views>;
    /** fetch data from the table: "app_public.resumes" */
    app_public_resumes: Array<App_Public_Resumes>;
    /** fetch aggregated fields from the table: "app_public.resumes" */
    app_public_resumes_aggregate: App_Public_Resumes_Aggregate;
    /** fetch data from the table: "app_public.resumes" using primary key columns */
    app_public_resumes_by_pk?: Maybe<App_Public_Resumes>;
    /** fetch data from the table: "app_public.users" */
    app_public_users: Array<App_Public_Users>;
    /** fetch aggregated fields from the table: "app_public.users" */
    app_public_users_aggregate: App_Public_Users_Aggregate;
    /** fetch data from the table: "app_public.users" using primary key columns */
    app_public_users_by_pk?: Maybe<App_Public_Users>;
};
export declare type Query_RootApp_Public_Resume_ViewsArgs = {
    distinct_on?: Maybe<Array<App_Public_Resume_Views_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<App_Public_Resume_Views_Order_By>>;
    where?: Maybe<App_Public_Resume_Views_Bool_Exp>;
};
export declare type Query_RootApp_Public_Resume_Views_AggregateArgs = {
    distinct_on?: Maybe<Array<App_Public_Resume_Views_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<App_Public_Resume_Views_Order_By>>;
    where?: Maybe<App_Public_Resume_Views_Bool_Exp>;
};
export declare type Query_RootApp_Public_Resume_Views_By_PkArgs = {
    id: Scalars['uuid'];
};
export declare type Query_RootApp_Public_ResumesArgs = {
    distinct_on?: Maybe<Array<App_Public_Resumes_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<App_Public_Resumes_Order_By>>;
    where?: Maybe<App_Public_Resumes_Bool_Exp>;
};
export declare type Query_RootApp_Public_Resumes_AggregateArgs = {
    distinct_on?: Maybe<Array<App_Public_Resumes_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<App_Public_Resumes_Order_By>>;
    where?: Maybe<App_Public_Resumes_Bool_Exp>;
};
export declare type Query_RootApp_Public_Resumes_By_PkArgs = {
    id: Scalars['uuid'];
};
export declare type Query_RootApp_Public_UsersArgs = {
    distinct_on?: Maybe<Array<App_Public_Users_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<App_Public_Users_Order_By>>;
    where?: Maybe<App_Public_Users_Bool_Exp>;
};
export declare type Query_RootApp_Public_Users_AggregateArgs = {
    distinct_on?: Maybe<Array<App_Public_Users_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<App_Public_Users_Order_By>>;
    where?: Maybe<App_Public_Users_Bool_Exp>;
};
export declare type Query_RootApp_Public_Users_By_PkArgs = {
    id: Scalars['uuid'];
};
export declare type Subscription_Root = {
    __typename?: 'subscription_root';
    /** fetch data from the table: "app_public.resume_views" */
    app_public_resume_views: Array<App_Public_Resume_Views>;
    /** fetch aggregated fields from the table: "app_public.resume_views" */
    app_public_resume_views_aggregate: App_Public_Resume_Views_Aggregate;
    /** fetch data from the table: "app_public.resume_views" using primary key columns */
    app_public_resume_views_by_pk?: Maybe<App_Public_Resume_Views>;
    /** fetch data from the table: "app_public.resumes" */
    app_public_resumes: Array<App_Public_Resumes>;
    /** fetch aggregated fields from the table: "app_public.resumes" */
    app_public_resumes_aggregate: App_Public_Resumes_Aggregate;
    /** fetch data from the table: "app_public.resumes" using primary key columns */
    app_public_resumes_by_pk?: Maybe<App_Public_Resumes>;
    /** fetch data from the table: "app_public.users" */
    app_public_users: Array<App_Public_Users>;
    /** fetch aggregated fields from the table: "app_public.users" */
    app_public_users_aggregate: App_Public_Users_Aggregate;
    /** fetch data from the table: "app_public.users" using primary key columns */
    app_public_users_by_pk?: Maybe<App_Public_Users>;
};
export declare type Subscription_RootApp_Public_Resume_ViewsArgs = {
    distinct_on?: Maybe<Array<App_Public_Resume_Views_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<App_Public_Resume_Views_Order_By>>;
    where?: Maybe<App_Public_Resume_Views_Bool_Exp>;
};
export declare type Subscription_RootApp_Public_Resume_Views_AggregateArgs = {
    distinct_on?: Maybe<Array<App_Public_Resume_Views_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<App_Public_Resume_Views_Order_By>>;
    where?: Maybe<App_Public_Resume_Views_Bool_Exp>;
};
export declare type Subscription_RootApp_Public_Resume_Views_By_PkArgs = {
    id: Scalars['uuid'];
};
export declare type Subscription_RootApp_Public_ResumesArgs = {
    distinct_on?: Maybe<Array<App_Public_Resumes_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<App_Public_Resumes_Order_By>>;
    where?: Maybe<App_Public_Resumes_Bool_Exp>;
};
export declare type Subscription_RootApp_Public_Resumes_AggregateArgs = {
    distinct_on?: Maybe<Array<App_Public_Resumes_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<App_Public_Resumes_Order_By>>;
    where?: Maybe<App_Public_Resumes_Bool_Exp>;
};
export declare type Subscription_RootApp_Public_Resumes_By_PkArgs = {
    id: Scalars['uuid'];
};
export declare type Subscription_RootApp_Public_UsersArgs = {
    distinct_on?: Maybe<Array<App_Public_Users_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<App_Public_Users_Order_By>>;
    where?: Maybe<App_Public_Users_Bool_Exp>;
};
export declare type Subscription_RootApp_Public_Users_AggregateArgs = {
    distinct_on?: Maybe<Array<App_Public_Users_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<App_Public_Users_Order_By>>;
    where?: Maybe<App_Public_Users_Bool_Exp>;
};
export declare type Subscription_RootApp_Public_Users_By_PkArgs = {
    id: Scalars['uuid'];
};
/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export declare type Timestamp_Comparison_Exp = {
    _eq?: Maybe<Scalars['timestamp']>;
    _gt?: Maybe<Scalars['timestamp']>;
    _gte?: Maybe<Scalars['timestamp']>;
    _in?: Maybe<Array<Scalars['timestamp']>>;
    _is_null?: Maybe<Scalars['Boolean']>;
    _lt?: Maybe<Scalars['timestamp']>;
    _lte?: Maybe<Scalars['timestamp']>;
    _neq?: Maybe<Scalars['timestamp']>;
    _nin?: Maybe<Array<Scalars['timestamp']>>;
};
/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export declare type Uuid_Comparison_Exp = {
    _eq?: Maybe<Scalars['uuid']>;
    _gt?: Maybe<Scalars['uuid']>;
    _gte?: Maybe<Scalars['uuid']>;
    _in?: Maybe<Array<Scalars['uuid']>>;
    _is_null?: Maybe<Scalars['Boolean']>;
    _lt?: Maybe<Scalars['uuid']>;
    _lte?: Maybe<Scalars['uuid']>;
    _neq?: Maybe<Scalars['uuid']>;
    _nin?: Maybe<Array<Scalars['uuid']>>;
};
export declare type CreateResumeMutationVariables = Exact<{
    slug: Scalars['String'];
    resumeData: Scalars['json'];
}>;
export declare type CreateResumeMutation = ({
    __typename?: 'mutation_root';
} & {
    insert_app_public_resumes?: Maybe<({
        __typename?: 'app_public_resumes_mutation_response';
    } & Pick<App_Public_Resumes_Mutation_Response, 'affected_rows'>)>;
});
export declare type UpdateResumeByIdMutationVariables = Exact<{
    id: Scalars['uuid'];
    resumeData: Scalars['json'];
}>;
export declare type UpdateResumeByIdMutation = ({
    __typename?: 'mutation_root';
} & {
    update_app_public_resumes_by_pk?: Maybe<({
        __typename?: 'app_public_resumes';
    } & Pick<App_Public_Resumes, 'id'>)>;
});
export declare const CreateResumeDocument: ApolloReactHooks.DocumentNode;
export declare type CreateResumeMutationFn = ApolloReactCommon.MutationFunction<CreateResumeMutation, CreateResumeMutationVariables>;
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
export declare function useCreateResumeMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateResumeMutation, CreateResumeMutationVariables>): ApolloReactHooks.MutationTuple<CreateResumeMutation, Exact<{
    slug: string;
    resumeData: any;
}>>;
export declare type CreateResumeMutationHookResult = ReturnType<typeof useCreateResumeMutation>;
export declare type CreateResumeMutationResult = ApolloReactCommon.MutationResult<CreateResumeMutation>;
export declare type CreateResumeMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateResumeMutation, CreateResumeMutationVariables>;
export declare const UpdateResumeByIdDocument: ApolloReactHooks.DocumentNode;
export declare type UpdateResumeByIdMutationFn = ApolloReactCommon.MutationFunction<UpdateResumeByIdMutation, UpdateResumeByIdMutationVariables>;
/**
 * __useUpdateResumeByIdMutation__
 *
 * To run a mutation, you first call `useUpdateResumeByIdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateResumeByIdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateResumeByIdMutation, { data, loading, error }] = useUpdateResumeByIdMutation({
 *   variables: {
 *      id: // value for 'id'
 *      resumeData: // value for 'resumeData'
 *   },
 * });
 */
export declare function useUpdateResumeByIdMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateResumeByIdMutation, UpdateResumeByIdMutationVariables>): ApolloReactHooks.MutationTuple<UpdateResumeByIdMutation, Exact<{
    id: any;
    resumeData: any;
}>>;
export declare type UpdateResumeByIdMutationHookResult = ReturnType<typeof useUpdateResumeByIdMutation>;
export declare type UpdateResumeByIdMutationResult = ApolloReactCommon.MutationResult<UpdateResumeByIdMutation>;
export declare type UpdateResumeByIdMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateResumeByIdMutation, UpdateResumeByIdMutationVariables>;
