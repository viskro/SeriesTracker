
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Verification
 * 
 */
export type Verification = $Result.DefaultSelection<Prisma.$VerificationPayload>
/**
 * Model Genres
 * 
 */
export type Genres = $Result.DefaultSelection<Prisma.$GenresPayload>
/**
 * Model SeriesGenres
 * 
 */
export type SeriesGenres = $Result.DefaultSelection<Prisma.$SeriesGenresPayload>
/**
 * Model ShowComments
 * 
 */
export type ShowComments = $Result.DefaultSelection<Prisma.$ShowCommentsPayload>
/**
 * Model EpisodesComments
 * 
 */
export type EpisodesComments = $Result.DefaultSelection<Prisma.$EpisodesCommentsPayload>
/**
 * Model Episodes
 * 
 */
export type Episodes = $Result.DefaultSelection<Prisma.$EpisodesPayload>
/**
 * Model Cast
 * 
 */
export type Cast = $Result.DefaultSelection<Prisma.$CastPayload>
/**
 * Model Seasons
 * 
 */
export type Seasons = $Result.DefaultSelection<Prisma.$SeasonsPayload>
/**
 * Model ShowCast
 * 
 */
export type ShowCast = $Result.DefaultSelection<Prisma.$ShowCastPayload>
/**
 * Model Platforms
 * 
 */
export type Platforms = $Result.DefaultSelection<Prisma.$PlatformsPayload>
/**
 * Model SeriesPlatforms
 * 
 */
export type SeriesPlatforms = $Result.DefaultSelection<Prisma.$SeriesPlatformsPayload>
/**
 * Model Shows
 * 
 */
export type Shows = $Result.DefaultSelection<Prisma.$ShowsPayload>
/**
 * Model UserShows
 * 
 */
export type UserShows = $Result.DefaultSelection<Prisma.$UserShowsPayload>
/**
 * Model UserEpisodes
 * 
 */
export type UserEpisodes = $Result.DefaultSelection<Prisma.$UserEpisodesPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const users_shows_status: {
  to_watch: 'to_watch',
  ongoing: 'ongoing',
  finished: 'finished'
};

export type users_shows_status = (typeof users_shows_status)[keyof typeof users_shows_status]

}

export type users_shows_status = $Enums.users_shows_status

export const users_shows_status: typeof $Enums.users_shows_status

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.verification`: Exposes CRUD operations for the **Verification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Verifications
    * const verifications = await prisma.verification.findMany()
    * ```
    */
  get verification(): Prisma.VerificationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.genres`: Exposes CRUD operations for the **Genres** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Genres
    * const genres = await prisma.genres.findMany()
    * ```
    */
  get genres(): Prisma.GenresDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.seriesGenres`: Exposes CRUD operations for the **SeriesGenres** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SeriesGenres
    * const seriesGenres = await prisma.seriesGenres.findMany()
    * ```
    */
  get seriesGenres(): Prisma.SeriesGenresDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.showComments`: Exposes CRUD operations for the **ShowComments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ShowComments
    * const showComments = await prisma.showComments.findMany()
    * ```
    */
  get showComments(): Prisma.ShowCommentsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.episodesComments`: Exposes CRUD operations for the **EpisodesComments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EpisodesComments
    * const episodesComments = await prisma.episodesComments.findMany()
    * ```
    */
  get episodesComments(): Prisma.EpisodesCommentsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.episodes`: Exposes CRUD operations for the **Episodes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Episodes
    * const episodes = await prisma.episodes.findMany()
    * ```
    */
  get episodes(): Prisma.EpisodesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cast`: Exposes CRUD operations for the **Cast** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Casts
    * const casts = await prisma.cast.findMany()
    * ```
    */
  get cast(): Prisma.CastDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.seasons`: Exposes CRUD operations for the **Seasons** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Seasons
    * const seasons = await prisma.seasons.findMany()
    * ```
    */
  get seasons(): Prisma.SeasonsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.showCast`: Exposes CRUD operations for the **ShowCast** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ShowCasts
    * const showCasts = await prisma.showCast.findMany()
    * ```
    */
  get showCast(): Prisma.ShowCastDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.platforms`: Exposes CRUD operations for the **Platforms** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Platforms
    * const platforms = await prisma.platforms.findMany()
    * ```
    */
  get platforms(): Prisma.PlatformsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.seriesPlatforms`: Exposes CRUD operations for the **SeriesPlatforms** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SeriesPlatforms
    * const seriesPlatforms = await prisma.seriesPlatforms.findMany()
    * ```
    */
  get seriesPlatforms(): Prisma.SeriesPlatformsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.shows`: Exposes CRUD operations for the **Shows** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Shows
    * const shows = await prisma.shows.findMany()
    * ```
    */
  get shows(): Prisma.ShowsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userShows`: Exposes CRUD operations for the **UserShows** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserShows
    * const userShows = await prisma.userShows.findMany()
    * ```
    */
  get userShows(): Prisma.UserShowsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userEpisodes`: Exposes CRUD operations for the **UserEpisodes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserEpisodes
    * const userEpisodes = await prisma.userEpisodes.findMany()
    * ```
    */
  get userEpisodes(): Prisma.UserEpisodesDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.9.0
   * Query Engine version: 81e4af48011447c3cc503a190e86995b66d2a28e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Session: 'Session',
    Account: 'Account',
    Verification: 'Verification',
    Genres: 'Genres',
    SeriesGenres: 'SeriesGenres',
    ShowComments: 'ShowComments',
    EpisodesComments: 'EpisodesComments',
    Episodes: 'Episodes',
    Cast: 'Cast',
    Seasons: 'Seasons',
    ShowCast: 'ShowCast',
    Platforms: 'Platforms',
    SeriesPlatforms: 'SeriesPlatforms',
    Shows: 'Shows',
    UserShows: 'UserShows',
    UserEpisodes: 'UserEpisodes'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "session" | "account" | "verification" | "genres" | "seriesGenres" | "showComments" | "episodesComments" | "episodes" | "cast" | "seasons" | "showCast" | "platforms" | "seriesPlatforms" | "shows" | "userShows" | "userEpisodes"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Verification: {
        payload: Prisma.$VerificationPayload<ExtArgs>
        fields: Prisma.VerificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          findFirst: {
            args: Prisma.VerificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          findMany: {
            args: Prisma.VerificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>[]
          }
          create: {
            args: Prisma.VerificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          createMany: {
            args: Prisma.VerificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.VerificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          update: {
            args: Prisma.VerificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          deleteMany: {
            args: Prisma.VerificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VerificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          aggregate: {
            args: Prisma.VerificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerification>
          }
          groupBy: {
            args: Prisma.VerificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationCountAggregateOutputType> | number
          }
        }
      }
      Genres: {
        payload: Prisma.$GenresPayload<ExtArgs>
        fields: Prisma.GenresFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GenresFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenresPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GenresFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenresPayload>
          }
          findFirst: {
            args: Prisma.GenresFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenresPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GenresFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenresPayload>
          }
          findMany: {
            args: Prisma.GenresFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenresPayload>[]
          }
          create: {
            args: Prisma.GenresCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenresPayload>
          }
          createMany: {
            args: Prisma.GenresCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.GenresDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenresPayload>
          }
          update: {
            args: Prisma.GenresUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenresPayload>
          }
          deleteMany: {
            args: Prisma.GenresDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GenresUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.GenresUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenresPayload>
          }
          aggregate: {
            args: Prisma.GenresAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGenres>
          }
          groupBy: {
            args: Prisma.GenresGroupByArgs<ExtArgs>
            result: $Utils.Optional<GenresGroupByOutputType>[]
          }
          count: {
            args: Prisma.GenresCountArgs<ExtArgs>
            result: $Utils.Optional<GenresCountAggregateOutputType> | number
          }
        }
      }
      SeriesGenres: {
        payload: Prisma.$SeriesGenresPayload<ExtArgs>
        fields: Prisma.SeriesGenresFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SeriesGenresFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeriesGenresPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SeriesGenresFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeriesGenresPayload>
          }
          findFirst: {
            args: Prisma.SeriesGenresFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeriesGenresPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SeriesGenresFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeriesGenresPayload>
          }
          findMany: {
            args: Prisma.SeriesGenresFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeriesGenresPayload>[]
          }
          create: {
            args: Prisma.SeriesGenresCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeriesGenresPayload>
          }
          createMany: {
            args: Prisma.SeriesGenresCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SeriesGenresDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeriesGenresPayload>
          }
          update: {
            args: Prisma.SeriesGenresUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeriesGenresPayload>
          }
          deleteMany: {
            args: Prisma.SeriesGenresDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SeriesGenresUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SeriesGenresUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeriesGenresPayload>
          }
          aggregate: {
            args: Prisma.SeriesGenresAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSeriesGenres>
          }
          groupBy: {
            args: Prisma.SeriesGenresGroupByArgs<ExtArgs>
            result: $Utils.Optional<SeriesGenresGroupByOutputType>[]
          }
          count: {
            args: Prisma.SeriesGenresCountArgs<ExtArgs>
            result: $Utils.Optional<SeriesGenresCountAggregateOutputType> | number
          }
        }
      }
      ShowComments: {
        payload: Prisma.$ShowCommentsPayload<ExtArgs>
        fields: Prisma.ShowCommentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShowCommentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShowCommentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShowCommentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShowCommentsPayload>
          }
          findFirst: {
            args: Prisma.ShowCommentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShowCommentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShowCommentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShowCommentsPayload>
          }
          findMany: {
            args: Prisma.ShowCommentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShowCommentsPayload>[]
          }
          create: {
            args: Prisma.ShowCommentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShowCommentsPayload>
          }
          createMany: {
            args: Prisma.ShowCommentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ShowCommentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShowCommentsPayload>
          }
          update: {
            args: Prisma.ShowCommentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShowCommentsPayload>
          }
          deleteMany: {
            args: Prisma.ShowCommentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ShowCommentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ShowCommentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShowCommentsPayload>
          }
          aggregate: {
            args: Prisma.ShowCommentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShowComments>
          }
          groupBy: {
            args: Prisma.ShowCommentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShowCommentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ShowCommentsCountArgs<ExtArgs>
            result: $Utils.Optional<ShowCommentsCountAggregateOutputType> | number
          }
        }
      }
      EpisodesComments: {
        payload: Prisma.$EpisodesCommentsPayload<ExtArgs>
        fields: Prisma.EpisodesCommentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EpisodesCommentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpisodesCommentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EpisodesCommentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpisodesCommentsPayload>
          }
          findFirst: {
            args: Prisma.EpisodesCommentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpisodesCommentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EpisodesCommentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpisodesCommentsPayload>
          }
          findMany: {
            args: Prisma.EpisodesCommentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpisodesCommentsPayload>[]
          }
          create: {
            args: Prisma.EpisodesCommentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpisodesCommentsPayload>
          }
          createMany: {
            args: Prisma.EpisodesCommentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.EpisodesCommentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpisodesCommentsPayload>
          }
          update: {
            args: Prisma.EpisodesCommentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpisodesCommentsPayload>
          }
          deleteMany: {
            args: Prisma.EpisodesCommentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EpisodesCommentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EpisodesCommentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpisodesCommentsPayload>
          }
          aggregate: {
            args: Prisma.EpisodesCommentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEpisodesComments>
          }
          groupBy: {
            args: Prisma.EpisodesCommentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<EpisodesCommentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.EpisodesCommentsCountArgs<ExtArgs>
            result: $Utils.Optional<EpisodesCommentsCountAggregateOutputType> | number
          }
        }
      }
      Episodes: {
        payload: Prisma.$EpisodesPayload<ExtArgs>
        fields: Prisma.EpisodesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EpisodesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpisodesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EpisodesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpisodesPayload>
          }
          findFirst: {
            args: Prisma.EpisodesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpisodesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EpisodesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpisodesPayload>
          }
          findMany: {
            args: Prisma.EpisodesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpisodesPayload>[]
          }
          create: {
            args: Prisma.EpisodesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpisodesPayload>
          }
          createMany: {
            args: Prisma.EpisodesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.EpisodesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpisodesPayload>
          }
          update: {
            args: Prisma.EpisodesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpisodesPayload>
          }
          deleteMany: {
            args: Prisma.EpisodesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EpisodesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EpisodesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpisodesPayload>
          }
          aggregate: {
            args: Prisma.EpisodesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEpisodes>
          }
          groupBy: {
            args: Prisma.EpisodesGroupByArgs<ExtArgs>
            result: $Utils.Optional<EpisodesGroupByOutputType>[]
          }
          count: {
            args: Prisma.EpisodesCountArgs<ExtArgs>
            result: $Utils.Optional<EpisodesCountAggregateOutputType> | number
          }
        }
      }
      Cast: {
        payload: Prisma.$CastPayload<ExtArgs>
        fields: Prisma.CastFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CastFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CastPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CastFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CastPayload>
          }
          findFirst: {
            args: Prisma.CastFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CastPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CastFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CastPayload>
          }
          findMany: {
            args: Prisma.CastFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CastPayload>[]
          }
          create: {
            args: Prisma.CastCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CastPayload>
          }
          createMany: {
            args: Prisma.CastCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CastDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CastPayload>
          }
          update: {
            args: Prisma.CastUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CastPayload>
          }
          deleteMany: {
            args: Prisma.CastDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CastUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CastUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CastPayload>
          }
          aggregate: {
            args: Prisma.CastAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCast>
          }
          groupBy: {
            args: Prisma.CastGroupByArgs<ExtArgs>
            result: $Utils.Optional<CastGroupByOutputType>[]
          }
          count: {
            args: Prisma.CastCountArgs<ExtArgs>
            result: $Utils.Optional<CastCountAggregateOutputType> | number
          }
        }
      }
      Seasons: {
        payload: Prisma.$SeasonsPayload<ExtArgs>
        fields: Prisma.SeasonsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SeasonsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeasonsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SeasonsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeasonsPayload>
          }
          findFirst: {
            args: Prisma.SeasonsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeasonsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SeasonsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeasonsPayload>
          }
          findMany: {
            args: Prisma.SeasonsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeasonsPayload>[]
          }
          create: {
            args: Prisma.SeasonsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeasonsPayload>
          }
          createMany: {
            args: Prisma.SeasonsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SeasonsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeasonsPayload>
          }
          update: {
            args: Prisma.SeasonsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeasonsPayload>
          }
          deleteMany: {
            args: Prisma.SeasonsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SeasonsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SeasonsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeasonsPayload>
          }
          aggregate: {
            args: Prisma.SeasonsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSeasons>
          }
          groupBy: {
            args: Prisma.SeasonsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SeasonsGroupByOutputType>[]
          }
          count: {
            args: Prisma.SeasonsCountArgs<ExtArgs>
            result: $Utils.Optional<SeasonsCountAggregateOutputType> | number
          }
        }
      }
      ShowCast: {
        payload: Prisma.$ShowCastPayload<ExtArgs>
        fields: Prisma.ShowCastFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShowCastFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShowCastPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShowCastFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShowCastPayload>
          }
          findFirst: {
            args: Prisma.ShowCastFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShowCastPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShowCastFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShowCastPayload>
          }
          findMany: {
            args: Prisma.ShowCastFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShowCastPayload>[]
          }
          create: {
            args: Prisma.ShowCastCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShowCastPayload>
          }
          createMany: {
            args: Prisma.ShowCastCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ShowCastDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShowCastPayload>
          }
          update: {
            args: Prisma.ShowCastUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShowCastPayload>
          }
          deleteMany: {
            args: Prisma.ShowCastDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ShowCastUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ShowCastUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShowCastPayload>
          }
          aggregate: {
            args: Prisma.ShowCastAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShowCast>
          }
          groupBy: {
            args: Prisma.ShowCastGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShowCastGroupByOutputType>[]
          }
          count: {
            args: Prisma.ShowCastCountArgs<ExtArgs>
            result: $Utils.Optional<ShowCastCountAggregateOutputType> | number
          }
        }
      }
      Platforms: {
        payload: Prisma.$PlatformsPayload<ExtArgs>
        fields: Prisma.PlatformsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlatformsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlatformsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformsPayload>
          }
          findFirst: {
            args: Prisma.PlatformsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlatformsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformsPayload>
          }
          findMany: {
            args: Prisma.PlatformsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformsPayload>[]
          }
          create: {
            args: Prisma.PlatformsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformsPayload>
          }
          createMany: {
            args: Prisma.PlatformsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PlatformsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformsPayload>
          }
          update: {
            args: Prisma.PlatformsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformsPayload>
          }
          deleteMany: {
            args: Prisma.PlatformsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlatformsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PlatformsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformsPayload>
          }
          aggregate: {
            args: Prisma.PlatformsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlatforms>
          }
          groupBy: {
            args: Prisma.PlatformsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlatformsGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlatformsCountArgs<ExtArgs>
            result: $Utils.Optional<PlatformsCountAggregateOutputType> | number
          }
        }
      }
      SeriesPlatforms: {
        payload: Prisma.$SeriesPlatformsPayload<ExtArgs>
        fields: Prisma.SeriesPlatformsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SeriesPlatformsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeriesPlatformsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SeriesPlatformsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeriesPlatformsPayload>
          }
          findFirst: {
            args: Prisma.SeriesPlatformsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeriesPlatformsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SeriesPlatformsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeriesPlatformsPayload>
          }
          findMany: {
            args: Prisma.SeriesPlatformsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeriesPlatformsPayload>[]
          }
          create: {
            args: Prisma.SeriesPlatformsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeriesPlatformsPayload>
          }
          createMany: {
            args: Prisma.SeriesPlatformsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SeriesPlatformsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeriesPlatformsPayload>
          }
          update: {
            args: Prisma.SeriesPlatformsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeriesPlatformsPayload>
          }
          deleteMany: {
            args: Prisma.SeriesPlatformsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SeriesPlatformsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SeriesPlatformsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeriesPlatformsPayload>
          }
          aggregate: {
            args: Prisma.SeriesPlatformsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSeriesPlatforms>
          }
          groupBy: {
            args: Prisma.SeriesPlatformsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SeriesPlatformsGroupByOutputType>[]
          }
          count: {
            args: Prisma.SeriesPlatformsCountArgs<ExtArgs>
            result: $Utils.Optional<SeriesPlatformsCountAggregateOutputType> | number
          }
        }
      }
      Shows: {
        payload: Prisma.$ShowsPayload<ExtArgs>
        fields: Prisma.ShowsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShowsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShowsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShowsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShowsPayload>
          }
          findFirst: {
            args: Prisma.ShowsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShowsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShowsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShowsPayload>
          }
          findMany: {
            args: Prisma.ShowsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShowsPayload>[]
          }
          create: {
            args: Prisma.ShowsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShowsPayload>
          }
          createMany: {
            args: Prisma.ShowsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ShowsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShowsPayload>
          }
          update: {
            args: Prisma.ShowsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShowsPayload>
          }
          deleteMany: {
            args: Prisma.ShowsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ShowsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ShowsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShowsPayload>
          }
          aggregate: {
            args: Prisma.ShowsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShows>
          }
          groupBy: {
            args: Prisma.ShowsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShowsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ShowsCountArgs<ExtArgs>
            result: $Utils.Optional<ShowsCountAggregateOutputType> | number
          }
        }
      }
      UserShows: {
        payload: Prisma.$UserShowsPayload<ExtArgs>
        fields: Prisma.UserShowsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserShowsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserShowsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserShowsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserShowsPayload>
          }
          findFirst: {
            args: Prisma.UserShowsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserShowsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserShowsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserShowsPayload>
          }
          findMany: {
            args: Prisma.UserShowsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserShowsPayload>[]
          }
          create: {
            args: Prisma.UserShowsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserShowsPayload>
          }
          createMany: {
            args: Prisma.UserShowsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserShowsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserShowsPayload>
          }
          update: {
            args: Prisma.UserShowsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserShowsPayload>
          }
          deleteMany: {
            args: Prisma.UserShowsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserShowsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserShowsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserShowsPayload>
          }
          aggregate: {
            args: Prisma.UserShowsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserShows>
          }
          groupBy: {
            args: Prisma.UserShowsGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserShowsGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserShowsCountArgs<ExtArgs>
            result: $Utils.Optional<UserShowsCountAggregateOutputType> | number
          }
        }
      }
      UserEpisodes: {
        payload: Prisma.$UserEpisodesPayload<ExtArgs>
        fields: Prisma.UserEpisodesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserEpisodesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserEpisodesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserEpisodesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserEpisodesPayload>
          }
          findFirst: {
            args: Prisma.UserEpisodesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserEpisodesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserEpisodesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserEpisodesPayload>
          }
          findMany: {
            args: Prisma.UserEpisodesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserEpisodesPayload>[]
          }
          create: {
            args: Prisma.UserEpisodesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserEpisodesPayload>
          }
          createMany: {
            args: Prisma.UserEpisodesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserEpisodesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserEpisodesPayload>
          }
          update: {
            args: Prisma.UserEpisodesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserEpisodesPayload>
          }
          deleteMany: {
            args: Prisma.UserEpisodesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserEpisodesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserEpisodesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserEpisodesPayload>
          }
          aggregate: {
            args: Prisma.UserEpisodesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserEpisodes>
          }
          groupBy: {
            args: Prisma.UserEpisodesGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserEpisodesGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserEpisodesCountArgs<ExtArgs>
            result: $Utils.Optional<UserEpisodesCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    session?: SessionOmit
    account?: AccountOmit
    verification?: VerificationOmit
    genres?: GenresOmit
    seriesGenres?: SeriesGenresOmit
    showComments?: ShowCommentsOmit
    episodesComments?: EpisodesCommentsOmit
    episodes?: EpisodesOmit
    cast?: CastOmit
    seasons?: SeasonsOmit
    showCast?: ShowCastOmit
    platforms?: PlatformsOmit
    seriesPlatforms?: SeriesPlatformsOmit
    shows?: ShowsOmit
    userShows?: UserShowsOmit
    userEpisodes?: UserEpisodesOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    ShowComments: number
    EpisodeComments: number
    accounts: number
    sessions: number
    users_shows: number
    users_episodes: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ShowComments?: boolean | UserCountOutputTypeCountShowCommentsArgs
    EpisodeComments?: boolean | UserCountOutputTypeCountEpisodeCommentsArgs
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
    users_shows?: boolean | UserCountOutputTypeCountUsers_showsArgs
    users_episodes?: boolean | UserCountOutputTypeCountUsers_episodesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountShowCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShowCommentsWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEpisodeCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EpisodesCommentsWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUsers_showsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserShowsWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUsers_episodesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserEpisodesWhereInput
  }


  /**
   * Count Type GenresCountOutputType
   */

  export type GenresCountOutputType = {
    seriesGenres: number
  }

  export type GenresCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    seriesGenres?: boolean | GenresCountOutputTypeCountSeriesGenresArgs
  }

  // Custom InputTypes
  /**
   * GenresCountOutputType without action
   */
  export type GenresCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GenresCountOutputType
     */
    select?: GenresCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GenresCountOutputType without action
   */
  export type GenresCountOutputTypeCountSeriesGenresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SeriesGenresWhereInput
  }


  /**
   * Count Type EpisodesCountOutputType
   */

  export type EpisodesCountOutputType = {
    comments: number
    users: number
  }

  export type EpisodesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comments?: boolean | EpisodesCountOutputTypeCountCommentsArgs
    users?: boolean | EpisodesCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * EpisodesCountOutputType without action
   */
  export type EpisodesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EpisodesCountOutputType
     */
    select?: EpisodesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EpisodesCountOutputType without action
   */
  export type EpisodesCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EpisodesCommentsWhereInput
  }

  /**
   * EpisodesCountOutputType without action
   */
  export type EpisodesCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserEpisodesWhereInput
  }


  /**
   * Count Type CastCountOutputType
   */

  export type CastCountOutputType = {
    show_cast: number
  }

  export type CastCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    show_cast?: boolean | CastCountOutputTypeCountShow_castArgs
  }

  // Custom InputTypes
  /**
   * CastCountOutputType without action
   */
  export type CastCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CastCountOutputType
     */
    select?: CastCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CastCountOutputType without action
   */
  export type CastCountOutputTypeCountShow_castArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShowCastWhereInput
  }


  /**
   * Count Type SeasonsCountOutputType
   */

  export type SeasonsCountOutputType = {
    episodes: number
  }

  export type SeasonsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    episodes?: boolean | SeasonsCountOutputTypeCountEpisodesArgs
  }

  // Custom InputTypes
  /**
   * SeasonsCountOutputType without action
   */
  export type SeasonsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeasonsCountOutputType
     */
    select?: SeasonsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SeasonsCountOutputType without action
   */
  export type SeasonsCountOutputTypeCountEpisodesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EpisodesWhereInput
  }


  /**
   * Count Type PlatformsCountOutputType
   */

  export type PlatformsCountOutputType = {
    seriesPlatforms: number
  }

  export type PlatformsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    seriesPlatforms?: boolean | PlatformsCountOutputTypeCountSeriesPlatformsArgs
  }

  // Custom InputTypes
  /**
   * PlatformsCountOutputType without action
   */
  export type PlatformsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlatformsCountOutputType
     */
    select?: PlatformsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PlatformsCountOutputType without action
   */
  export type PlatformsCountOutputTypeCountSeriesPlatformsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SeriesPlatformsWhereInput
  }


  /**
   * Count Type ShowsCountOutputType
   */

  export type ShowsCountOutputType = {
    seasons: number
    show_cast: number
    users_shows: number
    genres: number
    comments: number
    platforms: number
  }

  export type ShowsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    seasons?: boolean | ShowsCountOutputTypeCountSeasonsArgs
    show_cast?: boolean | ShowsCountOutputTypeCountShow_castArgs
    users_shows?: boolean | ShowsCountOutputTypeCountUsers_showsArgs
    genres?: boolean | ShowsCountOutputTypeCountGenresArgs
    comments?: boolean | ShowsCountOutputTypeCountCommentsArgs
    platforms?: boolean | ShowsCountOutputTypeCountPlatformsArgs
  }

  // Custom InputTypes
  /**
   * ShowsCountOutputType without action
   */
  export type ShowsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShowsCountOutputType
     */
    select?: ShowsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ShowsCountOutputType without action
   */
  export type ShowsCountOutputTypeCountSeasonsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SeasonsWhereInput
  }

  /**
   * ShowsCountOutputType without action
   */
  export type ShowsCountOutputTypeCountShow_castArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShowCastWhereInput
  }

  /**
   * ShowsCountOutputType without action
   */
  export type ShowsCountOutputTypeCountUsers_showsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserShowsWhereInput
  }

  /**
   * ShowsCountOutputType without action
   */
  export type ShowsCountOutputTypeCountGenresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SeriesGenresWhereInput
  }

  /**
   * ShowsCountOutputType without action
   */
  export type ShowsCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShowCommentsWhereInput
  }

  /**
   * ShowsCountOutputType without action
   */
  export type ShowsCountOutputTypeCountPlatformsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SeriesPlatformsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: boolean | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: boolean | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    emailVerified: number
    image: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    emailVerified: boolean
    image: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ShowComments?: boolean | User$ShowCommentsArgs<ExtArgs>
    EpisodeComments?: boolean | User$EpisodeCommentsArgs<ExtArgs>
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    users_shows?: boolean | User$users_showsArgs<ExtArgs>
    users_episodes?: boolean | User$users_episodesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "emailVerified" | "image" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ShowComments?: boolean | User$ShowCommentsArgs<ExtArgs>
    EpisodeComments?: boolean | User$EpisodeCommentsArgs<ExtArgs>
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    users_shows?: boolean | User$users_showsArgs<ExtArgs>
    users_episodes?: boolean | User$users_episodesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      ShowComments: Prisma.$ShowCommentsPayload<ExtArgs>[]
      EpisodeComments: Prisma.$EpisodesCommentsPayload<ExtArgs>[]
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      users_shows: Prisma.$UserShowsPayload<ExtArgs>[]
      users_episodes: Prisma.$UserEpisodesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      emailVerified: boolean
      image: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ShowComments<T extends User$ShowCommentsArgs<ExtArgs> = {}>(args?: Subset<T, User$ShowCommentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShowCommentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    EpisodeComments<T extends User$EpisodeCommentsArgs<ExtArgs> = {}>(args?: Subset<T, User$EpisodeCommentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EpisodesCommentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    users_shows<T extends User$users_showsArgs<ExtArgs> = {}>(args?: Subset<T, User$users_showsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserShowsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    users_episodes<T extends User$users_episodesArgs<ExtArgs> = {}>(args?: Subset<T, User$users_episodesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserEpisodesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'Boolean'>
    readonly image: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.ShowComments
   */
  export type User$ShowCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShowComments
     */
    select?: ShowCommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShowComments
     */
    omit?: ShowCommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowCommentsInclude<ExtArgs> | null
    where?: ShowCommentsWhereInput
    orderBy?: ShowCommentsOrderByWithRelationInput | ShowCommentsOrderByWithRelationInput[]
    cursor?: ShowCommentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShowCommentsScalarFieldEnum | ShowCommentsScalarFieldEnum[]
  }

  /**
   * User.EpisodeComments
   */
  export type User$EpisodeCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EpisodesComments
     */
    select?: EpisodesCommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EpisodesComments
     */
    omit?: EpisodesCommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodesCommentsInclude<ExtArgs> | null
    where?: EpisodesCommentsWhereInput
    orderBy?: EpisodesCommentsOrderByWithRelationInput | EpisodesCommentsOrderByWithRelationInput[]
    cursor?: EpisodesCommentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EpisodesCommentsScalarFieldEnum | EpisodesCommentsScalarFieldEnum[]
  }

  /**
   * User.accounts
   */
  export type User$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User.users_shows
   */
  export type User$users_showsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserShows
     */
    select?: UserShowsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserShows
     */
    omit?: UserShowsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserShowsInclude<ExtArgs> | null
    where?: UserShowsWhereInput
    orderBy?: UserShowsOrderByWithRelationInput | UserShowsOrderByWithRelationInput[]
    cursor?: UserShowsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserShowsScalarFieldEnum | UserShowsScalarFieldEnum[]
  }

  /**
   * User.users_episodes
   */
  export type User$users_episodesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserEpisodes
     */
    select?: UserEpisodesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserEpisodes
     */
    omit?: UserEpisodesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserEpisodesInclude<ExtArgs> | null
    where?: UserEpisodesWhereInput
    orderBy?: UserEpisodesOrderByWithRelationInput | UserEpisodesOrderByWithRelationInput[]
    cursor?: UserEpisodesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserEpisodesScalarFieldEnum | UserEpisodesScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    expiresAt: Date | null
    token: string | null
    createdAt: Date | null
    updatedAt: Date | null
    ipAddress: string | null
    userAgent: string | null
    userId: string | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    expiresAt: Date | null
    token: string | null
    createdAt: Date | null
    updatedAt: Date | null
    ipAddress: string | null
    userAgent: string | null
    userId: string | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    expiresAt: number
    token: number
    createdAt: number
    updatedAt: number
    ipAddress: number
    userAgent: number
    userId: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    expiresAt?: true
    token?: true
    createdAt?: true
    updatedAt?: true
    ipAddress?: true
    userAgent?: true
    userId?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    expiresAt?: true
    token?: true
    createdAt?: true
    updatedAt?: true
    ipAddress?: true
    userAgent?: true
    userId?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    expiresAt?: true
    token?: true
    createdAt?: true
    updatedAt?: true
    ipAddress?: true
    userAgent?: true
    userId?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    expiresAt: Date
    token: string
    createdAt: Date
    updatedAt: Date
    ipAddress: string | null
    userAgent: string | null
    userId: string
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expiresAt?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>



  export type SessionSelectScalar = {
    id?: boolean
    expiresAt?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "expiresAt" | "token" | "createdAt" | "updatedAt" | "ipAddress" | "userAgent" | "userId", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      expiresAt: Date
      token: string
      createdAt: Date
      updatedAt: Date
      ipAddress: string | null
      userAgent: string | null
      userId: string
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly expiresAt: FieldRef<"Session", 'DateTime'>
    readonly token: FieldRef<"Session", 'String'>
    readonly createdAt: FieldRef<"Session", 'DateTime'>
    readonly updatedAt: FieldRef<"Session", 'DateTime'>
    readonly ipAddress: FieldRef<"Session", 'String'>
    readonly userAgent: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    accountId: string | null
    providerId: string | null
    userId: string | null
    accessToken: string | null
    refreshToken: string | null
    idToken: string | null
    accessTokenExpiresAt: Date | null
    refreshTokenExpiresAt: Date | null
    scope: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    accountId: string | null
    providerId: string | null
    userId: string | null
    accessToken: string | null
    refreshToken: string | null
    idToken: string | null
    accessTokenExpiresAt: Date | null
    refreshTokenExpiresAt: Date | null
    scope: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    accountId: number
    providerId: number
    userId: number
    accessToken: number
    refreshToken: number
    idToken: number
    accessTokenExpiresAt: number
    refreshTokenExpiresAt: number
    scope: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AccountMinAggregateInputType = {
    id?: true
    accountId?: true
    providerId?: true
    userId?: true
    accessToken?: true
    refreshToken?: true
    idToken?: true
    accessTokenExpiresAt?: true
    refreshTokenExpiresAt?: true
    scope?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    accountId?: true
    providerId?: true
    userId?: true
    accessToken?: true
    refreshToken?: true
    idToken?: true
    accessTokenExpiresAt?: true
    refreshTokenExpiresAt?: true
    scope?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    accountId?: true
    providerId?: true
    userId?: true
    accessToken?: true
    refreshToken?: true
    idToken?: true
    accessTokenExpiresAt?: true
    refreshTokenExpiresAt?: true
    scope?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    accountId: string
    providerId: string
    userId: string
    accessToken: string | null
    refreshToken: string | null
    idToken: string | null
    accessTokenExpiresAt: Date | null
    refreshTokenExpiresAt: Date | null
    scope: string | null
    password: string | null
    createdAt: Date
    updatedAt: Date
    _count: AccountCountAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>



  export type AccountSelectScalar = {
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "accountId" | "providerId" | "userId" | "accessToken" | "refreshToken" | "idToken" | "accessTokenExpiresAt" | "refreshTokenExpiresAt" | "scope" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      accountId: string
      providerId: string
      userId: string
      accessToken: string | null
      refreshToken: string | null
      idToken: string | null
      accessTokenExpiresAt: Date | null
      refreshTokenExpiresAt: Date | null
      scope: string | null
      password: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly accountId: FieldRef<"Account", 'String'>
    readonly providerId: FieldRef<"Account", 'String'>
    readonly userId: FieldRef<"Account", 'String'>
    readonly accessToken: FieldRef<"Account", 'String'>
    readonly refreshToken: FieldRef<"Account", 'String'>
    readonly idToken: FieldRef<"Account", 'String'>
    readonly accessTokenExpiresAt: FieldRef<"Account", 'DateTime'>
    readonly refreshTokenExpiresAt: FieldRef<"Account", 'DateTime'>
    readonly scope: FieldRef<"Account", 'String'>
    readonly password: FieldRef<"Account", 'String'>
    readonly createdAt: FieldRef<"Account", 'DateTime'>
    readonly updatedAt: FieldRef<"Account", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Verification
   */

  export type AggregateVerification = {
    _count: VerificationCountAggregateOutputType | null
    _min: VerificationMinAggregateOutputType | null
    _max: VerificationMaxAggregateOutputType | null
  }

  export type VerificationMinAggregateOutputType = {
    id: string | null
    identifier: string | null
    value: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VerificationMaxAggregateOutputType = {
    id: string | null
    identifier: string | null
    value: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VerificationCountAggregateOutputType = {
    id: number
    identifier: number
    value: number
    expiresAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VerificationMinAggregateInputType = {
    id?: true
    identifier?: true
    value?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VerificationMaxAggregateInputType = {
    id?: true
    identifier?: true
    value?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VerificationCountAggregateInputType = {
    id?: true
    identifier?: true
    value?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VerificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Verification to aggregate.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Verifications
    **/
    _count?: true | VerificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationMaxAggregateInputType
  }

  export type GetVerificationAggregateType<T extends VerificationAggregateArgs> = {
        [P in keyof T & keyof AggregateVerification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerification[P]>
      : GetScalarType<T[P], AggregateVerification[P]>
  }




  export type VerificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationWhereInput
    orderBy?: VerificationOrderByWithAggregationInput | VerificationOrderByWithAggregationInput[]
    by: VerificationScalarFieldEnum[] | VerificationScalarFieldEnum
    having?: VerificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationCountAggregateInputType | true
    _min?: VerificationMinAggregateInputType
    _max?: VerificationMaxAggregateInputType
  }

  export type VerificationGroupByOutputType = {
    id: string
    identifier: string
    value: string
    expiresAt: Date
    createdAt: Date | null
    updatedAt: Date | null
    _count: VerificationCountAggregateOutputType | null
    _min: VerificationMinAggregateOutputType | null
    _max: VerificationMaxAggregateOutputType | null
  }

  type GetVerificationGroupByPayload<T extends VerificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationGroupByOutputType[P]>
        }
      >
    >


  export type VerificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["verification"]>



  export type VerificationSelectScalar = {
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VerificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "identifier" | "value" | "expiresAt" | "createdAt" | "updatedAt", ExtArgs["result"]["verification"]>

  export type $VerificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Verification"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      identifier: string
      value: string
      expiresAt: Date
      createdAt: Date | null
      updatedAt: Date | null
    }, ExtArgs["result"]["verification"]>
    composites: {}
  }

  type VerificationGetPayload<S extends boolean | null | undefined | VerificationDefaultArgs> = $Result.GetResult<Prisma.$VerificationPayload, S>

  type VerificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VerificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VerificationCountAggregateInputType | true
    }

  export interface VerificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Verification'], meta: { name: 'Verification' } }
    /**
     * Find zero or one Verification that matches the filter.
     * @param {VerificationFindUniqueArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationFindUniqueArgs>(args: SelectSubset<T, VerificationFindUniqueArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Verification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VerificationFindUniqueOrThrowArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationFindUniqueOrThrowArgs>(args: SelectSubset<T, VerificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Verification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationFindFirstArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationFindFirstArgs>(args?: SelectSubset<T, VerificationFindFirstArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Verification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationFindFirstOrThrowArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationFindFirstOrThrowArgs>(args?: SelectSubset<T, VerificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Verifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Verifications
     * const verifications = await prisma.verification.findMany()
     * 
     * // Get first 10 Verifications
     * const verifications = await prisma.verification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const verificationWithIdOnly = await prisma.verification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VerificationFindManyArgs>(args?: SelectSubset<T, VerificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Verification.
     * @param {VerificationCreateArgs} args - Arguments to create a Verification.
     * @example
     * // Create one Verification
     * const Verification = await prisma.verification.create({
     *   data: {
     *     // ... data to create a Verification
     *   }
     * })
     * 
     */
    create<T extends VerificationCreateArgs>(args: SelectSubset<T, VerificationCreateArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Verifications.
     * @param {VerificationCreateManyArgs} args - Arguments to create many Verifications.
     * @example
     * // Create many Verifications
     * const verification = await prisma.verification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerificationCreateManyArgs>(args?: SelectSubset<T, VerificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Verification.
     * @param {VerificationDeleteArgs} args - Arguments to delete one Verification.
     * @example
     * // Delete one Verification
     * const Verification = await prisma.verification.delete({
     *   where: {
     *     // ... filter to delete one Verification
     *   }
     * })
     * 
     */
    delete<T extends VerificationDeleteArgs>(args: SelectSubset<T, VerificationDeleteArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Verification.
     * @param {VerificationUpdateArgs} args - Arguments to update one Verification.
     * @example
     * // Update one Verification
     * const verification = await prisma.verification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerificationUpdateArgs>(args: SelectSubset<T, VerificationUpdateArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Verifications.
     * @param {VerificationDeleteManyArgs} args - Arguments to filter Verifications to delete.
     * @example
     * // Delete a few Verifications
     * const { count } = await prisma.verification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerificationDeleteManyArgs>(args?: SelectSubset<T, VerificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Verifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Verifications
     * const verification = await prisma.verification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerificationUpdateManyArgs>(args: SelectSubset<T, VerificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Verification.
     * @param {VerificationUpsertArgs} args - Arguments to update or create a Verification.
     * @example
     * // Update or create a Verification
     * const verification = await prisma.verification.upsert({
     *   create: {
     *     // ... data to create a Verification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Verification we want to update
     *   }
     * })
     */
    upsert<T extends VerificationUpsertArgs>(args: SelectSubset<T, VerificationUpsertArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Verifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationCountArgs} args - Arguments to filter Verifications to count.
     * @example
     * // Count the number of Verifications
     * const count = await prisma.verification.count({
     *   where: {
     *     // ... the filter for the Verifications we want to count
     *   }
     * })
    **/
    count<T extends VerificationCountArgs>(
      args?: Subset<T, VerificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Verification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VerificationAggregateArgs>(args: Subset<T, VerificationAggregateArgs>): Prisma.PrismaPromise<GetVerificationAggregateType<T>>

    /**
     * Group by Verification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VerificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationGroupByArgs['orderBy'] }
        : { orderBy?: VerificationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VerificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Verification model
   */
  readonly fields: VerificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Verification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Verification model
   */
  interface VerificationFieldRefs {
    readonly id: FieldRef<"Verification", 'String'>
    readonly identifier: FieldRef<"Verification", 'String'>
    readonly value: FieldRef<"Verification", 'String'>
    readonly expiresAt: FieldRef<"Verification", 'DateTime'>
    readonly createdAt: FieldRef<"Verification", 'DateTime'>
    readonly updatedAt: FieldRef<"Verification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Verification findUnique
   */
  export type VerificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification findUniqueOrThrow
   */
  export type VerificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification findFirst
   */
  export type VerificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Verifications.
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Verifications.
     */
    distinct?: VerificationScalarFieldEnum | VerificationScalarFieldEnum[]
  }

  /**
   * Verification findFirstOrThrow
   */
  export type VerificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Verifications.
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Verifications.
     */
    distinct?: VerificationScalarFieldEnum | VerificationScalarFieldEnum[]
  }

  /**
   * Verification findMany
   */
  export type VerificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verifications to fetch.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Verifications.
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    distinct?: VerificationScalarFieldEnum | VerificationScalarFieldEnum[]
  }

  /**
   * Verification create
   */
  export type VerificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data needed to create a Verification.
     */
    data: XOR<VerificationCreateInput, VerificationUncheckedCreateInput>
  }

  /**
   * Verification createMany
   */
  export type VerificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Verifications.
     */
    data: VerificationCreateManyInput | VerificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Verification update
   */
  export type VerificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data needed to update a Verification.
     */
    data: XOR<VerificationUpdateInput, VerificationUncheckedUpdateInput>
    /**
     * Choose, which Verification to update.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification updateMany
   */
  export type VerificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Verifications.
     */
    data: XOR<VerificationUpdateManyMutationInput, VerificationUncheckedUpdateManyInput>
    /**
     * Filter which Verifications to update
     */
    where?: VerificationWhereInput
    /**
     * Limit how many Verifications to update.
     */
    limit?: number
  }

  /**
   * Verification upsert
   */
  export type VerificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The filter to search for the Verification to update in case it exists.
     */
    where: VerificationWhereUniqueInput
    /**
     * In case the Verification found by the `where` argument doesn't exist, create a new Verification with this data.
     */
    create: XOR<VerificationCreateInput, VerificationUncheckedCreateInput>
    /**
     * In case the Verification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationUpdateInput, VerificationUncheckedUpdateInput>
  }

  /**
   * Verification delete
   */
  export type VerificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter which Verification to delete.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification deleteMany
   */
  export type VerificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Verifications to delete
     */
    where?: VerificationWhereInput
    /**
     * Limit how many Verifications to delete.
     */
    limit?: number
  }

  /**
   * Verification without action
   */
  export type VerificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
  }


  /**
   * Model Genres
   */

  export type AggregateGenres = {
    _count: GenresCountAggregateOutputType | null
    _avg: GenresAvgAggregateOutputType | null
    _sum: GenresSumAggregateOutputType | null
    _min: GenresMinAggregateOutputType | null
    _max: GenresMaxAggregateOutputType | null
  }

  export type GenresAvgAggregateOutputType = {
    id: number | null
  }

  export type GenresSumAggregateOutputType = {
    id: number | null
  }

  export type GenresMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type GenresMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type GenresCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type GenresAvgAggregateInputType = {
    id?: true
  }

  export type GenresSumAggregateInputType = {
    id?: true
  }

  export type GenresMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type GenresMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type GenresCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type GenresAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Genres to aggregate.
     */
    where?: GenresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genres to fetch.
     */
    orderBy?: GenresOrderByWithRelationInput | GenresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GenresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Genres
    **/
    _count?: true | GenresCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GenresAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GenresSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GenresMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GenresMaxAggregateInputType
  }

  export type GetGenresAggregateType<T extends GenresAggregateArgs> = {
        [P in keyof T & keyof AggregateGenres]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGenres[P]>
      : GetScalarType<T[P], AggregateGenres[P]>
  }




  export type GenresGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GenresWhereInput
    orderBy?: GenresOrderByWithAggregationInput | GenresOrderByWithAggregationInput[]
    by: GenresScalarFieldEnum[] | GenresScalarFieldEnum
    having?: GenresScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GenresCountAggregateInputType | true
    _avg?: GenresAvgAggregateInputType
    _sum?: GenresSumAggregateInputType
    _min?: GenresMinAggregateInputType
    _max?: GenresMaxAggregateInputType
  }

  export type GenresGroupByOutputType = {
    id: number
    name: string
    _count: GenresCountAggregateOutputType | null
    _avg: GenresAvgAggregateOutputType | null
    _sum: GenresSumAggregateOutputType | null
    _min: GenresMinAggregateOutputType | null
    _max: GenresMaxAggregateOutputType | null
  }

  type GetGenresGroupByPayload<T extends GenresGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GenresGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GenresGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GenresGroupByOutputType[P]>
            : GetScalarType<T[P], GenresGroupByOutputType[P]>
        }
      >
    >


  export type GenresSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    seriesGenres?: boolean | Genres$seriesGenresArgs<ExtArgs>
    _count?: boolean | GenresCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["genres"]>



  export type GenresSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type GenresOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["genres"]>
  export type GenresInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    seriesGenres?: boolean | Genres$seriesGenresArgs<ExtArgs>
    _count?: boolean | GenresCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $GenresPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Genres"
    objects: {
      seriesGenres: Prisma.$SeriesGenresPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["genres"]>
    composites: {}
  }

  type GenresGetPayload<S extends boolean | null | undefined | GenresDefaultArgs> = $Result.GetResult<Prisma.$GenresPayload, S>

  type GenresCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GenresFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GenresCountAggregateInputType | true
    }

  export interface GenresDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Genres'], meta: { name: 'Genres' } }
    /**
     * Find zero or one Genres that matches the filter.
     * @param {GenresFindUniqueArgs} args - Arguments to find a Genres
     * @example
     * // Get one Genres
     * const genres = await prisma.genres.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GenresFindUniqueArgs>(args: SelectSubset<T, GenresFindUniqueArgs<ExtArgs>>): Prisma__GenresClient<$Result.GetResult<Prisma.$GenresPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Genres that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GenresFindUniqueOrThrowArgs} args - Arguments to find a Genres
     * @example
     * // Get one Genres
     * const genres = await prisma.genres.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GenresFindUniqueOrThrowArgs>(args: SelectSubset<T, GenresFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GenresClient<$Result.GetResult<Prisma.$GenresPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Genres that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenresFindFirstArgs} args - Arguments to find a Genres
     * @example
     * // Get one Genres
     * const genres = await prisma.genres.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GenresFindFirstArgs>(args?: SelectSubset<T, GenresFindFirstArgs<ExtArgs>>): Prisma__GenresClient<$Result.GetResult<Prisma.$GenresPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Genres that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenresFindFirstOrThrowArgs} args - Arguments to find a Genres
     * @example
     * // Get one Genres
     * const genres = await prisma.genres.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GenresFindFirstOrThrowArgs>(args?: SelectSubset<T, GenresFindFirstOrThrowArgs<ExtArgs>>): Prisma__GenresClient<$Result.GetResult<Prisma.$GenresPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Genres that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenresFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Genres
     * const genres = await prisma.genres.findMany()
     * 
     * // Get first 10 Genres
     * const genres = await prisma.genres.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const genresWithIdOnly = await prisma.genres.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GenresFindManyArgs>(args?: SelectSubset<T, GenresFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GenresPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Genres.
     * @param {GenresCreateArgs} args - Arguments to create a Genres.
     * @example
     * // Create one Genres
     * const Genres = await prisma.genres.create({
     *   data: {
     *     // ... data to create a Genres
     *   }
     * })
     * 
     */
    create<T extends GenresCreateArgs>(args: SelectSubset<T, GenresCreateArgs<ExtArgs>>): Prisma__GenresClient<$Result.GetResult<Prisma.$GenresPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Genres.
     * @param {GenresCreateManyArgs} args - Arguments to create many Genres.
     * @example
     * // Create many Genres
     * const genres = await prisma.genres.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GenresCreateManyArgs>(args?: SelectSubset<T, GenresCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Genres.
     * @param {GenresDeleteArgs} args - Arguments to delete one Genres.
     * @example
     * // Delete one Genres
     * const Genres = await prisma.genres.delete({
     *   where: {
     *     // ... filter to delete one Genres
     *   }
     * })
     * 
     */
    delete<T extends GenresDeleteArgs>(args: SelectSubset<T, GenresDeleteArgs<ExtArgs>>): Prisma__GenresClient<$Result.GetResult<Prisma.$GenresPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Genres.
     * @param {GenresUpdateArgs} args - Arguments to update one Genres.
     * @example
     * // Update one Genres
     * const genres = await prisma.genres.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GenresUpdateArgs>(args: SelectSubset<T, GenresUpdateArgs<ExtArgs>>): Prisma__GenresClient<$Result.GetResult<Prisma.$GenresPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Genres.
     * @param {GenresDeleteManyArgs} args - Arguments to filter Genres to delete.
     * @example
     * // Delete a few Genres
     * const { count } = await prisma.genres.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GenresDeleteManyArgs>(args?: SelectSubset<T, GenresDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Genres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenresUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Genres
     * const genres = await prisma.genres.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GenresUpdateManyArgs>(args: SelectSubset<T, GenresUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Genres.
     * @param {GenresUpsertArgs} args - Arguments to update or create a Genres.
     * @example
     * // Update or create a Genres
     * const genres = await prisma.genres.upsert({
     *   create: {
     *     // ... data to create a Genres
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Genres we want to update
     *   }
     * })
     */
    upsert<T extends GenresUpsertArgs>(args: SelectSubset<T, GenresUpsertArgs<ExtArgs>>): Prisma__GenresClient<$Result.GetResult<Prisma.$GenresPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Genres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenresCountArgs} args - Arguments to filter Genres to count.
     * @example
     * // Count the number of Genres
     * const count = await prisma.genres.count({
     *   where: {
     *     // ... the filter for the Genres we want to count
     *   }
     * })
    **/
    count<T extends GenresCountArgs>(
      args?: Subset<T, GenresCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GenresCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Genres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenresAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GenresAggregateArgs>(args: Subset<T, GenresAggregateArgs>): Prisma.PrismaPromise<GetGenresAggregateType<T>>

    /**
     * Group by Genres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenresGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GenresGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GenresGroupByArgs['orderBy'] }
        : { orderBy?: GenresGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GenresGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGenresGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Genres model
   */
  readonly fields: GenresFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Genres.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GenresClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    seriesGenres<T extends Genres$seriesGenresArgs<ExtArgs> = {}>(args?: Subset<T, Genres$seriesGenresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeriesGenresPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Genres model
   */
  interface GenresFieldRefs {
    readonly id: FieldRef<"Genres", 'Int'>
    readonly name: FieldRef<"Genres", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Genres findUnique
   */
  export type GenresFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genres
     */
    select?: GenresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genres
     */
    omit?: GenresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenresInclude<ExtArgs> | null
    /**
     * Filter, which Genres to fetch.
     */
    where: GenresWhereUniqueInput
  }

  /**
   * Genres findUniqueOrThrow
   */
  export type GenresFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genres
     */
    select?: GenresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genres
     */
    omit?: GenresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenresInclude<ExtArgs> | null
    /**
     * Filter, which Genres to fetch.
     */
    where: GenresWhereUniqueInput
  }

  /**
   * Genres findFirst
   */
  export type GenresFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genres
     */
    select?: GenresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genres
     */
    omit?: GenresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenresInclude<ExtArgs> | null
    /**
     * Filter, which Genres to fetch.
     */
    where?: GenresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genres to fetch.
     */
    orderBy?: GenresOrderByWithRelationInput | GenresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Genres.
     */
    cursor?: GenresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Genres.
     */
    distinct?: GenresScalarFieldEnum | GenresScalarFieldEnum[]
  }

  /**
   * Genres findFirstOrThrow
   */
  export type GenresFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genres
     */
    select?: GenresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genres
     */
    omit?: GenresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenresInclude<ExtArgs> | null
    /**
     * Filter, which Genres to fetch.
     */
    where?: GenresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genres to fetch.
     */
    orderBy?: GenresOrderByWithRelationInput | GenresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Genres.
     */
    cursor?: GenresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Genres.
     */
    distinct?: GenresScalarFieldEnum | GenresScalarFieldEnum[]
  }

  /**
   * Genres findMany
   */
  export type GenresFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genres
     */
    select?: GenresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genres
     */
    omit?: GenresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenresInclude<ExtArgs> | null
    /**
     * Filter, which Genres to fetch.
     */
    where?: GenresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genres to fetch.
     */
    orderBy?: GenresOrderByWithRelationInput | GenresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Genres.
     */
    cursor?: GenresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genres.
     */
    skip?: number
    distinct?: GenresScalarFieldEnum | GenresScalarFieldEnum[]
  }

  /**
   * Genres create
   */
  export type GenresCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genres
     */
    select?: GenresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genres
     */
    omit?: GenresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenresInclude<ExtArgs> | null
    /**
     * The data needed to create a Genres.
     */
    data: XOR<GenresCreateInput, GenresUncheckedCreateInput>
  }

  /**
   * Genres createMany
   */
  export type GenresCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Genres.
     */
    data: GenresCreateManyInput | GenresCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Genres update
   */
  export type GenresUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genres
     */
    select?: GenresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genres
     */
    omit?: GenresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenresInclude<ExtArgs> | null
    /**
     * The data needed to update a Genres.
     */
    data: XOR<GenresUpdateInput, GenresUncheckedUpdateInput>
    /**
     * Choose, which Genres to update.
     */
    where: GenresWhereUniqueInput
  }

  /**
   * Genres updateMany
   */
  export type GenresUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Genres.
     */
    data: XOR<GenresUpdateManyMutationInput, GenresUncheckedUpdateManyInput>
    /**
     * Filter which Genres to update
     */
    where?: GenresWhereInput
    /**
     * Limit how many Genres to update.
     */
    limit?: number
  }

  /**
   * Genres upsert
   */
  export type GenresUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genres
     */
    select?: GenresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genres
     */
    omit?: GenresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenresInclude<ExtArgs> | null
    /**
     * The filter to search for the Genres to update in case it exists.
     */
    where: GenresWhereUniqueInput
    /**
     * In case the Genres found by the `where` argument doesn't exist, create a new Genres with this data.
     */
    create: XOR<GenresCreateInput, GenresUncheckedCreateInput>
    /**
     * In case the Genres was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GenresUpdateInput, GenresUncheckedUpdateInput>
  }

  /**
   * Genres delete
   */
  export type GenresDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genres
     */
    select?: GenresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genres
     */
    omit?: GenresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenresInclude<ExtArgs> | null
    /**
     * Filter which Genres to delete.
     */
    where: GenresWhereUniqueInput
  }

  /**
   * Genres deleteMany
   */
  export type GenresDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Genres to delete
     */
    where?: GenresWhereInput
    /**
     * Limit how many Genres to delete.
     */
    limit?: number
  }

  /**
   * Genres.seriesGenres
   */
  export type Genres$seriesGenresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeriesGenres
     */
    select?: SeriesGenresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeriesGenres
     */
    omit?: SeriesGenresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeriesGenresInclude<ExtArgs> | null
    where?: SeriesGenresWhereInput
    orderBy?: SeriesGenresOrderByWithRelationInput | SeriesGenresOrderByWithRelationInput[]
    cursor?: SeriesGenresWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SeriesGenresScalarFieldEnum | SeriesGenresScalarFieldEnum[]
  }

  /**
   * Genres without action
   */
  export type GenresDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genres
     */
    select?: GenresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genres
     */
    omit?: GenresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenresInclude<ExtArgs> | null
  }


  /**
   * Model SeriesGenres
   */

  export type AggregateSeriesGenres = {
    _count: SeriesGenresCountAggregateOutputType | null
    _avg: SeriesGenresAvgAggregateOutputType | null
    _sum: SeriesGenresSumAggregateOutputType | null
    _min: SeriesGenresMinAggregateOutputType | null
    _max: SeriesGenresMaxAggregateOutputType | null
  }

  export type SeriesGenresAvgAggregateOutputType = {
    id_show: number | null
    id_genre: number | null
  }

  export type SeriesGenresSumAggregateOutputType = {
    id_show: number | null
    id_genre: number | null
  }

  export type SeriesGenresMinAggregateOutputType = {
    id_show: number | null
    id_genre: number | null
  }

  export type SeriesGenresMaxAggregateOutputType = {
    id_show: number | null
    id_genre: number | null
  }

  export type SeriesGenresCountAggregateOutputType = {
    id_show: number
    id_genre: number
    _all: number
  }


  export type SeriesGenresAvgAggregateInputType = {
    id_show?: true
    id_genre?: true
  }

  export type SeriesGenresSumAggregateInputType = {
    id_show?: true
    id_genre?: true
  }

  export type SeriesGenresMinAggregateInputType = {
    id_show?: true
    id_genre?: true
  }

  export type SeriesGenresMaxAggregateInputType = {
    id_show?: true
    id_genre?: true
  }

  export type SeriesGenresCountAggregateInputType = {
    id_show?: true
    id_genre?: true
    _all?: true
  }

  export type SeriesGenresAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SeriesGenres to aggregate.
     */
    where?: SeriesGenresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SeriesGenres to fetch.
     */
    orderBy?: SeriesGenresOrderByWithRelationInput | SeriesGenresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SeriesGenresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SeriesGenres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SeriesGenres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SeriesGenres
    **/
    _count?: true | SeriesGenresCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SeriesGenresAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SeriesGenresSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SeriesGenresMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SeriesGenresMaxAggregateInputType
  }

  export type GetSeriesGenresAggregateType<T extends SeriesGenresAggregateArgs> = {
        [P in keyof T & keyof AggregateSeriesGenres]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSeriesGenres[P]>
      : GetScalarType<T[P], AggregateSeriesGenres[P]>
  }




  export type SeriesGenresGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SeriesGenresWhereInput
    orderBy?: SeriesGenresOrderByWithAggregationInput | SeriesGenresOrderByWithAggregationInput[]
    by: SeriesGenresScalarFieldEnum[] | SeriesGenresScalarFieldEnum
    having?: SeriesGenresScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SeriesGenresCountAggregateInputType | true
    _avg?: SeriesGenresAvgAggregateInputType
    _sum?: SeriesGenresSumAggregateInputType
    _min?: SeriesGenresMinAggregateInputType
    _max?: SeriesGenresMaxAggregateInputType
  }

  export type SeriesGenresGroupByOutputType = {
    id_show: number
    id_genre: number
    _count: SeriesGenresCountAggregateOutputType | null
    _avg: SeriesGenresAvgAggregateOutputType | null
    _sum: SeriesGenresSumAggregateOutputType | null
    _min: SeriesGenresMinAggregateOutputType | null
    _max: SeriesGenresMaxAggregateOutputType | null
  }

  type GetSeriesGenresGroupByPayload<T extends SeriesGenresGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SeriesGenresGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SeriesGenresGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SeriesGenresGroupByOutputType[P]>
            : GetScalarType<T[P], SeriesGenresGroupByOutputType[P]>
        }
      >
    >


  export type SeriesGenresSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_show?: boolean
    id_genre?: boolean
    genres?: boolean | GenresDefaultArgs<ExtArgs>
    shows?: boolean | ShowsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["seriesGenres"]>



  export type SeriesGenresSelectScalar = {
    id_show?: boolean
    id_genre?: boolean
  }

  export type SeriesGenresOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_show" | "id_genre", ExtArgs["result"]["seriesGenres"]>
  export type SeriesGenresInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    genres?: boolean | GenresDefaultArgs<ExtArgs>
    shows?: boolean | ShowsDefaultArgs<ExtArgs>
  }

  export type $SeriesGenresPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SeriesGenres"
    objects: {
      genres: Prisma.$GenresPayload<ExtArgs>
      shows: Prisma.$ShowsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_show: number
      id_genre: number
    }, ExtArgs["result"]["seriesGenres"]>
    composites: {}
  }

  type SeriesGenresGetPayload<S extends boolean | null | undefined | SeriesGenresDefaultArgs> = $Result.GetResult<Prisma.$SeriesGenresPayload, S>

  type SeriesGenresCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SeriesGenresFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SeriesGenresCountAggregateInputType | true
    }

  export interface SeriesGenresDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SeriesGenres'], meta: { name: 'SeriesGenres' } }
    /**
     * Find zero or one SeriesGenres that matches the filter.
     * @param {SeriesGenresFindUniqueArgs} args - Arguments to find a SeriesGenres
     * @example
     * // Get one SeriesGenres
     * const seriesGenres = await prisma.seriesGenres.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SeriesGenresFindUniqueArgs>(args: SelectSubset<T, SeriesGenresFindUniqueArgs<ExtArgs>>): Prisma__SeriesGenresClient<$Result.GetResult<Prisma.$SeriesGenresPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SeriesGenres that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SeriesGenresFindUniqueOrThrowArgs} args - Arguments to find a SeriesGenres
     * @example
     * // Get one SeriesGenres
     * const seriesGenres = await prisma.seriesGenres.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SeriesGenresFindUniqueOrThrowArgs>(args: SelectSubset<T, SeriesGenresFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SeriesGenresClient<$Result.GetResult<Prisma.$SeriesGenresPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SeriesGenres that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeriesGenresFindFirstArgs} args - Arguments to find a SeriesGenres
     * @example
     * // Get one SeriesGenres
     * const seriesGenres = await prisma.seriesGenres.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SeriesGenresFindFirstArgs>(args?: SelectSubset<T, SeriesGenresFindFirstArgs<ExtArgs>>): Prisma__SeriesGenresClient<$Result.GetResult<Prisma.$SeriesGenresPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SeriesGenres that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeriesGenresFindFirstOrThrowArgs} args - Arguments to find a SeriesGenres
     * @example
     * // Get one SeriesGenres
     * const seriesGenres = await prisma.seriesGenres.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SeriesGenresFindFirstOrThrowArgs>(args?: SelectSubset<T, SeriesGenresFindFirstOrThrowArgs<ExtArgs>>): Prisma__SeriesGenresClient<$Result.GetResult<Prisma.$SeriesGenresPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SeriesGenres that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeriesGenresFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SeriesGenres
     * const seriesGenres = await prisma.seriesGenres.findMany()
     * 
     * // Get first 10 SeriesGenres
     * const seriesGenres = await prisma.seriesGenres.findMany({ take: 10 })
     * 
     * // Only select the `id_show`
     * const seriesGenresWithId_showOnly = await prisma.seriesGenres.findMany({ select: { id_show: true } })
     * 
     */
    findMany<T extends SeriesGenresFindManyArgs>(args?: SelectSubset<T, SeriesGenresFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeriesGenresPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SeriesGenres.
     * @param {SeriesGenresCreateArgs} args - Arguments to create a SeriesGenres.
     * @example
     * // Create one SeriesGenres
     * const SeriesGenres = await prisma.seriesGenres.create({
     *   data: {
     *     // ... data to create a SeriesGenres
     *   }
     * })
     * 
     */
    create<T extends SeriesGenresCreateArgs>(args: SelectSubset<T, SeriesGenresCreateArgs<ExtArgs>>): Prisma__SeriesGenresClient<$Result.GetResult<Prisma.$SeriesGenresPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SeriesGenres.
     * @param {SeriesGenresCreateManyArgs} args - Arguments to create many SeriesGenres.
     * @example
     * // Create many SeriesGenres
     * const seriesGenres = await prisma.seriesGenres.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SeriesGenresCreateManyArgs>(args?: SelectSubset<T, SeriesGenresCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SeriesGenres.
     * @param {SeriesGenresDeleteArgs} args - Arguments to delete one SeriesGenres.
     * @example
     * // Delete one SeriesGenres
     * const SeriesGenres = await prisma.seriesGenres.delete({
     *   where: {
     *     // ... filter to delete one SeriesGenres
     *   }
     * })
     * 
     */
    delete<T extends SeriesGenresDeleteArgs>(args: SelectSubset<T, SeriesGenresDeleteArgs<ExtArgs>>): Prisma__SeriesGenresClient<$Result.GetResult<Prisma.$SeriesGenresPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SeriesGenres.
     * @param {SeriesGenresUpdateArgs} args - Arguments to update one SeriesGenres.
     * @example
     * // Update one SeriesGenres
     * const seriesGenres = await prisma.seriesGenres.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SeriesGenresUpdateArgs>(args: SelectSubset<T, SeriesGenresUpdateArgs<ExtArgs>>): Prisma__SeriesGenresClient<$Result.GetResult<Prisma.$SeriesGenresPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SeriesGenres.
     * @param {SeriesGenresDeleteManyArgs} args - Arguments to filter SeriesGenres to delete.
     * @example
     * // Delete a few SeriesGenres
     * const { count } = await prisma.seriesGenres.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SeriesGenresDeleteManyArgs>(args?: SelectSubset<T, SeriesGenresDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SeriesGenres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeriesGenresUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SeriesGenres
     * const seriesGenres = await prisma.seriesGenres.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SeriesGenresUpdateManyArgs>(args: SelectSubset<T, SeriesGenresUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SeriesGenres.
     * @param {SeriesGenresUpsertArgs} args - Arguments to update or create a SeriesGenres.
     * @example
     * // Update or create a SeriesGenres
     * const seriesGenres = await prisma.seriesGenres.upsert({
     *   create: {
     *     // ... data to create a SeriesGenres
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SeriesGenres we want to update
     *   }
     * })
     */
    upsert<T extends SeriesGenresUpsertArgs>(args: SelectSubset<T, SeriesGenresUpsertArgs<ExtArgs>>): Prisma__SeriesGenresClient<$Result.GetResult<Prisma.$SeriesGenresPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SeriesGenres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeriesGenresCountArgs} args - Arguments to filter SeriesGenres to count.
     * @example
     * // Count the number of SeriesGenres
     * const count = await prisma.seriesGenres.count({
     *   where: {
     *     // ... the filter for the SeriesGenres we want to count
     *   }
     * })
    **/
    count<T extends SeriesGenresCountArgs>(
      args?: Subset<T, SeriesGenresCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SeriesGenresCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SeriesGenres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeriesGenresAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SeriesGenresAggregateArgs>(args: Subset<T, SeriesGenresAggregateArgs>): Prisma.PrismaPromise<GetSeriesGenresAggregateType<T>>

    /**
     * Group by SeriesGenres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeriesGenresGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SeriesGenresGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SeriesGenresGroupByArgs['orderBy'] }
        : { orderBy?: SeriesGenresGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SeriesGenresGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSeriesGenresGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SeriesGenres model
   */
  readonly fields: SeriesGenresFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SeriesGenres.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SeriesGenresClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    genres<T extends GenresDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GenresDefaultArgs<ExtArgs>>): Prisma__GenresClient<$Result.GetResult<Prisma.$GenresPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    shows<T extends ShowsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShowsDefaultArgs<ExtArgs>>): Prisma__ShowsClient<$Result.GetResult<Prisma.$ShowsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SeriesGenres model
   */
  interface SeriesGenresFieldRefs {
    readonly id_show: FieldRef<"SeriesGenres", 'Int'>
    readonly id_genre: FieldRef<"SeriesGenres", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * SeriesGenres findUnique
   */
  export type SeriesGenresFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeriesGenres
     */
    select?: SeriesGenresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeriesGenres
     */
    omit?: SeriesGenresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeriesGenresInclude<ExtArgs> | null
    /**
     * Filter, which SeriesGenres to fetch.
     */
    where: SeriesGenresWhereUniqueInput
  }

  /**
   * SeriesGenres findUniqueOrThrow
   */
  export type SeriesGenresFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeriesGenres
     */
    select?: SeriesGenresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeriesGenres
     */
    omit?: SeriesGenresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeriesGenresInclude<ExtArgs> | null
    /**
     * Filter, which SeriesGenres to fetch.
     */
    where: SeriesGenresWhereUniqueInput
  }

  /**
   * SeriesGenres findFirst
   */
  export type SeriesGenresFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeriesGenres
     */
    select?: SeriesGenresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeriesGenres
     */
    omit?: SeriesGenresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeriesGenresInclude<ExtArgs> | null
    /**
     * Filter, which SeriesGenres to fetch.
     */
    where?: SeriesGenresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SeriesGenres to fetch.
     */
    orderBy?: SeriesGenresOrderByWithRelationInput | SeriesGenresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SeriesGenres.
     */
    cursor?: SeriesGenresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SeriesGenres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SeriesGenres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SeriesGenres.
     */
    distinct?: SeriesGenresScalarFieldEnum | SeriesGenresScalarFieldEnum[]
  }

  /**
   * SeriesGenres findFirstOrThrow
   */
  export type SeriesGenresFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeriesGenres
     */
    select?: SeriesGenresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeriesGenres
     */
    omit?: SeriesGenresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeriesGenresInclude<ExtArgs> | null
    /**
     * Filter, which SeriesGenres to fetch.
     */
    where?: SeriesGenresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SeriesGenres to fetch.
     */
    orderBy?: SeriesGenresOrderByWithRelationInput | SeriesGenresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SeriesGenres.
     */
    cursor?: SeriesGenresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SeriesGenres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SeriesGenres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SeriesGenres.
     */
    distinct?: SeriesGenresScalarFieldEnum | SeriesGenresScalarFieldEnum[]
  }

  /**
   * SeriesGenres findMany
   */
  export type SeriesGenresFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeriesGenres
     */
    select?: SeriesGenresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeriesGenres
     */
    omit?: SeriesGenresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeriesGenresInclude<ExtArgs> | null
    /**
     * Filter, which SeriesGenres to fetch.
     */
    where?: SeriesGenresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SeriesGenres to fetch.
     */
    orderBy?: SeriesGenresOrderByWithRelationInput | SeriesGenresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SeriesGenres.
     */
    cursor?: SeriesGenresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SeriesGenres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SeriesGenres.
     */
    skip?: number
    distinct?: SeriesGenresScalarFieldEnum | SeriesGenresScalarFieldEnum[]
  }

  /**
   * SeriesGenres create
   */
  export type SeriesGenresCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeriesGenres
     */
    select?: SeriesGenresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeriesGenres
     */
    omit?: SeriesGenresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeriesGenresInclude<ExtArgs> | null
    /**
     * The data needed to create a SeriesGenres.
     */
    data: XOR<SeriesGenresCreateInput, SeriesGenresUncheckedCreateInput>
  }

  /**
   * SeriesGenres createMany
   */
  export type SeriesGenresCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SeriesGenres.
     */
    data: SeriesGenresCreateManyInput | SeriesGenresCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SeriesGenres update
   */
  export type SeriesGenresUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeriesGenres
     */
    select?: SeriesGenresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeriesGenres
     */
    omit?: SeriesGenresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeriesGenresInclude<ExtArgs> | null
    /**
     * The data needed to update a SeriesGenres.
     */
    data: XOR<SeriesGenresUpdateInput, SeriesGenresUncheckedUpdateInput>
    /**
     * Choose, which SeriesGenres to update.
     */
    where: SeriesGenresWhereUniqueInput
  }

  /**
   * SeriesGenres updateMany
   */
  export type SeriesGenresUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SeriesGenres.
     */
    data: XOR<SeriesGenresUpdateManyMutationInput, SeriesGenresUncheckedUpdateManyInput>
    /**
     * Filter which SeriesGenres to update
     */
    where?: SeriesGenresWhereInput
    /**
     * Limit how many SeriesGenres to update.
     */
    limit?: number
  }

  /**
   * SeriesGenres upsert
   */
  export type SeriesGenresUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeriesGenres
     */
    select?: SeriesGenresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeriesGenres
     */
    omit?: SeriesGenresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeriesGenresInclude<ExtArgs> | null
    /**
     * The filter to search for the SeriesGenres to update in case it exists.
     */
    where: SeriesGenresWhereUniqueInput
    /**
     * In case the SeriesGenres found by the `where` argument doesn't exist, create a new SeriesGenres with this data.
     */
    create: XOR<SeriesGenresCreateInput, SeriesGenresUncheckedCreateInput>
    /**
     * In case the SeriesGenres was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SeriesGenresUpdateInput, SeriesGenresUncheckedUpdateInput>
  }

  /**
   * SeriesGenres delete
   */
  export type SeriesGenresDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeriesGenres
     */
    select?: SeriesGenresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeriesGenres
     */
    omit?: SeriesGenresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeriesGenresInclude<ExtArgs> | null
    /**
     * Filter which SeriesGenres to delete.
     */
    where: SeriesGenresWhereUniqueInput
  }

  /**
   * SeriesGenres deleteMany
   */
  export type SeriesGenresDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SeriesGenres to delete
     */
    where?: SeriesGenresWhereInput
    /**
     * Limit how many SeriesGenres to delete.
     */
    limit?: number
  }

  /**
   * SeriesGenres without action
   */
  export type SeriesGenresDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeriesGenres
     */
    select?: SeriesGenresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeriesGenres
     */
    omit?: SeriesGenresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeriesGenresInclude<ExtArgs> | null
  }


  /**
   * Model ShowComments
   */

  export type AggregateShowComments = {
    _count: ShowCommentsCountAggregateOutputType | null
    _avg: ShowCommentsAvgAggregateOutputType | null
    _sum: ShowCommentsSumAggregateOutputType | null
    _min: ShowCommentsMinAggregateOutputType | null
    _max: ShowCommentsMaxAggregateOutputType | null
  }

  export type ShowCommentsAvgAggregateOutputType = {
    id: number | null
    id_show: number | null
  }

  export type ShowCommentsSumAggregateOutputType = {
    id: number | null
    id_show: number | null
  }

  export type ShowCommentsMinAggregateOutputType = {
    id: number | null
    content: string | null
    postedAt: Date | null
    id_user: string | null
    id_show: number | null
  }

  export type ShowCommentsMaxAggregateOutputType = {
    id: number | null
    content: string | null
    postedAt: Date | null
    id_user: string | null
    id_show: number | null
  }

  export type ShowCommentsCountAggregateOutputType = {
    id: number
    content: number
    postedAt: number
    id_user: number
    id_show: number
    _all: number
  }


  export type ShowCommentsAvgAggregateInputType = {
    id?: true
    id_show?: true
  }

  export type ShowCommentsSumAggregateInputType = {
    id?: true
    id_show?: true
  }

  export type ShowCommentsMinAggregateInputType = {
    id?: true
    content?: true
    postedAt?: true
    id_user?: true
    id_show?: true
  }

  export type ShowCommentsMaxAggregateInputType = {
    id?: true
    content?: true
    postedAt?: true
    id_user?: true
    id_show?: true
  }

  export type ShowCommentsCountAggregateInputType = {
    id?: true
    content?: true
    postedAt?: true
    id_user?: true
    id_show?: true
    _all?: true
  }

  export type ShowCommentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShowComments to aggregate.
     */
    where?: ShowCommentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShowComments to fetch.
     */
    orderBy?: ShowCommentsOrderByWithRelationInput | ShowCommentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShowCommentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShowComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShowComments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ShowComments
    **/
    _count?: true | ShowCommentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ShowCommentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ShowCommentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShowCommentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShowCommentsMaxAggregateInputType
  }

  export type GetShowCommentsAggregateType<T extends ShowCommentsAggregateArgs> = {
        [P in keyof T & keyof AggregateShowComments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShowComments[P]>
      : GetScalarType<T[P], AggregateShowComments[P]>
  }




  export type ShowCommentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShowCommentsWhereInput
    orderBy?: ShowCommentsOrderByWithAggregationInput | ShowCommentsOrderByWithAggregationInput[]
    by: ShowCommentsScalarFieldEnum[] | ShowCommentsScalarFieldEnum
    having?: ShowCommentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShowCommentsCountAggregateInputType | true
    _avg?: ShowCommentsAvgAggregateInputType
    _sum?: ShowCommentsSumAggregateInputType
    _min?: ShowCommentsMinAggregateInputType
    _max?: ShowCommentsMaxAggregateInputType
  }

  export type ShowCommentsGroupByOutputType = {
    id: number
    content: string
    postedAt: Date
    id_user: string
    id_show: number
    _count: ShowCommentsCountAggregateOutputType | null
    _avg: ShowCommentsAvgAggregateOutputType | null
    _sum: ShowCommentsSumAggregateOutputType | null
    _min: ShowCommentsMinAggregateOutputType | null
    _max: ShowCommentsMaxAggregateOutputType | null
  }

  type GetShowCommentsGroupByPayload<T extends ShowCommentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShowCommentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShowCommentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShowCommentsGroupByOutputType[P]>
            : GetScalarType<T[P], ShowCommentsGroupByOutputType[P]>
        }
      >
    >


  export type ShowCommentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    postedAt?: boolean
    id_user?: boolean
    id_show?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    show?: boolean | ShowsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["showComments"]>



  export type ShowCommentsSelectScalar = {
    id?: boolean
    content?: boolean
    postedAt?: boolean
    id_user?: boolean
    id_show?: boolean
  }

  export type ShowCommentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content" | "postedAt" | "id_user" | "id_show", ExtArgs["result"]["showComments"]>
  export type ShowCommentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    show?: boolean | ShowsDefaultArgs<ExtArgs>
  }

  export type $ShowCommentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ShowComments"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      show: Prisma.$ShowsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      content: string
      postedAt: Date
      id_user: string
      id_show: number
    }, ExtArgs["result"]["showComments"]>
    composites: {}
  }

  type ShowCommentsGetPayload<S extends boolean | null | undefined | ShowCommentsDefaultArgs> = $Result.GetResult<Prisma.$ShowCommentsPayload, S>

  type ShowCommentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ShowCommentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ShowCommentsCountAggregateInputType | true
    }

  export interface ShowCommentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ShowComments'], meta: { name: 'ShowComments' } }
    /**
     * Find zero or one ShowComments that matches the filter.
     * @param {ShowCommentsFindUniqueArgs} args - Arguments to find a ShowComments
     * @example
     * // Get one ShowComments
     * const showComments = await prisma.showComments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShowCommentsFindUniqueArgs>(args: SelectSubset<T, ShowCommentsFindUniqueArgs<ExtArgs>>): Prisma__ShowCommentsClient<$Result.GetResult<Prisma.$ShowCommentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ShowComments that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ShowCommentsFindUniqueOrThrowArgs} args - Arguments to find a ShowComments
     * @example
     * // Get one ShowComments
     * const showComments = await prisma.showComments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShowCommentsFindUniqueOrThrowArgs>(args: SelectSubset<T, ShowCommentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ShowCommentsClient<$Result.GetResult<Prisma.$ShowCommentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShowComments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowCommentsFindFirstArgs} args - Arguments to find a ShowComments
     * @example
     * // Get one ShowComments
     * const showComments = await prisma.showComments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShowCommentsFindFirstArgs>(args?: SelectSubset<T, ShowCommentsFindFirstArgs<ExtArgs>>): Prisma__ShowCommentsClient<$Result.GetResult<Prisma.$ShowCommentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShowComments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowCommentsFindFirstOrThrowArgs} args - Arguments to find a ShowComments
     * @example
     * // Get one ShowComments
     * const showComments = await prisma.showComments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShowCommentsFindFirstOrThrowArgs>(args?: SelectSubset<T, ShowCommentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ShowCommentsClient<$Result.GetResult<Prisma.$ShowCommentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ShowComments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowCommentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ShowComments
     * const showComments = await prisma.showComments.findMany()
     * 
     * // Get first 10 ShowComments
     * const showComments = await prisma.showComments.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const showCommentsWithIdOnly = await prisma.showComments.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ShowCommentsFindManyArgs>(args?: SelectSubset<T, ShowCommentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShowCommentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ShowComments.
     * @param {ShowCommentsCreateArgs} args - Arguments to create a ShowComments.
     * @example
     * // Create one ShowComments
     * const ShowComments = await prisma.showComments.create({
     *   data: {
     *     // ... data to create a ShowComments
     *   }
     * })
     * 
     */
    create<T extends ShowCommentsCreateArgs>(args: SelectSubset<T, ShowCommentsCreateArgs<ExtArgs>>): Prisma__ShowCommentsClient<$Result.GetResult<Prisma.$ShowCommentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ShowComments.
     * @param {ShowCommentsCreateManyArgs} args - Arguments to create many ShowComments.
     * @example
     * // Create many ShowComments
     * const showComments = await prisma.showComments.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ShowCommentsCreateManyArgs>(args?: SelectSubset<T, ShowCommentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ShowComments.
     * @param {ShowCommentsDeleteArgs} args - Arguments to delete one ShowComments.
     * @example
     * // Delete one ShowComments
     * const ShowComments = await prisma.showComments.delete({
     *   where: {
     *     // ... filter to delete one ShowComments
     *   }
     * })
     * 
     */
    delete<T extends ShowCommentsDeleteArgs>(args: SelectSubset<T, ShowCommentsDeleteArgs<ExtArgs>>): Prisma__ShowCommentsClient<$Result.GetResult<Prisma.$ShowCommentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ShowComments.
     * @param {ShowCommentsUpdateArgs} args - Arguments to update one ShowComments.
     * @example
     * // Update one ShowComments
     * const showComments = await prisma.showComments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ShowCommentsUpdateArgs>(args: SelectSubset<T, ShowCommentsUpdateArgs<ExtArgs>>): Prisma__ShowCommentsClient<$Result.GetResult<Prisma.$ShowCommentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ShowComments.
     * @param {ShowCommentsDeleteManyArgs} args - Arguments to filter ShowComments to delete.
     * @example
     * // Delete a few ShowComments
     * const { count } = await prisma.showComments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ShowCommentsDeleteManyArgs>(args?: SelectSubset<T, ShowCommentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShowComments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowCommentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ShowComments
     * const showComments = await prisma.showComments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ShowCommentsUpdateManyArgs>(args: SelectSubset<T, ShowCommentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ShowComments.
     * @param {ShowCommentsUpsertArgs} args - Arguments to update or create a ShowComments.
     * @example
     * // Update or create a ShowComments
     * const showComments = await prisma.showComments.upsert({
     *   create: {
     *     // ... data to create a ShowComments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ShowComments we want to update
     *   }
     * })
     */
    upsert<T extends ShowCommentsUpsertArgs>(args: SelectSubset<T, ShowCommentsUpsertArgs<ExtArgs>>): Prisma__ShowCommentsClient<$Result.GetResult<Prisma.$ShowCommentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ShowComments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowCommentsCountArgs} args - Arguments to filter ShowComments to count.
     * @example
     * // Count the number of ShowComments
     * const count = await prisma.showComments.count({
     *   where: {
     *     // ... the filter for the ShowComments we want to count
     *   }
     * })
    **/
    count<T extends ShowCommentsCountArgs>(
      args?: Subset<T, ShowCommentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShowCommentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ShowComments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowCommentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ShowCommentsAggregateArgs>(args: Subset<T, ShowCommentsAggregateArgs>): Prisma.PrismaPromise<GetShowCommentsAggregateType<T>>

    /**
     * Group by ShowComments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowCommentsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ShowCommentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShowCommentsGroupByArgs['orderBy'] }
        : { orderBy?: ShowCommentsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ShowCommentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShowCommentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ShowComments model
   */
  readonly fields: ShowCommentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ShowComments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShowCommentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    show<T extends ShowsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShowsDefaultArgs<ExtArgs>>): Prisma__ShowsClient<$Result.GetResult<Prisma.$ShowsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ShowComments model
   */
  interface ShowCommentsFieldRefs {
    readonly id: FieldRef<"ShowComments", 'Int'>
    readonly content: FieldRef<"ShowComments", 'String'>
    readonly postedAt: FieldRef<"ShowComments", 'DateTime'>
    readonly id_user: FieldRef<"ShowComments", 'String'>
    readonly id_show: FieldRef<"ShowComments", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ShowComments findUnique
   */
  export type ShowCommentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShowComments
     */
    select?: ShowCommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShowComments
     */
    omit?: ShowCommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowCommentsInclude<ExtArgs> | null
    /**
     * Filter, which ShowComments to fetch.
     */
    where: ShowCommentsWhereUniqueInput
  }

  /**
   * ShowComments findUniqueOrThrow
   */
  export type ShowCommentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShowComments
     */
    select?: ShowCommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShowComments
     */
    omit?: ShowCommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowCommentsInclude<ExtArgs> | null
    /**
     * Filter, which ShowComments to fetch.
     */
    where: ShowCommentsWhereUniqueInput
  }

  /**
   * ShowComments findFirst
   */
  export type ShowCommentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShowComments
     */
    select?: ShowCommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShowComments
     */
    omit?: ShowCommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowCommentsInclude<ExtArgs> | null
    /**
     * Filter, which ShowComments to fetch.
     */
    where?: ShowCommentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShowComments to fetch.
     */
    orderBy?: ShowCommentsOrderByWithRelationInput | ShowCommentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShowComments.
     */
    cursor?: ShowCommentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShowComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShowComments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShowComments.
     */
    distinct?: ShowCommentsScalarFieldEnum | ShowCommentsScalarFieldEnum[]
  }

  /**
   * ShowComments findFirstOrThrow
   */
  export type ShowCommentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShowComments
     */
    select?: ShowCommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShowComments
     */
    omit?: ShowCommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowCommentsInclude<ExtArgs> | null
    /**
     * Filter, which ShowComments to fetch.
     */
    where?: ShowCommentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShowComments to fetch.
     */
    orderBy?: ShowCommentsOrderByWithRelationInput | ShowCommentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShowComments.
     */
    cursor?: ShowCommentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShowComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShowComments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShowComments.
     */
    distinct?: ShowCommentsScalarFieldEnum | ShowCommentsScalarFieldEnum[]
  }

  /**
   * ShowComments findMany
   */
  export type ShowCommentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShowComments
     */
    select?: ShowCommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShowComments
     */
    omit?: ShowCommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowCommentsInclude<ExtArgs> | null
    /**
     * Filter, which ShowComments to fetch.
     */
    where?: ShowCommentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShowComments to fetch.
     */
    orderBy?: ShowCommentsOrderByWithRelationInput | ShowCommentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ShowComments.
     */
    cursor?: ShowCommentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShowComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShowComments.
     */
    skip?: number
    distinct?: ShowCommentsScalarFieldEnum | ShowCommentsScalarFieldEnum[]
  }

  /**
   * ShowComments create
   */
  export type ShowCommentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShowComments
     */
    select?: ShowCommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShowComments
     */
    omit?: ShowCommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowCommentsInclude<ExtArgs> | null
    /**
     * The data needed to create a ShowComments.
     */
    data: XOR<ShowCommentsCreateInput, ShowCommentsUncheckedCreateInput>
  }

  /**
   * ShowComments createMany
   */
  export type ShowCommentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ShowComments.
     */
    data: ShowCommentsCreateManyInput | ShowCommentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ShowComments update
   */
  export type ShowCommentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShowComments
     */
    select?: ShowCommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShowComments
     */
    omit?: ShowCommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowCommentsInclude<ExtArgs> | null
    /**
     * The data needed to update a ShowComments.
     */
    data: XOR<ShowCommentsUpdateInput, ShowCommentsUncheckedUpdateInput>
    /**
     * Choose, which ShowComments to update.
     */
    where: ShowCommentsWhereUniqueInput
  }

  /**
   * ShowComments updateMany
   */
  export type ShowCommentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ShowComments.
     */
    data: XOR<ShowCommentsUpdateManyMutationInput, ShowCommentsUncheckedUpdateManyInput>
    /**
     * Filter which ShowComments to update
     */
    where?: ShowCommentsWhereInput
    /**
     * Limit how many ShowComments to update.
     */
    limit?: number
  }

  /**
   * ShowComments upsert
   */
  export type ShowCommentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShowComments
     */
    select?: ShowCommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShowComments
     */
    omit?: ShowCommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowCommentsInclude<ExtArgs> | null
    /**
     * The filter to search for the ShowComments to update in case it exists.
     */
    where: ShowCommentsWhereUniqueInput
    /**
     * In case the ShowComments found by the `where` argument doesn't exist, create a new ShowComments with this data.
     */
    create: XOR<ShowCommentsCreateInput, ShowCommentsUncheckedCreateInput>
    /**
     * In case the ShowComments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShowCommentsUpdateInput, ShowCommentsUncheckedUpdateInput>
  }

  /**
   * ShowComments delete
   */
  export type ShowCommentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShowComments
     */
    select?: ShowCommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShowComments
     */
    omit?: ShowCommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowCommentsInclude<ExtArgs> | null
    /**
     * Filter which ShowComments to delete.
     */
    where: ShowCommentsWhereUniqueInput
  }

  /**
   * ShowComments deleteMany
   */
  export type ShowCommentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShowComments to delete
     */
    where?: ShowCommentsWhereInput
    /**
     * Limit how many ShowComments to delete.
     */
    limit?: number
  }

  /**
   * ShowComments without action
   */
  export type ShowCommentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShowComments
     */
    select?: ShowCommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShowComments
     */
    omit?: ShowCommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowCommentsInclude<ExtArgs> | null
  }


  /**
   * Model EpisodesComments
   */

  export type AggregateEpisodesComments = {
    _count: EpisodesCommentsCountAggregateOutputType | null
    _avg: EpisodesCommentsAvgAggregateOutputType | null
    _sum: EpisodesCommentsSumAggregateOutputType | null
    _min: EpisodesCommentsMinAggregateOutputType | null
    _max: EpisodesCommentsMaxAggregateOutputType | null
  }

  export type EpisodesCommentsAvgAggregateOutputType = {
    id: number | null
    id_episode: number | null
  }

  export type EpisodesCommentsSumAggregateOutputType = {
    id: number | null
    id_episode: number | null
  }

  export type EpisodesCommentsMinAggregateOutputType = {
    id: number | null
    content: string | null
    postedAt: Date | null
    id_user: string | null
    id_episode: number | null
  }

  export type EpisodesCommentsMaxAggregateOutputType = {
    id: number | null
    content: string | null
    postedAt: Date | null
    id_user: string | null
    id_episode: number | null
  }

  export type EpisodesCommentsCountAggregateOutputType = {
    id: number
    content: number
    postedAt: number
    id_user: number
    id_episode: number
    _all: number
  }


  export type EpisodesCommentsAvgAggregateInputType = {
    id?: true
    id_episode?: true
  }

  export type EpisodesCommentsSumAggregateInputType = {
    id?: true
    id_episode?: true
  }

  export type EpisodesCommentsMinAggregateInputType = {
    id?: true
    content?: true
    postedAt?: true
    id_user?: true
    id_episode?: true
  }

  export type EpisodesCommentsMaxAggregateInputType = {
    id?: true
    content?: true
    postedAt?: true
    id_user?: true
    id_episode?: true
  }

  export type EpisodesCommentsCountAggregateInputType = {
    id?: true
    content?: true
    postedAt?: true
    id_user?: true
    id_episode?: true
    _all?: true
  }

  export type EpisodesCommentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EpisodesComments to aggregate.
     */
    where?: EpisodesCommentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EpisodesComments to fetch.
     */
    orderBy?: EpisodesCommentsOrderByWithRelationInput | EpisodesCommentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EpisodesCommentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EpisodesComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EpisodesComments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EpisodesComments
    **/
    _count?: true | EpisodesCommentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EpisodesCommentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EpisodesCommentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EpisodesCommentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EpisodesCommentsMaxAggregateInputType
  }

  export type GetEpisodesCommentsAggregateType<T extends EpisodesCommentsAggregateArgs> = {
        [P in keyof T & keyof AggregateEpisodesComments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEpisodesComments[P]>
      : GetScalarType<T[P], AggregateEpisodesComments[P]>
  }




  export type EpisodesCommentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EpisodesCommentsWhereInput
    orderBy?: EpisodesCommentsOrderByWithAggregationInput | EpisodesCommentsOrderByWithAggregationInput[]
    by: EpisodesCommentsScalarFieldEnum[] | EpisodesCommentsScalarFieldEnum
    having?: EpisodesCommentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EpisodesCommentsCountAggregateInputType | true
    _avg?: EpisodesCommentsAvgAggregateInputType
    _sum?: EpisodesCommentsSumAggregateInputType
    _min?: EpisodesCommentsMinAggregateInputType
    _max?: EpisodesCommentsMaxAggregateInputType
  }

  export type EpisodesCommentsGroupByOutputType = {
    id: number
    content: string
    postedAt: Date
    id_user: string
    id_episode: number
    _count: EpisodesCommentsCountAggregateOutputType | null
    _avg: EpisodesCommentsAvgAggregateOutputType | null
    _sum: EpisodesCommentsSumAggregateOutputType | null
    _min: EpisodesCommentsMinAggregateOutputType | null
    _max: EpisodesCommentsMaxAggregateOutputType | null
  }

  type GetEpisodesCommentsGroupByPayload<T extends EpisodesCommentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EpisodesCommentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EpisodesCommentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EpisodesCommentsGroupByOutputType[P]>
            : GetScalarType<T[P], EpisodesCommentsGroupByOutputType[P]>
        }
      >
    >


  export type EpisodesCommentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    postedAt?: boolean
    id_user?: boolean
    id_episode?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    episode?: boolean | EpisodesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["episodesComments"]>



  export type EpisodesCommentsSelectScalar = {
    id?: boolean
    content?: boolean
    postedAt?: boolean
    id_user?: boolean
    id_episode?: boolean
  }

  export type EpisodesCommentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content" | "postedAt" | "id_user" | "id_episode", ExtArgs["result"]["episodesComments"]>
  export type EpisodesCommentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    episode?: boolean | EpisodesDefaultArgs<ExtArgs>
  }

  export type $EpisodesCommentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EpisodesComments"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      episode: Prisma.$EpisodesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      content: string
      postedAt: Date
      id_user: string
      id_episode: number
    }, ExtArgs["result"]["episodesComments"]>
    composites: {}
  }

  type EpisodesCommentsGetPayload<S extends boolean | null | undefined | EpisodesCommentsDefaultArgs> = $Result.GetResult<Prisma.$EpisodesCommentsPayload, S>

  type EpisodesCommentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EpisodesCommentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EpisodesCommentsCountAggregateInputType | true
    }

  export interface EpisodesCommentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EpisodesComments'], meta: { name: 'EpisodesComments' } }
    /**
     * Find zero or one EpisodesComments that matches the filter.
     * @param {EpisodesCommentsFindUniqueArgs} args - Arguments to find a EpisodesComments
     * @example
     * // Get one EpisodesComments
     * const episodesComments = await prisma.episodesComments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EpisodesCommentsFindUniqueArgs>(args: SelectSubset<T, EpisodesCommentsFindUniqueArgs<ExtArgs>>): Prisma__EpisodesCommentsClient<$Result.GetResult<Prisma.$EpisodesCommentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EpisodesComments that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EpisodesCommentsFindUniqueOrThrowArgs} args - Arguments to find a EpisodesComments
     * @example
     * // Get one EpisodesComments
     * const episodesComments = await prisma.episodesComments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EpisodesCommentsFindUniqueOrThrowArgs>(args: SelectSubset<T, EpisodesCommentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EpisodesCommentsClient<$Result.GetResult<Prisma.$EpisodesCommentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EpisodesComments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpisodesCommentsFindFirstArgs} args - Arguments to find a EpisodesComments
     * @example
     * // Get one EpisodesComments
     * const episodesComments = await prisma.episodesComments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EpisodesCommentsFindFirstArgs>(args?: SelectSubset<T, EpisodesCommentsFindFirstArgs<ExtArgs>>): Prisma__EpisodesCommentsClient<$Result.GetResult<Prisma.$EpisodesCommentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EpisodesComments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpisodesCommentsFindFirstOrThrowArgs} args - Arguments to find a EpisodesComments
     * @example
     * // Get one EpisodesComments
     * const episodesComments = await prisma.episodesComments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EpisodesCommentsFindFirstOrThrowArgs>(args?: SelectSubset<T, EpisodesCommentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__EpisodesCommentsClient<$Result.GetResult<Prisma.$EpisodesCommentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EpisodesComments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpisodesCommentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EpisodesComments
     * const episodesComments = await prisma.episodesComments.findMany()
     * 
     * // Get first 10 EpisodesComments
     * const episodesComments = await prisma.episodesComments.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const episodesCommentsWithIdOnly = await prisma.episodesComments.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EpisodesCommentsFindManyArgs>(args?: SelectSubset<T, EpisodesCommentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EpisodesCommentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EpisodesComments.
     * @param {EpisodesCommentsCreateArgs} args - Arguments to create a EpisodesComments.
     * @example
     * // Create one EpisodesComments
     * const EpisodesComments = await prisma.episodesComments.create({
     *   data: {
     *     // ... data to create a EpisodesComments
     *   }
     * })
     * 
     */
    create<T extends EpisodesCommentsCreateArgs>(args: SelectSubset<T, EpisodesCommentsCreateArgs<ExtArgs>>): Prisma__EpisodesCommentsClient<$Result.GetResult<Prisma.$EpisodesCommentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EpisodesComments.
     * @param {EpisodesCommentsCreateManyArgs} args - Arguments to create many EpisodesComments.
     * @example
     * // Create many EpisodesComments
     * const episodesComments = await prisma.episodesComments.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EpisodesCommentsCreateManyArgs>(args?: SelectSubset<T, EpisodesCommentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a EpisodesComments.
     * @param {EpisodesCommentsDeleteArgs} args - Arguments to delete one EpisodesComments.
     * @example
     * // Delete one EpisodesComments
     * const EpisodesComments = await prisma.episodesComments.delete({
     *   where: {
     *     // ... filter to delete one EpisodesComments
     *   }
     * })
     * 
     */
    delete<T extends EpisodesCommentsDeleteArgs>(args: SelectSubset<T, EpisodesCommentsDeleteArgs<ExtArgs>>): Prisma__EpisodesCommentsClient<$Result.GetResult<Prisma.$EpisodesCommentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EpisodesComments.
     * @param {EpisodesCommentsUpdateArgs} args - Arguments to update one EpisodesComments.
     * @example
     * // Update one EpisodesComments
     * const episodesComments = await prisma.episodesComments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EpisodesCommentsUpdateArgs>(args: SelectSubset<T, EpisodesCommentsUpdateArgs<ExtArgs>>): Prisma__EpisodesCommentsClient<$Result.GetResult<Prisma.$EpisodesCommentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EpisodesComments.
     * @param {EpisodesCommentsDeleteManyArgs} args - Arguments to filter EpisodesComments to delete.
     * @example
     * // Delete a few EpisodesComments
     * const { count } = await prisma.episodesComments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EpisodesCommentsDeleteManyArgs>(args?: SelectSubset<T, EpisodesCommentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EpisodesComments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpisodesCommentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EpisodesComments
     * const episodesComments = await prisma.episodesComments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EpisodesCommentsUpdateManyArgs>(args: SelectSubset<T, EpisodesCommentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one EpisodesComments.
     * @param {EpisodesCommentsUpsertArgs} args - Arguments to update or create a EpisodesComments.
     * @example
     * // Update or create a EpisodesComments
     * const episodesComments = await prisma.episodesComments.upsert({
     *   create: {
     *     // ... data to create a EpisodesComments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EpisodesComments we want to update
     *   }
     * })
     */
    upsert<T extends EpisodesCommentsUpsertArgs>(args: SelectSubset<T, EpisodesCommentsUpsertArgs<ExtArgs>>): Prisma__EpisodesCommentsClient<$Result.GetResult<Prisma.$EpisodesCommentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EpisodesComments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpisodesCommentsCountArgs} args - Arguments to filter EpisodesComments to count.
     * @example
     * // Count the number of EpisodesComments
     * const count = await prisma.episodesComments.count({
     *   where: {
     *     // ... the filter for the EpisodesComments we want to count
     *   }
     * })
    **/
    count<T extends EpisodesCommentsCountArgs>(
      args?: Subset<T, EpisodesCommentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EpisodesCommentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EpisodesComments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpisodesCommentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EpisodesCommentsAggregateArgs>(args: Subset<T, EpisodesCommentsAggregateArgs>): Prisma.PrismaPromise<GetEpisodesCommentsAggregateType<T>>

    /**
     * Group by EpisodesComments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpisodesCommentsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EpisodesCommentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EpisodesCommentsGroupByArgs['orderBy'] }
        : { orderBy?: EpisodesCommentsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EpisodesCommentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEpisodesCommentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EpisodesComments model
   */
  readonly fields: EpisodesCommentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EpisodesComments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EpisodesCommentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    episode<T extends EpisodesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EpisodesDefaultArgs<ExtArgs>>): Prisma__EpisodesClient<$Result.GetResult<Prisma.$EpisodesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the EpisodesComments model
   */
  interface EpisodesCommentsFieldRefs {
    readonly id: FieldRef<"EpisodesComments", 'Int'>
    readonly content: FieldRef<"EpisodesComments", 'String'>
    readonly postedAt: FieldRef<"EpisodesComments", 'DateTime'>
    readonly id_user: FieldRef<"EpisodesComments", 'String'>
    readonly id_episode: FieldRef<"EpisodesComments", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * EpisodesComments findUnique
   */
  export type EpisodesCommentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EpisodesComments
     */
    select?: EpisodesCommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EpisodesComments
     */
    omit?: EpisodesCommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodesCommentsInclude<ExtArgs> | null
    /**
     * Filter, which EpisodesComments to fetch.
     */
    where: EpisodesCommentsWhereUniqueInput
  }

  /**
   * EpisodesComments findUniqueOrThrow
   */
  export type EpisodesCommentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EpisodesComments
     */
    select?: EpisodesCommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EpisodesComments
     */
    omit?: EpisodesCommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodesCommentsInclude<ExtArgs> | null
    /**
     * Filter, which EpisodesComments to fetch.
     */
    where: EpisodesCommentsWhereUniqueInput
  }

  /**
   * EpisodesComments findFirst
   */
  export type EpisodesCommentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EpisodesComments
     */
    select?: EpisodesCommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EpisodesComments
     */
    omit?: EpisodesCommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodesCommentsInclude<ExtArgs> | null
    /**
     * Filter, which EpisodesComments to fetch.
     */
    where?: EpisodesCommentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EpisodesComments to fetch.
     */
    orderBy?: EpisodesCommentsOrderByWithRelationInput | EpisodesCommentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EpisodesComments.
     */
    cursor?: EpisodesCommentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EpisodesComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EpisodesComments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EpisodesComments.
     */
    distinct?: EpisodesCommentsScalarFieldEnum | EpisodesCommentsScalarFieldEnum[]
  }

  /**
   * EpisodesComments findFirstOrThrow
   */
  export type EpisodesCommentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EpisodesComments
     */
    select?: EpisodesCommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EpisodesComments
     */
    omit?: EpisodesCommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodesCommentsInclude<ExtArgs> | null
    /**
     * Filter, which EpisodesComments to fetch.
     */
    where?: EpisodesCommentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EpisodesComments to fetch.
     */
    orderBy?: EpisodesCommentsOrderByWithRelationInput | EpisodesCommentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EpisodesComments.
     */
    cursor?: EpisodesCommentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EpisodesComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EpisodesComments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EpisodesComments.
     */
    distinct?: EpisodesCommentsScalarFieldEnum | EpisodesCommentsScalarFieldEnum[]
  }

  /**
   * EpisodesComments findMany
   */
  export type EpisodesCommentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EpisodesComments
     */
    select?: EpisodesCommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EpisodesComments
     */
    omit?: EpisodesCommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodesCommentsInclude<ExtArgs> | null
    /**
     * Filter, which EpisodesComments to fetch.
     */
    where?: EpisodesCommentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EpisodesComments to fetch.
     */
    orderBy?: EpisodesCommentsOrderByWithRelationInput | EpisodesCommentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EpisodesComments.
     */
    cursor?: EpisodesCommentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EpisodesComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EpisodesComments.
     */
    skip?: number
    distinct?: EpisodesCommentsScalarFieldEnum | EpisodesCommentsScalarFieldEnum[]
  }

  /**
   * EpisodesComments create
   */
  export type EpisodesCommentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EpisodesComments
     */
    select?: EpisodesCommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EpisodesComments
     */
    omit?: EpisodesCommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodesCommentsInclude<ExtArgs> | null
    /**
     * The data needed to create a EpisodesComments.
     */
    data: XOR<EpisodesCommentsCreateInput, EpisodesCommentsUncheckedCreateInput>
  }

  /**
   * EpisodesComments createMany
   */
  export type EpisodesCommentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EpisodesComments.
     */
    data: EpisodesCommentsCreateManyInput | EpisodesCommentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EpisodesComments update
   */
  export type EpisodesCommentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EpisodesComments
     */
    select?: EpisodesCommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EpisodesComments
     */
    omit?: EpisodesCommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodesCommentsInclude<ExtArgs> | null
    /**
     * The data needed to update a EpisodesComments.
     */
    data: XOR<EpisodesCommentsUpdateInput, EpisodesCommentsUncheckedUpdateInput>
    /**
     * Choose, which EpisodesComments to update.
     */
    where: EpisodesCommentsWhereUniqueInput
  }

  /**
   * EpisodesComments updateMany
   */
  export type EpisodesCommentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EpisodesComments.
     */
    data: XOR<EpisodesCommentsUpdateManyMutationInput, EpisodesCommentsUncheckedUpdateManyInput>
    /**
     * Filter which EpisodesComments to update
     */
    where?: EpisodesCommentsWhereInput
    /**
     * Limit how many EpisodesComments to update.
     */
    limit?: number
  }

  /**
   * EpisodesComments upsert
   */
  export type EpisodesCommentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EpisodesComments
     */
    select?: EpisodesCommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EpisodesComments
     */
    omit?: EpisodesCommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodesCommentsInclude<ExtArgs> | null
    /**
     * The filter to search for the EpisodesComments to update in case it exists.
     */
    where: EpisodesCommentsWhereUniqueInput
    /**
     * In case the EpisodesComments found by the `where` argument doesn't exist, create a new EpisodesComments with this data.
     */
    create: XOR<EpisodesCommentsCreateInput, EpisodesCommentsUncheckedCreateInput>
    /**
     * In case the EpisodesComments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EpisodesCommentsUpdateInput, EpisodesCommentsUncheckedUpdateInput>
  }

  /**
   * EpisodesComments delete
   */
  export type EpisodesCommentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EpisodesComments
     */
    select?: EpisodesCommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EpisodesComments
     */
    omit?: EpisodesCommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodesCommentsInclude<ExtArgs> | null
    /**
     * Filter which EpisodesComments to delete.
     */
    where: EpisodesCommentsWhereUniqueInput
  }

  /**
   * EpisodesComments deleteMany
   */
  export type EpisodesCommentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EpisodesComments to delete
     */
    where?: EpisodesCommentsWhereInput
    /**
     * Limit how many EpisodesComments to delete.
     */
    limit?: number
  }

  /**
   * EpisodesComments without action
   */
  export type EpisodesCommentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EpisodesComments
     */
    select?: EpisodesCommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EpisodesComments
     */
    omit?: EpisodesCommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodesCommentsInclude<ExtArgs> | null
  }


  /**
   * Model Episodes
   */

  export type AggregateEpisodes = {
    _count: EpisodesCountAggregateOutputType | null
    _avg: EpisodesAvgAggregateOutputType | null
    _sum: EpisodesSumAggregateOutputType | null
    _min: EpisodesMinAggregateOutputType | null
    _max: EpisodesMaxAggregateOutputType | null
  }

  export type EpisodesAvgAggregateOutputType = {
    episode_id: number | null
    season_id: number | null
    season_number: number | null
    episode_number: number | null
  }

  export type EpisodesSumAggregateOutputType = {
    episode_id: number | null
    season_id: number | null
    season_number: number | null
    episode_number: number | null
  }

  export type EpisodesMinAggregateOutputType = {
    episode_id: number | null
    season_id: number | null
    name: string | null
    season_number: number | null
    episode_number: number | null
    airdate: string | null
    summary: string | null
    url: string | null
    image: string | null
  }

  export type EpisodesMaxAggregateOutputType = {
    episode_id: number | null
    season_id: number | null
    name: string | null
    season_number: number | null
    episode_number: number | null
    airdate: string | null
    summary: string | null
    url: string | null
    image: string | null
  }

  export type EpisodesCountAggregateOutputType = {
    episode_id: number
    season_id: number
    name: number
    season_number: number
    episode_number: number
    airdate: number
    summary: number
    url: number
    image: number
    _all: number
  }


  export type EpisodesAvgAggregateInputType = {
    episode_id?: true
    season_id?: true
    season_number?: true
    episode_number?: true
  }

  export type EpisodesSumAggregateInputType = {
    episode_id?: true
    season_id?: true
    season_number?: true
    episode_number?: true
  }

  export type EpisodesMinAggregateInputType = {
    episode_id?: true
    season_id?: true
    name?: true
    season_number?: true
    episode_number?: true
    airdate?: true
    summary?: true
    url?: true
    image?: true
  }

  export type EpisodesMaxAggregateInputType = {
    episode_id?: true
    season_id?: true
    name?: true
    season_number?: true
    episode_number?: true
    airdate?: true
    summary?: true
    url?: true
    image?: true
  }

  export type EpisodesCountAggregateInputType = {
    episode_id?: true
    season_id?: true
    name?: true
    season_number?: true
    episode_number?: true
    airdate?: true
    summary?: true
    url?: true
    image?: true
    _all?: true
  }

  export type EpisodesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Episodes to aggregate.
     */
    where?: EpisodesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Episodes to fetch.
     */
    orderBy?: EpisodesOrderByWithRelationInput | EpisodesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EpisodesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Episodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Episodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Episodes
    **/
    _count?: true | EpisodesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EpisodesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EpisodesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EpisodesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EpisodesMaxAggregateInputType
  }

  export type GetEpisodesAggregateType<T extends EpisodesAggregateArgs> = {
        [P in keyof T & keyof AggregateEpisodes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEpisodes[P]>
      : GetScalarType<T[P], AggregateEpisodes[P]>
  }




  export type EpisodesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EpisodesWhereInput
    orderBy?: EpisodesOrderByWithAggregationInput | EpisodesOrderByWithAggregationInput[]
    by: EpisodesScalarFieldEnum[] | EpisodesScalarFieldEnum
    having?: EpisodesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EpisodesCountAggregateInputType | true
    _avg?: EpisodesAvgAggregateInputType
    _sum?: EpisodesSumAggregateInputType
    _min?: EpisodesMinAggregateInputType
    _max?: EpisodesMaxAggregateInputType
  }

  export type EpisodesGroupByOutputType = {
    episode_id: number
    season_id: number
    name: string
    season_number: number
    episode_number: number | null
    airdate: string | null
    summary: string | null
    url: string | null
    image: string | null
    _count: EpisodesCountAggregateOutputType | null
    _avg: EpisodesAvgAggregateOutputType | null
    _sum: EpisodesSumAggregateOutputType | null
    _min: EpisodesMinAggregateOutputType | null
    _max: EpisodesMaxAggregateOutputType | null
  }

  type GetEpisodesGroupByPayload<T extends EpisodesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EpisodesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EpisodesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EpisodesGroupByOutputType[P]>
            : GetScalarType<T[P], EpisodesGroupByOutputType[P]>
        }
      >
    >


  export type EpisodesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    episode_id?: boolean
    season_id?: boolean
    name?: boolean
    season_number?: boolean
    episode_number?: boolean
    airdate?: boolean
    summary?: boolean
    url?: boolean
    image?: boolean
    seasons?: boolean | SeasonsDefaultArgs<ExtArgs>
    comments?: boolean | Episodes$commentsArgs<ExtArgs>
    users?: boolean | Episodes$usersArgs<ExtArgs>
    _count?: boolean | EpisodesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["episodes"]>



  export type EpisodesSelectScalar = {
    episode_id?: boolean
    season_id?: boolean
    name?: boolean
    season_number?: boolean
    episode_number?: boolean
    airdate?: boolean
    summary?: boolean
    url?: boolean
    image?: boolean
  }

  export type EpisodesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"episode_id" | "season_id" | "name" | "season_number" | "episode_number" | "airdate" | "summary" | "url" | "image", ExtArgs["result"]["episodes"]>
  export type EpisodesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    seasons?: boolean | SeasonsDefaultArgs<ExtArgs>
    comments?: boolean | Episodes$commentsArgs<ExtArgs>
    users?: boolean | Episodes$usersArgs<ExtArgs>
    _count?: boolean | EpisodesCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $EpisodesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Episodes"
    objects: {
      seasons: Prisma.$SeasonsPayload<ExtArgs>
      comments: Prisma.$EpisodesCommentsPayload<ExtArgs>[]
      users: Prisma.$UserEpisodesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      episode_id: number
      season_id: number
      name: string
      season_number: number
      episode_number: number | null
      airdate: string | null
      summary: string | null
      url: string | null
      image: string | null
    }, ExtArgs["result"]["episodes"]>
    composites: {}
  }

  type EpisodesGetPayload<S extends boolean | null | undefined | EpisodesDefaultArgs> = $Result.GetResult<Prisma.$EpisodesPayload, S>

  type EpisodesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EpisodesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EpisodesCountAggregateInputType | true
    }

  export interface EpisodesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Episodes'], meta: { name: 'Episodes' } }
    /**
     * Find zero or one Episodes that matches the filter.
     * @param {EpisodesFindUniqueArgs} args - Arguments to find a Episodes
     * @example
     * // Get one Episodes
     * const episodes = await prisma.episodes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EpisodesFindUniqueArgs>(args: SelectSubset<T, EpisodesFindUniqueArgs<ExtArgs>>): Prisma__EpisodesClient<$Result.GetResult<Prisma.$EpisodesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Episodes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EpisodesFindUniqueOrThrowArgs} args - Arguments to find a Episodes
     * @example
     * // Get one Episodes
     * const episodes = await prisma.episodes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EpisodesFindUniqueOrThrowArgs>(args: SelectSubset<T, EpisodesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EpisodesClient<$Result.GetResult<Prisma.$EpisodesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Episodes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpisodesFindFirstArgs} args - Arguments to find a Episodes
     * @example
     * // Get one Episodes
     * const episodes = await prisma.episodes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EpisodesFindFirstArgs>(args?: SelectSubset<T, EpisodesFindFirstArgs<ExtArgs>>): Prisma__EpisodesClient<$Result.GetResult<Prisma.$EpisodesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Episodes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpisodesFindFirstOrThrowArgs} args - Arguments to find a Episodes
     * @example
     * // Get one Episodes
     * const episodes = await prisma.episodes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EpisodesFindFirstOrThrowArgs>(args?: SelectSubset<T, EpisodesFindFirstOrThrowArgs<ExtArgs>>): Prisma__EpisodesClient<$Result.GetResult<Prisma.$EpisodesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Episodes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpisodesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Episodes
     * const episodes = await prisma.episodes.findMany()
     * 
     * // Get first 10 Episodes
     * const episodes = await prisma.episodes.findMany({ take: 10 })
     * 
     * // Only select the `episode_id`
     * const episodesWithEpisode_idOnly = await prisma.episodes.findMany({ select: { episode_id: true } })
     * 
     */
    findMany<T extends EpisodesFindManyArgs>(args?: SelectSubset<T, EpisodesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EpisodesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Episodes.
     * @param {EpisodesCreateArgs} args - Arguments to create a Episodes.
     * @example
     * // Create one Episodes
     * const Episodes = await prisma.episodes.create({
     *   data: {
     *     // ... data to create a Episodes
     *   }
     * })
     * 
     */
    create<T extends EpisodesCreateArgs>(args: SelectSubset<T, EpisodesCreateArgs<ExtArgs>>): Prisma__EpisodesClient<$Result.GetResult<Prisma.$EpisodesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Episodes.
     * @param {EpisodesCreateManyArgs} args - Arguments to create many Episodes.
     * @example
     * // Create many Episodes
     * const episodes = await prisma.episodes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EpisodesCreateManyArgs>(args?: SelectSubset<T, EpisodesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Episodes.
     * @param {EpisodesDeleteArgs} args - Arguments to delete one Episodes.
     * @example
     * // Delete one Episodes
     * const Episodes = await prisma.episodes.delete({
     *   where: {
     *     // ... filter to delete one Episodes
     *   }
     * })
     * 
     */
    delete<T extends EpisodesDeleteArgs>(args: SelectSubset<T, EpisodesDeleteArgs<ExtArgs>>): Prisma__EpisodesClient<$Result.GetResult<Prisma.$EpisodesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Episodes.
     * @param {EpisodesUpdateArgs} args - Arguments to update one Episodes.
     * @example
     * // Update one Episodes
     * const episodes = await prisma.episodes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EpisodesUpdateArgs>(args: SelectSubset<T, EpisodesUpdateArgs<ExtArgs>>): Prisma__EpisodesClient<$Result.GetResult<Prisma.$EpisodesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Episodes.
     * @param {EpisodesDeleteManyArgs} args - Arguments to filter Episodes to delete.
     * @example
     * // Delete a few Episodes
     * const { count } = await prisma.episodes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EpisodesDeleteManyArgs>(args?: SelectSubset<T, EpisodesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Episodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpisodesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Episodes
     * const episodes = await prisma.episodes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EpisodesUpdateManyArgs>(args: SelectSubset<T, EpisodesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Episodes.
     * @param {EpisodesUpsertArgs} args - Arguments to update or create a Episodes.
     * @example
     * // Update or create a Episodes
     * const episodes = await prisma.episodes.upsert({
     *   create: {
     *     // ... data to create a Episodes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Episodes we want to update
     *   }
     * })
     */
    upsert<T extends EpisodesUpsertArgs>(args: SelectSubset<T, EpisodesUpsertArgs<ExtArgs>>): Prisma__EpisodesClient<$Result.GetResult<Prisma.$EpisodesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Episodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpisodesCountArgs} args - Arguments to filter Episodes to count.
     * @example
     * // Count the number of Episodes
     * const count = await prisma.episodes.count({
     *   where: {
     *     // ... the filter for the Episodes we want to count
     *   }
     * })
    **/
    count<T extends EpisodesCountArgs>(
      args?: Subset<T, EpisodesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EpisodesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Episodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpisodesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EpisodesAggregateArgs>(args: Subset<T, EpisodesAggregateArgs>): Prisma.PrismaPromise<GetEpisodesAggregateType<T>>

    /**
     * Group by Episodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpisodesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EpisodesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EpisodesGroupByArgs['orderBy'] }
        : { orderBy?: EpisodesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EpisodesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEpisodesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Episodes model
   */
  readonly fields: EpisodesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Episodes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EpisodesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    seasons<T extends SeasonsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SeasonsDefaultArgs<ExtArgs>>): Prisma__SeasonsClient<$Result.GetResult<Prisma.$SeasonsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    comments<T extends Episodes$commentsArgs<ExtArgs> = {}>(args?: Subset<T, Episodes$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EpisodesCommentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    users<T extends Episodes$usersArgs<ExtArgs> = {}>(args?: Subset<T, Episodes$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserEpisodesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Episodes model
   */
  interface EpisodesFieldRefs {
    readonly episode_id: FieldRef<"Episodes", 'Int'>
    readonly season_id: FieldRef<"Episodes", 'Int'>
    readonly name: FieldRef<"Episodes", 'String'>
    readonly season_number: FieldRef<"Episodes", 'Int'>
    readonly episode_number: FieldRef<"Episodes", 'Int'>
    readonly airdate: FieldRef<"Episodes", 'String'>
    readonly summary: FieldRef<"Episodes", 'String'>
    readonly url: FieldRef<"Episodes", 'String'>
    readonly image: FieldRef<"Episodes", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Episodes findUnique
   */
  export type EpisodesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episodes
     */
    select?: EpisodesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Episodes
     */
    omit?: EpisodesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodesInclude<ExtArgs> | null
    /**
     * Filter, which Episodes to fetch.
     */
    where: EpisodesWhereUniqueInput
  }

  /**
   * Episodes findUniqueOrThrow
   */
  export type EpisodesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episodes
     */
    select?: EpisodesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Episodes
     */
    omit?: EpisodesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodesInclude<ExtArgs> | null
    /**
     * Filter, which Episodes to fetch.
     */
    where: EpisodesWhereUniqueInput
  }

  /**
   * Episodes findFirst
   */
  export type EpisodesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episodes
     */
    select?: EpisodesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Episodes
     */
    omit?: EpisodesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodesInclude<ExtArgs> | null
    /**
     * Filter, which Episodes to fetch.
     */
    where?: EpisodesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Episodes to fetch.
     */
    orderBy?: EpisodesOrderByWithRelationInput | EpisodesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Episodes.
     */
    cursor?: EpisodesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Episodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Episodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Episodes.
     */
    distinct?: EpisodesScalarFieldEnum | EpisodesScalarFieldEnum[]
  }

  /**
   * Episodes findFirstOrThrow
   */
  export type EpisodesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episodes
     */
    select?: EpisodesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Episodes
     */
    omit?: EpisodesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodesInclude<ExtArgs> | null
    /**
     * Filter, which Episodes to fetch.
     */
    where?: EpisodesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Episodes to fetch.
     */
    orderBy?: EpisodesOrderByWithRelationInput | EpisodesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Episodes.
     */
    cursor?: EpisodesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Episodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Episodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Episodes.
     */
    distinct?: EpisodesScalarFieldEnum | EpisodesScalarFieldEnum[]
  }

  /**
   * Episodes findMany
   */
  export type EpisodesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episodes
     */
    select?: EpisodesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Episodes
     */
    omit?: EpisodesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodesInclude<ExtArgs> | null
    /**
     * Filter, which Episodes to fetch.
     */
    where?: EpisodesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Episodes to fetch.
     */
    orderBy?: EpisodesOrderByWithRelationInput | EpisodesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Episodes.
     */
    cursor?: EpisodesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Episodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Episodes.
     */
    skip?: number
    distinct?: EpisodesScalarFieldEnum | EpisodesScalarFieldEnum[]
  }

  /**
   * Episodes create
   */
  export type EpisodesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episodes
     */
    select?: EpisodesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Episodes
     */
    omit?: EpisodesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodesInclude<ExtArgs> | null
    /**
     * The data needed to create a Episodes.
     */
    data: XOR<EpisodesCreateInput, EpisodesUncheckedCreateInput>
  }

  /**
   * Episodes createMany
   */
  export type EpisodesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Episodes.
     */
    data: EpisodesCreateManyInput | EpisodesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Episodes update
   */
  export type EpisodesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episodes
     */
    select?: EpisodesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Episodes
     */
    omit?: EpisodesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodesInclude<ExtArgs> | null
    /**
     * The data needed to update a Episodes.
     */
    data: XOR<EpisodesUpdateInput, EpisodesUncheckedUpdateInput>
    /**
     * Choose, which Episodes to update.
     */
    where: EpisodesWhereUniqueInput
  }

  /**
   * Episodes updateMany
   */
  export type EpisodesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Episodes.
     */
    data: XOR<EpisodesUpdateManyMutationInput, EpisodesUncheckedUpdateManyInput>
    /**
     * Filter which Episodes to update
     */
    where?: EpisodesWhereInput
    /**
     * Limit how many Episodes to update.
     */
    limit?: number
  }

  /**
   * Episodes upsert
   */
  export type EpisodesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episodes
     */
    select?: EpisodesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Episodes
     */
    omit?: EpisodesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodesInclude<ExtArgs> | null
    /**
     * The filter to search for the Episodes to update in case it exists.
     */
    where: EpisodesWhereUniqueInput
    /**
     * In case the Episodes found by the `where` argument doesn't exist, create a new Episodes with this data.
     */
    create: XOR<EpisodesCreateInput, EpisodesUncheckedCreateInput>
    /**
     * In case the Episodes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EpisodesUpdateInput, EpisodesUncheckedUpdateInput>
  }

  /**
   * Episodes delete
   */
  export type EpisodesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episodes
     */
    select?: EpisodesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Episodes
     */
    omit?: EpisodesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodesInclude<ExtArgs> | null
    /**
     * Filter which Episodes to delete.
     */
    where: EpisodesWhereUniqueInput
  }

  /**
   * Episodes deleteMany
   */
  export type EpisodesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Episodes to delete
     */
    where?: EpisodesWhereInput
    /**
     * Limit how many Episodes to delete.
     */
    limit?: number
  }

  /**
   * Episodes.comments
   */
  export type Episodes$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EpisodesComments
     */
    select?: EpisodesCommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EpisodesComments
     */
    omit?: EpisodesCommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodesCommentsInclude<ExtArgs> | null
    where?: EpisodesCommentsWhereInput
    orderBy?: EpisodesCommentsOrderByWithRelationInput | EpisodesCommentsOrderByWithRelationInput[]
    cursor?: EpisodesCommentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EpisodesCommentsScalarFieldEnum | EpisodesCommentsScalarFieldEnum[]
  }

  /**
   * Episodes.users
   */
  export type Episodes$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserEpisodes
     */
    select?: UserEpisodesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserEpisodes
     */
    omit?: UserEpisodesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserEpisodesInclude<ExtArgs> | null
    where?: UserEpisodesWhereInput
    orderBy?: UserEpisodesOrderByWithRelationInput | UserEpisodesOrderByWithRelationInput[]
    cursor?: UserEpisodesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserEpisodesScalarFieldEnum | UserEpisodesScalarFieldEnum[]
  }

  /**
   * Episodes without action
   */
  export type EpisodesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episodes
     */
    select?: EpisodesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Episodes
     */
    omit?: EpisodesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodesInclude<ExtArgs> | null
  }


  /**
   * Model Cast
   */

  export type AggregateCast = {
    _count: CastCountAggregateOutputType | null
    _avg: CastAvgAggregateOutputType | null
    _sum: CastSumAggregateOutputType | null
    _min: CastMinAggregateOutputType | null
    _max: CastMaxAggregateOutputType | null
  }

  export type CastAvgAggregateOutputType = {
    person_id: number | null
  }

  export type CastSumAggregateOutputType = {
    person_id: number | null
  }

  export type CastMinAggregateOutputType = {
    person_id: number | null
    name: string | null
    image: string | null
  }

  export type CastMaxAggregateOutputType = {
    person_id: number | null
    name: string | null
    image: string | null
  }

  export type CastCountAggregateOutputType = {
    person_id: number
    name: number
    image: number
    _all: number
  }


  export type CastAvgAggregateInputType = {
    person_id?: true
  }

  export type CastSumAggregateInputType = {
    person_id?: true
  }

  export type CastMinAggregateInputType = {
    person_id?: true
    name?: true
    image?: true
  }

  export type CastMaxAggregateInputType = {
    person_id?: true
    name?: true
    image?: true
  }

  export type CastCountAggregateInputType = {
    person_id?: true
    name?: true
    image?: true
    _all?: true
  }

  export type CastAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cast to aggregate.
     */
    where?: CastWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Casts to fetch.
     */
    orderBy?: CastOrderByWithRelationInput | CastOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CastWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Casts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Casts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Casts
    **/
    _count?: true | CastCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CastAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CastSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CastMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CastMaxAggregateInputType
  }

  export type GetCastAggregateType<T extends CastAggregateArgs> = {
        [P in keyof T & keyof AggregateCast]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCast[P]>
      : GetScalarType<T[P], AggregateCast[P]>
  }




  export type CastGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CastWhereInput
    orderBy?: CastOrderByWithAggregationInput | CastOrderByWithAggregationInput[]
    by: CastScalarFieldEnum[] | CastScalarFieldEnum
    having?: CastScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CastCountAggregateInputType | true
    _avg?: CastAvgAggregateInputType
    _sum?: CastSumAggregateInputType
    _min?: CastMinAggregateInputType
    _max?: CastMaxAggregateInputType
  }

  export type CastGroupByOutputType = {
    person_id: number
    name: string
    image: string | null
    _count: CastCountAggregateOutputType | null
    _avg: CastAvgAggregateOutputType | null
    _sum: CastSumAggregateOutputType | null
    _min: CastMinAggregateOutputType | null
    _max: CastMaxAggregateOutputType | null
  }

  type GetCastGroupByPayload<T extends CastGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CastGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CastGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CastGroupByOutputType[P]>
            : GetScalarType<T[P], CastGroupByOutputType[P]>
        }
      >
    >


  export type CastSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    person_id?: boolean
    name?: boolean
    image?: boolean
    show_cast?: boolean | Cast$show_castArgs<ExtArgs>
    _count?: boolean | CastCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cast"]>



  export type CastSelectScalar = {
    person_id?: boolean
    name?: boolean
    image?: boolean
  }

  export type CastOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"person_id" | "name" | "image", ExtArgs["result"]["cast"]>
  export type CastInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    show_cast?: boolean | Cast$show_castArgs<ExtArgs>
    _count?: boolean | CastCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CastPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cast"
    objects: {
      show_cast: Prisma.$ShowCastPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      person_id: number
      name: string
      image: string | null
    }, ExtArgs["result"]["cast"]>
    composites: {}
  }

  type CastGetPayload<S extends boolean | null | undefined | CastDefaultArgs> = $Result.GetResult<Prisma.$CastPayload, S>

  type CastCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CastFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CastCountAggregateInputType | true
    }

  export interface CastDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cast'], meta: { name: 'Cast' } }
    /**
     * Find zero or one Cast that matches the filter.
     * @param {CastFindUniqueArgs} args - Arguments to find a Cast
     * @example
     * // Get one Cast
     * const cast = await prisma.cast.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CastFindUniqueArgs>(args: SelectSubset<T, CastFindUniqueArgs<ExtArgs>>): Prisma__CastClient<$Result.GetResult<Prisma.$CastPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cast that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CastFindUniqueOrThrowArgs} args - Arguments to find a Cast
     * @example
     * // Get one Cast
     * const cast = await prisma.cast.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CastFindUniqueOrThrowArgs>(args: SelectSubset<T, CastFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CastClient<$Result.GetResult<Prisma.$CastPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cast that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CastFindFirstArgs} args - Arguments to find a Cast
     * @example
     * // Get one Cast
     * const cast = await prisma.cast.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CastFindFirstArgs>(args?: SelectSubset<T, CastFindFirstArgs<ExtArgs>>): Prisma__CastClient<$Result.GetResult<Prisma.$CastPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cast that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CastFindFirstOrThrowArgs} args - Arguments to find a Cast
     * @example
     * // Get one Cast
     * const cast = await prisma.cast.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CastFindFirstOrThrowArgs>(args?: SelectSubset<T, CastFindFirstOrThrowArgs<ExtArgs>>): Prisma__CastClient<$Result.GetResult<Prisma.$CastPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Casts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CastFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Casts
     * const casts = await prisma.cast.findMany()
     * 
     * // Get first 10 Casts
     * const casts = await prisma.cast.findMany({ take: 10 })
     * 
     * // Only select the `person_id`
     * const castWithPerson_idOnly = await prisma.cast.findMany({ select: { person_id: true } })
     * 
     */
    findMany<T extends CastFindManyArgs>(args?: SelectSubset<T, CastFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CastPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cast.
     * @param {CastCreateArgs} args - Arguments to create a Cast.
     * @example
     * // Create one Cast
     * const Cast = await prisma.cast.create({
     *   data: {
     *     // ... data to create a Cast
     *   }
     * })
     * 
     */
    create<T extends CastCreateArgs>(args: SelectSubset<T, CastCreateArgs<ExtArgs>>): Prisma__CastClient<$Result.GetResult<Prisma.$CastPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Casts.
     * @param {CastCreateManyArgs} args - Arguments to create many Casts.
     * @example
     * // Create many Casts
     * const cast = await prisma.cast.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CastCreateManyArgs>(args?: SelectSubset<T, CastCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Cast.
     * @param {CastDeleteArgs} args - Arguments to delete one Cast.
     * @example
     * // Delete one Cast
     * const Cast = await prisma.cast.delete({
     *   where: {
     *     // ... filter to delete one Cast
     *   }
     * })
     * 
     */
    delete<T extends CastDeleteArgs>(args: SelectSubset<T, CastDeleteArgs<ExtArgs>>): Prisma__CastClient<$Result.GetResult<Prisma.$CastPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cast.
     * @param {CastUpdateArgs} args - Arguments to update one Cast.
     * @example
     * // Update one Cast
     * const cast = await prisma.cast.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CastUpdateArgs>(args: SelectSubset<T, CastUpdateArgs<ExtArgs>>): Prisma__CastClient<$Result.GetResult<Prisma.$CastPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Casts.
     * @param {CastDeleteManyArgs} args - Arguments to filter Casts to delete.
     * @example
     * // Delete a few Casts
     * const { count } = await prisma.cast.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CastDeleteManyArgs>(args?: SelectSubset<T, CastDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Casts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CastUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Casts
     * const cast = await prisma.cast.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CastUpdateManyArgs>(args: SelectSubset<T, CastUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Cast.
     * @param {CastUpsertArgs} args - Arguments to update or create a Cast.
     * @example
     * // Update or create a Cast
     * const cast = await prisma.cast.upsert({
     *   create: {
     *     // ... data to create a Cast
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cast we want to update
     *   }
     * })
     */
    upsert<T extends CastUpsertArgs>(args: SelectSubset<T, CastUpsertArgs<ExtArgs>>): Prisma__CastClient<$Result.GetResult<Prisma.$CastPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Casts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CastCountArgs} args - Arguments to filter Casts to count.
     * @example
     * // Count the number of Casts
     * const count = await prisma.cast.count({
     *   where: {
     *     // ... the filter for the Casts we want to count
     *   }
     * })
    **/
    count<T extends CastCountArgs>(
      args?: Subset<T, CastCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CastCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cast.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CastAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CastAggregateArgs>(args: Subset<T, CastAggregateArgs>): Prisma.PrismaPromise<GetCastAggregateType<T>>

    /**
     * Group by Cast.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CastGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CastGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CastGroupByArgs['orderBy'] }
        : { orderBy?: CastGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CastGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCastGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cast model
   */
  readonly fields: CastFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cast.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CastClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    show_cast<T extends Cast$show_castArgs<ExtArgs> = {}>(args?: Subset<T, Cast$show_castArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShowCastPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Cast model
   */
  interface CastFieldRefs {
    readonly person_id: FieldRef<"Cast", 'Int'>
    readonly name: FieldRef<"Cast", 'String'>
    readonly image: FieldRef<"Cast", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Cast findUnique
   */
  export type CastFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cast
     */
    select?: CastSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cast
     */
    omit?: CastOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CastInclude<ExtArgs> | null
    /**
     * Filter, which Cast to fetch.
     */
    where: CastWhereUniqueInput
  }

  /**
   * Cast findUniqueOrThrow
   */
  export type CastFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cast
     */
    select?: CastSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cast
     */
    omit?: CastOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CastInclude<ExtArgs> | null
    /**
     * Filter, which Cast to fetch.
     */
    where: CastWhereUniqueInput
  }

  /**
   * Cast findFirst
   */
  export type CastFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cast
     */
    select?: CastSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cast
     */
    omit?: CastOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CastInclude<ExtArgs> | null
    /**
     * Filter, which Cast to fetch.
     */
    where?: CastWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Casts to fetch.
     */
    orderBy?: CastOrderByWithRelationInput | CastOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Casts.
     */
    cursor?: CastWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Casts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Casts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Casts.
     */
    distinct?: CastScalarFieldEnum | CastScalarFieldEnum[]
  }

  /**
   * Cast findFirstOrThrow
   */
  export type CastFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cast
     */
    select?: CastSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cast
     */
    omit?: CastOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CastInclude<ExtArgs> | null
    /**
     * Filter, which Cast to fetch.
     */
    where?: CastWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Casts to fetch.
     */
    orderBy?: CastOrderByWithRelationInput | CastOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Casts.
     */
    cursor?: CastWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Casts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Casts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Casts.
     */
    distinct?: CastScalarFieldEnum | CastScalarFieldEnum[]
  }

  /**
   * Cast findMany
   */
  export type CastFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cast
     */
    select?: CastSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cast
     */
    omit?: CastOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CastInclude<ExtArgs> | null
    /**
     * Filter, which Casts to fetch.
     */
    where?: CastWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Casts to fetch.
     */
    orderBy?: CastOrderByWithRelationInput | CastOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Casts.
     */
    cursor?: CastWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Casts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Casts.
     */
    skip?: number
    distinct?: CastScalarFieldEnum | CastScalarFieldEnum[]
  }

  /**
   * Cast create
   */
  export type CastCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cast
     */
    select?: CastSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cast
     */
    omit?: CastOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CastInclude<ExtArgs> | null
    /**
     * The data needed to create a Cast.
     */
    data: XOR<CastCreateInput, CastUncheckedCreateInput>
  }

  /**
   * Cast createMany
   */
  export type CastCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Casts.
     */
    data: CastCreateManyInput | CastCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cast update
   */
  export type CastUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cast
     */
    select?: CastSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cast
     */
    omit?: CastOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CastInclude<ExtArgs> | null
    /**
     * The data needed to update a Cast.
     */
    data: XOR<CastUpdateInput, CastUncheckedUpdateInput>
    /**
     * Choose, which Cast to update.
     */
    where: CastWhereUniqueInput
  }

  /**
   * Cast updateMany
   */
  export type CastUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Casts.
     */
    data: XOR<CastUpdateManyMutationInput, CastUncheckedUpdateManyInput>
    /**
     * Filter which Casts to update
     */
    where?: CastWhereInput
    /**
     * Limit how many Casts to update.
     */
    limit?: number
  }

  /**
   * Cast upsert
   */
  export type CastUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cast
     */
    select?: CastSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cast
     */
    omit?: CastOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CastInclude<ExtArgs> | null
    /**
     * The filter to search for the Cast to update in case it exists.
     */
    where: CastWhereUniqueInput
    /**
     * In case the Cast found by the `where` argument doesn't exist, create a new Cast with this data.
     */
    create: XOR<CastCreateInput, CastUncheckedCreateInput>
    /**
     * In case the Cast was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CastUpdateInput, CastUncheckedUpdateInput>
  }

  /**
   * Cast delete
   */
  export type CastDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cast
     */
    select?: CastSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cast
     */
    omit?: CastOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CastInclude<ExtArgs> | null
    /**
     * Filter which Cast to delete.
     */
    where: CastWhereUniqueInput
  }

  /**
   * Cast deleteMany
   */
  export type CastDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Casts to delete
     */
    where?: CastWhereInput
    /**
     * Limit how many Casts to delete.
     */
    limit?: number
  }

  /**
   * Cast.show_cast
   */
  export type Cast$show_castArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShowCast
     */
    select?: ShowCastSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShowCast
     */
    omit?: ShowCastOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowCastInclude<ExtArgs> | null
    where?: ShowCastWhereInput
    orderBy?: ShowCastOrderByWithRelationInput | ShowCastOrderByWithRelationInput[]
    cursor?: ShowCastWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShowCastScalarFieldEnum | ShowCastScalarFieldEnum[]
  }

  /**
   * Cast without action
   */
  export type CastDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cast
     */
    select?: CastSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cast
     */
    omit?: CastOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CastInclude<ExtArgs> | null
  }


  /**
   * Model Seasons
   */

  export type AggregateSeasons = {
    _count: SeasonsCountAggregateOutputType | null
    _avg: SeasonsAvgAggregateOutputType | null
    _sum: SeasonsSumAggregateOutputType | null
    _min: SeasonsMinAggregateOutputType | null
    _max: SeasonsMaxAggregateOutputType | null
  }

  export type SeasonsAvgAggregateOutputType = {
    season_id: number | null
    show_id: number | null
  }

  export type SeasonsSumAggregateOutputType = {
    season_id: number | null
    show_id: number | null
  }

  export type SeasonsMinAggregateOutputType = {
    season_id: number | null
    show_id: number | null
    summary: string | null
    image: string | null
  }

  export type SeasonsMaxAggregateOutputType = {
    season_id: number | null
    show_id: number | null
    summary: string | null
    image: string | null
  }

  export type SeasonsCountAggregateOutputType = {
    season_id: number
    show_id: number
    summary: number
    image: number
    _all: number
  }


  export type SeasonsAvgAggregateInputType = {
    season_id?: true
    show_id?: true
  }

  export type SeasonsSumAggregateInputType = {
    season_id?: true
    show_id?: true
  }

  export type SeasonsMinAggregateInputType = {
    season_id?: true
    show_id?: true
    summary?: true
    image?: true
  }

  export type SeasonsMaxAggregateInputType = {
    season_id?: true
    show_id?: true
    summary?: true
    image?: true
  }

  export type SeasonsCountAggregateInputType = {
    season_id?: true
    show_id?: true
    summary?: true
    image?: true
    _all?: true
  }

  export type SeasonsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Seasons to aggregate.
     */
    where?: SeasonsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Seasons to fetch.
     */
    orderBy?: SeasonsOrderByWithRelationInput | SeasonsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SeasonsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Seasons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Seasons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Seasons
    **/
    _count?: true | SeasonsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SeasonsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SeasonsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SeasonsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SeasonsMaxAggregateInputType
  }

  export type GetSeasonsAggregateType<T extends SeasonsAggregateArgs> = {
        [P in keyof T & keyof AggregateSeasons]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSeasons[P]>
      : GetScalarType<T[P], AggregateSeasons[P]>
  }




  export type SeasonsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SeasonsWhereInput
    orderBy?: SeasonsOrderByWithAggregationInput | SeasonsOrderByWithAggregationInput[]
    by: SeasonsScalarFieldEnum[] | SeasonsScalarFieldEnum
    having?: SeasonsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SeasonsCountAggregateInputType | true
    _avg?: SeasonsAvgAggregateInputType
    _sum?: SeasonsSumAggregateInputType
    _min?: SeasonsMinAggregateInputType
    _max?: SeasonsMaxAggregateInputType
  }

  export type SeasonsGroupByOutputType = {
    season_id: number
    show_id: number
    summary: string | null
    image: string | null
    _count: SeasonsCountAggregateOutputType | null
    _avg: SeasonsAvgAggregateOutputType | null
    _sum: SeasonsSumAggregateOutputType | null
    _min: SeasonsMinAggregateOutputType | null
    _max: SeasonsMaxAggregateOutputType | null
  }

  type GetSeasonsGroupByPayload<T extends SeasonsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SeasonsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SeasonsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SeasonsGroupByOutputType[P]>
            : GetScalarType<T[P], SeasonsGroupByOutputType[P]>
        }
      >
    >


  export type SeasonsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    season_id?: boolean
    show_id?: boolean
    summary?: boolean
    image?: boolean
    episodes?: boolean | Seasons$episodesArgs<ExtArgs>
    shows?: boolean | ShowsDefaultArgs<ExtArgs>
    _count?: boolean | SeasonsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["seasons"]>



  export type SeasonsSelectScalar = {
    season_id?: boolean
    show_id?: boolean
    summary?: boolean
    image?: boolean
  }

  export type SeasonsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"season_id" | "show_id" | "summary" | "image", ExtArgs["result"]["seasons"]>
  export type SeasonsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    episodes?: boolean | Seasons$episodesArgs<ExtArgs>
    shows?: boolean | ShowsDefaultArgs<ExtArgs>
    _count?: boolean | SeasonsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $SeasonsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Seasons"
    objects: {
      episodes: Prisma.$EpisodesPayload<ExtArgs>[]
      shows: Prisma.$ShowsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      season_id: number
      show_id: number
      summary: string | null
      image: string | null
    }, ExtArgs["result"]["seasons"]>
    composites: {}
  }

  type SeasonsGetPayload<S extends boolean | null | undefined | SeasonsDefaultArgs> = $Result.GetResult<Prisma.$SeasonsPayload, S>

  type SeasonsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SeasonsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SeasonsCountAggregateInputType | true
    }

  export interface SeasonsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Seasons'], meta: { name: 'Seasons' } }
    /**
     * Find zero or one Seasons that matches the filter.
     * @param {SeasonsFindUniqueArgs} args - Arguments to find a Seasons
     * @example
     * // Get one Seasons
     * const seasons = await prisma.seasons.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SeasonsFindUniqueArgs>(args: SelectSubset<T, SeasonsFindUniqueArgs<ExtArgs>>): Prisma__SeasonsClient<$Result.GetResult<Prisma.$SeasonsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Seasons that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SeasonsFindUniqueOrThrowArgs} args - Arguments to find a Seasons
     * @example
     * // Get one Seasons
     * const seasons = await prisma.seasons.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SeasonsFindUniqueOrThrowArgs>(args: SelectSubset<T, SeasonsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SeasonsClient<$Result.GetResult<Prisma.$SeasonsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Seasons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeasonsFindFirstArgs} args - Arguments to find a Seasons
     * @example
     * // Get one Seasons
     * const seasons = await prisma.seasons.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SeasonsFindFirstArgs>(args?: SelectSubset<T, SeasonsFindFirstArgs<ExtArgs>>): Prisma__SeasonsClient<$Result.GetResult<Prisma.$SeasonsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Seasons that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeasonsFindFirstOrThrowArgs} args - Arguments to find a Seasons
     * @example
     * // Get one Seasons
     * const seasons = await prisma.seasons.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SeasonsFindFirstOrThrowArgs>(args?: SelectSubset<T, SeasonsFindFirstOrThrowArgs<ExtArgs>>): Prisma__SeasonsClient<$Result.GetResult<Prisma.$SeasonsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Seasons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeasonsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Seasons
     * const seasons = await prisma.seasons.findMany()
     * 
     * // Get first 10 Seasons
     * const seasons = await prisma.seasons.findMany({ take: 10 })
     * 
     * // Only select the `season_id`
     * const seasonsWithSeason_idOnly = await prisma.seasons.findMany({ select: { season_id: true } })
     * 
     */
    findMany<T extends SeasonsFindManyArgs>(args?: SelectSubset<T, SeasonsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeasonsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Seasons.
     * @param {SeasonsCreateArgs} args - Arguments to create a Seasons.
     * @example
     * // Create one Seasons
     * const Seasons = await prisma.seasons.create({
     *   data: {
     *     // ... data to create a Seasons
     *   }
     * })
     * 
     */
    create<T extends SeasonsCreateArgs>(args: SelectSubset<T, SeasonsCreateArgs<ExtArgs>>): Prisma__SeasonsClient<$Result.GetResult<Prisma.$SeasonsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Seasons.
     * @param {SeasonsCreateManyArgs} args - Arguments to create many Seasons.
     * @example
     * // Create many Seasons
     * const seasons = await prisma.seasons.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SeasonsCreateManyArgs>(args?: SelectSubset<T, SeasonsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Seasons.
     * @param {SeasonsDeleteArgs} args - Arguments to delete one Seasons.
     * @example
     * // Delete one Seasons
     * const Seasons = await prisma.seasons.delete({
     *   where: {
     *     // ... filter to delete one Seasons
     *   }
     * })
     * 
     */
    delete<T extends SeasonsDeleteArgs>(args: SelectSubset<T, SeasonsDeleteArgs<ExtArgs>>): Prisma__SeasonsClient<$Result.GetResult<Prisma.$SeasonsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Seasons.
     * @param {SeasonsUpdateArgs} args - Arguments to update one Seasons.
     * @example
     * // Update one Seasons
     * const seasons = await prisma.seasons.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SeasonsUpdateArgs>(args: SelectSubset<T, SeasonsUpdateArgs<ExtArgs>>): Prisma__SeasonsClient<$Result.GetResult<Prisma.$SeasonsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Seasons.
     * @param {SeasonsDeleteManyArgs} args - Arguments to filter Seasons to delete.
     * @example
     * // Delete a few Seasons
     * const { count } = await prisma.seasons.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SeasonsDeleteManyArgs>(args?: SelectSubset<T, SeasonsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Seasons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeasonsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Seasons
     * const seasons = await prisma.seasons.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SeasonsUpdateManyArgs>(args: SelectSubset<T, SeasonsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Seasons.
     * @param {SeasonsUpsertArgs} args - Arguments to update or create a Seasons.
     * @example
     * // Update or create a Seasons
     * const seasons = await prisma.seasons.upsert({
     *   create: {
     *     // ... data to create a Seasons
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Seasons we want to update
     *   }
     * })
     */
    upsert<T extends SeasonsUpsertArgs>(args: SelectSubset<T, SeasonsUpsertArgs<ExtArgs>>): Prisma__SeasonsClient<$Result.GetResult<Prisma.$SeasonsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Seasons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeasonsCountArgs} args - Arguments to filter Seasons to count.
     * @example
     * // Count the number of Seasons
     * const count = await prisma.seasons.count({
     *   where: {
     *     // ... the filter for the Seasons we want to count
     *   }
     * })
    **/
    count<T extends SeasonsCountArgs>(
      args?: Subset<T, SeasonsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SeasonsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Seasons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeasonsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SeasonsAggregateArgs>(args: Subset<T, SeasonsAggregateArgs>): Prisma.PrismaPromise<GetSeasonsAggregateType<T>>

    /**
     * Group by Seasons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeasonsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SeasonsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SeasonsGroupByArgs['orderBy'] }
        : { orderBy?: SeasonsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SeasonsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSeasonsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Seasons model
   */
  readonly fields: SeasonsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Seasons.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SeasonsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    episodes<T extends Seasons$episodesArgs<ExtArgs> = {}>(args?: Subset<T, Seasons$episodesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EpisodesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    shows<T extends ShowsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShowsDefaultArgs<ExtArgs>>): Prisma__ShowsClient<$Result.GetResult<Prisma.$ShowsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Seasons model
   */
  interface SeasonsFieldRefs {
    readonly season_id: FieldRef<"Seasons", 'Int'>
    readonly show_id: FieldRef<"Seasons", 'Int'>
    readonly summary: FieldRef<"Seasons", 'String'>
    readonly image: FieldRef<"Seasons", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Seasons findUnique
   */
  export type SeasonsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seasons
     */
    select?: SeasonsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seasons
     */
    omit?: SeasonsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeasonsInclude<ExtArgs> | null
    /**
     * Filter, which Seasons to fetch.
     */
    where: SeasonsWhereUniqueInput
  }

  /**
   * Seasons findUniqueOrThrow
   */
  export type SeasonsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seasons
     */
    select?: SeasonsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seasons
     */
    omit?: SeasonsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeasonsInclude<ExtArgs> | null
    /**
     * Filter, which Seasons to fetch.
     */
    where: SeasonsWhereUniqueInput
  }

  /**
   * Seasons findFirst
   */
  export type SeasonsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seasons
     */
    select?: SeasonsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seasons
     */
    omit?: SeasonsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeasonsInclude<ExtArgs> | null
    /**
     * Filter, which Seasons to fetch.
     */
    where?: SeasonsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Seasons to fetch.
     */
    orderBy?: SeasonsOrderByWithRelationInput | SeasonsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Seasons.
     */
    cursor?: SeasonsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Seasons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Seasons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Seasons.
     */
    distinct?: SeasonsScalarFieldEnum | SeasonsScalarFieldEnum[]
  }

  /**
   * Seasons findFirstOrThrow
   */
  export type SeasonsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seasons
     */
    select?: SeasonsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seasons
     */
    omit?: SeasonsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeasonsInclude<ExtArgs> | null
    /**
     * Filter, which Seasons to fetch.
     */
    where?: SeasonsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Seasons to fetch.
     */
    orderBy?: SeasonsOrderByWithRelationInput | SeasonsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Seasons.
     */
    cursor?: SeasonsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Seasons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Seasons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Seasons.
     */
    distinct?: SeasonsScalarFieldEnum | SeasonsScalarFieldEnum[]
  }

  /**
   * Seasons findMany
   */
  export type SeasonsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seasons
     */
    select?: SeasonsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seasons
     */
    omit?: SeasonsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeasonsInclude<ExtArgs> | null
    /**
     * Filter, which Seasons to fetch.
     */
    where?: SeasonsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Seasons to fetch.
     */
    orderBy?: SeasonsOrderByWithRelationInput | SeasonsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Seasons.
     */
    cursor?: SeasonsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Seasons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Seasons.
     */
    skip?: number
    distinct?: SeasonsScalarFieldEnum | SeasonsScalarFieldEnum[]
  }

  /**
   * Seasons create
   */
  export type SeasonsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seasons
     */
    select?: SeasonsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seasons
     */
    omit?: SeasonsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeasonsInclude<ExtArgs> | null
    /**
     * The data needed to create a Seasons.
     */
    data: XOR<SeasonsCreateInput, SeasonsUncheckedCreateInput>
  }

  /**
   * Seasons createMany
   */
  export type SeasonsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Seasons.
     */
    data: SeasonsCreateManyInput | SeasonsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Seasons update
   */
  export type SeasonsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seasons
     */
    select?: SeasonsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seasons
     */
    omit?: SeasonsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeasonsInclude<ExtArgs> | null
    /**
     * The data needed to update a Seasons.
     */
    data: XOR<SeasonsUpdateInput, SeasonsUncheckedUpdateInput>
    /**
     * Choose, which Seasons to update.
     */
    where: SeasonsWhereUniqueInput
  }

  /**
   * Seasons updateMany
   */
  export type SeasonsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Seasons.
     */
    data: XOR<SeasonsUpdateManyMutationInput, SeasonsUncheckedUpdateManyInput>
    /**
     * Filter which Seasons to update
     */
    where?: SeasonsWhereInput
    /**
     * Limit how many Seasons to update.
     */
    limit?: number
  }

  /**
   * Seasons upsert
   */
  export type SeasonsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seasons
     */
    select?: SeasonsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seasons
     */
    omit?: SeasonsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeasonsInclude<ExtArgs> | null
    /**
     * The filter to search for the Seasons to update in case it exists.
     */
    where: SeasonsWhereUniqueInput
    /**
     * In case the Seasons found by the `where` argument doesn't exist, create a new Seasons with this data.
     */
    create: XOR<SeasonsCreateInput, SeasonsUncheckedCreateInput>
    /**
     * In case the Seasons was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SeasonsUpdateInput, SeasonsUncheckedUpdateInput>
  }

  /**
   * Seasons delete
   */
  export type SeasonsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seasons
     */
    select?: SeasonsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seasons
     */
    omit?: SeasonsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeasonsInclude<ExtArgs> | null
    /**
     * Filter which Seasons to delete.
     */
    where: SeasonsWhereUniqueInput
  }

  /**
   * Seasons deleteMany
   */
  export type SeasonsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Seasons to delete
     */
    where?: SeasonsWhereInput
    /**
     * Limit how many Seasons to delete.
     */
    limit?: number
  }

  /**
   * Seasons.episodes
   */
  export type Seasons$episodesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episodes
     */
    select?: EpisodesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Episodes
     */
    omit?: EpisodesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodesInclude<ExtArgs> | null
    where?: EpisodesWhereInput
    orderBy?: EpisodesOrderByWithRelationInput | EpisodesOrderByWithRelationInput[]
    cursor?: EpisodesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EpisodesScalarFieldEnum | EpisodesScalarFieldEnum[]
  }

  /**
   * Seasons without action
   */
  export type SeasonsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seasons
     */
    select?: SeasonsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seasons
     */
    omit?: SeasonsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeasonsInclude<ExtArgs> | null
  }


  /**
   * Model ShowCast
   */

  export type AggregateShowCast = {
    _count: ShowCastCountAggregateOutputType | null
    _avg: ShowCastAvgAggregateOutputType | null
    _sum: ShowCastSumAggregateOutputType | null
    _min: ShowCastMinAggregateOutputType | null
    _max: ShowCastMaxAggregateOutputType | null
  }

  export type ShowCastAvgAggregateOutputType = {
    show_id: number | null
    person_id: number | null
  }

  export type ShowCastSumAggregateOutputType = {
    show_id: number | null
    person_id: number | null
  }

  export type ShowCastMinAggregateOutputType = {
    show_id: number | null
    person_id: number | null
    character_name: string | null
  }

  export type ShowCastMaxAggregateOutputType = {
    show_id: number | null
    person_id: number | null
    character_name: string | null
  }

  export type ShowCastCountAggregateOutputType = {
    show_id: number
    person_id: number
    character_name: number
    _all: number
  }


  export type ShowCastAvgAggregateInputType = {
    show_id?: true
    person_id?: true
  }

  export type ShowCastSumAggregateInputType = {
    show_id?: true
    person_id?: true
  }

  export type ShowCastMinAggregateInputType = {
    show_id?: true
    person_id?: true
    character_name?: true
  }

  export type ShowCastMaxAggregateInputType = {
    show_id?: true
    person_id?: true
    character_name?: true
  }

  export type ShowCastCountAggregateInputType = {
    show_id?: true
    person_id?: true
    character_name?: true
    _all?: true
  }

  export type ShowCastAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShowCast to aggregate.
     */
    where?: ShowCastWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShowCasts to fetch.
     */
    orderBy?: ShowCastOrderByWithRelationInput | ShowCastOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShowCastWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShowCasts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShowCasts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ShowCasts
    **/
    _count?: true | ShowCastCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ShowCastAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ShowCastSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShowCastMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShowCastMaxAggregateInputType
  }

  export type GetShowCastAggregateType<T extends ShowCastAggregateArgs> = {
        [P in keyof T & keyof AggregateShowCast]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShowCast[P]>
      : GetScalarType<T[P], AggregateShowCast[P]>
  }




  export type ShowCastGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShowCastWhereInput
    orderBy?: ShowCastOrderByWithAggregationInput | ShowCastOrderByWithAggregationInput[]
    by: ShowCastScalarFieldEnum[] | ShowCastScalarFieldEnum
    having?: ShowCastScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShowCastCountAggregateInputType | true
    _avg?: ShowCastAvgAggregateInputType
    _sum?: ShowCastSumAggregateInputType
    _min?: ShowCastMinAggregateInputType
    _max?: ShowCastMaxAggregateInputType
  }

  export type ShowCastGroupByOutputType = {
    show_id: number
    person_id: number
    character_name: string
    _count: ShowCastCountAggregateOutputType | null
    _avg: ShowCastAvgAggregateOutputType | null
    _sum: ShowCastSumAggregateOutputType | null
    _min: ShowCastMinAggregateOutputType | null
    _max: ShowCastMaxAggregateOutputType | null
  }

  type GetShowCastGroupByPayload<T extends ShowCastGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShowCastGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShowCastGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShowCastGroupByOutputType[P]>
            : GetScalarType<T[P], ShowCastGroupByOutputType[P]>
        }
      >
    >


  export type ShowCastSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    show_id?: boolean
    person_id?: boolean
    character_name?: boolean
    shows?: boolean | ShowsDefaultArgs<ExtArgs>
    cast?: boolean | CastDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["showCast"]>



  export type ShowCastSelectScalar = {
    show_id?: boolean
    person_id?: boolean
    character_name?: boolean
  }

  export type ShowCastOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"show_id" | "person_id" | "character_name", ExtArgs["result"]["showCast"]>
  export type ShowCastInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shows?: boolean | ShowsDefaultArgs<ExtArgs>
    cast?: boolean | CastDefaultArgs<ExtArgs>
  }

  export type $ShowCastPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ShowCast"
    objects: {
      shows: Prisma.$ShowsPayload<ExtArgs>
      cast: Prisma.$CastPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      show_id: number
      person_id: number
      character_name: string
    }, ExtArgs["result"]["showCast"]>
    composites: {}
  }

  type ShowCastGetPayload<S extends boolean | null | undefined | ShowCastDefaultArgs> = $Result.GetResult<Prisma.$ShowCastPayload, S>

  type ShowCastCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ShowCastFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ShowCastCountAggregateInputType | true
    }

  export interface ShowCastDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ShowCast'], meta: { name: 'ShowCast' } }
    /**
     * Find zero or one ShowCast that matches the filter.
     * @param {ShowCastFindUniqueArgs} args - Arguments to find a ShowCast
     * @example
     * // Get one ShowCast
     * const showCast = await prisma.showCast.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShowCastFindUniqueArgs>(args: SelectSubset<T, ShowCastFindUniqueArgs<ExtArgs>>): Prisma__ShowCastClient<$Result.GetResult<Prisma.$ShowCastPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ShowCast that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ShowCastFindUniqueOrThrowArgs} args - Arguments to find a ShowCast
     * @example
     * // Get one ShowCast
     * const showCast = await prisma.showCast.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShowCastFindUniqueOrThrowArgs>(args: SelectSubset<T, ShowCastFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ShowCastClient<$Result.GetResult<Prisma.$ShowCastPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShowCast that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowCastFindFirstArgs} args - Arguments to find a ShowCast
     * @example
     * // Get one ShowCast
     * const showCast = await prisma.showCast.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShowCastFindFirstArgs>(args?: SelectSubset<T, ShowCastFindFirstArgs<ExtArgs>>): Prisma__ShowCastClient<$Result.GetResult<Prisma.$ShowCastPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShowCast that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowCastFindFirstOrThrowArgs} args - Arguments to find a ShowCast
     * @example
     * // Get one ShowCast
     * const showCast = await prisma.showCast.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShowCastFindFirstOrThrowArgs>(args?: SelectSubset<T, ShowCastFindFirstOrThrowArgs<ExtArgs>>): Prisma__ShowCastClient<$Result.GetResult<Prisma.$ShowCastPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ShowCasts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowCastFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ShowCasts
     * const showCasts = await prisma.showCast.findMany()
     * 
     * // Get first 10 ShowCasts
     * const showCasts = await prisma.showCast.findMany({ take: 10 })
     * 
     * // Only select the `show_id`
     * const showCastWithShow_idOnly = await prisma.showCast.findMany({ select: { show_id: true } })
     * 
     */
    findMany<T extends ShowCastFindManyArgs>(args?: SelectSubset<T, ShowCastFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShowCastPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ShowCast.
     * @param {ShowCastCreateArgs} args - Arguments to create a ShowCast.
     * @example
     * // Create one ShowCast
     * const ShowCast = await prisma.showCast.create({
     *   data: {
     *     // ... data to create a ShowCast
     *   }
     * })
     * 
     */
    create<T extends ShowCastCreateArgs>(args: SelectSubset<T, ShowCastCreateArgs<ExtArgs>>): Prisma__ShowCastClient<$Result.GetResult<Prisma.$ShowCastPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ShowCasts.
     * @param {ShowCastCreateManyArgs} args - Arguments to create many ShowCasts.
     * @example
     * // Create many ShowCasts
     * const showCast = await prisma.showCast.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ShowCastCreateManyArgs>(args?: SelectSubset<T, ShowCastCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ShowCast.
     * @param {ShowCastDeleteArgs} args - Arguments to delete one ShowCast.
     * @example
     * // Delete one ShowCast
     * const ShowCast = await prisma.showCast.delete({
     *   where: {
     *     // ... filter to delete one ShowCast
     *   }
     * })
     * 
     */
    delete<T extends ShowCastDeleteArgs>(args: SelectSubset<T, ShowCastDeleteArgs<ExtArgs>>): Prisma__ShowCastClient<$Result.GetResult<Prisma.$ShowCastPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ShowCast.
     * @param {ShowCastUpdateArgs} args - Arguments to update one ShowCast.
     * @example
     * // Update one ShowCast
     * const showCast = await prisma.showCast.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ShowCastUpdateArgs>(args: SelectSubset<T, ShowCastUpdateArgs<ExtArgs>>): Prisma__ShowCastClient<$Result.GetResult<Prisma.$ShowCastPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ShowCasts.
     * @param {ShowCastDeleteManyArgs} args - Arguments to filter ShowCasts to delete.
     * @example
     * // Delete a few ShowCasts
     * const { count } = await prisma.showCast.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ShowCastDeleteManyArgs>(args?: SelectSubset<T, ShowCastDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShowCasts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowCastUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ShowCasts
     * const showCast = await prisma.showCast.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ShowCastUpdateManyArgs>(args: SelectSubset<T, ShowCastUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ShowCast.
     * @param {ShowCastUpsertArgs} args - Arguments to update or create a ShowCast.
     * @example
     * // Update or create a ShowCast
     * const showCast = await prisma.showCast.upsert({
     *   create: {
     *     // ... data to create a ShowCast
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ShowCast we want to update
     *   }
     * })
     */
    upsert<T extends ShowCastUpsertArgs>(args: SelectSubset<T, ShowCastUpsertArgs<ExtArgs>>): Prisma__ShowCastClient<$Result.GetResult<Prisma.$ShowCastPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ShowCasts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowCastCountArgs} args - Arguments to filter ShowCasts to count.
     * @example
     * // Count the number of ShowCasts
     * const count = await prisma.showCast.count({
     *   where: {
     *     // ... the filter for the ShowCasts we want to count
     *   }
     * })
    **/
    count<T extends ShowCastCountArgs>(
      args?: Subset<T, ShowCastCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShowCastCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ShowCast.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowCastAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ShowCastAggregateArgs>(args: Subset<T, ShowCastAggregateArgs>): Prisma.PrismaPromise<GetShowCastAggregateType<T>>

    /**
     * Group by ShowCast.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowCastGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ShowCastGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShowCastGroupByArgs['orderBy'] }
        : { orderBy?: ShowCastGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ShowCastGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShowCastGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ShowCast model
   */
  readonly fields: ShowCastFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ShowCast.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShowCastClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    shows<T extends ShowsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShowsDefaultArgs<ExtArgs>>): Prisma__ShowsClient<$Result.GetResult<Prisma.$ShowsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    cast<T extends CastDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CastDefaultArgs<ExtArgs>>): Prisma__CastClient<$Result.GetResult<Prisma.$CastPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ShowCast model
   */
  interface ShowCastFieldRefs {
    readonly show_id: FieldRef<"ShowCast", 'Int'>
    readonly person_id: FieldRef<"ShowCast", 'Int'>
    readonly character_name: FieldRef<"ShowCast", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ShowCast findUnique
   */
  export type ShowCastFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShowCast
     */
    select?: ShowCastSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShowCast
     */
    omit?: ShowCastOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowCastInclude<ExtArgs> | null
    /**
     * Filter, which ShowCast to fetch.
     */
    where: ShowCastWhereUniqueInput
  }

  /**
   * ShowCast findUniqueOrThrow
   */
  export type ShowCastFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShowCast
     */
    select?: ShowCastSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShowCast
     */
    omit?: ShowCastOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowCastInclude<ExtArgs> | null
    /**
     * Filter, which ShowCast to fetch.
     */
    where: ShowCastWhereUniqueInput
  }

  /**
   * ShowCast findFirst
   */
  export type ShowCastFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShowCast
     */
    select?: ShowCastSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShowCast
     */
    omit?: ShowCastOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowCastInclude<ExtArgs> | null
    /**
     * Filter, which ShowCast to fetch.
     */
    where?: ShowCastWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShowCasts to fetch.
     */
    orderBy?: ShowCastOrderByWithRelationInput | ShowCastOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShowCasts.
     */
    cursor?: ShowCastWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShowCasts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShowCasts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShowCasts.
     */
    distinct?: ShowCastScalarFieldEnum | ShowCastScalarFieldEnum[]
  }

  /**
   * ShowCast findFirstOrThrow
   */
  export type ShowCastFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShowCast
     */
    select?: ShowCastSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShowCast
     */
    omit?: ShowCastOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowCastInclude<ExtArgs> | null
    /**
     * Filter, which ShowCast to fetch.
     */
    where?: ShowCastWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShowCasts to fetch.
     */
    orderBy?: ShowCastOrderByWithRelationInput | ShowCastOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShowCasts.
     */
    cursor?: ShowCastWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShowCasts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShowCasts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShowCasts.
     */
    distinct?: ShowCastScalarFieldEnum | ShowCastScalarFieldEnum[]
  }

  /**
   * ShowCast findMany
   */
  export type ShowCastFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShowCast
     */
    select?: ShowCastSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShowCast
     */
    omit?: ShowCastOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowCastInclude<ExtArgs> | null
    /**
     * Filter, which ShowCasts to fetch.
     */
    where?: ShowCastWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShowCasts to fetch.
     */
    orderBy?: ShowCastOrderByWithRelationInput | ShowCastOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ShowCasts.
     */
    cursor?: ShowCastWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShowCasts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShowCasts.
     */
    skip?: number
    distinct?: ShowCastScalarFieldEnum | ShowCastScalarFieldEnum[]
  }

  /**
   * ShowCast create
   */
  export type ShowCastCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShowCast
     */
    select?: ShowCastSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShowCast
     */
    omit?: ShowCastOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowCastInclude<ExtArgs> | null
    /**
     * The data needed to create a ShowCast.
     */
    data: XOR<ShowCastCreateInput, ShowCastUncheckedCreateInput>
  }

  /**
   * ShowCast createMany
   */
  export type ShowCastCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ShowCasts.
     */
    data: ShowCastCreateManyInput | ShowCastCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ShowCast update
   */
  export type ShowCastUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShowCast
     */
    select?: ShowCastSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShowCast
     */
    omit?: ShowCastOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowCastInclude<ExtArgs> | null
    /**
     * The data needed to update a ShowCast.
     */
    data: XOR<ShowCastUpdateInput, ShowCastUncheckedUpdateInput>
    /**
     * Choose, which ShowCast to update.
     */
    where: ShowCastWhereUniqueInput
  }

  /**
   * ShowCast updateMany
   */
  export type ShowCastUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ShowCasts.
     */
    data: XOR<ShowCastUpdateManyMutationInput, ShowCastUncheckedUpdateManyInput>
    /**
     * Filter which ShowCasts to update
     */
    where?: ShowCastWhereInput
    /**
     * Limit how many ShowCasts to update.
     */
    limit?: number
  }

  /**
   * ShowCast upsert
   */
  export type ShowCastUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShowCast
     */
    select?: ShowCastSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShowCast
     */
    omit?: ShowCastOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowCastInclude<ExtArgs> | null
    /**
     * The filter to search for the ShowCast to update in case it exists.
     */
    where: ShowCastWhereUniqueInput
    /**
     * In case the ShowCast found by the `where` argument doesn't exist, create a new ShowCast with this data.
     */
    create: XOR<ShowCastCreateInput, ShowCastUncheckedCreateInput>
    /**
     * In case the ShowCast was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShowCastUpdateInput, ShowCastUncheckedUpdateInput>
  }

  /**
   * ShowCast delete
   */
  export type ShowCastDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShowCast
     */
    select?: ShowCastSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShowCast
     */
    omit?: ShowCastOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowCastInclude<ExtArgs> | null
    /**
     * Filter which ShowCast to delete.
     */
    where: ShowCastWhereUniqueInput
  }

  /**
   * ShowCast deleteMany
   */
  export type ShowCastDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShowCasts to delete
     */
    where?: ShowCastWhereInput
    /**
     * Limit how many ShowCasts to delete.
     */
    limit?: number
  }

  /**
   * ShowCast without action
   */
  export type ShowCastDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShowCast
     */
    select?: ShowCastSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShowCast
     */
    omit?: ShowCastOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowCastInclude<ExtArgs> | null
  }


  /**
   * Model Platforms
   */

  export type AggregatePlatforms = {
    _count: PlatformsCountAggregateOutputType | null
    _avg: PlatformsAvgAggregateOutputType | null
    _sum: PlatformsSumAggregateOutputType | null
    _min: PlatformsMinAggregateOutputType | null
    _max: PlatformsMaxAggregateOutputType | null
  }

  export type PlatformsAvgAggregateOutputType = {
    id: number | null
  }

  export type PlatformsSumAggregateOutputType = {
    id: number | null
  }

  export type PlatformsMinAggregateOutputType = {
    id: number | null
    name: string | null
    type: string | null
    country_code: string | null
  }

  export type PlatformsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    type: string | null
    country_code: string | null
  }

  export type PlatformsCountAggregateOutputType = {
    id: number
    name: number
    type: number
    country_code: number
    _all: number
  }


  export type PlatformsAvgAggregateInputType = {
    id?: true
  }

  export type PlatformsSumAggregateInputType = {
    id?: true
  }

  export type PlatformsMinAggregateInputType = {
    id?: true
    name?: true
    type?: true
    country_code?: true
  }

  export type PlatformsMaxAggregateInputType = {
    id?: true
    name?: true
    type?: true
    country_code?: true
  }

  export type PlatformsCountAggregateInputType = {
    id?: true
    name?: true
    type?: true
    country_code?: true
    _all?: true
  }

  export type PlatformsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Platforms to aggregate.
     */
    where?: PlatformsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Platforms to fetch.
     */
    orderBy?: PlatformsOrderByWithRelationInput | PlatformsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlatformsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Platforms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Platforms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Platforms
    **/
    _count?: true | PlatformsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlatformsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlatformsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlatformsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlatformsMaxAggregateInputType
  }

  export type GetPlatformsAggregateType<T extends PlatformsAggregateArgs> = {
        [P in keyof T & keyof AggregatePlatforms]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlatforms[P]>
      : GetScalarType<T[P], AggregatePlatforms[P]>
  }




  export type PlatformsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlatformsWhereInput
    orderBy?: PlatformsOrderByWithAggregationInput | PlatformsOrderByWithAggregationInput[]
    by: PlatformsScalarFieldEnum[] | PlatformsScalarFieldEnum
    having?: PlatformsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlatformsCountAggregateInputType | true
    _avg?: PlatformsAvgAggregateInputType
    _sum?: PlatformsSumAggregateInputType
    _min?: PlatformsMinAggregateInputType
    _max?: PlatformsMaxAggregateInputType
  }

  export type PlatformsGroupByOutputType = {
    id: number
    name: string
    type: string
    country_code: string | null
    _count: PlatformsCountAggregateOutputType | null
    _avg: PlatformsAvgAggregateOutputType | null
    _sum: PlatformsSumAggregateOutputType | null
    _min: PlatformsMinAggregateOutputType | null
    _max: PlatformsMaxAggregateOutputType | null
  }

  type GetPlatformsGroupByPayload<T extends PlatformsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlatformsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlatformsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlatformsGroupByOutputType[P]>
            : GetScalarType<T[P], PlatformsGroupByOutputType[P]>
        }
      >
    >


  export type PlatformsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    country_code?: boolean
    seriesPlatforms?: boolean | Platforms$seriesPlatformsArgs<ExtArgs>
    _count?: boolean | PlatformsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["platforms"]>



  export type PlatformsSelectScalar = {
    id?: boolean
    name?: boolean
    type?: boolean
    country_code?: boolean
  }

  export type PlatformsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "type" | "country_code", ExtArgs["result"]["platforms"]>
  export type PlatformsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    seriesPlatforms?: boolean | Platforms$seriesPlatformsArgs<ExtArgs>
    _count?: boolean | PlatformsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $PlatformsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Platforms"
    objects: {
      seriesPlatforms: Prisma.$SeriesPlatformsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      type: string
      country_code: string | null
    }, ExtArgs["result"]["platforms"]>
    composites: {}
  }

  type PlatformsGetPayload<S extends boolean | null | undefined | PlatformsDefaultArgs> = $Result.GetResult<Prisma.$PlatformsPayload, S>

  type PlatformsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlatformsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlatformsCountAggregateInputType | true
    }

  export interface PlatformsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Platforms'], meta: { name: 'Platforms' } }
    /**
     * Find zero or one Platforms that matches the filter.
     * @param {PlatformsFindUniqueArgs} args - Arguments to find a Platforms
     * @example
     * // Get one Platforms
     * const platforms = await prisma.platforms.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlatformsFindUniqueArgs>(args: SelectSubset<T, PlatformsFindUniqueArgs<ExtArgs>>): Prisma__PlatformsClient<$Result.GetResult<Prisma.$PlatformsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Platforms that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlatformsFindUniqueOrThrowArgs} args - Arguments to find a Platforms
     * @example
     * // Get one Platforms
     * const platforms = await prisma.platforms.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlatformsFindUniqueOrThrowArgs>(args: SelectSubset<T, PlatformsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlatformsClient<$Result.GetResult<Prisma.$PlatformsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Platforms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatformsFindFirstArgs} args - Arguments to find a Platforms
     * @example
     * // Get one Platforms
     * const platforms = await prisma.platforms.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlatformsFindFirstArgs>(args?: SelectSubset<T, PlatformsFindFirstArgs<ExtArgs>>): Prisma__PlatformsClient<$Result.GetResult<Prisma.$PlatformsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Platforms that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatformsFindFirstOrThrowArgs} args - Arguments to find a Platforms
     * @example
     * // Get one Platforms
     * const platforms = await prisma.platforms.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlatformsFindFirstOrThrowArgs>(args?: SelectSubset<T, PlatformsFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlatformsClient<$Result.GetResult<Prisma.$PlatformsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Platforms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatformsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Platforms
     * const platforms = await prisma.platforms.findMany()
     * 
     * // Get first 10 Platforms
     * const platforms = await prisma.platforms.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const platformsWithIdOnly = await prisma.platforms.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlatformsFindManyArgs>(args?: SelectSubset<T, PlatformsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlatformsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Platforms.
     * @param {PlatformsCreateArgs} args - Arguments to create a Platforms.
     * @example
     * // Create one Platforms
     * const Platforms = await prisma.platforms.create({
     *   data: {
     *     // ... data to create a Platforms
     *   }
     * })
     * 
     */
    create<T extends PlatformsCreateArgs>(args: SelectSubset<T, PlatformsCreateArgs<ExtArgs>>): Prisma__PlatformsClient<$Result.GetResult<Prisma.$PlatformsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Platforms.
     * @param {PlatformsCreateManyArgs} args - Arguments to create many Platforms.
     * @example
     * // Create many Platforms
     * const platforms = await prisma.platforms.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlatformsCreateManyArgs>(args?: SelectSubset<T, PlatformsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Platforms.
     * @param {PlatformsDeleteArgs} args - Arguments to delete one Platforms.
     * @example
     * // Delete one Platforms
     * const Platforms = await prisma.platforms.delete({
     *   where: {
     *     // ... filter to delete one Platforms
     *   }
     * })
     * 
     */
    delete<T extends PlatformsDeleteArgs>(args: SelectSubset<T, PlatformsDeleteArgs<ExtArgs>>): Prisma__PlatformsClient<$Result.GetResult<Prisma.$PlatformsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Platforms.
     * @param {PlatformsUpdateArgs} args - Arguments to update one Platforms.
     * @example
     * // Update one Platforms
     * const platforms = await prisma.platforms.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlatformsUpdateArgs>(args: SelectSubset<T, PlatformsUpdateArgs<ExtArgs>>): Prisma__PlatformsClient<$Result.GetResult<Prisma.$PlatformsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Platforms.
     * @param {PlatformsDeleteManyArgs} args - Arguments to filter Platforms to delete.
     * @example
     * // Delete a few Platforms
     * const { count } = await prisma.platforms.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlatformsDeleteManyArgs>(args?: SelectSubset<T, PlatformsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Platforms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatformsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Platforms
     * const platforms = await prisma.platforms.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlatformsUpdateManyArgs>(args: SelectSubset<T, PlatformsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Platforms.
     * @param {PlatformsUpsertArgs} args - Arguments to update or create a Platforms.
     * @example
     * // Update or create a Platforms
     * const platforms = await prisma.platforms.upsert({
     *   create: {
     *     // ... data to create a Platforms
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Platforms we want to update
     *   }
     * })
     */
    upsert<T extends PlatformsUpsertArgs>(args: SelectSubset<T, PlatformsUpsertArgs<ExtArgs>>): Prisma__PlatformsClient<$Result.GetResult<Prisma.$PlatformsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Platforms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatformsCountArgs} args - Arguments to filter Platforms to count.
     * @example
     * // Count the number of Platforms
     * const count = await prisma.platforms.count({
     *   where: {
     *     // ... the filter for the Platforms we want to count
     *   }
     * })
    **/
    count<T extends PlatformsCountArgs>(
      args?: Subset<T, PlatformsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlatformsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Platforms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatformsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PlatformsAggregateArgs>(args: Subset<T, PlatformsAggregateArgs>): Prisma.PrismaPromise<GetPlatformsAggregateType<T>>

    /**
     * Group by Platforms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatformsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PlatformsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlatformsGroupByArgs['orderBy'] }
        : { orderBy?: PlatformsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PlatformsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlatformsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Platforms model
   */
  readonly fields: PlatformsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Platforms.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlatformsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    seriesPlatforms<T extends Platforms$seriesPlatformsArgs<ExtArgs> = {}>(args?: Subset<T, Platforms$seriesPlatformsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeriesPlatformsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Platforms model
   */
  interface PlatformsFieldRefs {
    readonly id: FieldRef<"Platforms", 'Int'>
    readonly name: FieldRef<"Platforms", 'String'>
    readonly type: FieldRef<"Platforms", 'String'>
    readonly country_code: FieldRef<"Platforms", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Platforms findUnique
   */
  export type PlatformsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Platforms
     */
    select?: PlatformsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Platforms
     */
    omit?: PlatformsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatformsInclude<ExtArgs> | null
    /**
     * Filter, which Platforms to fetch.
     */
    where: PlatformsWhereUniqueInput
  }

  /**
   * Platforms findUniqueOrThrow
   */
  export type PlatformsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Platforms
     */
    select?: PlatformsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Platforms
     */
    omit?: PlatformsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatformsInclude<ExtArgs> | null
    /**
     * Filter, which Platforms to fetch.
     */
    where: PlatformsWhereUniqueInput
  }

  /**
   * Platforms findFirst
   */
  export type PlatformsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Platforms
     */
    select?: PlatformsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Platforms
     */
    omit?: PlatformsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatformsInclude<ExtArgs> | null
    /**
     * Filter, which Platforms to fetch.
     */
    where?: PlatformsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Platforms to fetch.
     */
    orderBy?: PlatformsOrderByWithRelationInput | PlatformsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Platforms.
     */
    cursor?: PlatformsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Platforms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Platforms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Platforms.
     */
    distinct?: PlatformsScalarFieldEnum | PlatformsScalarFieldEnum[]
  }

  /**
   * Platforms findFirstOrThrow
   */
  export type PlatformsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Platforms
     */
    select?: PlatformsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Platforms
     */
    omit?: PlatformsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatformsInclude<ExtArgs> | null
    /**
     * Filter, which Platforms to fetch.
     */
    where?: PlatformsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Platforms to fetch.
     */
    orderBy?: PlatformsOrderByWithRelationInput | PlatformsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Platforms.
     */
    cursor?: PlatformsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Platforms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Platforms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Platforms.
     */
    distinct?: PlatformsScalarFieldEnum | PlatformsScalarFieldEnum[]
  }

  /**
   * Platforms findMany
   */
  export type PlatformsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Platforms
     */
    select?: PlatformsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Platforms
     */
    omit?: PlatformsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatformsInclude<ExtArgs> | null
    /**
     * Filter, which Platforms to fetch.
     */
    where?: PlatformsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Platforms to fetch.
     */
    orderBy?: PlatformsOrderByWithRelationInput | PlatformsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Platforms.
     */
    cursor?: PlatformsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Platforms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Platforms.
     */
    skip?: number
    distinct?: PlatformsScalarFieldEnum | PlatformsScalarFieldEnum[]
  }

  /**
   * Platforms create
   */
  export type PlatformsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Platforms
     */
    select?: PlatformsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Platforms
     */
    omit?: PlatformsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatformsInclude<ExtArgs> | null
    /**
     * The data needed to create a Platforms.
     */
    data: XOR<PlatformsCreateInput, PlatformsUncheckedCreateInput>
  }

  /**
   * Platforms createMany
   */
  export type PlatformsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Platforms.
     */
    data: PlatformsCreateManyInput | PlatformsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Platforms update
   */
  export type PlatformsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Platforms
     */
    select?: PlatformsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Platforms
     */
    omit?: PlatformsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatformsInclude<ExtArgs> | null
    /**
     * The data needed to update a Platforms.
     */
    data: XOR<PlatformsUpdateInput, PlatformsUncheckedUpdateInput>
    /**
     * Choose, which Platforms to update.
     */
    where: PlatformsWhereUniqueInput
  }

  /**
   * Platforms updateMany
   */
  export type PlatformsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Platforms.
     */
    data: XOR<PlatformsUpdateManyMutationInput, PlatformsUncheckedUpdateManyInput>
    /**
     * Filter which Platforms to update
     */
    where?: PlatformsWhereInput
    /**
     * Limit how many Platforms to update.
     */
    limit?: number
  }

  /**
   * Platforms upsert
   */
  export type PlatformsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Platforms
     */
    select?: PlatformsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Platforms
     */
    omit?: PlatformsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatformsInclude<ExtArgs> | null
    /**
     * The filter to search for the Platforms to update in case it exists.
     */
    where: PlatformsWhereUniqueInput
    /**
     * In case the Platforms found by the `where` argument doesn't exist, create a new Platforms with this data.
     */
    create: XOR<PlatformsCreateInput, PlatformsUncheckedCreateInput>
    /**
     * In case the Platforms was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlatformsUpdateInput, PlatformsUncheckedUpdateInput>
  }

  /**
   * Platforms delete
   */
  export type PlatformsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Platforms
     */
    select?: PlatformsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Platforms
     */
    omit?: PlatformsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatformsInclude<ExtArgs> | null
    /**
     * Filter which Platforms to delete.
     */
    where: PlatformsWhereUniqueInput
  }

  /**
   * Platforms deleteMany
   */
  export type PlatformsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Platforms to delete
     */
    where?: PlatformsWhereInput
    /**
     * Limit how many Platforms to delete.
     */
    limit?: number
  }

  /**
   * Platforms.seriesPlatforms
   */
  export type Platforms$seriesPlatformsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeriesPlatforms
     */
    select?: SeriesPlatformsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeriesPlatforms
     */
    omit?: SeriesPlatformsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeriesPlatformsInclude<ExtArgs> | null
    where?: SeriesPlatformsWhereInput
    orderBy?: SeriesPlatformsOrderByWithRelationInput | SeriesPlatformsOrderByWithRelationInput[]
    cursor?: SeriesPlatformsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SeriesPlatformsScalarFieldEnum | SeriesPlatformsScalarFieldEnum[]
  }

  /**
   * Platforms without action
   */
  export type PlatformsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Platforms
     */
    select?: PlatformsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Platforms
     */
    omit?: PlatformsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatformsInclude<ExtArgs> | null
  }


  /**
   * Model SeriesPlatforms
   */

  export type AggregateSeriesPlatforms = {
    _count: SeriesPlatformsCountAggregateOutputType | null
    _avg: SeriesPlatformsAvgAggregateOutputType | null
    _sum: SeriesPlatformsSumAggregateOutputType | null
    _min: SeriesPlatformsMinAggregateOutputType | null
    _max: SeriesPlatformsMaxAggregateOutputType | null
  }

  export type SeriesPlatformsAvgAggregateOutputType = {
    id_show: number | null
    id_platform: number | null
  }

  export type SeriesPlatformsSumAggregateOutputType = {
    id_show: number | null
    id_platform: number | null
  }

  export type SeriesPlatformsMinAggregateOutputType = {
    id_show: number | null
    id_platform: number | null
  }

  export type SeriesPlatformsMaxAggregateOutputType = {
    id_show: number | null
    id_platform: number | null
  }

  export type SeriesPlatformsCountAggregateOutputType = {
    id_show: number
    id_platform: number
    _all: number
  }


  export type SeriesPlatformsAvgAggregateInputType = {
    id_show?: true
    id_platform?: true
  }

  export type SeriesPlatformsSumAggregateInputType = {
    id_show?: true
    id_platform?: true
  }

  export type SeriesPlatformsMinAggregateInputType = {
    id_show?: true
    id_platform?: true
  }

  export type SeriesPlatformsMaxAggregateInputType = {
    id_show?: true
    id_platform?: true
  }

  export type SeriesPlatformsCountAggregateInputType = {
    id_show?: true
    id_platform?: true
    _all?: true
  }

  export type SeriesPlatformsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SeriesPlatforms to aggregate.
     */
    where?: SeriesPlatformsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SeriesPlatforms to fetch.
     */
    orderBy?: SeriesPlatformsOrderByWithRelationInput | SeriesPlatformsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SeriesPlatformsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SeriesPlatforms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SeriesPlatforms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SeriesPlatforms
    **/
    _count?: true | SeriesPlatformsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SeriesPlatformsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SeriesPlatformsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SeriesPlatformsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SeriesPlatformsMaxAggregateInputType
  }

  export type GetSeriesPlatformsAggregateType<T extends SeriesPlatformsAggregateArgs> = {
        [P in keyof T & keyof AggregateSeriesPlatforms]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSeriesPlatforms[P]>
      : GetScalarType<T[P], AggregateSeriesPlatforms[P]>
  }




  export type SeriesPlatformsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SeriesPlatformsWhereInput
    orderBy?: SeriesPlatformsOrderByWithAggregationInput | SeriesPlatformsOrderByWithAggregationInput[]
    by: SeriesPlatformsScalarFieldEnum[] | SeriesPlatformsScalarFieldEnum
    having?: SeriesPlatformsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SeriesPlatformsCountAggregateInputType | true
    _avg?: SeriesPlatformsAvgAggregateInputType
    _sum?: SeriesPlatformsSumAggregateInputType
    _min?: SeriesPlatformsMinAggregateInputType
    _max?: SeriesPlatformsMaxAggregateInputType
  }

  export type SeriesPlatformsGroupByOutputType = {
    id_show: number
    id_platform: number
    _count: SeriesPlatformsCountAggregateOutputType | null
    _avg: SeriesPlatformsAvgAggregateOutputType | null
    _sum: SeriesPlatformsSumAggregateOutputType | null
    _min: SeriesPlatformsMinAggregateOutputType | null
    _max: SeriesPlatformsMaxAggregateOutputType | null
  }

  type GetSeriesPlatformsGroupByPayload<T extends SeriesPlatformsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SeriesPlatformsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SeriesPlatformsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SeriesPlatformsGroupByOutputType[P]>
            : GetScalarType<T[P], SeriesPlatformsGroupByOutputType[P]>
        }
      >
    >


  export type SeriesPlatformsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_show?: boolean
    id_platform?: boolean
    platforms?: boolean | PlatformsDefaultArgs<ExtArgs>
    shows?: boolean | ShowsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["seriesPlatforms"]>



  export type SeriesPlatformsSelectScalar = {
    id_show?: boolean
    id_platform?: boolean
  }

  export type SeriesPlatformsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_show" | "id_platform", ExtArgs["result"]["seriesPlatforms"]>
  export type SeriesPlatformsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    platforms?: boolean | PlatformsDefaultArgs<ExtArgs>
    shows?: boolean | ShowsDefaultArgs<ExtArgs>
  }

  export type $SeriesPlatformsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SeriesPlatforms"
    objects: {
      platforms: Prisma.$PlatformsPayload<ExtArgs>
      shows: Prisma.$ShowsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_show: number
      id_platform: number
    }, ExtArgs["result"]["seriesPlatforms"]>
    composites: {}
  }

  type SeriesPlatformsGetPayload<S extends boolean | null | undefined | SeriesPlatformsDefaultArgs> = $Result.GetResult<Prisma.$SeriesPlatformsPayload, S>

  type SeriesPlatformsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SeriesPlatformsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SeriesPlatformsCountAggregateInputType | true
    }

  export interface SeriesPlatformsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SeriesPlatforms'], meta: { name: 'SeriesPlatforms' } }
    /**
     * Find zero or one SeriesPlatforms that matches the filter.
     * @param {SeriesPlatformsFindUniqueArgs} args - Arguments to find a SeriesPlatforms
     * @example
     * // Get one SeriesPlatforms
     * const seriesPlatforms = await prisma.seriesPlatforms.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SeriesPlatformsFindUniqueArgs>(args: SelectSubset<T, SeriesPlatformsFindUniqueArgs<ExtArgs>>): Prisma__SeriesPlatformsClient<$Result.GetResult<Prisma.$SeriesPlatformsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SeriesPlatforms that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SeriesPlatformsFindUniqueOrThrowArgs} args - Arguments to find a SeriesPlatforms
     * @example
     * // Get one SeriesPlatforms
     * const seriesPlatforms = await prisma.seriesPlatforms.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SeriesPlatformsFindUniqueOrThrowArgs>(args: SelectSubset<T, SeriesPlatformsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SeriesPlatformsClient<$Result.GetResult<Prisma.$SeriesPlatformsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SeriesPlatforms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeriesPlatformsFindFirstArgs} args - Arguments to find a SeriesPlatforms
     * @example
     * // Get one SeriesPlatforms
     * const seriesPlatforms = await prisma.seriesPlatforms.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SeriesPlatformsFindFirstArgs>(args?: SelectSubset<T, SeriesPlatformsFindFirstArgs<ExtArgs>>): Prisma__SeriesPlatformsClient<$Result.GetResult<Prisma.$SeriesPlatformsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SeriesPlatforms that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeriesPlatformsFindFirstOrThrowArgs} args - Arguments to find a SeriesPlatforms
     * @example
     * // Get one SeriesPlatforms
     * const seriesPlatforms = await prisma.seriesPlatforms.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SeriesPlatformsFindFirstOrThrowArgs>(args?: SelectSubset<T, SeriesPlatformsFindFirstOrThrowArgs<ExtArgs>>): Prisma__SeriesPlatformsClient<$Result.GetResult<Prisma.$SeriesPlatformsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SeriesPlatforms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeriesPlatformsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SeriesPlatforms
     * const seriesPlatforms = await prisma.seriesPlatforms.findMany()
     * 
     * // Get first 10 SeriesPlatforms
     * const seriesPlatforms = await prisma.seriesPlatforms.findMany({ take: 10 })
     * 
     * // Only select the `id_show`
     * const seriesPlatformsWithId_showOnly = await prisma.seriesPlatforms.findMany({ select: { id_show: true } })
     * 
     */
    findMany<T extends SeriesPlatformsFindManyArgs>(args?: SelectSubset<T, SeriesPlatformsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeriesPlatformsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SeriesPlatforms.
     * @param {SeriesPlatformsCreateArgs} args - Arguments to create a SeriesPlatforms.
     * @example
     * // Create one SeriesPlatforms
     * const SeriesPlatforms = await prisma.seriesPlatforms.create({
     *   data: {
     *     // ... data to create a SeriesPlatforms
     *   }
     * })
     * 
     */
    create<T extends SeriesPlatformsCreateArgs>(args: SelectSubset<T, SeriesPlatformsCreateArgs<ExtArgs>>): Prisma__SeriesPlatformsClient<$Result.GetResult<Prisma.$SeriesPlatformsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SeriesPlatforms.
     * @param {SeriesPlatformsCreateManyArgs} args - Arguments to create many SeriesPlatforms.
     * @example
     * // Create many SeriesPlatforms
     * const seriesPlatforms = await prisma.seriesPlatforms.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SeriesPlatformsCreateManyArgs>(args?: SelectSubset<T, SeriesPlatformsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SeriesPlatforms.
     * @param {SeriesPlatformsDeleteArgs} args - Arguments to delete one SeriesPlatforms.
     * @example
     * // Delete one SeriesPlatforms
     * const SeriesPlatforms = await prisma.seriesPlatforms.delete({
     *   where: {
     *     // ... filter to delete one SeriesPlatforms
     *   }
     * })
     * 
     */
    delete<T extends SeriesPlatformsDeleteArgs>(args: SelectSubset<T, SeriesPlatformsDeleteArgs<ExtArgs>>): Prisma__SeriesPlatformsClient<$Result.GetResult<Prisma.$SeriesPlatformsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SeriesPlatforms.
     * @param {SeriesPlatformsUpdateArgs} args - Arguments to update one SeriesPlatforms.
     * @example
     * // Update one SeriesPlatforms
     * const seriesPlatforms = await prisma.seriesPlatforms.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SeriesPlatformsUpdateArgs>(args: SelectSubset<T, SeriesPlatformsUpdateArgs<ExtArgs>>): Prisma__SeriesPlatformsClient<$Result.GetResult<Prisma.$SeriesPlatformsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SeriesPlatforms.
     * @param {SeriesPlatformsDeleteManyArgs} args - Arguments to filter SeriesPlatforms to delete.
     * @example
     * // Delete a few SeriesPlatforms
     * const { count } = await prisma.seriesPlatforms.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SeriesPlatformsDeleteManyArgs>(args?: SelectSubset<T, SeriesPlatformsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SeriesPlatforms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeriesPlatformsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SeriesPlatforms
     * const seriesPlatforms = await prisma.seriesPlatforms.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SeriesPlatformsUpdateManyArgs>(args: SelectSubset<T, SeriesPlatformsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SeriesPlatforms.
     * @param {SeriesPlatformsUpsertArgs} args - Arguments to update or create a SeriesPlatforms.
     * @example
     * // Update or create a SeriesPlatforms
     * const seriesPlatforms = await prisma.seriesPlatforms.upsert({
     *   create: {
     *     // ... data to create a SeriesPlatforms
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SeriesPlatforms we want to update
     *   }
     * })
     */
    upsert<T extends SeriesPlatformsUpsertArgs>(args: SelectSubset<T, SeriesPlatformsUpsertArgs<ExtArgs>>): Prisma__SeriesPlatformsClient<$Result.GetResult<Prisma.$SeriesPlatformsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SeriesPlatforms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeriesPlatformsCountArgs} args - Arguments to filter SeriesPlatforms to count.
     * @example
     * // Count the number of SeriesPlatforms
     * const count = await prisma.seriesPlatforms.count({
     *   where: {
     *     // ... the filter for the SeriesPlatforms we want to count
     *   }
     * })
    **/
    count<T extends SeriesPlatformsCountArgs>(
      args?: Subset<T, SeriesPlatformsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SeriesPlatformsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SeriesPlatforms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeriesPlatformsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SeriesPlatformsAggregateArgs>(args: Subset<T, SeriesPlatformsAggregateArgs>): Prisma.PrismaPromise<GetSeriesPlatformsAggregateType<T>>

    /**
     * Group by SeriesPlatforms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeriesPlatformsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SeriesPlatformsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SeriesPlatformsGroupByArgs['orderBy'] }
        : { orderBy?: SeriesPlatformsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SeriesPlatformsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSeriesPlatformsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SeriesPlatforms model
   */
  readonly fields: SeriesPlatformsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SeriesPlatforms.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SeriesPlatformsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    platforms<T extends PlatformsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlatformsDefaultArgs<ExtArgs>>): Prisma__PlatformsClient<$Result.GetResult<Prisma.$PlatformsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    shows<T extends ShowsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShowsDefaultArgs<ExtArgs>>): Prisma__ShowsClient<$Result.GetResult<Prisma.$ShowsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SeriesPlatforms model
   */
  interface SeriesPlatformsFieldRefs {
    readonly id_show: FieldRef<"SeriesPlatforms", 'Int'>
    readonly id_platform: FieldRef<"SeriesPlatforms", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * SeriesPlatforms findUnique
   */
  export type SeriesPlatformsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeriesPlatforms
     */
    select?: SeriesPlatformsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeriesPlatforms
     */
    omit?: SeriesPlatformsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeriesPlatformsInclude<ExtArgs> | null
    /**
     * Filter, which SeriesPlatforms to fetch.
     */
    where: SeriesPlatformsWhereUniqueInput
  }

  /**
   * SeriesPlatforms findUniqueOrThrow
   */
  export type SeriesPlatformsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeriesPlatforms
     */
    select?: SeriesPlatformsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeriesPlatforms
     */
    omit?: SeriesPlatformsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeriesPlatformsInclude<ExtArgs> | null
    /**
     * Filter, which SeriesPlatforms to fetch.
     */
    where: SeriesPlatformsWhereUniqueInput
  }

  /**
   * SeriesPlatforms findFirst
   */
  export type SeriesPlatformsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeriesPlatforms
     */
    select?: SeriesPlatformsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeriesPlatforms
     */
    omit?: SeriesPlatformsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeriesPlatformsInclude<ExtArgs> | null
    /**
     * Filter, which SeriesPlatforms to fetch.
     */
    where?: SeriesPlatformsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SeriesPlatforms to fetch.
     */
    orderBy?: SeriesPlatformsOrderByWithRelationInput | SeriesPlatformsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SeriesPlatforms.
     */
    cursor?: SeriesPlatformsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SeriesPlatforms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SeriesPlatforms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SeriesPlatforms.
     */
    distinct?: SeriesPlatformsScalarFieldEnum | SeriesPlatformsScalarFieldEnum[]
  }

  /**
   * SeriesPlatforms findFirstOrThrow
   */
  export type SeriesPlatformsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeriesPlatforms
     */
    select?: SeriesPlatformsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeriesPlatforms
     */
    omit?: SeriesPlatformsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeriesPlatformsInclude<ExtArgs> | null
    /**
     * Filter, which SeriesPlatforms to fetch.
     */
    where?: SeriesPlatformsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SeriesPlatforms to fetch.
     */
    orderBy?: SeriesPlatformsOrderByWithRelationInput | SeriesPlatformsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SeriesPlatforms.
     */
    cursor?: SeriesPlatformsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SeriesPlatforms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SeriesPlatforms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SeriesPlatforms.
     */
    distinct?: SeriesPlatformsScalarFieldEnum | SeriesPlatformsScalarFieldEnum[]
  }

  /**
   * SeriesPlatforms findMany
   */
  export type SeriesPlatformsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeriesPlatforms
     */
    select?: SeriesPlatformsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeriesPlatforms
     */
    omit?: SeriesPlatformsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeriesPlatformsInclude<ExtArgs> | null
    /**
     * Filter, which SeriesPlatforms to fetch.
     */
    where?: SeriesPlatformsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SeriesPlatforms to fetch.
     */
    orderBy?: SeriesPlatformsOrderByWithRelationInput | SeriesPlatformsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SeriesPlatforms.
     */
    cursor?: SeriesPlatformsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SeriesPlatforms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SeriesPlatforms.
     */
    skip?: number
    distinct?: SeriesPlatformsScalarFieldEnum | SeriesPlatformsScalarFieldEnum[]
  }

  /**
   * SeriesPlatforms create
   */
  export type SeriesPlatformsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeriesPlatforms
     */
    select?: SeriesPlatformsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeriesPlatforms
     */
    omit?: SeriesPlatformsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeriesPlatformsInclude<ExtArgs> | null
    /**
     * The data needed to create a SeriesPlatforms.
     */
    data: XOR<SeriesPlatformsCreateInput, SeriesPlatformsUncheckedCreateInput>
  }

  /**
   * SeriesPlatforms createMany
   */
  export type SeriesPlatformsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SeriesPlatforms.
     */
    data: SeriesPlatformsCreateManyInput | SeriesPlatformsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SeriesPlatforms update
   */
  export type SeriesPlatformsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeriesPlatforms
     */
    select?: SeriesPlatformsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeriesPlatforms
     */
    omit?: SeriesPlatformsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeriesPlatformsInclude<ExtArgs> | null
    /**
     * The data needed to update a SeriesPlatforms.
     */
    data: XOR<SeriesPlatformsUpdateInput, SeriesPlatformsUncheckedUpdateInput>
    /**
     * Choose, which SeriesPlatforms to update.
     */
    where: SeriesPlatformsWhereUniqueInput
  }

  /**
   * SeriesPlatforms updateMany
   */
  export type SeriesPlatformsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SeriesPlatforms.
     */
    data: XOR<SeriesPlatformsUpdateManyMutationInput, SeriesPlatformsUncheckedUpdateManyInput>
    /**
     * Filter which SeriesPlatforms to update
     */
    where?: SeriesPlatformsWhereInput
    /**
     * Limit how many SeriesPlatforms to update.
     */
    limit?: number
  }

  /**
   * SeriesPlatforms upsert
   */
  export type SeriesPlatformsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeriesPlatforms
     */
    select?: SeriesPlatformsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeriesPlatforms
     */
    omit?: SeriesPlatformsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeriesPlatformsInclude<ExtArgs> | null
    /**
     * The filter to search for the SeriesPlatforms to update in case it exists.
     */
    where: SeriesPlatformsWhereUniqueInput
    /**
     * In case the SeriesPlatforms found by the `where` argument doesn't exist, create a new SeriesPlatforms with this data.
     */
    create: XOR<SeriesPlatformsCreateInput, SeriesPlatformsUncheckedCreateInput>
    /**
     * In case the SeriesPlatforms was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SeriesPlatformsUpdateInput, SeriesPlatformsUncheckedUpdateInput>
  }

  /**
   * SeriesPlatforms delete
   */
  export type SeriesPlatformsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeriesPlatforms
     */
    select?: SeriesPlatformsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeriesPlatforms
     */
    omit?: SeriesPlatformsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeriesPlatformsInclude<ExtArgs> | null
    /**
     * Filter which SeriesPlatforms to delete.
     */
    where: SeriesPlatformsWhereUniqueInput
  }

  /**
   * SeriesPlatforms deleteMany
   */
  export type SeriesPlatformsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SeriesPlatforms to delete
     */
    where?: SeriesPlatformsWhereInput
    /**
     * Limit how many SeriesPlatforms to delete.
     */
    limit?: number
  }

  /**
   * SeriesPlatforms without action
   */
  export type SeriesPlatformsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeriesPlatforms
     */
    select?: SeriesPlatformsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeriesPlatforms
     */
    omit?: SeriesPlatformsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeriesPlatformsInclude<ExtArgs> | null
  }


  /**
   * Model Shows
   */

  export type AggregateShows = {
    _count: ShowsCountAggregateOutputType | null
    _avg: ShowsAvgAggregateOutputType | null
    _sum: ShowsSumAggregateOutputType | null
    _min: ShowsMinAggregateOutputType | null
    _max: ShowsMaxAggregateOutputType | null
  }

  export type ShowsAvgAggregateOutputType = {
    show_id: number | null
  }

  export type ShowsSumAggregateOutputType = {
    show_id: number | null
  }

  export type ShowsMinAggregateOutputType = {
    show_id: number | null
    title: string | null
    summary: string | null
    image: string | null
  }

  export type ShowsMaxAggregateOutputType = {
    show_id: number | null
    title: string | null
    summary: string | null
    image: string | null
  }

  export type ShowsCountAggregateOutputType = {
    show_id: number
    title: number
    summary: number
    image: number
    _all: number
  }


  export type ShowsAvgAggregateInputType = {
    show_id?: true
  }

  export type ShowsSumAggregateInputType = {
    show_id?: true
  }

  export type ShowsMinAggregateInputType = {
    show_id?: true
    title?: true
    summary?: true
    image?: true
  }

  export type ShowsMaxAggregateInputType = {
    show_id?: true
    title?: true
    summary?: true
    image?: true
  }

  export type ShowsCountAggregateInputType = {
    show_id?: true
    title?: true
    summary?: true
    image?: true
    _all?: true
  }

  export type ShowsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Shows to aggregate.
     */
    where?: ShowsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shows to fetch.
     */
    orderBy?: ShowsOrderByWithRelationInput | ShowsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShowsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Shows
    **/
    _count?: true | ShowsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ShowsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ShowsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShowsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShowsMaxAggregateInputType
  }

  export type GetShowsAggregateType<T extends ShowsAggregateArgs> = {
        [P in keyof T & keyof AggregateShows]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShows[P]>
      : GetScalarType<T[P], AggregateShows[P]>
  }




  export type ShowsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShowsWhereInput
    orderBy?: ShowsOrderByWithAggregationInput | ShowsOrderByWithAggregationInput[]
    by: ShowsScalarFieldEnum[] | ShowsScalarFieldEnum
    having?: ShowsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShowsCountAggregateInputType | true
    _avg?: ShowsAvgAggregateInputType
    _sum?: ShowsSumAggregateInputType
    _min?: ShowsMinAggregateInputType
    _max?: ShowsMaxAggregateInputType
  }

  export type ShowsGroupByOutputType = {
    show_id: number
    title: string
    summary: string | null
    image: string | null
    _count: ShowsCountAggregateOutputType | null
    _avg: ShowsAvgAggregateOutputType | null
    _sum: ShowsSumAggregateOutputType | null
    _min: ShowsMinAggregateOutputType | null
    _max: ShowsMaxAggregateOutputType | null
  }

  type GetShowsGroupByPayload<T extends ShowsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShowsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShowsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShowsGroupByOutputType[P]>
            : GetScalarType<T[P], ShowsGroupByOutputType[P]>
        }
      >
    >


  export type ShowsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    show_id?: boolean
    title?: boolean
    summary?: boolean
    image?: boolean
    seasons?: boolean | Shows$seasonsArgs<ExtArgs>
    show_cast?: boolean | Shows$show_castArgs<ExtArgs>
    users_shows?: boolean | Shows$users_showsArgs<ExtArgs>
    genres?: boolean | Shows$genresArgs<ExtArgs>
    comments?: boolean | Shows$commentsArgs<ExtArgs>
    platforms?: boolean | Shows$platformsArgs<ExtArgs>
    _count?: boolean | ShowsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shows"]>



  export type ShowsSelectScalar = {
    show_id?: boolean
    title?: boolean
    summary?: boolean
    image?: boolean
  }

  export type ShowsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"show_id" | "title" | "summary" | "image", ExtArgs["result"]["shows"]>
  export type ShowsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    seasons?: boolean | Shows$seasonsArgs<ExtArgs>
    show_cast?: boolean | Shows$show_castArgs<ExtArgs>
    users_shows?: boolean | Shows$users_showsArgs<ExtArgs>
    genres?: boolean | Shows$genresArgs<ExtArgs>
    comments?: boolean | Shows$commentsArgs<ExtArgs>
    platforms?: boolean | Shows$platformsArgs<ExtArgs>
    _count?: boolean | ShowsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ShowsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Shows"
    objects: {
      seasons: Prisma.$SeasonsPayload<ExtArgs>[]
      show_cast: Prisma.$ShowCastPayload<ExtArgs>[]
      users_shows: Prisma.$UserShowsPayload<ExtArgs>[]
      genres: Prisma.$SeriesGenresPayload<ExtArgs>[]
      comments: Prisma.$ShowCommentsPayload<ExtArgs>[]
      platforms: Prisma.$SeriesPlatformsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      show_id: number
      title: string
      summary: string | null
      image: string | null
    }, ExtArgs["result"]["shows"]>
    composites: {}
  }

  type ShowsGetPayload<S extends boolean | null | undefined | ShowsDefaultArgs> = $Result.GetResult<Prisma.$ShowsPayload, S>

  type ShowsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ShowsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ShowsCountAggregateInputType | true
    }

  export interface ShowsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Shows'], meta: { name: 'Shows' } }
    /**
     * Find zero or one Shows that matches the filter.
     * @param {ShowsFindUniqueArgs} args - Arguments to find a Shows
     * @example
     * // Get one Shows
     * const shows = await prisma.shows.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShowsFindUniqueArgs>(args: SelectSubset<T, ShowsFindUniqueArgs<ExtArgs>>): Prisma__ShowsClient<$Result.GetResult<Prisma.$ShowsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Shows that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ShowsFindUniqueOrThrowArgs} args - Arguments to find a Shows
     * @example
     * // Get one Shows
     * const shows = await prisma.shows.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShowsFindUniqueOrThrowArgs>(args: SelectSubset<T, ShowsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ShowsClient<$Result.GetResult<Prisma.$ShowsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Shows that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowsFindFirstArgs} args - Arguments to find a Shows
     * @example
     * // Get one Shows
     * const shows = await prisma.shows.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShowsFindFirstArgs>(args?: SelectSubset<T, ShowsFindFirstArgs<ExtArgs>>): Prisma__ShowsClient<$Result.GetResult<Prisma.$ShowsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Shows that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowsFindFirstOrThrowArgs} args - Arguments to find a Shows
     * @example
     * // Get one Shows
     * const shows = await prisma.shows.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShowsFindFirstOrThrowArgs>(args?: SelectSubset<T, ShowsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ShowsClient<$Result.GetResult<Prisma.$ShowsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Shows that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Shows
     * const shows = await prisma.shows.findMany()
     * 
     * // Get first 10 Shows
     * const shows = await prisma.shows.findMany({ take: 10 })
     * 
     * // Only select the `show_id`
     * const showsWithShow_idOnly = await prisma.shows.findMany({ select: { show_id: true } })
     * 
     */
    findMany<T extends ShowsFindManyArgs>(args?: SelectSubset<T, ShowsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShowsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Shows.
     * @param {ShowsCreateArgs} args - Arguments to create a Shows.
     * @example
     * // Create one Shows
     * const Shows = await prisma.shows.create({
     *   data: {
     *     // ... data to create a Shows
     *   }
     * })
     * 
     */
    create<T extends ShowsCreateArgs>(args: SelectSubset<T, ShowsCreateArgs<ExtArgs>>): Prisma__ShowsClient<$Result.GetResult<Prisma.$ShowsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Shows.
     * @param {ShowsCreateManyArgs} args - Arguments to create many Shows.
     * @example
     * // Create many Shows
     * const shows = await prisma.shows.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ShowsCreateManyArgs>(args?: SelectSubset<T, ShowsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Shows.
     * @param {ShowsDeleteArgs} args - Arguments to delete one Shows.
     * @example
     * // Delete one Shows
     * const Shows = await prisma.shows.delete({
     *   where: {
     *     // ... filter to delete one Shows
     *   }
     * })
     * 
     */
    delete<T extends ShowsDeleteArgs>(args: SelectSubset<T, ShowsDeleteArgs<ExtArgs>>): Prisma__ShowsClient<$Result.GetResult<Prisma.$ShowsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Shows.
     * @param {ShowsUpdateArgs} args - Arguments to update one Shows.
     * @example
     * // Update one Shows
     * const shows = await prisma.shows.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ShowsUpdateArgs>(args: SelectSubset<T, ShowsUpdateArgs<ExtArgs>>): Prisma__ShowsClient<$Result.GetResult<Prisma.$ShowsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Shows.
     * @param {ShowsDeleteManyArgs} args - Arguments to filter Shows to delete.
     * @example
     * // Delete a few Shows
     * const { count } = await prisma.shows.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ShowsDeleteManyArgs>(args?: SelectSubset<T, ShowsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Shows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Shows
     * const shows = await prisma.shows.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ShowsUpdateManyArgs>(args: SelectSubset<T, ShowsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Shows.
     * @param {ShowsUpsertArgs} args - Arguments to update or create a Shows.
     * @example
     * // Update or create a Shows
     * const shows = await prisma.shows.upsert({
     *   create: {
     *     // ... data to create a Shows
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Shows we want to update
     *   }
     * })
     */
    upsert<T extends ShowsUpsertArgs>(args: SelectSubset<T, ShowsUpsertArgs<ExtArgs>>): Prisma__ShowsClient<$Result.GetResult<Prisma.$ShowsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Shows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowsCountArgs} args - Arguments to filter Shows to count.
     * @example
     * // Count the number of Shows
     * const count = await prisma.shows.count({
     *   where: {
     *     // ... the filter for the Shows we want to count
     *   }
     * })
    **/
    count<T extends ShowsCountArgs>(
      args?: Subset<T, ShowsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShowsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Shows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ShowsAggregateArgs>(args: Subset<T, ShowsAggregateArgs>): Prisma.PrismaPromise<GetShowsAggregateType<T>>

    /**
     * Group by Shows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ShowsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShowsGroupByArgs['orderBy'] }
        : { orderBy?: ShowsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ShowsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShowsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Shows model
   */
  readonly fields: ShowsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Shows.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShowsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    seasons<T extends Shows$seasonsArgs<ExtArgs> = {}>(args?: Subset<T, Shows$seasonsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeasonsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    show_cast<T extends Shows$show_castArgs<ExtArgs> = {}>(args?: Subset<T, Shows$show_castArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShowCastPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    users_shows<T extends Shows$users_showsArgs<ExtArgs> = {}>(args?: Subset<T, Shows$users_showsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserShowsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    genres<T extends Shows$genresArgs<ExtArgs> = {}>(args?: Subset<T, Shows$genresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeriesGenresPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    comments<T extends Shows$commentsArgs<ExtArgs> = {}>(args?: Subset<T, Shows$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShowCommentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    platforms<T extends Shows$platformsArgs<ExtArgs> = {}>(args?: Subset<T, Shows$platformsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeriesPlatformsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Shows model
   */
  interface ShowsFieldRefs {
    readonly show_id: FieldRef<"Shows", 'Int'>
    readonly title: FieldRef<"Shows", 'String'>
    readonly summary: FieldRef<"Shows", 'String'>
    readonly image: FieldRef<"Shows", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Shows findUnique
   */
  export type ShowsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shows
     */
    select?: ShowsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shows
     */
    omit?: ShowsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowsInclude<ExtArgs> | null
    /**
     * Filter, which Shows to fetch.
     */
    where: ShowsWhereUniqueInput
  }

  /**
   * Shows findUniqueOrThrow
   */
  export type ShowsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shows
     */
    select?: ShowsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shows
     */
    omit?: ShowsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowsInclude<ExtArgs> | null
    /**
     * Filter, which Shows to fetch.
     */
    where: ShowsWhereUniqueInput
  }

  /**
   * Shows findFirst
   */
  export type ShowsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shows
     */
    select?: ShowsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shows
     */
    omit?: ShowsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowsInclude<ExtArgs> | null
    /**
     * Filter, which Shows to fetch.
     */
    where?: ShowsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shows to fetch.
     */
    orderBy?: ShowsOrderByWithRelationInput | ShowsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Shows.
     */
    cursor?: ShowsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Shows.
     */
    distinct?: ShowsScalarFieldEnum | ShowsScalarFieldEnum[]
  }

  /**
   * Shows findFirstOrThrow
   */
  export type ShowsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shows
     */
    select?: ShowsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shows
     */
    omit?: ShowsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowsInclude<ExtArgs> | null
    /**
     * Filter, which Shows to fetch.
     */
    where?: ShowsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shows to fetch.
     */
    orderBy?: ShowsOrderByWithRelationInput | ShowsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Shows.
     */
    cursor?: ShowsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Shows.
     */
    distinct?: ShowsScalarFieldEnum | ShowsScalarFieldEnum[]
  }

  /**
   * Shows findMany
   */
  export type ShowsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shows
     */
    select?: ShowsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shows
     */
    omit?: ShowsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowsInclude<ExtArgs> | null
    /**
     * Filter, which Shows to fetch.
     */
    where?: ShowsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shows to fetch.
     */
    orderBy?: ShowsOrderByWithRelationInput | ShowsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Shows.
     */
    cursor?: ShowsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shows.
     */
    skip?: number
    distinct?: ShowsScalarFieldEnum | ShowsScalarFieldEnum[]
  }

  /**
   * Shows create
   */
  export type ShowsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shows
     */
    select?: ShowsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shows
     */
    omit?: ShowsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowsInclude<ExtArgs> | null
    /**
     * The data needed to create a Shows.
     */
    data: XOR<ShowsCreateInput, ShowsUncheckedCreateInput>
  }

  /**
   * Shows createMany
   */
  export type ShowsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Shows.
     */
    data: ShowsCreateManyInput | ShowsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Shows update
   */
  export type ShowsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shows
     */
    select?: ShowsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shows
     */
    omit?: ShowsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowsInclude<ExtArgs> | null
    /**
     * The data needed to update a Shows.
     */
    data: XOR<ShowsUpdateInput, ShowsUncheckedUpdateInput>
    /**
     * Choose, which Shows to update.
     */
    where: ShowsWhereUniqueInput
  }

  /**
   * Shows updateMany
   */
  export type ShowsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Shows.
     */
    data: XOR<ShowsUpdateManyMutationInput, ShowsUncheckedUpdateManyInput>
    /**
     * Filter which Shows to update
     */
    where?: ShowsWhereInput
    /**
     * Limit how many Shows to update.
     */
    limit?: number
  }

  /**
   * Shows upsert
   */
  export type ShowsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shows
     */
    select?: ShowsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shows
     */
    omit?: ShowsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowsInclude<ExtArgs> | null
    /**
     * The filter to search for the Shows to update in case it exists.
     */
    where: ShowsWhereUniqueInput
    /**
     * In case the Shows found by the `where` argument doesn't exist, create a new Shows with this data.
     */
    create: XOR<ShowsCreateInput, ShowsUncheckedCreateInput>
    /**
     * In case the Shows was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShowsUpdateInput, ShowsUncheckedUpdateInput>
  }

  /**
   * Shows delete
   */
  export type ShowsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shows
     */
    select?: ShowsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shows
     */
    omit?: ShowsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowsInclude<ExtArgs> | null
    /**
     * Filter which Shows to delete.
     */
    where: ShowsWhereUniqueInput
  }

  /**
   * Shows deleteMany
   */
  export type ShowsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Shows to delete
     */
    where?: ShowsWhereInput
    /**
     * Limit how many Shows to delete.
     */
    limit?: number
  }

  /**
   * Shows.seasons
   */
  export type Shows$seasonsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seasons
     */
    select?: SeasonsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seasons
     */
    omit?: SeasonsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeasonsInclude<ExtArgs> | null
    where?: SeasonsWhereInput
    orderBy?: SeasonsOrderByWithRelationInput | SeasonsOrderByWithRelationInput[]
    cursor?: SeasonsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SeasonsScalarFieldEnum | SeasonsScalarFieldEnum[]
  }

  /**
   * Shows.show_cast
   */
  export type Shows$show_castArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShowCast
     */
    select?: ShowCastSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShowCast
     */
    omit?: ShowCastOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowCastInclude<ExtArgs> | null
    where?: ShowCastWhereInput
    orderBy?: ShowCastOrderByWithRelationInput | ShowCastOrderByWithRelationInput[]
    cursor?: ShowCastWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShowCastScalarFieldEnum | ShowCastScalarFieldEnum[]
  }

  /**
   * Shows.users_shows
   */
  export type Shows$users_showsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserShows
     */
    select?: UserShowsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserShows
     */
    omit?: UserShowsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserShowsInclude<ExtArgs> | null
    where?: UserShowsWhereInput
    orderBy?: UserShowsOrderByWithRelationInput | UserShowsOrderByWithRelationInput[]
    cursor?: UserShowsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserShowsScalarFieldEnum | UserShowsScalarFieldEnum[]
  }

  /**
   * Shows.genres
   */
  export type Shows$genresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeriesGenres
     */
    select?: SeriesGenresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeriesGenres
     */
    omit?: SeriesGenresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeriesGenresInclude<ExtArgs> | null
    where?: SeriesGenresWhereInput
    orderBy?: SeriesGenresOrderByWithRelationInput | SeriesGenresOrderByWithRelationInput[]
    cursor?: SeriesGenresWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SeriesGenresScalarFieldEnum | SeriesGenresScalarFieldEnum[]
  }

  /**
   * Shows.comments
   */
  export type Shows$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShowComments
     */
    select?: ShowCommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShowComments
     */
    omit?: ShowCommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowCommentsInclude<ExtArgs> | null
    where?: ShowCommentsWhereInput
    orderBy?: ShowCommentsOrderByWithRelationInput | ShowCommentsOrderByWithRelationInput[]
    cursor?: ShowCommentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShowCommentsScalarFieldEnum | ShowCommentsScalarFieldEnum[]
  }

  /**
   * Shows.platforms
   */
  export type Shows$platformsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeriesPlatforms
     */
    select?: SeriesPlatformsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeriesPlatforms
     */
    omit?: SeriesPlatformsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeriesPlatformsInclude<ExtArgs> | null
    where?: SeriesPlatformsWhereInput
    orderBy?: SeriesPlatformsOrderByWithRelationInput | SeriesPlatformsOrderByWithRelationInput[]
    cursor?: SeriesPlatformsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SeriesPlatformsScalarFieldEnum | SeriesPlatformsScalarFieldEnum[]
  }

  /**
   * Shows without action
   */
  export type ShowsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shows
     */
    select?: ShowsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shows
     */
    omit?: ShowsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowsInclude<ExtArgs> | null
  }


  /**
   * Model UserShows
   */

  export type AggregateUserShows = {
    _count: UserShowsCountAggregateOutputType | null
    _avg: UserShowsAvgAggregateOutputType | null
    _sum: UserShowsSumAggregateOutputType | null
    _min: UserShowsMinAggregateOutputType | null
    _max: UserShowsMaxAggregateOutputType | null
  }

  export type UserShowsAvgAggregateOutputType = {
    id_show: number | null
    rating: number | null
  }

  export type UserShowsSumAggregateOutputType = {
    id_show: number | null
    rating: number | null
  }

  export type UserShowsMinAggregateOutputType = {
    id_user: string | null
    id_show: number | null
    is_favorite: boolean | null
    is_archived: boolean | null
    status: $Enums.users_shows_status | null
    added_at: Date | null
    rating: number | null
  }

  export type UserShowsMaxAggregateOutputType = {
    id_user: string | null
    id_show: number | null
    is_favorite: boolean | null
    is_archived: boolean | null
    status: $Enums.users_shows_status | null
    added_at: Date | null
    rating: number | null
  }

  export type UserShowsCountAggregateOutputType = {
    id_user: number
    id_show: number
    is_favorite: number
    is_archived: number
    status: number
    added_at: number
    rating: number
    _all: number
  }


  export type UserShowsAvgAggregateInputType = {
    id_show?: true
    rating?: true
  }

  export type UserShowsSumAggregateInputType = {
    id_show?: true
    rating?: true
  }

  export type UserShowsMinAggregateInputType = {
    id_user?: true
    id_show?: true
    is_favorite?: true
    is_archived?: true
    status?: true
    added_at?: true
    rating?: true
  }

  export type UserShowsMaxAggregateInputType = {
    id_user?: true
    id_show?: true
    is_favorite?: true
    is_archived?: true
    status?: true
    added_at?: true
    rating?: true
  }

  export type UserShowsCountAggregateInputType = {
    id_user?: true
    id_show?: true
    is_favorite?: true
    is_archived?: true
    status?: true
    added_at?: true
    rating?: true
    _all?: true
  }

  export type UserShowsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserShows to aggregate.
     */
    where?: UserShowsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserShows to fetch.
     */
    orderBy?: UserShowsOrderByWithRelationInput | UserShowsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserShowsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserShows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserShows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserShows
    **/
    _count?: true | UserShowsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserShowsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserShowsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserShowsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserShowsMaxAggregateInputType
  }

  export type GetUserShowsAggregateType<T extends UserShowsAggregateArgs> = {
        [P in keyof T & keyof AggregateUserShows]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserShows[P]>
      : GetScalarType<T[P], AggregateUserShows[P]>
  }




  export type UserShowsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserShowsWhereInput
    orderBy?: UserShowsOrderByWithAggregationInput | UserShowsOrderByWithAggregationInput[]
    by: UserShowsScalarFieldEnum[] | UserShowsScalarFieldEnum
    having?: UserShowsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserShowsCountAggregateInputType | true
    _avg?: UserShowsAvgAggregateInputType
    _sum?: UserShowsSumAggregateInputType
    _min?: UserShowsMinAggregateInputType
    _max?: UserShowsMaxAggregateInputType
  }

  export type UserShowsGroupByOutputType = {
    id_user: string
    id_show: number
    is_favorite: boolean | null
    is_archived: boolean | null
    status: $Enums.users_shows_status | null
    added_at: Date | null
    rating: number | null
    _count: UserShowsCountAggregateOutputType | null
    _avg: UserShowsAvgAggregateOutputType | null
    _sum: UserShowsSumAggregateOutputType | null
    _min: UserShowsMinAggregateOutputType | null
    _max: UserShowsMaxAggregateOutputType | null
  }

  type GetUserShowsGroupByPayload<T extends UserShowsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserShowsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserShowsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserShowsGroupByOutputType[P]>
            : GetScalarType<T[P], UserShowsGroupByOutputType[P]>
        }
      >
    >


  export type UserShowsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_user?: boolean
    id_show?: boolean
    is_favorite?: boolean
    is_archived?: boolean
    status?: boolean
    added_at?: boolean
    rating?: boolean
    shows?: boolean | ShowsDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userShows"]>



  export type UserShowsSelectScalar = {
    id_user?: boolean
    id_show?: boolean
    is_favorite?: boolean
    is_archived?: boolean
    status?: boolean
    added_at?: boolean
    rating?: boolean
  }

  export type UserShowsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_user" | "id_show" | "is_favorite" | "is_archived" | "status" | "added_at" | "rating", ExtArgs["result"]["userShows"]>
  export type UserShowsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shows?: boolean | ShowsDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserShowsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserShows"
    objects: {
      shows: Prisma.$ShowsPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_user: string
      id_show: number
      is_favorite: boolean | null
      is_archived: boolean | null
      status: $Enums.users_shows_status | null
      added_at: Date | null
      rating: number | null
    }, ExtArgs["result"]["userShows"]>
    composites: {}
  }

  type UserShowsGetPayload<S extends boolean | null | undefined | UserShowsDefaultArgs> = $Result.GetResult<Prisma.$UserShowsPayload, S>

  type UserShowsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserShowsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserShowsCountAggregateInputType | true
    }

  export interface UserShowsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserShows'], meta: { name: 'UserShows' } }
    /**
     * Find zero or one UserShows that matches the filter.
     * @param {UserShowsFindUniqueArgs} args - Arguments to find a UserShows
     * @example
     * // Get one UserShows
     * const userShows = await prisma.userShows.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserShowsFindUniqueArgs>(args: SelectSubset<T, UserShowsFindUniqueArgs<ExtArgs>>): Prisma__UserShowsClient<$Result.GetResult<Prisma.$UserShowsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserShows that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserShowsFindUniqueOrThrowArgs} args - Arguments to find a UserShows
     * @example
     * // Get one UserShows
     * const userShows = await prisma.userShows.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserShowsFindUniqueOrThrowArgs>(args: SelectSubset<T, UserShowsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserShowsClient<$Result.GetResult<Prisma.$UserShowsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserShows that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserShowsFindFirstArgs} args - Arguments to find a UserShows
     * @example
     * // Get one UserShows
     * const userShows = await prisma.userShows.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserShowsFindFirstArgs>(args?: SelectSubset<T, UserShowsFindFirstArgs<ExtArgs>>): Prisma__UserShowsClient<$Result.GetResult<Prisma.$UserShowsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserShows that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserShowsFindFirstOrThrowArgs} args - Arguments to find a UserShows
     * @example
     * // Get one UserShows
     * const userShows = await prisma.userShows.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserShowsFindFirstOrThrowArgs>(args?: SelectSubset<T, UserShowsFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserShowsClient<$Result.GetResult<Prisma.$UserShowsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserShows that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserShowsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserShows
     * const userShows = await prisma.userShows.findMany()
     * 
     * // Get first 10 UserShows
     * const userShows = await prisma.userShows.findMany({ take: 10 })
     * 
     * // Only select the `id_user`
     * const userShowsWithId_userOnly = await prisma.userShows.findMany({ select: { id_user: true } })
     * 
     */
    findMany<T extends UserShowsFindManyArgs>(args?: SelectSubset<T, UserShowsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserShowsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserShows.
     * @param {UserShowsCreateArgs} args - Arguments to create a UserShows.
     * @example
     * // Create one UserShows
     * const UserShows = await prisma.userShows.create({
     *   data: {
     *     // ... data to create a UserShows
     *   }
     * })
     * 
     */
    create<T extends UserShowsCreateArgs>(args: SelectSubset<T, UserShowsCreateArgs<ExtArgs>>): Prisma__UserShowsClient<$Result.GetResult<Prisma.$UserShowsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserShows.
     * @param {UserShowsCreateManyArgs} args - Arguments to create many UserShows.
     * @example
     * // Create many UserShows
     * const userShows = await prisma.userShows.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserShowsCreateManyArgs>(args?: SelectSubset<T, UserShowsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserShows.
     * @param {UserShowsDeleteArgs} args - Arguments to delete one UserShows.
     * @example
     * // Delete one UserShows
     * const UserShows = await prisma.userShows.delete({
     *   where: {
     *     // ... filter to delete one UserShows
     *   }
     * })
     * 
     */
    delete<T extends UserShowsDeleteArgs>(args: SelectSubset<T, UserShowsDeleteArgs<ExtArgs>>): Prisma__UserShowsClient<$Result.GetResult<Prisma.$UserShowsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserShows.
     * @param {UserShowsUpdateArgs} args - Arguments to update one UserShows.
     * @example
     * // Update one UserShows
     * const userShows = await prisma.userShows.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserShowsUpdateArgs>(args: SelectSubset<T, UserShowsUpdateArgs<ExtArgs>>): Prisma__UserShowsClient<$Result.GetResult<Prisma.$UserShowsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserShows.
     * @param {UserShowsDeleteManyArgs} args - Arguments to filter UserShows to delete.
     * @example
     * // Delete a few UserShows
     * const { count } = await prisma.userShows.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserShowsDeleteManyArgs>(args?: SelectSubset<T, UserShowsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserShows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserShowsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserShows
     * const userShows = await prisma.userShows.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserShowsUpdateManyArgs>(args: SelectSubset<T, UserShowsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserShows.
     * @param {UserShowsUpsertArgs} args - Arguments to update or create a UserShows.
     * @example
     * // Update or create a UserShows
     * const userShows = await prisma.userShows.upsert({
     *   create: {
     *     // ... data to create a UserShows
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserShows we want to update
     *   }
     * })
     */
    upsert<T extends UserShowsUpsertArgs>(args: SelectSubset<T, UserShowsUpsertArgs<ExtArgs>>): Prisma__UserShowsClient<$Result.GetResult<Prisma.$UserShowsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserShows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserShowsCountArgs} args - Arguments to filter UserShows to count.
     * @example
     * // Count the number of UserShows
     * const count = await prisma.userShows.count({
     *   where: {
     *     // ... the filter for the UserShows we want to count
     *   }
     * })
    **/
    count<T extends UserShowsCountArgs>(
      args?: Subset<T, UserShowsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserShowsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserShows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserShowsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserShowsAggregateArgs>(args: Subset<T, UserShowsAggregateArgs>): Prisma.PrismaPromise<GetUserShowsAggregateType<T>>

    /**
     * Group by UserShows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserShowsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserShowsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserShowsGroupByArgs['orderBy'] }
        : { orderBy?: UserShowsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserShowsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserShowsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserShows model
   */
  readonly fields: UserShowsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserShows.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserShowsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    shows<T extends ShowsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShowsDefaultArgs<ExtArgs>>): Prisma__ShowsClient<$Result.GetResult<Prisma.$ShowsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserShows model
   */
  interface UserShowsFieldRefs {
    readonly id_user: FieldRef<"UserShows", 'String'>
    readonly id_show: FieldRef<"UserShows", 'Int'>
    readonly is_favorite: FieldRef<"UserShows", 'Boolean'>
    readonly is_archived: FieldRef<"UserShows", 'Boolean'>
    readonly status: FieldRef<"UserShows", 'users_shows_status'>
    readonly added_at: FieldRef<"UserShows", 'DateTime'>
    readonly rating: FieldRef<"UserShows", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * UserShows findUnique
   */
  export type UserShowsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserShows
     */
    select?: UserShowsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserShows
     */
    omit?: UserShowsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserShowsInclude<ExtArgs> | null
    /**
     * Filter, which UserShows to fetch.
     */
    where: UserShowsWhereUniqueInput
  }

  /**
   * UserShows findUniqueOrThrow
   */
  export type UserShowsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserShows
     */
    select?: UserShowsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserShows
     */
    omit?: UserShowsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserShowsInclude<ExtArgs> | null
    /**
     * Filter, which UserShows to fetch.
     */
    where: UserShowsWhereUniqueInput
  }

  /**
   * UserShows findFirst
   */
  export type UserShowsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserShows
     */
    select?: UserShowsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserShows
     */
    omit?: UserShowsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserShowsInclude<ExtArgs> | null
    /**
     * Filter, which UserShows to fetch.
     */
    where?: UserShowsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserShows to fetch.
     */
    orderBy?: UserShowsOrderByWithRelationInput | UserShowsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserShows.
     */
    cursor?: UserShowsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserShows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserShows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserShows.
     */
    distinct?: UserShowsScalarFieldEnum | UserShowsScalarFieldEnum[]
  }

  /**
   * UserShows findFirstOrThrow
   */
  export type UserShowsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserShows
     */
    select?: UserShowsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserShows
     */
    omit?: UserShowsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserShowsInclude<ExtArgs> | null
    /**
     * Filter, which UserShows to fetch.
     */
    where?: UserShowsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserShows to fetch.
     */
    orderBy?: UserShowsOrderByWithRelationInput | UserShowsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserShows.
     */
    cursor?: UserShowsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserShows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserShows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserShows.
     */
    distinct?: UserShowsScalarFieldEnum | UserShowsScalarFieldEnum[]
  }

  /**
   * UserShows findMany
   */
  export type UserShowsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserShows
     */
    select?: UserShowsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserShows
     */
    omit?: UserShowsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserShowsInclude<ExtArgs> | null
    /**
     * Filter, which UserShows to fetch.
     */
    where?: UserShowsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserShows to fetch.
     */
    orderBy?: UserShowsOrderByWithRelationInput | UserShowsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserShows.
     */
    cursor?: UserShowsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserShows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserShows.
     */
    skip?: number
    distinct?: UserShowsScalarFieldEnum | UserShowsScalarFieldEnum[]
  }

  /**
   * UserShows create
   */
  export type UserShowsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserShows
     */
    select?: UserShowsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserShows
     */
    omit?: UserShowsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserShowsInclude<ExtArgs> | null
    /**
     * The data needed to create a UserShows.
     */
    data: XOR<UserShowsCreateInput, UserShowsUncheckedCreateInput>
  }

  /**
   * UserShows createMany
   */
  export type UserShowsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserShows.
     */
    data: UserShowsCreateManyInput | UserShowsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserShows update
   */
  export type UserShowsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserShows
     */
    select?: UserShowsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserShows
     */
    omit?: UserShowsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserShowsInclude<ExtArgs> | null
    /**
     * The data needed to update a UserShows.
     */
    data: XOR<UserShowsUpdateInput, UserShowsUncheckedUpdateInput>
    /**
     * Choose, which UserShows to update.
     */
    where: UserShowsWhereUniqueInput
  }

  /**
   * UserShows updateMany
   */
  export type UserShowsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserShows.
     */
    data: XOR<UserShowsUpdateManyMutationInput, UserShowsUncheckedUpdateManyInput>
    /**
     * Filter which UserShows to update
     */
    where?: UserShowsWhereInput
    /**
     * Limit how many UserShows to update.
     */
    limit?: number
  }

  /**
   * UserShows upsert
   */
  export type UserShowsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserShows
     */
    select?: UserShowsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserShows
     */
    omit?: UserShowsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserShowsInclude<ExtArgs> | null
    /**
     * The filter to search for the UserShows to update in case it exists.
     */
    where: UserShowsWhereUniqueInput
    /**
     * In case the UserShows found by the `where` argument doesn't exist, create a new UserShows with this data.
     */
    create: XOR<UserShowsCreateInput, UserShowsUncheckedCreateInput>
    /**
     * In case the UserShows was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserShowsUpdateInput, UserShowsUncheckedUpdateInput>
  }

  /**
   * UserShows delete
   */
  export type UserShowsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserShows
     */
    select?: UserShowsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserShows
     */
    omit?: UserShowsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserShowsInclude<ExtArgs> | null
    /**
     * Filter which UserShows to delete.
     */
    where: UserShowsWhereUniqueInput
  }

  /**
   * UserShows deleteMany
   */
  export type UserShowsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserShows to delete
     */
    where?: UserShowsWhereInput
    /**
     * Limit how many UserShows to delete.
     */
    limit?: number
  }

  /**
   * UserShows without action
   */
  export type UserShowsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserShows
     */
    select?: UserShowsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserShows
     */
    omit?: UserShowsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserShowsInclude<ExtArgs> | null
  }


  /**
   * Model UserEpisodes
   */

  export type AggregateUserEpisodes = {
    _count: UserEpisodesCountAggregateOutputType | null
    _avg: UserEpisodesAvgAggregateOutputType | null
    _sum: UserEpisodesSumAggregateOutputType | null
    _min: UserEpisodesMinAggregateOutputType | null
    _max: UserEpisodesMaxAggregateOutputType | null
  }

  export type UserEpisodesAvgAggregateOutputType = {
    id_episode: number | null
  }

  export type UserEpisodesSumAggregateOutputType = {
    id_episode: number | null
  }

  export type UserEpisodesMinAggregateOutputType = {
    id_user: string | null
    id_episode: number | null
    watched_at: Date | null
  }

  export type UserEpisodesMaxAggregateOutputType = {
    id_user: string | null
    id_episode: number | null
    watched_at: Date | null
  }

  export type UserEpisodesCountAggregateOutputType = {
    id_user: number
    id_episode: number
    watched_at: number
    _all: number
  }


  export type UserEpisodesAvgAggregateInputType = {
    id_episode?: true
  }

  export type UserEpisodesSumAggregateInputType = {
    id_episode?: true
  }

  export type UserEpisodesMinAggregateInputType = {
    id_user?: true
    id_episode?: true
    watched_at?: true
  }

  export type UserEpisodesMaxAggregateInputType = {
    id_user?: true
    id_episode?: true
    watched_at?: true
  }

  export type UserEpisodesCountAggregateInputType = {
    id_user?: true
    id_episode?: true
    watched_at?: true
    _all?: true
  }

  export type UserEpisodesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserEpisodes to aggregate.
     */
    where?: UserEpisodesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserEpisodes to fetch.
     */
    orderBy?: UserEpisodesOrderByWithRelationInput | UserEpisodesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserEpisodesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserEpisodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserEpisodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserEpisodes
    **/
    _count?: true | UserEpisodesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserEpisodesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserEpisodesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserEpisodesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserEpisodesMaxAggregateInputType
  }

  export type GetUserEpisodesAggregateType<T extends UserEpisodesAggregateArgs> = {
        [P in keyof T & keyof AggregateUserEpisodes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserEpisodes[P]>
      : GetScalarType<T[P], AggregateUserEpisodes[P]>
  }




  export type UserEpisodesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserEpisodesWhereInput
    orderBy?: UserEpisodesOrderByWithAggregationInput | UserEpisodesOrderByWithAggregationInput[]
    by: UserEpisodesScalarFieldEnum[] | UserEpisodesScalarFieldEnum
    having?: UserEpisodesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserEpisodesCountAggregateInputType | true
    _avg?: UserEpisodesAvgAggregateInputType
    _sum?: UserEpisodesSumAggregateInputType
    _min?: UserEpisodesMinAggregateInputType
    _max?: UserEpisodesMaxAggregateInputType
  }

  export type UserEpisodesGroupByOutputType = {
    id_user: string
    id_episode: number
    watched_at: Date | null
    _count: UserEpisodesCountAggregateOutputType | null
    _avg: UserEpisodesAvgAggregateOutputType | null
    _sum: UserEpisodesSumAggregateOutputType | null
    _min: UserEpisodesMinAggregateOutputType | null
    _max: UserEpisodesMaxAggregateOutputType | null
  }

  type GetUserEpisodesGroupByPayload<T extends UserEpisodesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserEpisodesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserEpisodesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserEpisodesGroupByOutputType[P]>
            : GetScalarType<T[P], UserEpisodesGroupByOutputType[P]>
        }
      >
    >


  export type UserEpisodesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_user?: boolean
    id_episode?: boolean
    watched_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    episode?: boolean | EpisodesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userEpisodes"]>



  export type UserEpisodesSelectScalar = {
    id_user?: boolean
    id_episode?: boolean
    watched_at?: boolean
  }

  export type UserEpisodesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_user" | "id_episode" | "watched_at", ExtArgs["result"]["userEpisodes"]>
  export type UserEpisodesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    episode?: boolean | EpisodesDefaultArgs<ExtArgs>
  }

  export type $UserEpisodesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserEpisodes"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      episode: Prisma.$EpisodesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_user: string
      id_episode: number
      watched_at: Date | null
    }, ExtArgs["result"]["userEpisodes"]>
    composites: {}
  }

  type UserEpisodesGetPayload<S extends boolean | null | undefined | UserEpisodesDefaultArgs> = $Result.GetResult<Prisma.$UserEpisodesPayload, S>

  type UserEpisodesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserEpisodesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserEpisodesCountAggregateInputType | true
    }

  export interface UserEpisodesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserEpisodes'], meta: { name: 'UserEpisodes' } }
    /**
     * Find zero or one UserEpisodes that matches the filter.
     * @param {UserEpisodesFindUniqueArgs} args - Arguments to find a UserEpisodes
     * @example
     * // Get one UserEpisodes
     * const userEpisodes = await prisma.userEpisodes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserEpisodesFindUniqueArgs>(args: SelectSubset<T, UserEpisodesFindUniqueArgs<ExtArgs>>): Prisma__UserEpisodesClient<$Result.GetResult<Prisma.$UserEpisodesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserEpisodes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserEpisodesFindUniqueOrThrowArgs} args - Arguments to find a UserEpisodes
     * @example
     * // Get one UserEpisodes
     * const userEpisodes = await prisma.userEpisodes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserEpisodesFindUniqueOrThrowArgs>(args: SelectSubset<T, UserEpisodesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserEpisodesClient<$Result.GetResult<Prisma.$UserEpisodesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserEpisodes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserEpisodesFindFirstArgs} args - Arguments to find a UserEpisodes
     * @example
     * // Get one UserEpisodes
     * const userEpisodes = await prisma.userEpisodes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserEpisodesFindFirstArgs>(args?: SelectSubset<T, UserEpisodesFindFirstArgs<ExtArgs>>): Prisma__UserEpisodesClient<$Result.GetResult<Prisma.$UserEpisodesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserEpisodes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserEpisodesFindFirstOrThrowArgs} args - Arguments to find a UserEpisodes
     * @example
     * // Get one UserEpisodes
     * const userEpisodes = await prisma.userEpisodes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserEpisodesFindFirstOrThrowArgs>(args?: SelectSubset<T, UserEpisodesFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserEpisodesClient<$Result.GetResult<Prisma.$UserEpisodesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserEpisodes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserEpisodesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserEpisodes
     * const userEpisodes = await prisma.userEpisodes.findMany()
     * 
     * // Get first 10 UserEpisodes
     * const userEpisodes = await prisma.userEpisodes.findMany({ take: 10 })
     * 
     * // Only select the `id_user`
     * const userEpisodesWithId_userOnly = await prisma.userEpisodes.findMany({ select: { id_user: true } })
     * 
     */
    findMany<T extends UserEpisodesFindManyArgs>(args?: SelectSubset<T, UserEpisodesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserEpisodesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserEpisodes.
     * @param {UserEpisodesCreateArgs} args - Arguments to create a UserEpisodes.
     * @example
     * // Create one UserEpisodes
     * const UserEpisodes = await prisma.userEpisodes.create({
     *   data: {
     *     // ... data to create a UserEpisodes
     *   }
     * })
     * 
     */
    create<T extends UserEpisodesCreateArgs>(args: SelectSubset<T, UserEpisodesCreateArgs<ExtArgs>>): Prisma__UserEpisodesClient<$Result.GetResult<Prisma.$UserEpisodesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserEpisodes.
     * @param {UserEpisodesCreateManyArgs} args - Arguments to create many UserEpisodes.
     * @example
     * // Create many UserEpisodes
     * const userEpisodes = await prisma.userEpisodes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserEpisodesCreateManyArgs>(args?: SelectSubset<T, UserEpisodesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserEpisodes.
     * @param {UserEpisodesDeleteArgs} args - Arguments to delete one UserEpisodes.
     * @example
     * // Delete one UserEpisodes
     * const UserEpisodes = await prisma.userEpisodes.delete({
     *   where: {
     *     // ... filter to delete one UserEpisodes
     *   }
     * })
     * 
     */
    delete<T extends UserEpisodesDeleteArgs>(args: SelectSubset<T, UserEpisodesDeleteArgs<ExtArgs>>): Prisma__UserEpisodesClient<$Result.GetResult<Prisma.$UserEpisodesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserEpisodes.
     * @param {UserEpisodesUpdateArgs} args - Arguments to update one UserEpisodes.
     * @example
     * // Update one UserEpisodes
     * const userEpisodes = await prisma.userEpisodes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserEpisodesUpdateArgs>(args: SelectSubset<T, UserEpisodesUpdateArgs<ExtArgs>>): Prisma__UserEpisodesClient<$Result.GetResult<Prisma.$UserEpisodesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserEpisodes.
     * @param {UserEpisodesDeleteManyArgs} args - Arguments to filter UserEpisodes to delete.
     * @example
     * // Delete a few UserEpisodes
     * const { count } = await prisma.userEpisodes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserEpisodesDeleteManyArgs>(args?: SelectSubset<T, UserEpisodesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserEpisodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserEpisodesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserEpisodes
     * const userEpisodes = await prisma.userEpisodes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserEpisodesUpdateManyArgs>(args: SelectSubset<T, UserEpisodesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserEpisodes.
     * @param {UserEpisodesUpsertArgs} args - Arguments to update or create a UserEpisodes.
     * @example
     * // Update or create a UserEpisodes
     * const userEpisodes = await prisma.userEpisodes.upsert({
     *   create: {
     *     // ... data to create a UserEpisodes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserEpisodes we want to update
     *   }
     * })
     */
    upsert<T extends UserEpisodesUpsertArgs>(args: SelectSubset<T, UserEpisodesUpsertArgs<ExtArgs>>): Prisma__UserEpisodesClient<$Result.GetResult<Prisma.$UserEpisodesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserEpisodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserEpisodesCountArgs} args - Arguments to filter UserEpisodes to count.
     * @example
     * // Count the number of UserEpisodes
     * const count = await prisma.userEpisodes.count({
     *   where: {
     *     // ... the filter for the UserEpisodes we want to count
     *   }
     * })
    **/
    count<T extends UserEpisodesCountArgs>(
      args?: Subset<T, UserEpisodesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserEpisodesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserEpisodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserEpisodesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserEpisodesAggregateArgs>(args: Subset<T, UserEpisodesAggregateArgs>): Prisma.PrismaPromise<GetUserEpisodesAggregateType<T>>

    /**
     * Group by UserEpisodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserEpisodesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserEpisodesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserEpisodesGroupByArgs['orderBy'] }
        : { orderBy?: UserEpisodesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserEpisodesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserEpisodesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserEpisodes model
   */
  readonly fields: UserEpisodesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserEpisodes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserEpisodesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    episode<T extends EpisodesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EpisodesDefaultArgs<ExtArgs>>): Prisma__EpisodesClient<$Result.GetResult<Prisma.$EpisodesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserEpisodes model
   */
  interface UserEpisodesFieldRefs {
    readonly id_user: FieldRef<"UserEpisodes", 'String'>
    readonly id_episode: FieldRef<"UserEpisodes", 'Int'>
    readonly watched_at: FieldRef<"UserEpisodes", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserEpisodes findUnique
   */
  export type UserEpisodesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserEpisodes
     */
    select?: UserEpisodesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserEpisodes
     */
    omit?: UserEpisodesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserEpisodesInclude<ExtArgs> | null
    /**
     * Filter, which UserEpisodes to fetch.
     */
    where: UserEpisodesWhereUniqueInput
  }

  /**
   * UserEpisodes findUniqueOrThrow
   */
  export type UserEpisodesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserEpisodes
     */
    select?: UserEpisodesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserEpisodes
     */
    omit?: UserEpisodesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserEpisodesInclude<ExtArgs> | null
    /**
     * Filter, which UserEpisodes to fetch.
     */
    where: UserEpisodesWhereUniqueInput
  }

  /**
   * UserEpisodes findFirst
   */
  export type UserEpisodesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserEpisodes
     */
    select?: UserEpisodesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserEpisodes
     */
    omit?: UserEpisodesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserEpisodesInclude<ExtArgs> | null
    /**
     * Filter, which UserEpisodes to fetch.
     */
    where?: UserEpisodesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserEpisodes to fetch.
     */
    orderBy?: UserEpisodesOrderByWithRelationInput | UserEpisodesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserEpisodes.
     */
    cursor?: UserEpisodesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserEpisodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserEpisodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserEpisodes.
     */
    distinct?: UserEpisodesScalarFieldEnum | UserEpisodesScalarFieldEnum[]
  }

  /**
   * UserEpisodes findFirstOrThrow
   */
  export type UserEpisodesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserEpisodes
     */
    select?: UserEpisodesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserEpisodes
     */
    omit?: UserEpisodesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserEpisodesInclude<ExtArgs> | null
    /**
     * Filter, which UserEpisodes to fetch.
     */
    where?: UserEpisodesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserEpisodes to fetch.
     */
    orderBy?: UserEpisodesOrderByWithRelationInput | UserEpisodesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserEpisodes.
     */
    cursor?: UserEpisodesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserEpisodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserEpisodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserEpisodes.
     */
    distinct?: UserEpisodesScalarFieldEnum | UserEpisodesScalarFieldEnum[]
  }

  /**
   * UserEpisodes findMany
   */
  export type UserEpisodesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserEpisodes
     */
    select?: UserEpisodesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserEpisodes
     */
    omit?: UserEpisodesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserEpisodesInclude<ExtArgs> | null
    /**
     * Filter, which UserEpisodes to fetch.
     */
    where?: UserEpisodesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserEpisodes to fetch.
     */
    orderBy?: UserEpisodesOrderByWithRelationInput | UserEpisodesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserEpisodes.
     */
    cursor?: UserEpisodesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserEpisodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserEpisodes.
     */
    skip?: number
    distinct?: UserEpisodesScalarFieldEnum | UserEpisodesScalarFieldEnum[]
  }

  /**
   * UserEpisodes create
   */
  export type UserEpisodesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserEpisodes
     */
    select?: UserEpisodesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserEpisodes
     */
    omit?: UserEpisodesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserEpisodesInclude<ExtArgs> | null
    /**
     * The data needed to create a UserEpisodes.
     */
    data: XOR<UserEpisodesCreateInput, UserEpisodesUncheckedCreateInput>
  }

  /**
   * UserEpisodes createMany
   */
  export type UserEpisodesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserEpisodes.
     */
    data: UserEpisodesCreateManyInput | UserEpisodesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserEpisodes update
   */
  export type UserEpisodesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserEpisodes
     */
    select?: UserEpisodesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserEpisodes
     */
    omit?: UserEpisodesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserEpisodesInclude<ExtArgs> | null
    /**
     * The data needed to update a UserEpisodes.
     */
    data: XOR<UserEpisodesUpdateInput, UserEpisodesUncheckedUpdateInput>
    /**
     * Choose, which UserEpisodes to update.
     */
    where: UserEpisodesWhereUniqueInput
  }

  /**
   * UserEpisodes updateMany
   */
  export type UserEpisodesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserEpisodes.
     */
    data: XOR<UserEpisodesUpdateManyMutationInput, UserEpisodesUncheckedUpdateManyInput>
    /**
     * Filter which UserEpisodes to update
     */
    where?: UserEpisodesWhereInput
    /**
     * Limit how many UserEpisodes to update.
     */
    limit?: number
  }

  /**
   * UserEpisodes upsert
   */
  export type UserEpisodesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserEpisodes
     */
    select?: UserEpisodesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserEpisodes
     */
    omit?: UserEpisodesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserEpisodesInclude<ExtArgs> | null
    /**
     * The filter to search for the UserEpisodes to update in case it exists.
     */
    where: UserEpisodesWhereUniqueInput
    /**
     * In case the UserEpisodes found by the `where` argument doesn't exist, create a new UserEpisodes with this data.
     */
    create: XOR<UserEpisodesCreateInput, UserEpisodesUncheckedCreateInput>
    /**
     * In case the UserEpisodes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserEpisodesUpdateInput, UserEpisodesUncheckedUpdateInput>
  }

  /**
   * UserEpisodes delete
   */
  export type UserEpisodesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserEpisodes
     */
    select?: UserEpisodesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserEpisodes
     */
    omit?: UserEpisodesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserEpisodesInclude<ExtArgs> | null
    /**
     * Filter which UserEpisodes to delete.
     */
    where: UserEpisodesWhereUniqueInput
  }

  /**
   * UserEpisodes deleteMany
   */
  export type UserEpisodesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserEpisodes to delete
     */
    where?: UserEpisodesWhereInput
    /**
     * Limit how many UserEpisodes to delete.
     */
    limit?: number
  }

  /**
   * UserEpisodes without action
   */
  export type UserEpisodesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserEpisodes
     */
    select?: UserEpisodesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserEpisodes
     */
    omit?: UserEpisodesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserEpisodesInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    emailVerified: 'emailVerified',
    image: 'image',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    expiresAt: 'expiresAt',
    token: 'token',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    ipAddress: 'ipAddress',
    userAgent: 'userAgent',
    userId: 'userId'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const AccountScalarFieldEnum: {
    id: 'id',
    accountId: 'accountId',
    providerId: 'providerId',
    userId: 'userId',
    accessToken: 'accessToken',
    refreshToken: 'refreshToken',
    idToken: 'idToken',
    accessTokenExpiresAt: 'accessTokenExpiresAt',
    refreshTokenExpiresAt: 'refreshTokenExpiresAt',
    scope: 'scope',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const VerificationScalarFieldEnum: {
    id: 'id',
    identifier: 'identifier',
    value: 'value',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VerificationScalarFieldEnum = (typeof VerificationScalarFieldEnum)[keyof typeof VerificationScalarFieldEnum]


  export const GenresScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type GenresScalarFieldEnum = (typeof GenresScalarFieldEnum)[keyof typeof GenresScalarFieldEnum]


  export const SeriesGenresScalarFieldEnum: {
    id_show: 'id_show',
    id_genre: 'id_genre'
  };

  export type SeriesGenresScalarFieldEnum = (typeof SeriesGenresScalarFieldEnum)[keyof typeof SeriesGenresScalarFieldEnum]


  export const ShowCommentsScalarFieldEnum: {
    id: 'id',
    content: 'content',
    postedAt: 'postedAt',
    id_user: 'id_user',
    id_show: 'id_show'
  };

  export type ShowCommentsScalarFieldEnum = (typeof ShowCommentsScalarFieldEnum)[keyof typeof ShowCommentsScalarFieldEnum]


  export const EpisodesCommentsScalarFieldEnum: {
    id: 'id',
    content: 'content',
    postedAt: 'postedAt',
    id_user: 'id_user',
    id_episode: 'id_episode'
  };

  export type EpisodesCommentsScalarFieldEnum = (typeof EpisodesCommentsScalarFieldEnum)[keyof typeof EpisodesCommentsScalarFieldEnum]


  export const EpisodesScalarFieldEnum: {
    episode_id: 'episode_id',
    season_id: 'season_id',
    name: 'name',
    season_number: 'season_number',
    episode_number: 'episode_number',
    airdate: 'airdate',
    summary: 'summary',
    url: 'url',
    image: 'image'
  };

  export type EpisodesScalarFieldEnum = (typeof EpisodesScalarFieldEnum)[keyof typeof EpisodesScalarFieldEnum]


  export const CastScalarFieldEnum: {
    person_id: 'person_id',
    name: 'name',
    image: 'image'
  };

  export type CastScalarFieldEnum = (typeof CastScalarFieldEnum)[keyof typeof CastScalarFieldEnum]


  export const SeasonsScalarFieldEnum: {
    season_id: 'season_id',
    show_id: 'show_id',
    summary: 'summary',
    image: 'image'
  };

  export type SeasonsScalarFieldEnum = (typeof SeasonsScalarFieldEnum)[keyof typeof SeasonsScalarFieldEnum]


  export const ShowCastScalarFieldEnum: {
    show_id: 'show_id',
    person_id: 'person_id',
    character_name: 'character_name'
  };

  export type ShowCastScalarFieldEnum = (typeof ShowCastScalarFieldEnum)[keyof typeof ShowCastScalarFieldEnum]


  export const PlatformsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    type: 'type',
    country_code: 'country_code'
  };

  export type PlatformsScalarFieldEnum = (typeof PlatformsScalarFieldEnum)[keyof typeof PlatformsScalarFieldEnum]


  export const SeriesPlatformsScalarFieldEnum: {
    id_show: 'id_show',
    id_platform: 'id_platform'
  };

  export type SeriesPlatformsScalarFieldEnum = (typeof SeriesPlatformsScalarFieldEnum)[keyof typeof SeriesPlatformsScalarFieldEnum]


  export const ShowsScalarFieldEnum: {
    show_id: 'show_id',
    title: 'title',
    summary: 'summary',
    image: 'image'
  };

  export type ShowsScalarFieldEnum = (typeof ShowsScalarFieldEnum)[keyof typeof ShowsScalarFieldEnum]


  export const UserShowsScalarFieldEnum: {
    id_user: 'id_user',
    id_show: 'id_show',
    is_favorite: 'is_favorite',
    is_archived: 'is_archived',
    status: 'status',
    added_at: 'added_at',
    rating: 'rating'
  };

  export type UserShowsScalarFieldEnum = (typeof UserShowsScalarFieldEnum)[keyof typeof UserShowsScalarFieldEnum]


  export const UserEpisodesScalarFieldEnum: {
    id_user: 'id_user',
    id_episode: 'id_episode',
    watched_at: 'watched_at'
  };

  export type UserEpisodesScalarFieldEnum = (typeof UserEpisodesScalarFieldEnum)[keyof typeof UserEpisodesScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const UserOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    image: 'image'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const SessionOrderByRelevanceFieldEnum: {
    id: 'id',
    token: 'token',
    ipAddress: 'ipAddress',
    userAgent: 'userAgent',
    userId: 'userId'
  };

  export type SessionOrderByRelevanceFieldEnum = (typeof SessionOrderByRelevanceFieldEnum)[keyof typeof SessionOrderByRelevanceFieldEnum]


  export const AccountOrderByRelevanceFieldEnum: {
    id: 'id',
    accountId: 'accountId',
    providerId: 'providerId',
    userId: 'userId',
    accessToken: 'accessToken',
    refreshToken: 'refreshToken',
    idToken: 'idToken',
    scope: 'scope',
    password: 'password'
  };

  export type AccountOrderByRelevanceFieldEnum = (typeof AccountOrderByRelevanceFieldEnum)[keyof typeof AccountOrderByRelevanceFieldEnum]


  export const VerificationOrderByRelevanceFieldEnum: {
    id: 'id',
    identifier: 'identifier',
    value: 'value'
  };

  export type VerificationOrderByRelevanceFieldEnum = (typeof VerificationOrderByRelevanceFieldEnum)[keyof typeof VerificationOrderByRelevanceFieldEnum]


  export const GenresOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type GenresOrderByRelevanceFieldEnum = (typeof GenresOrderByRelevanceFieldEnum)[keyof typeof GenresOrderByRelevanceFieldEnum]


  export const ShowCommentsOrderByRelevanceFieldEnum: {
    content: 'content',
    id_user: 'id_user'
  };

  export type ShowCommentsOrderByRelevanceFieldEnum = (typeof ShowCommentsOrderByRelevanceFieldEnum)[keyof typeof ShowCommentsOrderByRelevanceFieldEnum]


  export const EpisodesCommentsOrderByRelevanceFieldEnum: {
    content: 'content',
    id_user: 'id_user'
  };

  export type EpisodesCommentsOrderByRelevanceFieldEnum = (typeof EpisodesCommentsOrderByRelevanceFieldEnum)[keyof typeof EpisodesCommentsOrderByRelevanceFieldEnum]


  export const EpisodesOrderByRelevanceFieldEnum: {
    name: 'name',
    airdate: 'airdate',
    summary: 'summary',
    url: 'url',
    image: 'image'
  };

  export type EpisodesOrderByRelevanceFieldEnum = (typeof EpisodesOrderByRelevanceFieldEnum)[keyof typeof EpisodesOrderByRelevanceFieldEnum]


  export const CastOrderByRelevanceFieldEnum: {
    name: 'name',
    image: 'image'
  };

  export type CastOrderByRelevanceFieldEnum = (typeof CastOrderByRelevanceFieldEnum)[keyof typeof CastOrderByRelevanceFieldEnum]


  export const SeasonsOrderByRelevanceFieldEnum: {
    summary: 'summary',
    image: 'image'
  };

  export type SeasonsOrderByRelevanceFieldEnum = (typeof SeasonsOrderByRelevanceFieldEnum)[keyof typeof SeasonsOrderByRelevanceFieldEnum]


  export const ShowCastOrderByRelevanceFieldEnum: {
    character_name: 'character_name'
  };

  export type ShowCastOrderByRelevanceFieldEnum = (typeof ShowCastOrderByRelevanceFieldEnum)[keyof typeof ShowCastOrderByRelevanceFieldEnum]


  export const PlatformsOrderByRelevanceFieldEnum: {
    name: 'name',
    type: 'type',
    country_code: 'country_code'
  };

  export type PlatformsOrderByRelevanceFieldEnum = (typeof PlatformsOrderByRelevanceFieldEnum)[keyof typeof PlatformsOrderByRelevanceFieldEnum]


  export const ShowsOrderByRelevanceFieldEnum: {
    title: 'title',
    summary: 'summary',
    image: 'image'
  };

  export type ShowsOrderByRelevanceFieldEnum = (typeof ShowsOrderByRelevanceFieldEnum)[keyof typeof ShowsOrderByRelevanceFieldEnum]


  export const UserShowsOrderByRelevanceFieldEnum: {
    id_user: 'id_user'
  };

  export type UserShowsOrderByRelevanceFieldEnum = (typeof UserShowsOrderByRelevanceFieldEnum)[keyof typeof UserShowsOrderByRelevanceFieldEnum]


  export const UserEpisodesOrderByRelevanceFieldEnum: {
    id_user: 'id_user'
  };

  export type UserEpisodesOrderByRelevanceFieldEnum = (typeof UserEpisodesOrderByRelevanceFieldEnum)[keyof typeof UserEpisodesOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'users_shows_status'
   */
  export type Enumusers_shows_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'users_shows_status'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    emailVerified?: BoolFilter<"User"> | boolean
    image?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    ShowComments?: ShowCommentsListRelationFilter
    EpisodeComments?: EpisodesCommentsListRelationFilter
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
    users_shows?: UserShowsListRelationFilter
    users_episodes?: UserEpisodesListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ShowComments?: ShowCommentsOrderByRelationAggregateInput
    EpisodeComments?: EpisodesCommentsOrderByRelationAggregateInput
    accounts?: AccountOrderByRelationAggregateInput
    sessions?: SessionOrderByRelationAggregateInput
    users_shows?: UserShowsOrderByRelationAggregateInput
    users_episodes?: UserEpisodesOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    emailVerified?: BoolFilter<"User"> | boolean
    image?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    ShowComments?: ShowCommentsListRelationFilter
    EpisodeComments?: EpisodesCommentsListRelationFilter
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
    users_shows?: UserShowsListRelationFilter
    users_episodes?: UserEpisodesListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    emailVerified?: BoolWithAggregatesFilter<"User"> | boolean
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    token?: StringFilter<"Session"> | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    ipAddress?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    userId?: StringFilter<"Session"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    _relevance?: SessionOrderByRelevanceInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    ipAddress?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    userId?: StringFilter<"Session"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "token">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    userId?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    token?: StringWithAggregatesFilter<"Session"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    ipAddress?: StringNullableWithAggregatesFilter<"Session"> | string | null
    userAgent?: StringNullableWithAggregatesFilter<"Session"> | string | null
    userId?: StringWithAggregatesFilter<"Session"> | string
  }

  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    accountId?: StringFilter<"Account"> | string
    providerId?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    accessToken?: StringNullableFilter<"Account"> | string | null
    refreshToken?: StringNullableFilter<"Account"> | string | null
    idToken?: StringNullableFilter<"Account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    password?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    idToken?: SortOrderInput | SortOrder
    accessTokenExpiresAt?: SortOrderInput | SortOrder
    refreshTokenExpiresAt?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    _relevance?: AccountOrderByRelevanceInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    accountId?: StringFilter<"Account"> | string
    providerId?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    accessToken?: StringNullableFilter<"Account"> | string | null
    refreshToken?: StringNullableFilter<"Account"> | string | null
    idToken?: StringNullableFilter<"Account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    password?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    idToken?: SortOrderInput | SortOrder
    accessTokenExpiresAt?: SortOrderInput | SortOrder
    refreshTokenExpiresAt?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AccountCountOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    accountId?: StringWithAggregatesFilter<"Account"> | string
    providerId?: StringWithAggregatesFilter<"Account"> | string
    userId?: StringWithAggregatesFilter<"Account"> | string
    accessToken?: StringNullableWithAggregatesFilter<"Account"> | string | null
    refreshToken?: StringNullableWithAggregatesFilter<"Account"> | string | null
    idToken?: StringNullableWithAggregatesFilter<"Account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableWithAggregatesFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableWithAggregatesFilter<"Account"> | Date | string | null
    scope?: StringNullableWithAggregatesFilter<"Account"> | string | null
    password?: StringNullableWithAggregatesFilter<"Account"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
  }

  export type VerificationWhereInput = {
    AND?: VerificationWhereInput | VerificationWhereInput[]
    OR?: VerificationWhereInput[]
    NOT?: VerificationWhereInput | VerificationWhereInput[]
    id?: StringFilter<"Verification"> | string
    identifier?: StringFilter<"Verification"> | string
    value?: StringFilter<"Verification"> | string
    expiresAt?: DateTimeFilter<"Verification"> | Date | string
    createdAt?: DateTimeNullableFilter<"Verification"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Verification"> | Date | string | null
  }

  export type VerificationOrderByWithRelationInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _relevance?: VerificationOrderByRelevanceInput
  }

  export type VerificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VerificationWhereInput | VerificationWhereInput[]
    OR?: VerificationWhereInput[]
    NOT?: VerificationWhereInput | VerificationWhereInput[]
    identifier?: StringFilter<"Verification"> | string
    value?: StringFilter<"Verification"> | string
    expiresAt?: DateTimeFilter<"Verification"> | Date | string
    createdAt?: DateTimeNullableFilter<"Verification"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Verification"> | Date | string | null
  }, "id">

  export type VerificationOrderByWithAggregationInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: VerificationCountOrderByAggregateInput
    _max?: VerificationMaxOrderByAggregateInput
    _min?: VerificationMinOrderByAggregateInput
  }

  export type VerificationScalarWhereWithAggregatesInput = {
    AND?: VerificationScalarWhereWithAggregatesInput | VerificationScalarWhereWithAggregatesInput[]
    OR?: VerificationScalarWhereWithAggregatesInput[]
    NOT?: VerificationScalarWhereWithAggregatesInput | VerificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Verification"> | string
    identifier?: StringWithAggregatesFilter<"Verification"> | string
    value?: StringWithAggregatesFilter<"Verification"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"Verification"> | Date | string
    createdAt?: DateTimeNullableWithAggregatesFilter<"Verification"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Verification"> | Date | string | null
  }

  export type GenresWhereInput = {
    AND?: GenresWhereInput | GenresWhereInput[]
    OR?: GenresWhereInput[]
    NOT?: GenresWhereInput | GenresWhereInput[]
    id?: IntFilter<"Genres"> | number
    name?: StringFilter<"Genres"> | string
    seriesGenres?: SeriesGenresListRelationFilter
  }

  export type GenresOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    seriesGenres?: SeriesGenresOrderByRelationAggregateInput
    _relevance?: GenresOrderByRelevanceInput
  }

  export type GenresWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: GenresWhereInput | GenresWhereInput[]
    OR?: GenresWhereInput[]
    NOT?: GenresWhereInput | GenresWhereInput[]
    name?: StringFilter<"Genres"> | string
    seriesGenres?: SeriesGenresListRelationFilter
  }, "id">

  export type GenresOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: GenresCountOrderByAggregateInput
    _avg?: GenresAvgOrderByAggregateInput
    _max?: GenresMaxOrderByAggregateInput
    _min?: GenresMinOrderByAggregateInput
    _sum?: GenresSumOrderByAggregateInput
  }

  export type GenresScalarWhereWithAggregatesInput = {
    AND?: GenresScalarWhereWithAggregatesInput | GenresScalarWhereWithAggregatesInput[]
    OR?: GenresScalarWhereWithAggregatesInput[]
    NOT?: GenresScalarWhereWithAggregatesInput | GenresScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Genres"> | number
    name?: StringWithAggregatesFilter<"Genres"> | string
  }

  export type SeriesGenresWhereInput = {
    AND?: SeriesGenresWhereInput | SeriesGenresWhereInput[]
    OR?: SeriesGenresWhereInput[]
    NOT?: SeriesGenresWhereInput | SeriesGenresWhereInput[]
    id_show?: IntFilter<"SeriesGenres"> | number
    id_genre?: IntFilter<"SeriesGenres"> | number
    genres?: XOR<GenresScalarRelationFilter, GenresWhereInput>
    shows?: XOR<ShowsScalarRelationFilter, ShowsWhereInput>
  }

  export type SeriesGenresOrderByWithRelationInput = {
    id_show?: SortOrder
    id_genre?: SortOrder
    genres?: GenresOrderByWithRelationInput
    shows?: ShowsOrderByWithRelationInput
  }

  export type SeriesGenresWhereUniqueInput = Prisma.AtLeast<{
    id_show_id_genre?: SeriesGenresId_showId_genreCompoundUniqueInput
    AND?: SeriesGenresWhereInput | SeriesGenresWhereInput[]
    OR?: SeriesGenresWhereInput[]
    NOT?: SeriesGenresWhereInput | SeriesGenresWhereInput[]
    id_show?: IntFilter<"SeriesGenres"> | number
    id_genre?: IntFilter<"SeriesGenres"> | number
    genres?: XOR<GenresScalarRelationFilter, GenresWhereInput>
    shows?: XOR<ShowsScalarRelationFilter, ShowsWhereInput>
  }, "id_show_id_genre">

  export type SeriesGenresOrderByWithAggregationInput = {
    id_show?: SortOrder
    id_genre?: SortOrder
    _count?: SeriesGenresCountOrderByAggregateInput
    _avg?: SeriesGenresAvgOrderByAggregateInput
    _max?: SeriesGenresMaxOrderByAggregateInput
    _min?: SeriesGenresMinOrderByAggregateInput
    _sum?: SeriesGenresSumOrderByAggregateInput
  }

  export type SeriesGenresScalarWhereWithAggregatesInput = {
    AND?: SeriesGenresScalarWhereWithAggregatesInput | SeriesGenresScalarWhereWithAggregatesInput[]
    OR?: SeriesGenresScalarWhereWithAggregatesInput[]
    NOT?: SeriesGenresScalarWhereWithAggregatesInput | SeriesGenresScalarWhereWithAggregatesInput[]
    id_show?: IntWithAggregatesFilter<"SeriesGenres"> | number
    id_genre?: IntWithAggregatesFilter<"SeriesGenres"> | number
  }

  export type ShowCommentsWhereInput = {
    AND?: ShowCommentsWhereInput | ShowCommentsWhereInput[]
    OR?: ShowCommentsWhereInput[]
    NOT?: ShowCommentsWhereInput | ShowCommentsWhereInput[]
    id?: IntFilter<"ShowComments"> | number
    content?: StringFilter<"ShowComments"> | string
    postedAt?: DateTimeFilter<"ShowComments"> | Date | string
    id_user?: StringFilter<"ShowComments"> | string
    id_show?: IntFilter<"ShowComments"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    show?: XOR<ShowsScalarRelationFilter, ShowsWhereInput>
  }

  export type ShowCommentsOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    postedAt?: SortOrder
    id_user?: SortOrder
    id_show?: SortOrder
    user?: UserOrderByWithRelationInput
    show?: ShowsOrderByWithRelationInput
    _relevance?: ShowCommentsOrderByRelevanceInput
  }

  export type ShowCommentsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ShowCommentsWhereInput | ShowCommentsWhereInput[]
    OR?: ShowCommentsWhereInput[]
    NOT?: ShowCommentsWhereInput | ShowCommentsWhereInput[]
    content?: StringFilter<"ShowComments"> | string
    postedAt?: DateTimeFilter<"ShowComments"> | Date | string
    id_user?: StringFilter<"ShowComments"> | string
    id_show?: IntFilter<"ShowComments"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    show?: XOR<ShowsScalarRelationFilter, ShowsWhereInput>
  }, "id">

  export type ShowCommentsOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    postedAt?: SortOrder
    id_user?: SortOrder
    id_show?: SortOrder
    _count?: ShowCommentsCountOrderByAggregateInput
    _avg?: ShowCommentsAvgOrderByAggregateInput
    _max?: ShowCommentsMaxOrderByAggregateInput
    _min?: ShowCommentsMinOrderByAggregateInput
    _sum?: ShowCommentsSumOrderByAggregateInput
  }

  export type ShowCommentsScalarWhereWithAggregatesInput = {
    AND?: ShowCommentsScalarWhereWithAggregatesInput | ShowCommentsScalarWhereWithAggregatesInput[]
    OR?: ShowCommentsScalarWhereWithAggregatesInput[]
    NOT?: ShowCommentsScalarWhereWithAggregatesInput | ShowCommentsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ShowComments"> | number
    content?: StringWithAggregatesFilter<"ShowComments"> | string
    postedAt?: DateTimeWithAggregatesFilter<"ShowComments"> | Date | string
    id_user?: StringWithAggregatesFilter<"ShowComments"> | string
    id_show?: IntWithAggregatesFilter<"ShowComments"> | number
  }

  export type EpisodesCommentsWhereInput = {
    AND?: EpisodesCommentsWhereInput | EpisodesCommentsWhereInput[]
    OR?: EpisodesCommentsWhereInput[]
    NOT?: EpisodesCommentsWhereInput | EpisodesCommentsWhereInput[]
    id?: IntFilter<"EpisodesComments"> | number
    content?: StringFilter<"EpisodesComments"> | string
    postedAt?: DateTimeFilter<"EpisodesComments"> | Date | string
    id_user?: StringFilter<"EpisodesComments"> | string
    id_episode?: IntFilter<"EpisodesComments"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    episode?: XOR<EpisodesScalarRelationFilter, EpisodesWhereInput>
  }

  export type EpisodesCommentsOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    postedAt?: SortOrder
    id_user?: SortOrder
    id_episode?: SortOrder
    user?: UserOrderByWithRelationInput
    episode?: EpisodesOrderByWithRelationInput
    _relevance?: EpisodesCommentsOrderByRelevanceInput
  }

  export type EpisodesCommentsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EpisodesCommentsWhereInput | EpisodesCommentsWhereInput[]
    OR?: EpisodesCommentsWhereInput[]
    NOT?: EpisodesCommentsWhereInput | EpisodesCommentsWhereInput[]
    content?: StringFilter<"EpisodesComments"> | string
    postedAt?: DateTimeFilter<"EpisodesComments"> | Date | string
    id_user?: StringFilter<"EpisodesComments"> | string
    id_episode?: IntFilter<"EpisodesComments"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    episode?: XOR<EpisodesScalarRelationFilter, EpisodesWhereInput>
  }, "id">

  export type EpisodesCommentsOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    postedAt?: SortOrder
    id_user?: SortOrder
    id_episode?: SortOrder
    _count?: EpisodesCommentsCountOrderByAggregateInput
    _avg?: EpisodesCommentsAvgOrderByAggregateInput
    _max?: EpisodesCommentsMaxOrderByAggregateInput
    _min?: EpisodesCommentsMinOrderByAggregateInput
    _sum?: EpisodesCommentsSumOrderByAggregateInput
  }

  export type EpisodesCommentsScalarWhereWithAggregatesInput = {
    AND?: EpisodesCommentsScalarWhereWithAggregatesInput | EpisodesCommentsScalarWhereWithAggregatesInput[]
    OR?: EpisodesCommentsScalarWhereWithAggregatesInput[]
    NOT?: EpisodesCommentsScalarWhereWithAggregatesInput | EpisodesCommentsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"EpisodesComments"> | number
    content?: StringWithAggregatesFilter<"EpisodesComments"> | string
    postedAt?: DateTimeWithAggregatesFilter<"EpisodesComments"> | Date | string
    id_user?: StringWithAggregatesFilter<"EpisodesComments"> | string
    id_episode?: IntWithAggregatesFilter<"EpisodesComments"> | number
  }

  export type EpisodesWhereInput = {
    AND?: EpisodesWhereInput | EpisodesWhereInput[]
    OR?: EpisodesWhereInput[]
    NOT?: EpisodesWhereInput | EpisodesWhereInput[]
    episode_id?: IntFilter<"Episodes"> | number
    season_id?: IntFilter<"Episodes"> | number
    name?: StringFilter<"Episodes"> | string
    season_number?: IntFilter<"Episodes"> | number
    episode_number?: IntNullableFilter<"Episodes"> | number | null
    airdate?: StringNullableFilter<"Episodes"> | string | null
    summary?: StringNullableFilter<"Episodes"> | string | null
    url?: StringNullableFilter<"Episodes"> | string | null
    image?: StringNullableFilter<"Episodes"> | string | null
    seasons?: XOR<SeasonsScalarRelationFilter, SeasonsWhereInput>
    comments?: EpisodesCommentsListRelationFilter
    users?: UserEpisodesListRelationFilter
  }

  export type EpisodesOrderByWithRelationInput = {
    episode_id?: SortOrder
    season_id?: SortOrder
    name?: SortOrder
    season_number?: SortOrder
    episode_number?: SortOrderInput | SortOrder
    airdate?: SortOrderInput | SortOrder
    summary?: SortOrderInput | SortOrder
    url?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    seasons?: SeasonsOrderByWithRelationInput
    comments?: EpisodesCommentsOrderByRelationAggregateInput
    users?: UserEpisodesOrderByRelationAggregateInput
    _relevance?: EpisodesOrderByRelevanceInput
  }

  export type EpisodesWhereUniqueInput = Prisma.AtLeast<{
    episode_id?: number
    AND?: EpisodesWhereInput | EpisodesWhereInput[]
    OR?: EpisodesWhereInput[]
    NOT?: EpisodesWhereInput | EpisodesWhereInput[]
    season_id?: IntFilter<"Episodes"> | number
    name?: StringFilter<"Episodes"> | string
    season_number?: IntFilter<"Episodes"> | number
    episode_number?: IntNullableFilter<"Episodes"> | number | null
    airdate?: StringNullableFilter<"Episodes"> | string | null
    summary?: StringNullableFilter<"Episodes"> | string | null
    url?: StringNullableFilter<"Episodes"> | string | null
    image?: StringNullableFilter<"Episodes"> | string | null
    seasons?: XOR<SeasonsScalarRelationFilter, SeasonsWhereInput>
    comments?: EpisodesCommentsListRelationFilter
    users?: UserEpisodesListRelationFilter
  }, "episode_id">

  export type EpisodesOrderByWithAggregationInput = {
    episode_id?: SortOrder
    season_id?: SortOrder
    name?: SortOrder
    season_number?: SortOrder
    episode_number?: SortOrderInput | SortOrder
    airdate?: SortOrderInput | SortOrder
    summary?: SortOrderInput | SortOrder
    url?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    _count?: EpisodesCountOrderByAggregateInput
    _avg?: EpisodesAvgOrderByAggregateInput
    _max?: EpisodesMaxOrderByAggregateInput
    _min?: EpisodesMinOrderByAggregateInput
    _sum?: EpisodesSumOrderByAggregateInput
  }

  export type EpisodesScalarWhereWithAggregatesInput = {
    AND?: EpisodesScalarWhereWithAggregatesInput | EpisodesScalarWhereWithAggregatesInput[]
    OR?: EpisodesScalarWhereWithAggregatesInput[]
    NOT?: EpisodesScalarWhereWithAggregatesInput | EpisodesScalarWhereWithAggregatesInput[]
    episode_id?: IntWithAggregatesFilter<"Episodes"> | number
    season_id?: IntWithAggregatesFilter<"Episodes"> | number
    name?: StringWithAggregatesFilter<"Episodes"> | string
    season_number?: IntWithAggregatesFilter<"Episodes"> | number
    episode_number?: IntNullableWithAggregatesFilter<"Episodes"> | number | null
    airdate?: StringNullableWithAggregatesFilter<"Episodes"> | string | null
    summary?: StringNullableWithAggregatesFilter<"Episodes"> | string | null
    url?: StringNullableWithAggregatesFilter<"Episodes"> | string | null
    image?: StringNullableWithAggregatesFilter<"Episodes"> | string | null
  }

  export type CastWhereInput = {
    AND?: CastWhereInput | CastWhereInput[]
    OR?: CastWhereInput[]
    NOT?: CastWhereInput | CastWhereInput[]
    person_id?: IntFilter<"Cast"> | number
    name?: StringFilter<"Cast"> | string
    image?: StringNullableFilter<"Cast"> | string | null
    show_cast?: ShowCastListRelationFilter
  }

  export type CastOrderByWithRelationInput = {
    person_id?: SortOrder
    name?: SortOrder
    image?: SortOrderInput | SortOrder
    show_cast?: ShowCastOrderByRelationAggregateInput
    _relevance?: CastOrderByRelevanceInput
  }

  export type CastWhereUniqueInput = Prisma.AtLeast<{
    person_id?: number
    AND?: CastWhereInput | CastWhereInput[]
    OR?: CastWhereInput[]
    NOT?: CastWhereInput | CastWhereInput[]
    name?: StringFilter<"Cast"> | string
    image?: StringNullableFilter<"Cast"> | string | null
    show_cast?: ShowCastListRelationFilter
  }, "person_id">

  export type CastOrderByWithAggregationInput = {
    person_id?: SortOrder
    name?: SortOrder
    image?: SortOrderInput | SortOrder
    _count?: CastCountOrderByAggregateInput
    _avg?: CastAvgOrderByAggregateInput
    _max?: CastMaxOrderByAggregateInput
    _min?: CastMinOrderByAggregateInput
    _sum?: CastSumOrderByAggregateInput
  }

  export type CastScalarWhereWithAggregatesInput = {
    AND?: CastScalarWhereWithAggregatesInput | CastScalarWhereWithAggregatesInput[]
    OR?: CastScalarWhereWithAggregatesInput[]
    NOT?: CastScalarWhereWithAggregatesInput | CastScalarWhereWithAggregatesInput[]
    person_id?: IntWithAggregatesFilter<"Cast"> | number
    name?: StringWithAggregatesFilter<"Cast"> | string
    image?: StringNullableWithAggregatesFilter<"Cast"> | string | null
  }

  export type SeasonsWhereInput = {
    AND?: SeasonsWhereInput | SeasonsWhereInput[]
    OR?: SeasonsWhereInput[]
    NOT?: SeasonsWhereInput | SeasonsWhereInput[]
    season_id?: IntFilter<"Seasons"> | number
    show_id?: IntFilter<"Seasons"> | number
    summary?: StringNullableFilter<"Seasons"> | string | null
    image?: StringNullableFilter<"Seasons"> | string | null
    episodes?: EpisodesListRelationFilter
    shows?: XOR<ShowsScalarRelationFilter, ShowsWhereInput>
  }

  export type SeasonsOrderByWithRelationInput = {
    season_id?: SortOrder
    show_id?: SortOrder
    summary?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    episodes?: EpisodesOrderByRelationAggregateInput
    shows?: ShowsOrderByWithRelationInput
    _relevance?: SeasonsOrderByRelevanceInput
  }

  export type SeasonsWhereUniqueInput = Prisma.AtLeast<{
    season_id?: number
    AND?: SeasonsWhereInput | SeasonsWhereInput[]
    OR?: SeasonsWhereInput[]
    NOT?: SeasonsWhereInput | SeasonsWhereInput[]
    show_id?: IntFilter<"Seasons"> | number
    summary?: StringNullableFilter<"Seasons"> | string | null
    image?: StringNullableFilter<"Seasons"> | string | null
    episodes?: EpisodesListRelationFilter
    shows?: XOR<ShowsScalarRelationFilter, ShowsWhereInput>
  }, "season_id">

  export type SeasonsOrderByWithAggregationInput = {
    season_id?: SortOrder
    show_id?: SortOrder
    summary?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    _count?: SeasonsCountOrderByAggregateInput
    _avg?: SeasonsAvgOrderByAggregateInput
    _max?: SeasonsMaxOrderByAggregateInput
    _min?: SeasonsMinOrderByAggregateInput
    _sum?: SeasonsSumOrderByAggregateInput
  }

  export type SeasonsScalarWhereWithAggregatesInput = {
    AND?: SeasonsScalarWhereWithAggregatesInput | SeasonsScalarWhereWithAggregatesInput[]
    OR?: SeasonsScalarWhereWithAggregatesInput[]
    NOT?: SeasonsScalarWhereWithAggregatesInput | SeasonsScalarWhereWithAggregatesInput[]
    season_id?: IntWithAggregatesFilter<"Seasons"> | number
    show_id?: IntWithAggregatesFilter<"Seasons"> | number
    summary?: StringNullableWithAggregatesFilter<"Seasons"> | string | null
    image?: StringNullableWithAggregatesFilter<"Seasons"> | string | null
  }

  export type ShowCastWhereInput = {
    AND?: ShowCastWhereInput | ShowCastWhereInput[]
    OR?: ShowCastWhereInput[]
    NOT?: ShowCastWhereInput | ShowCastWhereInput[]
    show_id?: IntFilter<"ShowCast"> | number
    person_id?: IntFilter<"ShowCast"> | number
    character_name?: StringFilter<"ShowCast"> | string
    shows?: XOR<ShowsScalarRelationFilter, ShowsWhereInput>
    cast?: XOR<CastScalarRelationFilter, CastWhereInput>
  }

  export type ShowCastOrderByWithRelationInput = {
    show_id?: SortOrder
    person_id?: SortOrder
    character_name?: SortOrder
    shows?: ShowsOrderByWithRelationInput
    cast?: CastOrderByWithRelationInput
    _relevance?: ShowCastOrderByRelevanceInput
  }

  export type ShowCastWhereUniqueInput = Prisma.AtLeast<{
    show_id_person_id?: ShowCastShow_idPerson_idCompoundUniqueInput
    AND?: ShowCastWhereInput | ShowCastWhereInput[]
    OR?: ShowCastWhereInput[]
    NOT?: ShowCastWhereInput | ShowCastWhereInput[]
    show_id?: IntFilter<"ShowCast"> | number
    person_id?: IntFilter<"ShowCast"> | number
    character_name?: StringFilter<"ShowCast"> | string
    shows?: XOR<ShowsScalarRelationFilter, ShowsWhereInput>
    cast?: XOR<CastScalarRelationFilter, CastWhereInput>
  }, "show_id_person_id">

  export type ShowCastOrderByWithAggregationInput = {
    show_id?: SortOrder
    person_id?: SortOrder
    character_name?: SortOrder
    _count?: ShowCastCountOrderByAggregateInput
    _avg?: ShowCastAvgOrderByAggregateInput
    _max?: ShowCastMaxOrderByAggregateInput
    _min?: ShowCastMinOrderByAggregateInput
    _sum?: ShowCastSumOrderByAggregateInput
  }

  export type ShowCastScalarWhereWithAggregatesInput = {
    AND?: ShowCastScalarWhereWithAggregatesInput | ShowCastScalarWhereWithAggregatesInput[]
    OR?: ShowCastScalarWhereWithAggregatesInput[]
    NOT?: ShowCastScalarWhereWithAggregatesInput | ShowCastScalarWhereWithAggregatesInput[]
    show_id?: IntWithAggregatesFilter<"ShowCast"> | number
    person_id?: IntWithAggregatesFilter<"ShowCast"> | number
    character_name?: StringWithAggregatesFilter<"ShowCast"> | string
  }

  export type PlatformsWhereInput = {
    AND?: PlatformsWhereInput | PlatformsWhereInput[]
    OR?: PlatformsWhereInput[]
    NOT?: PlatformsWhereInput | PlatformsWhereInput[]
    id?: IntFilter<"Platforms"> | number
    name?: StringFilter<"Platforms"> | string
    type?: StringFilter<"Platforms"> | string
    country_code?: StringNullableFilter<"Platforms"> | string | null
    seriesPlatforms?: SeriesPlatformsListRelationFilter
  }

  export type PlatformsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    country_code?: SortOrderInput | SortOrder
    seriesPlatforms?: SeriesPlatformsOrderByRelationAggregateInput
    _relevance?: PlatformsOrderByRelevanceInput
  }

  export type PlatformsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PlatformsWhereInput | PlatformsWhereInput[]
    OR?: PlatformsWhereInput[]
    NOT?: PlatformsWhereInput | PlatformsWhereInput[]
    name?: StringFilter<"Platforms"> | string
    type?: StringFilter<"Platforms"> | string
    country_code?: StringNullableFilter<"Platforms"> | string | null
    seriesPlatforms?: SeriesPlatformsListRelationFilter
  }, "id">

  export type PlatformsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    country_code?: SortOrderInput | SortOrder
    _count?: PlatformsCountOrderByAggregateInput
    _avg?: PlatformsAvgOrderByAggregateInput
    _max?: PlatformsMaxOrderByAggregateInput
    _min?: PlatformsMinOrderByAggregateInput
    _sum?: PlatformsSumOrderByAggregateInput
  }

  export type PlatformsScalarWhereWithAggregatesInput = {
    AND?: PlatformsScalarWhereWithAggregatesInput | PlatformsScalarWhereWithAggregatesInput[]
    OR?: PlatformsScalarWhereWithAggregatesInput[]
    NOT?: PlatformsScalarWhereWithAggregatesInput | PlatformsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Platforms"> | number
    name?: StringWithAggregatesFilter<"Platforms"> | string
    type?: StringWithAggregatesFilter<"Platforms"> | string
    country_code?: StringNullableWithAggregatesFilter<"Platforms"> | string | null
  }

  export type SeriesPlatformsWhereInput = {
    AND?: SeriesPlatformsWhereInput | SeriesPlatformsWhereInput[]
    OR?: SeriesPlatformsWhereInput[]
    NOT?: SeriesPlatformsWhereInput | SeriesPlatformsWhereInput[]
    id_show?: IntFilter<"SeriesPlatforms"> | number
    id_platform?: IntFilter<"SeriesPlatforms"> | number
    platforms?: XOR<PlatformsScalarRelationFilter, PlatformsWhereInput>
    shows?: XOR<ShowsScalarRelationFilter, ShowsWhereInput>
  }

  export type SeriesPlatformsOrderByWithRelationInput = {
    id_show?: SortOrder
    id_platform?: SortOrder
    platforms?: PlatformsOrderByWithRelationInput
    shows?: ShowsOrderByWithRelationInput
  }

  export type SeriesPlatformsWhereUniqueInput = Prisma.AtLeast<{
    id_show_id_platform?: SeriesPlatformsId_showId_platformCompoundUniqueInput
    AND?: SeriesPlatformsWhereInput | SeriesPlatformsWhereInput[]
    OR?: SeriesPlatformsWhereInput[]
    NOT?: SeriesPlatformsWhereInput | SeriesPlatformsWhereInput[]
    id_show?: IntFilter<"SeriesPlatforms"> | number
    id_platform?: IntFilter<"SeriesPlatforms"> | number
    platforms?: XOR<PlatformsScalarRelationFilter, PlatformsWhereInput>
    shows?: XOR<ShowsScalarRelationFilter, ShowsWhereInput>
  }, "id_show_id_platform">

  export type SeriesPlatformsOrderByWithAggregationInput = {
    id_show?: SortOrder
    id_platform?: SortOrder
    _count?: SeriesPlatformsCountOrderByAggregateInput
    _avg?: SeriesPlatformsAvgOrderByAggregateInput
    _max?: SeriesPlatformsMaxOrderByAggregateInput
    _min?: SeriesPlatformsMinOrderByAggregateInput
    _sum?: SeriesPlatformsSumOrderByAggregateInput
  }

  export type SeriesPlatformsScalarWhereWithAggregatesInput = {
    AND?: SeriesPlatformsScalarWhereWithAggregatesInput | SeriesPlatformsScalarWhereWithAggregatesInput[]
    OR?: SeriesPlatformsScalarWhereWithAggregatesInput[]
    NOT?: SeriesPlatformsScalarWhereWithAggregatesInput | SeriesPlatformsScalarWhereWithAggregatesInput[]
    id_show?: IntWithAggregatesFilter<"SeriesPlatforms"> | number
    id_platform?: IntWithAggregatesFilter<"SeriesPlatforms"> | number
  }

  export type ShowsWhereInput = {
    AND?: ShowsWhereInput | ShowsWhereInput[]
    OR?: ShowsWhereInput[]
    NOT?: ShowsWhereInput | ShowsWhereInput[]
    show_id?: IntFilter<"Shows"> | number
    title?: StringFilter<"Shows"> | string
    summary?: StringNullableFilter<"Shows"> | string | null
    image?: StringNullableFilter<"Shows"> | string | null
    seasons?: SeasonsListRelationFilter
    show_cast?: ShowCastListRelationFilter
    users_shows?: UserShowsListRelationFilter
    genres?: SeriesGenresListRelationFilter
    comments?: ShowCommentsListRelationFilter
    platforms?: SeriesPlatformsListRelationFilter
  }

  export type ShowsOrderByWithRelationInput = {
    show_id?: SortOrder
    title?: SortOrder
    summary?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    seasons?: SeasonsOrderByRelationAggregateInput
    show_cast?: ShowCastOrderByRelationAggregateInput
    users_shows?: UserShowsOrderByRelationAggregateInput
    genres?: SeriesGenresOrderByRelationAggregateInput
    comments?: ShowCommentsOrderByRelationAggregateInput
    platforms?: SeriesPlatformsOrderByRelationAggregateInput
    _relevance?: ShowsOrderByRelevanceInput
  }

  export type ShowsWhereUniqueInput = Prisma.AtLeast<{
    show_id?: number
    AND?: ShowsWhereInput | ShowsWhereInput[]
    OR?: ShowsWhereInput[]
    NOT?: ShowsWhereInput | ShowsWhereInput[]
    title?: StringFilter<"Shows"> | string
    summary?: StringNullableFilter<"Shows"> | string | null
    image?: StringNullableFilter<"Shows"> | string | null
    seasons?: SeasonsListRelationFilter
    show_cast?: ShowCastListRelationFilter
    users_shows?: UserShowsListRelationFilter
    genres?: SeriesGenresListRelationFilter
    comments?: ShowCommentsListRelationFilter
    platforms?: SeriesPlatformsListRelationFilter
  }, "show_id">

  export type ShowsOrderByWithAggregationInput = {
    show_id?: SortOrder
    title?: SortOrder
    summary?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    _count?: ShowsCountOrderByAggregateInput
    _avg?: ShowsAvgOrderByAggregateInput
    _max?: ShowsMaxOrderByAggregateInput
    _min?: ShowsMinOrderByAggregateInput
    _sum?: ShowsSumOrderByAggregateInput
  }

  export type ShowsScalarWhereWithAggregatesInput = {
    AND?: ShowsScalarWhereWithAggregatesInput | ShowsScalarWhereWithAggregatesInput[]
    OR?: ShowsScalarWhereWithAggregatesInput[]
    NOT?: ShowsScalarWhereWithAggregatesInput | ShowsScalarWhereWithAggregatesInput[]
    show_id?: IntWithAggregatesFilter<"Shows"> | number
    title?: StringWithAggregatesFilter<"Shows"> | string
    summary?: StringNullableWithAggregatesFilter<"Shows"> | string | null
    image?: StringNullableWithAggregatesFilter<"Shows"> | string | null
  }

  export type UserShowsWhereInput = {
    AND?: UserShowsWhereInput | UserShowsWhereInput[]
    OR?: UserShowsWhereInput[]
    NOT?: UserShowsWhereInput | UserShowsWhereInput[]
    id_user?: StringFilter<"UserShows"> | string
    id_show?: IntFilter<"UserShows"> | number
    is_favorite?: BoolNullableFilter<"UserShows"> | boolean | null
    is_archived?: BoolNullableFilter<"UserShows"> | boolean | null
    status?: Enumusers_shows_statusNullableFilter<"UserShows"> | $Enums.users_shows_status | null
    added_at?: DateTimeNullableFilter<"UserShows"> | Date | string | null
    rating?: IntNullableFilter<"UserShows"> | number | null
    shows?: XOR<ShowsScalarRelationFilter, ShowsWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserShowsOrderByWithRelationInput = {
    id_user?: SortOrder
    id_show?: SortOrder
    is_favorite?: SortOrderInput | SortOrder
    is_archived?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    added_at?: SortOrderInput | SortOrder
    rating?: SortOrderInput | SortOrder
    shows?: ShowsOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    _relevance?: UserShowsOrderByRelevanceInput
  }

  export type UserShowsWhereUniqueInput = Prisma.AtLeast<{
    id_user_id_show?: UserShowsId_userId_showCompoundUniqueInput
    AND?: UserShowsWhereInput | UserShowsWhereInput[]
    OR?: UserShowsWhereInput[]
    NOT?: UserShowsWhereInput | UserShowsWhereInput[]
    id_user?: StringFilter<"UserShows"> | string
    id_show?: IntFilter<"UserShows"> | number
    is_favorite?: BoolNullableFilter<"UserShows"> | boolean | null
    is_archived?: BoolNullableFilter<"UserShows"> | boolean | null
    status?: Enumusers_shows_statusNullableFilter<"UserShows"> | $Enums.users_shows_status | null
    added_at?: DateTimeNullableFilter<"UserShows"> | Date | string | null
    rating?: IntNullableFilter<"UserShows"> | number | null
    shows?: XOR<ShowsScalarRelationFilter, ShowsWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id_user_id_show">

  export type UserShowsOrderByWithAggregationInput = {
    id_user?: SortOrder
    id_show?: SortOrder
    is_favorite?: SortOrderInput | SortOrder
    is_archived?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    added_at?: SortOrderInput | SortOrder
    rating?: SortOrderInput | SortOrder
    _count?: UserShowsCountOrderByAggregateInput
    _avg?: UserShowsAvgOrderByAggregateInput
    _max?: UserShowsMaxOrderByAggregateInput
    _min?: UserShowsMinOrderByAggregateInput
    _sum?: UserShowsSumOrderByAggregateInput
  }

  export type UserShowsScalarWhereWithAggregatesInput = {
    AND?: UserShowsScalarWhereWithAggregatesInput | UserShowsScalarWhereWithAggregatesInput[]
    OR?: UserShowsScalarWhereWithAggregatesInput[]
    NOT?: UserShowsScalarWhereWithAggregatesInput | UserShowsScalarWhereWithAggregatesInput[]
    id_user?: StringWithAggregatesFilter<"UserShows"> | string
    id_show?: IntWithAggregatesFilter<"UserShows"> | number
    is_favorite?: BoolNullableWithAggregatesFilter<"UserShows"> | boolean | null
    is_archived?: BoolNullableWithAggregatesFilter<"UserShows"> | boolean | null
    status?: Enumusers_shows_statusNullableWithAggregatesFilter<"UserShows"> | $Enums.users_shows_status | null
    added_at?: DateTimeNullableWithAggregatesFilter<"UserShows"> | Date | string | null
    rating?: IntNullableWithAggregatesFilter<"UserShows"> | number | null
  }

  export type UserEpisodesWhereInput = {
    AND?: UserEpisodesWhereInput | UserEpisodesWhereInput[]
    OR?: UserEpisodesWhereInput[]
    NOT?: UserEpisodesWhereInput | UserEpisodesWhereInput[]
    id_user?: StringFilter<"UserEpisodes"> | string
    id_episode?: IntFilter<"UserEpisodes"> | number
    watched_at?: DateTimeNullableFilter<"UserEpisodes"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    episode?: XOR<EpisodesScalarRelationFilter, EpisodesWhereInput>
  }

  export type UserEpisodesOrderByWithRelationInput = {
    id_user?: SortOrder
    id_episode?: SortOrder
    watched_at?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    episode?: EpisodesOrderByWithRelationInput
    _relevance?: UserEpisodesOrderByRelevanceInput
  }

  export type UserEpisodesWhereUniqueInput = Prisma.AtLeast<{
    id_user_id_episode?: UserEpisodesId_userId_episodeCompoundUniqueInput
    AND?: UserEpisodesWhereInput | UserEpisodesWhereInput[]
    OR?: UserEpisodesWhereInput[]
    NOT?: UserEpisodesWhereInput | UserEpisodesWhereInput[]
    id_user?: StringFilter<"UserEpisodes"> | string
    id_episode?: IntFilter<"UserEpisodes"> | number
    watched_at?: DateTimeNullableFilter<"UserEpisodes"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    episode?: XOR<EpisodesScalarRelationFilter, EpisodesWhereInput>
  }, "id_user_id_episode">

  export type UserEpisodesOrderByWithAggregationInput = {
    id_user?: SortOrder
    id_episode?: SortOrder
    watched_at?: SortOrderInput | SortOrder
    _count?: UserEpisodesCountOrderByAggregateInput
    _avg?: UserEpisodesAvgOrderByAggregateInput
    _max?: UserEpisodesMaxOrderByAggregateInput
    _min?: UserEpisodesMinOrderByAggregateInput
    _sum?: UserEpisodesSumOrderByAggregateInput
  }

  export type UserEpisodesScalarWhereWithAggregatesInput = {
    AND?: UserEpisodesScalarWhereWithAggregatesInput | UserEpisodesScalarWhereWithAggregatesInput[]
    OR?: UserEpisodesScalarWhereWithAggregatesInput[]
    NOT?: UserEpisodesScalarWhereWithAggregatesInput | UserEpisodesScalarWhereWithAggregatesInput[]
    id_user?: StringWithAggregatesFilter<"UserEpisodes"> | string
    id_episode?: IntWithAggregatesFilter<"UserEpisodes"> | number
    watched_at?: DateTimeNullableWithAggregatesFilter<"UserEpisodes"> | Date | string | null
  }

  export type UserCreateInput = {
    id: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    ShowComments?: ShowCommentsCreateNestedManyWithoutUserInput
    EpisodeComments?: EpisodesCommentsCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    users_shows?: UserShowsCreateNestedManyWithoutUserInput
    users_episodes?: UserEpisodesCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    ShowComments?: ShowCommentsUncheckedCreateNestedManyWithoutUserInput
    EpisodeComments?: EpisodesCommentsUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    users_shows?: UserShowsUncheckedCreateNestedManyWithoutUserInput
    users_episodes?: UserEpisodesUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ShowComments?: ShowCommentsUpdateManyWithoutUserNestedInput
    EpisodeComments?: EpisodesCommentsUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    users_shows?: UserShowsUpdateManyWithoutUserNestedInput
    users_episodes?: UserEpisodesUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ShowComments?: ShowCommentsUncheckedUpdateManyWithoutUserNestedInput
    EpisodeComments?: EpisodesCommentsUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    users_shows?: UserShowsUncheckedUpdateManyWithoutUserNestedInput
    users_episodes?: UserEpisodesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt: Date | string
    updatedAt: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt: Date | string
    updatedAt: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    userId: string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type SessionCreateManyInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt: Date | string
    updatedAt: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    userId: string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type AccountCreateInput = {
    id: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    id: string
    accountId: string
    providerId: string
    userId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountCreateManyInput = {
    id: string
    accountId: string
    providerId: string
    userId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationCreateInput = {
    id: string
    identifier: string
    value: string
    expiresAt: Date | string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type VerificationUncheckedCreateInput = {
    id: string
    identifier: string
    value: string
    expiresAt: Date | string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type VerificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VerificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VerificationCreateManyInput = {
    id: string
    identifier: string
    value: string
    expiresAt: Date | string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type VerificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VerificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type GenresCreateInput = {
    name: string
    seriesGenres?: SeriesGenresCreateNestedManyWithoutGenresInput
  }

  export type GenresUncheckedCreateInput = {
    id?: number
    name: string
    seriesGenres?: SeriesGenresUncheckedCreateNestedManyWithoutGenresInput
  }

  export type GenresUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    seriesGenres?: SeriesGenresUpdateManyWithoutGenresNestedInput
  }

  export type GenresUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    seriesGenres?: SeriesGenresUncheckedUpdateManyWithoutGenresNestedInput
  }

  export type GenresCreateManyInput = {
    id?: number
    name: string
  }

  export type GenresUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type GenresUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type SeriesGenresCreateInput = {
    genres: GenresCreateNestedOneWithoutSeriesGenresInput
    shows: ShowsCreateNestedOneWithoutGenresInput
  }

  export type SeriesGenresUncheckedCreateInput = {
    id_show: number
    id_genre: number
  }

  export type SeriesGenresUpdateInput = {
    genres?: GenresUpdateOneRequiredWithoutSeriesGenresNestedInput
    shows?: ShowsUpdateOneRequiredWithoutGenresNestedInput
  }

  export type SeriesGenresUncheckedUpdateInput = {
    id_show?: IntFieldUpdateOperationsInput | number
    id_genre?: IntFieldUpdateOperationsInput | number
  }

  export type SeriesGenresCreateManyInput = {
    id_show: number
    id_genre: number
  }

  export type SeriesGenresUpdateManyMutationInput = {

  }

  export type SeriesGenresUncheckedUpdateManyInput = {
    id_show?: IntFieldUpdateOperationsInput | number
    id_genre?: IntFieldUpdateOperationsInput | number
  }

  export type ShowCommentsCreateInput = {
    content: string
    postedAt?: Date | string
    user: UserCreateNestedOneWithoutShowCommentsInput
    show: ShowsCreateNestedOneWithoutCommentsInput
  }

  export type ShowCommentsUncheckedCreateInput = {
    id?: number
    content: string
    postedAt?: Date | string
    id_user: string
    id_show: number
  }

  export type ShowCommentsUpdateInput = {
    content?: StringFieldUpdateOperationsInput | string
    postedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutShowCommentsNestedInput
    show?: ShowsUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type ShowCommentsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    postedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    id_user?: StringFieldUpdateOperationsInput | string
    id_show?: IntFieldUpdateOperationsInput | number
  }

  export type ShowCommentsCreateManyInput = {
    id?: number
    content: string
    postedAt?: Date | string
    id_user: string
    id_show: number
  }

  export type ShowCommentsUpdateManyMutationInput = {
    content?: StringFieldUpdateOperationsInput | string
    postedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShowCommentsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    postedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    id_user?: StringFieldUpdateOperationsInput | string
    id_show?: IntFieldUpdateOperationsInput | number
  }

  export type EpisodesCommentsCreateInput = {
    content: string
    postedAt?: Date | string
    user: UserCreateNestedOneWithoutEpisodeCommentsInput
    episode: EpisodesCreateNestedOneWithoutCommentsInput
  }

  export type EpisodesCommentsUncheckedCreateInput = {
    id?: number
    content: string
    postedAt?: Date | string
    id_user: string
    id_episode: number
  }

  export type EpisodesCommentsUpdateInput = {
    content?: StringFieldUpdateOperationsInput | string
    postedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutEpisodeCommentsNestedInput
    episode?: EpisodesUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type EpisodesCommentsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    postedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    id_user?: StringFieldUpdateOperationsInput | string
    id_episode?: IntFieldUpdateOperationsInput | number
  }

  export type EpisodesCommentsCreateManyInput = {
    id?: number
    content: string
    postedAt?: Date | string
    id_user: string
    id_episode: number
  }

  export type EpisodesCommentsUpdateManyMutationInput = {
    content?: StringFieldUpdateOperationsInput | string
    postedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EpisodesCommentsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    postedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    id_user?: StringFieldUpdateOperationsInput | string
    id_episode?: IntFieldUpdateOperationsInput | number
  }

  export type EpisodesCreateInput = {
    episode_id: number
    name: string
    season_number: number
    episode_number?: number | null
    airdate?: string | null
    summary?: string | null
    url?: string | null
    image?: string | null
    seasons: SeasonsCreateNestedOneWithoutEpisodesInput
    comments?: EpisodesCommentsCreateNestedManyWithoutEpisodeInput
    users?: UserEpisodesCreateNestedManyWithoutEpisodeInput
  }

  export type EpisodesUncheckedCreateInput = {
    episode_id: number
    season_id: number
    name: string
    season_number: number
    episode_number?: number | null
    airdate?: string | null
    summary?: string | null
    url?: string | null
    image?: string | null
    comments?: EpisodesCommentsUncheckedCreateNestedManyWithoutEpisodeInput
    users?: UserEpisodesUncheckedCreateNestedManyWithoutEpisodeInput
  }

  export type EpisodesUpdateInput = {
    episode_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    season_number?: IntFieldUpdateOperationsInput | number
    episode_number?: NullableIntFieldUpdateOperationsInput | number | null
    airdate?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    seasons?: SeasonsUpdateOneRequiredWithoutEpisodesNestedInput
    comments?: EpisodesCommentsUpdateManyWithoutEpisodeNestedInput
    users?: UserEpisodesUpdateManyWithoutEpisodeNestedInput
  }

  export type EpisodesUncheckedUpdateInput = {
    episode_id?: IntFieldUpdateOperationsInput | number
    season_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    season_number?: IntFieldUpdateOperationsInput | number
    episode_number?: NullableIntFieldUpdateOperationsInput | number | null
    airdate?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    comments?: EpisodesCommentsUncheckedUpdateManyWithoutEpisodeNestedInput
    users?: UserEpisodesUncheckedUpdateManyWithoutEpisodeNestedInput
  }

  export type EpisodesCreateManyInput = {
    episode_id: number
    season_id: number
    name: string
    season_number: number
    episode_number?: number | null
    airdate?: string | null
    summary?: string | null
    url?: string | null
    image?: string | null
  }

  export type EpisodesUpdateManyMutationInput = {
    episode_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    season_number?: IntFieldUpdateOperationsInput | number
    episode_number?: NullableIntFieldUpdateOperationsInput | number | null
    airdate?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EpisodesUncheckedUpdateManyInput = {
    episode_id?: IntFieldUpdateOperationsInput | number
    season_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    season_number?: IntFieldUpdateOperationsInput | number
    episode_number?: NullableIntFieldUpdateOperationsInput | number | null
    airdate?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CastCreateInput = {
    person_id: number
    name: string
    image?: string | null
    show_cast?: ShowCastCreateNestedManyWithoutCastInput
  }

  export type CastUncheckedCreateInput = {
    person_id: number
    name: string
    image?: string | null
    show_cast?: ShowCastUncheckedCreateNestedManyWithoutCastInput
  }

  export type CastUpdateInput = {
    person_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    show_cast?: ShowCastUpdateManyWithoutCastNestedInput
  }

  export type CastUncheckedUpdateInput = {
    person_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    show_cast?: ShowCastUncheckedUpdateManyWithoutCastNestedInput
  }

  export type CastCreateManyInput = {
    person_id: number
    name: string
    image?: string | null
  }

  export type CastUpdateManyMutationInput = {
    person_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CastUncheckedUpdateManyInput = {
    person_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SeasonsCreateInput = {
    season_id: number
    summary?: string | null
    image?: string | null
    episodes?: EpisodesCreateNestedManyWithoutSeasonsInput
    shows: ShowsCreateNestedOneWithoutSeasonsInput
  }

  export type SeasonsUncheckedCreateInput = {
    season_id: number
    show_id: number
    summary?: string | null
    image?: string | null
    episodes?: EpisodesUncheckedCreateNestedManyWithoutSeasonsInput
  }

  export type SeasonsUpdateInput = {
    season_id?: IntFieldUpdateOperationsInput | number
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    episodes?: EpisodesUpdateManyWithoutSeasonsNestedInput
    shows?: ShowsUpdateOneRequiredWithoutSeasonsNestedInput
  }

  export type SeasonsUncheckedUpdateInput = {
    season_id?: IntFieldUpdateOperationsInput | number
    show_id?: IntFieldUpdateOperationsInput | number
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    episodes?: EpisodesUncheckedUpdateManyWithoutSeasonsNestedInput
  }

  export type SeasonsCreateManyInput = {
    season_id: number
    show_id: number
    summary?: string | null
    image?: string | null
  }

  export type SeasonsUpdateManyMutationInput = {
    season_id?: IntFieldUpdateOperationsInput | number
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SeasonsUncheckedUpdateManyInput = {
    season_id?: IntFieldUpdateOperationsInput | number
    show_id?: IntFieldUpdateOperationsInput | number
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ShowCastCreateInput = {
    character_name: string
    shows: ShowsCreateNestedOneWithoutShow_castInput
    cast: CastCreateNestedOneWithoutShow_castInput
  }

  export type ShowCastUncheckedCreateInput = {
    show_id: number
    person_id: number
    character_name: string
  }

  export type ShowCastUpdateInput = {
    character_name?: StringFieldUpdateOperationsInput | string
    shows?: ShowsUpdateOneRequiredWithoutShow_castNestedInput
    cast?: CastUpdateOneRequiredWithoutShow_castNestedInput
  }

  export type ShowCastUncheckedUpdateInput = {
    show_id?: IntFieldUpdateOperationsInput | number
    person_id?: IntFieldUpdateOperationsInput | number
    character_name?: StringFieldUpdateOperationsInput | string
  }

  export type ShowCastCreateManyInput = {
    show_id: number
    person_id: number
    character_name: string
  }

  export type ShowCastUpdateManyMutationInput = {
    character_name?: StringFieldUpdateOperationsInput | string
  }

  export type ShowCastUncheckedUpdateManyInput = {
    show_id?: IntFieldUpdateOperationsInput | number
    person_id?: IntFieldUpdateOperationsInput | number
    character_name?: StringFieldUpdateOperationsInput | string
  }

  export type PlatformsCreateInput = {
    name: string
    type: string
    country_code?: string | null
    seriesPlatforms?: SeriesPlatformsCreateNestedManyWithoutPlatformsInput
  }

  export type PlatformsUncheckedCreateInput = {
    id?: number
    name: string
    type: string
    country_code?: string | null
    seriesPlatforms?: SeriesPlatformsUncheckedCreateNestedManyWithoutPlatformsInput
  }

  export type PlatformsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    country_code?: NullableStringFieldUpdateOperationsInput | string | null
    seriesPlatforms?: SeriesPlatformsUpdateManyWithoutPlatformsNestedInput
  }

  export type PlatformsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    country_code?: NullableStringFieldUpdateOperationsInput | string | null
    seriesPlatforms?: SeriesPlatformsUncheckedUpdateManyWithoutPlatformsNestedInput
  }

  export type PlatformsCreateManyInput = {
    id?: number
    name: string
    type: string
    country_code?: string | null
  }

  export type PlatformsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    country_code?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PlatformsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    country_code?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SeriesPlatformsCreateInput = {
    platforms: PlatformsCreateNestedOneWithoutSeriesPlatformsInput
    shows: ShowsCreateNestedOneWithoutPlatformsInput
  }

  export type SeriesPlatformsUncheckedCreateInput = {
    id_show: number
    id_platform: number
  }

  export type SeriesPlatformsUpdateInput = {
    platforms?: PlatformsUpdateOneRequiredWithoutSeriesPlatformsNestedInput
    shows?: ShowsUpdateOneRequiredWithoutPlatformsNestedInput
  }

  export type SeriesPlatformsUncheckedUpdateInput = {
    id_show?: IntFieldUpdateOperationsInput | number
    id_platform?: IntFieldUpdateOperationsInput | number
  }

  export type SeriesPlatformsCreateManyInput = {
    id_show: number
    id_platform: number
  }

  export type SeriesPlatformsUpdateManyMutationInput = {

  }

  export type SeriesPlatformsUncheckedUpdateManyInput = {
    id_show?: IntFieldUpdateOperationsInput | number
    id_platform?: IntFieldUpdateOperationsInput | number
  }

  export type ShowsCreateInput = {
    show_id: number
    title: string
    summary?: string | null
    image?: string | null
    seasons?: SeasonsCreateNestedManyWithoutShowsInput
    show_cast?: ShowCastCreateNestedManyWithoutShowsInput
    users_shows?: UserShowsCreateNestedManyWithoutShowsInput
    genres?: SeriesGenresCreateNestedManyWithoutShowsInput
    comments?: ShowCommentsCreateNestedManyWithoutShowInput
    platforms?: SeriesPlatformsCreateNestedManyWithoutShowsInput
  }

  export type ShowsUncheckedCreateInput = {
    show_id: number
    title: string
    summary?: string | null
    image?: string | null
    seasons?: SeasonsUncheckedCreateNestedManyWithoutShowsInput
    show_cast?: ShowCastUncheckedCreateNestedManyWithoutShowsInput
    users_shows?: UserShowsUncheckedCreateNestedManyWithoutShowsInput
    genres?: SeriesGenresUncheckedCreateNestedManyWithoutShowsInput
    comments?: ShowCommentsUncheckedCreateNestedManyWithoutShowInput
    platforms?: SeriesPlatformsUncheckedCreateNestedManyWithoutShowsInput
  }

  export type ShowsUpdateInput = {
    show_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    seasons?: SeasonsUpdateManyWithoutShowsNestedInput
    show_cast?: ShowCastUpdateManyWithoutShowsNestedInput
    users_shows?: UserShowsUpdateManyWithoutShowsNestedInput
    genres?: SeriesGenresUpdateManyWithoutShowsNestedInput
    comments?: ShowCommentsUpdateManyWithoutShowNestedInput
    platforms?: SeriesPlatformsUpdateManyWithoutShowsNestedInput
  }

  export type ShowsUncheckedUpdateInput = {
    show_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    seasons?: SeasonsUncheckedUpdateManyWithoutShowsNestedInput
    show_cast?: ShowCastUncheckedUpdateManyWithoutShowsNestedInput
    users_shows?: UserShowsUncheckedUpdateManyWithoutShowsNestedInput
    genres?: SeriesGenresUncheckedUpdateManyWithoutShowsNestedInput
    comments?: ShowCommentsUncheckedUpdateManyWithoutShowNestedInput
    platforms?: SeriesPlatformsUncheckedUpdateManyWithoutShowsNestedInput
  }

  export type ShowsCreateManyInput = {
    show_id: number
    title: string
    summary?: string | null
    image?: string | null
  }

  export type ShowsUpdateManyMutationInput = {
    show_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ShowsUncheckedUpdateManyInput = {
    show_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserShowsCreateInput = {
    is_favorite?: boolean | null
    is_archived?: boolean | null
    status?: $Enums.users_shows_status | null
    added_at?: Date | string | null
    rating?: number | null
    shows: ShowsCreateNestedOneWithoutUsers_showsInput
    user: UserCreateNestedOneWithoutUsers_showsInput
  }

  export type UserShowsUncheckedCreateInput = {
    id_user: string
    id_show: number
    is_favorite?: boolean | null
    is_archived?: boolean | null
    status?: $Enums.users_shows_status | null
    added_at?: Date | string | null
    rating?: number | null
  }

  export type UserShowsUpdateInput = {
    is_favorite?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_archived?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: NullableEnumusers_shows_statusFieldUpdateOperationsInput | $Enums.users_shows_status | null
    added_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    shows?: ShowsUpdateOneRequiredWithoutUsers_showsNestedInput
    user?: UserUpdateOneRequiredWithoutUsers_showsNestedInput
  }

  export type UserShowsUncheckedUpdateInput = {
    id_user?: StringFieldUpdateOperationsInput | string
    id_show?: IntFieldUpdateOperationsInput | number
    is_favorite?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_archived?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: NullableEnumusers_shows_statusFieldUpdateOperationsInput | $Enums.users_shows_status | null
    added_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UserShowsCreateManyInput = {
    id_user: string
    id_show: number
    is_favorite?: boolean | null
    is_archived?: boolean | null
    status?: $Enums.users_shows_status | null
    added_at?: Date | string | null
    rating?: number | null
  }

  export type UserShowsUpdateManyMutationInput = {
    is_favorite?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_archived?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: NullableEnumusers_shows_statusFieldUpdateOperationsInput | $Enums.users_shows_status | null
    added_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UserShowsUncheckedUpdateManyInput = {
    id_user?: StringFieldUpdateOperationsInput | string
    id_show?: IntFieldUpdateOperationsInput | number
    is_favorite?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_archived?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: NullableEnumusers_shows_statusFieldUpdateOperationsInput | $Enums.users_shows_status | null
    added_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UserEpisodesCreateInput = {
    watched_at?: Date | string | null
    user: UserCreateNestedOneWithoutUsers_episodesInput
    episode: EpisodesCreateNestedOneWithoutUsersInput
  }

  export type UserEpisodesUncheckedCreateInput = {
    id_user: string
    id_episode: number
    watched_at?: Date | string | null
  }

  export type UserEpisodesUpdateInput = {
    watched_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutUsers_episodesNestedInput
    episode?: EpisodesUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserEpisodesUncheckedUpdateInput = {
    id_user?: StringFieldUpdateOperationsInput | string
    id_episode?: IntFieldUpdateOperationsInput | number
    watched_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserEpisodesCreateManyInput = {
    id_user: string
    id_episode: number
    watched_at?: Date | string | null
  }

  export type UserEpisodesUpdateManyMutationInput = {
    watched_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserEpisodesUncheckedUpdateManyInput = {
    id_user?: StringFieldUpdateOperationsInput | string
    id_episode?: IntFieldUpdateOperationsInput | number
    watched_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ShowCommentsListRelationFilter = {
    every?: ShowCommentsWhereInput
    some?: ShowCommentsWhereInput
    none?: ShowCommentsWhereInput
  }

  export type EpisodesCommentsListRelationFilter = {
    every?: EpisodesCommentsWhereInput
    some?: EpisodesCommentsWhereInput
    none?: EpisodesCommentsWhereInput
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type UserShowsListRelationFilter = {
    every?: UserShowsWhereInput
    some?: UserShowsWhereInput
    none?: UserShowsWhereInput
  }

  export type UserEpisodesListRelationFilter = {
    every?: UserEpisodesWhereInput
    some?: UserEpisodesWhereInput
    none?: UserEpisodesWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ShowCommentsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EpisodesCommentsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserShowsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserEpisodesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SessionOrderByRelevanceInput = {
    fields: SessionOrderByRelevanceFieldEnum | SessionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    userId?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    userId?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    userId?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type AccountOrderByRelevanceInput = {
    fields: AccountOrderByRelevanceFieldEnum | AccountOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    idToken?: SortOrder
    accessTokenExpiresAt?: SortOrder
    refreshTokenExpiresAt?: SortOrder
    scope?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    idToken?: SortOrder
    accessTokenExpiresAt?: SortOrder
    refreshTokenExpiresAt?: SortOrder
    scope?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    idToken?: SortOrder
    accessTokenExpiresAt?: SortOrder
    refreshTokenExpiresAt?: SortOrder
    scope?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type VerificationOrderByRelevanceInput = {
    fields: VerificationOrderByRelevanceFieldEnum | VerificationOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type VerificationCountOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationMaxOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationMinOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type SeriesGenresListRelationFilter = {
    every?: SeriesGenresWhereInput
    some?: SeriesGenresWhereInput
    none?: SeriesGenresWhereInput
  }

  export type SeriesGenresOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GenresOrderByRelevanceInput = {
    fields: GenresOrderByRelevanceFieldEnum | GenresOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type GenresCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type GenresAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type GenresMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type GenresMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type GenresSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type GenresScalarRelationFilter = {
    is?: GenresWhereInput
    isNot?: GenresWhereInput
  }

  export type ShowsScalarRelationFilter = {
    is?: ShowsWhereInput
    isNot?: ShowsWhereInput
  }

  export type SeriesGenresId_showId_genreCompoundUniqueInput = {
    id_show: number
    id_genre: number
  }

  export type SeriesGenresCountOrderByAggregateInput = {
    id_show?: SortOrder
    id_genre?: SortOrder
  }

  export type SeriesGenresAvgOrderByAggregateInput = {
    id_show?: SortOrder
    id_genre?: SortOrder
  }

  export type SeriesGenresMaxOrderByAggregateInput = {
    id_show?: SortOrder
    id_genre?: SortOrder
  }

  export type SeriesGenresMinOrderByAggregateInput = {
    id_show?: SortOrder
    id_genre?: SortOrder
  }

  export type SeriesGenresSumOrderByAggregateInput = {
    id_show?: SortOrder
    id_genre?: SortOrder
  }

  export type ShowCommentsOrderByRelevanceInput = {
    fields: ShowCommentsOrderByRelevanceFieldEnum | ShowCommentsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ShowCommentsCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    postedAt?: SortOrder
    id_user?: SortOrder
    id_show?: SortOrder
  }

  export type ShowCommentsAvgOrderByAggregateInput = {
    id?: SortOrder
    id_show?: SortOrder
  }

  export type ShowCommentsMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    postedAt?: SortOrder
    id_user?: SortOrder
    id_show?: SortOrder
  }

  export type ShowCommentsMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    postedAt?: SortOrder
    id_user?: SortOrder
    id_show?: SortOrder
  }

  export type ShowCommentsSumOrderByAggregateInput = {
    id?: SortOrder
    id_show?: SortOrder
  }

  export type EpisodesScalarRelationFilter = {
    is?: EpisodesWhereInput
    isNot?: EpisodesWhereInput
  }

  export type EpisodesCommentsOrderByRelevanceInput = {
    fields: EpisodesCommentsOrderByRelevanceFieldEnum | EpisodesCommentsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type EpisodesCommentsCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    postedAt?: SortOrder
    id_user?: SortOrder
    id_episode?: SortOrder
  }

  export type EpisodesCommentsAvgOrderByAggregateInput = {
    id?: SortOrder
    id_episode?: SortOrder
  }

  export type EpisodesCommentsMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    postedAt?: SortOrder
    id_user?: SortOrder
    id_episode?: SortOrder
  }

  export type EpisodesCommentsMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    postedAt?: SortOrder
    id_user?: SortOrder
    id_episode?: SortOrder
  }

  export type EpisodesCommentsSumOrderByAggregateInput = {
    id?: SortOrder
    id_episode?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type SeasonsScalarRelationFilter = {
    is?: SeasonsWhereInput
    isNot?: SeasonsWhereInput
  }

  export type EpisodesOrderByRelevanceInput = {
    fields: EpisodesOrderByRelevanceFieldEnum | EpisodesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type EpisodesCountOrderByAggregateInput = {
    episode_id?: SortOrder
    season_id?: SortOrder
    name?: SortOrder
    season_number?: SortOrder
    episode_number?: SortOrder
    airdate?: SortOrder
    summary?: SortOrder
    url?: SortOrder
    image?: SortOrder
  }

  export type EpisodesAvgOrderByAggregateInput = {
    episode_id?: SortOrder
    season_id?: SortOrder
    season_number?: SortOrder
    episode_number?: SortOrder
  }

  export type EpisodesMaxOrderByAggregateInput = {
    episode_id?: SortOrder
    season_id?: SortOrder
    name?: SortOrder
    season_number?: SortOrder
    episode_number?: SortOrder
    airdate?: SortOrder
    summary?: SortOrder
    url?: SortOrder
    image?: SortOrder
  }

  export type EpisodesMinOrderByAggregateInput = {
    episode_id?: SortOrder
    season_id?: SortOrder
    name?: SortOrder
    season_number?: SortOrder
    episode_number?: SortOrder
    airdate?: SortOrder
    summary?: SortOrder
    url?: SortOrder
    image?: SortOrder
  }

  export type EpisodesSumOrderByAggregateInput = {
    episode_id?: SortOrder
    season_id?: SortOrder
    season_number?: SortOrder
    episode_number?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type ShowCastListRelationFilter = {
    every?: ShowCastWhereInput
    some?: ShowCastWhereInput
    none?: ShowCastWhereInput
  }

  export type ShowCastOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CastOrderByRelevanceInput = {
    fields: CastOrderByRelevanceFieldEnum | CastOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CastCountOrderByAggregateInput = {
    person_id?: SortOrder
    name?: SortOrder
    image?: SortOrder
  }

  export type CastAvgOrderByAggregateInput = {
    person_id?: SortOrder
  }

  export type CastMaxOrderByAggregateInput = {
    person_id?: SortOrder
    name?: SortOrder
    image?: SortOrder
  }

  export type CastMinOrderByAggregateInput = {
    person_id?: SortOrder
    name?: SortOrder
    image?: SortOrder
  }

  export type CastSumOrderByAggregateInput = {
    person_id?: SortOrder
  }

  export type EpisodesListRelationFilter = {
    every?: EpisodesWhereInput
    some?: EpisodesWhereInput
    none?: EpisodesWhereInput
  }

  export type EpisodesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SeasonsOrderByRelevanceInput = {
    fields: SeasonsOrderByRelevanceFieldEnum | SeasonsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type SeasonsCountOrderByAggregateInput = {
    season_id?: SortOrder
    show_id?: SortOrder
    summary?: SortOrder
    image?: SortOrder
  }

  export type SeasonsAvgOrderByAggregateInput = {
    season_id?: SortOrder
    show_id?: SortOrder
  }

  export type SeasonsMaxOrderByAggregateInput = {
    season_id?: SortOrder
    show_id?: SortOrder
    summary?: SortOrder
    image?: SortOrder
  }

  export type SeasonsMinOrderByAggregateInput = {
    season_id?: SortOrder
    show_id?: SortOrder
    summary?: SortOrder
    image?: SortOrder
  }

  export type SeasonsSumOrderByAggregateInput = {
    season_id?: SortOrder
    show_id?: SortOrder
  }

  export type CastScalarRelationFilter = {
    is?: CastWhereInput
    isNot?: CastWhereInput
  }

  export type ShowCastOrderByRelevanceInput = {
    fields: ShowCastOrderByRelevanceFieldEnum | ShowCastOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ShowCastShow_idPerson_idCompoundUniqueInput = {
    show_id: number
    person_id: number
  }

  export type ShowCastCountOrderByAggregateInput = {
    show_id?: SortOrder
    person_id?: SortOrder
    character_name?: SortOrder
  }

  export type ShowCastAvgOrderByAggregateInput = {
    show_id?: SortOrder
    person_id?: SortOrder
  }

  export type ShowCastMaxOrderByAggregateInput = {
    show_id?: SortOrder
    person_id?: SortOrder
    character_name?: SortOrder
  }

  export type ShowCastMinOrderByAggregateInput = {
    show_id?: SortOrder
    person_id?: SortOrder
    character_name?: SortOrder
  }

  export type ShowCastSumOrderByAggregateInput = {
    show_id?: SortOrder
    person_id?: SortOrder
  }

  export type SeriesPlatformsListRelationFilter = {
    every?: SeriesPlatformsWhereInput
    some?: SeriesPlatformsWhereInput
    none?: SeriesPlatformsWhereInput
  }

  export type SeriesPlatformsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PlatformsOrderByRelevanceInput = {
    fields: PlatformsOrderByRelevanceFieldEnum | PlatformsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PlatformsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    country_code?: SortOrder
  }

  export type PlatformsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PlatformsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    country_code?: SortOrder
  }

  export type PlatformsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    country_code?: SortOrder
  }

  export type PlatformsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PlatformsScalarRelationFilter = {
    is?: PlatformsWhereInput
    isNot?: PlatformsWhereInput
  }

  export type SeriesPlatformsId_showId_platformCompoundUniqueInput = {
    id_show: number
    id_platform: number
  }

  export type SeriesPlatformsCountOrderByAggregateInput = {
    id_show?: SortOrder
    id_platform?: SortOrder
  }

  export type SeriesPlatformsAvgOrderByAggregateInput = {
    id_show?: SortOrder
    id_platform?: SortOrder
  }

  export type SeriesPlatformsMaxOrderByAggregateInput = {
    id_show?: SortOrder
    id_platform?: SortOrder
  }

  export type SeriesPlatformsMinOrderByAggregateInput = {
    id_show?: SortOrder
    id_platform?: SortOrder
  }

  export type SeriesPlatformsSumOrderByAggregateInput = {
    id_show?: SortOrder
    id_platform?: SortOrder
  }

  export type SeasonsListRelationFilter = {
    every?: SeasonsWhereInput
    some?: SeasonsWhereInput
    none?: SeasonsWhereInput
  }

  export type SeasonsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ShowsOrderByRelevanceInput = {
    fields: ShowsOrderByRelevanceFieldEnum | ShowsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ShowsCountOrderByAggregateInput = {
    show_id?: SortOrder
    title?: SortOrder
    summary?: SortOrder
    image?: SortOrder
  }

  export type ShowsAvgOrderByAggregateInput = {
    show_id?: SortOrder
  }

  export type ShowsMaxOrderByAggregateInput = {
    show_id?: SortOrder
    title?: SortOrder
    summary?: SortOrder
    image?: SortOrder
  }

  export type ShowsMinOrderByAggregateInput = {
    show_id?: SortOrder
    title?: SortOrder
    summary?: SortOrder
    image?: SortOrder
  }

  export type ShowsSumOrderByAggregateInput = {
    show_id?: SortOrder
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type Enumusers_shows_statusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.users_shows_status | Enumusers_shows_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.users_shows_status[] | null
    notIn?: $Enums.users_shows_status[] | null
    not?: NestedEnumusers_shows_statusNullableFilter<$PrismaModel> | $Enums.users_shows_status | null
  }

  export type UserShowsOrderByRelevanceInput = {
    fields: UserShowsOrderByRelevanceFieldEnum | UserShowsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserShowsId_userId_showCompoundUniqueInput = {
    id_user: string
    id_show: number
  }

  export type UserShowsCountOrderByAggregateInput = {
    id_user?: SortOrder
    id_show?: SortOrder
    is_favorite?: SortOrder
    is_archived?: SortOrder
    status?: SortOrder
    added_at?: SortOrder
    rating?: SortOrder
  }

  export type UserShowsAvgOrderByAggregateInput = {
    id_show?: SortOrder
    rating?: SortOrder
  }

  export type UserShowsMaxOrderByAggregateInput = {
    id_user?: SortOrder
    id_show?: SortOrder
    is_favorite?: SortOrder
    is_archived?: SortOrder
    status?: SortOrder
    added_at?: SortOrder
    rating?: SortOrder
  }

  export type UserShowsMinOrderByAggregateInput = {
    id_user?: SortOrder
    id_show?: SortOrder
    is_favorite?: SortOrder
    is_archived?: SortOrder
    status?: SortOrder
    added_at?: SortOrder
    rating?: SortOrder
  }

  export type UserShowsSumOrderByAggregateInput = {
    id_show?: SortOrder
    rating?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type Enumusers_shows_statusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.users_shows_status | Enumusers_shows_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.users_shows_status[] | null
    notIn?: $Enums.users_shows_status[] | null
    not?: NestedEnumusers_shows_statusNullableWithAggregatesFilter<$PrismaModel> | $Enums.users_shows_status | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumusers_shows_statusNullableFilter<$PrismaModel>
    _max?: NestedEnumusers_shows_statusNullableFilter<$PrismaModel>
  }

  export type UserEpisodesOrderByRelevanceInput = {
    fields: UserEpisodesOrderByRelevanceFieldEnum | UserEpisodesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserEpisodesId_userId_episodeCompoundUniqueInput = {
    id_user: string
    id_episode: number
  }

  export type UserEpisodesCountOrderByAggregateInput = {
    id_user?: SortOrder
    id_episode?: SortOrder
    watched_at?: SortOrder
  }

  export type UserEpisodesAvgOrderByAggregateInput = {
    id_episode?: SortOrder
  }

  export type UserEpisodesMaxOrderByAggregateInput = {
    id_user?: SortOrder
    id_episode?: SortOrder
    watched_at?: SortOrder
  }

  export type UserEpisodesMinOrderByAggregateInput = {
    id_user?: SortOrder
    id_episode?: SortOrder
    watched_at?: SortOrder
  }

  export type UserEpisodesSumOrderByAggregateInput = {
    id_episode?: SortOrder
  }

  export type ShowCommentsCreateNestedManyWithoutUserInput = {
    create?: XOR<ShowCommentsCreateWithoutUserInput, ShowCommentsUncheckedCreateWithoutUserInput> | ShowCommentsCreateWithoutUserInput[] | ShowCommentsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ShowCommentsCreateOrConnectWithoutUserInput | ShowCommentsCreateOrConnectWithoutUserInput[]
    createMany?: ShowCommentsCreateManyUserInputEnvelope
    connect?: ShowCommentsWhereUniqueInput | ShowCommentsWhereUniqueInput[]
  }

  export type EpisodesCommentsCreateNestedManyWithoutUserInput = {
    create?: XOR<EpisodesCommentsCreateWithoutUserInput, EpisodesCommentsUncheckedCreateWithoutUserInput> | EpisodesCommentsCreateWithoutUserInput[] | EpisodesCommentsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EpisodesCommentsCreateOrConnectWithoutUserInput | EpisodesCommentsCreateOrConnectWithoutUserInput[]
    createMany?: EpisodesCommentsCreateManyUserInputEnvelope
    connect?: EpisodesCommentsWhereUniqueInput | EpisodesCommentsWhereUniqueInput[]
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type UserShowsCreateNestedManyWithoutUserInput = {
    create?: XOR<UserShowsCreateWithoutUserInput, UserShowsUncheckedCreateWithoutUserInput> | UserShowsCreateWithoutUserInput[] | UserShowsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserShowsCreateOrConnectWithoutUserInput | UserShowsCreateOrConnectWithoutUserInput[]
    createMany?: UserShowsCreateManyUserInputEnvelope
    connect?: UserShowsWhereUniqueInput | UserShowsWhereUniqueInput[]
  }

  export type UserEpisodesCreateNestedManyWithoutUserInput = {
    create?: XOR<UserEpisodesCreateWithoutUserInput, UserEpisodesUncheckedCreateWithoutUserInput> | UserEpisodesCreateWithoutUserInput[] | UserEpisodesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserEpisodesCreateOrConnectWithoutUserInput | UserEpisodesCreateOrConnectWithoutUserInput[]
    createMany?: UserEpisodesCreateManyUserInputEnvelope
    connect?: UserEpisodesWhereUniqueInput | UserEpisodesWhereUniqueInput[]
  }

  export type ShowCommentsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ShowCommentsCreateWithoutUserInput, ShowCommentsUncheckedCreateWithoutUserInput> | ShowCommentsCreateWithoutUserInput[] | ShowCommentsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ShowCommentsCreateOrConnectWithoutUserInput | ShowCommentsCreateOrConnectWithoutUserInput[]
    createMany?: ShowCommentsCreateManyUserInputEnvelope
    connect?: ShowCommentsWhereUniqueInput | ShowCommentsWhereUniqueInput[]
  }

  export type EpisodesCommentsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<EpisodesCommentsCreateWithoutUserInput, EpisodesCommentsUncheckedCreateWithoutUserInput> | EpisodesCommentsCreateWithoutUserInput[] | EpisodesCommentsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EpisodesCommentsCreateOrConnectWithoutUserInput | EpisodesCommentsCreateOrConnectWithoutUserInput[]
    createMany?: EpisodesCommentsCreateManyUserInputEnvelope
    connect?: EpisodesCommentsWhereUniqueInput | EpisodesCommentsWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type UserShowsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserShowsCreateWithoutUserInput, UserShowsUncheckedCreateWithoutUserInput> | UserShowsCreateWithoutUserInput[] | UserShowsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserShowsCreateOrConnectWithoutUserInput | UserShowsCreateOrConnectWithoutUserInput[]
    createMany?: UserShowsCreateManyUserInputEnvelope
    connect?: UserShowsWhereUniqueInput | UserShowsWhereUniqueInput[]
  }

  export type UserEpisodesUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserEpisodesCreateWithoutUserInput, UserEpisodesUncheckedCreateWithoutUserInput> | UserEpisodesCreateWithoutUserInput[] | UserEpisodesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserEpisodesCreateOrConnectWithoutUserInput | UserEpisodesCreateOrConnectWithoutUserInput[]
    createMany?: UserEpisodesCreateManyUserInputEnvelope
    connect?: UserEpisodesWhereUniqueInput | UserEpisodesWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ShowCommentsUpdateManyWithoutUserNestedInput = {
    create?: XOR<ShowCommentsCreateWithoutUserInput, ShowCommentsUncheckedCreateWithoutUserInput> | ShowCommentsCreateWithoutUserInput[] | ShowCommentsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ShowCommentsCreateOrConnectWithoutUserInput | ShowCommentsCreateOrConnectWithoutUserInput[]
    upsert?: ShowCommentsUpsertWithWhereUniqueWithoutUserInput | ShowCommentsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ShowCommentsCreateManyUserInputEnvelope
    set?: ShowCommentsWhereUniqueInput | ShowCommentsWhereUniqueInput[]
    disconnect?: ShowCommentsWhereUniqueInput | ShowCommentsWhereUniqueInput[]
    delete?: ShowCommentsWhereUniqueInput | ShowCommentsWhereUniqueInput[]
    connect?: ShowCommentsWhereUniqueInput | ShowCommentsWhereUniqueInput[]
    update?: ShowCommentsUpdateWithWhereUniqueWithoutUserInput | ShowCommentsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ShowCommentsUpdateManyWithWhereWithoutUserInput | ShowCommentsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ShowCommentsScalarWhereInput | ShowCommentsScalarWhereInput[]
  }

  export type EpisodesCommentsUpdateManyWithoutUserNestedInput = {
    create?: XOR<EpisodesCommentsCreateWithoutUserInput, EpisodesCommentsUncheckedCreateWithoutUserInput> | EpisodesCommentsCreateWithoutUserInput[] | EpisodesCommentsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EpisodesCommentsCreateOrConnectWithoutUserInput | EpisodesCommentsCreateOrConnectWithoutUserInput[]
    upsert?: EpisodesCommentsUpsertWithWhereUniqueWithoutUserInput | EpisodesCommentsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EpisodesCommentsCreateManyUserInputEnvelope
    set?: EpisodesCommentsWhereUniqueInput | EpisodesCommentsWhereUniqueInput[]
    disconnect?: EpisodesCommentsWhereUniqueInput | EpisodesCommentsWhereUniqueInput[]
    delete?: EpisodesCommentsWhereUniqueInput | EpisodesCommentsWhereUniqueInput[]
    connect?: EpisodesCommentsWhereUniqueInput | EpisodesCommentsWhereUniqueInput[]
    update?: EpisodesCommentsUpdateWithWhereUniqueWithoutUserInput | EpisodesCommentsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EpisodesCommentsUpdateManyWithWhereWithoutUserInput | EpisodesCommentsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EpisodesCommentsScalarWhereInput | EpisodesCommentsScalarWhereInput[]
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type UserShowsUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserShowsCreateWithoutUserInput, UserShowsUncheckedCreateWithoutUserInput> | UserShowsCreateWithoutUserInput[] | UserShowsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserShowsCreateOrConnectWithoutUserInput | UserShowsCreateOrConnectWithoutUserInput[]
    upsert?: UserShowsUpsertWithWhereUniqueWithoutUserInput | UserShowsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserShowsCreateManyUserInputEnvelope
    set?: UserShowsWhereUniqueInput | UserShowsWhereUniqueInput[]
    disconnect?: UserShowsWhereUniqueInput | UserShowsWhereUniqueInput[]
    delete?: UserShowsWhereUniqueInput | UserShowsWhereUniqueInput[]
    connect?: UserShowsWhereUniqueInput | UserShowsWhereUniqueInput[]
    update?: UserShowsUpdateWithWhereUniqueWithoutUserInput | UserShowsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserShowsUpdateManyWithWhereWithoutUserInput | UserShowsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserShowsScalarWhereInput | UserShowsScalarWhereInput[]
  }

  export type UserEpisodesUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserEpisodesCreateWithoutUserInput, UserEpisodesUncheckedCreateWithoutUserInput> | UserEpisodesCreateWithoutUserInput[] | UserEpisodesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserEpisodesCreateOrConnectWithoutUserInput | UserEpisodesCreateOrConnectWithoutUserInput[]
    upsert?: UserEpisodesUpsertWithWhereUniqueWithoutUserInput | UserEpisodesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserEpisodesCreateManyUserInputEnvelope
    set?: UserEpisodesWhereUniqueInput | UserEpisodesWhereUniqueInput[]
    disconnect?: UserEpisodesWhereUniqueInput | UserEpisodesWhereUniqueInput[]
    delete?: UserEpisodesWhereUniqueInput | UserEpisodesWhereUniqueInput[]
    connect?: UserEpisodesWhereUniqueInput | UserEpisodesWhereUniqueInput[]
    update?: UserEpisodesUpdateWithWhereUniqueWithoutUserInput | UserEpisodesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserEpisodesUpdateManyWithWhereWithoutUserInput | UserEpisodesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserEpisodesScalarWhereInput | UserEpisodesScalarWhereInput[]
  }

  export type ShowCommentsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ShowCommentsCreateWithoutUserInput, ShowCommentsUncheckedCreateWithoutUserInput> | ShowCommentsCreateWithoutUserInput[] | ShowCommentsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ShowCommentsCreateOrConnectWithoutUserInput | ShowCommentsCreateOrConnectWithoutUserInput[]
    upsert?: ShowCommentsUpsertWithWhereUniqueWithoutUserInput | ShowCommentsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ShowCommentsCreateManyUserInputEnvelope
    set?: ShowCommentsWhereUniqueInput | ShowCommentsWhereUniqueInput[]
    disconnect?: ShowCommentsWhereUniqueInput | ShowCommentsWhereUniqueInput[]
    delete?: ShowCommentsWhereUniqueInput | ShowCommentsWhereUniqueInput[]
    connect?: ShowCommentsWhereUniqueInput | ShowCommentsWhereUniqueInput[]
    update?: ShowCommentsUpdateWithWhereUniqueWithoutUserInput | ShowCommentsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ShowCommentsUpdateManyWithWhereWithoutUserInput | ShowCommentsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ShowCommentsScalarWhereInput | ShowCommentsScalarWhereInput[]
  }

  export type EpisodesCommentsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<EpisodesCommentsCreateWithoutUserInput, EpisodesCommentsUncheckedCreateWithoutUserInput> | EpisodesCommentsCreateWithoutUserInput[] | EpisodesCommentsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EpisodesCommentsCreateOrConnectWithoutUserInput | EpisodesCommentsCreateOrConnectWithoutUserInput[]
    upsert?: EpisodesCommentsUpsertWithWhereUniqueWithoutUserInput | EpisodesCommentsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EpisodesCommentsCreateManyUserInputEnvelope
    set?: EpisodesCommentsWhereUniqueInput | EpisodesCommentsWhereUniqueInput[]
    disconnect?: EpisodesCommentsWhereUniqueInput | EpisodesCommentsWhereUniqueInput[]
    delete?: EpisodesCommentsWhereUniqueInput | EpisodesCommentsWhereUniqueInput[]
    connect?: EpisodesCommentsWhereUniqueInput | EpisodesCommentsWhereUniqueInput[]
    update?: EpisodesCommentsUpdateWithWhereUniqueWithoutUserInput | EpisodesCommentsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EpisodesCommentsUpdateManyWithWhereWithoutUserInput | EpisodesCommentsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EpisodesCommentsScalarWhereInput | EpisodesCommentsScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type UserShowsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserShowsCreateWithoutUserInput, UserShowsUncheckedCreateWithoutUserInput> | UserShowsCreateWithoutUserInput[] | UserShowsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserShowsCreateOrConnectWithoutUserInput | UserShowsCreateOrConnectWithoutUserInput[]
    upsert?: UserShowsUpsertWithWhereUniqueWithoutUserInput | UserShowsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserShowsCreateManyUserInputEnvelope
    set?: UserShowsWhereUniqueInput | UserShowsWhereUniqueInput[]
    disconnect?: UserShowsWhereUniqueInput | UserShowsWhereUniqueInput[]
    delete?: UserShowsWhereUniqueInput | UserShowsWhereUniqueInput[]
    connect?: UserShowsWhereUniqueInput | UserShowsWhereUniqueInput[]
    update?: UserShowsUpdateWithWhereUniqueWithoutUserInput | UserShowsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserShowsUpdateManyWithWhereWithoutUserInput | UserShowsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserShowsScalarWhereInput | UserShowsScalarWhereInput[]
  }

  export type UserEpisodesUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserEpisodesCreateWithoutUserInput, UserEpisodesUncheckedCreateWithoutUserInput> | UserEpisodesCreateWithoutUserInput[] | UserEpisodesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserEpisodesCreateOrConnectWithoutUserInput | UserEpisodesCreateOrConnectWithoutUserInput[]
    upsert?: UserEpisodesUpsertWithWhereUniqueWithoutUserInput | UserEpisodesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserEpisodesCreateManyUserInputEnvelope
    set?: UserEpisodesWhereUniqueInput | UserEpisodesWhereUniqueInput[]
    disconnect?: UserEpisodesWhereUniqueInput | UserEpisodesWhereUniqueInput[]
    delete?: UserEpisodesWhereUniqueInput | UserEpisodesWhereUniqueInput[]
    connect?: UserEpisodesWhereUniqueInput | UserEpisodesWhereUniqueInput[]
    update?: UserEpisodesUpdateWithWhereUniqueWithoutUserInput | UserEpisodesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserEpisodesUpdateManyWithWhereWithoutUserInput | UserEpisodesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserEpisodesScalarWhereInput | UserEpisodesScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type SeriesGenresCreateNestedManyWithoutGenresInput = {
    create?: XOR<SeriesGenresCreateWithoutGenresInput, SeriesGenresUncheckedCreateWithoutGenresInput> | SeriesGenresCreateWithoutGenresInput[] | SeriesGenresUncheckedCreateWithoutGenresInput[]
    connectOrCreate?: SeriesGenresCreateOrConnectWithoutGenresInput | SeriesGenresCreateOrConnectWithoutGenresInput[]
    createMany?: SeriesGenresCreateManyGenresInputEnvelope
    connect?: SeriesGenresWhereUniqueInput | SeriesGenresWhereUniqueInput[]
  }

  export type SeriesGenresUncheckedCreateNestedManyWithoutGenresInput = {
    create?: XOR<SeriesGenresCreateWithoutGenresInput, SeriesGenresUncheckedCreateWithoutGenresInput> | SeriesGenresCreateWithoutGenresInput[] | SeriesGenresUncheckedCreateWithoutGenresInput[]
    connectOrCreate?: SeriesGenresCreateOrConnectWithoutGenresInput | SeriesGenresCreateOrConnectWithoutGenresInput[]
    createMany?: SeriesGenresCreateManyGenresInputEnvelope
    connect?: SeriesGenresWhereUniqueInput | SeriesGenresWhereUniqueInput[]
  }

  export type SeriesGenresUpdateManyWithoutGenresNestedInput = {
    create?: XOR<SeriesGenresCreateWithoutGenresInput, SeriesGenresUncheckedCreateWithoutGenresInput> | SeriesGenresCreateWithoutGenresInput[] | SeriesGenresUncheckedCreateWithoutGenresInput[]
    connectOrCreate?: SeriesGenresCreateOrConnectWithoutGenresInput | SeriesGenresCreateOrConnectWithoutGenresInput[]
    upsert?: SeriesGenresUpsertWithWhereUniqueWithoutGenresInput | SeriesGenresUpsertWithWhereUniqueWithoutGenresInput[]
    createMany?: SeriesGenresCreateManyGenresInputEnvelope
    set?: SeriesGenresWhereUniqueInput | SeriesGenresWhereUniqueInput[]
    disconnect?: SeriesGenresWhereUniqueInput | SeriesGenresWhereUniqueInput[]
    delete?: SeriesGenresWhereUniqueInput | SeriesGenresWhereUniqueInput[]
    connect?: SeriesGenresWhereUniqueInput | SeriesGenresWhereUniqueInput[]
    update?: SeriesGenresUpdateWithWhereUniqueWithoutGenresInput | SeriesGenresUpdateWithWhereUniqueWithoutGenresInput[]
    updateMany?: SeriesGenresUpdateManyWithWhereWithoutGenresInput | SeriesGenresUpdateManyWithWhereWithoutGenresInput[]
    deleteMany?: SeriesGenresScalarWhereInput | SeriesGenresScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SeriesGenresUncheckedUpdateManyWithoutGenresNestedInput = {
    create?: XOR<SeriesGenresCreateWithoutGenresInput, SeriesGenresUncheckedCreateWithoutGenresInput> | SeriesGenresCreateWithoutGenresInput[] | SeriesGenresUncheckedCreateWithoutGenresInput[]
    connectOrCreate?: SeriesGenresCreateOrConnectWithoutGenresInput | SeriesGenresCreateOrConnectWithoutGenresInput[]
    upsert?: SeriesGenresUpsertWithWhereUniqueWithoutGenresInput | SeriesGenresUpsertWithWhereUniqueWithoutGenresInput[]
    createMany?: SeriesGenresCreateManyGenresInputEnvelope
    set?: SeriesGenresWhereUniqueInput | SeriesGenresWhereUniqueInput[]
    disconnect?: SeriesGenresWhereUniqueInput | SeriesGenresWhereUniqueInput[]
    delete?: SeriesGenresWhereUniqueInput | SeriesGenresWhereUniqueInput[]
    connect?: SeriesGenresWhereUniqueInput | SeriesGenresWhereUniqueInput[]
    update?: SeriesGenresUpdateWithWhereUniqueWithoutGenresInput | SeriesGenresUpdateWithWhereUniqueWithoutGenresInput[]
    updateMany?: SeriesGenresUpdateManyWithWhereWithoutGenresInput | SeriesGenresUpdateManyWithWhereWithoutGenresInput[]
    deleteMany?: SeriesGenresScalarWhereInput | SeriesGenresScalarWhereInput[]
  }

  export type GenresCreateNestedOneWithoutSeriesGenresInput = {
    create?: XOR<GenresCreateWithoutSeriesGenresInput, GenresUncheckedCreateWithoutSeriesGenresInput>
    connectOrCreate?: GenresCreateOrConnectWithoutSeriesGenresInput
    connect?: GenresWhereUniqueInput
  }

  export type ShowsCreateNestedOneWithoutGenresInput = {
    create?: XOR<ShowsCreateWithoutGenresInput, ShowsUncheckedCreateWithoutGenresInput>
    connectOrCreate?: ShowsCreateOrConnectWithoutGenresInput
    connect?: ShowsWhereUniqueInput
  }

  export type GenresUpdateOneRequiredWithoutSeriesGenresNestedInput = {
    create?: XOR<GenresCreateWithoutSeriesGenresInput, GenresUncheckedCreateWithoutSeriesGenresInput>
    connectOrCreate?: GenresCreateOrConnectWithoutSeriesGenresInput
    upsert?: GenresUpsertWithoutSeriesGenresInput
    connect?: GenresWhereUniqueInput
    update?: XOR<XOR<GenresUpdateToOneWithWhereWithoutSeriesGenresInput, GenresUpdateWithoutSeriesGenresInput>, GenresUncheckedUpdateWithoutSeriesGenresInput>
  }

  export type ShowsUpdateOneRequiredWithoutGenresNestedInput = {
    create?: XOR<ShowsCreateWithoutGenresInput, ShowsUncheckedCreateWithoutGenresInput>
    connectOrCreate?: ShowsCreateOrConnectWithoutGenresInput
    upsert?: ShowsUpsertWithoutGenresInput
    connect?: ShowsWhereUniqueInput
    update?: XOR<XOR<ShowsUpdateToOneWithWhereWithoutGenresInput, ShowsUpdateWithoutGenresInput>, ShowsUncheckedUpdateWithoutGenresInput>
  }

  export type UserCreateNestedOneWithoutShowCommentsInput = {
    create?: XOR<UserCreateWithoutShowCommentsInput, UserUncheckedCreateWithoutShowCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutShowCommentsInput
    connect?: UserWhereUniqueInput
  }

  export type ShowsCreateNestedOneWithoutCommentsInput = {
    create?: XOR<ShowsCreateWithoutCommentsInput, ShowsUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: ShowsCreateOrConnectWithoutCommentsInput
    connect?: ShowsWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutShowCommentsNestedInput = {
    create?: XOR<UserCreateWithoutShowCommentsInput, UserUncheckedCreateWithoutShowCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutShowCommentsInput
    upsert?: UserUpsertWithoutShowCommentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutShowCommentsInput, UserUpdateWithoutShowCommentsInput>, UserUncheckedUpdateWithoutShowCommentsInput>
  }

  export type ShowsUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<ShowsCreateWithoutCommentsInput, ShowsUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: ShowsCreateOrConnectWithoutCommentsInput
    upsert?: ShowsUpsertWithoutCommentsInput
    connect?: ShowsWhereUniqueInput
    update?: XOR<XOR<ShowsUpdateToOneWithWhereWithoutCommentsInput, ShowsUpdateWithoutCommentsInput>, ShowsUncheckedUpdateWithoutCommentsInput>
  }

  export type UserCreateNestedOneWithoutEpisodeCommentsInput = {
    create?: XOR<UserCreateWithoutEpisodeCommentsInput, UserUncheckedCreateWithoutEpisodeCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEpisodeCommentsInput
    connect?: UserWhereUniqueInput
  }

  export type EpisodesCreateNestedOneWithoutCommentsInput = {
    create?: XOR<EpisodesCreateWithoutCommentsInput, EpisodesUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: EpisodesCreateOrConnectWithoutCommentsInput
    connect?: EpisodesWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutEpisodeCommentsNestedInput = {
    create?: XOR<UserCreateWithoutEpisodeCommentsInput, UserUncheckedCreateWithoutEpisodeCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEpisodeCommentsInput
    upsert?: UserUpsertWithoutEpisodeCommentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEpisodeCommentsInput, UserUpdateWithoutEpisodeCommentsInput>, UserUncheckedUpdateWithoutEpisodeCommentsInput>
  }

  export type EpisodesUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<EpisodesCreateWithoutCommentsInput, EpisodesUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: EpisodesCreateOrConnectWithoutCommentsInput
    upsert?: EpisodesUpsertWithoutCommentsInput
    connect?: EpisodesWhereUniqueInput
    update?: XOR<XOR<EpisodesUpdateToOneWithWhereWithoutCommentsInput, EpisodesUpdateWithoutCommentsInput>, EpisodesUncheckedUpdateWithoutCommentsInput>
  }

  export type SeasonsCreateNestedOneWithoutEpisodesInput = {
    create?: XOR<SeasonsCreateWithoutEpisodesInput, SeasonsUncheckedCreateWithoutEpisodesInput>
    connectOrCreate?: SeasonsCreateOrConnectWithoutEpisodesInput
    connect?: SeasonsWhereUniqueInput
  }

  export type EpisodesCommentsCreateNestedManyWithoutEpisodeInput = {
    create?: XOR<EpisodesCommentsCreateWithoutEpisodeInput, EpisodesCommentsUncheckedCreateWithoutEpisodeInput> | EpisodesCommentsCreateWithoutEpisodeInput[] | EpisodesCommentsUncheckedCreateWithoutEpisodeInput[]
    connectOrCreate?: EpisodesCommentsCreateOrConnectWithoutEpisodeInput | EpisodesCommentsCreateOrConnectWithoutEpisodeInput[]
    createMany?: EpisodesCommentsCreateManyEpisodeInputEnvelope
    connect?: EpisodesCommentsWhereUniqueInput | EpisodesCommentsWhereUniqueInput[]
  }

  export type UserEpisodesCreateNestedManyWithoutEpisodeInput = {
    create?: XOR<UserEpisodesCreateWithoutEpisodeInput, UserEpisodesUncheckedCreateWithoutEpisodeInput> | UserEpisodesCreateWithoutEpisodeInput[] | UserEpisodesUncheckedCreateWithoutEpisodeInput[]
    connectOrCreate?: UserEpisodesCreateOrConnectWithoutEpisodeInput | UserEpisodesCreateOrConnectWithoutEpisodeInput[]
    createMany?: UserEpisodesCreateManyEpisodeInputEnvelope
    connect?: UserEpisodesWhereUniqueInput | UserEpisodesWhereUniqueInput[]
  }

  export type EpisodesCommentsUncheckedCreateNestedManyWithoutEpisodeInput = {
    create?: XOR<EpisodesCommentsCreateWithoutEpisodeInput, EpisodesCommentsUncheckedCreateWithoutEpisodeInput> | EpisodesCommentsCreateWithoutEpisodeInput[] | EpisodesCommentsUncheckedCreateWithoutEpisodeInput[]
    connectOrCreate?: EpisodesCommentsCreateOrConnectWithoutEpisodeInput | EpisodesCommentsCreateOrConnectWithoutEpisodeInput[]
    createMany?: EpisodesCommentsCreateManyEpisodeInputEnvelope
    connect?: EpisodesCommentsWhereUniqueInput | EpisodesCommentsWhereUniqueInput[]
  }

  export type UserEpisodesUncheckedCreateNestedManyWithoutEpisodeInput = {
    create?: XOR<UserEpisodesCreateWithoutEpisodeInput, UserEpisodesUncheckedCreateWithoutEpisodeInput> | UserEpisodesCreateWithoutEpisodeInput[] | UserEpisodesUncheckedCreateWithoutEpisodeInput[]
    connectOrCreate?: UserEpisodesCreateOrConnectWithoutEpisodeInput | UserEpisodesCreateOrConnectWithoutEpisodeInput[]
    createMany?: UserEpisodesCreateManyEpisodeInputEnvelope
    connect?: UserEpisodesWhereUniqueInput | UserEpisodesWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SeasonsUpdateOneRequiredWithoutEpisodesNestedInput = {
    create?: XOR<SeasonsCreateWithoutEpisodesInput, SeasonsUncheckedCreateWithoutEpisodesInput>
    connectOrCreate?: SeasonsCreateOrConnectWithoutEpisodesInput
    upsert?: SeasonsUpsertWithoutEpisodesInput
    connect?: SeasonsWhereUniqueInput
    update?: XOR<XOR<SeasonsUpdateToOneWithWhereWithoutEpisodesInput, SeasonsUpdateWithoutEpisodesInput>, SeasonsUncheckedUpdateWithoutEpisodesInput>
  }

  export type EpisodesCommentsUpdateManyWithoutEpisodeNestedInput = {
    create?: XOR<EpisodesCommentsCreateWithoutEpisodeInput, EpisodesCommentsUncheckedCreateWithoutEpisodeInput> | EpisodesCommentsCreateWithoutEpisodeInput[] | EpisodesCommentsUncheckedCreateWithoutEpisodeInput[]
    connectOrCreate?: EpisodesCommentsCreateOrConnectWithoutEpisodeInput | EpisodesCommentsCreateOrConnectWithoutEpisodeInput[]
    upsert?: EpisodesCommentsUpsertWithWhereUniqueWithoutEpisodeInput | EpisodesCommentsUpsertWithWhereUniqueWithoutEpisodeInput[]
    createMany?: EpisodesCommentsCreateManyEpisodeInputEnvelope
    set?: EpisodesCommentsWhereUniqueInput | EpisodesCommentsWhereUniqueInput[]
    disconnect?: EpisodesCommentsWhereUniqueInput | EpisodesCommentsWhereUniqueInput[]
    delete?: EpisodesCommentsWhereUniqueInput | EpisodesCommentsWhereUniqueInput[]
    connect?: EpisodesCommentsWhereUniqueInput | EpisodesCommentsWhereUniqueInput[]
    update?: EpisodesCommentsUpdateWithWhereUniqueWithoutEpisodeInput | EpisodesCommentsUpdateWithWhereUniqueWithoutEpisodeInput[]
    updateMany?: EpisodesCommentsUpdateManyWithWhereWithoutEpisodeInput | EpisodesCommentsUpdateManyWithWhereWithoutEpisodeInput[]
    deleteMany?: EpisodesCommentsScalarWhereInput | EpisodesCommentsScalarWhereInput[]
  }

  export type UserEpisodesUpdateManyWithoutEpisodeNestedInput = {
    create?: XOR<UserEpisodesCreateWithoutEpisodeInput, UserEpisodesUncheckedCreateWithoutEpisodeInput> | UserEpisodesCreateWithoutEpisodeInput[] | UserEpisodesUncheckedCreateWithoutEpisodeInput[]
    connectOrCreate?: UserEpisodesCreateOrConnectWithoutEpisodeInput | UserEpisodesCreateOrConnectWithoutEpisodeInput[]
    upsert?: UserEpisodesUpsertWithWhereUniqueWithoutEpisodeInput | UserEpisodesUpsertWithWhereUniqueWithoutEpisodeInput[]
    createMany?: UserEpisodesCreateManyEpisodeInputEnvelope
    set?: UserEpisodesWhereUniqueInput | UserEpisodesWhereUniqueInput[]
    disconnect?: UserEpisodesWhereUniqueInput | UserEpisodesWhereUniqueInput[]
    delete?: UserEpisodesWhereUniqueInput | UserEpisodesWhereUniqueInput[]
    connect?: UserEpisodesWhereUniqueInput | UserEpisodesWhereUniqueInput[]
    update?: UserEpisodesUpdateWithWhereUniqueWithoutEpisodeInput | UserEpisodesUpdateWithWhereUniqueWithoutEpisodeInput[]
    updateMany?: UserEpisodesUpdateManyWithWhereWithoutEpisodeInput | UserEpisodesUpdateManyWithWhereWithoutEpisodeInput[]
    deleteMany?: UserEpisodesScalarWhereInput | UserEpisodesScalarWhereInput[]
  }

  export type EpisodesCommentsUncheckedUpdateManyWithoutEpisodeNestedInput = {
    create?: XOR<EpisodesCommentsCreateWithoutEpisodeInput, EpisodesCommentsUncheckedCreateWithoutEpisodeInput> | EpisodesCommentsCreateWithoutEpisodeInput[] | EpisodesCommentsUncheckedCreateWithoutEpisodeInput[]
    connectOrCreate?: EpisodesCommentsCreateOrConnectWithoutEpisodeInput | EpisodesCommentsCreateOrConnectWithoutEpisodeInput[]
    upsert?: EpisodesCommentsUpsertWithWhereUniqueWithoutEpisodeInput | EpisodesCommentsUpsertWithWhereUniqueWithoutEpisodeInput[]
    createMany?: EpisodesCommentsCreateManyEpisodeInputEnvelope
    set?: EpisodesCommentsWhereUniqueInput | EpisodesCommentsWhereUniqueInput[]
    disconnect?: EpisodesCommentsWhereUniqueInput | EpisodesCommentsWhereUniqueInput[]
    delete?: EpisodesCommentsWhereUniqueInput | EpisodesCommentsWhereUniqueInput[]
    connect?: EpisodesCommentsWhereUniqueInput | EpisodesCommentsWhereUniqueInput[]
    update?: EpisodesCommentsUpdateWithWhereUniqueWithoutEpisodeInput | EpisodesCommentsUpdateWithWhereUniqueWithoutEpisodeInput[]
    updateMany?: EpisodesCommentsUpdateManyWithWhereWithoutEpisodeInput | EpisodesCommentsUpdateManyWithWhereWithoutEpisodeInput[]
    deleteMany?: EpisodesCommentsScalarWhereInput | EpisodesCommentsScalarWhereInput[]
  }

  export type UserEpisodesUncheckedUpdateManyWithoutEpisodeNestedInput = {
    create?: XOR<UserEpisodesCreateWithoutEpisodeInput, UserEpisodesUncheckedCreateWithoutEpisodeInput> | UserEpisodesCreateWithoutEpisodeInput[] | UserEpisodesUncheckedCreateWithoutEpisodeInput[]
    connectOrCreate?: UserEpisodesCreateOrConnectWithoutEpisodeInput | UserEpisodesCreateOrConnectWithoutEpisodeInput[]
    upsert?: UserEpisodesUpsertWithWhereUniqueWithoutEpisodeInput | UserEpisodesUpsertWithWhereUniqueWithoutEpisodeInput[]
    createMany?: UserEpisodesCreateManyEpisodeInputEnvelope
    set?: UserEpisodesWhereUniqueInput | UserEpisodesWhereUniqueInput[]
    disconnect?: UserEpisodesWhereUniqueInput | UserEpisodesWhereUniqueInput[]
    delete?: UserEpisodesWhereUniqueInput | UserEpisodesWhereUniqueInput[]
    connect?: UserEpisodesWhereUniqueInput | UserEpisodesWhereUniqueInput[]
    update?: UserEpisodesUpdateWithWhereUniqueWithoutEpisodeInput | UserEpisodesUpdateWithWhereUniqueWithoutEpisodeInput[]
    updateMany?: UserEpisodesUpdateManyWithWhereWithoutEpisodeInput | UserEpisodesUpdateManyWithWhereWithoutEpisodeInput[]
    deleteMany?: UserEpisodesScalarWhereInput | UserEpisodesScalarWhereInput[]
  }

  export type ShowCastCreateNestedManyWithoutCastInput = {
    create?: XOR<ShowCastCreateWithoutCastInput, ShowCastUncheckedCreateWithoutCastInput> | ShowCastCreateWithoutCastInput[] | ShowCastUncheckedCreateWithoutCastInput[]
    connectOrCreate?: ShowCastCreateOrConnectWithoutCastInput | ShowCastCreateOrConnectWithoutCastInput[]
    createMany?: ShowCastCreateManyCastInputEnvelope
    connect?: ShowCastWhereUniqueInput | ShowCastWhereUniqueInput[]
  }

  export type ShowCastUncheckedCreateNestedManyWithoutCastInput = {
    create?: XOR<ShowCastCreateWithoutCastInput, ShowCastUncheckedCreateWithoutCastInput> | ShowCastCreateWithoutCastInput[] | ShowCastUncheckedCreateWithoutCastInput[]
    connectOrCreate?: ShowCastCreateOrConnectWithoutCastInput | ShowCastCreateOrConnectWithoutCastInput[]
    createMany?: ShowCastCreateManyCastInputEnvelope
    connect?: ShowCastWhereUniqueInput | ShowCastWhereUniqueInput[]
  }

  export type ShowCastUpdateManyWithoutCastNestedInput = {
    create?: XOR<ShowCastCreateWithoutCastInput, ShowCastUncheckedCreateWithoutCastInput> | ShowCastCreateWithoutCastInput[] | ShowCastUncheckedCreateWithoutCastInput[]
    connectOrCreate?: ShowCastCreateOrConnectWithoutCastInput | ShowCastCreateOrConnectWithoutCastInput[]
    upsert?: ShowCastUpsertWithWhereUniqueWithoutCastInput | ShowCastUpsertWithWhereUniqueWithoutCastInput[]
    createMany?: ShowCastCreateManyCastInputEnvelope
    set?: ShowCastWhereUniqueInput | ShowCastWhereUniqueInput[]
    disconnect?: ShowCastWhereUniqueInput | ShowCastWhereUniqueInput[]
    delete?: ShowCastWhereUniqueInput | ShowCastWhereUniqueInput[]
    connect?: ShowCastWhereUniqueInput | ShowCastWhereUniqueInput[]
    update?: ShowCastUpdateWithWhereUniqueWithoutCastInput | ShowCastUpdateWithWhereUniqueWithoutCastInput[]
    updateMany?: ShowCastUpdateManyWithWhereWithoutCastInput | ShowCastUpdateManyWithWhereWithoutCastInput[]
    deleteMany?: ShowCastScalarWhereInput | ShowCastScalarWhereInput[]
  }

  export type ShowCastUncheckedUpdateManyWithoutCastNestedInput = {
    create?: XOR<ShowCastCreateWithoutCastInput, ShowCastUncheckedCreateWithoutCastInput> | ShowCastCreateWithoutCastInput[] | ShowCastUncheckedCreateWithoutCastInput[]
    connectOrCreate?: ShowCastCreateOrConnectWithoutCastInput | ShowCastCreateOrConnectWithoutCastInput[]
    upsert?: ShowCastUpsertWithWhereUniqueWithoutCastInput | ShowCastUpsertWithWhereUniqueWithoutCastInput[]
    createMany?: ShowCastCreateManyCastInputEnvelope
    set?: ShowCastWhereUniqueInput | ShowCastWhereUniqueInput[]
    disconnect?: ShowCastWhereUniqueInput | ShowCastWhereUniqueInput[]
    delete?: ShowCastWhereUniqueInput | ShowCastWhereUniqueInput[]
    connect?: ShowCastWhereUniqueInput | ShowCastWhereUniqueInput[]
    update?: ShowCastUpdateWithWhereUniqueWithoutCastInput | ShowCastUpdateWithWhereUniqueWithoutCastInput[]
    updateMany?: ShowCastUpdateManyWithWhereWithoutCastInput | ShowCastUpdateManyWithWhereWithoutCastInput[]
    deleteMany?: ShowCastScalarWhereInput | ShowCastScalarWhereInput[]
  }

  export type EpisodesCreateNestedManyWithoutSeasonsInput = {
    create?: XOR<EpisodesCreateWithoutSeasonsInput, EpisodesUncheckedCreateWithoutSeasonsInput> | EpisodesCreateWithoutSeasonsInput[] | EpisodesUncheckedCreateWithoutSeasonsInput[]
    connectOrCreate?: EpisodesCreateOrConnectWithoutSeasonsInput | EpisodesCreateOrConnectWithoutSeasonsInput[]
    createMany?: EpisodesCreateManySeasonsInputEnvelope
    connect?: EpisodesWhereUniqueInput | EpisodesWhereUniqueInput[]
  }

  export type ShowsCreateNestedOneWithoutSeasonsInput = {
    create?: XOR<ShowsCreateWithoutSeasonsInput, ShowsUncheckedCreateWithoutSeasonsInput>
    connectOrCreate?: ShowsCreateOrConnectWithoutSeasonsInput
    connect?: ShowsWhereUniqueInput
  }

  export type EpisodesUncheckedCreateNestedManyWithoutSeasonsInput = {
    create?: XOR<EpisodesCreateWithoutSeasonsInput, EpisodesUncheckedCreateWithoutSeasonsInput> | EpisodesCreateWithoutSeasonsInput[] | EpisodesUncheckedCreateWithoutSeasonsInput[]
    connectOrCreate?: EpisodesCreateOrConnectWithoutSeasonsInput | EpisodesCreateOrConnectWithoutSeasonsInput[]
    createMany?: EpisodesCreateManySeasonsInputEnvelope
    connect?: EpisodesWhereUniqueInput | EpisodesWhereUniqueInput[]
  }

  export type EpisodesUpdateManyWithoutSeasonsNestedInput = {
    create?: XOR<EpisodesCreateWithoutSeasonsInput, EpisodesUncheckedCreateWithoutSeasonsInput> | EpisodesCreateWithoutSeasonsInput[] | EpisodesUncheckedCreateWithoutSeasonsInput[]
    connectOrCreate?: EpisodesCreateOrConnectWithoutSeasonsInput | EpisodesCreateOrConnectWithoutSeasonsInput[]
    upsert?: EpisodesUpsertWithWhereUniqueWithoutSeasonsInput | EpisodesUpsertWithWhereUniqueWithoutSeasonsInput[]
    createMany?: EpisodesCreateManySeasonsInputEnvelope
    set?: EpisodesWhereUniqueInput | EpisodesWhereUniqueInput[]
    disconnect?: EpisodesWhereUniqueInput | EpisodesWhereUniqueInput[]
    delete?: EpisodesWhereUniqueInput | EpisodesWhereUniqueInput[]
    connect?: EpisodesWhereUniqueInput | EpisodesWhereUniqueInput[]
    update?: EpisodesUpdateWithWhereUniqueWithoutSeasonsInput | EpisodesUpdateWithWhereUniqueWithoutSeasonsInput[]
    updateMany?: EpisodesUpdateManyWithWhereWithoutSeasonsInput | EpisodesUpdateManyWithWhereWithoutSeasonsInput[]
    deleteMany?: EpisodesScalarWhereInput | EpisodesScalarWhereInput[]
  }

  export type ShowsUpdateOneRequiredWithoutSeasonsNestedInput = {
    create?: XOR<ShowsCreateWithoutSeasonsInput, ShowsUncheckedCreateWithoutSeasonsInput>
    connectOrCreate?: ShowsCreateOrConnectWithoutSeasonsInput
    upsert?: ShowsUpsertWithoutSeasonsInput
    connect?: ShowsWhereUniqueInput
    update?: XOR<XOR<ShowsUpdateToOneWithWhereWithoutSeasonsInput, ShowsUpdateWithoutSeasonsInput>, ShowsUncheckedUpdateWithoutSeasonsInput>
  }

  export type EpisodesUncheckedUpdateManyWithoutSeasonsNestedInput = {
    create?: XOR<EpisodesCreateWithoutSeasonsInput, EpisodesUncheckedCreateWithoutSeasonsInput> | EpisodesCreateWithoutSeasonsInput[] | EpisodesUncheckedCreateWithoutSeasonsInput[]
    connectOrCreate?: EpisodesCreateOrConnectWithoutSeasonsInput | EpisodesCreateOrConnectWithoutSeasonsInput[]
    upsert?: EpisodesUpsertWithWhereUniqueWithoutSeasonsInput | EpisodesUpsertWithWhereUniqueWithoutSeasonsInput[]
    createMany?: EpisodesCreateManySeasonsInputEnvelope
    set?: EpisodesWhereUniqueInput | EpisodesWhereUniqueInput[]
    disconnect?: EpisodesWhereUniqueInput | EpisodesWhereUniqueInput[]
    delete?: EpisodesWhereUniqueInput | EpisodesWhereUniqueInput[]
    connect?: EpisodesWhereUniqueInput | EpisodesWhereUniqueInput[]
    update?: EpisodesUpdateWithWhereUniqueWithoutSeasonsInput | EpisodesUpdateWithWhereUniqueWithoutSeasonsInput[]
    updateMany?: EpisodesUpdateManyWithWhereWithoutSeasonsInput | EpisodesUpdateManyWithWhereWithoutSeasonsInput[]
    deleteMany?: EpisodesScalarWhereInput | EpisodesScalarWhereInput[]
  }

  export type ShowsCreateNestedOneWithoutShow_castInput = {
    create?: XOR<ShowsCreateWithoutShow_castInput, ShowsUncheckedCreateWithoutShow_castInput>
    connectOrCreate?: ShowsCreateOrConnectWithoutShow_castInput
    connect?: ShowsWhereUniqueInput
  }

  export type CastCreateNestedOneWithoutShow_castInput = {
    create?: XOR<CastCreateWithoutShow_castInput, CastUncheckedCreateWithoutShow_castInput>
    connectOrCreate?: CastCreateOrConnectWithoutShow_castInput
    connect?: CastWhereUniqueInput
  }

  export type ShowsUpdateOneRequiredWithoutShow_castNestedInput = {
    create?: XOR<ShowsCreateWithoutShow_castInput, ShowsUncheckedCreateWithoutShow_castInput>
    connectOrCreate?: ShowsCreateOrConnectWithoutShow_castInput
    upsert?: ShowsUpsertWithoutShow_castInput
    connect?: ShowsWhereUniqueInput
    update?: XOR<XOR<ShowsUpdateToOneWithWhereWithoutShow_castInput, ShowsUpdateWithoutShow_castInput>, ShowsUncheckedUpdateWithoutShow_castInput>
  }

  export type CastUpdateOneRequiredWithoutShow_castNestedInput = {
    create?: XOR<CastCreateWithoutShow_castInput, CastUncheckedCreateWithoutShow_castInput>
    connectOrCreate?: CastCreateOrConnectWithoutShow_castInput
    upsert?: CastUpsertWithoutShow_castInput
    connect?: CastWhereUniqueInput
    update?: XOR<XOR<CastUpdateToOneWithWhereWithoutShow_castInput, CastUpdateWithoutShow_castInput>, CastUncheckedUpdateWithoutShow_castInput>
  }

  export type SeriesPlatformsCreateNestedManyWithoutPlatformsInput = {
    create?: XOR<SeriesPlatformsCreateWithoutPlatformsInput, SeriesPlatformsUncheckedCreateWithoutPlatformsInput> | SeriesPlatformsCreateWithoutPlatformsInput[] | SeriesPlatformsUncheckedCreateWithoutPlatformsInput[]
    connectOrCreate?: SeriesPlatformsCreateOrConnectWithoutPlatformsInput | SeriesPlatformsCreateOrConnectWithoutPlatformsInput[]
    createMany?: SeriesPlatformsCreateManyPlatformsInputEnvelope
    connect?: SeriesPlatformsWhereUniqueInput | SeriesPlatformsWhereUniqueInput[]
  }

  export type SeriesPlatformsUncheckedCreateNestedManyWithoutPlatformsInput = {
    create?: XOR<SeriesPlatformsCreateWithoutPlatformsInput, SeriesPlatformsUncheckedCreateWithoutPlatformsInput> | SeriesPlatformsCreateWithoutPlatformsInput[] | SeriesPlatformsUncheckedCreateWithoutPlatformsInput[]
    connectOrCreate?: SeriesPlatformsCreateOrConnectWithoutPlatformsInput | SeriesPlatformsCreateOrConnectWithoutPlatformsInput[]
    createMany?: SeriesPlatformsCreateManyPlatformsInputEnvelope
    connect?: SeriesPlatformsWhereUniqueInput | SeriesPlatformsWhereUniqueInput[]
  }

  export type SeriesPlatformsUpdateManyWithoutPlatformsNestedInput = {
    create?: XOR<SeriesPlatformsCreateWithoutPlatformsInput, SeriesPlatformsUncheckedCreateWithoutPlatformsInput> | SeriesPlatformsCreateWithoutPlatformsInput[] | SeriesPlatformsUncheckedCreateWithoutPlatformsInput[]
    connectOrCreate?: SeriesPlatformsCreateOrConnectWithoutPlatformsInput | SeriesPlatformsCreateOrConnectWithoutPlatformsInput[]
    upsert?: SeriesPlatformsUpsertWithWhereUniqueWithoutPlatformsInput | SeriesPlatformsUpsertWithWhereUniqueWithoutPlatformsInput[]
    createMany?: SeriesPlatformsCreateManyPlatformsInputEnvelope
    set?: SeriesPlatformsWhereUniqueInput | SeriesPlatformsWhereUniqueInput[]
    disconnect?: SeriesPlatformsWhereUniqueInput | SeriesPlatformsWhereUniqueInput[]
    delete?: SeriesPlatformsWhereUniqueInput | SeriesPlatformsWhereUniqueInput[]
    connect?: SeriesPlatformsWhereUniqueInput | SeriesPlatformsWhereUniqueInput[]
    update?: SeriesPlatformsUpdateWithWhereUniqueWithoutPlatformsInput | SeriesPlatformsUpdateWithWhereUniqueWithoutPlatformsInput[]
    updateMany?: SeriesPlatformsUpdateManyWithWhereWithoutPlatformsInput | SeriesPlatformsUpdateManyWithWhereWithoutPlatformsInput[]
    deleteMany?: SeriesPlatformsScalarWhereInput | SeriesPlatformsScalarWhereInput[]
  }

  export type SeriesPlatformsUncheckedUpdateManyWithoutPlatformsNestedInput = {
    create?: XOR<SeriesPlatformsCreateWithoutPlatformsInput, SeriesPlatformsUncheckedCreateWithoutPlatformsInput> | SeriesPlatformsCreateWithoutPlatformsInput[] | SeriesPlatformsUncheckedCreateWithoutPlatformsInput[]
    connectOrCreate?: SeriesPlatformsCreateOrConnectWithoutPlatformsInput | SeriesPlatformsCreateOrConnectWithoutPlatformsInput[]
    upsert?: SeriesPlatformsUpsertWithWhereUniqueWithoutPlatformsInput | SeriesPlatformsUpsertWithWhereUniqueWithoutPlatformsInput[]
    createMany?: SeriesPlatformsCreateManyPlatformsInputEnvelope
    set?: SeriesPlatformsWhereUniqueInput | SeriesPlatformsWhereUniqueInput[]
    disconnect?: SeriesPlatformsWhereUniqueInput | SeriesPlatformsWhereUniqueInput[]
    delete?: SeriesPlatformsWhereUniqueInput | SeriesPlatformsWhereUniqueInput[]
    connect?: SeriesPlatformsWhereUniqueInput | SeriesPlatformsWhereUniqueInput[]
    update?: SeriesPlatformsUpdateWithWhereUniqueWithoutPlatformsInput | SeriesPlatformsUpdateWithWhereUniqueWithoutPlatformsInput[]
    updateMany?: SeriesPlatformsUpdateManyWithWhereWithoutPlatformsInput | SeriesPlatformsUpdateManyWithWhereWithoutPlatformsInput[]
    deleteMany?: SeriesPlatformsScalarWhereInput | SeriesPlatformsScalarWhereInput[]
  }

  export type PlatformsCreateNestedOneWithoutSeriesPlatformsInput = {
    create?: XOR<PlatformsCreateWithoutSeriesPlatformsInput, PlatformsUncheckedCreateWithoutSeriesPlatformsInput>
    connectOrCreate?: PlatformsCreateOrConnectWithoutSeriesPlatformsInput
    connect?: PlatformsWhereUniqueInput
  }

  export type ShowsCreateNestedOneWithoutPlatformsInput = {
    create?: XOR<ShowsCreateWithoutPlatformsInput, ShowsUncheckedCreateWithoutPlatformsInput>
    connectOrCreate?: ShowsCreateOrConnectWithoutPlatformsInput
    connect?: ShowsWhereUniqueInput
  }

  export type PlatformsUpdateOneRequiredWithoutSeriesPlatformsNestedInput = {
    create?: XOR<PlatformsCreateWithoutSeriesPlatformsInput, PlatformsUncheckedCreateWithoutSeriesPlatformsInput>
    connectOrCreate?: PlatformsCreateOrConnectWithoutSeriesPlatformsInput
    upsert?: PlatformsUpsertWithoutSeriesPlatformsInput
    connect?: PlatformsWhereUniqueInput
    update?: XOR<XOR<PlatformsUpdateToOneWithWhereWithoutSeriesPlatformsInput, PlatformsUpdateWithoutSeriesPlatformsInput>, PlatformsUncheckedUpdateWithoutSeriesPlatformsInput>
  }

  export type ShowsUpdateOneRequiredWithoutPlatformsNestedInput = {
    create?: XOR<ShowsCreateWithoutPlatformsInput, ShowsUncheckedCreateWithoutPlatformsInput>
    connectOrCreate?: ShowsCreateOrConnectWithoutPlatformsInput
    upsert?: ShowsUpsertWithoutPlatformsInput
    connect?: ShowsWhereUniqueInput
    update?: XOR<XOR<ShowsUpdateToOneWithWhereWithoutPlatformsInput, ShowsUpdateWithoutPlatformsInput>, ShowsUncheckedUpdateWithoutPlatformsInput>
  }

  export type SeasonsCreateNestedManyWithoutShowsInput = {
    create?: XOR<SeasonsCreateWithoutShowsInput, SeasonsUncheckedCreateWithoutShowsInput> | SeasonsCreateWithoutShowsInput[] | SeasonsUncheckedCreateWithoutShowsInput[]
    connectOrCreate?: SeasonsCreateOrConnectWithoutShowsInput | SeasonsCreateOrConnectWithoutShowsInput[]
    createMany?: SeasonsCreateManyShowsInputEnvelope
    connect?: SeasonsWhereUniqueInput | SeasonsWhereUniqueInput[]
  }

  export type ShowCastCreateNestedManyWithoutShowsInput = {
    create?: XOR<ShowCastCreateWithoutShowsInput, ShowCastUncheckedCreateWithoutShowsInput> | ShowCastCreateWithoutShowsInput[] | ShowCastUncheckedCreateWithoutShowsInput[]
    connectOrCreate?: ShowCastCreateOrConnectWithoutShowsInput | ShowCastCreateOrConnectWithoutShowsInput[]
    createMany?: ShowCastCreateManyShowsInputEnvelope
    connect?: ShowCastWhereUniqueInput | ShowCastWhereUniqueInput[]
  }

  export type UserShowsCreateNestedManyWithoutShowsInput = {
    create?: XOR<UserShowsCreateWithoutShowsInput, UserShowsUncheckedCreateWithoutShowsInput> | UserShowsCreateWithoutShowsInput[] | UserShowsUncheckedCreateWithoutShowsInput[]
    connectOrCreate?: UserShowsCreateOrConnectWithoutShowsInput | UserShowsCreateOrConnectWithoutShowsInput[]
    createMany?: UserShowsCreateManyShowsInputEnvelope
    connect?: UserShowsWhereUniqueInput | UserShowsWhereUniqueInput[]
  }

  export type SeriesGenresCreateNestedManyWithoutShowsInput = {
    create?: XOR<SeriesGenresCreateWithoutShowsInput, SeriesGenresUncheckedCreateWithoutShowsInput> | SeriesGenresCreateWithoutShowsInput[] | SeriesGenresUncheckedCreateWithoutShowsInput[]
    connectOrCreate?: SeriesGenresCreateOrConnectWithoutShowsInput | SeriesGenresCreateOrConnectWithoutShowsInput[]
    createMany?: SeriesGenresCreateManyShowsInputEnvelope
    connect?: SeriesGenresWhereUniqueInput | SeriesGenresWhereUniqueInput[]
  }

  export type ShowCommentsCreateNestedManyWithoutShowInput = {
    create?: XOR<ShowCommentsCreateWithoutShowInput, ShowCommentsUncheckedCreateWithoutShowInput> | ShowCommentsCreateWithoutShowInput[] | ShowCommentsUncheckedCreateWithoutShowInput[]
    connectOrCreate?: ShowCommentsCreateOrConnectWithoutShowInput | ShowCommentsCreateOrConnectWithoutShowInput[]
    createMany?: ShowCommentsCreateManyShowInputEnvelope
    connect?: ShowCommentsWhereUniqueInput | ShowCommentsWhereUniqueInput[]
  }

  export type SeriesPlatformsCreateNestedManyWithoutShowsInput = {
    create?: XOR<SeriesPlatformsCreateWithoutShowsInput, SeriesPlatformsUncheckedCreateWithoutShowsInput> | SeriesPlatformsCreateWithoutShowsInput[] | SeriesPlatformsUncheckedCreateWithoutShowsInput[]
    connectOrCreate?: SeriesPlatformsCreateOrConnectWithoutShowsInput | SeriesPlatformsCreateOrConnectWithoutShowsInput[]
    createMany?: SeriesPlatformsCreateManyShowsInputEnvelope
    connect?: SeriesPlatformsWhereUniqueInput | SeriesPlatformsWhereUniqueInput[]
  }

  export type SeasonsUncheckedCreateNestedManyWithoutShowsInput = {
    create?: XOR<SeasonsCreateWithoutShowsInput, SeasonsUncheckedCreateWithoutShowsInput> | SeasonsCreateWithoutShowsInput[] | SeasonsUncheckedCreateWithoutShowsInput[]
    connectOrCreate?: SeasonsCreateOrConnectWithoutShowsInput | SeasonsCreateOrConnectWithoutShowsInput[]
    createMany?: SeasonsCreateManyShowsInputEnvelope
    connect?: SeasonsWhereUniqueInput | SeasonsWhereUniqueInput[]
  }

  export type ShowCastUncheckedCreateNestedManyWithoutShowsInput = {
    create?: XOR<ShowCastCreateWithoutShowsInput, ShowCastUncheckedCreateWithoutShowsInput> | ShowCastCreateWithoutShowsInput[] | ShowCastUncheckedCreateWithoutShowsInput[]
    connectOrCreate?: ShowCastCreateOrConnectWithoutShowsInput | ShowCastCreateOrConnectWithoutShowsInput[]
    createMany?: ShowCastCreateManyShowsInputEnvelope
    connect?: ShowCastWhereUniqueInput | ShowCastWhereUniqueInput[]
  }

  export type UserShowsUncheckedCreateNestedManyWithoutShowsInput = {
    create?: XOR<UserShowsCreateWithoutShowsInput, UserShowsUncheckedCreateWithoutShowsInput> | UserShowsCreateWithoutShowsInput[] | UserShowsUncheckedCreateWithoutShowsInput[]
    connectOrCreate?: UserShowsCreateOrConnectWithoutShowsInput | UserShowsCreateOrConnectWithoutShowsInput[]
    createMany?: UserShowsCreateManyShowsInputEnvelope
    connect?: UserShowsWhereUniqueInput | UserShowsWhereUniqueInput[]
  }

  export type SeriesGenresUncheckedCreateNestedManyWithoutShowsInput = {
    create?: XOR<SeriesGenresCreateWithoutShowsInput, SeriesGenresUncheckedCreateWithoutShowsInput> | SeriesGenresCreateWithoutShowsInput[] | SeriesGenresUncheckedCreateWithoutShowsInput[]
    connectOrCreate?: SeriesGenresCreateOrConnectWithoutShowsInput | SeriesGenresCreateOrConnectWithoutShowsInput[]
    createMany?: SeriesGenresCreateManyShowsInputEnvelope
    connect?: SeriesGenresWhereUniqueInput | SeriesGenresWhereUniqueInput[]
  }

  export type ShowCommentsUncheckedCreateNestedManyWithoutShowInput = {
    create?: XOR<ShowCommentsCreateWithoutShowInput, ShowCommentsUncheckedCreateWithoutShowInput> | ShowCommentsCreateWithoutShowInput[] | ShowCommentsUncheckedCreateWithoutShowInput[]
    connectOrCreate?: ShowCommentsCreateOrConnectWithoutShowInput | ShowCommentsCreateOrConnectWithoutShowInput[]
    createMany?: ShowCommentsCreateManyShowInputEnvelope
    connect?: ShowCommentsWhereUniqueInput | ShowCommentsWhereUniqueInput[]
  }

  export type SeriesPlatformsUncheckedCreateNestedManyWithoutShowsInput = {
    create?: XOR<SeriesPlatformsCreateWithoutShowsInput, SeriesPlatformsUncheckedCreateWithoutShowsInput> | SeriesPlatformsCreateWithoutShowsInput[] | SeriesPlatformsUncheckedCreateWithoutShowsInput[]
    connectOrCreate?: SeriesPlatformsCreateOrConnectWithoutShowsInput | SeriesPlatformsCreateOrConnectWithoutShowsInput[]
    createMany?: SeriesPlatformsCreateManyShowsInputEnvelope
    connect?: SeriesPlatformsWhereUniqueInput | SeriesPlatformsWhereUniqueInput[]
  }

  export type SeasonsUpdateManyWithoutShowsNestedInput = {
    create?: XOR<SeasonsCreateWithoutShowsInput, SeasonsUncheckedCreateWithoutShowsInput> | SeasonsCreateWithoutShowsInput[] | SeasonsUncheckedCreateWithoutShowsInput[]
    connectOrCreate?: SeasonsCreateOrConnectWithoutShowsInput | SeasonsCreateOrConnectWithoutShowsInput[]
    upsert?: SeasonsUpsertWithWhereUniqueWithoutShowsInput | SeasonsUpsertWithWhereUniqueWithoutShowsInput[]
    createMany?: SeasonsCreateManyShowsInputEnvelope
    set?: SeasonsWhereUniqueInput | SeasonsWhereUniqueInput[]
    disconnect?: SeasonsWhereUniqueInput | SeasonsWhereUniqueInput[]
    delete?: SeasonsWhereUniqueInput | SeasonsWhereUniqueInput[]
    connect?: SeasonsWhereUniqueInput | SeasonsWhereUniqueInput[]
    update?: SeasonsUpdateWithWhereUniqueWithoutShowsInput | SeasonsUpdateWithWhereUniqueWithoutShowsInput[]
    updateMany?: SeasonsUpdateManyWithWhereWithoutShowsInput | SeasonsUpdateManyWithWhereWithoutShowsInput[]
    deleteMany?: SeasonsScalarWhereInput | SeasonsScalarWhereInput[]
  }

  export type ShowCastUpdateManyWithoutShowsNestedInput = {
    create?: XOR<ShowCastCreateWithoutShowsInput, ShowCastUncheckedCreateWithoutShowsInput> | ShowCastCreateWithoutShowsInput[] | ShowCastUncheckedCreateWithoutShowsInput[]
    connectOrCreate?: ShowCastCreateOrConnectWithoutShowsInput | ShowCastCreateOrConnectWithoutShowsInput[]
    upsert?: ShowCastUpsertWithWhereUniqueWithoutShowsInput | ShowCastUpsertWithWhereUniqueWithoutShowsInput[]
    createMany?: ShowCastCreateManyShowsInputEnvelope
    set?: ShowCastWhereUniqueInput | ShowCastWhereUniqueInput[]
    disconnect?: ShowCastWhereUniqueInput | ShowCastWhereUniqueInput[]
    delete?: ShowCastWhereUniqueInput | ShowCastWhereUniqueInput[]
    connect?: ShowCastWhereUniqueInput | ShowCastWhereUniqueInput[]
    update?: ShowCastUpdateWithWhereUniqueWithoutShowsInput | ShowCastUpdateWithWhereUniqueWithoutShowsInput[]
    updateMany?: ShowCastUpdateManyWithWhereWithoutShowsInput | ShowCastUpdateManyWithWhereWithoutShowsInput[]
    deleteMany?: ShowCastScalarWhereInput | ShowCastScalarWhereInput[]
  }

  export type UserShowsUpdateManyWithoutShowsNestedInput = {
    create?: XOR<UserShowsCreateWithoutShowsInput, UserShowsUncheckedCreateWithoutShowsInput> | UserShowsCreateWithoutShowsInput[] | UserShowsUncheckedCreateWithoutShowsInput[]
    connectOrCreate?: UserShowsCreateOrConnectWithoutShowsInput | UserShowsCreateOrConnectWithoutShowsInput[]
    upsert?: UserShowsUpsertWithWhereUniqueWithoutShowsInput | UserShowsUpsertWithWhereUniqueWithoutShowsInput[]
    createMany?: UserShowsCreateManyShowsInputEnvelope
    set?: UserShowsWhereUniqueInput | UserShowsWhereUniqueInput[]
    disconnect?: UserShowsWhereUniqueInput | UserShowsWhereUniqueInput[]
    delete?: UserShowsWhereUniqueInput | UserShowsWhereUniqueInput[]
    connect?: UserShowsWhereUniqueInput | UserShowsWhereUniqueInput[]
    update?: UserShowsUpdateWithWhereUniqueWithoutShowsInput | UserShowsUpdateWithWhereUniqueWithoutShowsInput[]
    updateMany?: UserShowsUpdateManyWithWhereWithoutShowsInput | UserShowsUpdateManyWithWhereWithoutShowsInput[]
    deleteMany?: UserShowsScalarWhereInput | UserShowsScalarWhereInput[]
  }

  export type SeriesGenresUpdateManyWithoutShowsNestedInput = {
    create?: XOR<SeriesGenresCreateWithoutShowsInput, SeriesGenresUncheckedCreateWithoutShowsInput> | SeriesGenresCreateWithoutShowsInput[] | SeriesGenresUncheckedCreateWithoutShowsInput[]
    connectOrCreate?: SeriesGenresCreateOrConnectWithoutShowsInput | SeriesGenresCreateOrConnectWithoutShowsInput[]
    upsert?: SeriesGenresUpsertWithWhereUniqueWithoutShowsInput | SeriesGenresUpsertWithWhereUniqueWithoutShowsInput[]
    createMany?: SeriesGenresCreateManyShowsInputEnvelope
    set?: SeriesGenresWhereUniqueInput | SeriesGenresWhereUniqueInput[]
    disconnect?: SeriesGenresWhereUniqueInput | SeriesGenresWhereUniqueInput[]
    delete?: SeriesGenresWhereUniqueInput | SeriesGenresWhereUniqueInput[]
    connect?: SeriesGenresWhereUniqueInput | SeriesGenresWhereUniqueInput[]
    update?: SeriesGenresUpdateWithWhereUniqueWithoutShowsInput | SeriesGenresUpdateWithWhereUniqueWithoutShowsInput[]
    updateMany?: SeriesGenresUpdateManyWithWhereWithoutShowsInput | SeriesGenresUpdateManyWithWhereWithoutShowsInput[]
    deleteMany?: SeriesGenresScalarWhereInput | SeriesGenresScalarWhereInput[]
  }

  export type ShowCommentsUpdateManyWithoutShowNestedInput = {
    create?: XOR<ShowCommentsCreateWithoutShowInput, ShowCommentsUncheckedCreateWithoutShowInput> | ShowCommentsCreateWithoutShowInput[] | ShowCommentsUncheckedCreateWithoutShowInput[]
    connectOrCreate?: ShowCommentsCreateOrConnectWithoutShowInput | ShowCommentsCreateOrConnectWithoutShowInput[]
    upsert?: ShowCommentsUpsertWithWhereUniqueWithoutShowInput | ShowCommentsUpsertWithWhereUniqueWithoutShowInput[]
    createMany?: ShowCommentsCreateManyShowInputEnvelope
    set?: ShowCommentsWhereUniqueInput | ShowCommentsWhereUniqueInput[]
    disconnect?: ShowCommentsWhereUniqueInput | ShowCommentsWhereUniqueInput[]
    delete?: ShowCommentsWhereUniqueInput | ShowCommentsWhereUniqueInput[]
    connect?: ShowCommentsWhereUniqueInput | ShowCommentsWhereUniqueInput[]
    update?: ShowCommentsUpdateWithWhereUniqueWithoutShowInput | ShowCommentsUpdateWithWhereUniqueWithoutShowInput[]
    updateMany?: ShowCommentsUpdateManyWithWhereWithoutShowInput | ShowCommentsUpdateManyWithWhereWithoutShowInput[]
    deleteMany?: ShowCommentsScalarWhereInput | ShowCommentsScalarWhereInput[]
  }

  export type SeriesPlatformsUpdateManyWithoutShowsNestedInput = {
    create?: XOR<SeriesPlatformsCreateWithoutShowsInput, SeriesPlatformsUncheckedCreateWithoutShowsInput> | SeriesPlatformsCreateWithoutShowsInput[] | SeriesPlatformsUncheckedCreateWithoutShowsInput[]
    connectOrCreate?: SeriesPlatformsCreateOrConnectWithoutShowsInput | SeriesPlatformsCreateOrConnectWithoutShowsInput[]
    upsert?: SeriesPlatformsUpsertWithWhereUniqueWithoutShowsInput | SeriesPlatformsUpsertWithWhereUniqueWithoutShowsInput[]
    createMany?: SeriesPlatformsCreateManyShowsInputEnvelope
    set?: SeriesPlatformsWhereUniqueInput | SeriesPlatformsWhereUniqueInput[]
    disconnect?: SeriesPlatformsWhereUniqueInput | SeriesPlatformsWhereUniqueInput[]
    delete?: SeriesPlatformsWhereUniqueInput | SeriesPlatformsWhereUniqueInput[]
    connect?: SeriesPlatformsWhereUniqueInput | SeriesPlatformsWhereUniqueInput[]
    update?: SeriesPlatformsUpdateWithWhereUniqueWithoutShowsInput | SeriesPlatformsUpdateWithWhereUniqueWithoutShowsInput[]
    updateMany?: SeriesPlatformsUpdateManyWithWhereWithoutShowsInput | SeriesPlatformsUpdateManyWithWhereWithoutShowsInput[]
    deleteMany?: SeriesPlatformsScalarWhereInput | SeriesPlatformsScalarWhereInput[]
  }

  export type SeasonsUncheckedUpdateManyWithoutShowsNestedInput = {
    create?: XOR<SeasonsCreateWithoutShowsInput, SeasonsUncheckedCreateWithoutShowsInput> | SeasonsCreateWithoutShowsInput[] | SeasonsUncheckedCreateWithoutShowsInput[]
    connectOrCreate?: SeasonsCreateOrConnectWithoutShowsInput | SeasonsCreateOrConnectWithoutShowsInput[]
    upsert?: SeasonsUpsertWithWhereUniqueWithoutShowsInput | SeasonsUpsertWithWhereUniqueWithoutShowsInput[]
    createMany?: SeasonsCreateManyShowsInputEnvelope
    set?: SeasonsWhereUniqueInput | SeasonsWhereUniqueInput[]
    disconnect?: SeasonsWhereUniqueInput | SeasonsWhereUniqueInput[]
    delete?: SeasonsWhereUniqueInput | SeasonsWhereUniqueInput[]
    connect?: SeasonsWhereUniqueInput | SeasonsWhereUniqueInput[]
    update?: SeasonsUpdateWithWhereUniqueWithoutShowsInput | SeasonsUpdateWithWhereUniqueWithoutShowsInput[]
    updateMany?: SeasonsUpdateManyWithWhereWithoutShowsInput | SeasonsUpdateManyWithWhereWithoutShowsInput[]
    deleteMany?: SeasonsScalarWhereInput | SeasonsScalarWhereInput[]
  }

  export type ShowCastUncheckedUpdateManyWithoutShowsNestedInput = {
    create?: XOR<ShowCastCreateWithoutShowsInput, ShowCastUncheckedCreateWithoutShowsInput> | ShowCastCreateWithoutShowsInput[] | ShowCastUncheckedCreateWithoutShowsInput[]
    connectOrCreate?: ShowCastCreateOrConnectWithoutShowsInput | ShowCastCreateOrConnectWithoutShowsInput[]
    upsert?: ShowCastUpsertWithWhereUniqueWithoutShowsInput | ShowCastUpsertWithWhereUniqueWithoutShowsInput[]
    createMany?: ShowCastCreateManyShowsInputEnvelope
    set?: ShowCastWhereUniqueInput | ShowCastWhereUniqueInput[]
    disconnect?: ShowCastWhereUniqueInput | ShowCastWhereUniqueInput[]
    delete?: ShowCastWhereUniqueInput | ShowCastWhereUniqueInput[]
    connect?: ShowCastWhereUniqueInput | ShowCastWhereUniqueInput[]
    update?: ShowCastUpdateWithWhereUniqueWithoutShowsInput | ShowCastUpdateWithWhereUniqueWithoutShowsInput[]
    updateMany?: ShowCastUpdateManyWithWhereWithoutShowsInput | ShowCastUpdateManyWithWhereWithoutShowsInput[]
    deleteMany?: ShowCastScalarWhereInput | ShowCastScalarWhereInput[]
  }

  export type UserShowsUncheckedUpdateManyWithoutShowsNestedInput = {
    create?: XOR<UserShowsCreateWithoutShowsInput, UserShowsUncheckedCreateWithoutShowsInput> | UserShowsCreateWithoutShowsInput[] | UserShowsUncheckedCreateWithoutShowsInput[]
    connectOrCreate?: UserShowsCreateOrConnectWithoutShowsInput | UserShowsCreateOrConnectWithoutShowsInput[]
    upsert?: UserShowsUpsertWithWhereUniqueWithoutShowsInput | UserShowsUpsertWithWhereUniqueWithoutShowsInput[]
    createMany?: UserShowsCreateManyShowsInputEnvelope
    set?: UserShowsWhereUniqueInput | UserShowsWhereUniqueInput[]
    disconnect?: UserShowsWhereUniqueInput | UserShowsWhereUniqueInput[]
    delete?: UserShowsWhereUniqueInput | UserShowsWhereUniqueInput[]
    connect?: UserShowsWhereUniqueInput | UserShowsWhereUniqueInput[]
    update?: UserShowsUpdateWithWhereUniqueWithoutShowsInput | UserShowsUpdateWithWhereUniqueWithoutShowsInput[]
    updateMany?: UserShowsUpdateManyWithWhereWithoutShowsInput | UserShowsUpdateManyWithWhereWithoutShowsInput[]
    deleteMany?: UserShowsScalarWhereInput | UserShowsScalarWhereInput[]
  }

  export type SeriesGenresUncheckedUpdateManyWithoutShowsNestedInput = {
    create?: XOR<SeriesGenresCreateWithoutShowsInput, SeriesGenresUncheckedCreateWithoutShowsInput> | SeriesGenresCreateWithoutShowsInput[] | SeriesGenresUncheckedCreateWithoutShowsInput[]
    connectOrCreate?: SeriesGenresCreateOrConnectWithoutShowsInput | SeriesGenresCreateOrConnectWithoutShowsInput[]
    upsert?: SeriesGenresUpsertWithWhereUniqueWithoutShowsInput | SeriesGenresUpsertWithWhereUniqueWithoutShowsInput[]
    createMany?: SeriesGenresCreateManyShowsInputEnvelope
    set?: SeriesGenresWhereUniqueInput | SeriesGenresWhereUniqueInput[]
    disconnect?: SeriesGenresWhereUniqueInput | SeriesGenresWhereUniqueInput[]
    delete?: SeriesGenresWhereUniqueInput | SeriesGenresWhereUniqueInput[]
    connect?: SeriesGenresWhereUniqueInput | SeriesGenresWhereUniqueInput[]
    update?: SeriesGenresUpdateWithWhereUniqueWithoutShowsInput | SeriesGenresUpdateWithWhereUniqueWithoutShowsInput[]
    updateMany?: SeriesGenresUpdateManyWithWhereWithoutShowsInput | SeriesGenresUpdateManyWithWhereWithoutShowsInput[]
    deleteMany?: SeriesGenresScalarWhereInput | SeriesGenresScalarWhereInput[]
  }

  export type ShowCommentsUncheckedUpdateManyWithoutShowNestedInput = {
    create?: XOR<ShowCommentsCreateWithoutShowInput, ShowCommentsUncheckedCreateWithoutShowInput> | ShowCommentsCreateWithoutShowInput[] | ShowCommentsUncheckedCreateWithoutShowInput[]
    connectOrCreate?: ShowCommentsCreateOrConnectWithoutShowInput | ShowCommentsCreateOrConnectWithoutShowInput[]
    upsert?: ShowCommentsUpsertWithWhereUniqueWithoutShowInput | ShowCommentsUpsertWithWhereUniqueWithoutShowInput[]
    createMany?: ShowCommentsCreateManyShowInputEnvelope
    set?: ShowCommentsWhereUniqueInput | ShowCommentsWhereUniqueInput[]
    disconnect?: ShowCommentsWhereUniqueInput | ShowCommentsWhereUniqueInput[]
    delete?: ShowCommentsWhereUniqueInput | ShowCommentsWhereUniqueInput[]
    connect?: ShowCommentsWhereUniqueInput | ShowCommentsWhereUniqueInput[]
    update?: ShowCommentsUpdateWithWhereUniqueWithoutShowInput | ShowCommentsUpdateWithWhereUniqueWithoutShowInput[]
    updateMany?: ShowCommentsUpdateManyWithWhereWithoutShowInput | ShowCommentsUpdateManyWithWhereWithoutShowInput[]
    deleteMany?: ShowCommentsScalarWhereInput | ShowCommentsScalarWhereInput[]
  }

  export type SeriesPlatformsUncheckedUpdateManyWithoutShowsNestedInput = {
    create?: XOR<SeriesPlatformsCreateWithoutShowsInput, SeriesPlatformsUncheckedCreateWithoutShowsInput> | SeriesPlatformsCreateWithoutShowsInput[] | SeriesPlatformsUncheckedCreateWithoutShowsInput[]
    connectOrCreate?: SeriesPlatformsCreateOrConnectWithoutShowsInput | SeriesPlatformsCreateOrConnectWithoutShowsInput[]
    upsert?: SeriesPlatformsUpsertWithWhereUniqueWithoutShowsInput | SeriesPlatformsUpsertWithWhereUniqueWithoutShowsInput[]
    createMany?: SeriesPlatformsCreateManyShowsInputEnvelope
    set?: SeriesPlatformsWhereUniqueInput | SeriesPlatformsWhereUniqueInput[]
    disconnect?: SeriesPlatformsWhereUniqueInput | SeriesPlatformsWhereUniqueInput[]
    delete?: SeriesPlatformsWhereUniqueInput | SeriesPlatformsWhereUniqueInput[]
    connect?: SeriesPlatformsWhereUniqueInput | SeriesPlatformsWhereUniqueInput[]
    update?: SeriesPlatformsUpdateWithWhereUniqueWithoutShowsInput | SeriesPlatformsUpdateWithWhereUniqueWithoutShowsInput[]
    updateMany?: SeriesPlatformsUpdateManyWithWhereWithoutShowsInput | SeriesPlatformsUpdateManyWithWhereWithoutShowsInput[]
    deleteMany?: SeriesPlatformsScalarWhereInput | SeriesPlatformsScalarWhereInput[]
  }

  export type ShowsCreateNestedOneWithoutUsers_showsInput = {
    create?: XOR<ShowsCreateWithoutUsers_showsInput, ShowsUncheckedCreateWithoutUsers_showsInput>
    connectOrCreate?: ShowsCreateOrConnectWithoutUsers_showsInput
    connect?: ShowsWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutUsers_showsInput = {
    create?: XOR<UserCreateWithoutUsers_showsInput, UserUncheckedCreateWithoutUsers_showsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUsers_showsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type NullableEnumusers_shows_statusFieldUpdateOperationsInput = {
    set?: $Enums.users_shows_status | null
  }

  export type ShowsUpdateOneRequiredWithoutUsers_showsNestedInput = {
    create?: XOR<ShowsCreateWithoutUsers_showsInput, ShowsUncheckedCreateWithoutUsers_showsInput>
    connectOrCreate?: ShowsCreateOrConnectWithoutUsers_showsInput
    upsert?: ShowsUpsertWithoutUsers_showsInput
    connect?: ShowsWhereUniqueInput
    update?: XOR<XOR<ShowsUpdateToOneWithWhereWithoutUsers_showsInput, ShowsUpdateWithoutUsers_showsInput>, ShowsUncheckedUpdateWithoutUsers_showsInput>
  }

  export type UserUpdateOneRequiredWithoutUsers_showsNestedInput = {
    create?: XOR<UserCreateWithoutUsers_showsInput, UserUncheckedCreateWithoutUsers_showsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUsers_showsInput
    upsert?: UserUpsertWithoutUsers_showsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUsers_showsInput, UserUpdateWithoutUsers_showsInput>, UserUncheckedUpdateWithoutUsers_showsInput>
  }

  export type UserCreateNestedOneWithoutUsers_episodesInput = {
    create?: XOR<UserCreateWithoutUsers_episodesInput, UserUncheckedCreateWithoutUsers_episodesInput>
    connectOrCreate?: UserCreateOrConnectWithoutUsers_episodesInput
    connect?: UserWhereUniqueInput
  }

  export type EpisodesCreateNestedOneWithoutUsersInput = {
    create?: XOR<EpisodesCreateWithoutUsersInput, EpisodesUncheckedCreateWithoutUsersInput>
    connectOrCreate?: EpisodesCreateOrConnectWithoutUsersInput
    connect?: EpisodesWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutUsers_episodesNestedInput = {
    create?: XOR<UserCreateWithoutUsers_episodesInput, UserUncheckedCreateWithoutUsers_episodesInput>
    connectOrCreate?: UserCreateOrConnectWithoutUsers_episodesInput
    upsert?: UserUpsertWithoutUsers_episodesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUsers_episodesInput, UserUpdateWithoutUsers_episodesInput>, UserUncheckedUpdateWithoutUsers_episodesInput>
  }

  export type EpisodesUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<EpisodesCreateWithoutUsersInput, EpisodesUncheckedCreateWithoutUsersInput>
    connectOrCreate?: EpisodesCreateOrConnectWithoutUsersInput
    upsert?: EpisodesUpsertWithoutUsersInput
    connect?: EpisodesWhereUniqueInput
    update?: XOR<XOR<EpisodesUpdateToOneWithWhereWithoutUsersInput, EpisodesUpdateWithoutUsersInput>, EpisodesUncheckedUpdateWithoutUsersInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedEnumusers_shows_statusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.users_shows_status | Enumusers_shows_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.users_shows_status[] | null
    notIn?: $Enums.users_shows_status[] | null
    not?: NestedEnumusers_shows_statusNullableFilter<$PrismaModel> | $Enums.users_shows_status | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedEnumusers_shows_statusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.users_shows_status | Enumusers_shows_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.users_shows_status[] | null
    notIn?: $Enums.users_shows_status[] | null
    not?: NestedEnumusers_shows_statusNullableWithAggregatesFilter<$PrismaModel> | $Enums.users_shows_status | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumusers_shows_statusNullableFilter<$PrismaModel>
    _max?: NestedEnumusers_shows_statusNullableFilter<$PrismaModel>
  }

  export type ShowCommentsCreateWithoutUserInput = {
    content: string
    postedAt?: Date | string
    show: ShowsCreateNestedOneWithoutCommentsInput
  }

  export type ShowCommentsUncheckedCreateWithoutUserInput = {
    id?: number
    content: string
    postedAt?: Date | string
    id_show: number
  }

  export type ShowCommentsCreateOrConnectWithoutUserInput = {
    where: ShowCommentsWhereUniqueInput
    create: XOR<ShowCommentsCreateWithoutUserInput, ShowCommentsUncheckedCreateWithoutUserInput>
  }

  export type ShowCommentsCreateManyUserInputEnvelope = {
    data: ShowCommentsCreateManyUserInput | ShowCommentsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type EpisodesCommentsCreateWithoutUserInput = {
    content: string
    postedAt?: Date | string
    episode: EpisodesCreateNestedOneWithoutCommentsInput
  }

  export type EpisodesCommentsUncheckedCreateWithoutUserInput = {
    id?: number
    content: string
    postedAt?: Date | string
    id_episode: number
  }

  export type EpisodesCommentsCreateOrConnectWithoutUserInput = {
    where: EpisodesCommentsWhereUniqueInput
    create: XOR<EpisodesCommentsCreateWithoutUserInput, EpisodesCommentsUncheckedCreateWithoutUserInput>
  }

  export type EpisodesCommentsCreateManyUserInputEnvelope = {
    data: EpisodesCommentsCreateManyUserInput | EpisodesCommentsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AccountCreateWithoutUserInput = {
    id: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SessionCreateWithoutUserInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt: Date | string
    updatedAt: Date | string
    ipAddress?: string | null
    userAgent?: string | null
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt: Date | string
    updatedAt: Date | string
    ipAddress?: string | null
    userAgent?: string | null
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserShowsCreateWithoutUserInput = {
    is_favorite?: boolean | null
    is_archived?: boolean | null
    status?: $Enums.users_shows_status | null
    added_at?: Date | string | null
    rating?: number | null
    shows: ShowsCreateNestedOneWithoutUsers_showsInput
  }

  export type UserShowsUncheckedCreateWithoutUserInput = {
    id_show: number
    is_favorite?: boolean | null
    is_archived?: boolean | null
    status?: $Enums.users_shows_status | null
    added_at?: Date | string | null
    rating?: number | null
  }

  export type UserShowsCreateOrConnectWithoutUserInput = {
    where: UserShowsWhereUniqueInput
    create: XOR<UserShowsCreateWithoutUserInput, UserShowsUncheckedCreateWithoutUserInput>
  }

  export type UserShowsCreateManyUserInputEnvelope = {
    data: UserShowsCreateManyUserInput | UserShowsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserEpisodesCreateWithoutUserInput = {
    watched_at?: Date | string | null
    episode: EpisodesCreateNestedOneWithoutUsersInput
  }

  export type UserEpisodesUncheckedCreateWithoutUserInput = {
    id_episode: number
    watched_at?: Date | string | null
  }

  export type UserEpisodesCreateOrConnectWithoutUserInput = {
    where: UserEpisodesWhereUniqueInput
    create: XOR<UserEpisodesCreateWithoutUserInput, UserEpisodesUncheckedCreateWithoutUserInput>
  }

  export type UserEpisodesCreateManyUserInputEnvelope = {
    data: UserEpisodesCreateManyUserInput | UserEpisodesCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ShowCommentsUpsertWithWhereUniqueWithoutUserInput = {
    where: ShowCommentsWhereUniqueInput
    update: XOR<ShowCommentsUpdateWithoutUserInput, ShowCommentsUncheckedUpdateWithoutUserInput>
    create: XOR<ShowCommentsCreateWithoutUserInput, ShowCommentsUncheckedCreateWithoutUserInput>
  }

  export type ShowCommentsUpdateWithWhereUniqueWithoutUserInput = {
    where: ShowCommentsWhereUniqueInput
    data: XOR<ShowCommentsUpdateWithoutUserInput, ShowCommentsUncheckedUpdateWithoutUserInput>
  }

  export type ShowCommentsUpdateManyWithWhereWithoutUserInput = {
    where: ShowCommentsScalarWhereInput
    data: XOR<ShowCommentsUpdateManyMutationInput, ShowCommentsUncheckedUpdateManyWithoutUserInput>
  }

  export type ShowCommentsScalarWhereInput = {
    AND?: ShowCommentsScalarWhereInput | ShowCommentsScalarWhereInput[]
    OR?: ShowCommentsScalarWhereInput[]
    NOT?: ShowCommentsScalarWhereInput | ShowCommentsScalarWhereInput[]
    id?: IntFilter<"ShowComments"> | number
    content?: StringFilter<"ShowComments"> | string
    postedAt?: DateTimeFilter<"ShowComments"> | Date | string
    id_user?: StringFilter<"ShowComments"> | string
    id_show?: IntFilter<"ShowComments"> | number
  }

  export type EpisodesCommentsUpsertWithWhereUniqueWithoutUserInput = {
    where: EpisodesCommentsWhereUniqueInput
    update: XOR<EpisodesCommentsUpdateWithoutUserInput, EpisodesCommentsUncheckedUpdateWithoutUserInput>
    create: XOR<EpisodesCommentsCreateWithoutUserInput, EpisodesCommentsUncheckedCreateWithoutUserInput>
  }

  export type EpisodesCommentsUpdateWithWhereUniqueWithoutUserInput = {
    where: EpisodesCommentsWhereUniqueInput
    data: XOR<EpisodesCommentsUpdateWithoutUserInput, EpisodesCommentsUncheckedUpdateWithoutUserInput>
  }

  export type EpisodesCommentsUpdateManyWithWhereWithoutUserInput = {
    where: EpisodesCommentsScalarWhereInput
    data: XOR<EpisodesCommentsUpdateManyMutationInput, EpisodesCommentsUncheckedUpdateManyWithoutUserInput>
  }

  export type EpisodesCommentsScalarWhereInput = {
    AND?: EpisodesCommentsScalarWhereInput | EpisodesCommentsScalarWhereInput[]
    OR?: EpisodesCommentsScalarWhereInput[]
    NOT?: EpisodesCommentsScalarWhereInput | EpisodesCommentsScalarWhereInput[]
    id?: IntFilter<"EpisodesComments"> | number
    content?: StringFilter<"EpisodesComments"> | string
    postedAt?: DateTimeFilter<"EpisodesComments"> | Date | string
    id_user?: StringFilter<"EpisodesComments"> | string
    id_episode?: IntFilter<"EpisodesComments"> | number
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: StringFilter<"Account"> | string
    accountId?: StringFilter<"Account"> | string
    providerId?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    accessToken?: StringNullableFilter<"Account"> | string | null
    refreshToken?: StringNullableFilter<"Account"> | string | null
    idToken?: StringNullableFilter<"Account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    password?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    token?: StringFilter<"Session"> | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    ipAddress?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    userId?: StringFilter<"Session"> | string
  }

  export type UserShowsUpsertWithWhereUniqueWithoutUserInput = {
    where: UserShowsWhereUniqueInput
    update: XOR<UserShowsUpdateWithoutUserInput, UserShowsUncheckedUpdateWithoutUserInput>
    create: XOR<UserShowsCreateWithoutUserInput, UserShowsUncheckedCreateWithoutUserInput>
  }

  export type UserShowsUpdateWithWhereUniqueWithoutUserInput = {
    where: UserShowsWhereUniqueInput
    data: XOR<UserShowsUpdateWithoutUserInput, UserShowsUncheckedUpdateWithoutUserInput>
  }

  export type UserShowsUpdateManyWithWhereWithoutUserInput = {
    where: UserShowsScalarWhereInput
    data: XOR<UserShowsUpdateManyMutationInput, UserShowsUncheckedUpdateManyWithoutUserInput>
  }

  export type UserShowsScalarWhereInput = {
    AND?: UserShowsScalarWhereInput | UserShowsScalarWhereInput[]
    OR?: UserShowsScalarWhereInput[]
    NOT?: UserShowsScalarWhereInput | UserShowsScalarWhereInput[]
    id_user?: StringFilter<"UserShows"> | string
    id_show?: IntFilter<"UserShows"> | number
    is_favorite?: BoolNullableFilter<"UserShows"> | boolean | null
    is_archived?: BoolNullableFilter<"UserShows"> | boolean | null
    status?: Enumusers_shows_statusNullableFilter<"UserShows"> | $Enums.users_shows_status | null
    added_at?: DateTimeNullableFilter<"UserShows"> | Date | string | null
    rating?: IntNullableFilter<"UserShows"> | number | null
  }

  export type UserEpisodesUpsertWithWhereUniqueWithoutUserInput = {
    where: UserEpisodesWhereUniqueInput
    update: XOR<UserEpisodesUpdateWithoutUserInput, UserEpisodesUncheckedUpdateWithoutUserInput>
    create: XOR<UserEpisodesCreateWithoutUserInput, UserEpisodesUncheckedCreateWithoutUserInput>
  }

  export type UserEpisodesUpdateWithWhereUniqueWithoutUserInput = {
    where: UserEpisodesWhereUniqueInput
    data: XOR<UserEpisodesUpdateWithoutUserInput, UserEpisodesUncheckedUpdateWithoutUserInput>
  }

  export type UserEpisodesUpdateManyWithWhereWithoutUserInput = {
    where: UserEpisodesScalarWhereInput
    data: XOR<UserEpisodesUpdateManyMutationInput, UserEpisodesUncheckedUpdateManyWithoutUserInput>
  }

  export type UserEpisodesScalarWhereInput = {
    AND?: UserEpisodesScalarWhereInput | UserEpisodesScalarWhereInput[]
    OR?: UserEpisodesScalarWhereInput[]
    NOT?: UserEpisodesScalarWhereInput | UserEpisodesScalarWhereInput[]
    id_user?: StringFilter<"UserEpisodes"> | string
    id_episode?: IntFilter<"UserEpisodes"> | number
    watched_at?: DateTimeNullableFilter<"UserEpisodes"> | Date | string | null
  }

  export type UserCreateWithoutSessionsInput = {
    id: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    ShowComments?: ShowCommentsCreateNestedManyWithoutUserInput
    EpisodeComments?: EpisodesCommentsCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    users_shows?: UserShowsCreateNestedManyWithoutUserInput
    users_episodes?: UserEpisodesCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    ShowComments?: ShowCommentsUncheckedCreateNestedManyWithoutUserInput
    EpisodeComments?: EpisodesCommentsUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    users_shows?: UserShowsUncheckedCreateNestedManyWithoutUserInput
    users_episodes?: UserEpisodesUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ShowComments?: ShowCommentsUpdateManyWithoutUserNestedInput
    EpisodeComments?: EpisodesCommentsUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    users_shows?: UserShowsUpdateManyWithoutUserNestedInput
    users_episodes?: UserEpisodesUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ShowComments?: ShowCommentsUncheckedUpdateManyWithoutUserNestedInput
    EpisodeComments?: EpisodesCommentsUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    users_shows?: UserShowsUncheckedUpdateManyWithoutUserNestedInput
    users_episodes?: UserEpisodesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutAccountsInput = {
    id: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    ShowComments?: ShowCommentsCreateNestedManyWithoutUserInput
    EpisodeComments?: EpisodesCommentsCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    users_shows?: UserShowsCreateNestedManyWithoutUserInput
    users_episodes?: UserEpisodesCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    ShowComments?: ShowCommentsUncheckedCreateNestedManyWithoutUserInput
    EpisodeComments?: EpisodesCommentsUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    users_shows?: UserShowsUncheckedCreateNestedManyWithoutUserInput
    users_episodes?: UserEpisodesUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ShowComments?: ShowCommentsUpdateManyWithoutUserNestedInput
    EpisodeComments?: EpisodesCommentsUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    users_shows?: UserShowsUpdateManyWithoutUserNestedInput
    users_episodes?: UserEpisodesUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ShowComments?: ShowCommentsUncheckedUpdateManyWithoutUserNestedInput
    EpisodeComments?: EpisodesCommentsUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    users_shows?: UserShowsUncheckedUpdateManyWithoutUserNestedInput
    users_episodes?: UserEpisodesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SeriesGenresCreateWithoutGenresInput = {
    shows: ShowsCreateNestedOneWithoutGenresInput
  }

  export type SeriesGenresUncheckedCreateWithoutGenresInput = {
    id_show: number
  }

  export type SeriesGenresCreateOrConnectWithoutGenresInput = {
    where: SeriesGenresWhereUniqueInput
    create: XOR<SeriesGenresCreateWithoutGenresInput, SeriesGenresUncheckedCreateWithoutGenresInput>
  }

  export type SeriesGenresCreateManyGenresInputEnvelope = {
    data: SeriesGenresCreateManyGenresInput | SeriesGenresCreateManyGenresInput[]
    skipDuplicates?: boolean
  }

  export type SeriesGenresUpsertWithWhereUniqueWithoutGenresInput = {
    where: SeriesGenresWhereUniqueInput
    update: XOR<SeriesGenresUpdateWithoutGenresInput, SeriesGenresUncheckedUpdateWithoutGenresInput>
    create: XOR<SeriesGenresCreateWithoutGenresInput, SeriesGenresUncheckedCreateWithoutGenresInput>
  }

  export type SeriesGenresUpdateWithWhereUniqueWithoutGenresInput = {
    where: SeriesGenresWhereUniqueInput
    data: XOR<SeriesGenresUpdateWithoutGenresInput, SeriesGenresUncheckedUpdateWithoutGenresInput>
  }

  export type SeriesGenresUpdateManyWithWhereWithoutGenresInput = {
    where: SeriesGenresScalarWhereInput
    data: XOR<SeriesGenresUpdateManyMutationInput, SeriesGenresUncheckedUpdateManyWithoutGenresInput>
  }

  export type SeriesGenresScalarWhereInput = {
    AND?: SeriesGenresScalarWhereInput | SeriesGenresScalarWhereInput[]
    OR?: SeriesGenresScalarWhereInput[]
    NOT?: SeriesGenresScalarWhereInput | SeriesGenresScalarWhereInput[]
    id_show?: IntFilter<"SeriesGenres"> | number
    id_genre?: IntFilter<"SeriesGenres"> | number
  }

  export type GenresCreateWithoutSeriesGenresInput = {
    name: string
  }

  export type GenresUncheckedCreateWithoutSeriesGenresInput = {
    id?: number
    name: string
  }

  export type GenresCreateOrConnectWithoutSeriesGenresInput = {
    where: GenresWhereUniqueInput
    create: XOR<GenresCreateWithoutSeriesGenresInput, GenresUncheckedCreateWithoutSeriesGenresInput>
  }

  export type ShowsCreateWithoutGenresInput = {
    show_id: number
    title: string
    summary?: string | null
    image?: string | null
    seasons?: SeasonsCreateNestedManyWithoutShowsInput
    show_cast?: ShowCastCreateNestedManyWithoutShowsInput
    users_shows?: UserShowsCreateNestedManyWithoutShowsInput
    comments?: ShowCommentsCreateNestedManyWithoutShowInput
    platforms?: SeriesPlatformsCreateNestedManyWithoutShowsInput
  }

  export type ShowsUncheckedCreateWithoutGenresInput = {
    show_id: number
    title: string
    summary?: string | null
    image?: string | null
    seasons?: SeasonsUncheckedCreateNestedManyWithoutShowsInput
    show_cast?: ShowCastUncheckedCreateNestedManyWithoutShowsInput
    users_shows?: UserShowsUncheckedCreateNestedManyWithoutShowsInput
    comments?: ShowCommentsUncheckedCreateNestedManyWithoutShowInput
    platforms?: SeriesPlatformsUncheckedCreateNestedManyWithoutShowsInput
  }

  export type ShowsCreateOrConnectWithoutGenresInput = {
    where: ShowsWhereUniqueInput
    create: XOR<ShowsCreateWithoutGenresInput, ShowsUncheckedCreateWithoutGenresInput>
  }

  export type GenresUpsertWithoutSeriesGenresInput = {
    update: XOR<GenresUpdateWithoutSeriesGenresInput, GenresUncheckedUpdateWithoutSeriesGenresInput>
    create: XOR<GenresCreateWithoutSeriesGenresInput, GenresUncheckedCreateWithoutSeriesGenresInput>
    where?: GenresWhereInput
  }

  export type GenresUpdateToOneWithWhereWithoutSeriesGenresInput = {
    where?: GenresWhereInput
    data: XOR<GenresUpdateWithoutSeriesGenresInput, GenresUncheckedUpdateWithoutSeriesGenresInput>
  }

  export type GenresUpdateWithoutSeriesGenresInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type GenresUncheckedUpdateWithoutSeriesGenresInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ShowsUpsertWithoutGenresInput = {
    update: XOR<ShowsUpdateWithoutGenresInput, ShowsUncheckedUpdateWithoutGenresInput>
    create: XOR<ShowsCreateWithoutGenresInput, ShowsUncheckedCreateWithoutGenresInput>
    where?: ShowsWhereInput
  }

  export type ShowsUpdateToOneWithWhereWithoutGenresInput = {
    where?: ShowsWhereInput
    data: XOR<ShowsUpdateWithoutGenresInput, ShowsUncheckedUpdateWithoutGenresInput>
  }

  export type ShowsUpdateWithoutGenresInput = {
    show_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    seasons?: SeasonsUpdateManyWithoutShowsNestedInput
    show_cast?: ShowCastUpdateManyWithoutShowsNestedInput
    users_shows?: UserShowsUpdateManyWithoutShowsNestedInput
    comments?: ShowCommentsUpdateManyWithoutShowNestedInput
    platforms?: SeriesPlatformsUpdateManyWithoutShowsNestedInput
  }

  export type ShowsUncheckedUpdateWithoutGenresInput = {
    show_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    seasons?: SeasonsUncheckedUpdateManyWithoutShowsNestedInput
    show_cast?: ShowCastUncheckedUpdateManyWithoutShowsNestedInput
    users_shows?: UserShowsUncheckedUpdateManyWithoutShowsNestedInput
    comments?: ShowCommentsUncheckedUpdateManyWithoutShowNestedInput
    platforms?: SeriesPlatformsUncheckedUpdateManyWithoutShowsNestedInput
  }

  export type UserCreateWithoutShowCommentsInput = {
    id: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    EpisodeComments?: EpisodesCommentsCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    users_shows?: UserShowsCreateNestedManyWithoutUserInput
    users_episodes?: UserEpisodesCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutShowCommentsInput = {
    id: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    EpisodeComments?: EpisodesCommentsUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    users_shows?: UserShowsUncheckedCreateNestedManyWithoutUserInput
    users_episodes?: UserEpisodesUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutShowCommentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutShowCommentsInput, UserUncheckedCreateWithoutShowCommentsInput>
  }

  export type ShowsCreateWithoutCommentsInput = {
    show_id: number
    title: string
    summary?: string | null
    image?: string | null
    seasons?: SeasonsCreateNestedManyWithoutShowsInput
    show_cast?: ShowCastCreateNestedManyWithoutShowsInput
    users_shows?: UserShowsCreateNestedManyWithoutShowsInput
    genres?: SeriesGenresCreateNestedManyWithoutShowsInput
    platforms?: SeriesPlatformsCreateNestedManyWithoutShowsInput
  }

  export type ShowsUncheckedCreateWithoutCommentsInput = {
    show_id: number
    title: string
    summary?: string | null
    image?: string | null
    seasons?: SeasonsUncheckedCreateNestedManyWithoutShowsInput
    show_cast?: ShowCastUncheckedCreateNestedManyWithoutShowsInput
    users_shows?: UserShowsUncheckedCreateNestedManyWithoutShowsInput
    genres?: SeriesGenresUncheckedCreateNestedManyWithoutShowsInput
    platforms?: SeriesPlatformsUncheckedCreateNestedManyWithoutShowsInput
  }

  export type ShowsCreateOrConnectWithoutCommentsInput = {
    where: ShowsWhereUniqueInput
    create: XOR<ShowsCreateWithoutCommentsInput, ShowsUncheckedCreateWithoutCommentsInput>
  }

  export type UserUpsertWithoutShowCommentsInput = {
    update: XOR<UserUpdateWithoutShowCommentsInput, UserUncheckedUpdateWithoutShowCommentsInput>
    create: XOR<UserCreateWithoutShowCommentsInput, UserUncheckedCreateWithoutShowCommentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutShowCommentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutShowCommentsInput, UserUncheckedUpdateWithoutShowCommentsInput>
  }

  export type UserUpdateWithoutShowCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    EpisodeComments?: EpisodesCommentsUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    users_shows?: UserShowsUpdateManyWithoutUserNestedInput
    users_episodes?: UserEpisodesUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutShowCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    EpisodeComments?: EpisodesCommentsUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    users_shows?: UserShowsUncheckedUpdateManyWithoutUserNestedInput
    users_episodes?: UserEpisodesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ShowsUpsertWithoutCommentsInput = {
    update: XOR<ShowsUpdateWithoutCommentsInput, ShowsUncheckedUpdateWithoutCommentsInput>
    create: XOR<ShowsCreateWithoutCommentsInput, ShowsUncheckedCreateWithoutCommentsInput>
    where?: ShowsWhereInput
  }

  export type ShowsUpdateToOneWithWhereWithoutCommentsInput = {
    where?: ShowsWhereInput
    data: XOR<ShowsUpdateWithoutCommentsInput, ShowsUncheckedUpdateWithoutCommentsInput>
  }

  export type ShowsUpdateWithoutCommentsInput = {
    show_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    seasons?: SeasonsUpdateManyWithoutShowsNestedInput
    show_cast?: ShowCastUpdateManyWithoutShowsNestedInput
    users_shows?: UserShowsUpdateManyWithoutShowsNestedInput
    genres?: SeriesGenresUpdateManyWithoutShowsNestedInput
    platforms?: SeriesPlatformsUpdateManyWithoutShowsNestedInput
  }

  export type ShowsUncheckedUpdateWithoutCommentsInput = {
    show_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    seasons?: SeasonsUncheckedUpdateManyWithoutShowsNestedInput
    show_cast?: ShowCastUncheckedUpdateManyWithoutShowsNestedInput
    users_shows?: UserShowsUncheckedUpdateManyWithoutShowsNestedInput
    genres?: SeriesGenresUncheckedUpdateManyWithoutShowsNestedInput
    platforms?: SeriesPlatformsUncheckedUpdateManyWithoutShowsNestedInput
  }

  export type UserCreateWithoutEpisodeCommentsInput = {
    id: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    ShowComments?: ShowCommentsCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    users_shows?: UserShowsCreateNestedManyWithoutUserInput
    users_episodes?: UserEpisodesCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutEpisodeCommentsInput = {
    id: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    ShowComments?: ShowCommentsUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    users_shows?: UserShowsUncheckedCreateNestedManyWithoutUserInput
    users_episodes?: UserEpisodesUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutEpisodeCommentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEpisodeCommentsInput, UserUncheckedCreateWithoutEpisodeCommentsInput>
  }

  export type EpisodesCreateWithoutCommentsInput = {
    episode_id: number
    name: string
    season_number: number
    episode_number?: number | null
    airdate?: string | null
    summary?: string | null
    url?: string | null
    image?: string | null
    seasons: SeasonsCreateNestedOneWithoutEpisodesInput
    users?: UserEpisodesCreateNestedManyWithoutEpisodeInput
  }

  export type EpisodesUncheckedCreateWithoutCommentsInput = {
    episode_id: number
    season_id: number
    name: string
    season_number: number
    episode_number?: number | null
    airdate?: string | null
    summary?: string | null
    url?: string | null
    image?: string | null
    users?: UserEpisodesUncheckedCreateNestedManyWithoutEpisodeInput
  }

  export type EpisodesCreateOrConnectWithoutCommentsInput = {
    where: EpisodesWhereUniqueInput
    create: XOR<EpisodesCreateWithoutCommentsInput, EpisodesUncheckedCreateWithoutCommentsInput>
  }

  export type UserUpsertWithoutEpisodeCommentsInput = {
    update: XOR<UserUpdateWithoutEpisodeCommentsInput, UserUncheckedUpdateWithoutEpisodeCommentsInput>
    create: XOR<UserCreateWithoutEpisodeCommentsInput, UserUncheckedCreateWithoutEpisodeCommentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEpisodeCommentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEpisodeCommentsInput, UserUncheckedUpdateWithoutEpisodeCommentsInput>
  }

  export type UserUpdateWithoutEpisodeCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ShowComments?: ShowCommentsUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    users_shows?: UserShowsUpdateManyWithoutUserNestedInput
    users_episodes?: UserEpisodesUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutEpisodeCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ShowComments?: ShowCommentsUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    users_shows?: UserShowsUncheckedUpdateManyWithoutUserNestedInput
    users_episodes?: UserEpisodesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type EpisodesUpsertWithoutCommentsInput = {
    update: XOR<EpisodesUpdateWithoutCommentsInput, EpisodesUncheckedUpdateWithoutCommentsInput>
    create: XOR<EpisodesCreateWithoutCommentsInput, EpisodesUncheckedCreateWithoutCommentsInput>
    where?: EpisodesWhereInput
  }

  export type EpisodesUpdateToOneWithWhereWithoutCommentsInput = {
    where?: EpisodesWhereInput
    data: XOR<EpisodesUpdateWithoutCommentsInput, EpisodesUncheckedUpdateWithoutCommentsInput>
  }

  export type EpisodesUpdateWithoutCommentsInput = {
    episode_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    season_number?: IntFieldUpdateOperationsInput | number
    episode_number?: NullableIntFieldUpdateOperationsInput | number | null
    airdate?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    seasons?: SeasonsUpdateOneRequiredWithoutEpisodesNestedInput
    users?: UserEpisodesUpdateManyWithoutEpisodeNestedInput
  }

  export type EpisodesUncheckedUpdateWithoutCommentsInput = {
    episode_id?: IntFieldUpdateOperationsInput | number
    season_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    season_number?: IntFieldUpdateOperationsInput | number
    episode_number?: NullableIntFieldUpdateOperationsInput | number | null
    airdate?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    users?: UserEpisodesUncheckedUpdateManyWithoutEpisodeNestedInput
  }

  export type SeasonsCreateWithoutEpisodesInput = {
    season_id: number
    summary?: string | null
    image?: string | null
    shows: ShowsCreateNestedOneWithoutSeasonsInput
  }

  export type SeasonsUncheckedCreateWithoutEpisodesInput = {
    season_id: number
    show_id: number
    summary?: string | null
    image?: string | null
  }

  export type SeasonsCreateOrConnectWithoutEpisodesInput = {
    where: SeasonsWhereUniqueInput
    create: XOR<SeasonsCreateWithoutEpisodesInput, SeasonsUncheckedCreateWithoutEpisodesInput>
  }

  export type EpisodesCommentsCreateWithoutEpisodeInput = {
    content: string
    postedAt?: Date | string
    user: UserCreateNestedOneWithoutEpisodeCommentsInput
  }

  export type EpisodesCommentsUncheckedCreateWithoutEpisodeInput = {
    id?: number
    content: string
    postedAt?: Date | string
    id_user: string
  }

  export type EpisodesCommentsCreateOrConnectWithoutEpisodeInput = {
    where: EpisodesCommentsWhereUniqueInput
    create: XOR<EpisodesCommentsCreateWithoutEpisodeInput, EpisodesCommentsUncheckedCreateWithoutEpisodeInput>
  }

  export type EpisodesCommentsCreateManyEpisodeInputEnvelope = {
    data: EpisodesCommentsCreateManyEpisodeInput | EpisodesCommentsCreateManyEpisodeInput[]
    skipDuplicates?: boolean
  }

  export type UserEpisodesCreateWithoutEpisodeInput = {
    watched_at?: Date | string | null
    user: UserCreateNestedOneWithoutUsers_episodesInput
  }

  export type UserEpisodesUncheckedCreateWithoutEpisodeInput = {
    id_user: string
    watched_at?: Date | string | null
  }

  export type UserEpisodesCreateOrConnectWithoutEpisodeInput = {
    where: UserEpisodesWhereUniqueInput
    create: XOR<UserEpisodesCreateWithoutEpisodeInput, UserEpisodesUncheckedCreateWithoutEpisodeInput>
  }

  export type UserEpisodesCreateManyEpisodeInputEnvelope = {
    data: UserEpisodesCreateManyEpisodeInput | UserEpisodesCreateManyEpisodeInput[]
    skipDuplicates?: boolean
  }

  export type SeasonsUpsertWithoutEpisodesInput = {
    update: XOR<SeasonsUpdateWithoutEpisodesInput, SeasonsUncheckedUpdateWithoutEpisodesInput>
    create: XOR<SeasonsCreateWithoutEpisodesInput, SeasonsUncheckedCreateWithoutEpisodesInput>
    where?: SeasonsWhereInput
  }

  export type SeasonsUpdateToOneWithWhereWithoutEpisodesInput = {
    where?: SeasonsWhereInput
    data: XOR<SeasonsUpdateWithoutEpisodesInput, SeasonsUncheckedUpdateWithoutEpisodesInput>
  }

  export type SeasonsUpdateWithoutEpisodesInput = {
    season_id?: IntFieldUpdateOperationsInput | number
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    shows?: ShowsUpdateOneRequiredWithoutSeasonsNestedInput
  }

  export type SeasonsUncheckedUpdateWithoutEpisodesInput = {
    season_id?: IntFieldUpdateOperationsInput | number
    show_id?: IntFieldUpdateOperationsInput | number
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EpisodesCommentsUpsertWithWhereUniqueWithoutEpisodeInput = {
    where: EpisodesCommentsWhereUniqueInput
    update: XOR<EpisodesCommentsUpdateWithoutEpisodeInput, EpisodesCommentsUncheckedUpdateWithoutEpisodeInput>
    create: XOR<EpisodesCommentsCreateWithoutEpisodeInput, EpisodesCommentsUncheckedCreateWithoutEpisodeInput>
  }

  export type EpisodesCommentsUpdateWithWhereUniqueWithoutEpisodeInput = {
    where: EpisodesCommentsWhereUniqueInput
    data: XOR<EpisodesCommentsUpdateWithoutEpisodeInput, EpisodesCommentsUncheckedUpdateWithoutEpisodeInput>
  }

  export type EpisodesCommentsUpdateManyWithWhereWithoutEpisodeInput = {
    where: EpisodesCommentsScalarWhereInput
    data: XOR<EpisodesCommentsUpdateManyMutationInput, EpisodesCommentsUncheckedUpdateManyWithoutEpisodeInput>
  }

  export type UserEpisodesUpsertWithWhereUniqueWithoutEpisodeInput = {
    where: UserEpisodesWhereUniqueInput
    update: XOR<UserEpisodesUpdateWithoutEpisodeInput, UserEpisodesUncheckedUpdateWithoutEpisodeInput>
    create: XOR<UserEpisodesCreateWithoutEpisodeInput, UserEpisodesUncheckedCreateWithoutEpisodeInput>
  }

  export type UserEpisodesUpdateWithWhereUniqueWithoutEpisodeInput = {
    where: UserEpisodesWhereUniqueInput
    data: XOR<UserEpisodesUpdateWithoutEpisodeInput, UserEpisodesUncheckedUpdateWithoutEpisodeInput>
  }

  export type UserEpisodesUpdateManyWithWhereWithoutEpisodeInput = {
    where: UserEpisodesScalarWhereInput
    data: XOR<UserEpisodesUpdateManyMutationInput, UserEpisodesUncheckedUpdateManyWithoutEpisodeInput>
  }

  export type ShowCastCreateWithoutCastInput = {
    character_name: string
    shows: ShowsCreateNestedOneWithoutShow_castInput
  }

  export type ShowCastUncheckedCreateWithoutCastInput = {
    show_id: number
    character_name: string
  }

  export type ShowCastCreateOrConnectWithoutCastInput = {
    where: ShowCastWhereUniqueInput
    create: XOR<ShowCastCreateWithoutCastInput, ShowCastUncheckedCreateWithoutCastInput>
  }

  export type ShowCastCreateManyCastInputEnvelope = {
    data: ShowCastCreateManyCastInput | ShowCastCreateManyCastInput[]
    skipDuplicates?: boolean
  }

  export type ShowCastUpsertWithWhereUniqueWithoutCastInput = {
    where: ShowCastWhereUniqueInput
    update: XOR<ShowCastUpdateWithoutCastInput, ShowCastUncheckedUpdateWithoutCastInput>
    create: XOR<ShowCastCreateWithoutCastInput, ShowCastUncheckedCreateWithoutCastInput>
  }

  export type ShowCastUpdateWithWhereUniqueWithoutCastInput = {
    where: ShowCastWhereUniqueInput
    data: XOR<ShowCastUpdateWithoutCastInput, ShowCastUncheckedUpdateWithoutCastInput>
  }

  export type ShowCastUpdateManyWithWhereWithoutCastInput = {
    where: ShowCastScalarWhereInput
    data: XOR<ShowCastUpdateManyMutationInput, ShowCastUncheckedUpdateManyWithoutCastInput>
  }

  export type ShowCastScalarWhereInput = {
    AND?: ShowCastScalarWhereInput | ShowCastScalarWhereInput[]
    OR?: ShowCastScalarWhereInput[]
    NOT?: ShowCastScalarWhereInput | ShowCastScalarWhereInput[]
    show_id?: IntFilter<"ShowCast"> | number
    person_id?: IntFilter<"ShowCast"> | number
    character_name?: StringFilter<"ShowCast"> | string
  }

  export type EpisodesCreateWithoutSeasonsInput = {
    episode_id: number
    name: string
    season_number: number
    episode_number?: number | null
    airdate?: string | null
    summary?: string | null
    url?: string | null
    image?: string | null
    comments?: EpisodesCommentsCreateNestedManyWithoutEpisodeInput
    users?: UserEpisodesCreateNestedManyWithoutEpisodeInput
  }

  export type EpisodesUncheckedCreateWithoutSeasonsInput = {
    episode_id: number
    name: string
    season_number: number
    episode_number?: number | null
    airdate?: string | null
    summary?: string | null
    url?: string | null
    image?: string | null
    comments?: EpisodesCommentsUncheckedCreateNestedManyWithoutEpisodeInput
    users?: UserEpisodesUncheckedCreateNestedManyWithoutEpisodeInput
  }

  export type EpisodesCreateOrConnectWithoutSeasonsInput = {
    where: EpisodesWhereUniqueInput
    create: XOR<EpisodesCreateWithoutSeasonsInput, EpisodesUncheckedCreateWithoutSeasonsInput>
  }

  export type EpisodesCreateManySeasonsInputEnvelope = {
    data: EpisodesCreateManySeasonsInput | EpisodesCreateManySeasonsInput[]
    skipDuplicates?: boolean
  }

  export type ShowsCreateWithoutSeasonsInput = {
    show_id: number
    title: string
    summary?: string | null
    image?: string | null
    show_cast?: ShowCastCreateNestedManyWithoutShowsInput
    users_shows?: UserShowsCreateNestedManyWithoutShowsInput
    genres?: SeriesGenresCreateNestedManyWithoutShowsInput
    comments?: ShowCommentsCreateNestedManyWithoutShowInput
    platforms?: SeriesPlatformsCreateNestedManyWithoutShowsInput
  }

  export type ShowsUncheckedCreateWithoutSeasonsInput = {
    show_id: number
    title: string
    summary?: string | null
    image?: string | null
    show_cast?: ShowCastUncheckedCreateNestedManyWithoutShowsInput
    users_shows?: UserShowsUncheckedCreateNestedManyWithoutShowsInput
    genres?: SeriesGenresUncheckedCreateNestedManyWithoutShowsInput
    comments?: ShowCommentsUncheckedCreateNestedManyWithoutShowInput
    platforms?: SeriesPlatformsUncheckedCreateNestedManyWithoutShowsInput
  }

  export type ShowsCreateOrConnectWithoutSeasonsInput = {
    where: ShowsWhereUniqueInput
    create: XOR<ShowsCreateWithoutSeasonsInput, ShowsUncheckedCreateWithoutSeasonsInput>
  }

  export type EpisodesUpsertWithWhereUniqueWithoutSeasonsInput = {
    where: EpisodesWhereUniqueInput
    update: XOR<EpisodesUpdateWithoutSeasonsInput, EpisodesUncheckedUpdateWithoutSeasonsInput>
    create: XOR<EpisodesCreateWithoutSeasonsInput, EpisodesUncheckedCreateWithoutSeasonsInput>
  }

  export type EpisodesUpdateWithWhereUniqueWithoutSeasonsInput = {
    where: EpisodesWhereUniqueInput
    data: XOR<EpisodesUpdateWithoutSeasonsInput, EpisodesUncheckedUpdateWithoutSeasonsInput>
  }

  export type EpisodesUpdateManyWithWhereWithoutSeasonsInput = {
    where: EpisodesScalarWhereInput
    data: XOR<EpisodesUpdateManyMutationInput, EpisodesUncheckedUpdateManyWithoutSeasonsInput>
  }

  export type EpisodesScalarWhereInput = {
    AND?: EpisodesScalarWhereInput | EpisodesScalarWhereInput[]
    OR?: EpisodesScalarWhereInput[]
    NOT?: EpisodesScalarWhereInput | EpisodesScalarWhereInput[]
    episode_id?: IntFilter<"Episodes"> | number
    season_id?: IntFilter<"Episodes"> | number
    name?: StringFilter<"Episodes"> | string
    season_number?: IntFilter<"Episodes"> | number
    episode_number?: IntNullableFilter<"Episodes"> | number | null
    airdate?: StringNullableFilter<"Episodes"> | string | null
    summary?: StringNullableFilter<"Episodes"> | string | null
    url?: StringNullableFilter<"Episodes"> | string | null
    image?: StringNullableFilter<"Episodes"> | string | null
  }

  export type ShowsUpsertWithoutSeasonsInput = {
    update: XOR<ShowsUpdateWithoutSeasonsInput, ShowsUncheckedUpdateWithoutSeasonsInput>
    create: XOR<ShowsCreateWithoutSeasonsInput, ShowsUncheckedCreateWithoutSeasonsInput>
    where?: ShowsWhereInput
  }

  export type ShowsUpdateToOneWithWhereWithoutSeasonsInput = {
    where?: ShowsWhereInput
    data: XOR<ShowsUpdateWithoutSeasonsInput, ShowsUncheckedUpdateWithoutSeasonsInput>
  }

  export type ShowsUpdateWithoutSeasonsInput = {
    show_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    show_cast?: ShowCastUpdateManyWithoutShowsNestedInput
    users_shows?: UserShowsUpdateManyWithoutShowsNestedInput
    genres?: SeriesGenresUpdateManyWithoutShowsNestedInput
    comments?: ShowCommentsUpdateManyWithoutShowNestedInput
    platforms?: SeriesPlatformsUpdateManyWithoutShowsNestedInput
  }

  export type ShowsUncheckedUpdateWithoutSeasonsInput = {
    show_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    show_cast?: ShowCastUncheckedUpdateManyWithoutShowsNestedInput
    users_shows?: UserShowsUncheckedUpdateManyWithoutShowsNestedInput
    genres?: SeriesGenresUncheckedUpdateManyWithoutShowsNestedInput
    comments?: ShowCommentsUncheckedUpdateManyWithoutShowNestedInput
    platforms?: SeriesPlatformsUncheckedUpdateManyWithoutShowsNestedInput
  }

  export type ShowsCreateWithoutShow_castInput = {
    show_id: number
    title: string
    summary?: string | null
    image?: string | null
    seasons?: SeasonsCreateNestedManyWithoutShowsInput
    users_shows?: UserShowsCreateNestedManyWithoutShowsInput
    genres?: SeriesGenresCreateNestedManyWithoutShowsInput
    comments?: ShowCommentsCreateNestedManyWithoutShowInput
    platforms?: SeriesPlatformsCreateNestedManyWithoutShowsInput
  }

  export type ShowsUncheckedCreateWithoutShow_castInput = {
    show_id: number
    title: string
    summary?: string | null
    image?: string | null
    seasons?: SeasonsUncheckedCreateNestedManyWithoutShowsInput
    users_shows?: UserShowsUncheckedCreateNestedManyWithoutShowsInput
    genres?: SeriesGenresUncheckedCreateNestedManyWithoutShowsInput
    comments?: ShowCommentsUncheckedCreateNestedManyWithoutShowInput
    platforms?: SeriesPlatformsUncheckedCreateNestedManyWithoutShowsInput
  }

  export type ShowsCreateOrConnectWithoutShow_castInput = {
    where: ShowsWhereUniqueInput
    create: XOR<ShowsCreateWithoutShow_castInput, ShowsUncheckedCreateWithoutShow_castInput>
  }

  export type CastCreateWithoutShow_castInput = {
    person_id: number
    name: string
    image?: string | null
  }

  export type CastUncheckedCreateWithoutShow_castInput = {
    person_id: number
    name: string
    image?: string | null
  }

  export type CastCreateOrConnectWithoutShow_castInput = {
    where: CastWhereUniqueInput
    create: XOR<CastCreateWithoutShow_castInput, CastUncheckedCreateWithoutShow_castInput>
  }

  export type ShowsUpsertWithoutShow_castInput = {
    update: XOR<ShowsUpdateWithoutShow_castInput, ShowsUncheckedUpdateWithoutShow_castInput>
    create: XOR<ShowsCreateWithoutShow_castInput, ShowsUncheckedCreateWithoutShow_castInput>
    where?: ShowsWhereInput
  }

  export type ShowsUpdateToOneWithWhereWithoutShow_castInput = {
    where?: ShowsWhereInput
    data: XOR<ShowsUpdateWithoutShow_castInput, ShowsUncheckedUpdateWithoutShow_castInput>
  }

  export type ShowsUpdateWithoutShow_castInput = {
    show_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    seasons?: SeasonsUpdateManyWithoutShowsNestedInput
    users_shows?: UserShowsUpdateManyWithoutShowsNestedInput
    genres?: SeriesGenresUpdateManyWithoutShowsNestedInput
    comments?: ShowCommentsUpdateManyWithoutShowNestedInput
    platforms?: SeriesPlatformsUpdateManyWithoutShowsNestedInput
  }

  export type ShowsUncheckedUpdateWithoutShow_castInput = {
    show_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    seasons?: SeasonsUncheckedUpdateManyWithoutShowsNestedInput
    users_shows?: UserShowsUncheckedUpdateManyWithoutShowsNestedInput
    genres?: SeriesGenresUncheckedUpdateManyWithoutShowsNestedInput
    comments?: ShowCommentsUncheckedUpdateManyWithoutShowNestedInput
    platforms?: SeriesPlatformsUncheckedUpdateManyWithoutShowsNestedInput
  }

  export type CastUpsertWithoutShow_castInput = {
    update: XOR<CastUpdateWithoutShow_castInput, CastUncheckedUpdateWithoutShow_castInput>
    create: XOR<CastCreateWithoutShow_castInput, CastUncheckedCreateWithoutShow_castInput>
    where?: CastWhereInput
  }

  export type CastUpdateToOneWithWhereWithoutShow_castInput = {
    where?: CastWhereInput
    data: XOR<CastUpdateWithoutShow_castInput, CastUncheckedUpdateWithoutShow_castInput>
  }

  export type CastUpdateWithoutShow_castInput = {
    person_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CastUncheckedUpdateWithoutShow_castInput = {
    person_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SeriesPlatformsCreateWithoutPlatformsInput = {
    shows: ShowsCreateNestedOneWithoutPlatformsInput
  }

  export type SeriesPlatformsUncheckedCreateWithoutPlatformsInput = {
    id_show: number
  }

  export type SeriesPlatformsCreateOrConnectWithoutPlatformsInput = {
    where: SeriesPlatformsWhereUniqueInput
    create: XOR<SeriesPlatformsCreateWithoutPlatformsInput, SeriesPlatformsUncheckedCreateWithoutPlatformsInput>
  }

  export type SeriesPlatformsCreateManyPlatformsInputEnvelope = {
    data: SeriesPlatformsCreateManyPlatformsInput | SeriesPlatformsCreateManyPlatformsInput[]
    skipDuplicates?: boolean
  }

  export type SeriesPlatformsUpsertWithWhereUniqueWithoutPlatformsInput = {
    where: SeriesPlatformsWhereUniqueInput
    update: XOR<SeriesPlatformsUpdateWithoutPlatformsInput, SeriesPlatformsUncheckedUpdateWithoutPlatformsInput>
    create: XOR<SeriesPlatformsCreateWithoutPlatformsInput, SeriesPlatformsUncheckedCreateWithoutPlatformsInput>
  }

  export type SeriesPlatformsUpdateWithWhereUniqueWithoutPlatformsInput = {
    where: SeriesPlatformsWhereUniqueInput
    data: XOR<SeriesPlatformsUpdateWithoutPlatformsInput, SeriesPlatformsUncheckedUpdateWithoutPlatformsInput>
  }

  export type SeriesPlatformsUpdateManyWithWhereWithoutPlatformsInput = {
    where: SeriesPlatformsScalarWhereInput
    data: XOR<SeriesPlatformsUpdateManyMutationInput, SeriesPlatformsUncheckedUpdateManyWithoutPlatformsInput>
  }

  export type SeriesPlatformsScalarWhereInput = {
    AND?: SeriesPlatformsScalarWhereInput | SeriesPlatformsScalarWhereInput[]
    OR?: SeriesPlatformsScalarWhereInput[]
    NOT?: SeriesPlatformsScalarWhereInput | SeriesPlatformsScalarWhereInput[]
    id_show?: IntFilter<"SeriesPlatforms"> | number
    id_platform?: IntFilter<"SeriesPlatforms"> | number
  }

  export type PlatformsCreateWithoutSeriesPlatformsInput = {
    name: string
    type: string
    country_code?: string | null
  }

  export type PlatformsUncheckedCreateWithoutSeriesPlatformsInput = {
    id?: number
    name: string
    type: string
    country_code?: string | null
  }

  export type PlatformsCreateOrConnectWithoutSeriesPlatformsInput = {
    where: PlatformsWhereUniqueInput
    create: XOR<PlatformsCreateWithoutSeriesPlatformsInput, PlatformsUncheckedCreateWithoutSeriesPlatformsInput>
  }

  export type ShowsCreateWithoutPlatformsInput = {
    show_id: number
    title: string
    summary?: string | null
    image?: string | null
    seasons?: SeasonsCreateNestedManyWithoutShowsInput
    show_cast?: ShowCastCreateNestedManyWithoutShowsInput
    users_shows?: UserShowsCreateNestedManyWithoutShowsInput
    genres?: SeriesGenresCreateNestedManyWithoutShowsInput
    comments?: ShowCommentsCreateNestedManyWithoutShowInput
  }

  export type ShowsUncheckedCreateWithoutPlatformsInput = {
    show_id: number
    title: string
    summary?: string | null
    image?: string | null
    seasons?: SeasonsUncheckedCreateNestedManyWithoutShowsInput
    show_cast?: ShowCastUncheckedCreateNestedManyWithoutShowsInput
    users_shows?: UserShowsUncheckedCreateNestedManyWithoutShowsInput
    genres?: SeriesGenresUncheckedCreateNestedManyWithoutShowsInput
    comments?: ShowCommentsUncheckedCreateNestedManyWithoutShowInput
  }

  export type ShowsCreateOrConnectWithoutPlatformsInput = {
    where: ShowsWhereUniqueInput
    create: XOR<ShowsCreateWithoutPlatformsInput, ShowsUncheckedCreateWithoutPlatformsInput>
  }

  export type PlatformsUpsertWithoutSeriesPlatformsInput = {
    update: XOR<PlatformsUpdateWithoutSeriesPlatformsInput, PlatformsUncheckedUpdateWithoutSeriesPlatformsInput>
    create: XOR<PlatformsCreateWithoutSeriesPlatformsInput, PlatformsUncheckedCreateWithoutSeriesPlatformsInput>
    where?: PlatformsWhereInput
  }

  export type PlatformsUpdateToOneWithWhereWithoutSeriesPlatformsInput = {
    where?: PlatformsWhereInput
    data: XOR<PlatformsUpdateWithoutSeriesPlatformsInput, PlatformsUncheckedUpdateWithoutSeriesPlatformsInput>
  }

  export type PlatformsUpdateWithoutSeriesPlatformsInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    country_code?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PlatformsUncheckedUpdateWithoutSeriesPlatformsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    country_code?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ShowsUpsertWithoutPlatformsInput = {
    update: XOR<ShowsUpdateWithoutPlatformsInput, ShowsUncheckedUpdateWithoutPlatformsInput>
    create: XOR<ShowsCreateWithoutPlatformsInput, ShowsUncheckedCreateWithoutPlatformsInput>
    where?: ShowsWhereInput
  }

  export type ShowsUpdateToOneWithWhereWithoutPlatformsInput = {
    where?: ShowsWhereInput
    data: XOR<ShowsUpdateWithoutPlatformsInput, ShowsUncheckedUpdateWithoutPlatformsInput>
  }

  export type ShowsUpdateWithoutPlatformsInput = {
    show_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    seasons?: SeasonsUpdateManyWithoutShowsNestedInput
    show_cast?: ShowCastUpdateManyWithoutShowsNestedInput
    users_shows?: UserShowsUpdateManyWithoutShowsNestedInput
    genres?: SeriesGenresUpdateManyWithoutShowsNestedInput
    comments?: ShowCommentsUpdateManyWithoutShowNestedInput
  }

  export type ShowsUncheckedUpdateWithoutPlatformsInput = {
    show_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    seasons?: SeasonsUncheckedUpdateManyWithoutShowsNestedInput
    show_cast?: ShowCastUncheckedUpdateManyWithoutShowsNestedInput
    users_shows?: UserShowsUncheckedUpdateManyWithoutShowsNestedInput
    genres?: SeriesGenresUncheckedUpdateManyWithoutShowsNestedInput
    comments?: ShowCommentsUncheckedUpdateManyWithoutShowNestedInput
  }

  export type SeasonsCreateWithoutShowsInput = {
    season_id: number
    summary?: string | null
    image?: string | null
    episodes?: EpisodesCreateNestedManyWithoutSeasonsInput
  }

  export type SeasonsUncheckedCreateWithoutShowsInput = {
    season_id: number
    summary?: string | null
    image?: string | null
    episodes?: EpisodesUncheckedCreateNestedManyWithoutSeasonsInput
  }

  export type SeasonsCreateOrConnectWithoutShowsInput = {
    where: SeasonsWhereUniqueInput
    create: XOR<SeasonsCreateWithoutShowsInput, SeasonsUncheckedCreateWithoutShowsInput>
  }

  export type SeasonsCreateManyShowsInputEnvelope = {
    data: SeasonsCreateManyShowsInput | SeasonsCreateManyShowsInput[]
    skipDuplicates?: boolean
  }

  export type ShowCastCreateWithoutShowsInput = {
    character_name: string
    cast: CastCreateNestedOneWithoutShow_castInput
  }

  export type ShowCastUncheckedCreateWithoutShowsInput = {
    person_id: number
    character_name: string
  }

  export type ShowCastCreateOrConnectWithoutShowsInput = {
    where: ShowCastWhereUniqueInput
    create: XOR<ShowCastCreateWithoutShowsInput, ShowCastUncheckedCreateWithoutShowsInput>
  }

  export type ShowCastCreateManyShowsInputEnvelope = {
    data: ShowCastCreateManyShowsInput | ShowCastCreateManyShowsInput[]
    skipDuplicates?: boolean
  }

  export type UserShowsCreateWithoutShowsInput = {
    is_favorite?: boolean | null
    is_archived?: boolean | null
    status?: $Enums.users_shows_status | null
    added_at?: Date | string | null
    rating?: number | null
    user: UserCreateNestedOneWithoutUsers_showsInput
  }

  export type UserShowsUncheckedCreateWithoutShowsInput = {
    id_user: string
    is_favorite?: boolean | null
    is_archived?: boolean | null
    status?: $Enums.users_shows_status | null
    added_at?: Date | string | null
    rating?: number | null
  }

  export type UserShowsCreateOrConnectWithoutShowsInput = {
    where: UserShowsWhereUniqueInput
    create: XOR<UserShowsCreateWithoutShowsInput, UserShowsUncheckedCreateWithoutShowsInput>
  }

  export type UserShowsCreateManyShowsInputEnvelope = {
    data: UserShowsCreateManyShowsInput | UserShowsCreateManyShowsInput[]
    skipDuplicates?: boolean
  }

  export type SeriesGenresCreateWithoutShowsInput = {
    genres: GenresCreateNestedOneWithoutSeriesGenresInput
  }

  export type SeriesGenresUncheckedCreateWithoutShowsInput = {
    id_genre: number
  }

  export type SeriesGenresCreateOrConnectWithoutShowsInput = {
    where: SeriesGenresWhereUniqueInput
    create: XOR<SeriesGenresCreateWithoutShowsInput, SeriesGenresUncheckedCreateWithoutShowsInput>
  }

  export type SeriesGenresCreateManyShowsInputEnvelope = {
    data: SeriesGenresCreateManyShowsInput | SeriesGenresCreateManyShowsInput[]
    skipDuplicates?: boolean
  }

  export type ShowCommentsCreateWithoutShowInput = {
    content: string
    postedAt?: Date | string
    user: UserCreateNestedOneWithoutShowCommentsInput
  }

  export type ShowCommentsUncheckedCreateWithoutShowInput = {
    id?: number
    content: string
    postedAt?: Date | string
    id_user: string
  }

  export type ShowCommentsCreateOrConnectWithoutShowInput = {
    where: ShowCommentsWhereUniqueInput
    create: XOR<ShowCommentsCreateWithoutShowInput, ShowCommentsUncheckedCreateWithoutShowInput>
  }

  export type ShowCommentsCreateManyShowInputEnvelope = {
    data: ShowCommentsCreateManyShowInput | ShowCommentsCreateManyShowInput[]
    skipDuplicates?: boolean
  }

  export type SeriesPlatformsCreateWithoutShowsInput = {
    platforms: PlatformsCreateNestedOneWithoutSeriesPlatformsInput
  }

  export type SeriesPlatformsUncheckedCreateWithoutShowsInput = {
    id_platform: number
  }

  export type SeriesPlatformsCreateOrConnectWithoutShowsInput = {
    where: SeriesPlatformsWhereUniqueInput
    create: XOR<SeriesPlatformsCreateWithoutShowsInput, SeriesPlatformsUncheckedCreateWithoutShowsInput>
  }

  export type SeriesPlatformsCreateManyShowsInputEnvelope = {
    data: SeriesPlatformsCreateManyShowsInput | SeriesPlatformsCreateManyShowsInput[]
    skipDuplicates?: boolean
  }

  export type SeasonsUpsertWithWhereUniqueWithoutShowsInput = {
    where: SeasonsWhereUniqueInput
    update: XOR<SeasonsUpdateWithoutShowsInput, SeasonsUncheckedUpdateWithoutShowsInput>
    create: XOR<SeasonsCreateWithoutShowsInput, SeasonsUncheckedCreateWithoutShowsInput>
  }

  export type SeasonsUpdateWithWhereUniqueWithoutShowsInput = {
    where: SeasonsWhereUniqueInput
    data: XOR<SeasonsUpdateWithoutShowsInput, SeasonsUncheckedUpdateWithoutShowsInput>
  }

  export type SeasonsUpdateManyWithWhereWithoutShowsInput = {
    where: SeasonsScalarWhereInput
    data: XOR<SeasonsUpdateManyMutationInput, SeasonsUncheckedUpdateManyWithoutShowsInput>
  }

  export type SeasonsScalarWhereInput = {
    AND?: SeasonsScalarWhereInput | SeasonsScalarWhereInput[]
    OR?: SeasonsScalarWhereInput[]
    NOT?: SeasonsScalarWhereInput | SeasonsScalarWhereInput[]
    season_id?: IntFilter<"Seasons"> | number
    show_id?: IntFilter<"Seasons"> | number
    summary?: StringNullableFilter<"Seasons"> | string | null
    image?: StringNullableFilter<"Seasons"> | string | null
  }

  export type ShowCastUpsertWithWhereUniqueWithoutShowsInput = {
    where: ShowCastWhereUniqueInput
    update: XOR<ShowCastUpdateWithoutShowsInput, ShowCastUncheckedUpdateWithoutShowsInput>
    create: XOR<ShowCastCreateWithoutShowsInput, ShowCastUncheckedCreateWithoutShowsInput>
  }

  export type ShowCastUpdateWithWhereUniqueWithoutShowsInput = {
    where: ShowCastWhereUniqueInput
    data: XOR<ShowCastUpdateWithoutShowsInput, ShowCastUncheckedUpdateWithoutShowsInput>
  }

  export type ShowCastUpdateManyWithWhereWithoutShowsInput = {
    where: ShowCastScalarWhereInput
    data: XOR<ShowCastUpdateManyMutationInput, ShowCastUncheckedUpdateManyWithoutShowsInput>
  }

  export type UserShowsUpsertWithWhereUniqueWithoutShowsInput = {
    where: UserShowsWhereUniqueInput
    update: XOR<UserShowsUpdateWithoutShowsInput, UserShowsUncheckedUpdateWithoutShowsInput>
    create: XOR<UserShowsCreateWithoutShowsInput, UserShowsUncheckedCreateWithoutShowsInput>
  }

  export type UserShowsUpdateWithWhereUniqueWithoutShowsInput = {
    where: UserShowsWhereUniqueInput
    data: XOR<UserShowsUpdateWithoutShowsInput, UserShowsUncheckedUpdateWithoutShowsInput>
  }

  export type UserShowsUpdateManyWithWhereWithoutShowsInput = {
    where: UserShowsScalarWhereInput
    data: XOR<UserShowsUpdateManyMutationInput, UserShowsUncheckedUpdateManyWithoutShowsInput>
  }

  export type SeriesGenresUpsertWithWhereUniqueWithoutShowsInput = {
    where: SeriesGenresWhereUniqueInput
    update: XOR<SeriesGenresUpdateWithoutShowsInput, SeriesGenresUncheckedUpdateWithoutShowsInput>
    create: XOR<SeriesGenresCreateWithoutShowsInput, SeriesGenresUncheckedCreateWithoutShowsInput>
  }

  export type SeriesGenresUpdateWithWhereUniqueWithoutShowsInput = {
    where: SeriesGenresWhereUniqueInput
    data: XOR<SeriesGenresUpdateWithoutShowsInput, SeriesGenresUncheckedUpdateWithoutShowsInput>
  }

  export type SeriesGenresUpdateManyWithWhereWithoutShowsInput = {
    where: SeriesGenresScalarWhereInput
    data: XOR<SeriesGenresUpdateManyMutationInput, SeriesGenresUncheckedUpdateManyWithoutShowsInput>
  }

  export type ShowCommentsUpsertWithWhereUniqueWithoutShowInput = {
    where: ShowCommentsWhereUniqueInput
    update: XOR<ShowCommentsUpdateWithoutShowInput, ShowCommentsUncheckedUpdateWithoutShowInput>
    create: XOR<ShowCommentsCreateWithoutShowInput, ShowCommentsUncheckedCreateWithoutShowInput>
  }

  export type ShowCommentsUpdateWithWhereUniqueWithoutShowInput = {
    where: ShowCommentsWhereUniqueInput
    data: XOR<ShowCommentsUpdateWithoutShowInput, ShowCommentsUncheckedUpdateWithoutShowInput>
  }

  export type ShowCommentsUpdateManyWithWhereWithoutShowInput = {
    where: ShowCommentsScalarWhereInput
    data: XOR<ShowCommentsUpdateManyMutationInput, ShowCommentsUncheckedUpdateManyWithoutShowInput>
  }

  export type SeriesPlatformsUpsertWithWhereUniqueWithoutShowsInput = {
    where: SeriesPlatformsWhereUniqueInput
    update: XOR<SeriesPlatformsUpdateWithoutShowsInput, SeriesPlatformsUncheckedUpdateWithoutShowsInput>
    create: XOR<SeriesPlatformsCreateWithoutShowsInput, SeriesPlatformsUncheckedCreateWithoutShowsInput>
  }

  export type SeriesPlatformsUpdateWithWhereUniqueWithoutShowsInput = {
    where: SeriesPlatformsWhereUniqueInput
    data: XOR<SeriesPlatformsUpdateWithoutShowsInput, SeriesPlatformsUncheckedUpdateWithoutShowsInput>
  }

  export type SeriesPlatformsUpdateManyWithWhereWithoutShowsInput = {
    where: SeriesPlatformsScalarWhereInput
    data: XOR<SeriesPlatformsUpdateManyMutationInput, SeriesPlatformsUncheckedUpdateManyWithoutShowsInput>
  }

  export type ShowsCreateWithoutUsers_showsInput = {
    show_id: number
    title: string
    summary?: string | null
    image?: string | null
    seasons?: SeasonsCreateNestedManyWithoutShowsInput
    show_cast?: ShowCastCreateNestedManyWithoutShowsInput
    genres?: SeriesGenresCreateNestedManyWithoutShowsInput
    comments?: ShowCommentsCreateNestedManyWithoutShowInput
    platforms?: SeriesPlatformsCreateNestedManyWithoutShowsInput
  }

  export type ShowsUncheckedCreateWithoutUsers_showsInput = {
    show_id: number
    title: string
    summary?: string | null
    image?: string | null
    seasons?: SeasonsUncheckedCreateNestedManyWithoutShowsInput
    show_cast?: ShowCastUncheckedCreateNestedManyWithoutShowsInput
    genres?: SeriesGenresUncheckedCreateNestedManyWithoutShowsInput
    comments?: ShowCommentsUncheckedCreateNestedManyWithoutShowInput
    platforms?: SeriesPlatformsUncheckedCreateNestedManyWithoutShowsInput
  }

  export type ShowsCreateOrConnectWithoutUsers_showsInput = {
    where: ShowsWhereUniqueInput
    create: XOR<ShowsCreateWithoutUsers_showsInput, ShowsUncheckedCreateWithoutUsers_showsInput>
  }

  export type UserCreateWithoutUsers_showsInput = {
    id: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    ShowComments?: ShowCommentsCreateNestedManyWithoutUserInput
    EpisodeComments?: EpisodesCommentsCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    users_episodes?: UserEpisodesCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUsers_showsInput = {
    id: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    ShowComments?: ShowCommentsUncheckedCreateNestedManyWithoutUserInput
    EpisodeComments?: EpisodesCommentsUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    users_episodes?: UserEpisodesUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUsers_showsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUsers_showsInput, UserUncheckedCreateWithoutUsers_showsInput>
  }

  export type ShowsUpsertWithoutUsers_showsInput = {
    update: XOR<ShowsUpdateWithoutUsers_showsInput, ShowsUncheckedUpdateWithoutUsers_showsInput>
    create: XOR<ShowsCreateWithoutUsers_showsInput, ShowsUncheckedCreateWithoutUsers_showsInput>
    where?: ShowsWhereInput
  }

  export type ShowsUpdateToOneWithWhereWithoutUsers_showsInput = {
    where?: ShowsWhereInput
    data: XOR<ShowsUpdateWithoutUsers_showsInput, ShowsUncheckedUpdateWithoutUsers_showsInput>
  }

  export type ShowsUpdateWithoutUsers_showsInput = {
    show_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    seasons?: SeasonsUpdateManyWithoutShowsNestedInput
    show_cast?: ShowCastUpdateManyWithoutShowsNestedInput
    genres?: SeriesGenresUpdateManyWithoutShowsNestedInput
    comments?: ShowCommentsUpdateManyWithoutShowNestedInput
    platforms?: SeriesPlatformsUpdateManyWithoutShowsNestedInput
  }

  export type ShowsUncheckedUpdateWithoutUsers_showsInput = {
    show_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    seasons?: SeasonsUncheckedUpdateManyWithoutShowsNestedInput
    show_cast?: ShowCastUncheckedUpdateManyWithoutShowsNestedInput
    genres?: SeriesGenresUncheckedUpdateManyWithoutShowsNestedInput
    comments?: ShowCommentsUncheckedUpdateManyWithoutShowNestedInput
    platforms?: SeriesPlatformsUncheckedUpdateManyWithoutShowsNestedInput
  }

  export type UserUpsertWithoutUsers_showsInput = {
    update: XOR<UserUpdateWithoutUsers_showsInput, UserUncheckedUpdateWithoutUsers_showsInput>
    create: XOR<UserCreateWithoutUsers_showsInput, UserUncheckedCreateWithoutUsers_showsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUsers_showsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUsers_showsInput, UserUncheckedUpdateWithoutUsers_showsInput>
  }

  export type UserUpdateWithoutUsers_showsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ShowComments?: ShowCommentsUpdateManyWithoutUserNestedInput
    EpisodeComments?: EpisodesCommentsUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    users_episodes?: UserEpisodesUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUsers_showsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ShowComments?: ShowCommentsUncheckedUpdateManyWithoutUserNestedInput
    EpisodeComments?: EpisodesCommentsUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    users_episodes?: UserEpisodesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutUsers_episodesInput = {
    id: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    ShowComments?: ShowCommentsCreateNestedManyWithoutUserInput
    EpisodeComments?: EpisodesCommentsCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    users_shows?: UserShowsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUsers_episodesInput = {
    id: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    ShowComments?: ShowCommentsUncheckedCreateNestedManyWithoutUserInput
    EpisodeComments?: EpisodesCommentsUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    users_shows?: UserShowsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUsers_episodesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUsers_episodesInput, UserUncheckedCreateWithoutUsers_episodesInput>
  }

  export type EpisodesCreateWithoutUsersInput = {
    episode_id: number
    name: string
    season_number: number
    episode_number?: number | null
    airdate?: string | null
    summary?: string | null
    url?: string | null
    image?: string | null
    seasons: SeasonsCreateNestedOneWithoutEpisodesInput
    comments?: EpisodesCommentsCreateNestedManyWithoutEpisodeInput
  }

  export type EpisodesUncheckedCreateWithoutUsersInput = {
    episode_id: number
    season_id: number
    name: string
    season_number: number
    episode_number?: number | null
    airdate?: string | null
    summary?: string | null
    url?: string | null
    image?: string | null
    comments?: EpisodesCommentsUncheckedCreateNestedManyWithoutEpisodeInput
  }

  export type EpisodesCreateOrConnectWithoutUsersInput = {
    where: EpisodesWhereUniqueInput
    create: XOR<EpisodesCreateWithoutUsersInput, EpisodesUncheckedCreateWithoutUsersInput>
  }

  export type UserUpsertWithoutUsers_episodesInput = {
    update: XOR<UserUpdateWithoutUsers_episodesInput, UserUncheckedUpdateWithoutUsers_episodesInput>
    create: XOR<UserCreateWithoutUsers_episodesInput, UserUncheckedCreateWithoutUsers_episodesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUsers_episodesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUsers_episodesInput, UserUncheckedUpdateWithoutUsers_episodesInput>
  }

  export type UserUpdateWithoutUsers_episodesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ShowComments?: ShowCommentsUpdateManyWithoutUserNestedInput
    EpisodeComments?: EpisodesCommentsUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    users_shows?: UserShowsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUsers_episodesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ShowComments?: ShowCommentsUncheckedUpdateManyWithoutUserNestedInput
    EpisodeComments?: EpisodesCommentsUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    users_shows?: UserShowsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type EpisodesUpsertWithoutUsersInput = {
    update: XOR<EpisodesUpdateWithoutUsersInput, EpisodesUncheckedUpdateWithoutUsersInput>
    create: XOR<EpisodesCreateWithoutUsersInput, EpisodesUncheckedCreateWithoutUsersInput>
    where?: EpisodesWhereInput
  }

  export type EpisodesUpdateToOneWithWhereWithoutUsersInput = {
    where?: EpisodesWhereInput
    data: XOR<EpisodesUpdateWithoutUsersInput, EpisodesUncheckedUpdateWithoutUsersInput>
  }

  export type EpisodesUpdateWithoutUsersInput = {
    episode_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    season_number?: IntFieldUpdateOperationsInput | number
    episode_number?: NullableIntFieldUpdateOperationsInput | number | null
    airdate?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    seasons?: SeasonsUpdateOneRequiredWithoutEpisodesNestedInput
    comments?: EpisodesCommentsUpdateManyWithoutEpisodeNestedInput
  }

  export type EpisodesUncheckedUpdateWithoutUsersInput = {
    episode_id?: IntFieldUpdateOperationsInput | number
    season_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    season_number?: IntFieldUpdateOperationsInput | number
    episode_number?: NullableIntFieldUpdateOperationsInput | number | null
    airdate?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    comments?: EpisodesCommentsUncheckedUpdateManyWithoutEpisodeNestedInput
  }

  export type ShowCommentsCreateManyUserInput = {
    id?: number
    content: string
    postedAt?: Date | string
    id_show: number
  }

  export type EpisodesCommentsCreateManyUserInput = {
    id?: number
    content: string
    postedAt?: Date | string
    id_episode: number
  }

  export type AccountCreateManyUserInput = {
    id: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type SessionCreateManyUserInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt: Date | string
    updatedAt: Date | string
    ipAddress?: string | null
    userAgent?: string | null
  }

  export type UserShowsCreateManyUserInput = {
    id_show: number
    is_favorite?: boolean | null
    is_archived?: boolean | null
    status?: $Enums.users_shows_status | null
    added_at?: Date | string | null
    rating?: number | null
  }

  export type UserEpisodesCreateManyUserInput = {
    id_episode: number
    watched_at?: Date | string | null
  }

  export type ShowCommentsUpdateWithoutUserInput = {
    content?: StringFieldUpdateOperationsInput | string
    postedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    show?: ShowsUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type ShowCommentsUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    postedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    id_show?: IntFieldUpdateOperationsInput | number
  }

  export type ShowCommentsUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    postedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    id_show?: IntFieldUpdateOperationsInput | number
  }

  export type EpisodesCommentsUpdateWithoutUserInput = {
    content?: StringFieldUpdateOperationsInput | string
    postedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    episode?: EpisodesUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type EpisodesCommentsUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    postedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    id_episode?: IntFieldUpdateOperationsInput | number
  }

  export type EpisodesCommentsUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    postedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    id_episode?: IntFieldUpdateOperationsInput | number
  }

  export type AccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserShowsUpdateWithoutUserInput = {
    is_favorite?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_archived?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: NullableEnumusers_shows_statusFieldUpdateOperationsInput | $Enums.users_shows_status | null
    added_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    shows?: ShowsUpdateOneRequiredWithoutUsers_showsNestedInput
  }

  export type UserShowsUncheckedUpdateWithoutUserInput = {
    id_show?: IntFieldUpdateOperationsInput | number
    is_favorite?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_archived?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: NullableEnumusers_shows_statusFieldUpdateOperationsInput | $Enums.users_shows_status | null
    added_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UserShowsUncheckedUpdateManyWithoutUserInput = {
    id_show?: IntFieldUpdateOperationsInput | number
    is_favorite?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_archived?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: NullableEnumusers_shows_statusFieldUpdateOperationsInput | $Enums.users_shows_status | null
    added_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UserEpisodesUpdateWithoutUserInput = {
    watched_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    episode?: EpisodesUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserEpisodesUncheckedUpdateWithoutUserInput = {
    id_episode?: IntFieldUpdateOperationsInput | number
    watched_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserEpisodesUncheckedUpdateManyWithoutUserInput = {
    id_episode?: IntFieldUpdateOperationsInput | number
    watched_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SeriesGenresCreateManyGenresInput = {
    id_show: number
  }

  export type SeriesGenresUpdateWithoutGenresInput = {
    shows?: ShowsUpdateOneRequiredWithoutGenresNestedInput
  }

  export type SeriesGenresUncheckedUpdateWithoutGenresInput = {
    id_show?: IntFieldUpdateOperationsInput | number
  }

  export type SeriesGenresUncheckedUpdateManyWithoutGenresInput = {
    id_show?: IntFieldUpdateOperationsInput | number
  }

  export type EpisodesCommentsCreateManyEpisodeInput = {
    id?: number
    content: string
    postedAt?: Date | string
    id_user: string
  }

  export type UserEpisodesCreateManyEpisodeInput = {
    id_user: string
    watched_at?: Date | string | null
  }

  export type EpisodesCommentsUpdateWithoutEpisodeInput = {
    content?: StringFieldUpdateOperationsInput | string
    postedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutEpisodeCommentsNestedInput
  }

  export type EpisodesCommentsUncheckedUpdateWithoutEpisodeInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    postedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    id_user?: StringFieldUpdateOperationsInput | string
  }

  export type EpisodesCommentsUncheckedUpdateManyWithoutEpisodeInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    postedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    id_user?: StringFieldUpdateOperationsInput | string
  }

  export type UserEpisodesUpdateWithoutEpisodeInput = {
    watched_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutUsers_episodesNestedInput
  }

  export type UserEpisodesUncheckedUpdateWithoutEpisodeInput = {
    id_user?: StringFieldUpdateOperationsInput | string
    watched_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserEpisodesUncheckedUpdateManyWithoutEpisodeInput = {
    id_user?: StringFieldUpdateOperationsInput | string
    watched_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ShowCastCreateManyCastInput = {
    show_id: number
    character_name: string
  }

  export type ShowCastUpdateWithoutCastInput = {
    character_name?: StringFieldUpdateOperationsInput | string
    shows?: ShowsUpdateOneRequiredWithoutShow_castNestedInput
  }

  export type ShowCastUncheckedUpdateWithoutCastInput = {
    show_id?: IntFieldUpdateOperationsInput | number
    character_name?: StringFieldUpdateOperationsInput | string
  }

  export type ShowCastUncheckedUpdateManyWithoutCastInput = {
    show_id?: IntFieldUpdateOperationsInput | number
    character_name?: StringFieldUpdateOperationsInput | string
  }

  export type EpisodesCreateManySeasonsInput = {
    episode_id: number
    name: string
    season_number: number
    episode_number?: number | null
    airdate?: string | null
    summary?: string | null
    url?: string | null
    image?: string | null
  }

  export type EpisodesUpdateWithoutSeasonsInput = {
    episode_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    season_number?: IntFieldUpdateOperationsInput | number
    episode_number?: NullableIntFieldUpdateOperationsInput | number | null
    airdate?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    comments?: EpisodesCommentsUpdateManyWithoutEpisodeNestedInput
    users?: UserEpisodesUpdateManyWithoutEpisodeNestedInput
  }

  export type EpisodesUncheckedUpdateWithoutSeasonsInput = {
    episode_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    season_number?: IntFieldUpdateOperationsInput | number
    episode_number?: NullableIntFieldUpdateOperationsInput | number | null
    airdate?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    comments?: EpisodesCommentsUncheckedUpdateManyWithoutEpisodeNestedInput
    users?: UserEpisodesUncheckedUpdateManyWithoutEpisodeNestedInput
  }

  export type EpisodesUncheckedUpdateManyWithoutSeasonsInput = {
    episode_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    season_number?: IntFieldUpdateOperationsInput | number
    episode_number?: NullableIntFieldUpdateOperationsInput | number | null
    airdate?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SeriesPlatformsCreateManyPlatformsInput = {
    id_show: number
  }

  export type SeriesPlatformsUpdateWithoutPlatformsInput = {
    shows?: ShowsUpdateOneRequiredWithoutPlatformsNestedInput
  }

  export type SeriesPlatformsUncheckedUpdateWithoutPlatformsInput = {
    id_show?: IntFieldUpdateOperationsInput | number
  }

  export type SeriesPlatformsUncheckedUpdateManyWithoutPlatformsInput = {
    id_show?: IntFieldUpdateOperationsInput | number
  }

  export type SeasonsCreateManyShowsInput = {
    season_id: number
    summary?: string | null
    image?: string | null
  }

  export type ShowCastCreateManyShowsInput = {
    person_id: number
    character_name: string
  }

  export type UserShowsCreateManyShowsInput = {
    id_user: string
    is_favorite?: boolean | null
    is_archived?: boolean | null
    status?: $Enums.users_shows_status | null
    added_at?: Date | string | null
    rating?: number | null
  }

  export type SeriesGenresCreateManyShowsInput = {
    id_genre: number
  }

  export type ShowCommentsCreateManyShowInput = {
    id?: number
    content: string
    postedAt?: Date | string
    id_user: string
  }

  export type SeriesPlatformsCreateManyShowsInput = {
    id_platform: number
  }

  export type SeasonsUpdateWithoutShowsInput = {
    season_id?: IntFieldUpdateOperationsInput | number
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    episodes?: EpisodesUpdateManyWithoutSeasonsNestedInput
  }

  export type SeasonsUncheckedUpdateWithoutShowsInput = {
    season_id?: IntFieldUpdateOperationsInput | number
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    episodes?: EpisodesUncheckedUpdateManyWithoutSeasonsNestedInput
  }

  export type SeasonsUncheckedUpdateManyWithoutShowsInput = {
    season_id?: IntFieldUpdateOperationsInput | number
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ShowCastUpdateWithoutShowsInput = {
    character_name?: StringFieldUpdateOperationsInput | string
    cast?: CastUpdateOneRequiredWithoutShow_castNestedInput
  }

  export type ShowCastUncheckedUpdateWithoutShowsInput = {
    person_id?: IntFieldUpdateOperationsInput | number
    character_name?: StringFieldUpdateOperationsInput | string
  }

  export type ShowCastUncheckedUpdateManyWithoutShowsInput = {
    person_id?: IntFieldUpdateOperationsInput | number
    character_name?: StringFieldUpdateOperationsInput | string
  }

  export type UserShowsUpdateWithoutShowsInput = {
    is_favorite?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_archived?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: NullableEnumusers_shows_statusFieldUpdateOperationsInput | $Enums.users_shows_status | null
    added_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    user?: UserUpdateOneRequiredWithoutUsers_showsNestedInput
  }

  export type UserShowsUncheckedUpdateWithoutShowsInput = {
    id_user?: StringFieldUpdateOperationsInput | string
    is_favorite?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_archived?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: NullableEnumusers_shows_statusFieldUpdateOperationsInput | $Enums.users_shows_status | null
    added_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UserShowsUncheckedUpdateManyWithoutShowsInput = {
    id_user?: StringFieldUpdateOperationsInput | string
    is_favorite?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_archived?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: NullableEnumusers_shows_statusFieldUpdateOperationsInput | $Enums.users_shows_status | null
    added_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SeriesGenresUpdateWithoutShowsInput = {
    genres?: GenresUpdateOneRequiredWithoutSeriesGenresNestedInput
  }

  export type SeriesGenresUncheckedUpdateWithoutShowsInput = {
    id_genre?: IntFieldUpdateOperationsInput | number
  }

  export type SeriesGenresUncheckedUpdateManyWithoutShowsInput = {
    id_genre?: IntFieldUpdateOperationsInput | number
  }

  export type ShowCommentsUpdateWithoutShowInput = {
    content?: StringFieldUpdateOperationsInput | string
    postedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutShowCommentsNestedInput
  }

  export type ShowCommentsUncheckedUpdateWithoutShowInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    postedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    id_user?: StringFieldUpdateOperationsInput | string
  }

  export type ShowCommentsUncheckedUpdateManyWithoutShowInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    postedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    id_user?: StringFieldUpdateOperationsInput | string
  }

  export type SeriesPlatformsUpdateWithoutShowsInput = {
    platforms?: PlatformsUpdateOneRequiredWithoutSeriesPlatformsNestedInput
  }

  export type SeriesPlatformsUncheckedUpdateWithoutShowsInput = {
    id_platform?: IntFieldUpdateOperationsInput | number
  }

  export type SeriesPlatformsUncheckedUpdateManyWithoutShowsInput = {
    id_platform?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}