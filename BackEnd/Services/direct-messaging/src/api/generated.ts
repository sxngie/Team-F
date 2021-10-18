import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { ApolloContext } from './apolloContext';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type Chat = {
  __typename?: 'Chat';
  id: Scalars['ID'];
  latest?: Maybe<Message>;
  name: Scalars['String'];
  notification: Scalars['Boolean'];
  users: Array<Member>;
};

export type File = {
  __typename?: 'File';
  id: Scalars['ID'];
  mimeType: Scalars['String'];
  name: Scalars['String'];
  size: Scalars['String'];
};

export enum FileType {
  File = 'file',
  Media = 'media'
}

export type Files = {
  __typename?: 'Files';
  cursor: Scalars['Int'];
  files: Array<File>;
  hasMore: Scalars['Boolean'];
};

export type Links = {
  __typename?: 'Links';
  cursor: Scalars['Int'];
  hasMore: Scalars['Boolean'];
  links: Array<Scalars['String']>;
};

export type Member = Person & {
  __typename?: 'Member';
  avatar: Scalars['ID'];
  id: Scalars['ID'];
  role: Role;
  username: Scalars['String'];
};

export type Message = {
  __typename?: 'Message';
  attachment?: Maybe<File>;
  chat: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  message?: Maybe<Scalars['String']>;
  owner: Scalars['ID'];
  reply?: Maybe<Scalars['ID']>;
  updatedAt: Scalars['DateTime'];
};

export type MessageInput = {
  message?: Maybe<Scalars['String']>;
  reply?: Maybe<Scalars['ID']>;
};

export type Messages = {
  __typename?: 'Messages';
  cursor: Scalars['Int'];
  hasMore: Scalars['Boolean'];
  messages: Array<Message>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addUser: Scalars['Boolean'];
  createChat: Chat;
  createMessage: Message;
  deleteChat: Scalars['Boolean'];
  deleteMessage: Scalars['Boolean'];
  editChat: Chat;
  editMessage: Message;
  editUserRole: Member;
  joinChat: Scalars['Boolean'];
  leaveChat: Scalars['Boolean'];
  removeUser: Scalars['Boolean'];
};


export type MutationAddUserArgs = {
  chat: Scalars['ID'];
  role: Role;
  username: Scalars['String'];
};


export type MutationCreateChatArgs = {
  name: Scalars['String'];
};


export type MutationCreateMessageArgs = {
  chat: Scalars['ID'];
  message: MessageInput;
};


export type MutationDeleteChatArgs = {
  chat: Scalars['ID'];
};


export type MutationDeleteMessageArgs = {
  id: Scalars['ID'];
};


export type MutationEditChatArgs = {
  chat: Scalars['ID'];
  name: Scalars['String'];
};


export type MutationEditMessageArgs = {
  id: Scalars['ID'];
  message: MessageInput;
};


export type MutationEditUserRoleArgs = {
  chat: Scalars['ID'];
  role: Role;
  username: Scalars['String'];
};


export type MutationJoinChatArgs = {
  chat: Scalars['ID'];
};


export type MutationLeaveChatArgs = {
  chat: Scalars['ID'];
};


export type MutationRemoveUserArgs = {
  chat: Scalars['ID'];
  username: Scalars['String'];
};

export type Person = {
  avatar: Scalars['ID'];
  id: Scalars['ID'];
  username: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  getChat?: Maybe<Chat>;
  getChats: Array<Chat>;
  getFile?: Maybe<File>;
  getFiles: Files;
  getLastFiles: Array<File>;
  getLastLinks: Array<Scalars['String']>;
  getLinks: Links;
  getMessage?: Maybe<Message>;
  getMessages: Messages;
  getUser?: Maybe<User>;
  getUsers: Array<Member>;
};


export type QueryGetChatArgs = {
  id: Scalars['ID'];
};


export type QueryGetFileArgs = {
  id: Scalars['ID'];
  type: FileType;
};


export type QueryGetFilesArgs = {
  chat: Scalars['ID'];
  cursor: Scalars['Int'];
  pageSize: Scalars['Int'];
  type: FileType;
};


export type QueryGetLastFilesArgs = {
  chat: Scalars['ID'];
  pageSize: Scalars['Int'];
  type: FileType;
};


export type QueryGetLastLinksArgs = {
  chat: Scalars['ID'];
  pageSize: Scalars['Int'];
};


export type QueryGetLinksArgs = {
  chat: Scalars['ID'];
  cursor: Scalars['Int'];
  pageSize: Scalars['Int'];
};


export type QueryGetMessageArgs = {
  id: Scalars['ID'];
};


export type QueryGetMessagesArgs = {
  cursor: Scalars['Int'];
  id: Scalars['ID'];
  pageSize: Scalars['Int'];
};


export type QueryGetUsersArgs = {
  chat: Scalars['ID'];
};

export enum Role {
  Admin = 'admin',
  Member = 'member',
  Owner = 'owner'
}

