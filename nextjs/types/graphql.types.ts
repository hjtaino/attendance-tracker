export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  bigint: { input: any; output: any; }
  bytea: { input: any; output: any; }
  date: { input: any; output: any; }
  timestamptz: { input: any; output: any; }
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']['input']>;
  _gt?: InputMaybe<Scalars['Boolean']['input']>;
  _gte?: InputMaybe<Scalars['Boolean']['input']>;
  _in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Boolean']['input']>;
  _lte?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Scalars['Boolean']['input']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']['input']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
  _neq?: InputMaybe<Scalars['Int']['input']>;
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>;
};

/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bigint']['input']>;
  _gt?: InputMaybe<Scalars['bigint']['input']>;
  _gte?: InputMaybe<Scalars['bigint']['input']>;
  _in?: InputMaybe<Array<Scalars['bigint']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['bigint']['input']>;
  _lte?: InputMaybe<Scalars['bigint']['input']>;
  _neq?: InputMaybe<Scalars['bigint']['input']>;
  _nin?: InputMaybe<Array<Scalars['bigint']['input']>>;
};

/** Boolean expression to compare columns of type "bytea". All fields are combined with logical 'AND'. */
export type Bytea_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bytea']['input']>;
  _gt?: InputMaybe<Scalars['bytea']['input']>;
  _gte?: InputMaybe<Scalars['bytea']['input']>;
  _in?: InputMaybe<Array<Scalars['bytea']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['bytea']['input']>;
  _lte?: InputMaybe<Scalars['bytea']['input']>;
  _neq?: InputMaybe<Scalars['bytea']['input']>;
  _nin?: InputMaybe<Array<Scalars['bytea']['input']>>;
};

/** Boolean expression to compare columns of type "date". All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['date']['input']>;
  _gt?: InputMaybe<Scalars['date']['input']>;
  _gte?: InputMaybe<Scalars['date']['input']>;
  _in?: InputMaybe<Array<Scalars['date']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['date']['input']>;
  _lte?: InputMaybe<Scalars['date']['input']>;
  _neq?: InputMaybe<Scalars['date']['input']>;
  _nin?: InputMaybe<Array<Scalars['date']['input']>>;
};

/** columns and relationships of "functional_lines" */
export type Functional_Lines = {
  __typename?: 'functional_lines';
  active: Scalars['Boolean']['output'];
  id: Scalars['bigint']['output'];
  key: Scalars['String']['output'];
  name: Scalars['String']['output'];
  /** An array relationship */
  users: Array<Users>;
  /** An aggregate relationship */
  users_aggregate: Users_Aggregate;
  users_ids: Scalars['Int']['output'];
};


/** columns and relationships of "functional_lines" */
export type Functional_LinesUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


/** columns and relationships of "functional_lines" */
export type Functional_LinesUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** aggregated selection of "functional_lines" */
export type Functional_Lines_Aggregate = {
  __typename?: 'functional_lines_aggregate';
  aggregate?: Maybe<Functional_Lines_Aggregate_Fields>;
  nodes: Array<Functional_Lines>;
};

/** aggregate fields of "functional_lines" */
export type Functional_Lines_Aggregate_Fields = {
  __typename?: 'functional_lines_aggregate_fields';
  avg?: Maybe<Functional_Lines_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Functional_Lines_Max_Fields>;
  min?: Maybe<Functional_Lines_Min_Fields>;
  stddev?: Maybe<Functional_Lines_Stddev_Fields>;
  stddev_pop?: Maybe<Functional_Lines_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Functional_Lines_Stddev_Samp_Fields>;
  sum?: Maybe<Functional_Lines_Sum_Fields>;
  var_pop?: Maybe<Functional_Lines_Var_Pop_Fields>;
  var_samp?: Maybe<Functional_Lines_Var_Samp_Fields>;
  variance?: Maybe<Functional_Lines_Variance_Fields>;
};