export type User = Person & {
  __typename?: 'User';
  avatar: Scalars['ID'];
  id: Scalars['ID'];
  username: Scalars['String'];
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Chat: ResolverTypeWrapper<Chat>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>;
  File: ResolverTypeWrapper<File>;
  FileType: FileType;
  Files: ResolverTypeWrapper<Files>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Links: ResolverTypeWrapper<Links>;
  Member: ResolverTypeWrapper<Member>;
  Message: ResolverTypeWrapper<Message>;
  MessageInput: MessageInput;
  Messages: ResolverTypeWrapper<Messages>;
  Mutation: ResolverTypeWrapper<{}>;
  Person: ResolversTypes['Member'] | ResolversTypes['User'];
  Query: ResolverTypeWrapper<{}>;
  Role: Role;
  String: ResolverTypeWrapper<Scalars['String']>;
  User: ResolverTypeWrapper<User>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean'];
  Chat: Chat;
  DateTime: Scalars['DateTime'];
  File: File;
  Files: Files;
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  Links: Links;
  Member: Member;
  Message: Message;
  MessageInput: MessageInput;
  Messages: Messages;
  Mutation: {};
  Person: ResolversParentTypes['Member'] | ResolversParentTypes['User'];
  Query: {};
  String: Scalars['String'];
  User: User;
};

export type ChatResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['Chat'] = ResolversParentTypes['Chat']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  latest?: Resolver<Maybe<ResolversTypes['Message']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  notification?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  users?: Resolver<Array<ResolversTypes['Member']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type FileResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['File'] = ResolversParentTypes['File']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  mimeType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  size?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FilesResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['Files'] = ResolversParentTypes['Files']> = {
  cursor?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  files?: Resolver<Array<ResolversTypes['File']>, ParentType, ContextType>;
  hasMore?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LinksResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['Links'] = ResolversParentTypes['Links']> = {
  cursor?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  hasMore?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  links?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MemberResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['Member'] = ResolversParentTypes['Member']> = {
  avatar?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  role?: Resolver<ResolversTypes['Role'], ParentType, ContextType>;
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MessageResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['Message'] = ResolversParentTypes['Message']> = {
  attachment?: Resolver<Maybe<ResolversTypes['File']>, ParentType, ContextType>;
  chat?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  owner?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  reply?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MessagesResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['Messages'] = ResolversParentTypes['Messages']> = {
  cursor?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  hasMore?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  messages?: Resolver<Array<ResolversTypes['Message']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  addUser?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationAddUserArgs, 'chat' | 'role' | 'username'>>;
  createChat?: Resolver<ResolversTypes['Chat'], ParentType, ContextType, RequireFields<MutationCreateChatArgs, 'name'>>;
  createMessage?: Resolver<ResolversTypes['Message'], ParentType, ContextType, RequireFields<MutationCreateMessageArgs, 'chat' | 'message'>>;
  deleteChat?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeleteChatArgs, 'chat'>>;
  deleteMessage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeleteMessageArgs, 'id'>>;
  editChat?: Resolver<ResolversTypes['Chat'], ParentType, ContextType, RequireFields<MutationEditChatArgs, 'chat' | 'name'>>;
  editMessage?: Resolver<ResolversTypes['Message'], ParentType, ContextType, RequireFields<MutationEditMessageArgs, 'id' | 'message'>>;
  editUserRole?: Resolver<ResolversTypes['Member'], ParentType, ContextType, RequireFields<MutationEditUserRoleArgs, 'chat' | 'role' | 'username'>>;
  joinChat?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationJoinChatArgs, 'chat'>>;
  leaveChat?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationLeaveChatArgs, 'chat'>>;
  removeUser?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationRemoveUserArgs, 'chat' | 'username'>>;
};

export type PersonResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['Person'] = ResolversParentTypes['Person']> = {
  __resolveType: TypeResolveFn<'Member' | 'User', ParentType, ContextType>;
  avatar?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type QueryResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  getChat?: Resolver<Maybe<ResolversTypes['Chat']>, ParentType, ContextType, RequireFields<QueryGetChatArgs, 'id'>>;
  getChats?: Resolver<Array<ResolversTypes['Chat']>, ParentType, ContextType>;
  getFile?: Resolver<Maybe<ResolversTypes['File']>, ParentType, ContextType, RequireFields<QueryGetFileArgs, 'id' | 'type'>>;
  getFiles?: Resolver<ResolversTypes['Files'], ParentType, ContextType, RequireFields<QueryGetFilesArgs, 'chat' | 'cursor' | 'pageSize' | 'type'>>;
  getLastFiles?: Resolver<Array<ResolversTypes['File']>, ParentType, ContextType, RequireFields<QueryGetLastFilesArgs, 'chat' | 'pageSize' | 'type'>>;
  getLastLinks?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType, RequireFields<QueryGetLastLinksArgs, 'chat' | 'pageSize'>>;
  getLinks?: Resolver<ResolversTypes['Links'], ParentType, ContextType, RequireFields<QueryGetLinksArgs, 'chat' | 'cursor' | 'pageSize'>>;
  getMessage?: Resolver<Maybe<ResolversTypes['Message']>, ParentType, ContextType, RequireFields<QueryGetMessageArgs, 'id'>>;
  getMessages?: Resolver<ResolversTypes['Messages'], ParentType, ContextType, RequireFields<QueryGetMessagesArgs, 'cursor' | 'id' | 'pageSize'>>;
  getUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  getUsers?: Resolver<Array<ResolversTypes['Member']>, ParentType, ContextType, RequireFields<QueryGetUsersArgs, 'chat'>>;
};

export type UserResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  avatar?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = ApolloContext> = {
  Chat?: ChatResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  File?: FileResolvers<ContextType>;
  Files?: FilesResolvers<ContextType>;
  Links?: LinksResolvers<ContextType>;
  Member?: MemberResolvers<ContextType>;
  Message?: MessageResolvers<ContextType>;
  Messages?: MessagesResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Person?: PersonResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
};