/** aggregate fields of "functional_lines" */
export type Functional_Lines_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Functional_Lines_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Functional_Lines_Avg_Fields = {
  __typename?: 'functional_lines_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
  users_ids?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "functional_lines". All fields are combined with a logical 'AND'. */
export type Functional_Lines_Bool_Exp = {
  _and?: InputMaybe<Array<Functional_Lines_Bool_Exp>>;
  _not?: InputMaybe<Functional_Lines_Bool_Exp>;
  _or?: InputMaybe<Array<Functional_Lines_Bool_Exp>>;
  active?: InputMaybe<Boolean_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  key?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  users?: InputMaybe<Users_Bool_Exp>;
  users_ids?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "functional_lines" */
export enum Functional_Lines_Constraint {
  /** unique or primary key constraint */
  FunctionalLinesPkey = 'functional_lines_pkey'
}

/** input type for incrementing numeric columns in table "functional_lines" */
export type Functional_Lines_Inc_Input = {
  id?: InputMaybe<Scalars['bigint']['input']>;
  users_ids?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "functional_lines" */
export type Functional_Lines_Insert_Input = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  users?: InputMaybe<Users_Arr_Rel_Insert_Input>;
  users_ids?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate max on columns */
export type Functional_Lines_Max_Fields = {
  __typename?: 'functional_lines_max_fields';
  id?: Maybe<Scalars['bigint']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  users_ids?: Maybe<Scalars['Int']['output']>;
};

/** aggregate min on columns */
export type Functional_Lines_Min_Fields = {
  __typename?: 'functional_lines_min_fields';
  id?: Maybe<Scalars['bigint']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  users_ids?: Maybe<Scalars['Int']['output']>;
};

/** response of any mutation on the table "functional_lines" */
export type Functional_Lines_Mutation_Response = {
  __typename?: 'functional_lines_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Functional_Lines>;
};

/** input type for inserting object relation for remote table "functional_lines" */
export type Functional_Lines_Obj_Rel_Insert_Input = {
  data: Functional_Lines_Insert_Input;
  /** on conflict condition */
  on_conflict?: InputMaybe<Functional_Lines_On_Conflict>;
};

/** on conflict condition type for table "functional_lines" */
export type Functional_Lines_On_Conflict = {
  constraint: Functional_Lines_Constraint;
  update_columns?: Array<Functional_Lines_Update_Column>;
  where?: InputMaybe<Functional_Lines_Bool_Exp>;
};

/** Ordering options when selecting data from "functional_lines". */
export type Functional_Lines_Order_By = {
  active?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  key?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  users_aggregate?: InputMaybe<Users_Aggregate_Order_By>;
  users_ids?: InputMaybe<Order_By>;
};

/** primary key columns input for table: functional_lines */
export type Functional_Lines_Pk_Columns_Input = {
  id: Scalars['bigint']['input'];
};

/** select columns of table "functional_lines" */
export enum Functional_Lines_Select_Column {
  /** column name */
  Active = 'active',
  /** column name */
  Id = 'id',
  /** column name */
  Key = 'key',
  /** column name */
  Name = 'name',
  /** column name */
  UsersIds = 'users_ids'
}

/** input type for updating data in table "functional_lines" */
export type Functional_Lines_Set_Input = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  users_ids?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate stddev on columns */
export type Functional_Lines_Stddev_Fields = {
  __typename?: 'functional_lines_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
  users_ids?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Functional_Lines_Stddev_Pop_Fields = {
  __typename?: 'functional_lines_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  users_ids?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Functional_Lines_Stddev_Samp_Fields = {
  __typename?: 'functional_lines_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  users_ids?: Maybe<Scalars['Float']['output']>;
};

/** aggregate sum on columns */
export type Functional_Lines_Sum_Fields = {
  __typename?: 'functional_lines_sum_fields';
  id?: Maybe<Scalars['bigint']['output']>;
  users_ids?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "functional_lines" */
export enum Functional_Lines_Update_Column {
  /** column name */
  Active = 'active',
  /** column name */
  Id = 'id',
  /** column name */
  Key = 'key',
  /** column name */
  Name = 'name',
  /** column name */
  UsersIds = 'users_ids'
}

/** aggregate var_pop on columns */
export type Functional_Lines_Var_Pop_Fields = {
  __typename?: 'functional_lines_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  users_ids?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Functional_Lines_Var_Samp_Fields = {
  __typename?: 'functional_lines_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  users_ids?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Functional_Lines_Variance_Fields = {
  __typename?: 'functional_lines_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
  users_ids?: Maybe<Scalars['Float']['output']>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "functional_lines" */
  delete_functional_lines?: Maybe<Functional_Lines_Mutation_Response>;
  /** delete single row from the table: "functional_lines" */
  delete_functional_lines_by_pk?: Maybe<Functional_Lines>;
  /** delete data from the table: "request_types" */
  delete_request_types?: Maybe<Request_Types_Mutation_Response>;
  /** delete single row from the table: "request_types" */
  delete_request_types_by_pk?: Maybe<Request_Types>;
  /** delete data from the table: "status" */
  delete_status?: Maybe<Status_Mutation_Response>;
  /** delete single row from the table: "status" */
  delete_status_by_pk?: Maybe<Status>;
  /** delete data from the table: "trans_leave_request" */
  delete_trans_leave_request?: Maybe<Trans_Leave_Request_Mutation_Response>;
  /** delete data from the table: "trans_leave_request_attachments" */
  delete_trans_leave_request_attachments?: Maybe<Trans_Leave_Request_Attachments_Mutation_Response>;
  /** delete single row from the table: "trans_leave_request_attachments" */
  delete_trans_leave_request_attachments_by_pk?: Maybe<Trans_Leave_Request_Attachments>;
  /** delete single row from the table: "trans_leave_request" */
  delete_trans_leave_request_by_pk?: Maybe<Trans_Leave_Request>;
  /** delete data from the table: "trans_leave_request_lines" */
  delete_trans_leave_request_lines?: Maybe<Trans_Leave_Request_Lines_Mutation_Response>;
  /** delete single row from the table: "trans_leave_request_lines" */
  delete_trans_leave_request_lines_by_pk?: Maybe<Trans_Leave_Request_Lines>;
  /** delete data from the table: "user_groups" */
  delete_user_groups?: Maybe<User_Groups_Mutation_Response>;
  /** delete single row from the table: "user_groups" */
  delete_user_groups_by_pk?: Maybe<User_Groups>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** delete data from the table: "users_leave_lines" */
  delete_users_leave_lines?: Maybe<Users_Leave_Lines_Mutation_Response>;
  /** delete single row from the table: "users_leave_lines" */
  delete_users_leave_lines_by_pk?: Maybe<Users_Leave_Lines>;
  /** insert data into the table: "functional_lines" */
  insert_functional_lines?: Maybe<Functional_Lines_Mutation_Response>;
  /** insert a single row into the table: "functional_lines" */
  insert_functional_lines_one?: Maybe<Functional_Lines>;
  /** insert data into the table: "request_types" */
  insert_request_types?: Maybe<Request_Types_Mutation_Response>;
  /** insert a single row into the table: "request_types" */
  insert_request_types_one?: Maybe<Request_Types>;
  /** insert data into the table: "status" */
  insert_status?: Maybe<Status_Mutation_Response>;
  /** insert a single row into the table: "status" */
  insert_status_one?: Maybe<Status>;
  /** insert data into the table: "trans_leave_request" */
  insert_trans_leave_request?: Maybe<Trans_Leave_Request_Mutation_Response>;
  /** insert data into the table: "trans_leave_request_attachments" */
  insert_trans_leave_request_attachments?: Maybe<Trans_Leave_Request_Attachments_Mutation_Response>;
  /** insert a single row into the table: "trans_leave_request_attachments" */
  insert_trans_leave_request_attachments_one?: Maybe<Trans_Leave_Request_Attachments>;
  /** insert data into the table: "trans_leave_request_lines" */
  insert_trans_leave_request_lines?: Maybe<Trans_Leave_Request_Lines_Mutation_Response>;
  /** insert a single row into the table: "trans_leave_request_lines" */
  insert_trans_leave_request_lines_one?: Maybe<Trans_Leave_Request_Lines>;
  /** insert a single row into the table: "trans_leave_request" */
  insert_trans_leave_request_one?: Maybe<Trans_Leave_Request>;
  /** insert data into the table: "user_groups" */
  insert_user_groups?: Maybe<User_Groups_Mutation_Response>;
  /** insert a single row into the table: "user_groups" */
  insert_user_groups_one?: Maybe<User_Groups>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert data into the table: "users_leave_lines" */
  insert_users_leave_lines?: Maybe<Users_Leave_Lines_Mutation_Response>;
  /** insert a single row into the table: "users_leave_lines" */
  insert_users_leave_lines_one?: Maybe<Users_Leave_Lines>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** update data of the table: "functional_lines" */
  update_functional_lines?: Maybe<Functional_Lines_Mutation_Response>;
  /** update single row of the table: "functional_lines" */
  update_functional_lines_by_pk?: Maybe<Functional_Lines>;
  /** update data of the table: "request_types" */
  update_request_types?: Maybe<Request_Types_Mutation_Response>;
  /** update single row of the table: "request_types" */
  update_request_types_by_pk?: Maybe<Request_Types>;
  /** update data of the table: "status" */
  update_status?: Maybe<Status_Mutation_Response>;
  /** update single row of the table: "status" */
  update_status_by_pk?: Maybe<Status>;
  /** update data of the table: "trans_leave_request" */
  update_trans_leave_request?: Maybe<Trans_Leave_Request_Mutation_Response>;
  /** update data of the table: "trans_leave_request_attachments" */
  update_trans_leave_request_attachments?: Maybe<Trans_Leave_Request_Attachments_Mutation_Response>;
  /** update single row of the table: "trans_leave_request_attachments" */
  update_trans_leave_request_attachments_by_pk?: Maybe<Trans_Leave_Request_Attachments>;
  /** update single row of the table: "trans_leave_request" */
  update_trans_leave_request_by_pk?: Maybe<Trans_Leave_Request>;
  /** update data of the table: "trans_leave_request_lines" */
  update_trans_leave_request_lines?: Maybe<Trans_Leave_Request_Lines_Mutation_Response>;
  /** update single row of the table: "trans_leave_request_lines" */
  update_trans_leave_request_lines_by_pk?: Maybe<Trans_Leave_Request_Lines>;
  /** update data of the table: "user_groups" */
  update_user_groups?: Maybe<User_Groups_Mutation_Response>;
  /** update single row of the table: "user_groups" */
  update_user_groups_by_pk?: Maybe<User_Groups>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
  /** update data of the table: "users_leave_lines" */
  update_users_leave_lines?: Maybe<Users_Leave_Lines_Mutation_Response>;
  /** update single row of the table: "users_leave_lines" */
  update_users_leave_lines_by_pk?: Maybe<Users_Leave_Lines>;
};


/** mutation root */
export type Mutation_RootDelete_Functional_LinesArgs = {
  where: Functional_Lines_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Functional_Lines_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Request_TypesArgs = {
  where: Request_Types_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Request_Types_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


/** mutation root */
export type Mutation_RootDelete_StatusArgs = {
  where: Status_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Status_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Trans_Leave_RequestArgs = {
  where: Trans_Leave_Request_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Trans_Leave_Request_AttachmentsArgs = {
  where: Trans_Leave_Request_Attachments_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Trans_Leave_Request_Attachments_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Trans_Leave_Request_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Trans_Leave_Request_LinesArgs = {
  where: Trans_Leave_Request_Lines_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Trans_Leave_Request_Lines_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


/** mutation root */
export type Mutation_RootDelete_User_GroupsArgs = {
  where: User_Groups_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_Groups_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Users_Leave_LinesArgs = {
  where: Users_Leave_Lines_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_Leave_Lines_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


/** mutation root */
export type Mutation_RootInsert_Functional_LinesArgs = {
  objects: Array<Functional_Lines_Insert_Input>;
  on_conflict?: InputMaybe<Functional_Lines_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Functional_Lines_OneArgs = {
  object: Functional_Lines_Insert_Input;
  on_conflict?: InputMaybe<Functional_Lines_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Request_TypesArgs = {
  objects: Array<Request_Types_Insert_Input>;
  on_conflict?: InputMaybe<Request_Types_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Request_Types_OneArgs = {
  object: Request_Types_Insert_Input;
  on_conflict?: InputMaybe<Request_Types_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_StatusArgs = {
  objects: Array<Status_Insert_Input>;
  on_conflict?: InputMaybe<Status_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Status_OneArgs = {
  object: Status_Insert_Input;
  on_conflict?: InputMaybe<Status_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Trans_Leave_RequestArgs = {
  objects: Array<Trans_Leave_Request_Insert_Input>;
  on_conflict?: InputMaybe<Trans_Leave_Request_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Trans_Leave_Request_AttachmentsArgs = {
  objects: Array<Trans_Leave_Request_Attachments_Insert_Input>;
  on_conflict?: InputMaybe<Trans_Leave_Request_Attachments_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Trans_Leave_Request_Attachments_OneArgs = {
  object: Trans_Leave_Request_Attachments_Insert_Input;
  on_conflict?: InputMaybe<Trans_Leave_Request_Attachments_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Trans_Leave_Request_LinesArgs = {
  objects: Array<Trans_Leave_Request_Lines_Insert_Input>;
  on_conflict?: InputMaybe<Trans_Leave_Request_Lines_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Trans_Leave_Request_Lines_OneArgs = {
  object: Trans_Leave_Request_Lines_Insert_Input;
  on_conflict?: InputMaybe<Trans_Leave_Request_Lines_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Trans_Leave_Request_OneArgs = {
  object: Trans_Leave_Request_Insert_Input;
  on_conflict?: InputMaybe<Trans_Leave_Request_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_GroupsArgs = {
  objects: Array<User_Groups_Insert_Input>;
  on_conflict?: InputMaybe<User_Groups_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_Groups_OneArgs = {
  object: User_Groups_Insert_Input;
  on_conflict?: InputMaybe<User_Groups_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_Leave_LinesArgs = {
  objects: Array<Users_Leave_Lines_Insert_Input>;
  on_conflict?: InputMaybe<Users_Leave_Lines_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_Leave_Lines_OneArgs = {
  object: Users_Leave_Lines_Insert_Input;
  on_conflict?: InputMaybe<Users_Leave_Lines_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_Functional_LinesArgs = {
  _inc?: InputMaybe<Functional_Lines_Inc_Input>;
  _set?: InputMaybe<Functional_Lines_Set_Input>;
  where: Functional_Lines_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Functional_Lines_By_PkArgs = {
  _inc?: InputMaybe<Functional_Lines_Inc_Input>;
  _set?: InputMaybe<Functional_Lines_Set_Input>;
  pk_columns: Functional_Lines_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Request_TypesArgs = {
  _inc?: InputMaybe<Request_Types_Inc_Input>;
  _set?: InputMaybe<Request_Types_Set_Input>;
  where: Request_Types_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Request_Types_By_PkArgs = {
  _inc?: InputMaybe<Request_Types_Inc_Input>;
  _set?: InputMaybe<Request_Types_Set_Input>;
  pk_columns: Request_Types_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_StatusArgs = {
  _inc?: InputMaybe<Status_Inc_Input>;
  _set?: InputMaybe<Status_Set_Input>;
  where: Status_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Status_By_PkArgs = {
  _inc?: InputMaybe<Status_Inc_Input>;
  _set?: InputMaybe<Status_Set_Input>;
  pk_columns: Status_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Trans_Leave_RequestArgs = {
  _inc?: InputMaybe<Trans_Leave_Request_Inc_Input>;
  _set?: InputMaybe<Trans_Leave_Request_Set_Input>;
  where: Trans_Leave_Request_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Trans_Leave_Request_AttachmentsArgs = {
  _inc?: InputMaybe<Trans_Leave_Request_Attachments_Inc_Input>;
  _set?: InputMaybe<Trans_Leave_Request_Attachments_Set_Input>;
  where: Trans_Leave_Request_Attachments_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Trans_Leave_Request_Attachments_By_PkArgs = {
  _inc?: InputMaybe<Trans_Leave_Request_Attachments_Inc_Input>;
  _set?: InputMaybe<Trans_Leave_Request_Attachments_Set_Input>;
  pk_columns: Trans_Leave_Request_Attachments_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Trans_Leave_Request_By_PkArgs = {
  _inc?: InputMaybe<Trans_Leave_Request_Inc_Input>;
  _set?: InputMaybe<Trans_Leave_Request_Set_Input>;
  pk_columns: Trans_Leave_Request_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Trans_Leave_Request_LinesArgs = {
  _inc?: InputMaybe<Trans_Leave_Request_Lines_Inc_Input>;
  _set?: InputMaybe<Trans_Leave_Request_Lines_Set_Input>;
  where: Trans_Leave_Request_Lines_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Trans_Leave_Request_Lines_By_PkArgs = {
  _inc?: InputMaybe<Trans_Leave_Request_Lines_Inc_Input>;
  _set?: InputMaybe<Trans_Leave_Request_Lines_Set_Input>;
  pk_columns: Trans_Leave_Request_Lines_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_User_GroupsArgs = {
  _inc?: InputMaybe<User_Groups_Inc_Input>;
  _set?: InputMaybe<User_Groups_Set_Input>;
  where: User_Groups_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_Groups_By_PkArgs = {
  _inc?: InputMaybe<User_Groups_Inc_Input>;
  _set?: InputMaybe<User_Groups_Set_Input>;
  pk_columns: User_Groups_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _inc?: InputMaybe<Users_Inc_Input>;
  _set?: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _inc?: InputMaybe<Users_Inc_Input>;
  _set?: InputMaybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Users_Leave_LinesArgs = {
  _inc?: InputMaybe<Users_Leave_Lines_Inc_Input>;
  _set?: InputMaybe<Users_Leave_Lines_Set_Input>;
  where: Users_Leave_Lines_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_Leave_Lines_By_PkArgs = {
  _inc?: InputMaybe<Users_Leave_Lines_Inc_Input>;
  _set?: InputMaybe<Users_Leave_Lines_Set_Input>;
  pk_columns: Users_Leave_Lines_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "functional_lines" */
  functional_lines: Array<Functional_Lines>;
  /** fetch aggregated fields from the table: "functional_lines" */
  functional_lines_aggregate: Functional_Lines_Aggregate;
  /** fetch data from the table: "functional_lines" using primary key columns */
  functional_lines_by_pk?: Maybe<Functional_Lines>;
  /** fetch data from the table: "request_types" */
  request_types: Array<Request_Types>;
  /** fetch aggregated fields from the table: "request_types" */
  request_types_aggregate: Request_Types_Aggregate;
  /** fetch data from the table: "request_types" using primary key columns */
  request_types_by_pk?: Maybe<Request_Types>;
  /** fetch data from the table: "status" */
  status: Array<Status>;
  /** fetch aggregated fields from the table: "status" */
  status_aggregate: Status_Aggregate;
  /** fetch data from the table: "status" using primary key columns */
  status_by_pk?: Maybe<Status>;
  /** fetch data from the table: "trans_leave_request" */
  trans_leave_request: Array<Trans_Leave_Request>;
  /** fetch aggregated fields from the table: "trans_leave_request" */
  trans_leave_request_aggregate: Trans_Leave_Request_Aggregate;
  /** fetch data from the table: "trans_leave_request_attachments" */
  trans_leave_request_attachments: Array<Trans_Leave_Request_Attachments>;
  /** fetch aggregated fields from the table: "trans_leave_request_attachments" */
  trans_leave_request_attachments_aggregate: Trans_Leave_Request_Attachments_Aggregate;
  /** fetch data from the table: "trans_leave_request_attachments" using primary key columns */
  trans_leave_request_attachments_by_pk?: Maybe<Trans_Leave_Request_Attachments>;
  /** fetch data from the table: "trans_leave_request" using primary key columns */
  trans_leave_request_by_pk?: Maybe<Trans_Leave_Request>;
  /** fetch data from the table: "trans_leave_request_lines" */
  trans_leave_request_lines: Array<Trans_Leave_Request_Lines>;
  /** fetch aggregated fields from the table: "trans_leave_request_lines" */
  trans_leave_request_lines_aggregate: Trans_Leave_Request_Lines_Aggregate;
  /** fetch data from the table: "trans_leave_request_lines" using primary key columns */
  trans_leave_request_lines_by_pk?: Maybe<Trans_Leave_Request_Lines>;
  /** fetch data from the table: "user_groups" */
  user_groups: Array<User_Groups>;
  /** fetch aggregated fields from the table: "user_groups" */
  user_groups_aggregate: User_Groups_Aggregate;
  /** fetch data from the table: "user_groups" using primary key columns */
  user_groups_by_pk?: Maybe<User_Groups>;
  /** An array relationship */
  users: Array<Users>;
  /** An aggregate relationship */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** fetch data from the table: "users_leave_lines" */
  users_leave_lines: Array<Users_Leave_Lines>;
  /** fetch aggregated fields from the table: "users_leave_lines" */
  users_leave_lines_aggregate: Users_Leave_Lines_Aggregate;
  /** fetch data from the table: "users_leave_lines" using primary key columns */
  users_leave_lines_by_pk?: Maybe<Users_Leave_Lines>;
};


export type Query_RootFunctional_LinesArgs = {
  distinct_on?: InputMaybe<Array<Functional_Lines_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Functional_Lines_Order_By>>;
  where?: InputMaybe<Functional_Lines_Bool_Exp>;
};


export type Query_RootFunctional_Lines_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Functional_Lines_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Functional_Lines_Order_By>>;
  where?: InputMaybe<Functional_Lines_Bool_Exp>;
};


export type Query_RootFunctional_Lines_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Query_RootRequest_TypesArgs = {
  distinct_on?: InputMaybe<Array<Request_Types_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Request_Types_Order_By>>;
  where?: InputMaybe<Request_Types_Bool_Exp>;
};


export type Query_RootRequest_Types_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Request_Types_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Request_Types_Order_By>>;
  where?: InputMaybe<Request_Types_Bool_Exp>;
};


export type Query_RootRequest_Types_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Query_RootStatusArgs = {
  distinct_on?: InputMaybe<Array<Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Status_Order_By>>;
  where?: InputMaybe<Status_Bool_Exp>;
};


export type Query_RootStatus_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Status_Order_By>>;
  where?: InputMaybe<Status_Bool_Exp>;
};


export type Query_RootStatus_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Query_RootTrans_Leave_RequestArgs = {
  distinct_on?: InputMaybe<Array<Trans_Leave_Request_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Trans_Leave_Request_Order_By>>;
  where?: InputMaybe<Trans_Leave_Request_Bool_Exp>;
};


export type Query_RootTrans_Leave_Request_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Trans_Leave_Request_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Trans_Leave_Request_Order_By>>;
  where?: InputMaybe<Trans_Leave_Request_Bool_Exp>;
};


export type Query_RootTrans_Leave_Request_AttachmentsArgs = {
  distinct_on?: InputMaybe<Array<Trans_Leave_Request_Attachments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Trans_Leave_Request_Attachments_Order_By>>;
  where?: InputMaybe<Trans_Leave_Request_Attachments_Bool_Exp>;
};


export type Query_RootTrans_Leave_Request_Attachments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Trans_Leave_Request_Attachments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Trans_Leave_Request_Attachments_Order_By>>;
  where?: InputMaybe<Trans_Leave_Request_Attachments_Bool_Exp>;
};


export type Query_RootTrans_Leave_Request_Attachments_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Query_RootTrans_Leave_Request_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Query_RootTrans_Leave_Request_LinesArgs = {
  distinct_on?: InputMaybe<Array<Trans_Leave_Request_Lines_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Trans_Leave_Request_Lines_Order_By>>;
  where?: InputMaybe<Trans_Leave_Request_Lines_Bool_Exp>;
};


export type Query_RootTrans_Leave_Request_Lines_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Trans_Leave_Request_Lines_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Trans_Leave_Request_Lines_Order_By>>;
  where?: InputMaybe<Trans_Leave_Request_Lines_Bool_Exp>;
};


export type Query_RootTrans_Leave_Request_Lines_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Query_RootUser_GroupsArgs = {
  distinct_on?: InputMaybe<Array<User_Groups_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Groups_Order_By>>;
  where?: InputMaybe<User_Groups_Bool_Exp>;
};


export type Query_RootUser_Groups_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Groups_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Groups_Order_By>>;
  where?: InputMaybe<User_Groups_Bool_Exp>;
};


export type Query_RootUser_Groups_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Query_RootUsers_Leave_LinesArgs = {
  distinct_on?: InputMaybe<Array<Users_Leave_Lines_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Leave_Lines_Order_By>>;
  where?: InputMaybe<Users_Leave_Lines_Bool_Exp>;
};


export type Query_RootUsers_Leave_Lines_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Leave_Lines_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Leave_Lines_Order_By>>;
  where?: InputMaybe<Users_Leave_Lines_Bool_Exp>;
};


export type Query_RootUsers_Leave_Lines_By_PkArgs = {
  id: Scalars['bigint']['input'];
};

/** columns and relationships of "request_types" */
export type Request_Types = {
  __typename?: 'request_types';
  active: Scalars['Boolean']['output'];
  id: Scalars['bigint']['output'];
  key: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

/** aggregated selection of "request_types" */
export type Request_Types_Aggregate = {
  __typename?: 'request_types_aggregate';
  aggregate?: Maybe<Request_Types_Aggregate_Fields>;
  nodes: Array<Request_Types>;
};

/** aggregate fields of "request_types" */
export type Request_Types_Aggregate_Fields = {
  __typename?: 'request_types_aggregate_fields';
  avg?: Maybe<Request_Types_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Request_Types_Max_Fields>;
  min?: Maybe<Request_Types_Min_Fields>;
  stddev?: Maybe<Request_Types_Stddev_Fields>;
  stddev_pop?: Maybe<Request_Types_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Request_Types_Stddev_Samp_Fields>;
  sum?: Maybe<Request_Types_Sum_Fields>;
  var_pop?: Maybe<Request_Types_Var_Pop_Fields>;
  var_samp?: Maybe<Request_Types_Var_Samp_Fields>;
  variance?: Maybe<Request_Types_Variance_Fields>;
};


/** aggregate fields of "request_types" */
export type Request_Types_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Request_Types_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Request_Types_Avg_Fields = {
  __typename?: 'request_types_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "request_types". All fields are combined with a logical 'AND'. */
export type Request_Types_Bool_Exp = {
  _and?: InputMaybe<Array<Request_Types_Bool_Exp>>;
  _not?: InputMaybe<Request_Types_Bool_Exp>;
  _or?: InputMaybe<Array<Request_Types_Bool_Exp>>;
  active?: InputMaybe<Boolean_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  key?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "request_types" */
export enum Request_Types_Constraint {
  /** unique or primary key constraint */
  RequestTypesPkey = 'request_types_pkey'
}

/** input type for incrementing numeric columns in table "request_types" */
export type Request_Types_Inc_Input = {
  id?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "request_types" */
export type Request_Types_Insert_Input = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Request_Types_Max_Fields = {
  __typename?: 'request_types_max_fields';
  id?: Maybe<Scalars['bigint']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Request_Types_Min_Fields = {
  __typename?: 'request_types_min_fields';
  id?: Maybe<Scalars['bigint']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "request_types" */
export type Request_Types_Mutation_Response = {
  __typename?: 'request_types_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Request_Types>;
};

/** input type for inserting object relation for remote table "request_types" */
export type Request_Types_Obj_Rel_Insert_Input = {
  data: Request_Types_Insert_Input;
  /** on conflict condition */
  on_conflict?: InputMaybe<Request_Types_On_Conflict>;
};

/** on conflict condition type for table "request_types" */
export type Request_Types_On_Conflict = {
  constraint: Request_Types_Constraint;
  update_columns?: Array<Request_Types_Update_Column>;
  where?: InputMaybe<Request_Types_Bool_Exp>;
};

/** Ordering options when selecting data from "request_types". */
export type Request_Types_Order_By = {
  active?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  key?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: request_types */
export type Request_Types_Pk_Columns_Input = {
  id: Scalars['bigint']['input'];
};

/** select columns of table "request_types" */
export enum Request_Types_Select_Column {
  /** column name */
  Active = 'active',
  /** column name */
  Id = 'id',
  /** column name */
  Key = 'key',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "request_types" */
export type Request_Types_Set_Input = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Request_Types_Stddev_Fields = {
  __typename?: 'request_types_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Request_Types_Stddev_Pop_Fields = {
  __typename?: 'request_types_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Request_Types_Stddev_Samp_Fields = {
  __typename?: 'request_types_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate sum on columns */
export type Request_Types_Sum_Fields = {
  __typename?: 'request_types_sum_fields';
  id?: Maybe<Scalars['bigint']['output']>;
};

/** update columns of table "request_types" */
export enum Request_Types_Update_Column {
  /** column name */
  Active = 'active',
  /** column name */
  Id = 'id',
  /** column name */
  Key = 'key',
  /** column name */
  Name = 'name'
}

/** aggregate var_pop on columns */
export type Request_Types_Var_Pop_Fields = {
  __typename?: 'request_types_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Request_Types_Var_Samp_Fields = {
  __typename?: 'request_types_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Request_Types_Variance_Fields = {
  __typename?: 'request_types_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "status" */
export type Status = {
  __typename?: 'status';
  active: Scalars['Boolean']['output'];
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['bigint']['output'];
  name: Scalars['String']['output'];
  sequence: Scalars['Int']['output'];
  trans_leave_request_ids: Scalars['Int']['output'];
  /** An array relationship */
  trans_leave_requests: Array<Trans_Leave_Request>;
  /** An aggregate relationship */
  trans_leave_requests_aggregate: Trans_Leave_Request_Aggregate;
  updated_at: Scalars['timestamptz']['output'];
};


/** columns and relationships of "status" */
export type StatusTrans_Leave_RequestsArgs = {
  distinct_on?: InputMaybe<Array<Trans_Leave_Request_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Trans_Leave_Request_Order_By>>;
  where?: InputMaybe<Trans_Leave_Request_Bool_Exp>;
};


/** columns and relationships of "status" */
export type StatusTrans_Leave_Requests_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Trans_Leave_Request_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Trans_Leave_Request_Order_By>>;
  where?: InputMaybe<Trans_Leave_Request_Bool_Exp>;
};

/** aggregated selection of "status" */
export type Status_Aggregate = {
  __typename?: 'status_aggregate';
  aggregate?: Maybe<Status_Aggregate_Fields>;
  nodes: Array<Status>;
};

/** aggregate fields of "status" */
export type Status_Aggregate_Fields = {
  __typename?: 'status_aggregate_fields';
  avg?: Maybe<Status_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Status_Max_Fields>;
  min?: Maybe<Status_Min_Fields>;
  stddev?: Maybe<Status_Stddev_Fields>;
  stddev_pop?: Maybe<Status_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Status_Stddev_Samp_Fields>;
  sum?: Maybe<Status_Sum_Fields>;
  var_pop?: Maybe<Status_Var_Pop_Fields>;
  var_samp?: Maybe<Status_Var_Samp_Fields>;
  variance?: Maybe<Status_Variance_Fields>;
};


/** aggregate fields of "status" */
export type Status_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Status_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Status_Avg_Fields = {
  __typename?: 'status_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
  sequence?: Maybe<Scalars['Float']['output']>;
  trans_leave_request_ids?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "status". All fields are combined with a logical 'AND'. */
export type Status_Bool_Exp = {
  _and?: InputMaybe<Array<Status_Bool_Exp>>;
  _not?: InputMaybe<Status_Bool_Exp>;
  _or?: InputMaybe<Array<Status_Bool_Exp>>;
  active?: InputMaybe<Boolean_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  sequence?: InputMaybe<Int_Comparison_Exp>;
  trans_leave_request_ids?: InputMaybe<Int_Comparison_Exp>;
  trans_leave_requests?: InputMaybe<Trans_Leave_Request_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "status" */
export enum Status_Constraint {
  /** unique or primary key constraint */
  StatusPkey = 'status_pkey'
}

/** input type for incrementing numeric columns in table "status" */
export type Status_Inc_Input = {
  id?: InputMaybe<Scalars['bigint']['input']>;
  sequence?: InputMaybe<Scalars['Int']['input']>;
  trans_leave_request_ids?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "status" */
export type Status_Insert_Input = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  sequence?: InputMaybe<Scalars['Int']['input']>;
  trans_leave_request_ids?: InputMaybe<Scalars['Int']['input']>;
  trans_leave_requests?: InputMaybe<Trans_Leave_Request_Arr_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Status_Max_Fields = {
  __typename?: 'status_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  sequence?: Maybe<Scalars['Int']['output']>;
  trans_leave_request_ids?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Status_Min_Fields = {
  __typename?: 'status_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  sequence?: Maybe<Scalars['Int']['output']>;
  trans_leave_request_ids?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "status" */
export type Status_Mutation_Response = {
  __typename?: 'status_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Status>;
};

/** input type for inserting object relation for remote table "status" */
export type Status_Obj_Rel_Insert_Input = {
  data: Status_Insert_Input;
  /** on conflict condition */
  on_conflict?: InputMaybe<Status_On_Conflict>;
};

/** on conflict condition type for table "status" */
export type Status_On_Conflict = {
  constraint: Status_Constraint;
  update_columns?: Array<Status_Update_Column>;
  where?: InputMaybe<Status_Bool_Exp>;
};

/** Ordering options when selecting data from "status". */
export type Status_Order_By = {
  active?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  sequence?: InputMaybe<Order_By>;
  trans_leave_request_ids?: InputMaybe<Order_By>;
  trans_leave_requests_aggregate?: InputMaybe<Trans_Leave_Request_Aggregate_Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: status */
export type Status_Pk_Columns_Input = {
  id: Scalars['bigint']['input'];
};

/** select columns of table "status" */
export enum Status_Select_Column {
  /** column name */
  Active = 'active',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Sequence = 'sequence',
  /** column name */
  TransLeaveRequestIds = 'trans_leave_request_ids',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "status" */
export type Status_Set_Input = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  sequence?: InputMaybe<Scalars['Int']['input']>;
  trans_leave_request_ids?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Status_Stddev_Fields = {
  __typename?: 'status_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
  sequence?: Maybe<Scalars['Float']['output']>;
  trans_leave_request_ids?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Status_Stddev_Pop_Fields = {
  __typename?: 'status_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  sequence?: Maybe<Scalars['Float']['output']>;
  trans_leave_request_ids?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Status_Stddev_Samp_Fields = {
  __typename?: 'status_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  sequence?: Maybe<Scalars['Float']['output']>;
  trans_leave_request_ids?: Maybe<Scalars['Float']['output']>;
};

/** aggregate sum on columns */
export type Status_Sum_Fields = {
  __typename?: 'status_sum_fields';
  id?: Maybe<Scalars['bigint']['output']>;
  sequence?: Maybe<Scalars['Int']['output']>;
  trans_leave_request_ids?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "status" */
export enum Status_Update_Column {
  /** column name */
  Active = 'active',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Sequence = 'sequence',
  /** column name */
  TransLeaveRequestIds = 'trans_leave_request_ids',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Status_Var_Pop_Fields = {
  __typename?: 'status_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  sequence?: Maybe<Scalars['Float']['output']>;
  trans_leave_request_ids?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Status_Var_Samp_Fields = {
  __typename?: 'status_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  sequence?: Maybe<Scalars['Float']['output']>;
  trans_leave_request_ids?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Status_Variance_Fields = {
  __typename?: 'status_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
  sequence?: Maybe<Scalars['Float']['output']>;
  trans_leave_request_ids?: Maybe<Scalars['Float']['output']>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "functional_lines" */
  functional_lines: Array<Functional_Lines>;
  /** fetch aggregated fields from the table: "functional_lines" */
  functional_lines_aggregate: Functional_Lines_Aggregate;
  /** fetch data from the table: "functional_lines" using primary key columns */
  functional_lines_by_pk?: Maybe<Functional_Lines>;
  /** fetch data from the table: "request_types" */
  request_types: Array<Request_Types>;
  /** fetch aggregated fields from the table: "request_types" */
  request_types_aggregate: Request_Types_Aggregate;
  /** fetch data from the table: "request_types" using primary key columns */
  request_types_by_pk?: Maybe<Request_Types>;
  /** fetch data from the table: "status" */
  status: Array<Status>;
  /** fetch aggregated fields from the table: "status" */
  status_aggregate: Status_Aggregate;
  /** fetch data from the table: "status" using primary key columns */
  status_by_pk?: Maybe<Status>;
  /** fetch data from the table: "trans_leave_request" */
  trans_leave_request: Array<Trans_Leave_Request>;
  /** fetch aggregated fields from the table: "trans_leave_request" */
  trans_leave_request_aggregate: Trans_Leave_Request_Aggregate;
  /** fetch data from the table: "trans_leave_request_attachments" */
  trans_leave_request_attachments: Array<Trans_Leave_Request_Attachments>;
  /** fetch aggregated fields from the table: "trans_leave_request_attachments" */
  trans_leave_request_attachments_aggregate: Trans_Leave_Request_Attachments_Aggregate;
  /** fetch data from the table: "trans_leave_request_attachments" using primary key columns */
  trans_leave_request_attachments_by_pk?: Maybe<Trans_Leave_Request_Attachments>;
  /** fetch data from the table: "trans_leave_request" using primary key columns */
  trans_leave_request_by_pk?: Maybe<Trans_Leave_Request>;
  /** fetch data from the table: "trans_leave_request_lines" */
  trans_leave_request_lines: Array<Trans_Leave_Request_Lines>;
  /** fetch aggregated fields from the table: "trans_leave_request_lines" */
  trans_leave_request_lines_aggregate: Trans_Leave_Request_Lines_Aggregate;
  /** fetch data from the table: "trans_leave_request_lines" using primary key columns */
  trans_leave_request_lines_by_pk?: Maybe<Trans_Leave_Request_Lines>;
  /** fetch data from the table: "user_groups" */
  user_groups: Array<User_Groups>;
  /** fetch aggregated fields from the table: "user_groups" */
  user_groups_aggregate: User_Groups_Aggregate;
  /** fetch data from the table: "user_groups" using primary key columns */
  user_groups_by_pk?: Maybe<User_Groups>;
  /** An array relationship */
  users: Array<Users>;
  /** An aggregate relationship */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** fetch data from the table: "users_leave_lines" */
  users_leave_lines: Array<Users_Leave_Lines>;
  /** fetch aggregated fields from the table: "users_leave_lines" */
  users_leave_lines_aggregate: Users_Leave_Lines_Aggregate;
  /** fetch data from the table: "users_leave_lines" using primary key columns */
  users_leave_lines_by_pk?: Maybe<Users_Leave_Lines>;
};


export type Subscription_RootFunctional_LinesArgs = {
  distinct_on?: InputMaybe<Array<Functional_Lines_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Functional_Lines_Order_By>>;
  where?: InputMaybe<Functional_Lines_Bool_Exp>;
};


export type Subscription_RootFunctional_Lines_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Functional_Lines_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Functional_Lines_Order_By>>;
  where?: InputMaybe<Functional_Lines_Bool_Exp>;
};


export type Subscription_RootFunctional_Lines_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Subscription_RootRequest_TypesArgs = {
  distinct_on?: InputMaybe<Array<Request_Types_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Request_Types_Order_By>>;
  where?: InputMaybe<Request_Types_Bool_Exp>;
};


export type Subscription_RootRequest_Types_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Request_Types_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Request_Types_Order_By>>;
  where?: InputMaybe<Request_Types_Bool_Exp>;
};


export type Subscription_RootRequest_Types_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Subscription_RootStatusArgs = {
  distinct_on?: InputMaybe<Array<Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Status_Order_By>>;
  where?: InputMaybe<Status_Bool_Exp>;
};


export type Subscription_RootStatus_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Status_Order_By>>;
  where?: InputMaybe<Status_Bool_Exp>;
};


export type Subscription_RootStatus_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Subscription_RootTrans_Leave_RequestArgs = {
  distinct_on?: InputMaybe<Array<Trans_Leave_Request_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Trans_Leave_Request_Order_By>>;
  where?: InputMaybe<Trans_Leave_Request_Bool_Exp>;
};


export type Subscription_RootTrans_Leave_Request_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Trans_Leave_Request_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Trans_Leave_Request_Order_By>>;
  where?: InputMaybe<Trans_Leave_Request_Bool_Exp>;
};


export type Subscription_RootTrans_Leave_Request_AttachmentsArgs = {
  distinct_on?: InputMaybe<Array<Trans_Leave_Request_Attachments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Trans_Leave_Request_Attachments_Order_By>>;
  where?: InputMaybe<Trans_Leave_Request_Attachments_Bool_Exp>;
};


export type Subscription_RootTrans_Leave_Request_Attachments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Trans_Leave_Request_Attachments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Trans_Leave_Request_Attachments_Order_By>>;
  where?: InputMaybe<Trans_Leave_Request_Attachments_Bool_Exp>;
};


export type Subscription_RootTrans_Leave_Request_Attachments_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Subscription_RootTrans_Leave_Request_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Subscription_RootTrans_Leave_Request_LinesArgs = {
  distinct_on?: InputMaybe<Array<Trans_Leave_Request_Lines_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Trans_Leave_Request_Lines_Order_By>>;
  where?: InputMaybe<Trans_Leave_Request_Lines_Bool_Exp>;
};


export type Subscription_RootTrans_Leave_Request_Lines_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Trans_Leave_Request_Lines_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Trans_Leave_Request_Lines_Order_By>>;
  where?: InputMaybe<Trans_Leave_Request_Lines_Bool_Exp>;
};


export type Subscription_RootTrans_Leave_Request_Lines_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Subscription_RootUser_GroupsArgs = {
  distinct_on?: InputMaybe<Array<User_Groups_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Groups_Order_By>>;
  where?: InputMaybe<User_Groups_Bool_Exp>;
};


export type Subscription_RootUser_Groups_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Groups_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Groups_Order_By>>;
  where?: InputMaybe<User_Groups_Bool_Exp>;
};


export type Subscription_RootUser_Groups_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Subscription_RootUsers_Leave_LinesArgs = {
  distinct_on?: InputMaybe<Array<Users_Leave_Lines_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Leave_Lines_Order_By>>;
  where?: InputMaybe<Users_Leave_Lines_Bool_Exp>;
};


export type Subscription_RootUsers_Leave_Lines_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Leave_Lines_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Leave_Lines_Order_By>>;
  where?: InputMaybe<Users_Leave_Lines_Bool_Exp>;
};


export type Subscription_RootUsers_Leave_Lines_By_PkArgs = {
  id: Scalars['bigint']['input'];
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']['input']>;
  _gt?: InputMaybe<Scalars['timestamptz']['input']>;
  _gte?: InputMaybe<Scalars['timestamptz']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamptz']['input']>;
  _lte?: InputMaybe<Scalars['timestamptz']['input']>;
  _neq?: InputMaybe<Scalars['timestamptz']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
};

/** columns and relationships of "trans_leave_request" */
export type Trans_Leave_Request = {
  __typename?: 'trans_leave_request';
  active: Scalars['Boolean']['output'];
  approved_date: Scalars['date']['output'];
  cancelled_date: Scalars['date']['output'];
  created_at: Scalars['timestamptz']['output'];
  date_from_leave: Scalars['date']['output'];
  date_to_leave: Scalars['date']['output'];
  day: Scalars['String']['output'];
  id: Scalars['bigint']['output'];
  /** An object relationship */
  manager?: Maybe<Users>;
  manager_id: Scalars['Int']['output'];
  month: Scalars['String']['output'];
  rejected_date: Scalars['date']['output'];
  remarks: Scalars['String']['output'];
  /** An object relationship */
  request_type?: Maybe<Request_Types>;
  request_type_id: Scalars['Int']['output'];
  /** An object relationship */
  requested?: Maybe<Users>;
  requested_id: Scalars['Int']['output'];
  /** An object relationship */
  status?: Maybe<Status>;
  status_id: Scalars['Int']['output'];
  submitted_date: Scalars['date']['output'];
  updated_at: Scalars['timestamptz']['output'];
  year: Scalars['String']['output'];
};

/** aggregated selection of "trans_leave_request" */
export type Trans_Leave_Request_Aggregate = {
  __typename?: 'trans_leave_request_aggregate';
  aggregate?: Maybe<Trans_Leave_Request_Aggregate_Fields>;
  nodes: Array<Trans_Leave_Request>;
};

/** aggregate fields of "trans_leave_request" */
export type Trans_Leave_Request_Aggregate_Fields = {
  __typename?: 'trans_leave_request_aggregate_fields';
  avg?: Maybe<Trans_Leave_Request_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Trans_Leave_Request_Max_Fields>;
  min?: Maybe<Trans_Leave_Request_Min_Fields>;
  stddev?: Maybe<Trans_Leave_Request_Stddev_Fields>;
  stddev_pop?: Maybe<Trans_Leave_Request_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Trans_Leave_Request_Stddev_Samp_Fields>;
  sum?: Maybe<Trans_Leave_Request_Sum_Fields>;
  var_pop?: Maybe<Trans_Leave_Request_Var_Pop_Fields>;
  var_samp?: Maybe<Trans_Leave_Request_Var_Samp_Fields>;
  variance?: Maybe<Trans_Leave_Request_Variance_Fields>;
};


/** aggregate fields of "trans_leave_request" */
export type Trans_Leave_Request_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Trans_Leave_Request_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "trans_leave_request" */
export type Trans_Leave_Request_Aggregate_Order_By = {
  avg?: InputMaybe<Trans_Leave_Request_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Trans_Leave_Request_Max_Order_By>;
  min?: InputMaybe<Trans_Leave_Request_Min_Order_By>;
  stddev?: InputMaybe<Trans_Leave_Request_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Trans_Leave_Request_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Trans_Leave_Request_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Trans_Leave_Request_Sum_Order_By>;
  var_pop?: InputMaybe<Trans_Leave_Request_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Trans_Leave_Request_Var_Samp_Order_By>;
  variance?: InputMaybe<Trans_Leave_Request_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "trans_leave_request" */
export type Trans_Leave_Request_Arr_Rel_Insert_Input = {
  data: Array<Trans_Leave_Request_Insert_Input>;
  /** on conflict condition */
  on_conflict?: InputMaybe<Trans_Leave_Request_On_Conflict>;
};

/** columns and relationships of "trans_leave_request_attachments" */
export type Trans_Leave_Request_Attachments = {
  __typename?: 'trans_leave_request_attachments';
  active: Scalars['Boolean']['output'];
  attachment?: Maybe<Scalars['bytea']['output']>;
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['bigint']['output'];
  name: Scalars['String']['output'];
  /** An object relationship */
  trans_leave_request?: Maybe<Trans_Leave_Request>;
  trans_leave_request_id: Scalars['Int']['output'];
  updated_at: Scalars['timestamptz']['output'];
  /** An object relationship */
  user?: Maybe<Users>;
  user_id: Scalars['Int']['output'];
};

/** aggregated selection of "trans_leave_request_attachments" */
export type Trans_Leave_Request_Attachments_Aggregate = {
  __typename?: 'trans_leave_request_attachments_aggregate';
  aggregate?: Maybe<Trans_Leave_Request_Attachments_Aggregate_Fields>;
  nodes: Array<Trans_Leave_Request_Attachments>;
};

/** aggregate fields of "trans_leave_request_attachments" */
export type Trans_Leave_Request_Attachments_Aggregate_Fields = {
  __typename?: 'trans_leave_request_attachments_aggregate_fields';
  avg?: Maybe<Trans_Leave_Request_Attachments_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Trans_Leave_Request_Attachments_Max_Fields>;
  min?: Maybe<Trans_Leave_Request_Attachments_Min_Fields>;
  stddev?: Maybe<Trans_Leave_Request_Attachments_Stddev_Fields>;
  stddev_pop?: Maybe<Trans_Leave_Request_Attachments_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Trans_Leave_Request_Attachments_Stddev_Samp_Fields>;
  sum?: Maybe<Trans_Leave_Request_Attachments_Sum_Fields>;
  var_pop?: Maybe<Trans_Leave_Request_Attachments_Var_Pop_Fields>;
  var_samp?: Maybe<Trans_Leave_Request_Attachments_Var_Samp_Fields>;
  variance?: Maybe<Trans_Leave_Request_Attachments_Variance_Fields>;
};


/** aggregate fields of "trans_leave_request_attachments" */
export type Trans_Leave_Request_Attachments_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Trans_Leave_Request_Attachments_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Trans_Leave_Request_Attachments_Avg_Fields = {
  __typename?: 'trans_leave_request_attachments_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
  trans_leave_request_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "trans_leave_request_attachments". All fields are combined with a logical 'AND'. */
export type Trans_Leave_Request_Attachments_Bool_Exp = {
  _and?: InputMaybe<Array<Trans_Leave_Request_Attachments_Bool_Exp>>;
  _not?: InputMaybe<Trans_Leave_Request_Attachments_Bool_Exp>;
  _or?: InputMaybe<Array<Trans_Leave_Request_Attachments_Bool_Exp>>;
  active?: InputMaybe<Boolean_Comparison_Exp>;
  attachment?: InputMaybe<Bytea_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  trans_leave_request?: InputMaybe<Trans_Leave_Request_Bool_Exp>;
  trans_leave_request_id?: InputMaybe<Int_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "trans_leave_request_attachments" */
export enum Trans_Leave_Request_Attachments_Constraint {
  /** unique or primary key constraint */
  TransLeaveRequestAttachmentsPkey = 'trans_leave_request_attachments_pkey'
}

/** input type for incrementing numeric columns in table "trans_leave_request_attachments" */
export type Trans_Leave_Request_Attachments_Inc_Input = {
  id?: InputMaybe<Scalars['bigint']['input']>;
  trans_leave_request_id?: InputMaybe<Scalars['Int']['input']>;
  user_id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "trans_leave_request_attachments" */
export type Trans_Leave_Request_Attachments_Insert_Input = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  attachment?: InputMaybe<Scalars['bytea']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  trans_leave_request?: InputMaybe<Trans_Leave_Request_Obj_Rel_Insert_Input>;
  trans_leave_request_id?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate max on columns */
export type Trans_Leave_Request_Attachments_Max_Fields = {
  __typename?: 'trans_leave_request_attachments_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  trans_leave_request_id?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['Int']['output']>;
};

/** aggregate min on columns */
export type Trans_Leave_Request_Attachments_Min_Fields = {
  __typename?: 'trans_leave_request_attachments_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  trans_leave_request_id?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['Int']['output']>;
};

/** response of any mutation on the table "trans_leave_request_attachments" */
export type Trans_Leave_Request_Attachments_Mutation_Response = {
  __typename?: 'trans_leave_request_attachments_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Trans_Leave_Request_Attachments>;
};

/** on conflict condition type for table "trans_leave_request_attachments" */
export type Trans_Leave_Request_Attachments_On_Conflict = {
  constraint: Trans_Leave_Request_Attachments_Constraint;
  update_columns?: Array<Trans_Leave_Request_Attachments_Update_Column>;
  where?: InputMaybe<Trans_Leave_Request_Attachments_Bool_Exp>;
};

/** Ordering options when selecting data from "trans_leave_request_attachments". */
export type Trans_Leave_Request_Attachments_Order_By = {
  active?: InputMaybe<Order_By>;
  attachment?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  trans_leave_request?: InputMaybe<Trans_Leave_Request_Order_By>;
  trans_leave_request_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: trans_leave_request_attachments */
export type Trans_Leave_Request_Attachments_Pk_Columns_Input = {
  id: Scalars['bigint']['input'];
};

/** select columns of table "trans_leave_request_attachments" */
export enum Trans_Leave_Request_Attachments_Select_Column {
  /** column name */
  Active = 'active',
  /** column name */
  Attachment = 'attachment',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  TransLeaveRequestId = 'trans_leave_request_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "trans_leave_request_attachments" */
export type Trans_Leave_Request_Attachments_Set_Input = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  attachment?: InputMaybe<Scalars['bytea']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  trans_leave_request_id?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate stddev on columns */
export type Trans_Leave_Request_Attachments_Stddev_Fields = {
  __typename?: 'trans_leave_request_attachments_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
  trans_leave_request_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Trans_Leave_Request_Attachments_Stddev_Pop_Fields = {
  __typename?: 'trans_leave_request_attachments_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  trans_leave_request_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Trans_Leave_Request_Attachments_Stddev_Samp_Fields = {
  __typename?: 'trans_leave_request_attachments_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  trans_leave_request_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate sum on columns */
export type Trans_Leave_Request_Attachments_Sum_Fields = {
  __typename?: 'trans_leave_request_attachments_sum_fields';
  id?: Maybe<Scalars['bigint']['output']>;
  trans_leave_request_id?: Maybe<Scalars['Int']['output']>;
  user_id?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "trans_leave_request_attachments" */
export enum Trans_Leave_Request_Attachments_Update_Column {
  /** column name */
  Active = 'active',
  /** column name */
  Attachment = 'attachment',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  TransLeaveRequestId = 'trans_leave_request_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** aggregate var_pop on columns */
export type Trans_Leave_Request_Attachments_Var_Pop_Fields = {
  __typename?: 'trans_leave_request_attachments_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  trans_leave_request_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Trans_Leave_Request_Attachments_Var_Samp_Fields = {
  __typename?: 'trans_leave_request_attachments_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  trans_leave_request_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Trans_Leave_Request_Attachments_Variance_Fields = {
  __typename?: 'trans_leave_request_attachments_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
  trans_leave_request_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate avg on columns */
export type Trans_Leave_Request_Avg_Fields = {
  __typename?: 'trans_leave_request_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
  manager_id?: Maybe<Scalars['Float']['output']>;
  request_type_id?: Maybe<Scalars['Float']['output']>;
  requested_id?: Maybe<Scalars['Float']['output']>;
  status_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "trans_leave_request" */
export type Trans_Leave_Request_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  manager_id?: InputMaybe<Order_By>;
  request_type_id?: InputMaybe<Order_By>;
  requested_id?: InputMaybe<Order_By>;
  status_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "trans_leave_request". All fields are combined with a logical 'AND'. */
export type Trans_Leave_Request_Bool_Exp = {
  _and?: InputMaybe<Array<Trans_Leave_Request_Bool_Exp>>;
  _not?: InputMaybe<Trans_Leave_Request_Bool_Exp>;
  _or?: InputMaybe<Array<Trans_Leave_Request_Bool_Exp>>;
  active?: InputMaybe<Boolean_Comparison_Exp>;
  approved_date?: InputMaybe<Date_Comparison_Exp>;
  cancelled_date?: InputMaybe<Date_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  date_from_leave?: InputMaybe<Date_Comparison_Exp>;
  date_to_leave?: InputMaybe<Date_Comparison_Exp>;
  day?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  manager?: InputMaybe<Users_Bool_Exp>;
  manager_id?: InputMaybe<Int_Comparison_Exp>;
  month?: InputMaybe<String_Comparison_Exp>;
  rejected_date?: InputMaybe<Date_Comparison_Exp>;
  remarks?: InputMaybe<String_Comparison_Exp>;
  request_type?: InputMaybe<Request_Types_Bool_Exp>;
  request_type_id?: InputMaybe<Int_Comparison_Exp>;
  requested?: InputMaybe<Users_Bool_Exp>;
  requested_id?: InputMaybe<Int_Comparison_Exp>;
  status?: InputMaybe<Status_Bool_Exp>;
  status_id?: InputMaybe<Int_Comparison_Exp>;
  submitted_date?: InputMaybe<Date_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  year?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "trans_leave_request" */
export enum Trans_Leave_Request_Constraint {
  /** unique or primary key constraint */
  TransLeaveRequestPkey = 'trans_leave_request_pkey'
}

/** input type for incrementing numeric columns in table "trans_leave_request" */
export type Trans_Leave_Request_Inc_Input = {
  id?: InputMaybe<Scalars['bigint']['input']>;
  manager_id?: InputMaybe<Scalars['Int']['input']>;
  request_type_id?: InputMaybe<Scalars['Int']['input']>;
  requested_id?: InputMaybe<Scalars['Int']['input']>;
  status_id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "trans_leave_request" */
export type Trans_Leave_Request_Insert_Input = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  approved_date?: InputMaybe<Scalars['date']['input']>;
  cancelled_date?: InputMaybe<Scalars['date']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  date_from_leave?: InputMaybe<Scalars['date']['input']>;
  date_to_leave?: InputMaybe<Scalars['date']['input']>;
  day?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  manager?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  manager_id?: InputMaybe<Scalars['Int']['input']>;
  month?: InputMaybe<Scalars['String']['input']>;
  rejected_date?: InputMaybe<Scalars['date']['input']>;
  remarks?: InputMaybe<Scalars['String']['input']>;
  request_type?: InputMaybe<Request_Types_Obj_Rel_Insert_Input>;
  request_type_id?: InputMaybe<Scalars['Int']['input']>;
  requested?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  requested_id?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Status_Obj_Rel_Insert_Input>;
  status_id?: InputMaybe<Scalars['Int']['input']>;
  submitted_date?: InputMaybe<Scalars['date']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  year?: InputMaybe<Scalars['String']['input']>;
};

/** columns and relationships of "trans_leave_request_lines" */
export type Trans_Leave_Request_Lines = {
  __typename?: 'trans_leave_request_lines';
  active: Scalars['Boolean']['output'];
  created_at: Scalars['timestamptz']['output'];
  date: Scalars['date']['output'];
  id: Scalars['bigint']['output'];
  /** An object relationship */
  request_type?: Maybe<Request_Types>;
  request_type_id: Scalars['Int']['output'];
  /** An object relationship */
  requested?: Maybe<Users>;
  requested_id: Scalars['Int']['output'];
  /** An object relationship */
  trans_leave_request?: Maybe<Trans_Leave_Request>;
  trans_leave_request_id: Scalars['Int']['output'];
  updated_at: Scalars['timestamptz']['output'];
};

/** aggregated selection of "trans_leave_request_lines" */
export type Trans_Leave_Request_Lines_Aggregate = {
  __typename?: 'trans_leave_request_lines_aggregate';
  aggregate?: Maybe<Trans_Leave_Request_Lines_Aggregate_Fields>;
  nodes: Array<Trans_Leave_Request_Lines>;
};

/** aggregate fields of "trans_leave_request_lines" */
export type Trans_Leave_Request_Lines_Aggregate_Fields = {
  __typename?: 'trans_leave_request_lines_aggregate_fields';
  avg?: Maybe<Trans_Leave_Request_Lines_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Trans_Leave_Request_Lines_Max_Fields>;
  min?: Maybe<Trans_Leave_Request_Lines_Min_Fields>;
  stddev?: Maybe<Trans_Leave_Request_Lines_Stddev_Fields>;
  stddev_pop?: Maybe<Trans_Leave_Request_Lines_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Trans_Leave_Request_Lines_Stddev_Samp_Fields>;
  sum?: Maybe<Trans_Leave_Request_Lines_Sum_Fields>;
  var_pop?: Maybe<Trans_Leave_Request_Lines_Var_Pop_Fields>;
  var_samp?: Maybe<Trans_Leave_Request_Lines_Var_Samp_Fields>;
  variance?: Maybe<Trans_Leave_Request_Lines_Variance_Fields>;
};


/** aggregate fields of "trans_leave_request_lines" */
export type Trans_Leave_Request_Lines_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Trans_Leave_Request_Lines_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Trans_Leave_Request_Lines_Avg_Fields = {
  __typename?: 'trans_leave_request_lines_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
  request_type_id?: Maybe<Scalars['Float']['output']>;
  requested_id?: Maybe<Scalars['Float']['output']>;
  trans_leave_request_id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "trans_leave_request_lines". All fields are combined with a logical 'AND'. */
export type Trans_Leave_Request_Lines_Bool_Exp = {
  _and?: InputMaybe<Array<Trans_Leave_Request_Lines_Bool_Exp>>;
  _not?: InputMaybe<Trans_Leave_Request_Lines_Bool_Exp>;
  _or?: InputMaybe<Array<Trans_Leave_Request_Lines_Bool_Exp>>;
  active?: InputMaybe<Boolean_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  date?: InputMaybe<Date_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  request_type?: InputMaybe<Request_Types_Bool_Exp>;
  request_type_id?: InputMaybe<Int_Comparison_Exp>;
  requested?: InputMaybe<Users_Bool_Exp>;
  requested_id?: InputMaybe<Int_Comparison_Exp>;
  trans_leave_request?: InputMaybe<Trans_Leave_Request_Bool_Exp>;
  trans_leave_request_id?: InputMaybe<Int_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "trans_leave_request_lines" */
export enum Trans_Leave_Request_Lines_Constraint {
  /** unique or primary key constraint */
  TransLeaveRequestLinesPkey = 'trans_leave_request_lines_pkey'
}

/** input type for incrementing numeric columns in table "trans_leave_request_lines" */
export type Trans_Leave_Request_Lines_Inc_Input = {
  id?: InputMaybe<Scalars['bigint']['input']>;
  request_type_id?: InputMaybe<Scalars['Int']['input']>;
  requested_id?: InputMaybe<Scalars['Int']['input']>;
  trans_leave_request_id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "trans_leave_request_lines" */
export type Trans_Leave_Request_Lines_Insert_Input = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  date?: InputMaybe<Scalars['date']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  request_type?: InputMaybe<Request_Types_Obj_Rel_Insert_Input>;
  request_type_id?: InputMaybe<Scalars['Int']['input']>;
  requested?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  requested_id?: InputMaybe<Scalars['Int']['input']>;
  trans_leave_request?: InputMaybe<Trans_Leave_Request_Obj_Rel_Insert_Input>;
  trans_leave_request_id?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Trans_Leave_Request_Lines_Max_Fields = {
  __typename?: 'trans_leave_request_lines_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  date?: Maybe<Scalars['date']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  request_type_id?: Maybe<Scalars['Int']['output']>;
  requested_id?: Maybe<Scalars['Int']['output']>;
  trans_leave_request_id?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Trans_Leave_Request_Lines_Min_Fields = {
  __typename?: 'trans_leave_request_lines_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  date?: Maybe<Scalars['date']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  request_type_id?: Maybe<Scalars['Int']['output']>;
  requested_id?: Maybe<Scalars['Int']['output']>;
  trans_leave_request_id?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "trans_leave_request_lines" */
export type Trans_Leave_Request_Lines_Mutation_Response = {
  __typename?: 'trans_leave_request_lines_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Trans_Leave_Request_Lines>;
};

/** on conflict condition type for table "trans_leave_request_lines" */
export type Trans_Leave_Request_Lines_On_Conflict = {
  constraint: Trans_Leave_Request_Lines_Constraint;
  update_columns?: Array<Trans_Leave_Request_Lines_Update_Column>;
  where?: InputMaybe<Trans_Leave_Request_Lines_Bool_Exp>;
};

/** Ordering options when selecting data from "trans_leave_request_lines". */
export type Trans_Leave_Request_Lines_Order_By = {
  active?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  date?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  request_type?: InputMaybe<Request_Types_Order_By>;
  request_type_id?: InputMaybe<Order_By>;
  requested?: InputMaybe<Users_Order_By>;
  requested_id?: InputMaybe<Order_By>;
  trans_leave_request?: InputMaybe<Trans_Leave_Request_Order_By>;
  trans_leave_request_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: trans_leave_request_lines */
export type Trans_Leave_Request_Lines_Pk_Columns_Input = {
  id: Scalars['bigint']['input'];
};

/** select columns of table "trans_leave_request_lines" */
export enum Trans_Leave_Request_Lines_Select_Column {
  /** column name */
  Active = 'active',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Date = 'date',
  /** column name */
  Id = 'id',
  /** column name */
  RequestTypeId = 'request_type_id',
  /** column name */
  RequestedId = 'requested_id',
  /** column name */
  TransLeaveRequestId = 'trans_leave_request_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "trans_leave_request_lines" */
export type Trans_Leave_Request_Lines_Set_Input = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  date?: InputMaybe<Scalars['date']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  request_type_id?: InputMaybe<Scalars['Int']['input']>;
  requested_id?: InputMaybe<Scalars['Int']['input']>;
  trans_leave_request_id?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Trans_Leave_Request_Lines_Stddev_Fields = {
  __typename?: 'trans_leave_request_lines_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
  request_type_id?: Maybe<Scalars['Float']['output']>;
  requested_id?: Maybe<Scalars['Float']['output']>;
  trans_leave_request_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Trans_Leave_Request_Lines_Stddev_Pop_Fields = {
  __typename?: 'trans_leave_request_lines_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  request_type_id?: Maybe<Scalars['Float']['output']>;
  requested_id?: Maybe<Scalars['Float']['output']>;
  trans_leave_request_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Trans_Leave_Request_Lines_Stddev_Samp_Fields = {
  __typename?: 'trans_leave_request_lines_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  request_type_id?: Maybe<Scalars['Float']['output']>;
  requested_id?: Maybe<Scalars['Float']['output']>;
  trans_leave_request_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate sum on columns */
export type Trans_Leave_Request_Lines_Sum_Fields = {
  __typename?: 'trans_leave_request_lines_sum_fields';
  id?: Maybe<Scalars['bigint']['output']>;
  request_type_id?: Maybe<Scalars['Int']['output']>;
  requested_id?: Maybe<Scalars['Int']['output']>;
  trans_leave_request_id?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "trans_leave_request_lines" */
export enum Trans_Leave_Request_Lines_Update_Column {
  /** column name */
  Active = 'active',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Date = 'date',
  /** column name */
  Id = 'id',
  /** column name */
  RequestTypeId = 'request_type_id',
  /** column name */
  RequestedId = 'requested_id',
  /** column name */
  TransLeaveRequestId = 'trans_leave_request_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Trans_Leave_Request_Lines_Var_Pop_Fields = {
  __typename?: 'trans_leave_request_lines_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  request_type_id?: Maybe<Scalars['Float']['output']>;
  requested_id?: Maybe<Scalars['Float']['output']>;
  trans_leave_request_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Trans_Leave_Request_Lines_Var_Samp_Fields = {
  __typename?: 'trans_leave_request_lines_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  request_type_id?: Maybe<Scalars['Float']['output']>;
  requested_id?: Maybe<Scalars['Float']['output']>;
  trans_leave_request_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Trans_Leave_Request_Lines_Variance_Fields = {
  __typename?: 'trans_leave_request_lines_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
  request_type_id?: Maybe<Scalars['Float']['output']>;
  requested_id?: Maybe<Scalars['Float']['output']>;
  trans_leave_request_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate max on columns */
export type Trans_Leave_Request_Max_Fields = {
  __typename?: 'trans_leave_request_max_fields';
  approved_date?: Maybe<Scalars['date']['output']>;
  cancelled_date?: Maybe<Scalars['date']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  date_from_leave?: Maybe<Scalars['date']['output']>;
  date_to_leave?: Maybe<Scalars['date']['output']>;
  day?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  manager_id?: Maybe<Scalars['Int']['output']>;
  month?: Maybe<Scalars['String']['output']>;
  rejected_date?: Maybe<Scalars['date']['output']>;
  remarks?: Maybe<Scalars['String']['output']>;
  request_type_id?: Maybe<Scalars['Int']['output']>;
  requested_id?: Maybe<Scalars['Int']['output']>;
  status_id?: Maybe<Scalars['Int']['output']>;
  submitted_date?: Maybe<Scalars['date']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  year?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "trans_leave_request" */
export type Trans_Leave_Request_Max_Order_By = {
  approved_date?: InputMaybe<Order_By>;
  cancelled_date?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  date_from_leave?: InputMaybe<Order_By>;
  date_to_leave?: InputMaybe<Order_By>;
  day?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  manager_id?: InputMaybe<Order_By>;
  month?: InputMaybe<Order_By>;
  rejected_date?: InputMaybe<Order_By>;
  remarks?: InputMaybe<Order_By>;
  request_type_id?: InputMaybe<Order_By>;
  requested_id?: InputMaybe<Order_By>;
  status_id?: InputMaybe<Order_By>;
  submitted_date?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  year?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Trans_Leave_Request_Min_Fields = {
  __typename?: 'trans_leave_request_min_fields';
  approved_date?: Maybe<Scalars['date']['output']>;
  cancelled_date?: Maybe<Scalars['date']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  date_from_leave?: Maybe<Scalars['date']['output']>;
  date_to_leave?: Maybe<Scalars['date']['output']>;
  day?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  manager_id?: Maybe<Scalars['Int']['output']>;
  month?: Maybe<Scalars['String']['output']>;
  rejected_date?: Maybe<Scalars['date']['output']>;
  remarks?: Maybe<Scalars['String']['output']>;
  request_type_id?: Maybe<Scalars['Int']['output']>;
  requested_id?: Maybe<Scalars['Int']['output']>;
  status_id?: Maybe<Scalars['Int']['output']>;
  submitted_date?: Maybe<Scalars['date']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  year?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "trans_leave_request" */
export type Trans_Leave_Request_Min_Order_By = {
  approved_date?: InputMaybe<Order_By>;
  cancelled_date?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  date_from_leave?: InputMaybe<Order_By>;
  date_to_leave?: InputMaybe<Order_By>;
  day?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  manager_id?: InputMaybe<Order_By>;
  month?: InputMaybe<Order_By>;
  rejected_date?: InputMaybe<Order_By>;
  remarks?: InputMaybe<Order_By>;
  request_type_id?: InputMaybe<Order_By>;
  requested_id?: InputMaybe<Order_By>;
  status_id?: InputMaybe<Order_By>;
  submitted_date?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  year?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "trans_leave_request" */
export type Trans_Leave_Request_Mutation_Response = {
  __typename?: 'trans_leave_request_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Trans_Leave_Request>;
};

/** input type for inserting object relation for remote table "trans_leave_request" */
export type Trans_Leave_Request_Obj_Rel_Insert_Input = {
  data: Trans_Leave_Request_Insert_Input;
  /** on conflict condition */
  on_conflict?: InputMaybe<Trans_Leave_Request_On_Conflict>;
};

/** on conflict condition type for table "trans_leave_request" */
export type Trans_Leave_Request_On_Conflict = {
  constraint: Trans_Leave_Request_Constraint;
  update_columns?: Array<Trans_Leave_Request_Update_Column>;
  where?: InputMaybe<Trans_Leave_Request_Bool_Exp>;
};

/** Ordering options when selecting data from "trans_leave_request". */
export type Trans_Leave_Request_Order_By = {
  active?: InputMaybe<Order_By>;
  approved_date?: InputMaybe<Order_By>;
  cancelled_date?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  date_from_leave?: InputMaybe<Order_By>;
  date_to_leave?: InputMaybe<Order_By>;
  day?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  manager?: InputMaybe<Users_Order_By>;
  manager_id?: InputMaybe<Order_By>;
  month?: InputMaybe<Order_By>;
  rejected_date?: InputMaybe<Order_By>;
  remarks?: InputMaybe<Order_By>;
  request_type?: InputMaybe<Request_Types_Order_By>;
  request_type_id?: InputMaybe<Order_By>;
  requested?: InputMaybe<Users_Order_By>;
  requested_id?: InputMaybe<Order_By>;
  status?: InputMaybe<Status_Order_By>;
  status_id?: InputMaybe<Order_By>;
  submitted_date?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  year?: InputMaybe<Order_By>;
};

/** primary key columns input for table: trans_leave_request */
export type Trans_Leave_Request_Pk_Columns_Input = {
  id: Scalars['bigint']['input'];
};

/** select columns of table "trans_leave_request" */
export enum Trans_Leave_Request_Select_Column {
  /** column name */
  Active = 'active',
  /** column name */
  ApprovedDate = 'approved_date',
  /** column name */
  CancelledDate = 'cancelled_date',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DateFromLeave = 'date_from_leave',
  /** column name */
  DateToLeave = 'date_to_leave',
  /** column name */
  Day = 'day',
  /** column name */
  Id = 'id',
  /** column name */
  ManagerId = 'manager_id',
  /** column name */
  Month = 'month',
  /** column name */
  RejectedDate = 'rejected_date',
  /** column name */
  Remarks = 'remarks',
  /** column name */
  RequestTypeId = 'request_type_id',
  /** column name */
  RequestedId = 'requested_id',
  /** column name */
  StatusId = 'status_id',
  /** column name */
  SubmittedDate = 'submitted_date',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Year = 'year'
}

/** input type for updating data in table "trans_leave_request" */
export type Trans_Leave_Request_Set_Input = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  approved_date?: InputMaybe<Scalars['date']['input']>;
  cancelled_date?: InputMaybe<Scalars['date']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  date_from_leave?: InputMaybe<Scalars['date']['input']>;
  date_to_leave?: InputMaybe<Scalars['date']['input']>;
  day?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  manager_id?: InputMaybe<Scalars['Int']['input']>;
  month?: InputMaybe<Scalars['String']['input']>;
  rejected_date?: InputMaybe<Scalars['date']['input']>;
  remarks?: InputMaybe<Scalars['String']['input']>;
  request_type_id?: InputMaybe<Scalars['Int']['input']>;
  requested_id?: InputMaybe<Scalars['Int']['input']>;
  status_id?: InputMaybe<Scalars['Int']['input']>;
  submitted_date?: InputMaybe<Scalars['date']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  year?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Trans_Leave_Request_Stddev_Fields = {
  __typename?: 'trans_leave_request_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
  manager_id?: Maybe<Scalars['Float']['output']>;
  request_type_id?: Maybe<Scalars['Float']['output']>;
  requested_id?: Maybe<Scalars['Float']['output']>;
  status_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "trans_leave_request" */
export type Trans_Leave_Request_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  manager_id?: InputMaybe<Order_By>;
  request_type_id?: InputMaybe<Order_By>;
  requested_id?: InputMaybe<Order_By>;
  status_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Trans_Leave_Request_Stddev_Pop_Fields = {
  __typename?: 'trans_leave_request_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  manager_id?: Maybe<Scalars['Float']['output']>;
  request_type_id?: Maybe<Scalars['Float']['output']>;
  requested_id?: Maybe<Scalars['Float']['output']>;
  status_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "trans_leave_request" */
export type Trans_Leave_Request_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  manager_id?: InputMaybe<Order_By>;
  request_type_id?: InputMaybe<Order_By>;
  requested_id?: InputMaybe<Order_By>;
  status_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Trans_Leave_Request_Stddev_Samp_Fields = {
  __typename?: 'trans_leave_request_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  manager_id?: Maybe<Scalars['Float']['output']>;
  request_type_id?: Maybe<Scalars['Float']['output']>;
  requested_id?: Maybe<Scalars['Float']['output']>;
  status_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "trans_leave_request" */
export type Trans_Leave_Request_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  manager_id?: InputMaybe<Order_By>;
  request_type_id?: InputMaybe<Order_By>;
  requested_id?: InputMaybe<Order_By>;
  status_id?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Trans_Leave_Request_Sum_Fields = {
  __typename?: 'trans_leave_request_sum_fields';
  id?: Maybe<Scalars['bigint']['output']>;
  manager_id?: Maybe<Scalars['Int']['output']>;
  request_type_id?: Maybe<Scalars['Int']['output']>;
  requested_id?: Maybe<Scalars['Int']['output']>;
  status_id?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "trans_leave_request" */
export type Trans_Leave_Request_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  manager_id?: InputMaybe<Order_By>;
  request_type_id?: InputMaybe<Order_By>;
  requested_id?: InputMaybe<Order_By>;
  status_id?: InputMaybe<Order_By>;
};

/** update columns of table "trans_leave_request" */
export enum Trans_Leave_Request_Update_Column {
  /** column name */
  Active = 'active',
  /** column name */
  ApprovedDate = 'approved_date',
  /** column name */
  CancelledDate = 'cancelled_date',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DateFromLeave = 'date_from_leave',
  /** column name */
  DateToLeave = 'date_to_leave',
  /** column name */
  Day = 'day',
  /** column name */
  Id = 'id',
  /** column name */
  ManagerId = 'manager_id',
  /** column name */
  Month = 'month',
  /** column name */
  RejectedDate = 'rejected_date',
  /** column name */
  Remarks = 'remarks',
  /** column name */
  RequestTypeId = 'request_type_id',
  /** column name */
  RequestedId = 'requested_id',
  /** column name */
  StatusId = 'status_id',
  /** column name */
  SubmittedDate = 'submitted_date',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Year = 'year'
}

/** aggregate var_pop on columns */
export type Trans_Leave_Request_Var_Pop_Fields = {
  __typename?: 'trans_leave_request_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  manager_id?: Maybe<Scalars['Float']['output']>;
  request_type_id?: Maybe<Scalars['Float']['output']>;
  requested_id?: Maybe<Scalars['Float']['output']>;
  status_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "trans_leave_request" */
export type Trans_Leave_Request_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  manager_id?: InputMaybe<Order_By>;
  request_type_id?: InputMaybe<Order_By>;
  requested_id?: InputMaybe<Order_By>;
  status_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Trans_Leave_Request_Var_Samp_Fields = {
  __typename?: 'trans_leave_request_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  manager_id?: Maybe<Scalars['Float']['output']>;
  request_type_id?: Maybe<Scalars['Float']['output']>;
  requested_id?: Maybe<Scalars['Float']['output']>;
  status_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "trans_leave_request" */
export type Trans_Leave_Request_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  manager_id?: InputMaybe<Order_By>;
  request_type_id?: InputMaybe<Order_By>;
  requested_id?: InputMaybe<Order_By>;
  status_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Trans_Leave_Request_Variance_Fields = {
  __typename?: 'trans_leave_request_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
  manager_id?: Maybe<Scalars['Float']['output']>;
  request_type_id?: Maybe<Scalars['Float']['output']>;
  requested_id?: Maybe<Scalars['Float']['output']>;
  status_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "trans_leave_request" */
export type Trans_Leave_Request_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  manager_id?: InputMaybe<Order_By>;
  request_type_id?: InputMaybe<Order_By>;
  requested_id?: InputMaybe<Order_By>;
  status_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "user_groups" */
export type User_Groups = {
  __typename?: 'user_groups';
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
};

/** aggregated selection of "user_groups" */
export type User_Groups_Aggregate = {
  __typename?: 'user_groups_aggregate';
  aggregate?: Maybe<User_Groups_Aggregate_Fields>;
  nodes: Array<User_Groups>;
};

/** aggregate fields of "user_groups" */
export type User_Groups_Aggregate_Fields = {
  __typename?: 'user_groups_aggregate_fields';
  avg?: Maybe<User_Groups_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<User_Groups_Max_Fields>;
  min?: Maybe<User_Groups_Min_Fields>;
  stddev?: Maybe<User_Groups_Stddev_Fields>;
  stddev_pop?: Maybe<User_Groups_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<User_Groups_Stddev_Samp_Fields>;
  sum?: Maybe<User_Groups_Sum_Fields>;
  var_pop?: Maybe<User_Groups_Var_Pop_Fields>;
  var_samp?: Maybe<User_Groups_Var_Samp_Fields>;
  variance?: Maybe<User_Groups_Variance_Fields>;
};


/** aggregate fields of "user_groups" */
export type User_Groups_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Groups_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type User_Groups_Avg_Fields = {
  __typename?: 'user_groups_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "user_groups". All fields are combined with a logical 'AND'. */
export type User_Groups_Bool_Exp = {
  _and?: InputMaybe<Array<User_Groups_Bool_Exp>>;
  _not?: InputMaybe<User_Groups_Bool_Exp>;
  _or?: InputMaybe<Array<User_Groups_Bool_Exp>>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "user_groups" */
export enum User_Groups_Constraint {
  /** unique or primary key constraint */
  UserGroupsPkey = 'user_groups_pkey'
}

/** input type for incrementing numeric columns in table "user_groups" */
export type User_Groups_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "user_groups" */
export type User_Groups_Insert_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type User_Groups_Max_Fields = {
  __typename?: 'user_groups_max_fields';
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type User_Groups_Min_Fields = {
  __typename?: 'user_groups_min_fields';
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "user_groups" */
export type User_Groups_Mutation_Response = {
  __typename?: 'user_groups_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<User_Groups>;
};

/** input type for inserting object relation for remote table "user_groups" */
export type User_Groups_Obj_Rel_Insert_Input = {
  data: User_Groups_Insert_Input;
  /** on conflict condition */
  on_conflict?: InputMaybe<User_Groups_On_Conflict>;
};

/** on conflict condition type for table "user_groups" */
export type User_Groups_On_Conflict = {
  constraint: User_Groups_Constraint;
  update_columns?: Array<User_Groups_Update_Column>;
  where?: InputMaybe<User_Groups_Bool_Exp>;
};

/** Ordering options when selecting data from "user_groups". */
export type User_Groups_Order_By = {
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: user_groups */
export type User_Groups_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "user_groups" */
export enum User_Groups_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "user_groups" */
export type User_Groups_Set_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type User_Groups_Stddev_Fields = {
  __typename?: 'user_groups_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type User_Groups_Stddev_Pop_Fields = {
  __typename?: 'user_groups_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type User_Groups_Stddev_Samp_Fields = {
  __typename?: 'user_groups_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate sum on columns */
export type User_Groups_Sum_Fields = {
  __typename?: 'user_groups_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "user_groups" */
export enum User_Groups_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** aggregate var_pop on columns */
export type User_Groups_Var_Pop_Fields = {
  __typename?: 'user_groups_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type User_Groups_Var_Samp_Fields = {
  __typename?: 'user_groups_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type User_Groups_Variance_Fields = {
  __typename?: 'user_groups_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  active?: Maybe<Scalars['Boolean']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  first_name?: Maybe<Scalars['String']['output']>;
  full_name?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  functional_lines?: Maybe<Functional_Lines>;
  functional_lines_id?: Maybe<Scalars['Int']['output']>;
  /** An object relationship */
  group?: Maybe<User_Groups>;
  group_id: Scalars['Int']['output'];
  id: Scalars['bigint']['output'];
  last_name?: Maybe<Scalars['String']['output']>;
  middle_name?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  ntid: Scalars['String']['output'];
  suffix_name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  avg?: Maybe<Users_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
  stddev?: Maybe<Users_Stddev_Fields>;
  stddev_pop?: Maybe<Users_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Users_Stddev_Samp_Fields>;
  sum?: Maybe<Users_Sum_Fields>;
  var_pop?: Maybe<Users_Var_Pop_Fields>;
  var_samp?: Maybe<Users_Var_Samp_Fields>;
  variance?: Maybe<Users_Variance_Fields>;
};


/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "users" */
export type Users_Aggregate_Order_By = {
  avg?: InputMaybe<Users_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Users_Max_Order_By>;
  min?: InputMaybe<Users_Min_Order_By>;
  stddev?: InputMaybe<Users_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Users_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Users_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Users_Sum_Order_By>;
  var_pop?: InputMaybe<Users_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Users_Var_Samp_Order_By>;
  variance?: InputMaybe<Users_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "users" */
export type Users_Arr_Rel_Insert_Input = {
  data: Array<Users_Insert_Input>;
  /** on conflict condition */
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** aggregate avg on columns */
export type Users_Avg_Fields = {
  __typename?: 'users_avg_fields';
  functional_lines_id?: Maybe<Scalars['Float']['output']>;
  group_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "users" */
export type Users_Avg_Order_By = {
  functional_lines_id?: InputMaybe<Order_By>;
  group_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Bool_Exp>>;
  _not?: InputMaybe<Users_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Bool_Exp>>;
  active?: InputMaybe<Boolean_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  first_name?: InputMaybe<String_Comparison_Exp>;
  full_name?: InputMaybe<String_Comparison_Exp>;
  functional_lines?: InputMaybe<Functional_Lines_Bool_Exp>;
  functional_lines_id?: InputMaybe<Int_Comparison_Exp>;
  group?: InputMaybe<User_Groups_Bool_Exp>;
  group_id?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  last_name?: InputMaybe<String_Comparison_Exp>;
  middle_name?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  ntid?: InputMaybe<String_Comparison_Exp>;
  suffix_name?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint */
  UsersPkey = 'users_pkey'
}

/** input type for incrementing numeric columns in table "users" */
export type Users_Inc_Input = {
  functional_lines_id?: InputMaybe<Scalars['Int']['input']>;
  group_id?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  first_name?: InputMaybe<Scalars['String']['input']>;
  full_name?: InputMaybe<Scalars['String']['input']>;
  functional_lines?: InputMaybe<Functional_Lines_Obj_Rel_Insert_Input>;
  functional_lines_id?: InputMaybe<Scalars['Int']['input']>;
  group?: InputMaybe<User_Groups_Obj_Rel_Insert_Input>;
  group_id?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  last_name?: InputMaybe<Scalars['String']['input']>;
  middle_name?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  ntid?: InputMaybe<Scalars['String']['input']>;
  suffix_name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** columns and relationships of "users_leave_lines" */
export type Users_Leave_Lines = {
  __typename?: 'users_leave_lines';
  active: Scalars['Boolean']['output'];
  count_holiday_in_lieu: Scalars['Int']['output'];
  count_vacation_leave: Scalars['Int']['output'];
  count_vacation_leave_carry: Scalars['Int']['output'];
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['bigint']['output'];
  name: Scalars['String']['output'];
  total_vacation_leave: Scalars['Int']['output'];
  updated_at: Scalars['timestamptz']['output'];
  /** An object relationship */
  users?: Maybe<Users>;
  users_id: Scalars['Int']['output'];
  year: Scalars['String']['output'];
};

/** aggregated selection of "users_leave_lines" */
export type Users_Leave_Lines_Aggregate = {
  __typename?: 'users_leave_lines_aggregate';
  aggregate?: Maybe<Users_Leave_Lines_Aggregate_Fields>;
  nodes: Array<Users_Leave_Lines>;
};

/** aggregate fields of "users_leave_lines" */
export type Users_Leave_Lines_Aggregate_Fields = {
  __typename?: 'users_leave_lines_aggregate_fields';
  avg?: Maybe<Users_Leave_Lines_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Users_Leave_Lines_Max_Fields>;
  min?: Maybe<Users_Leave_Lines_Min_Fields>;
  stddev?: Maybe<Users_Leave_Lines_Stddev_Fields>;
  stddev_pop?: Maybe<Users_Leave_Lines_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Users_Leave_Lines_Stddev_Samp_Fields>;
  sum?: Maybe<Users_Leave_Lines_Sum_Fields>;
  var_pop?: Maybe<Users_Leave_Lines_Var_Pop_Fields>;
  var_samp?: Maybe<Users_Leave_Lines_Var_Samp_Fields>;
  variance?: Maybe<Users_Leave_Lines_Variance_Fields>;
};


/** aggregate fields of "users_leave_lines" */
export type Users_Leave_Lines_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Users_Leave_Lines_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Users_Leave_Lines_Avg_Fields = {
  __typename?: 'users_leave_lines_avg_fields';
  count_holiday_in_lieu?: Maybe<Scalars['Float']['output']>;
  count_vacation_leave?: Maybe<Scalars['Float']['output']>;
  count_vacation_leave_carry?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  total_vacation_leave?: Maybe<Scalars['Float']['output']>;
  users_id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "users_leave_lines". All fields are combined with a logical 'AND'. */
export type Users_Leave_Lines_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Leave_Lines_Bool_Exp>>;
  _not?: InputMaybe<Users_Leave_Lines_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Leave_Lines_Bool_Exp>>;
  active?: InputMaybe<Boolean_Comparison_Exp>;
  count_holiday_in_lieu?: InputMaybe<Int_Comparison_Exp>;
  count_vacation_leave?: InputMaybe<Int_Comparison_Exp>;
  count_vacation_leave_carry?: InputMaybe<Int_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  total_vacation_leave?: InputMaybe<Int_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  users?: InputMaybe<Users_Bool_Exp>;
  users_id?: InputMaybe<Int_Comparison_Exp>;
  year?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "users_leave_lines" */
export enum Users_Leave_Lines_Constraint {
  /** unique or primary key constraint */
  UsersLeaveLinesPkey = 'users_leave_lines_pkey'
}

/** input type for incrementing numeric columns in table "users_leave_lines" */
export type Users_Leave_Lines_Inc_Input = {
  count_holiday_in_lieu?: InputMaybe<Scalars['Int']['input']>;
  count_vacation_leave?: InputMaybe<Scalars['Int']['input']>;
  count_vacation_leave_carry?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  total_vacation_leave?: InputMaybe<Scalars['Int']['input']>;
  users_id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "users_leave_lines" */
export type Users_Leave_Lines_Insert_Input = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  count_holiday_in_lieu?: InputMaybe<Scalars['Int']['input']>;
  count_vacation_leave?: InputMaybe<Scalars['Int']['input']>;
  count_vacation_leave_carry?: InputMaybe<Scalars['Int']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  total_vacation_leave?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  users?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  users_id?: InputMaybe<Scalars['Int']['input']>;
  year?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Users_Leave_Lines_Max_Fields = {
  __typename?: 'users_leave_lines_max_fields';
  count_holiday_in_lieu?: Maybe<Scalars['Int']['output']>;
  count_vacation_leave?: Maybe<Scalars['Int']['output']>;
  count_vacation_leave_carry?: Maybe<Scalars['Int']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  total_vacation_leave?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  users_id?: Maybe<Scalars['Int']['output']>;
  year?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Users_Leave_Lines_Min_Fields = {
  __typename?: 'users_leave_lines_min_fields';
  count_holiday_in_lieu?: Maybe<Scalars['Int']['output']>;
  count_vacation_leave?: Maybe<Scalars['Int']['output']>;
  count_vacation_leave_carry?: Maybe<Scalars['Int']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  total_vacation_leave?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  users_id?: Maybe<Scalars['Int']['output']>;
  year?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "users_leave_lines" */
export type Users_Leave_Lines_Mutation_Response = {
  __typename?: 'users_leave_lines_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Users_Leave_Lines>;
};

/** on conflict condition type for table "users_leave_lines" */
export type Users_Leave_Lines_On_Conflict = {
  constraint: Users_Leave_Lines_Constraint;
  update_columns?: Array<Users_Leave_Lines_Update_Column>;
  where?: InputMaybe<Users_Leave_Lines_Bool_Exp>;
};

/** Ordering options when selecting data from "users_leave_lines". */
export type Users_Leave_Lines_Order_By = {
  active?: InputMaybe<Order_By>;
  count_holiday_in_lieu?: InputMaybe<Order_By>;
  count_vacation_leave?: InputMaybe<Order_By>;
  count_vacation_leave_carry?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  total_vacation_leave?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  users?: InputMaybe<Users_Order_By>;
  users_id?: InputMaybe<Order_By>;
  year?: InputMaybe<Order_By>;
};

/** primary key columns input for table: users_leave_lines */
export type Users_Leave_Lines_Pk_Columns_Input = {
  id: Scalars['bigint']['input'];
};

/** select columns of table "users_leave_lines" */
export enum Users_Leave_Lines_Select_Column {
  /** column name */
  Active = 'active',
  /** column name */
  CountHolidayInLieu = 'count_holiday_in_lieu',
  /** column name */
  CountVacationLeave = 'count_vacation_leave',
  /** column name */
  CountVacationLeaveCarry = 'count_vacation_leave_carry',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  TotalVacationLeave = 'total_vacation_leave',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UsersId = 'users_id',
  /** column name */
  Year = 'year'
}

/** input type for updating data in table "users_leave_lines" */
export type Users_Leave_Lines_Set_Input = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  count_holiday_in_lieu?: InputMaybe<Scalars['Int']['input']>;
  count_vacation_leave?: InputMaybe<Scalars['Int']['input']>;
  count_vacation_leave_carry?: InputMaybe<Scalars['Int']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  total_vacation_leave?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  users_id?: InputMaybe<Scalars['Int']['input']>;
  year?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Users_Leave_Lines_Stddev_Fields = {
  __typename?: 'users_leave_lines_stddev_fields';
  count_holiday_in_lieu?: Maybe<Scalars['Float']['output']>;
  count_vacation_leave?: Maybe<Scalars['Float']['output']>;
  count_vacation_leave_carry?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  total_vacation_leave?: Maybe<Scalars['Float']['output']>;
  users_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Users_Leave_Lines_Stddev_Pop_Fields = {
  __typename?: 'users_leave_lines_stddev_pop_fields';
  count_holiday_in_lieu?: Maybe<Scalars['Float']['output']>;
  count_vacation_leave?: Maybe<Scalars['Float']['output']>;
  count_vacation_leave_carry?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  total_vacation_leave?: Maybe<Scalars['Float']['output']>;
  users_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Users_Leave_Lines_Stddev_Samp_Fields = {
  __typename?: 'users_leave_lines_stddev_samp_fields';
  count_holiday_in_lieu?: Maybe<Scalars['Float']['output']>;
  count_vacation_leave?: Maybe<Scalars['Float']['output']>;
  count_vacation_leave_carry?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  total_vacation_leave?: Maybe<Scalars['Float']['output']>;
  users_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate sum on columns */
export type Users_Leave_Lines_Sum_Fields = {
  __typename?: 'users_leave_lines_sum_fields';
  count_holiday_in_lieu?: Maybe<Scalars['Int']['output']>;
  count_vacation_leave?: Maybe<Scalars['Int']['output']>;
  count_vacation_leave_carry?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  total_vacation_leave?: Maybe<Scalars['Int']['output']>;
  users_id?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "users_leave_lines" */
export enum Users_Leave_Lines_Update_Column {
  /** column name */
  Active = 'active',
  /** column name */
  CountHolidayInLieu = 'count_holiday_in_lieu',
  /** column name */
  CountVacationLeave = 'count_vacation_leave',
  /** column name */
  CountVacationLeaveCarry = 'count_vacation_leave_carry',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  TotalVacationLeave = 'total_vacation_leave',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UsersId = 'users_id',
  /** column name */
  Year = 'year'
}

/** aggregate var_pop on columns */
export type Users_Leave_Lines_Var_Pop_Fields = {
  __typename?: 'users_leave_lines_var_pop_fields';
  count_holiday_in_lieu?: Maybe<Scalars['Float']['output']>;
  count_vacation_leave?: Maybe<Scalars['Float']['output']>;
  count_vacation_leave_carry?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  total_vacation_leave?: Maybe<Scalars['Float']['output']>;
  users_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Users_Leave_Lines_Var_Samp_Fields = {
  __typename?: 'users_leave_lines_var_samp_fields';
  count_holiday_in_lieu?: Maybe<Scalars['Float']['output']>;
  count_vacation_leave?: Maybe<Scalars['Float']['output']>;
  count_vacation_leave_carry?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  total_vacation_leave?: Maybe<Scalars['Float']['output']>;
  users_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Users_Leave_Lines_Variance_Fields = {
  __typename?: 'users_leave_lines_variance_fields';
  count_holiday_in_lieu?: Maybe<Scalars['Float']['output']>;
  count_vacation_leave?: Maybe<Scalars['Float']['output']>;
  count_vacation_leave_carry?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  total_vacation_leave?: Maybe<Scalars['Float']['output']>;
  users_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  first_name?: Maybe<Scalars['String']['output']>;
  full_name?: Maybe<Scalars['String']['output']>;
  functional_lines_id?: Maybe<Scalars['Int']['output']>;
  group_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  last_name?: Maybe<Scalars['String']['output']>;
  middle_name?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  ntid?: Maybe<Scalars['String']['output']>;
  suffix_name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "users" */
export type Users_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  first_name?: InputMaybe<Order_By>;
  full_name?: InputMaybe<Order_By>;
  functional_lines_id?: InputMaybe<Order_By>;
  group_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  last_name?: InputMaybe<Order_By>;
  middle_name?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  ntid?: InputMaybe<Order_By>;
  suffix_name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  first_name?: Maybe<Scalars['String']['output']>;
  full_name?: Maybe<Scalars['String']['output']>;
  functional_lines_id?: Maybe<Scalars['Int']['output']>;
  group_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  last_name?: Maybe<Scalars['String']['output']>;
  middle_name?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  ntid?: Maybe<Scalars['String']['output']>;
  suffix_name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "users" */
export type Users_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  first_name?: InputMaybe<Order_By>;
  full_name?: InputMaybe<Order_By>;
  functional_lines_id?: InputMaybe<Order_By>;
  group_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  last_name?: InputMaybe<Order_By>;
  middle_name?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  ntid?: InputMaybe<Order_By>;
  suffix_name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  /** on conflict condition */
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** on conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  active?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  first_name?: InputMaybe<Order_By>;
  full_name?: InputMaybe<Order_By>;
  functional_lines?: InputMaybe<Functional_Lines_Order_By>;
  functional_lines_id?: InputMaybe<Order_By>;
  group?: InputMaybe<User_Groups_Order_By>;
  group_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  last_name?: InputMaybe<Order_By>;
  middle_name?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  ntid?: InputMaybe<Order_By>;
  suffix_name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  id: Scalars['bigint']['input'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  Active = 'active',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  FullName = 'full_name',
  /** column name */
  FunctionalLinesId = 'functional_lines_id',
  /** column name */
  GroupId = 'group_id',
  /** column name */
  Id = 'id',
  /** column name */
  LastName = 'last_name',
  /** column name */
  MiddleName = 'middle_name',
  /** column name */
  Name = 'name',
  /** column name */
  Ntid = 'ntid',
  /** column name */
  SuffixName = 'suffix_name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  first_name?: InputMaybe<Scalars['String']['input']>;
  full_name?: InputMaybe<Scalars['String']['input']>;
  functional_lines_id?: InputMaybe<Scalars['Int']['input']>;
  group_id?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  last_name?: InputMaybe<Scalars['String']['input']>;
  middle_name?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  ntid?: InputMaybe<Scalars['String']['input']>;
  suffix_name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Users_Stddev_Fields = {
  __typename?: 'users_stddev_fields';
  functional_lines_id?: Maybe<Scalars['Float']['output']>;
  group_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "users" */
export type Users_Stddev_Order_By = {
  functional_lines_id?: InputMaybe<Order_By>;
  group_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Users_Stddev_Pop_Fields = {
  __typename?: 'users_stddev_pop_fields';
  functional_lines_id?: Maybe<Scalars['Float']['output']>;
  group_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "users" */
export type Users_Stddev_Pop_Order_By = {
  functional_lines_id?: InputMaybe<Order_By>;
  group_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Users_Stddev_Samp_Fields = {
  __typename?: 'users_stddev_samp_fields';
  functional_lines_id?: Maybe<Scalars['Float']['output']>;
  group_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "users" */
export type Users_Stddev_Samp_Order_By = {
  functional_lines_id?: InputMaybe<Order_By>;
  group_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Users_Sum_Fields = {
  __typename?: 'users_sum_fields';
  functional_lines_id?: Maybe<Scalars['Int']['output']>;
  group_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "users" */
export type Users_Sum_Order_By = {
  functional_lines_id?: InputMaybe<Order_By>;
  group_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  Active = 'active',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  FullName = 'full_name',
  /** column name */
  FunctionalLinesId = 'functional_lines_id',
  /** column name */
  GroupId = 'group_id',
  /** column name */
  Id = 'id',
  /** column name */
  LastName = 'last_name',
  /** column name */
  MiddleName = 'middle_name',
  /** column name */
  Name = 'name',
  /** column name */
  Ntid = 'ntid',
  /** column name */
  SuffixName = 'suffix_name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Users_Var_Pop_Fields = {
  __typename?: 'users_var_pop_fields';
  functional_lines_id?: Maybe<Scalars['Float']['output']>;
  group_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "users" */
export type Users_Var_Pop_Order_By = {
  functional_lines_id?: InputMaybe<Order_By>;
  group_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Users_Var_Samp_Fields = {
  __typename?: 'users_var_samp_fields';
  functional_lines_id?: Maybe<Scalars['Float']['output']>;
  group_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "users" */
export type Users_Var_Samp_Order_By = {
  functional_lines_id?: InputMaybe<Order_By>;
  group_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Users_Variance_Fields = {
  __typename?: 'users_variance_fields';
  functional_lines_id?: Maybe<Scalars['Float']['output']>;
  group_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "users" */
export type Users_Variance_Order_By = {
  functional_lines_id?: InputMaybe<Order_By>;
  group_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};
