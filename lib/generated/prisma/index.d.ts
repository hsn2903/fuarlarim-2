
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
 * Model Profile
 * 
 */
export type Profile = $Result.DefaultSelection<Prisma.$ProfilePayload>
/**
 * Model Property
 * 
 */
export type Property = $Result.DefaultSelection<Prisma.$PropertyPayload>
/**
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model Blog
 * 
 */
export type Blog = $Result.DefaultSelection<Prisma.$BlogPayload>
/**
 * Model Fair
 * 
 */
export type Fair = $Result.DefaultSelection<Prisma.$FairPayload>
/**
 * Model Hotel
 * 
 */
export type Hotel = $Result.DefaultSelection<Prisma.$HotelPayload>
/**
 * Model FairImages
 * 
 */
export type FairImages = $Result.DefaultSelection<Prisma.$FairImagesPayload>
/**
 * Model TourImages
 * 
 */
export type TourImages = $Result.DefaultSelection<Prisma.$TourImagesPayload>
/**
 * Model Message
 * 
 */
export type Message = $Result.DefaultSelection<Prisma.$MessagePayload>
/**
 * Model SeoPage
 * 
 */
export type SeoPage = $Result.DefaultSelection<Prisma.$SeoPagePayload>
/**
 * Model Campany
 * 
 */
export type Campany = $Result.DefaultSelection<Prisma.$CampanyPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Profiles
 * const profiles = await prisma.profile.findMany()
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
   * // Fetch zero or more Profiles
   * const profiles = await prisma.profile.findMany()
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
   * `prisma.profile`: Exposes CRUD operations for the **Profile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Profiles
    * const profiles = await prisma.profile.findMany()
    * ```
    */
  get profile(): Prisma.ProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.property`: Exposes CRUD operations for the **Property** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Properties
    * const properties = await prisma.property.findMany()
    * ```
    */
  get property(): Prisma.PropertyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.blog`: Exposes CRUD operations for the **Blog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Blogs
    * const blogs = await prisma.blog.findMany()
    * ```
    */
  get blog(): Prisma.BlogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.fair`: Exposes CRUD operations for the **Fair** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Fairs
    * const fairs = await prisma.fair.findMany()
    * ```
    */
  get fair(): Prisma.FairDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.hotel`: Exposes CRUD operations for the **Hotel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Hotels
    * const hotels = await prisma.hotel.findMany()
    * ```
    */
  get hotel(): Prisma.HotelDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.fairImages`: Exposes CRUD operations for the **FairImages** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FairImages
    * const fairImages = await prisma.fairImages.findMany()
    * ```
    */
  get fairImages(): Prisma.FairImagesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tourImages`: Exposes CRUD operations for the **TourImages** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TourImages
    * const tourImages = await prisma.tourImages.findMany()
    * ```
    */
  get tourImages(): Prisma.TourImagesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.message`: Exposes CRUD operations for the **Message** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Messages
    * const messages = await prisma.message.findMany()
    * ```
    */
  get message(): Prisma.MessageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.seoPage`: Exposes CRUD operations for the **SeoPage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SeoPages
    * const seoPages = await prisma.seoPage.findMany()
    * ```
    */
  get seoPage(): Prisma.SeoPageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.campany`: Exposes CRUD operations for the **Campany** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Campanies
    * const campanies = await prisma.campany.findMany()
    * ```
    */
  get campany(): Prisma.CampanyDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
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
    Profile: 'Profile',
    Property: 'Property',
    Product: 'Product',
    Blog: 'Blog',
    Fair: 'Fair',
    Hotel: 'Hotel',
    FairImages: 'FairImages',
    TourImages: 'TourImages',
    Message: 'Message',
    SeoPage: 'SeoPage',
    Campany: 'Campany'
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
      modelProps: "profile" | "property" | "product" | "blog" | "fair" | "hotel" | "fairImages" | "tourImages" | "message" | "seoPage" | "campany"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Profile: {
        payload: Prisma.$ProfilePayload<ExtArgs>
        fields: Prisma.ProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          findFirst: {
            args: Prisma.ProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          findMany: {
            args: Prisma.ProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          create: {
            args: Prisma.ProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          createMany: {
            args: Prisma.ProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          delete: {
            args: Prisma.ProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          update: {
            args: Prisma.ProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          deleteMany: {
            args: Prisma.ProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          upsert: {
            args: Prisma.ProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          aggregate: {
            args: Prisma.ProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfile>
          }
          groupBy: {
            args: Prisma.ProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProfileCountArgs<ExtArgs>
            result: $Utils.Optional<ProfileCountAggregateOutputType> | number
          }
        }
      }
      Property: {
        payload: Prisma.$PropertyPayload<ExtArgs>
        fields: Prisma.PropertyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PropertyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PropertyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          findFirst: {
            args: Prisma.PropertyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PropertyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          findMany: {
            args: Prisma.PropertyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>[]
          }
          create: {
            args: Prisma.PropertyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          createMany: {
            args: Prisma.PropertyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PropertyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>[]
          }
          delete: {
            args: Prisma.PropertyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          update: {
            args: Prisma.PropertyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          deleteMany: {
            args: Prisma.PropertyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PropertyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PropertyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>[]
          }
          upsert: {
            args: Prisma.PropertyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          aggregate: {
            args: Prisma.PropertyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProperty>
          }
          groupBy: {
            args: Prisma.PropertyGroupByArgs<ExtArgs>
            result: $Utils.Optional<PropertyGroupByOutputType>[]
          }
          count: {
            args: Prisma.PropertyCountArgs<ExtArgs>
            result: $Utils.Optional<PropertyCountAggregateOutputType> | number
          }
        }
      }
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      Blog: {
        payload: Prisma.$BlogPayload<ExtArgs>
        fields: Prisma.BlogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BlogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BlogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>
          }
          findFirst: {
            args: Prisma.BlogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BlogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>
          }
          findMany: {
            args: Prisma.BlogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>[]
          }
          create: {
            args: Prisma.BlogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>
          }
          createMany: {
            args: Prisma.BlogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BlogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>[]
          }
          delete: {
            args: Prisma.BlogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>
          }
          update: {
            args: Prisma.BlogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>
          }
          deleteMany: {
            args: Prisma.BlogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BlogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BlogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>[]
          }
          upsert: {
            args: Prisma.BlogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>
          }
          aggregate: {
            args: Prisma.BlogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBlog>
          }
          groupBy: {
            args: Prisma.BlogGroupByArgs<ExtArgs>
            result: $Utils.Optional<BlogGroupByOutputType>[]
          }
          count: {
            args: Prisma.BlogCountArgs<ExtArgs>
            result: $Utils.Optional<BlogCountAggregateOutputType> | number
          }
        }
      }
      Fair: {
        payload: Prisma.$FairPayload<ExtArgs>
        fields: Prisma.FairFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FairFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FairPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FairFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FairPayload>
          }
          findFirst: {
            args: Prisma.FairFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FairPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FairFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FairPayload>
          }
          findMany: {
            args: Prisma.FairFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FairPayload>[]
          }
          create: {
            args: Prisma.FairCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FairPayload>
          }
          createMany: {
            args: Prisma.FairCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FairCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FairPayload>[]
          }
          delete: {
            args: Prisma.FairDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FairPayload>
          }
          update: {
            args: Prisma.FairUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FairPayload>
          }
          deleteMany: {
            args: Prisma.FairDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FairUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FairUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FairPayload>[]
          }
          upsert: {
            args: Prisma.FairUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FairPayload>
          }
          aggregate: {
            args: Prisma.FairAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFair>
          }
          groupBy: {
            args: Prisma.FairGroupByArgs<ExtArgs>
            result: $Utils.Optional<FairGroupByOutputType>[]
          }
          count: {
            args: Prisma.FairCountArgs<ExtArgs>
            result: $Utils.Optional<FairCountAggregateOutputType> | number
          }
        }
      }
      Hotel: {
        payload: Prisma.$HotelPayload<ExtArgs>
        fields: Prisma.HotelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HotelFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HotelFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelPayload>
          }
          findFirst: {
            args: Prisma.HotelFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HotelFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelPayload>
          }
          findMany: {
            args: Prisma.HotelFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelPayload>[]
          }
          create: {
            args: Prisma.HotelCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelPayload>
          }
          createMany: {
            args: Prisma.HotelCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HotelCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelPayload>[]
          }
          delete: {
            args: Prisma.HotelDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelPayload>
          }
          update: {
            args: Prisma.HotelUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelPayload>
          }
          deleteMany: {
            args: Prisma.HotelDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HotelUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HotelUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelPayload>[]
          }
          upsert: {
            args: Prisma.HotelUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelPayload>
          }
          aggregate: {
            args: Prisma.HotelAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHotel>
          }
          groupBy: {
            args: Prisma.HotelGroupByArgs<ExtArgs>
            result: $Utils.Optional<HotelGroupByOutputType>[]
          }
          count: {
            args: Prisma.HotelCountArgs<ExtArgs>
            result: $Utils.Optional<HotelCountAggregateOutputType> | number
          }
        }
      }
      FairImages: {
        payload: Prisma.$FairImagesPayload<ExtArgs>
        fields: Prisma.FairImagesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FairImagesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FairImagesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FairImagesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FairImagesPayload>
          }
          findFirst: {
            args: Prisma.FairImagesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FairImagesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FairImagesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FairImagesPayload>
          }
          findMany: {
            args: Prisma.FairImagesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FairImagesPayload>[]
          }
          create: {
            args: Prisma.FairImagesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FairImagesPayload>
          }
          createMany: {
            args: Prisma.FairImagesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FairImagesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FairImagesPayload>[]
          }
          delete: {
            args: Prisma.FairImagesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FairImagesPayload>
          }
          update: {
            args: Prisma.FairImagesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FairImagesPayload>
          }
          deleteMany: {
            args: Prisma.FairImagesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FairImagesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FairImagesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FairImagesPayload>[]
          }
          upsert: {
            args: Prisma.FairImagesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FairImagesPayload>
          }
          aggregate: {
            args: Prisma.FairImagesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFairImages>
          }
          groupBy: {
            args: Prisma.FairImagesGroupByArgs<ExtArgs>
            result: $Utils.Optional<FairImagesGroupByOutputType>[]
          }
          count: {
            args: Prisma.FairImagesCountArgs<ExtArgs>
            result: $Utils.Optional<FairImagesCountAggregateOutputType> | number
          }
        }
      }
      TourImages: {
        payload: Prisma.$TourImagesPayload<ExtArgs>
        fields: Prisma.TourImagesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TourImagesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourImagesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TourImagesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourImagesPayload>
          }
          findFirst: {
            args: Prisma.TourImagesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourImagesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TourImagesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourImagesPayload>
          }
          findMany: {
            args: Prisma.TourImagesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourImagesPayload>[]
          }
          create: {
            args: Prisma.TourImagesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourImagesPayload>
          }
          createMany: {
            args: Prisma.TourImagesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TourImagesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourImagesPayload>[]
          }
          delete: {
            args: Prisma.TourImagesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourImagesPayload>
          }
          update: {
            args: Prisma.TourImagesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourImagesPayload>
          }
          deleteMany: {
            args: Prisma.TourImagesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TourImagesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TourImagesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourImagesPayload>[]
          }
          upsert: {
            args: Prisma.TourImagesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourImagesPayload>
          }
          aggregate: {
            args: Prisma.TourImagesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTourImages>
          }
          groupBy: {
            args: Prisma.TourImagesGroupByArgs<ExtArgs>
            result: $Utils.Optional<TourImagesGroupByOutputType>[]
          }
          count: {
            args: Prisma.TourImagesCountArgs<ExtArgs>
            result: $Utils.Optional<TourImagesCountAggregateOutputType> | number
          }
        }
      }
      Message: {
        payload: Prisma.$MessagePayload<ExtArgs>
        fields: Prisma.MessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findFirst: {
            args: Prisma.MessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findMany: {
            args: Prisma.MessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          create: {
            args: Prisma.MessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          createMany: {
            args: Prisma.MessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          delete: {
            args: Prisma.MessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          update: {
            args: Prisma.MessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          deleteMany: {
            args: Prisma.MessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          upsert: {
            args: Prisma.MessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          aggregate: {
            args: Prisma.MessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMessage>
          }
          groupBy: {
            args: Prisma.MessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<MessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.MessageCountArgs<ExtArgs>
            result: $Utils.Optional<MessageCountAggregateOutputType> | number
          }
        }
      }
      SeoPage: {
        payload: Prisma.$SeoPagePayload<ExtArgs>
        fields: Prisma.SeoPageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SeoPageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeoPagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SeoPageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeoPagePayload>
          }
          findFirst: {
            args: Prisma.SeoPageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeoPagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SeoPageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeoPagePayload>
          }
          findMany: {
            args: Prisma.SeoPageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeoPagePayload>[]
          }
          create: {
            args: Prisma.SeoPageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeoPagePayload>
          }
          createMany: {
            args: Prisma.SeoPageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SeoPageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeoPagePayload>[]
          }
          delete: {
            args: Prisma.SeoPageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeoPagePayload>
          }
          update: {
            args: Prisma.SeoPageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeoPagePayload>
          }
          deleteMany: {
            args: Prisma.SeoPageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SeoPageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SeoPageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeoPagePayload>[]
          }
          upsert: {
            args: Prisma.SeoPageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeoPagePayload>
          }
          aggregate: {
            args: Prisma.SeoPageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSeoPage>
          }
          groupBy: {
            args: Prisma.SeoPageGroupByArgs<ExtArgs>
            result: $Utils.Optional<SeoPageGroupByOutputType>[]
          }
          count: {
            args: Prisma.SeoPageCountArgs<ExtArgs>
            result: $Utils.Optional<SeoPageCountAggregateOutputType> | number
          }
        }
      }
      Campany: {
        payload: Prisma.$CampanyPayload<ExtArgs>
        fields: Prisma.CampanyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CampanyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampanyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CampanyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampanyPayload>
          }
          findFirst: {
            args: Prisma.CampanyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampanyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CampanyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampanyPayload>
          }
          findMany: {
            args: Prisma.CampanyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampanyPayload>[]
          }
          create: {
            args: Prisma.CampanyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampanyPayload>
          }
          createMany: {
            args: Prisma.CampanyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CampanyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampanyPayload>[]
          }
          delete: {
            args: Prisma.CampanyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampanyPayload>
          }
          update: {
            args: Prisma.CampanyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampanyPayload>
          }
          deleteMany: {
            args: Prisma.CampanyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CampanyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CampanyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampanyPayload>[]
          }
          upsert: {
            args: Prisma.CampanyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampanyPayload>
          }
          aggregate: {
            args: Prisma.CampanyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCampany>
          }
          groupBy: {
            args: Prisma.CampanyGroupByArgs<ExtArgs>
            result: $Utils.Optional<CampanyGroupByOutputType>[]
          }
          count: {
            args: Prisma.CampanyCountArgs<ExtArgs>
            result: $Utils.Optional<CampanyCountAggregateOutputType> | number
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
    profile?: ProfileOmit
    property?: PropertyOmit
    product?: ProductOmit
    blog?: BlogOmit
    fair?: FairOmit
    hotel?: HotelOmit
    fairImages?: FairImagesOmit
    tourImages?: TourImagesOmit
    message?: MessageOmit
    seoPage?: SeoPageOmit
    campany?: CampanyOmit
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
   * Count Type ProfileCountOutputType
   */

  export type ProfileCountOutputType = {
    Property: number
  }

  export type ProfileCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Property?: boolean | ProfileCountOutputTypeCountPropertyArgs
  }

  // Custom InputTypes
  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileCountOutputType
     */
    select?: ProfileCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeCountPropertyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropertyWhereInput
  }


  /**
   * Count Type HotelCountOutputType
   */

  export type HotelCountOutputType = {
    fairs: number
  }

  export type HotelCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fairs?: boolean | HotelCountOutputTypeCountFairsArgs
  }

  // Custom InputTypes
  /**
   * HotelCountOutputType without action
   */
  export type HotelCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HotelCountOutputType
     */
    select?: HotelCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * HotelCountOutputType without action
   */
  export type HotelCountOutputTypeCountFairsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FairWhereInput
  }


  /**
   * Count Type FairImagesCountOutputType
   */

  export type FairImagesCountOutputType = {
    fairs: number
  }

  export type FairImagesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fairs?: boolean | FairImagesCountOutputTypeCountFairsArgs
  }

  // Custom InputTypes
  /**
   * FairImagesCountOutputType without action
   */
  export type FairImagesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FairImagesCountOutputType
     */
    select?: FairImagesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FairImagesCountOutputType without action
   */
  export type FairImagesCountOutputTypeCountFairsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FairWhereInput
  }


  /**
   * Count Type TourImagesCountOutputType
   */

  export type TourImagesCountOutputType = {
    fairs: number
  }

  export type TourImagesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fairs?: boolean | TourImagesCountOutputTypeCountFairsArgs
  }

  // Custom InputTypes
  /**
   * TourImagesCountOutputType without action
   */
  export type TourImagesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourImagesCountOutputType
     */
    select?: TourImagesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TourImagesCountOutputType without action
   */
  export type TourImagesCountOutputTypeCountFairsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FairWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Profile
   */

  export type AggregateProfile = {
    _count: ProfileCountAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  export type ProfileMinAggregateOutputType = {
    id: string | null
    clerkId: string | null
    firstName: string | null
    lastName: string | null
    userName: string | null
    email: string | null
    profileImage: string | null
    role: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProfileMaxAggregateOutputType = {
    id: string | null
    clerkId: string | null
    firstName: string | null
    lastName: string | null
    userName: string | null
    email: string | null
    profileImage: string | null
    role: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProfileCountAggregateOutputType = {
    id: number
    clerkId: number
    firstName: number
    lastName: number
    userName: number
    email: number
    profileImage: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProfileMinAggregateInputType = {
    id?: true
    clerkId?: true
    firstName?: true
    lastName?: true
    userName?: true
    email?: true
    profileImage?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProfileMaxAggregateInputType = {
    id?: true
    clerkId?: true
    firstName?: true
    lastName?: true
    userName?: true
    email?: true
    profileImage?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProfileCountAggregateInputType = {
    id?: true
    clerkId?: true
    firstName?: true
    lastName?: true
    userName?: true
    email?: true
    profileImage?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profile to aggregate.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Profiles
    **/
    _count?: true | ProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfileMaxAggregateInputType
  }

  export type GetProfileAggregateType<T extends ProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfile[P]>
      : GetScalarType<T[P], AggregateProfile[P]>
  }




  export type ProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfileWhereInput
    orderBy?: ProfileOrderByWithAggregationInput | ProfileOrderByWithAggregationInput[]
    by: ProfileScalarFieldEnum[] | ProfileScalarFieldEnum
    having?: ProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfileCountAggregateInputType | true
    _min?: ProfileMinAggregateInputType
    _max?: ProfileMaxAggregateInputType
  }

  export type ProfileGroupByOutputType = {
    id: string
    clerkId: string
    firstName: string
    lastName: string
    userName: string
    email: string
    profileImage: string
    role: string
    createdAt: Date
    updatedAt: Date
    _count: ProfileCountAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  type GetProfileGroupByPayload<T extends ProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfileGroupByOutputType[P]>
            : GetScalarType<T[P], ProfileGroupByOutputType[P]>
        }
      >
    >


  export type ProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkId?: boolean
    firstName?: boolean
    lastName?: boolean
    userName?: boolean
    email?: boolean
    profileImage?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Property?: boolean | Profile$PropertyArgs<ExtArgs>
    _count?: boolean | ProfileCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkId?: boolean
    firstName?: boolean
    lastName?: boolean
    userName?: boolean
    email?: boolean
    profileImage?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkId?: boolean
    firstName?: boolean
    lastName?: boolean
    userName?: boolean
    email?: boolean
    profileImage?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectScalar = {
    id?: boolean
    clerkId?: boolean
    firstName?: boolean
    lastName?: boolean
    userName?: boolean
    email?: boolean
    profileImage?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clerkId" | "firstName" | "lastName" | "userName" | "email" | "profileImage" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["profile"]>
  export type ProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Property?: boolean | Profile$PropertyArgs<ExtArgs>
    _count?: boolean | ProfileCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Profile"
    objects: {
      Property: Prisma.$PropertyPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      clerkId: string
      firstName: string
      lastName: string
      userName: string
      email: string
      profileImage: string
      role: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["profile"]>
    composites: {}
  }

  type ProfileGetPayload<S extends boolean | null | undefined | ProfileDefaultArgs> = $Result.GetResult<Prisma.$ProfilePayload, S>

  type ProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProfileCountAggregateInputType | true
    }

  export interface ProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Profile'], meta: { name: 'Profile' } }
    /**
     * Find zero or one Profile that matches the filter.
     * @param {ProfileFindUniqueArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProfileFindUniqueArgs>(args: SelectSubset<T, ProfileFindUniqueArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Profile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProfileFindUniqueOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, ProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProfileFindFirstArgs>(args?: SelectSubset<T, ProfileFindFirstArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, ProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Profiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Profiles
     * const profiles = await prisma.profile.findMany()
     * 
     * // Get first 10 Profiles
     * const profiles = await prisma.profile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const profileWithIdOnly = await prisma.profile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProfileFindManyArgs>(args?: SelectSubset<T, ProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Profile.
     * @param {ProfileCreateArgs} args - Arguments to create a Profile.
     * @example
     * // Create one Profile
     * const Profile = await prisma.profile.create({
     *   data: {
     *     // ... data to create a Profile
     *   }
     * })
     * 
     */
    create<T extends ProfileCreateArgs>(args: SelectSubset<T, ProfileCreateArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Profiles.
     * @param {ProfileCreateManyArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profile = await prisma.profile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProfileCreateManyArgs>(args?: SelectSubset<T, ProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Profiles and returns the data saved in the database.
     * @param {ProfileCreateManyAndReturnArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profile = await prisma.profile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Profiles and only return the `id`
     * const profileWithIdOnly = await prisma.profile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, ProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Profile.
     * @param {ProfileDeleteArgs} args - Arguments to delete one Profile.
     * @example
     * // Delete one Profile
     * const Profile = await prisma.profile.delete({
     *   where: {
     *     // ... filter to delete one Profile
     *   }
     * })
     * 
     */
    delete<T extends ProfileDeleteArgs>(args: SelectSubset<T, ProfileDeleteArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Profile.
     * @param {ProfileUpdateArgs} args - Arguments to update one Profile.
     * @example
     * // Update one Profile
     * const profile = await prisma.profile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProfileUpdateArgs>(args: SelectSubset<T, ProfileUpdateArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Profiles.
     * @param {ProfileDeleteManyArgs} args - Arguments to filter Profiles to delete.
     * @example
     * // Delete a few Profiles
     * const { count } = await prisma.profile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProfileDeleteManyArgs>(args?: SelectSubset<T, ProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Profiles
     * const profile = await prisma.profile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProfileUpdateManyArgs>(args: SelectSubset<T, ProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles and returns the data updated in the database.
     * @param {ProfileUpdateManyAndReturnArgs} args - Arguments to update many Profiles.
     * @example
     * // Update many Profiles
     * const profile = await prisma.profile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Profiles and only return the `id`
     * const profileWithIdOnly = await prisma.profile.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, ProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Profile.
     * @param {ProfileUpsertArgs} args - Arguments to update or create a Profile.
     * @example
     * // Update or create a Profile
     * const profile = await prisma.profile.upsert({
     *   create: {
     *     // ... data to create a Profile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Profile we want to update
     *   }
     * })
     */
    upsert<T extends ProfileUpsertArgs>(args: SelectSubset<T, ProfileUpsertArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileCountArgs} args - Arguments to filter Profiles to count.
     * @example
     * // Count the number of Profiles
     * const count = await prisma.profile.count({
     *   where: {
     *     // ... the filter for the Profiles we want to count
     *   }
     * })
    **/
    count<T extends ProfileCountArgs>(
      args?: Subset<T, ProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProfileAggregateArgs>(args: Subset<T, ProfileAggregateArgs>): Prisma.PrismaPromise<GetProfileAggregateType<T>>

    /**
     * Group by Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileGroupByArgs} args - Group by arguments.
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
      T extends ProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfileGroupByArgs['orderBy'] }
        : { orderBy?: ProfileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Profile model
   */
  readonly fields: ProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Profile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Property<T extends Profile$PropertyArgs<ExtArgs> = {}>(args?: Subset<T, Profile$PropertyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Profile model
   */
  interface ProfileFieldRefs {
    readonly id: FieldRef<"Profile", 'String'>
    readonly clerkId: FieldRef<"Profile", 'String'>
    readonly firstName: FieldRef<"Profile", 'String'>
    readonly lastName: FieldRef<"Profile", 'String'>
    readonly userName: FieldRef<"Profile", 'String'>
    readonly email: FieldRef<"Profile", 'String'>
    readonly profileImage: FieldRef<"Profile", 'String'>
    readonly role: FieldRef<"Profile", 'String'>
    readonly createdAt: FieldRef<"Profile", 'DateTime'>
    readonly updatedAt: FieldRef<"Profile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Profile findUnique
   */
  export type ProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile findUniqueOrThrow
   */
  export type ProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile findFirst
   */
  export type ProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile findFirstOrThrow
   */
  export type ProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile findMany
   */
  export type ProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profiles to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile create
   */
  export type ProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a Profile.
     */
    data: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
  }

  /**
   * Profile createMany
   */
  export type ProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Profiles.
     */
    data: ProfileCreateManyInput | ProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Profile createManyAndReturn
   */
  export type ProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * The data used to create many Profiles.
     */
    data: ProfileCreateManyInput | ProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Profile update
   */
  export type ProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a Profile.
     */
    data: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
    /**
     * Choose, which Profile to update.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile updateMany
   */
  export type ProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Profiles.
     */
    data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyInput>
    /**
     * Filter which Profiles to update
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to update.
     */
    limit?: number
  }

  /**
   * Profile updateManyAndReturn
   */
  export type ProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * The data used to update Profiles.
     */
    data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyInput>
    /**
     * Filter which Profiles to update
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to update.
     */
    limit?: number
  }

  /**
   * Profile upsert
   */
  export type ProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the Profile to update in case it exists.
     */
    where: ProfileWhereUniqueInput
    /**
     * In case the Profile found by the `where` argument doesn't exist, create a new Profile with this data.
     */
    create: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
    /**
     * In case the Profile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
  }

  /**
   * Profile delete
   */
  export type ProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter which Profile to delete.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile deleteMany
   */
  export type ProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profiles to delete
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to delete.
     */
    limit?: number
  }

  /**
   * Profile.Property
   */
  export type Profile$PropertyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    where?: PropertyWhereInput
    orderBy?: PropertyOrderByWithRelationInput | PropertyOrderByWithRelationInput[]
    cursor?: PropertyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PropertyScalarFieldEnum | PropertyScalarFieldEnum[]
  }

  /**
   * Profile without action
   */
  export type ProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
  }


  /**
   * Model Property
   */

  export type AggregateProperty = {
    _count: PropertyCountAggregateOutputType | null
    _avg: PropertyAvgAggregateOutputType | null
    _sum: PropertySumAggregateOutputType | null
    _min: PropertyMinAggregateOutputType | null
    _max: PropertyMaxAggregateOutputType | null
  }

  export type PropertyAvgAggregateOutputType = {
    price: number | null
    guests: number | null
    bedrooms: number | null
    beds: number | null
    baths: number | null
  }

  export type PropertySumAggregateOutputType = {
    price: number | null
    guests: number | null
    bedrooms: number | null
    beds: number | null
    baths: number | null
  }

  export type PropertyMinAggregateOutputType = {
    id: string | null
    name: string | null
    tagline: string | null
    category: string | null
    image: string | null
    country: string | null
    description: string | null
    price: number | null
    guests: number | null
    bedrooms: number | null
    beds: number | null
    baths: number | null
    amenities: string | null
    createdAt: Date | null
    updatedAt: Date | null
    profileId: string | null
  }

  export type PropertyMaxAggregateOutputType = {
    id: string | null
    name: string | null
    tagline: string | null
    category: string | null
    image: string | null
    country: string | null
    description: string | null
    price: number | null
    guests: number | null
    bedrooms: number | null
    beds: number | null
    baths: number | null
    amenities: string | null
    createdAt: Date | null
    updatedAt: Date | null
    profileId: string | null
  }

  export type PropertyCountAggregateOutputType = {
    id: number
    name: number
    tagline: number
    category: number
    image: number
    country: number
    description: number
    price: number
    guests: number
    bedrooms: number
    beds: number
    baths: number
    amenities: number
    createdAt: number
    updatedAt: number
    profileId: number
    _all: number
  }


  export type PropertyAvgAggregateInputType = {
    price?: true
    guests?: true
    bedrooms?: true
    beds?: true
    baths?: true
  }

  export type PropertySumAggregateInputType = {
    price?: true
    guests?: true
    bedrooms?: true
    beds?: true
    baths?: true
  }

  export type PropertyMinAggregateInputType = {
    id?: true
    name?: true
    tagline?: true
    category?: true
    image?: true
    country?: true
    description?: true
    price?: true
    guests?: true
    bedrooms?: true
    beds?: true
    baths?: true
    amenities?: true
    createdAt?: true
    updatedAt?: true
    profileId?: true
  }

  export type PropertyMaxAggregateInputType = {
    id?: true
    name?: true
    tagline?: true
    category?: true
    image?: true
    country?: true
    description?: true
    price?: true
    guests?: true
    bedrooms?: true
    beds?: true
    baths?: true
    amenities?: true
    createdAt?: true
    updatedAt?: true
    profileId?: true
  }

  export type PropertyCountAggregateInputType = {
    id?: true
    name?: true
    tagline?: true
    category?: true
    image?: true
    country?: true
    description?: true
    price?: true
    guests?: true
    bedrooms?: true
    beds?: true
    baths?: true
    amenities?: true
    createdAt?: true
    updatedAt?: true
    profileId?: true
    _all?: true
  }

  export type PropertyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Property to aggregate.
     */
    where?: PropertyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Properties to fetch.
     */
    orderBy?: PropertyOrderByWithRelationInput | PropertyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PropertyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Properties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Properties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Properties
    **/
    _count?: true | PropertyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PropertyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PropertySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PropertyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PropertyMaxAggregateInputType
  }

  export type GetPropertyAggregateType<T extends PropertyAggregateArgs> = {
        [P in keyof T & keyof AggregateProperty]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProperty[P]>
      : GetScalarType<T[P], AggregateProperty[P]>
  }




  export type PropertyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropertyWhereInput
    orderBy?: PropertyOrderByWithAggregationInput | PropertyOrderByWithAggregationInput[]
    by: PropertyScalarFieldEnum[] | PropertyScalarFieldEnum
    having?: PropertyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PropertyCountAggregateInputType | true
    _avg?: PropertyAvgAggregateInputType
    _sum?: PropertySumAggregateInputType
    _min?: PropertyMinAggregateInputType
    _max?: PropertyMaxAggregateInputType
  }

  export type PropertyGroupByOutputType = {
    id: string
    name: string
    tagline: string
    category: string
    image: string
    country: string
    description: string
    price: number
    guests: number
    bedrooms: number
    beds: number
    baths: number
    amenities: string
    createdAt: Date
    updatedAt: Date
    profileId: string
    _count: PropertyCountAggregateOutputType | null
    _avg: PropertyAvgAggregateOutputType | null
    _sum: PropertySumAggregateOutputType | null
    _min: PropertyMinAggregateOutputType | null
    _max: PropertyMaxAggregateOutputType | null
  }

  type GetPropertyGroupByPayload<T extends PropertyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PropertyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PropertyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PropertyGroupByOutputType[P]>
            : GetScalarType<T[P], PropertyGroupByOutputType[P]>
        }
      >
    >


  export type PropertySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    tagline?: boolean
    category?: boolean
    image?: boolean
    country?: boolean
    description?: boolean
    price?: boolean
    guests?: boolean
    bedrooms?: boolean
    beds?: boolean
    baths?: boolean
    amenities?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    profileId?: boolean
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["property"]>

  export type PropertySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    tagline?: boolean
    category?: boolean
    image?: boolean
    country?: boolean
    description?: boolean
    price?: boolean
    guests?: boolean
    bedrooms?: boolean
    beds?: boolean
    baths?: boolean
    amenities?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    profileId?: boolean
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["property"]>

  export type PropertySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    tagline?: boolean
    category?: boolean
    image?: boolean
    country?: boolean
    description?: boolean
    price?: boolean
    guests?: boolean
    bedrooms?: boolean
    beds?: boolean
    baths?: boolean
    amenities?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    profileId?: boolean
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["property"]>

  export type PropertySelectScalar = {
    id?: boolean
    name?: boolean
    tagline?: boolean
    category?: boolean
    image?: boolean
    country?: boolean
    description?: boolean
    price?: boolean
    guests?: boolean
    bedrooms?: boolean
    beds?: boolean
    baths?: boolean
    amenities?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    profileId?: boolean
  }

  export type PropertyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "tagline" | "category" | "image" | "country" | "description" | "price" | "guests" | "bedrooms" | "beds" | "baths" | "amenities" | "createdAt" | "updatedAt" | "profileId", ExtArgs["result"]["property"]>
  export type PropertyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }
  export type PropertyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }
  export type PropertyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }

  export type $PropertyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Property"
    objects: {
      profile: Prisma.$ProfilePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      tagline: string
      category: string
      image: string
      country: string
      description: string
      price: number
      guests: number
      bedrooms: number
      beds: number
      baths: number
      amenities: string
      createdAt: Date
      updatedAt: Date
      profileId: string
    }, ExtArgs["result"]["property"]>
    composites: {}
  }

  type PropertyGetPayload<S extends boolean | null | undefined | PropertyDefaultArgs> = $Result.GetResult<Prisma.$PropertyPayload, S>

  type PropertyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PropertyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PropertyCountAggregateInputType | true
    }

  export interface PropertyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Property'], meta: { name: 'Property' } }
    /**
     * Find zero or one Property that matches the filter.
     * @param {PropertyFindUniqueArgs} args - Arguments to find a Property
     * @example
     * // Get one Property
     * const property = await prisma.property.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PropertyFindUniqueArgs>(args: SelectSubset<T, PropertyFindUniqueArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Property that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PropertyFindUniqueOrThrowArgs} args - Arguments to find a Property
     * @example
     * // Get one Property
     * const property = await prisma.property.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PropertyFindUniqueOrThrowArgs>(args: SelectSubset<T, PropertyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Property that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyFindFirstArgs} args - Arguments to find a Property
     * @example
     * // Get one Property
     * const property = await prisma.property.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PropertyFindFirstArgs>(args?: SelectSubset<T, PropertyFindFirstArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Property that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyFindFirstOrThrowArgs} args - Arguments to find a Property
     * @example
     * // Get one Property
     * const property = await prisma.property.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PropertyFindFirstOrThrowArgs>(args?: SelectSubset<T, PropertyFindFirstOrThrowArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Properties that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Properties
     * const properties = await prisma.property.findMany()
     * 
     * // Get first 10 Properties
     * const properties = await prisma.property.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const propertyWithIdOnly = await prisma.property.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PropertyFindManyArgs>(args?: SelectSubset<T, PropertyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Property.
     * @param {PropertyCreateArgs} args - Arguments to create a Property.
     * @example
     * // Create one Property
     * const Property = await prisma.property.create({
     *   data: {
     *     // ... data to create a Property
     *   }
     * })
     * 
     */
    create<T extends PropertyCreateArgs>(args: SelectSubset<T, PropertyCreateArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Properties.
     * @param {PropertyCreateManyArgs} args - Arguments to create many Properties.
     * @example
     * // Create many Properties
     * const property = await prisma.property.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PropertyCreateManyArgs>(args?: SelectSubset<T, PropertyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Properties and returns the data saved in the database.
     * @param {PropertyCreateManyAndReturnArgs} args - Arguments to create many Properties.
     * @example
     * // Create many Properties
     * const property = await prisma.property.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Properties and only return the `id`
     * const propertyWithIdOnly = await prisma.property.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PropertyCreateManyAndReturnArgs>(args?: SelectSubset<T, PropertyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Property.
     * @param {PropertyDeleteArgs} args - Arguments to delete one Property.
     * @example
     * // Delete one Property
     * const Property = await prisma.property.delete({
     *   where: {
     *     // ... filter to delete one Property
     *   }
     * })
     * 
     */
    delete<T extends PropertyDeleteArgs>(args: SelectSubset<T, PropertyDeleteArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Property.
     * @param {PropertyUpdateArgs} args - Arguments to update one Property.
     * @example
     * // Update one Property
     * const property = await prisma.property.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PropertyUpdateArgs>(args: SelectSubset<T, PropertyUpdateArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Properties.
     * @param {PropertyDeleteManyArgs} args - Arguments to filter Properties to delete.
     * @example
     * // Delete a few Properties
     * const { count } = await prisma.property.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PropertyDeleteManyArgs>(args?: SelectSubset<T, PropertyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Properties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Properties
     * const property = await prisma.property.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PropertyUpdateManyArgs>(args: SelectSubset<T, PropertyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Properties and returns the data updated in the database.
     * @param {PropertyUpdateManyAndReturnArgs} args - Arguments to update many Properties.
     * @example
     * // Update many Properties
     * const property = await prisma.property.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Properties and only return the `id`
     * const propertyWithIdOnly = await prisma.property.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PropertyUpdateManyAndReturnArgs>(args: SelectSubset<T, PropertyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Property.
     * @param {PropertyUpsertArgs} args - Arguments to update or create a Property.
     * @example
     * // Update or create a Property
     * const property = await prisma.property.upsert({
     *   create: {
     *     // ... data to create a Property
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Property we want to update
     *   }
     * })
     */
    upsert<T extends PropertyUpsertArgs>(args: SelectSubset<T, PropertyUpsertArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Properties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyCountArgs} args - Arguments to filter Properties to count.
     * @example
     * // Count the number of Properties
     * const count = await prisma.property.count({
     *   where: {
     *     // ... the filter for the Properties we want to count
     *   }
     * })
    **/
    count<T extends PropertyCountArgs>(
      args?: Subset<T, PropertyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PropertyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Property.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PropertyAggregateArgs>(args: Subset<T, PropertyAggregateArgs>): Prisma.PrismaPromise<GetPropertyAggregateType<T>>

    /**
     * Group by Property.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyGroupByArgs} args - Group by arguments.
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
      T extends PropertyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PropertyGroupByArgs['orderBy'] }
        : { orderBy?: PropertyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PropertyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPropertyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Property model
   */
  readonly fields: PropertyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Property.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PropertyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    profile<T extends ProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfileDefaultArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Property model
   */
  interface PropertyFieldRefs {
    readonly id: FieldRef<"Property", 'String'>
    readonly name: FieldRef<"Property", 'String'>
    readonly tagline: FieldRef<"Property", 'String'>
    readonly category: FieldRef<"Property", 'String'>
    readonly image: FieldRef<"Property", 'String'>
    readonly country: FieldRef<"Property", 'String'>
    readonly description: FieldRef<"Property", 'String'>
    readonly price: FieldRef<"Property", 'Int'>
    readonly guests: FieldRef<"Property", 'Int'>
    readonly bedrooms: FieldRef<"Property", 'Int'>
    readonly beds: FieldRef<"Property", 'Int'>
    readonly baths: FieldRef<"Property", 'Int'>
    readonly amenities: FieldRef<"Property", 'String'>
    readonly createdAt: FieldRef<"Property", 'DateTime'>
    readonly updatedAt: FieldRef<"Property", 'DateTime'>
    readonly profileId: FieldRef<"Property", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Property findUnique
   */
  export type PropertyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter, which Property to fetch.
     */
    where: PropertyWhereUniqueInput
  }

  /**
   * Property findUniqueOrThrow
   */
  export type PropertyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter, which Property to fetch.
     */
    where: PropertyWhereUniqueInput
  }

  /**
   * Property findFirst
   */
  export type PropertyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter, which Property to fetch.
     */
    where?: PropertyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Properties to fetch.
     */
    orderBy?: PropertyOrderByWithRelationInput | PropertyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Properties.
     */
    cursor?: PropertyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Properties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Properties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Properties.
     */
    distinct?: PropertyScalarFieldEnum | PropertyScalarFieldEnum[]
  }

  /**
   * Property findFirstOrThrow
   */
  export type PropertyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter, which Property to fetch.
     */
    where?: PropertyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Properties to fetch.
     */
    orderBy?: PropertyOrderByWithRelationInput | PropertyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Properties.
     */
    cursor?: PropertyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Properties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Properties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Properties.
     */
    distinct?: PropertyScalarFieldEnum | PropertyScalarFieldEnum[]
  }

  /**
   * Property findMany
   */
  export type PropertyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter, which Properties to fetch.
     */
    where?: PropertyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Properties to fetch.
     */
    orderBy?: PropertyOrderByWithRelationInput | PropertyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Properties.
     */
    cursor?: PropertyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Properties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Properties.
     */
    skip?: number
    distinct?: PropertyScalarFieldEnum | PropertyScalarFieldEnum[]
  }

  /**
   * Property create
   */
  export type PropertyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * The data needed to create a Property.
     */
    data: XOR<PropertyCreateInput, PropertyUncheckedCreateInput>
  }

  /**
   * Property createMany
   */
  export type PropertyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Properties.
     */
    data: PropertyCreateManyInput | PropertyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Property createManyAndReturn
   */
  export type PropertyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * The data used to create many Properties.
     */
    data: PropertyCreateManyInput | PropertyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Property update
   */
  export type PropertyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * The data needed to update a Property.
     */
    data: XOR<PropertyUpdateInput, PropertyUncheckedUpdateInput>
    /**
     * Choose, which Property to update.
     */
    where: PropertyWhereUniqueInput
  }

  /**
   * Property updateMany
   */
  export type PropertyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Properties.
     */
    data: XOR<PropertyUpdateManyMutationInput, PropertyUncheckedUpdateManyInput>
    /**
     * Filter which Properties to update
     */
    where?: PropertyWhereInput
    /**
     * Limit how many Properties to update.
     */
    limit?: number
  }

  /**
   * Property updateManyAndReturn
   */
  export type PropertyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * The data used to update Properties.
     */
    data: XOR<PropertyUpdateManyMutationInput, PropertyUncheckedUpdateManyInput>
    /**
     * Filter which Properties to update
     */
    where?: PropertyWhereInput
    /**
     * Limit how many Properties to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Property upsert
   */
  export type PropertyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * The filter to search for the Property to update in case it exists.
     */
    where: PropertyWhereUniqueInput
    /**
     * In case the Property found by the `where` argument doesn't exist, create a new Property with this data.
     */
    create: XOR<PropertyCreateInput, PropertyUncheckedCreateInput>
    /**
     * In case the Property was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PropertyUpdateInput, PropertyUncheckedUpdateInput>
  }

  /**
   * Property delete
   */
  export type PropertyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter which Property to delete.
     */
    where: PropertyWhereUniqueInput
  }

  /**
   * Property deleteMany
   */
  export type PropertyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Properties to delete
     */
    where?: PropertyWhereInput
    /**
     * Limit how many Properties to delete.
     */
    limit?: number
  }

  /**
   * Property without action
   */
  export type PropertyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
  }


  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    price: number | null
  }

  export type ProductSumAggregateOutputType = {
    price: number | null
  }

  export type ProductMinAggregateOutputType = {
    id: string | null
    name: string | null
    company: string | null
    description: string | null
    featured: boolean | null
    image: string | null
    price: number | null
    createdAt: Date | null
    updatedAt: Date | null
    clerkId: string | null
  }

  export type ProductMaxAggregateOutputType = {
    id: string | null
    name: string | null
    company: string | null
    description: string | null
    featured: boolean | null
    image: string | null
    price: number | null
    createdAt: Date | null
    updatedAt: Date | null
    clerkId: string | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    name: number
    company: number
    description: number
    featured: number
    image: number
    price: number
    createdAt: number
    updatedAt: number
    clerkId: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    price?: true
  }

  export type ProductSumAggregateInputType = {
    price?: true
  }

  export type ProductMinAggregateInputType = {
    id?: true
    name?: true
    company?: true
    description?: true
    featured?: true
    image?: true
    price?: true
    createdAt?: true
    updatedAt?: true
    clerkId?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    name?: true
    company?: true
    description?: true
    featured?: true
    image?: true
    price?: true
    createdAt?: true
    updatedAt?: true
    clerkId?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    name?: true
    company?: true
    description?: true
    featured?: true
    image?: true
    price?: true
    createdAt?: true
    updatedAt?: true
    clerkId?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: string
    name: string
    company: string
    description: string
    featured: boolean
    image: string
    price: number
    createdAt: Date
    updatedAt: Date
    clerkId: string
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    company?: boolean
    description?: boolean
    featured?: boolean
    image?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    clerkId?: boolean
  }, ExtArgs["result"]["product"]>

  export type ProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    company?: boolean
    description?: boolean
    featured?: boolean
    image?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    clerkId?: boolean
  }, ExtArgs["result"]["product"]>

  export type ProductSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    company?: boolean
    description?: boolean
    featured?: boolean
    image?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    clerkId?: boolean
  }, ExtArgs["result"]["product"]>

  export type ProductSelectScalar = {
    id?: boolean
    name?: boolean
    company?: boolean
    description?: boolean
    featured?: boolean
    image?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    clerkId?: boolean
  }

  export type ProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "company" | "description" | "featured" | "image" | "price" | "createdAt" | "updatedAt" | "clerkId", ExtArgs["result"]["product"]>

  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      company: string
      description: string
      featured: boolean
      image: string
      price: number
      createdAt: Date
      updatedAt: Date
      clerkId: string
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductFindUniqueArgs>(args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductFindFirstArgs>(args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductFindManyArgs>(args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends ProductCreateArgs>(args: SelectSubset<T, ProductCreateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {ProductCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductCreateManyArgs>(args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {ProductCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `id`
     * const productWithIdOnly = await prisma.product.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends ProductDeleteArgs>(args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductUpdateArgs>(args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductDeleteManyArgs>(args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductUpdateManyArgs>(args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products and returns the data updated in the database.
     * @param {ProductUpdateManyAndReturnArgs} args - Arguments to update many Products.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Products and only return the `id`
     * const productWithIdOnly = await prisma.product.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProductUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends ProductUpsertArgs>(args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
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
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Product model
   */
  interface ProductFieldRefs {
    readonly id: FieldRef<"Product", 'String'>
    readonly name: FieldRef<"Product", 'String'>
    readonly company: FieldRef<"Product", 'String'>
    readonly description: FieldRef<"Product", 'String'>
    readonly featured: FieldRef<"Product", 'Boolean'>
    readonly image: FieldRef<"Product", 'String'>
    readonly price: FieldRef<"Product", 'Int'>
    readonly createdAt: FieldRef<"Product", 'DateTime'>
    readonly updatedAt: FieldRef<"Product", 'DateTime'>
    readonly clerkId: FieldRef<"Product", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }

  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product createManyAndReturn
   */
  export type ProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Product updateManyAndReturn
   */
  export type ProductUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }

  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to delete.
     */
    limit?: number
  }

  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
  }


  /**
   * Model Blog
   */

  export type AggregateBlog = {
    _count: BlogCountAggregateOutputType | null
    _min: BlogMinAggregateOutputType | null
    _max: BlogMaxAggregateOutputType | null
  }

  export type BlogMinAggregateOutputType = {
    id: string | null
    slug: string | null
    title: string | null
    content: string | null
    summary: string | null
    image: string | null
    category: string | null
    tags: string | null
    isPublished: boolean | null
    isFeatured: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BlogMaxAggregateOutputType = {
    id: string | null
    slug: string | null
    title: string | null
    content: string | null
    summary: string | null
    image: string | null
    category: string | null
    tags: string | null
    isPublished: boolean | null
    isFeatured: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BlogCountAggregateOutputType = {
    id: number
    slug: number
    title: number
    content: number
    summary: number
    image: number
    category: number
    tags: number
    isPublished: number
    isFeatured: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BlogMinAggregateInputType = {
    id?: true
    slug?: true
    title?: true
    content?: true
    summary?: true
    image?: true
    category?: true
    tags?: true
    isPublished?: true
    isFeatured?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BlogMaxAggregateInputType = {
    id?: true
    slug?: true
    title?: true
    content?: true
    summary?: true
    image?: true
    category?: true
    tags?: true
    isPublished?: true
    isFeatured?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BlogCountAggregateInputType = {
    id?: true
    slug?: true
    title?: true
    content?: true
    summary?: true
    image?: true
    category?: true
    tags?: true
    isPublished?: true
    isFeatured?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BlogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Blog to aggregate.
     */
    where?: BlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blogs to fetch.
     */
    orderBy?: BlogOrderByWithRelationInput | BlogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Blogs
    **/
    _count?: true | BlogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BlogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BlogMaxAggregateInputType
  }

  export type GetBlogAggregateType<T extends BlogAggregateArgs> = {
        [P in keyof T & keyof AggregateBlog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBlog[P]>
      : GetScalarType<T[P], AggregateBlog[P]>
  }




  export type BlogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlogWhereInput
    orderBy?: BlogOrderByWithAggregationInput | BlogOrderByWithAggregationInput[]
    by: BlogScalarFieldEnum[] | BlogScalarFieldEnum
    having?: BlogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BlogCountAggregateInputType | true
    _min?: BlogMinAggregateInputType
    _max?: BlogMaxAggregateInputType
  }

  export type BlogGroupByOutputType = {
    id: string
    slug: string
    title: string
    content: string
    summary: string | null
    image: string | null
    category: string
    tags: string | null
    isPublished: boolean
    isFeatured: boolean
    createdAt: Date
    updatedAt: Date
    _count: BlogCountAggregateOutputType | null
    _min: BlogMinAggregateOutputType | null
    _max: BlogMaxAggregateOutputType | null
  }

  type GetBlogGroupByPayload<T extends BlogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BlogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BlogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BlogGroupByOutputType[P]>
            : GetScalarType<T[P], BlogGroupByOutputType[P]>
        }
      >
    >


  export type BlogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    title?: boolean
    content?: boolean
    summary?: boolean
    image?: boolean
    category?: boolean
    tags?: boolean
    isPublished?: boolean
    isFeatured?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["blog"]>

  export type BlogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    title?: boolean
    content?: boolean
    summary?: boolean
    image?: boolean
    category?: boolean
    tags?: boolean
    isPublished?: boolean
    isFeatured?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["blog"]>

  export type BlogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    title?: boolean
    content?: boolean
    summary?: boolean
    image?: boolean
    category?: boolean
    tags?: boolean
    isPublished?: boolean
    isFeatured?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["blog"]>

  export type BlogSelectScalar = {
    id?: boolean
    slug?: boolean
    title?: boolean
    content?: boolean
    summary?: boolean
    image?: boolean
    category?: boolean
    tags?: boolean
    isPublished?: boolean
    isFeatured?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BlogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "slug" | "title" | "content" | "summary" | "image" | "category" | "tags" | "isPublished" | "isFeatured" | "createdAt" | "updatedAt", ExtArgs["result"]["blog"]>

  export type $BlogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Blog"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      slug: string
      title: string
      content: string
      summary: string | null
      image: string | null
      category: string
      tags: string | null
      isPublished: boolean
      isFeatured: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["blog"]>
    composites: {}
  }

  type BlogGetPayload<S extends boolean | null | undefined | BlogDefaultArgs> = $Result.GetResult<Prisma.$BlogPayload, S>

  type BlogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BlogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BlogCountAggregateInputType | true
    }

  export interface BlogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Blog'], meta: { name: 'Blog' } }
    /**
     * Find zero or one Blog that matches the filter.
     * @param {BlogFindUniqueArgs} args - Arguments to find a Blog
     * @example
     * // Get one Blog
     * const blog = await prisma.blog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BlogFindUniqueArgs>(args: SelectSubset<T, BlogFindUniqueArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Blog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BlogFindUniqueOrThrowArgs} args - Arguments to find a Blog
     * @example
     * // Get one Blog
     * const blog = await prisma.blog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BlogFindUniqueOrThrowArgs>(args: SelectSubset<T, BlogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Blog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogFindFirstArgs} args - Arguments to find a Blog
     * @example
     * // Get one Blog
     * const blog = await prisma.blog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BlogFindFirstArgs>(args?: SelectSubset<T, BlogFindFirstArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Blog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogFindFirstOrThrowArgs} args - Arguments to find a Blog
     * @example
     * // Get one Blog
     * const blog = await prisma.blog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BlogFindFirstOrThrowArgs>(args?: SelectSubset<T, BlogFindFirstOrThrowArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Blogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Blogs
     * const blogs = await prisma.blog.findMany()
     * 
     * // Get first 10 Blogs
     * const blogs = await prisma.blog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const blogWithIdOnly = await prisma.blog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BlogFindManyArgs>(args?: SelectSubset<T, BlogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Blog.
     * @param {BlogCreateArgs} args - Arguments to create a Blog.
     * @example
     * // Create one Blog
     * const Blog = await prisma.blog.create({
     *   data: {
     *     // ... data to create a Blog
     *   }
     * })
     * 
     */
    create<T extends BlogCreateArgs>(args: SelectSubset<T, BlogCreateArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Blogs.
     * @param {BlogCreateManyArgs} args - Arguments to create many Blogs.
     * @example
     * // Create many Blogs
     * const blog = await prisma.blog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BlogCreateManyArgs>(args?: SelectSubset<T, BlogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Blogs and returns the data saved in the database.
     * @param {BlogCreateManyAndReturnArgs} args - Arguments to create many Blogs.
     * @example
     * // Create many Blogs
     * const blog = await prisma.blog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Blogs and only return the `id`
     * const blogWithIdOnly = await prisma.blog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BlogCreateManyAndReturnArgs>(args?: SelectSubset<T, BlogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Blog.
     * @param {BlogDeleteArgs} args - Arguments to delete one Blog.
     * @example
     * // Delete one Blog
     * const Blog = await prisma.blog.delete({
     *   where: {
     *     // ... filter to delete one Blog
     *   }
     * })
     * 
     */
    delete<T extends BlogDeleteArgs>(args: SelectSubset<T, BlogDeleteArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Blog.
     * @param {BlogUpdateArgs} args - Arguments to update one Blog.
     * @example
     * // Update one Blog
     * const blog = await prisma.blog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BlogUpdateArgs>(args: SelectSubset<T, BlogUpdateArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Blogs.
     * @param {BlogDeleteManyArgs} args - Arguments to filter Blogs to delete.
     * @example
     * // Delete a few Blogs
     * const { count } = await prisma.blog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BlogDeleteManyArgs>(args?: SelectSubset<T, BlogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Blogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Blogs
     * const blog = await prisma.blog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BlogUpdateManyArgs>(args: SelectSubset<T, BlogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Blogs and returns the data updated in the database.
     * @param {BlogUpdateManyAndReturnArgs} args - Arguments to update many Blogs.
     * @example
     * // Update many Blogs
     * const blog = await prisma.blog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Blogs and only return the `id`
     * const blogWithIdOnly = await prisma.blog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BlogUpdateManyAndReturnArgs>(args: SelectSubset<T, BlogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Blog.
     * @param {BlogUpsertArgs} args - Arguments to update or create a Blog.
     * @example
     * // Update or create a Blog
     * const blog = await prisma.blog.upsert({
     *   create: {
     *     // ... data to create a Blog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Blog we want to update
     *   }
     * })
     */
    upsert<T extends BlogUpsertArgs>(args: SelectSubset<T, BlogUpsertArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Blogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogCountArgs} args - Arguments to filter Blogs to count.
     * @example
     * // Count the number of Blogs
     * const count = await prisma.blog.count({
     *   where: {
     *     // ... the filter for the Blogs we want to count
     *   }
     * })
    **/
    count<T extends BlogCountArgs>(
      args?: Subset<T, BlogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BlogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Blog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BlogAggregateArgs>(args: Subset<T, BlogAggregateArgs>): Prisma.PrismaPromise<GetBlogAggregateType<T>>

    /**
     * Group by Blog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogGroupByArgs} args - Group by arguments.
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
      T extends BlogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BlogGroupByArgs['orderBy'] }
        : { orderBy?: BlogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BlogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Blog model
   */
  readonly fields: BlogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Blog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BlogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Blog model
   */
  interface BlogFieldRefs {
    readonly id: FieldRef<"Blog", 'String'>
    readonly slug: FieldRef<"Blog", 'String'>
    readonly title: FieldRef<"Blog", 'String'>
    readonly content: FieldRef<"Blog", 'String'>
    readonly summary: FieldRef<"Blog", 'String'>
    readonly image: FieldRef<"Blog", 'String'>
    readonly category: FieldRef<"Blog", 'String'>
    readonly tags: FieldRef<"Blog", 'String'>
    readonly isPublished: FieldRef<"Blog", 'Boolean'>
    readonly isFeatured: FieldRef<"Blog", 'Boolean'>
    readonly createdAt: FieldRef<"Blog", 'DateTime'>
    readonly updatedAt: FieldRef<"Blog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Blog findUnique
   */
  export type BlogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Filter, which Blog to fetch.
     */
    where: BlogWhereUniqueInput
  }

  /**
   * Blog findUniqueOrThrow
   */
  export type BlogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Filter, which Blog to fetch.
     */
    where: BlogWhereUniqueInput
  }

  /**
   * Blog findFirst
   */
  export type BlogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Filter, which Blog to fetch.
     */
    where?: BlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blogs to fetch.
     */
    orderBy?: BlogOrderByWithRelationInput | BlogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Blogs.
     */
    cursor?: BlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Blogs.
     */
    distinct?: BlogScalarFieldEnum | BlogScalarFieldEnum[]
  }

  /**
   * Blog findFirstOrThrow
   */
  export type BlogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Filter, which Blog to fetch.
     */
    where?: BlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blogs to fetch.
     */
    orderBy?: BlogOrderByWithRelationInput | BlogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Blogs.
     */
    cursor?: BlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Blogs.
     */
    distinct?: BlogScalarFieldEnum | BlogScalarFieldEnum[]
  }

  /**
   * Blog findMany
   */
  export type BlogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Filter, which Blogs to fetch.
     */
    where?: BlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blogs to fetch.
     */
    orderBy?: BlogOrderByWithRelationInput | BlogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Blogs.
     */
    cursor?: BlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blogs.
     */
    skip?: number
    distinct?: BlogScalarFieldEnum | BlogScalarFieldEnum[]
  }

  /**
   * Blog create
   */
  export type BlogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * The data needed to create a Blog.
     */
    data: XOR<BlogCreateInput, BlogUncheckedCreateInput>
  }

  /**
   * Blog createMany
   */
  export type BlogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Blogs.
     */
    data: BlogCreateManyInput | BlogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Blog createManyAndReturn
   */
  export type BlogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * The data used to create many Blogs.
     */
    data: BlogCreateManyInput | BlogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Blog update
   */
  export type BlogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * The data needed to update a Blog.
     */
    data: XOR<BlogUpdateInput, BlogUncheckedUpdateInput>
    /**
     * Choose, which Blog to update.
     */
    where: BlogWhereUniqueInput
  }

  /**
   * Blog updateMany
   */
  export type BlogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Blogs.
     */
    data: XOR<BlogUpdateManyMutationInput, BlogUncheckedUpdateManyInput>
    /**
     * Filter which Blogs to update
     */
    where?: BlogWhereInput
    /**
     * Limit how many Blogs to update.
     */
    limit?: number
  }

  /**
   * Blog updateManyAndReturn
   */
  export type BlogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * The data used to update Blogs.
     */
    data: XOR<BlogUpdateManyMutationInput, BlogUncheckedUpdateManyInput>
    /**
     * Filter which Blogs to update
     */
    where?: BlogWhereInput
    /**
     * Limit how many Blogs to update.
     */
    limit?: number
  }

  /**
   * Blog upsert
   */
  export type BlogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * The filter to search for the Blog to update in case it exists.
     */
    where: BlogWhereUniqueInput
    /**
     * In case the Blog found by the `where` argument doesn't exist, create a new Blog with this data.
     */
    create: XOR<BlogCreateInput, BlogUncheckedCreateInput>
    /**
     * In case the Blog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BlogUpdateInput, BlogUncheckedUpdateInput>
  }

  /**
   * Blog delete
   */
  export type BlogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Filter which Blog to delete.
     */
    where: BlogWhereUniqueInput
  }

  /**
   * Blog deleteMany
   */
  export type BlogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Blogs to delete
     */
    where?: BlogWhereInput
    /**
     * Limit how many Blogs to delete.
     */
    limit?: number
  }

  /**
   * Blog without action
   */
  export type BlogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
  }


  /**
   * Model Fair
   */

  export type AggregateFair = {
    _count: FairCountAggregateOutputType | null
    _min: FairMinAggregateOutputType | null
    _max: FairMaxAggregateOutputType | null
  }

  export type FairMinAggregateOutputType = {
    id: string | null
    slug: string | null
    name: string | null
    description: string | null
    summary: string | null
    website: string | null
    venue: string | null
    type: string | null
    category: string | null
    logoImage: string | null
    coverImage: string | null
    displayedProducts: string | null
    tourGuide: string | null
    onBanner: boolean | null
    isPublished: boolean | null
    isFeatured: boolean | null
    isSectoralFairIndex: boolean | null
    isDefiniteDepartureTour: boolean | null
    date: string | null
    startDate: Date | null
    endDate: Date | null
    hotelId: string | null
    fairImagesId: string | null
    tourImagesId: string | null
    paidServices: string | null
    freeServices: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FairMaxAggregateOutputType = {
    id: string | null
    slug: string | null
    name: string | null
    description: string | null
    summary: string | null
    website: string | null
    venue: string | null
    type: string | null
    category: string | null
    logoImage: string | null
    coverImage: string | null
    displayedProducts: string | null
    tourGuide: string | null
    onBanner: boolean | null
    isPublished: boolean | null
    isFeatured: boolean | null
    isSectoralFairIndex: boolean | null
    isDefiniteDepartureTour: boolean | null
    date: string | null
    startDate: Date | null
    endDate: Date | null
    hotelId: string | null
    fairImagesId: string | null
    tourImagesId: string | null
    paidServices: string | null
    freeServices: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FairCountAggregateOutputType = {
    id: number
    slug: number
    name: number
    description: number
    summary: number
    website: number
    venue: number
    type: number
    category: number
    logoImage: number
    coverImage: number
    displayedProducts: number
    tourGuide: number
    onBanner: number
    isPublished: number
    isFeatured: number
    isSectoralFairIndex: number
    isDefiniteDepartureTour: number
    date: number
    startDate: number
    endDate: number
    hotelId: number
    fairImagesId: number
    tourImagesId: number
    paidServices: number
    freeServices: number
    createdAt: number
    updatedAt: number
    tourPrograms: number
    _all: number
  }


  export type FairMinAggregateInputType = {
    id?: true
    slug?: true
    name?: true
    description?: true
    summary?: true
    website?: true
    venue?: true
    type?: true
    category?: true
    logoImage?: true
    coverImage?: true
    displayedProducts?: true
    tourGuide?: true
    onBanner?: true
    isPublished?: true
    isFeatured?: true
    isSectoralFairIndex?: true
    isDefiniteDepartureTour?: true
    date?: true
    startDate?: true
    endDate?: true
    hotelId?: true
    fairImagesId?: true
    tourImagesId?: true
    paidServices?: true
    freeServices?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FairMaxAggregateInputType = {
    id?: true
    slug?: true
    name?: true
    description?: true
    summary?: true
    website?: true
    venue?: true
    type?: true
    category?: true
    logoImage?: true
    coverImage?: true
    displayedProducts?: true
    tourGuide?: true
    onBanner?: true
    isPublished?: true
    isFeatured?: true
    isSectoralFairIndex?: true
    isDefiniteDepartureTour?: true
    date?: true
    startDate?: true
    endDate?: true
    hotelId?: true
    fairImagesId?: true
    tourImagesId?: true
    paidServices?: true
    freeServices?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FairCountAggregateInputType = {
    id?: true
    slug?: true
    name?: true
    description?: true
    summary?: true
    website?: true
    venue?: true
    type?: true
    category?: true
    logoImage?: true
    coverImage?: true
    displayedProducts?: true
    tourGuide?: true
    onBanner?: true
    isPublished?: true
    isFeatured?: true
    isSectoralFairIndex?: true
    isDefiniteDepartureTour?: true
    date?: true
    startDate?: true
    endDate?: true
    hotelId?: true
    fairImagesId?: true
    tourImagesId?: true
    paidServices?: true
    freeServices?: true
    createdAt?: true
    updatedAt?: true
    tourPrograms?: true
    _all?: true
  }

  export type FairAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Fair to aggregate.
     */
    where?: FairWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fairs to fetch.
     */
    orderBy?: FairOrderByWithRelationInput | FairOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FairWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fairs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fairs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Fairs
    **/
    _count?: true | FairCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FairMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FairMaxAggregateInputType
  }

  export type GetFairAggregateType<T extends FairAggregateArgs> = {
        [P in keyof T & keyof AggregateFair]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFair[P]>
      : GetScalarType<T[P], AggregateFair[P]>
  }




  export type FairGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FairWhereInput
    orderBy?: FairOrderByWithAggregationInput | FairOrderByWithAggregationInput[]
    by: FairScalarFieldEnum[] | FairScalarFieldEnum
    having?: FairScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FairCountAggregateInputType | true
    _min?: FairMinAggregateInputType
    _max?: FairMaxAggregateInputType
  }

  export type FairGroupByOutputType = {
    id: string
    slug: string
    name: string
    description: string
    summary: string | null
    website: string | null
    venue: string | null
    type: string | null
    category: string | null
    logoImage: string | null
    coverImage: string | null
    displayedProducts: string | null
    tourGuide: string | null
    onBanner: boolean
    isPublished: boolean
    isFeatured: boolean
    isSectoralFairIndex: boolean
    isDefiniteDepartureTour: boolean
    date: string | null
    startDate: Date
    endDate: Date | null
    hotelId: string | null
    fairImagesId: string | null
    tourImagesId: string | null
    paidServices: string | null
    freeServices: string | null
    createdAt: Date
    updatedAt: Date
    tourPrograms: JsonValue | null
    _count: FairCountAggregateOutputType | null
    _min: FairMinAggregateOutputType | null
    _max: FairMaxAggregateOutputType | null
  }

  type GetFairGroupByPayload<T extends FairGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FairGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FairGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FairGroupByOutputType[P]>
            : GetScalarType<T[P], FairGroupByOutputType[P]>
        }
      >
    >


  export type FairSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    name?: boolean
    description?: boolean
    summary?: boolean
    website?: boolean
    venue?: boolean
    type?: boolean
    category?: boolean
    logoImage?: boolean
    coverImage?: boolean
    displayedProducts?: boolean
    tourGuide?: boolean
    onBanner?: boolean
    isPublished?: boolean
    isFeatured?: boolean
    isSectoralFairIndex?: boolean
    isDefiniteDepartureTour?: boolean
    date?: boolean
    startDate?: boolean
    endDate?: boolean
    hotelId?: boolean
    fairImagesId?: boolean
    tourImagesId?: boolean
    paidServices?: boolean
    freeServices?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tourPrograms?: boolean
    hotel?: boolean | Fair$hotelArgs<ExtArgs>
    fairImage?: boolean | Fair$fairImageArgs<ExtArgs>
    tourImage?: boolean | Fair$tourImageArgs<ExtArgs>
  }, ExtArgs["result"]["fair"]>

  export type FairSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    name?: boolean
    description?: boolean
    summary?: boolean
    website?: boolean
    venue?: boolean
    type?: boolean
    category?: boolean
    logoImage?: boolean
    coverImage?: boolean
    displayedProducts?: boolean
    tourGuide?: boolean
    onBanner?: boolean
    isPublished?: boolean
    isFeatured?: boolean
    isSectoralFairIndex?: boolean
    isDefiniteDepartureTour?: boolean
    date?: boolean
    startDate?: boolean
    endDate?: boolean
    hotelId?: boolean
    fairImagesId?: boolean
    tourImagesId?: boolean
    paidServices?: boolean
    freeServices?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tourPrograms?: boolean
    hotel?: boolean | Fair$hotelArgs<ExtArgs>
    fairImage?: boolean | Fair$fairImageArgs<ExtArgs>
    tourImage?: boolean | Fair$tourImageArgs<ExtArgs>
  }, ExtArgs["result"]["fair"]>

  export type FairSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    name?: boolean
    description?: boolean
    summary?: boolean
    website?: boolean
    venue?: boolean
    type?: boolean
    category?: boolean
    logoImage?: boolean
    coverImage?: boolean
    displayedProducts?: boolean
    tourGuide?: boolean
    onBanner?: boolean
    isPublished?: boolean
    isFeatured?: boolean
    isSectoralFairIndex?: boolean
    isDefiniteDepartureTour?: boolean
    date?: boolean
    startDate?: boolean
    endDate?: boolean
    hotelId?: boolean
    fairImagesId?: boolean
    tourImagesId?: boolean
    paidServices?: boolean
    freeServices?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tourPrograms?: boolean
    hotel?: boolean | Fair$hotelArgs<ExtArgs>
    fairImage?: boolean | Fair$fairImageArgs<ExtArgs>
    tourImage?: boolean | Fair$tourImageArgs<ExtArgs>
  }, ExtArgs["result"]["fair"]>

  export type FairSelectScalar = {
    id?: boolean
    slug?: boolean
    name?: boolean
    description?: boolean
    summary?: boolean
    website?: boolean
    venue?: boolean
    type?: boolean
    category?: boolean
    logoImage?: boolean
    coverImage?: boolean
    displayedProducts?: boolean
    tourGuide?: boolean
    onBanner?: boolean
    isPublished?: boolean
    isFeatured?: boolean
    isSectoralFairIndex?: boolean
    isDefiniteDepartureTour?: boolean
    date?: boolean
    startDate?: boolean
    endDate?: boolean
    hotelId?: boolean
    fairImagesId?: boolean
    tourImagesId?: boolean
    paidServices?: boolean
    freeServices?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tourPrograms?: boolean
  }

  export type FairOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "slug" | "name" | "description" | "summary" | "website" | "venue" | "type" | "category" | "logoImage" | "coverImage" | "displayedProducts" | "tourGuide" | "onBanner" | "isPublished" | "isFeatured" | "isSectoralFairIndex" | "isDefiniteDepartureTour" | "date" | "startDate" | "endDate" | "hotelId" | "fairImagesId" | "tourImagesId" | "paidServices" | "freeServices" | "createdAt" | "updatedAt" | "tourPrograms", ExtArgs["result"]["fair"]>
  export type FairInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hotel?: boolean | Fair$hotelArgs<ExtArgs>
    fairImage?: boolean | Fair$fairImageArgs<ExtArgs>
    tourImage?: boolean | Fair$tourImageArgs<ExtArgs>
  }
  export type FairIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hotel?: boolean | Fair$hotelArgs<ExtArgs>
    fairImage?: boolean | Fair$fairImageArgs<ExtArgs>
    tourImage?: boolean | Fair$tourImageArgs<ExtArgs>
  }
  export type FairIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hotel?: boolean | Fair$hotelArgs<ExtArgs>
    fairImage?: boolean | Fair$fairImageArgs<ExtArgs>
    tourImage?: boolean | Fair$tourImageArgs<ExtArgs>
  }

  export type $FairPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Fair"
    objects: {
      hotel: Prisma.$HotelPayload<ExtArgs> | null
      fairImage: Prisma.$FairImagesPayload<ExtArgs> | null
      tourImage: Prisma.$TourImagesPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      slug: string
      name: string
      description: string
      summary: string | null
      website: string | null
      venue: string | null
      type: string | null
      category: string | null
      logoImage: string | null
      coverImage: string | null
      displayedProducts: string | null
      tourGuide: string | null
      onBanner: boolean
      isPublished: boolean
      isFeatured: boolean
      isSectoralFairIndex: boolean
      isDefiniteDepartureTour: boolean
      date: string | null
      startDate: Date
      endDate: Date | null
      hotelId: string | null
      fairImagesId: string | null
      tourImagesId: string | null
      paidServices: string | null
      freeServices: string | null
      createdAt: Date
      updatedAt: Date
      tourPrograms: Prisma.JsonValue | null
    }, ExtArgs["result"]["fair"]>
    composites: {}
  }

  type FairGetPayload<S extends boolean | null | undefined | FairDefaultArgs> = $Result.GetResult<Prisma.$FairPayload, S>

  type FairCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FairFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FairCountAggregateInputType | true
    }

  export interface FairDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Fair'], meta: { name: 'Fair' } }
    /**
     * Find zero or one Fair that matches the filter.
     * @param {FairFindUniqueArgs} args - Arguments to find a Fair
     * @example
     * // Get one Fair
     * const fair = await prisma.fair.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FairFindUniqueArgs>(args: SelectSubset<T, FairFindUniqueArgs<ExtArgs>>): Prisma__FairClient<$Result.GetResult<Prisma.$FairPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Fair that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FairFindUniqueOrThrowArgs} args - Arguments to find a Fair
     * @example
     * // Get one Fair
     * const fair = await prisma.fair.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FairFindUniqueOrThrowArgs>(args: SelectSubset<T, FairFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FairClient<$Result.GetResult<Prisma.$FairPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Fair that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FairFindFirstArgs} args - Arguments to find a Fair
     * @example
     * // Get one Fair
     * const fair = await prisma.fair.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FairFindFirstArgs>(args?: SelectSubset<T, FairFindFirstArgs<ExtArgs>>): Prisma__FairClient<$Result.GetResult<Prisma.$FairPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Fair that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FairFindFirstOrThrowArgs} args - Arguments to find a Fair
     * @example
     * // Get one Fair
     * const fair = await prisma.fair.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FairFindFirstOrThrowArgs>(args?: SelectSubset<T, FairFindFirstOrThrowArgs<ExtArgs>>): Prisma__FairClient<$Result.GetResult<Prisma.$FairPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Fairs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FairFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Fairs
     * const fairs = await prisma.fair.findMany()
     * 
     * // Get first 10 Fairs
     * const fairs = await prisma.fair.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fairWithIdOnly = await prisma.fair.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FairFindManyArgs>(args?: SelectSubset<T, FairFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FairPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Fair.
     * @param {FairCreateArgs} args - Arguments to create a Fair.
     * @example
     * // Create one Fair
     * const Fair = await prisma.fair.create({
     *   data: {
     *     // ... data to create a Fair
     *   }
     * })
     * 
     */
    create<T extends FairCreateArgs>(args: SelectSubset<T, FairCreateArgs<ExtArgs>>): Prisma__FairClient<$Result.GetResult<Prisma.$FairPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Fairs.
     * @param {FairCreateManyArgs} args - Arguments to create many Fairs.
     * @example
     * // Create many Fairs
     * const fair = await prisma.fair.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FairCreateManyArgs>(args?: SelectSubset<T, FairCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Fairs and returns the data saved in the database.
     * @param {FairCreateManyAndReturnArgs} args - Arguments to create many Fairs.
     * @example
     * // Create many Fairs
     * const fair = await prisma.fair.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Fairs and only return the `id`
     * const fairWithIdOnly = await prisma.fair.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FairCreateManyAndReturnArgs>(args?: SelectSubset<T, FairCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FairPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Fair.
     * @param {FairDeleteArgs} args - Arguments to delete one Fair.
     * @example
     * // Delete one Fair
     * const Fair = await prisma.fair.delete({
     *   where: {
     *     // ... filter to delete one Fair
     *   }
     * })
     * 
     */
    delete<T extends FairDeleteArgs>(args: SelectSubset<T, FairDeleteArgs<ExtArgs>>): Prisma__FairClient<$Result.GetResult<Prisma.$FairPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Fair.
     * @param {FairUpdateArgs} args - Arguments to update one Fair.
     * @example
     * // Update one Fair
     * const fair = await prisma.fair.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FairUpdateArgs>(args: SelectSubset<T, FairUpdateArgs<ExtArgs>>): Prisma__FairClient<$Result.GetResult<Prisma.$FairPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Fairs.
     * @param {FairDeleteManyArgs} args - Arguments to filter Fairs to delete.
     * @example
     * // Delete a few Fairs
     * const { count } = await prisma.fair.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FairDeleteManyArgs>(args?: SelectSubset<T, FairDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fairs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FairUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Fairs
     * const fair = await prisma.fair.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FairUpdateManyArgs>(args: SelectSubset<T, FairUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fairs and returns the data updated in the database.
     * @param {FairUpdateManyAndReturnArgs} args - Arguments to update many Fairs.
     * @example
     * // Update many Fairs
     * const fair = await prisma.fair.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Fairs and only return the `id`
     * const fairWithIdOnly = await prisma.fair.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FairUpdateManyAndReturnArgs>(args: SelectSubset<T, FairUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FairPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Fair.
     * @param {FairUpsertArgs} args - Arguments to update or create a Fair.
     * @example
     * // Update or create a Fair
     * const fair = await prisma.fair.upsert({
     *   create: {
     *     // ... data to create a Fair
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Fair we want to update
     *   }
     * })
     */
    upsert<T extends FairUpsertArgs>(args: SelectSubset<T, FairUpsertArgs<ExtArgs>>): Prisma__FairClient<$Result.GetResult<Prisma.$FairPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Fairs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FairCountArgs} args - Arguments to filter Fairs to count.
     * @example
     * // Count the number of Fairs
     * const count = await prisma.fair.count({
     *   where: {
     *     // ... the filter for the Fairs we want to count
     *   }
     * })
    **/
    count<T extends FairCountArgs>(
      args?: Subset<T, FairCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FairCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Fair.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FairAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FairAggregateArgs>(args: Subset<T, FairAggregateArgs>): Prisma.PrismaPromise<GetFairAggregateType<T>>

    /**
     * Group by Fair.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FairGroupByArgs} args - Group by arguments.
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
      T extends FairGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FairGroupByArgs['orderBy'] }
        : { orderBy?: FairGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FairGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFairGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Fair model
   */
  readonly fields: FairFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Fair.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FairClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    hotel<T extends Fair$hotelArgs<ExtArgs> = {}>(args?: Subset<T, Fair$hotelArgs<ExtArgs>>): Prisma__HotelClient<$Result.GetResult<Prisma.$HotelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    fairImage<T extends Fair$fairImageArgs<ExtArgs> = {}>(args?: Subset<T, Fair$fairImageArgs<ExtArgs>>): Prisma__FairImagesClient<$Result.GetResult<Prisma.$FairImagesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    tourImage<T extends Fair$tourImageArgs<ExtArgs> = {}>(args?: Subset<T, Fair$tourImageArgs<ExtArgs>>): Prisma__TourImagesClient<$Result.GetResult<Prisma.$TourImagesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Fair model
   */
  interface FairFieldRefs {
    readonly id: FieldRef<"Fair", 'String'>
    readonly slug: FieldRef<"Fair", 'String'>
    readonly name: FieldRef<"Fair", 'String'>
    readonly description: FieldRef<"Fair", 'String'>
    readonly summary: FieldRef<"Fair", 'String'>
    readonly website: FieldRef<"Fair", 'String'>
    readonly venue: FieldRef<"Fair", 'String'>
    readonly type: FieldRef<"Fair", 'String'>
    readonly category: FieldRef<"Fair", 'String'>
    readonly logoImage: FieldRef<"Fair", 'String'>
    readonly coverImage: FieldRef<"Fair", 'String'>
    readonly displayedProducts: FieldRef<"Fair", 'String'>
    readonly tourGuide: FieldRef<"Fair", 'String'>
    readonly onBanner: FieldRef<"Fair", 'Boolean'>
    readonly isPublished: FieldRef<"Fair", 'Boolean'>
    readonly isFeatured: FieldRef<"Fair", 'Boolean'>
    readonly isSectoralFairIndex: FieldRef<"Fair", 'Boolean'>
    readonly isDefiniteDepartureTour: FieldRef<"Fair", 'Boolean'>
    readonly date: FieldRef<"Fair", 'String'>
    readonly startDate: FieldRef<"Fair", 'DateTime'>
    readonly endDate: FieldRef<"Fair", 'DateTime'>
    readonly hotelId: FieldRef<"Fair", 'String'>
    readonly fairImagesId: FieldRef<"Fair", 'String'>
    readonly tourImagesId: FieldRef<"Fair", 'String'>
    readonly paidServices: FieldRef<"Fair", 'String'>
    readonly freeServices: FieldRef<"Fair", 'String'>
    readonly createdAt: FieldRef<"Fair", 'DateTime'>
    readonly updatedAt: FieldRef<"Fair", 'DateTime'>
    readonly tourPrograms: FieldRef<"Fair", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * Fair findUnique
   */
  export type FairFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fair
     */
    select?: FairSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fair
     */
    omit?: FairOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FairInclude<ExtArgs> | null
    /**
     * Filter, which Fair to fetch.
     */
    where: FairWhereUniqueInput
  }

  /**
   * Fair findUniqueOrThrow
   */
  export type FairFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fair
     */
    select?: FairSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fair
     */
    omit?: FairOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FairInclude<ExtArgs> | null
    /**
     * Filter, which Fair to fetch.
     */
    where: FairWhereUniqueInput
  }

  /**
   * Fair findFirst
   */
  export type FairFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fair
     */
    select?: FairSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fair
     */
    omit?: FairOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FairInclude<ExtArgs> | null
    /**
     * Filter, which Fair to fetch.
     */
    where?: FairWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fairs to fetch.
     */
    orderBy?: FairOrderByWithRelationInput | FairOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Fairs.
     */
    cursor?: FairWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fairs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fairs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fairs.
     */
    distinct?: FairScalarFieldEnum | FairScalarFieldEnum[]
  }

  /**
   * Fair findFirstOrThrow
   */
  export type FairFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fair
     */
    select?: FairSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fair
     */
    omit?: FairOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FairInclude<ExtArgs> | null
    /**
     * Filter, which Fair to fetch.
     */
    where?: FairWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fairs to fetch.
     */
    orderBy?: FairOrderByWithRelationInput | FairOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Fairs.
     */
    cursor?: FairWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fairs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fairs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fairs.
     */
    distinct?: FairScalarFieldEnum | FairScalarFieldEnum[]
  }

  /**
   * Fair findMany
   */
  export type FairFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fair
     */
    select?: FairSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fair
     */
    omit?: FairOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FairInclude<ExtArgs> | null
    /**
     * Filter, which Fairs to fetch.
     */
    where?: FairWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fairs to fetch.
     */
    orderBy?: FairOrderByWithRelationInput | FairOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Fairs.
     */
    cursor?: FairWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fairs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fairs.
     */
    skip?: number
    distinct?: FairScalarFieldEnum | FairScalarFieldEnum[]
  }

  /**
   * Fair create
   */
  export type FairCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fair
     */
    select?: FairSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fair
     */
    omit?: FairOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FairInclude<ExtArgs> | null
    /**
     * The data needed to create a Fair.
     */
    data: XOR<FairCreateInput, FairUncheckedCreateInput>
  }

  /**
   * Fair createMany
   */
  export type FairCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Fairs.
     */
    data: FairCreateManyInput | FairCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Fair createManyAndReturn
   */
  export type FairCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fair
     */
    select?: FairSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Fair
     */
    omit?: FairOmit<ExtArgs> | null
    /**
     * The data used to create many Fairs.
     */
    data: FairCreateManyInput | FairCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FairIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Fair update
   */
  export type FairUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fair
     */
    select?: FairSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fair
     */
    omit?: FairOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FairInclude<ExtArgs> | null
    /**
     * The data needed to update a Fair.
     */
    data: XOR<FairUpdateInput, FairUncheckedUpdateInput>
    /**
     * Choose, which Fair to update.
     */
    where: FairWhereUniqueInput
  }

  /**
   * Fair updateMany
   */
  export type FairUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Fairs.
     */
    data: XOR<FairUpdateManyMutationInput, FairUncheckedUpdateManyInput>
    /**
     * Filter which Fairs to update
     */
    where?: FairWhereInput
    /**
     * Limit how many Fairs to update.
     */
    limit?: number
  }

  /**
   * Fair updateManyAndReturn
   */
  export type FairUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fair
     */
    select?: FairSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Fair
     */
    omit?: FairOmit<ExtArgs> | null
    /**
     * The data used to update Fairs.
     */
    data: XOR<FairUpdateManyMutationInput, FairUncheckedUpdateManyInput>
    /**
     * Filter which Fairs to update
     */
    where?: FairWhereInput
    /**
     * Limit how many Fairs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FairIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Fair upsert
   */
  export type FairUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fair
     */
    select?: FairSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fair
     */
    omit?: FairOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FairInclude<ExtArgs> | null
    /**
     * The filter to search for the Fair to update in case it exists.
     */
    where: FairWhereUniqueInput
    /**
     * In case the Fair found by the `where` argument doesn't exist, create a new Fair with this data.
     */
    create: XOR<FairCreateInput, FairUncheckedCreateInput>
    /**
     * In case the Fair was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FairUpdateInput, FairUncheckedUpdateInput>
  }

  /**
   * Fair delete
   */
  export type FairDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fair
     */
    select?: FairSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fair
     */
    omit?: FairOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FairInclude<ExtArgs> | null
    /**
     * Filter which Fair to delete.
     */
    where: FairWhereUniqueInput
  }

  /**
   * Fair deleteMany
   */
  export type FairDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Fairs to delete
     */
    where?: FairWhereInput
    /**
     * Limit how many Fairs to delete.
     */
    limit?: number
  }

  /**
   * Fair.hotel
   */
  export type Fair$hotelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotel
     */
    select?: HotelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hotel
     */
    omit?: HotelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelInclude<ExtArgs> | null
    where?: HotelWhereInput
  }

  /**
   * Fair.fairImage
   */
  export type Fair$fairImageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FairImages
     */
    select?: FairImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FairImages
     */
    omit?: FairImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FairImagesInclude<ExtArgs> | null
    where?: FairImagesWhereInput
  }

  /**
   * Fair.tourImage
   */
  export type Fair$tourImageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourImages
     */
    select?: TourImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourImages
     */
    omit?: TourImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourImagesInclude<ExtArgs> | null
    where?: TourImagesWhereInput
  }

  /**
   * Fair without action
   */
  export type FairDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fair
     */
    select?: FairSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fair
     */
    omit?: FairOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FairInclude<ExtArgs> | null
  }


  /**
   * Model Hotel
   */

  export type AggregateHotel = {
    _count: HotelCountAggregateOutputType | null
    _min: HotelMinAggregateOutputType | null
    _max: HotelMaxAggregateOutputType | null
  }

  export type HotelMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HotelMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HotelCountAggregateOutputType = {
    id: number
    name: number
    description: number
    images: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type HotelMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HotelMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HotelCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    images?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type HotelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Hotel to aggregate.
     */
    where?: HotelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hotels to fetch.
     */
    orderBy?: HotelOrderByWithRelationInput | HotelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HotelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hotels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hotels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Hotels
    **/
    _count?: true | HotelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HotelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HotelMaxAggregateInputType
  }

  export type GetHotelAggregateType<T extends HotelAggregateArgs> = {
        [P in keyof T & keyof AggregateHotel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHotel[P]>
      : GetScalarType<T[P], AggregateHotel[P]>
  }




  export type HotelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HotelWhereInput
    orderBy?: HotelOrderByWithAggregationInput | HotelOrderByWithAggregationInput[]
    by: HotelScalarFieldEnum[] | HotelScalarFieldEnum
    having?: HotelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HotelCountAggregateInputType | true
    _min?: HotelMinAggregateInputType
    _max?: HotelMaxAggregateInputType
  }

  export type HotelGroupByOutputType = {
    id: string
    name: string
    description: string
    images: string[]
    createdAt: Date
    updatedAt: Date
    _count: HotelCountAggregateOutputType | null
    _min: HotelMinAggregateOutputType | null
    _max: HotelMaxAggregateOutputType | null
  }

  type GetHotelGroupByPayload<T extends HotelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HotelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HotelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HotelGroupByOutputType[P]>
            : GetScalarType<T[P], HotelGroupByOutputType[P]>
        }
      >
    >


  export type HotelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    images?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    fairs?: boolean | Hotel$fairsArgs<ExtArgs>
    _count?: boolean | HotelCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hotel"]>

  export type HotelSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    images?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["hotel"]>

  export type HotelSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    images?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["hotel"]>

  export type HotelSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    images?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type HotelOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "images" | "createdAt" | "updatedAt", ExtArgs["result"]["hotel"]>
  export type HotelInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fairs?: boolean | Hotel$fairsArgs<ExtArgs>
    _count?: boolean | HotelCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type HotelIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type HotelIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $HotelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Hotel"
    objects: {
      fairs: Prisma.$FairPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string
      images: string[]
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["hotel"]>
    composites: {}
  }

  type HotelGetPayload<S extends boolean | null | undefined | HotelDefaultArgs> = $Result.GetResult<Prisma.$HotelPayload, S>

  type HotelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HotelFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HotelCountAggregateInputType | true
    }

  export interface HotelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Hotel'], meta: { name: 'Hotel' } }
    /**
     * Find zero or one Hotel that matches the filter.
     * @param {HotelFindUniqueArgs} args - Arguments to find a Hotel
     * @example
     * // Get one Hotel
     * const hotel = await prisma.hotel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HotelFindUniqueArgs>(args: SelectSubset<T, HotelFindUniqueArgs<ExtArgs>>): Prisma__HotelClient<$Result.GetResult<Prisma.$HotelPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Hotel that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HotelFindUniqueOrThrowArgs} args - Arguments to find a Hotel
     * @example
     * // Get one Hotel
     * const hotel = await prisma.hotel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HotelFindUniqueOrThrowArgs>(args: SelectSubset<T, HotelFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HotelClient<$Result.GetResult<Prisma.$HotelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hotel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotelFindFirstArgs} args - Arguments to find a Hotel
     * @example
     * // Get one Hotel
     * const hotel = await prisma.hotel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HotelFindFirstArgs>(args?: SelectSubset<T, HotelFindFirstArgs<ExtArgs>>): Prisma__HotelClient<$Result.GetResult<Prisma.$HotelPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hotel that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotelFindFirstOrThrowArgs} args - Arguments to find a Hotel
     * @example
     * // Get one Hotel
     * const hotel = await prisma.hotel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HotelFindFirstOrThrowArgs>(args?: SelectSubset<T, HotelFindFirstOrThrowArgs<ExtArgs>>): Prisma__HotelClient<$Result.GetResult<Prisma.$HotelPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Hotels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotelFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Hotels
     * const hotels = await prisma.hotel.findMany()
     * 
     * // Get first 10 Hotels
     * const hotels = await prisma.hotel.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const hotelWithIdOnly = await prisma.hotel.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HotelFindManyArgs>(args?: SelectSubset<T, HotelFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HotelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Hotel.
     * @param {HotelCreateArgs} args - Arguments to create a Hotel.
     * @example
     * // Create one Hotel
     * const Hotel = await prisma.hotel.create({
     *   data: {
     *     // ... data to create a Hotel
     *   }
     * })
     * 
     */
    create<T extends HotelCreateArgs>(args: SelectSubset<T, HotelCreateArgs<ExtArgs>>): Prisma__HotelClient<$Result.GetResult<Prisma.$HotelPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Hotels.
     * @param {HotelCreateManyArgs} args - Arguments to create many Hotels.
     * @example
     * // Create many Hotels
     * const hotel = await prisma.hotel.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HotelCreateManyArgs>(args?: SelectSubset<T, HotelCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Hotels and returns the data saved in the database.
     * @param {HotelCreateManyAndReturnArgs} args - Arguments to create many Hotels.
     * @example
     * // Create many Hotels
     * const hotel = await prisma.hotel.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Hotels and only return the `id`
     * const hotelWithIdOnly = await prisma.hotel.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HotelCreateManyAndReturnArgs>(args?: SelectSubset<T, HotelCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HotelPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Hotel.
     * @param {HotelDeleteArgs} args - Arguments to delete one Hotel.
     * @example
     * // Delete one Hotel
     * const Hotel = await prisma.hotel.delete({
     *   where: {
     *     // ... filter to delete one Hotel
     *   }
     * })
     * 
     */
    delete<T extends HotelDeleteArgs>(args: SelectSubset<T, HotelDeleteArgs<ExtArgs>>): Prisma__HotelClient<$Result.GetResult<Prisma.$HotelPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Hotel.
     * @param {HotelUpdateArgs} args - Arguments to update one Hotel.
     * @example
     * // Update one Hotel
     * const hotel = await prisma.hotel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HotelUpdateArgs>(args: SelectSubset<T, HotelUpdateArgs<ExtArgs>>): Prisma__HotelClient<$Result.GetResult<Prisma.$HotelPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Hotels.
     * @param {HotelDeleteManyArgs} args - Arguments to filter Hotels to delete.
     * @example
     * // Delete a few Hotels
     * const { count } = await prisma.hotel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HotelDeleteManyArgs>(args?: SelectSubset<T, HotelDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hotels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Hotels
     * const hotel = await prisma.hotel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HotelUpdateManyArgs>(args: SelectSubset<T, HotelUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hotels and returns the data updated in the database.
     * @param {HotelUpdateManyAndReturnArgs} args - Arguments to update many Hotels.
     * @example
     * // Update many Hotels
     * const hotel = await prisma.hotel.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Hotels and only return the `id`
     * const hotelWithIdOnly = await prisma.hotel.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends HotelUpdateManyAndReturnArgs>(args: SelectSubset<T, HotelUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HotelPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Hotel.
     * @param {HotelUpsertArgs} args - Arguments to update or create a Hotel.
     * @example
     * // Update or create a Hotel
     * const hotel = await prisma.hotel.upsert({
     *   create: {
     *     // ... data to create a Hotel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Hotel we want to update
     *   }
     * })
     */
    upsert<T extends HotelUpsertArgs>(args: SelectSubset<T, HotelUpsertArgs<ExtArgs>>): Prisma__HotelClient<$Result.GetResult<Prisma.$HotelPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Hotels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotelCountArgs} args - Arguments to filter Hotels to count.
     * @example
     * // Count the number of Hotels
     * const count = await prisma.hotel.count({
     *   where: {
     *     // ... the filter for the Hotels we want to count
     *   }
     * })
    **/
    count<T extends HotelCountArgs>(
      args?: Subset<T, HotelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HotelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Hotel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HotelAggregateArgs>(args: Subset<T, HotelAggregateArgs>): Prisma.PrismaPromise<GetHotelAggregateType<T>>

    /**
     * Group by Hotel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotelGroupByArgs} args - Group by arguments.
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
      T extends HotelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HotelGroupByArgs['orderBy'] }
        : { orderBy?: HotelGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HotelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHotelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Hotel model
   */
  readonly fields: HotelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Hotel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HotelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    fairs<T extends Hotel$fairsArgs<ExtArgs> = {}>(args?: Subset<T, Hotel$fairsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FairPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Hotel model
   */
  interface HotelFieldRefs {
    readonly id: FieldRef<"Hotel", 'String'>
    readonly name: FieldRef<"Hotel", 'String'>
    readonly description: FieldRef<"Hotel", 'String'>
    readonly images: FieldRef<"Hotel", 'String[]'>
    readonly createdAt: FieldRef<"Hotel", 'DateTime'>
    readonly updatedAt: FieldRef<"Hotel", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Hotel findUnique
   */
  export type HotelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotel
     */
    select?: HotelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hotel
     */
    omit?: HotelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelInclude<ExtArgs> | null
    /**
     * Filter, which Hotel to fetch.
     */
    where: HotelWhereUniqueInput
  }

  /**
   * Hotel findUniqueOrThrow
   */
  export type HotelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotel
     */
    select?: HotelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hotel
     */
    omit?: HotelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelInclude<ExtArgs> | null
    /**
     * Filter, which Hotel to fetch.
     */
    where: HotelWhereUniqueInput
  }

  /**
   * Hotel findFirst
   */
  export type HotelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotel
     */
    select?: HotelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hotel
     */
    omit?: HotelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelInclude<ExtArgs> | null
    /**
     * Filter, which Hotel to fetch.
     */
    where?: HotelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hotels to fetch.
     */
    orderBy?: HotelOrderByWithRelationInput | HotelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Hotels.
     */
    cursor?: HotelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hotels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hotels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Hotels.
     */
    distinct?: HotelScalarFieldEnum | HotelScalarFieldEnum[]
  }

  /**
   * Hotel findFirstOrThrow
   */
  export type HotelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotel
     */
    select?: HotelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hotel
     */
    omit?: HotelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelInclude<ExtArgs> | null
    /**
     * Filter, which Hotel to fetch.
     */
    where?: HotelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hotels to fetch.
     */
    orderBy?: HotelOrderByWithRelationInput | HotelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Hotels.
     */
    cursor?: HotelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hotels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hotels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Hotels.
     */
    distinct?: HotelScalarFieldEnum | HotelScalarFieldEnum[]
  }

  /**
   * Hotel findMany
   */
  export type HotelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotel
     */
    select?: HotelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hotel
     */
    omit?: HotelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelInclude<ExtArgs> | null
    /**
     * Filter, which Hotels to fetch.
     */
    where?: HotelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hotels to fetch.
     */
    orderBy?: HotelOrderByWithRelationInput | HotelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Hotels.
     */
    cursor?: HotelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hotels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hotels.
     */
    skip?: number
    distinct?: HotelScalarFieldEnum | HotelScalarFieldEnum[]
  }

  /**
   * Hotel create
   */
  export type HotelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotel
     */
    select?: HotelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hotel
     */
    omit?: HotelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelInclude<ExtArgs> | null
    /**
     * The data needed to create a Hotel.
     */
    data: XOR<HotelCreateInput, HotelUncheckedCreateInput>
  }

  /**
   * Hotel createMany
   */
  export type HotelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Hotels.
     */
    data: HotelCreateManyInput | HotelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Hotel createManyAndReturn
   */
  export type HotelCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotel
     */
    select?: HotelSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Hotel
     */
    omit?: HotelOmit<ExtArgs> | null
    /**
     * The data used to create many Hotels.
     */
    data: HotelCreateManyInput | HotelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Hotel update
   */
  export type HotelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotel
     */
    select?: HotelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hotel
     */
    omit?: HotelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelInclude<ExtArgs> | null
    /**
     * The data needed to update a Hotel.
     */
    data: XOR<HotelUpdateInput, HotelUncheckedUpdateInput>
    /**
     * Choose, which Hotel to update.
     */
    where: HotelWhereUniqueInput
  }

  /**
   * Hotel updateMany
   */
  export type HotelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Hotels.
     */
    data: XOR<HotelUpdateManyMutationInput, HotelUncheckedUpdateManyInput>
    /**
     * Filter which Hotels to update
     */
    where?: HotelWhereInput
    /**
     * Limit how many Hotels to update.
     */
    limit?: number
  }

  /**
   * Hotel updateManyAndReturn
   */
  export type HotelUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotel
     */
    select?: HotelSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Hotel
     */
    omit?: HotelOmit<ExtArgs> | null
    /**
     * The data used to update Hotels.
     */
    data: XOR<HotelUpdateManyMutationInput, HotelUncheckedUpdateManyInput>
    /**
     * Filter which Hotels to update
     */
    where?: HotelWhereInput
    /**
     * Limit how many Hotels to update.
     */
    limit?: number
  }

  /**
   * Hotel upsert
   */
  export type HotelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotel
     */
    select?: HotelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hotel
     */
    omit?: HotelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelInclude<ExtArgs> | null
    /**
     * The filter to search for the Hotel to update in case it exists.
     */
    where: HotelWhereUniqueInput
    /**
     * In case the Hotel found by the `where` argument doesn't exist, create a new Hotel with this data.
     */
    create: XOR<HotelCreateInput, HotelUncheckedCreateInput>
    /**
     * In case the Hotel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HotelUpdateInput, HotelUncheckedUpdateInput>
  }

  /**
   * Hotel delete
   */
  export type HotelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotel
     */
    select?: HotelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hotel
     */
    omit?: HotelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelInclude<ExtArgs> | null
    /**
     * Filter which Hotel to delete.
     */
    where: HotelWhereUniqueInput
  }

  /**
   * Hotel deleteMany
   */
  export type HotelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Hotels to delete
     */
    where?: HotelWhereInput
    /**
     * Limit how many Hotels to delete.
     */
    limit?: number
  }

  /**
   * Hotel.fairs
   */
  export type Hotel$fairsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fair
     */
    select?: FairSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fair
     */
    omit?: FairOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FairInclude<ExtArgs> | null
    where?: FairWhereInput
    orderBy?: FairOrderByWithRelationInput | FairOrderByWithRelationInput[]
    cursor?: FairWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FairScalarFieldEnum | FairScalarFieldEnum[]
  }

  /**
   * Hotel without action
   */
  export type HotelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotel
     */
    select?: HotelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hotel
     */
    omit?: HotelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelInclude<ExtArgs> | null
  }


  /**
   * Model FairImages
   */

  export type AggregateFairImages = {
    _count: FairImagesCountAggregateOutputType | null
    _min: FairImagesMinAggregateOutputType | null
    _max: FairImagesMaxAggregateOutputType | null
  }

  export type FairImagesMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FairImagesMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FairImagesCountAggregateOutputType = {
    id: number
    name: number
    description: number
    images: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FairImagesMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FairImagesMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FairImagesCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    images?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FairImagesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FairImages to aggregate.
     */
    where?: FairImagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FairImages to fetch.
     */
    orderBy?: FairImagesOrderByWithRelationInput | FairImagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FairImagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FairImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FairImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FairImages
    **/
    _count?: true | FairImagesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FairImagesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FairImagesMaxAggregateInputType
  }

  export type GetFairImagesAggregateType<T extends FairImagesAggregateArgs> = {
        [P in keyof T & keyof AggregateFairImages]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFairImages[P]>
      : GetScalarType<T[P], AggregateFairImages[P]>
  }




  export type FairImagesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FairImagesWhereInput
    orderBy?: FairImagesOrderByWithAggregationInput | FairImagesOrderByWithAggregationInput[]
    by: FairImagesScalarFieldEnum[] | FairImagesScalarFieldEnum
    having?: FairImagesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FairImagesCountAggregateInputType | true
    _min?: FairImagesMinAggregateInputType
    _max?: FairImagesMaxAggregateInputType
  }

  export type FairImagesGroupByOutputType = {
    id: string
    name: string
    description: string
    images: string[]
    createdAt: Date
    updatedAt: Date
    _count: FairImagesCountAggregateOutputType | null
    _min: FairImagesMinAggregateOutputType | null
    _max: FairImagesMaxAggregateOutputType | null
  }

  type GetFairImagesGroupByPayload<T extends FairImagesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FairImagesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FairImagesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FairImagesGroupByOutputType[P]>
            : GetScalarType<T[P], FairImagesGroupByOutputType[P]>
        }
      >
    >


  export type FairImagesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    images?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    fairs?: boolean | FairImages$fairsArgs<ExtArgs>
    _count?: boolean | FairImagesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fairImages"]>

  export type FairImagesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    images?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["fairImages"]>

  export type FairImagesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    images?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["fairImages"]>

  export type FairImagesSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    images?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FairImagesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "images" | "createdAt" | "updatedAt", ExtArgs["result"]["fairImages"]>
  export type FairImagesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fairs?: boolean | FairImages$fairsArgs<ExtArgs>
    _count?: boolean | FairImagesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FairImagesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type FairImagesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $FairImagesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FairImages"
    objects: {
      fairs: Prisma.$FairPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string
      images: string[]
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["fairImages"]>
    composites: {}
  }

  type FairImagesGetPayload<S extends boolean | null | undefined | FairImagesDefaultArgs> = $Result.GetResult<Prisma.$FairImagesPayload, S>

  type FairImagesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FairImagesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FairImagesCountAggregateInputType | true
    }

  export interface FairImagesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FairImages'], meta: { name: 'FairImages' } }
    /**
     * Find zero or one FairImages that matches the filter.
     * @param {FairImagesFindUniqueArgs} args - Arguments to find a FairImages
     * @example
     * // Get one FairImages
     * const fairImages = await prisma.fairImages.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FairImagesFindUniqueArgs>(args: SelectSubset<T, FairImagesFindUniqueArgs<ExtArgs>>): Prisma__FairImagesClient<$Result.GetResult<Prisma.$FairImagesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FairImages that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FairImagesFindUniqueOrThrowArgs} args - Arguments to find a FairImages
     * @example
     * // Get one FairImages
     * const fairImages = await prisma.fairImages.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FairImagesFindUniqueOrThrowArgs>(args: SelectSubset<T, FairImagesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FairImagesClient<$Result.GetResult<Prisma.$FairImagesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FairImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FairImagesFindFirstArgs} args - Arguments to find a FairImages
     * @example
     * // Get one FairImages
     * const fairImages = await prisma.fairImages.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FairImagesFindFirstArgs>(args?: SelectSubset<T, FairImagesFindFirstArgs<ExtArgs>>): Prisma__FairImagesClient<$Result.GetResult<Prisma.$FairImagesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FairImages that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FairImagesFindFirstOrThrowArgs} args - Arguments to find a FairImages
     * @example
     * // Get one FairImages
     * const fairImages = await prisma.fairImages.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FairImagesFindFirstOrThrowArgs>(args?: SelectSubset<T, FairImagesFindFirstOrThrowArgs<ExtArgs>>): Prisma__FairImagesClient<$Result.GetResult<Prisma.$FairImagesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FairImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FairImagesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FairImages
     * const fairImages = await prisma.fairImages.findMany()
     * 
     * // Get first 10 FairImages
     * const fairImages = await prisma.fairImages.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fairImagesWithIdOnly = await prisma.fairImages.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FairImagesFindManyArgs>(args?: SelectSubset<T, FairImagesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FairImagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FairImages.
     * @param {FairImagesCreateArgs} args - Arguments to create a FairImages.
     * @example
     * // Create one FairImages
     * const FairImages = await prisma.fairImages.create({
     *   data: {
     *     // ... data to create a FairImages
     *   }
     * })
     * 
     */
    create<T extends FairImagesCreateArgs>(args: SelectSubset<T, FairImagesCreateArgs<ExtArgs>>): Prisma__FairImagesClient<$Result.GetResult<Prisma.$FairImagesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FairImages.
     * @param {FairImagesCreateManyArgs} args - Arguments to create many FairImages.
     * @example
     * // Create many FairImages
     * const fairImages = await prisma.fairImages.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FairImagesCreateManyArgs>(args?: SelectSubset<T, FairImagesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FairImages and returns the data saved in the database.
     * @param {FairImagesCreateManyAndReturnArgs} args - Arguments to create many FairImages.
     * @example
     * // Create many FairImages
     * const fairImages = await prisma.fairImages.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FairImages and only return the `id`
     * const fairImagesWithIdOnly = await prisma.fairImages.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FairImagesCreateManyAndReturnArgs>(args?: SelectSubset<T, FairImagesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FairImagesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FairImages.
     * @param {FairImagesDeleteArgs} args - Arguments to delete one FairImages.
     * @example
     * // Delete one FairImages
     * const FairImages = await prisma.fairImages.delete({
     *   where: {
     *     // ... filter to delete one FairImages
     *   }
     * })
     * 
     */
    delete<T extends FairImagesDeleteArgs>(args: SelectSubset<T, FairImagesDeleteArgs<ExtArgs>>): Prisma__FairImagesClient<$Result.GetResult<Prisma.$FairImagesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FairImages.
     * @param {FairImagesUpdateArgs} args - Arguments to update one FairImages.
     * @example
     * // Update one FairImages
     * const fairImages = await prisma.fairImages.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FairImagesUpdateArgs>(args: SelectSubset<T, FairImagesUpdateArgs<ExtArgs>>): Prisma__FairImagesClient<$Result.GetResult<Prisma.$FairImagesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FairImages.
     * @param {FairImagesDeleteManyArgs} args - Arguments to filter FairImages to delete.
     * @example
     * // Delete a few FairImages
     * const { count } = await prisma.fairImages.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FairImagesDeleteManyArgs>(args?: SelectSubset<T, FairImagesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FairImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FairImagesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FairImages
     * const fairImages = await prisma.fairImages.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FairImagesUpdateManyArgs>(args: SelectSubset<T, FairImagesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FairImages and returns the data updated in the database.
     * @param {FairImagesUpdateManyAndReturnArgs} args - Arguments to update many FairImages.
     * @example
     * // Update many FairImages
     * const fairImages = await prisma.fairImages.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FairImages and only return the `id`
     * const fairImagesWithIdOnly = await prisma.fairImages.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FairImagesUpdateManyAndReturnArgs>(args: SelectSubset<T, FairImagesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FairImagesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FairImages.
     * @param {FairImagesUpsertArgs} args - Arguments to update or create a FairImages.
     * @example
     * // Update or create a FairImages
     * const fairImages = await prisma.fairImages.upsert({
     *   create: {
     *     // ... data to create a FairImages
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FairImages we want to update
     *   }
     * })
     */
    upsert<T extends FairImagesUpsertArgs>(args: SelectSubset<T, FairImagesUpsertArgs<ExtArgs>>): Prisma__FairImagesClient<$Result.GetResult<Prisma.$FairImagesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FairImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FairImagesCountArgs} args - Arguments to filter FairImages to count.
     * @example
     * // Count the number of FairImages
     * const count = await prisma.fairImages.count({
     *   where: {
     *     // ... the filter for the FairImages we want to count
     *   }
     * })
    **/
    count<T extends FairImagesCountArgs>(
      args?: Subset<T, FairImagesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FairImagesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FairImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FairImagesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FairImagesAggregateArgs>(args: Subset<T, FairImagesAggregateArgs>): Prisma.PrismaPromise<GetFairImagesAggregateType<T>>

    /**
     * Group by FairImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FairImagesGroupByArgs} args - Group by arguments.
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
      T extends FairImagesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FairImagesGroupByArgs['orderBy'] }
        : { orderBy?: FairImagesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FairImagesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFairImagesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FairImages model
   */
  readonly fields: FairImagesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FairImages.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FairImagesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    fairs<T extends FairImages$fairsArgs<ExtArgs> = {}>(args?: Subset<T, FairImages$fairsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FairPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the FairImages model
   */
  interface FairImagesFieldRefs {
    readonly id: FieldRef<"FairImages", 'String'>
    readonly name: FieldRef<"FairImages", 'String'>
    readonly description: FieldRef<"FairImages", 'String'>
    readonly images: FieldRef<"FairImages", 'String[]'>
    readonly createdAt: FieldRef<"FairImages", 'DateTime'>
    readonly updatedAt: FieldRef<"FairImages", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FairImages findUnique
   */
  export type FairImagesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FairImages
     */
    select?: FairImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FairImages
     */
    omit?: FairImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FairImagesInclude<ExtArgs> | null
    /**
     * Filter, which FairImages to fetch.
     */
    where: FairImagesWhereUniqueInput
  }

  /**
   * FairImages findUniqueOrThrow
   */
  export type FairImagesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FairImages
     */
    select?: FairImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FairImages
     */
    omit?: FairImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FairImagesInclude<ExtArgs> | null
    /**
     * Filter, which FairImages to fetch.
     */
    where: FairImagesWhereUniqueInput
  }

  /**
   * FairImages findFirst
   */
  export type FairImagesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FairImages
     */
    select?: FairImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FairImages
     */
    omit?: FairImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FairImagesInclude<ExtArgs> | null
    /**
     * Filter, which FairImages to fetch.
     */
    where?: FairImagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FairImages to fetch.
     */
    orderBy?: FairImagesOrderByWithRelationInput | FairImagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FairImages.
     */
    cursor?: FairImagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FairImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FairImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FairImages.
     */
    distinct?: FairImagesScalarFieldEnum | FairImagesScalarFieldEnum[]
  }

  /**
   * FairImages findFirstOrThrow
   */
  export type FairImagesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FairImages
     */
    select?: FairImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FairImages
     */
    omit?: FairImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FairImagesInclude<ExtArgs> | null
    /**
     * Filter, which FairImages to fetch.
     */
    where?: FairImagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FairImages to fetch.
     */
    orderBy?: FairImagesOrderByWithRelationInput | FairImagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FairImages.
     */
    cursor?: FairImagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FairImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FairImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FairImages.
     */
    distinct?: FairImagesScalarFieldEnum | FairImagesScalarFieldEnum[]
  }

  /**
   * FairImages findMany
   */
  export type FairImagesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FairImages
     */
    select?: FairImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FairImages
     */
    omit?: FairImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FairImagesInclude<ExtArgs> | null
    /**
     * Filter, which FairImages to fetch.
     */
    where?: FairImagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FairImages to fetch.
     */
    orderBy?: FairImagesOrderByWithRelationInput | FairImagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FairImages.
     */
    cursor?: FairImagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FairImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FairImages.
     */
    skip?: number
    distinct?: FairImagesScalarFieldEnum | FairImagesScalarFieldEnum[]
  }

  /**
   * FairImages create
   */
  export type FairImagesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FairImages
     */
    select?: FairImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FairImages
     */
    omit?: FairImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FairImagesInclude<ExtArgs> | null
    /**
     * The data needed to create a FairImages.
     */
    data: XOR<FairImagesCreateInput, FairImagesUncheckedCreateInput>
  }

  /**
   * FairImages createMany
   */
  export type FairImagesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FairImages.
     */
    data: FairImagesCreateManyInput | FairImagesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FairImages createManyAndReturn
   */
  export type FairImagesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FairImages
     */
    select?: FairImagesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FairImages
     */
    omit?: FairImagesOmit<ExtArgs> | null
    /**
     * The data used to create many FairImages.
     */
    data: FairImagesCreateManyInput | FairImagesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FairImages update
   */
  export type FairImagesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FairImages
     */
    select?: FairImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FairImages
     */
    omit?: FairImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FairImagesInclude<ExtArgs> | null
    /**
     * The data needed to update a FairImages.
     */
    data: XOR<FairImagesUpdateInput, FairImagesUncheckedUpdateInput>
    /**
     * Choose, which FairImages to update.
     */
    where: FairImagesWhereUniqueInput
  }

  /**
   * FairImages updateMany
   */
  export type FairImagesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FairImages.
     */
    data: XOR<FairImagesUpdateManyMutationInput, FairImagesUncheckedUpdateManyInput>
    /**
     * Filter which FairImages to update
     */
    where?: FairImagesWhereInput
    /**
     * Limit how many FairImages to update.
     */
    limit?: number
  }

  /**
   * FairImages updateManyAndReturn
   */
  export type FairImagesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FairImages
     */
    select?: FairImagesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FairImages
     */
    omit?: FairImagesOmit<ExtArgs> | null
    /**
     * The data used to update FairImages.
     */
    data: XOR<FairImagesUpdateManyMutationInput, FairImagesUncheckedUpdateManyInput>
    /**
     * Filter which FairImages to update
     */
    where?: FairImagesWhereInput
    /**
     * Limit how many FairImages to update.
     */
    limit?: number
  }

  /**
   * FairImages upsert
   */
  export type FairImagesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FairImages
     */
    select?: FairImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FairImages
     */
    omit?: FairImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FairImagesInclude<ExtArgs> | null
    /**
     * The filter to search for the FairImages to update in case it exists.
     */
    where: FairImagesWhereUniqueInput
    /**
     * In case the FairImages found by the `where` argument doesn't exist, create a new FairImages with this data.
     */
    create: XOR<FairImagesCreateInput, FairImagesUncheckedCreateInput>
    /**
     * In case the FairImages was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FairImagesUpdateInput, FairImagesUncheckedUpdateInput>
  }

  /**
   * FairImages delete
   */
  export type FairImagesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FairImages
     */
    select?: FairImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FairImages
     */
    omit?: FairImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FairImagesInclude<ExtArgs> | null
    /**
     * Filter which FairImages to delete.
     */
    where: FairImagesWhereUniqueInput
  }

  /**
   * FairImages deleteMany
   */
  export type FairImagesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FairImages to delete
     */
    where?: FairImagesWhereInput
    /**
     * Limit how many FairImages to delete.
     */
    limit?: number
  }

  /**
   * FairImages.fairs
   */
  export type FairImages$fairsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fair
     */
    select?: FairSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fair
     */
    omit?: FairOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FairInclude<ExtArgs> | null
    where?: FairWhereInput
    orderBy?: FairOrderByWithRelationInput | FairOrderByWithRelationInput[]
    cursor?: FairWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FairScalarFieldEnum | FairScalarFieldEnum[]
  }

  /**
   * FairImages without action
   */
  export type FairImagesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FairImages
     */
    select?: FairImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FairImages
     */
    omit?: FairImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FairImagesInclude<ExtArgs> | null
  }


  /**
   * Model TourImages
   */

  export type AggregateTourImages = {
    _count: TourImagesCountAggregateOutputType | null
    _min: TourImagesMinAggregateOutputType | null
    _max: TourImagesMaxAggregateOutputType | null
  }

  export type TourImagesMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TourImagesMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TourImagesCountAggregateOutputType = {
    id: number
    name: number
    description: number
    images: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TourImagesMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TourImagesMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TourImagesCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    images?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TourImagesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TourImages to aggregate.
     */
    where?: TourImagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TourImages to fetch.
     */
    orderBy?: TourImagesOrderByWithRelationInput | TourImagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TourImagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TourImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TourImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TourImages
    **/
    _count?: true | TourImagesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TourImagesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TourImagesMaxAggregateInputType
  }

  export type GetTourImagesAggregateType<T extends TourImagesAggregateArgs> = {
        [P in keyof T & keyof AggregateTourImages]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTourImages[P]>
      : GetScalarType<T[P], AggregateTourImages[P]>
  }




  export type TourImagesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TourImagesWhereInput
    orderBy?: TourImagesOrderByWithAggregationInput | TourImagesOrderByWithAggregationInput[]
    by: TourImagesScalarFieldEnum[] | TourImagesScalarFieldEnum
    having?: TourImagesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TourImagesCountAggregateInputType | true
    _min?: TourImagesMinAggregateInputType
    _max?: TourImagesMaxAggregateInputType
  }

  export type TourImagesGroupByOutputType = {
    id: string
    name: string
    description: string
    images: string[]
    createdAt: Date
    updatedAt: Date
    _count: TourImagesCountAggregateOutputType | null
    _min: TourImagesMinAggregateOutputType | null
    _max: TourImagesMaxAggregateOutputType | null
  }

  type GetTourImagesGroupByPayload<T extends TourImagesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TourImagesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TourImagesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TourImagesGroupByOutputType[P]>
            : GetScalarType<T[P], TourImagesGroupByOutputType[P]>
        }
      >
    >


  export type TourImagesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    images?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    fairs?: boolean | TourImages$fairsArgs<ExtArgs>
    _count?: boolean | TourImagesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tourImages"]>

  export type TourImagesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    images?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["tourImages"]>

  export type TourImagesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    images?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["tourImages"]>

  export type TourImagesSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    images?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TourImagesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "images" | "createdAt" | "updatedAt", ExtArgs["result"]["tourImages"]>
  export type TourImagesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fairs?: boolean | TourImages$fairsArgs<ExtArgs>
    _count?: boolean | TourImagesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TourImagesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TourImagesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TourImagesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TourImages"
    objects: {
      fairs: Prisma.$FairPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string
      images: string[]
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["tourImages"]>
    composites: {}
  }

  type TourImagesGetPayload<S extends boolean | null | undefined | TourImagesDefaultArgs> = $Result.GetResult<Prisma.$TourImagesPayload, S>

  type TourImagesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TourImagesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TourImagesCountAggregateInputType | true
    }

  export interface TourImagesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TourImages'], meta: { name: 'TourImages' } }
    /**
     * Find zero or one TourImages that matches the filter.
     * @param {TourImagesFindUniqueArgs} args - Arguments to find a TourImages
     * @example
     * // Get one TourImages
     * const tourImages = await prisma.tourImages.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TourImagesFindUniqueArgs>(args: SelectSubset<T, TourImagesFindUniqueArgs<ExtArgs>>): Prisma__TourImagesClient<$Result.GetResult<Prisma.$TourImagesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TourImages that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TourImagesFindUniqueOrThrowArgs} args - Arguments to find a TourImages
     * @example
     * // Get one TourImages
     * const tourImages = await prisma.tourImages.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TourImagesFindUniqueOrThrowArgs>(args: SelectSubset<T, TourImagesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TourImagesClient<$Result.GetResult<Prisma.$TourImagesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TourImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourImagesFindFirstArgs} args - Arguments to find a TourImages
     * @example
     * // Get one TourImages
     * const tourImages = await prisma.tourImages.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TourImagesFindFirstArgs>(args?: SelectSubset<T, TourImagesFindFirstArgs<ExtArgs>>): Prisma__TourImagesClient<$Result.GetResult<Prisma.$TourImagesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TourImages that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourImagesFindFirstOrThrowArgs} args - Arguments to find a TourImages
     * @example
     * // Get one TourImages
     * const tourImages = await prisma.tourImages.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TourImagesFindFirstOrThrowArgs>(args?: SelectSubset<T, TourImagesFindFirstOrThrowArgs<ExtArgs>>): Prisma__TourImagesClient<$Result.GetResult<Prisma.$TourImagesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TourImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourImagesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TourImages
     * const tourImages = await prisma.tourImages.findMany()
     * 
     * // Get first 10 TourImages
     * const tourImages = await prisma.tourImages.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tourImagesWithIdOnly = await prisma.tourImages.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TourImagesFindManyArgs>(args?: SelectSubset<T, TourImagesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TourImagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TourImages.
     * @param {TourImagesCreateArgs} args - Arguments to create a TourImages.
     * @example
     * // Create one TourImages
     * const TourImages = await prisma.tourImages.create({
     *   data: {
     *     // ... data to create a TourImages
     *   }
     * })
     * 
     */
    create<T extends TourImagesCreateArgs>(args: SelectSubset<T, TourImagesCreateArgs<ExtArgs>>): Prisma__TourImagesClient<$Result.GetResult<Prisma.$TourImagesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TourImages.
     * @param {TourImagesCreateManyArgs} args - Arguments to create many TourImages.
     * @example
     * // Create many TourImages
     * const tourImages = await prisma.tourImages.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TourImagesCreateManyArgs>(args?: SelectSubset<T, TourImagesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TourImages and returns the data saved in the database.
     * @param {TourImagesCreateManyAndReturnArgs} args - Arguments to create many TourImages.
     * @example
     * // Create many TourImages
     * const tourImages = await prisma.tourImages.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TourImages and only return the `id`
     * const tourImagesWithIdOnly = await prisma.tourImages.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TourImagesCreateManyAndReturnArgs>(args?: SelectSubset<T, TourImagesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TourImagesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TourImages.
     * @param {TourImagesDeleteArgs} args - Arguments to delete one TourImages.
     * @example
     * // Delete one TourImages
     * const TourImages = await prisma.tourImages.delete({
     *   where: {
     *     // ... filter to delete one TourImages
     *   }
     * })
     * 
     */
    delete<T extends TourImagesDeleteArgs>(args: SelectSubset<T, TourImagesDeleteArgs<ExtArgs>>): Prisma__TourImagesClient<$Result.GetResult<Prisma.$TourImagesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TourImages.
     * @param {TourImagesUpdateArgs} args - Arguments to update one TourImages.
     * @example
     * // Update one TourImages
     * const tourImages = await prisma.tourImages.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TourImagesUpdateArgs>(args: SelectSubset<T, TourImagesUpdateArgs<ExtArgs>>): Prisma__TourImagesClient<$Result.GetResult<Prisma.$TourImagesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TourImages.
     * @param {TourImagesDeleteManyArgs} args - Arguments to filter TourImages to delete.
     * @example
     * // Delete a few TourImages
     * const { count } = await prisma.tourImages.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TourImagesDeleteManyArgs>(args?: SelectSubset<T, TourImagesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TourImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourImagesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TourImages
     * const tourImages = await prisma.tourImages.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TourImagesUpdateManyArgs>(args: SelectSubset<T, TourImagesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TourImages and returns the data updated in the database.
     * @param {TourImagesUpdateManyAndReturnArgs} args - Arguments to update many TourImages.
     * @example
     * // Update many TourImages
     * const tourImages = await prisma.tourImages.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TourImages and only return the `id`
     * const tourImagesWithIdOnly = await prisma.tourImages.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TourImagesUpdateManyAndReturnArgs>(args: SelectSubset<T, TourImagesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TourImagesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TourImages.
     * @param {TourImagesUpsertArgs} args - Arguments to update or create a TourImages.
     * @example
     * // Update or create a TourImages
     * const tourImages = await prisma.tourImages.upsert({
     *   create: {
     *     // ... data to create a TourImages
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TourImages we want to update
     *   }
     * })
     */
    upsert<T extends TourImagesUpsertArgs>(args: SelectSubset<T, TourImagesUpsertArgs<ExtArgs>>): Prisma__TourImagesClient<$Result.GetResult<Prisma.$TourImagesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TourImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourImagesCountArgs} args - Arguments to filter TourImages to count.
     * @example
     * // Count the number of TourImages
     * const count = await prisma.tourImages.count({
     *   where: {
     *     // ... the filter for the TourImages we want to count
     *   }
     * })
    **/
    count<T extends TourImagesCountArgs>(
      args?: Subset<T, TourImagesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TourImagesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TourImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourImagesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TourImagesAggregateArgs>(args: Subset<T, TourImagesAggregateArgs>): Prisma.PrismaPromise<GetTourImagesAggregateType<T>>

    /**
     * Group by TourImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourImagesGroupByArgs} args - Group by arguments.
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
      T extends TourImagesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TourImagesGroupByArgs['orderBy'] }
        : { orderBy?: TourImagesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TourImagesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTourImagesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TourImages model
   */
  readonly fields: TourImagesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TourImages.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TourImagesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    fairs<T extends TourImages$fairsArgs<ExtArgs> = {}>(args?: Subset<T, TourImages$fairsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FairPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the TourImages model
   */
  interface TourImagesFieldRefs {
    readonly id: FieldRef<"TourImages", 'String'>
    readonly name: FieldRef<"TourImages", 'String'>
    readonly description: FieldRef<"TourImages", 'String'>
    readonly images: FieldRef<"TourImages", 'String[]'>
    readonly createdAt: FieldRef<"TourImages", 'DateTime'>
    readonly updatedAt: FieldRef<"TourImages", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TourImages findUnique
   */
  export type TourImagesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourImages
     */
    select?: TourImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourImages
     */
    omit?: TourImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourImagesInclude<ExtArgs> | null
    /**
     * Filter, which TourImages to fetch.
     */
    where: TourImagesWhereUniqueInput
  }

  /**
   * TourImages findUniqueOrThrow
   */
  export type TourImagesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourImages
     */
    select?: TourImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourImages
     */
    omit?: TourImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourImagesInclude<ExtArgs> | null
    /**
     * Filter, which TourImages to fetch.
     */
    where: TourImagesWhereUniqueInput
  }

  /**
   * TourImages findFirst
   */
  export type TourImagesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourImages
     */
    select?: TourImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourImages
     */
    omit?: TourImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourImagesInclude<ExtArgs> | null
    /**
     * Filter, which TourImages to fetch.
     */
    where?: TourImagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TourImages to fetch.
     */
    orderBy?: TourImagesOrderByWithRelationInput | TourImagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TourImages.
     */
    cursor?: TourImagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TourImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TourImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TourImages.
     */
    distinct?: TourImagesScalarFieldEnum | TourImagesScalarFieldEnum[]
  }

  /**
   * TourImages findFirstOrThrow
   */
  export type TourImagesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourImages
     */
    select?: TourImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourImages
     */
    omit?: TourImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourImagesInclude<ExtArgs> | null
    /**
     * Filter, which TourImages to fetch.
     */
    where?: TourImagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TourImages to fetch.
     */
    orderBy?: TourImagesOrderByWithRelationInput | TourImagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TourImages.
     */
    cursor?: TourImagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TourImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TourImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TourImages.
     */
    distinct?: TourImagesScalarFieldEnum | TourImagesScalarFieldEnum[]
  }

  /**
   * TourImages findMany
   */
  export type TourImagesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourImages
     */
    select?: TourImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourImages
     */
    omit?: TourImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourImagesInclude<ExtArgs> | null
    /**
     * Filter, which TourImages to fetch.
     */
    where?: TourImagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TourImages to fetch.
     */
    orderBy?: TourImagesOrderByWithRelationInput | TourImagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TourImages.
     */
    cursor?: TourImagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TourImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TourImages.
     */
    skip?: number
    distinct?: TourImagesScalarFieldEnum | TourImagesScalarFieldEnum[]
  }

  /**
   * TourImages create
   */
  export type TourImagesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourImages
     */
    select?: TourImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourImages
     */
    omit?: TourImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourImagesInclude<ExtArgs> | null
    /**
     * The data needed to create a TourImages.
     */
    data: XOR<TourImagesCreateInput, TourImagesUncheckedCreateInput>
  }

  /**
   * TourImages createMany
   */
  export type TourImagesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TourImages.
     */
    data: TourImagesCreateManyInput | TourImagesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TourImages createManyAndReturn
   */
  export type TourImagesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourImages
     */
    select?: TourImagesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TourImages
     */
    omit?: TourImagesOmit<ExtArgs> | null
    /**
     * The data used to create many TourImages.
     */
    data: TourImagesCreateManyInput | TourImagesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TourImages update
   */
  export type TourImagesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourImages
     */
    select?: TourImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourImages
     */
    omit?: TourImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourImagesInclude<ExtArgs> | null
    /**
     * The data needed to update a TourImages.
     */
    data: XOR<TourImagesUpdateInput, TourImagesUncheckedUpdateInput>
    /**
     * Choose, which TourImages to update.
     */
    where: TourImagesWhereUniqueInput
  }

  /**
   * TourImages updateMany
   */
  export type TourImagesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TourImages.
     */
    data: XOR<TourImagesUpdateManyMutationInput, TourImagesUncheckedUpdateManyInput>
    /**
     * Filter which TourImages to update
     */
    where?: TourImagesWhereInput
    /**
     * Limit how many TourImages to update.
     */
    limit?: number
  }

  /**
   * TourImages updateManyAndReturn
   */
  export type TourImagesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourImages
     */
    select?: TourImagesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TourImages
     */
    omit?: TourImagesOmit<ExtArgs> | null
    /**
     * The data used to update TourImages.
     */
    data: XOR<TourImagesUpdateManyMutationInput, TourImagesUncheckedUpdateManyInput>
    /**
     * Filter which TourImages to update
     */
    where?: TourImagesWhereInput
    /**
     * Limit how many TourImages to update.
     */
    limit?: number
  }

  /**
   * TourImages upsert
   */
  export type TourImagesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourImages
     */
    select?: TourImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourImages
     */
    omit?: TourImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourImagesInclude<ExtArgs> | null
    /**
     * The filter to search for the TourImages to update in case it exists.
     */
    where: TourImagesWhereUniqueInput
    /**
     * In case the TourImages found by the `where` argument doesn't exist, create a new TourImages with this data.
     */
    create: XOR<TourImagesCreateInput, TourImagesUncheckedCreateInput>
    /**
     * In case the TourImages was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TourImagesUpdateInput, TourImagesUncheckedUpdateInput>
  }

  /**
   * TourImages delete
   */
  export type TourImagesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourImages
     */
    select?: TourImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourImages
     */
    omit?: TourImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourImagesInclude<ExtArgs> | null
    /**
     * Filter which TourImages to delete.
     */
    where: TourImagesWhereUniqueInput
  }

  /**
   * TourImages deleteMany
   */
  export type TourImagesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TourImages to delete
     */
    where?: TourImagesWhereInput
    /**
     * Limit how many TourImages to delete.
     */
    limit?: number
  }

  /**
   * TourImages.fairs
   */
  export type TourImages$fairsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fair
     */
    select?: FairSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fair
     */
    omit?: FairOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FairInclude<ExtArgs> | null
    where?: FairWhereInput
    orderBy?: FairOrderByWithRelationInput | FairOrderByWithRelationInput[]
    cursor?: FairWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FairScalarFieldEnum | FairScalarFieldEnum[]
  }

  /**
   * TourImages without action
   */
  export type TourImagesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourImages
     */
    select?: TourImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourImages
     */
    omit?: TourImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourImagesInclude<ExtArgs> | null
  }


  /**
   * Model Message
   */

  export type AggregateMessage = {
    _count: MessageCountAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  export type MessageMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    subject: string | null
    contactMessage: string | null
    from: string | null
    isRead: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MessageMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    subject: string | null
    contactMessage: string | null
    from: string | null
    isRead: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MessageCountAggregateOutputType = {
    id: number
    name: number
    email: number
    subject: number
    contactMessage: number
    from: number
    isRead: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MessageMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    subject?: true
    contactMessage?: true
    from?: true
    isRead?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MessageMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    subject?: true
    contactMessage?: true
    from?: true
    isRead?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MessageCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    subject?: true
    contactMessage?: true
    from?: true
    isRead?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Message to aggregate.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Messages
    **/
    _count?: true | MessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessageMaxAggregateInputType
  }

  export type GetMessageAggregateType<T extends MessageAggregateArgs> = {
        [P in keyof T & keyof AggregateMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessage[P]>
      : GetScalarType<T[P], AggregateMessage[P]>
  }




  export type MessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithAggregationInput | MessageOrderByWithAggregationInput[]
    by: MessageScalarFieldEnum[] | MessageScalarFieldEnum
    having?: MessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessageCountAggregateInputType | true
    _min?: MessageMinAggregateInputType
    _max?: MessageMaxAggregateInputType
  }

  export type MessageGroupByOutputType = {
    id: string
    name: string
    email: string
    subject: string | null
    contactMessage: string | null
    from: string | null
    isRead: boolean
    createdAt: Date
    updatedAt: Date
    _count: MessageCountAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  type GetMessageGroupByPayload<T extends MessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessageGroupByOutputType[P]>
            : GetScalarType<T[P], MessageGroupByOutputType[P]>
        }
      >
    >


  export type MessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    subject?: boolean
    contactMessage?: boolean
    from?: boolean
    isRead?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["message"]>

  export type MessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    subject?: boolean
    contactMessage?: boolean
    from?: boolean
    isRead?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["message"]>

  export type MessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    subject?: boolean
    contactMessage?: boolean
    from?: boolean
    isRead?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["message"]>

  export type MessageSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    subject?: boolean
    contactMessage?: boolean
    from?: boolean
    isRead?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "subject" | "contactMessage" | "from" | "isRead" | "createdAt" | "updatedAt", ExtArgs["result"]["message"]>

  export type $MessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Message"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      subject: string | null
      contactMessage: string | null
      from: string | null
      isRead: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["message"]>
    composites: {}
  }

  type MessageGetPayload<S extends boolean | null | undefined | MessageDefaultArgs> = $Result.GetResult<Prisma.$MessagePayload, S>

  type MessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MessageCountAggregateInputType | true
    }

  export interface MessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Message'], meta: { name: 'Message' } }
    /**
     * Find zero or one Message that matches the filter.
     * @param {MessageFindUniqueArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MessageFindUniqueArgs>(args: SelectSubset<T, MessageFindUniqueArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Message that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MessageFindUniqueOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MessageFindUniqueOrThrowArgs>(args: SelectSubset<T, MessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MessageFindFirstArgs>(args?: SelectSubset<T, MessageFindFirstArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MessageFindFirstOrThrowArgs>(args?: SelectSubset<T, MessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Messages
     * const messages = await prisma.message.findMany()
     * 
     * // Get first 10 Messages
     * const messages = await prisma.message.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messageWithIdOnly = await prisma.message.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MessageFindManyArgs>(args?: SelectSubset<T, MessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Message.
     * @param {MessageCreateArgs} args - Arguments to create a Message.
     * @example
     * // Create one Message
     * const Message = await prisma.message.create({
     *   data: {
     *     // ... data to create a Message
     *   }
     * })
     * 
     */
    create<T extends MessageCreateArgs>(args: SelectSubset<T, MessageCreateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Messages.
     * @param {MessageCreateManyArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MessageCreateManyArgs>(args?: SelectSubset<T, MessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Messages and returns the data saved in the database.
     * @param {MessageCreateManyAndReturnArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Messages and only return the `id`
     * const messageWithIdOnly = await prisma.message.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MessageCreateManyAndReturnArgs>(args?: SelectSubset<T, MessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Message.
     * @param {MessageDeleteArgs} args - Arguments to delete one Message.
     * @example
     * // Delete one Message
     * const Message = await prisma.message.delete({
     *   where: {
     *     // ... filter to delete one Message
     *   }
     * })
     * 
     */
    delete<T extends MessageDeleteArgs>(args: SelectSubset<T, MessageDeleteArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Message.
     * @param {MessageUpdateArgs} args - Arguments to update one Message.
     * @example
     * // Update one Message
     * const message = await prisma.message.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MessageUpdateArgs>(args: SelectSubset<T, MessageUpdateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Messages.
     * @param {MessageDeleteManyArgs} args - Arguments to filter Messages to delete.
     * @example
     * // Delete a few Messages
     * const { count } = await prisma.message.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MessageDeleteManyArgs>(args?: SelectSubset<T, MessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MessageUpdateManyArgs>(args: SelectSubset<T, MessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages and returns the data updated in the database.
     * @param {MessageUpdateManyAndReturnArgs} args - Arguments to update many Messages.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Messages and only return the `id`
     * const messageWithIdOnly = await prisma.message.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MessageUpdateManyAndReturnArgs>(args: SelectSubset<T, MessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Message.
     * @param {MessageUpsertArgs} args - Arguments to update or create a Message.
     * @example
     * // Update or create a Message
     * const message = await prisma.message.upsert({
     *   create: {
     *     // ... data to create a Message
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Message we want to update
     *   }
     * })
     */
    upsert<T extends MessageUpsertArgs>(args: SelectSubset<T, MessageUpsertArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageCountArgs} args - Arguments to filter Messages to count.
     * @example
     * // Count the number of Messages
     * const count = await prisma.message.count({
     *   where: {
     *     // ... the filter for the Messages we want to count
     *   }
     * })
    **/
    count<T extends MessageCountArgs>(
      args?: Subset<T, MessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MessageAggregateArgs>(args: Subset<T, MessageAggregateArgs>): Prisma.PrismaPromise<GetMessageAggregateType<T>>

    /**
     * Group by Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageGroupByArgs} args - Group by arguments.
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
      T extends MessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessageGroupByArgs['orderBy'] }
        : { orderBy?: MessageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Message model
   */
  readonly fields: MessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Message.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Message model
   */
  interface MessageFieldRefs {
    readonly id: FieldRef<"Message", 'String'>
    readonly name: FieldRef<"Message", 'String'>
    readonly email: FieldRef<"Message", 'String'>
    readonly subject: FieldRef<"Message", 'String'>
    readonly contactMessage: FieldRef<"Message", 'String'>
    readonly from: FieldRef<"Message", 'String'>
    readonly isRead: FieldRef<"Message", 'Boolean'>
    readonly createdAt: FieldRef<"Message", 'DateTime'>
    readonly updatedAt: FieldRef<"Message", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Message findUnique
   */
  export type MessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findUniqueOrThrow
   */
  export type MessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findFirst
   */
  export type MessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findFirstOrThrow
   */
  export type MessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findMany
   */
  export type MessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Filter, which Messages to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message create
   */
  export type MessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The data needed to create a Message.
     */
    data: XOR<MessageCreateInput, MessageUncheckedCreateInput>
  }

  /**
   * Message createMany
   */
  export type MessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Message createManyAndReturn
   */
  export type MessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Message update
   */
  export type MessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The data needed to update a Message.
     */
    data: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
    /**
     * Choose, which Message to update.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message updateMany
   */
  export type MessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
  }

  /**
   * Message updateManyAndReturn
   */
  export type MessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
  }

  /**
   * Message upsert
   */
  export type MessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The filter to search for the Message to update in case it exists.
     */
    where: MessageWhereUniqueInput
    /**
     * In case the Message found by the `where` argument doesn't exist, create a new Message with this data.
     */
    create: XOR<MessageCreateInput, MessageUncheckedCreateInput>
    /**
     * In case the Message was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
  }

  /**
   * Message delete
   */
  export type MessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Filter which Message to delete.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message deleteMany
   */
  export type MessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Messages to delete
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to delete.
     */
    limit?: number
  }

  /**
   * Message without action
   */
  export type MessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
  }


  /**
   * Model SeoPage
   */

  export type AggregateSeoPage = {
    _count: SeoPageCountAggregateOutputType | null
    _min: SeoPageMinAggregateOutputType | null
    _max: SeoPageMaxAggregateOutputType | null
  }

  export type SeoPageMinAggregateOutputType = {
    id: string | null
    url: string | null
    title: string | null
    description: string | null
    keywords: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SeoPageMaxAggregateOutputType = {
    id: string | null
    url: string | null
    title: string | null
    description: string | null
    keywords: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SeoPageCountAggregateOutputType = {
    id: number
    url: number
    title: number
    description: number
    keywords: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SeoPageMinAggregateInputType = {
    id?: true
    url?: true
    title?: true
    description?: true
    keywords?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SeoPageMaxAggregateInputType = {
    id?: true
    url?: true
    title?: true
    description?: true
    keywords?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SeoPageCountAggregateInputType = {
    id?: true
    url?: true
    title?: true
    description?: true
    keywords?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SeoPageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SeoPage to aggregate.
     */
    where?: SeoPageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SeoPages to fetch.
     */
    orderBy?: SeoPageOrderByWithRelationInput | SeoPageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SeoPageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SeoPages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SeoPages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SeoPages
    **/
    _count?: true | SeoPageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SeoPageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SeoPageMaxAggregateInputType
  }

  export type GetSeoPageAggregateType<T extends SeoPageAggregateArgs> = {
        [P in keyof T & keyof AggregateSeoPage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSeoPage[P]>
      : GetScalarType<T[P], AggregateSeoPage[P]>
  }




  export type SeoPageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SeoPageWhereInput
    orderBy?: SeoPageOrderByWithAggregationInput | SeoPageOrderByWithAggregationInput[]
    by: SeoPageScalarFieldEnum[] | SeoPageScalarFieldEnum
    having?: SeoPageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SeoPageCountAggregateInputType | true
    _min?: SeoPageMinAggregateInputType
    _max?: SeoPageMaxAggregateInputType
  }

  export type SeoPageGroupByOutputType = {
    id: string
    url: string | null
    title: string | null
    description: string | null
    keywords: string | null
    createdAt: Date
    updatedAt: Date
    _count: SeoPageCountAggregateOutputType | null
    _min: SeoPageMinAggregateOutputType | null
    _max: SeoPageMaxAggregateOutputType | null
  }

  type GetSeoPageGroupByPayload<T extends SeoPageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SeoPageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SeoPageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SeoPageGroupByOutputType[P]>
            : GetScalarType<T[P], SeoPageGroupByOutputType[P]>
        }
      >
    >


  export type SeoPageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    title?: boolean
    description?: boolean
    keywords?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["seoPage"]>

  export type SeoPageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    title?: boolean
    description?: boolean
    keywords?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["seoPage"]>

  export type SeoPageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    title?: boolean
    description?: boolean
    keywords?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["seoPage"]>

  export type SeoPageSelectScalar = {
    id?: boolean
    url?: boolean
    title?: boolean
    description?: boolean
    keywords?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SeoPageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "url" | "title" | "description" | "keywords" | "createdAt" | "updatedAt", ExtArgs["result"]["seoPage"]>

  export type $SeoPagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SeoPage"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      url: string | null
      title: string | null
      description: string | null
      keywords: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["seoPage"]>
    composites: {}
  }

  type SeoPageGetPayload<S extends boolean | null | undefined | SeoPageDefaultArgs> = $Result.GetResult<Prisma.$SeoPagePayload, S>

  type SeoPageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SeoPageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SeoPageCountAggregateInputType | true
    }

  export interface SeoPageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SeoPage'], meta: { name: 'SeoPage' } }
    /**
     * Find zero or one SeoPage that matches the filter.
     * @param {SeoPageFindUniqueArgs} args - Arguments to find a SeoPage
     * @example
     * // Get one SeoPage
     * const seoPage = await prisma.seoPage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SeoPageFindUniqueArgs>(args: SelectSubset<T, SeoPageFindUniqueArgs<ExtArgs>>): Prisma__SeoPageClient<$Result.GetResult<Prisma.$SeoPagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SeoPage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SeoPageFindUniqueOrThrowArgs} args - Arguments to find a SeoPage
     * @example
     * // Get one SeoPage
     * const seoPage = await prisma.seoPage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SeoPageFindUniqueOrThrowArgs>(args: SelectSubset<T, SeoPageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SeoPageClient<$Result.GetResult<Prisma.$SeoPagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SeoPage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeoPageFindFirstArgs} args - Arguments to find a SeoPage
     * @example
     * // Get one SeoPage
     * const seoPage = await prisma.seoPage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SeoPageFindFirstArgs>(args?: SelectSubset<T, SeoPageFindFirstArgs<ExtArgs>>): Prisma__SeoPageClient<$Result.GetResult<Prisma.$SeoPagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SeoPage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeoPageFindFirstOrThrowArgs} args - Arguments to find a SeoPage
     * @example
     * // Get one SeoPage
     * const seoPage = await prisma.seoPage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SeoPageFindFirstOrThrowArgs>(args?: SelectSubset<T, SeoPageFindFirstOrThrowArgs<ExtArgs>>): Prisma__SeoPageClient<$Result.GetResult<Prisma.$SeoPagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SeoPages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeoPageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SeoPages
     * const seoPages = await prisma.seoPage.findMany()
     * 
     * // Get first 10 SeoPages
     * const seoPages = await prisma.seoPage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const seoPageWithIdOnly = await prisma.seoPage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SeoPageFindManyArgs>(args?: SelectSubset<T, SeoPageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeoPagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SeoPage.
     * @param {SeoPageCreateArgs} args - Arguments to create a SeoPage.
     * @example
     * // Create one SeoPage
     * const SeoPage = await prisma.seoPage.create({
     *   data: {
     *     // ... data to create a SeoPage
     *   }
     * })
     * 
     */
    create<T extends SeoPageCreateArgs>(args: SelectSubset<T, SeoPageCreateArgs<ExtArgs>>): Prisma__SeoPageClient<$Result.GetResult<Prisma.$SeoPagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SeoPages.
     * @param {SeoPageCreateManyArgs} args - Arguments to create many SeoPages.
     * @example
     * // Create many SeoPages
     * const seoPage = await prisma.seoPage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SeoPageCreateManyArgs>(args?: SelectSubset<T, SeoPageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SeoPages and returns the data saved in the database.
     * @param {SeoPageCreateManyAndReturnArgs} args - Arguments to create many SeoPages.
     * @example
     * // Create many SeoPages
     * const seoPage = await prisma.seoPage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SeoPages and only return the `id`
     * const seoPageWithIdOnly = await prisma.seoPage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SeoPageCreateManyAndReturnArgs>(args?: SelectSubset<T, SeoPageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeoPagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SeoPage.
     * @param {SeoPageDeleteArgs} args - Arguments to delete one SeoPage.
     * @example
     * // Delete one SeoPage
     * const SeoPage = await prisma.seoPage.delete({
     *   where: {
     *     // ... filter to delete one SeoPage
     *   }
     * })
     * 
     */
    delete<T extends SeoPageDeleteArgs>(args: SelectSubset<T, SeoPageDeleteArgs<ExtArgs>>): Prisma__SeoPageClient<$Result.GetResult<Prisma.$SeoPagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SeoPage.
     * @param {SeoPageUpdateArgs} args - Arguments to update one SeoPage.
     * @example
     * // Update one SeoPage
     * const seoPage = await prisma.seoPage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SeoPageUpdateArgs>(args: SelectSubset<T, SeoPageUpdateArgs<ExtArgs>>): Prisma__SeoPageClient<$Result.GetResult<Prisma.$SeoPagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SeoPages.
     * @param {SeoPageDeleteManyArgs} args - Arguments to filter SeoPages to delete.
     * @example
     * // Delete a few SeoPages
     * const { count } = await prisma.seoPage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SeoPageDeleteManyArgs>(args?: SelectSubset<T, SeoPageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SeoPages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeoPageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SeoPages
     * const seoPage = await prisma.seoPage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SeoPageUpdateManyArgs>(args: SelectSubset<T, SeoPageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SeoPages and returns the data updated in the database.
     * @param {SeoPageUpdateManyAndReturnArgs} args - Arguments to update many SeoPages.
     * @example
     * // Update many SeoPages
     * const seoPage = await prisma.seoPage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SeoPages and only return the `id`
     * const seoPageWithIdOnly = await prisma.seoPage.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SeoPageUpdateManyAndReturnArgs>(args: SelectSubset<T, SeoPageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeoPagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SeoPage.
     * @param {SeoPageUpsertArgs} args - Arguments to update or create a SeoPage.
     * @example
     * // Update or create a SeoPage
     * const seoPage = await prisma.seoPage.upsert({
     *   create: {
     *     // ... data to create a SeoPage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SeoPage we want to update
     *   }
     * })
     */
    upsert<T extends SeoPageUpsertArgs>(args: SelectSubset<T, SeoPageUpsertArgs<ExtArgs>>): Prisma__SeoPageClient<$Result.GetResult<Prisma.$SeoPagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SeoPages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeoPageCountArgs} args - Arguments to filter SeoPages to count.
     * @example
     * // Count the number of SeoPages
     * const count = await prisma.seoPage.count({
     *   where: {
     *     // ... the filter for the SeoPages we want to count
     *   }
     * })
    **/
    count<T extends SeoPageCountArgs>(
      args?: Subset<T, SeoPageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SeoPageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SeoPage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeoPageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SeoPageAggregateArgs>(args: Subset<T, SeoPageAggregateArgs>): Prisma.PrismaPromise<GetSeoPageAggregateType<T>>

    /**
     * Group by SeoPage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeoPageGroupByArgs} args - Group by arguments.
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
      T extends SeoPageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SeoPageGroupByArgs['orderBy'] }
        : { orderBy?: SeoPageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SeoPageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSeoPageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SeoPage model
   */
  readonly fields: SeoPageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SeoPage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SeoPageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the SeoPage model
   */
  interface SeoPageFieldRefs {
    readonly id: FieldRef<"SeoPage", 'String'>
    readonly url: FieldRef<"SeoPage", 'String'>
    readonly title: FieldRef<"SeoPage", 'String'>
    readonly description: FieldRef<"SeoPage", 'String'>
    readonly keywords: FieldRef<"SeoPage", 'String'>
    readonly createdAt: FieldRef<"SeoPage", 'DateTime'>
    readonly updatedAt: FieldRef<"SeoPage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SeoPage findUnique
   */
  export type SeoPageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeoPage
     */
    select?: SeoPageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeoPage
     */
    omit?: SeoPageOmit<ExtArgs> | null
    /**
     * Filter, which SeoPage to fetch.
     */
    where: SeoPageWhereUniqueInput
  }

  /**
   * SeoPage findUniqueOrThrow
   */
  export type SeoPageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeoPage
     */
    select?: SeoPageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeoPage
     */
    omit?: SeoPageOmit<ExtArgs> | null
    /**
     * Filter, which SeoPage to fetch.
     */
    where: SeoPageWhereUniqueInput
  }

  /**
   * SeoPage findFirst
   */
  export type SeoPageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeoPage
     */
    select?: SeoPageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeoPage
     */
    omit?: SeoPageOmit<ExtArgs> | null
    /**
     * Filter, which SeoPage to fetch.
     */
    where?: SeoPageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SeoPages to fetch.
     */
    orderBy?: SeoPageOrderByWithRelationInput | SeoPageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SeoPages.
     */
    cursor?: SeoPageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SeoPages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SeoPages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SeoPages.
     */
    distinct?: SeoPageScalarFieldEnum | SeoPageScalarFieldEnum[]
  }

  /**
   * SeoPage findFirstOrThrow
   */
  export type SeoPageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeoPage
     */
    select?: SeoPageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeoPage
     */
    omit?: SeoPageOmit<ExtArgs> | null
    /**
     * Filter, which SeoPage to fetch.
     */
    where?: SeoPageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SeoPages to fetch.
     */
    orderBy?: SeoPageOrderByWithRelationInput | SeoPageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SeoPages.
     */
    cursor?: SeoPageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SeoPages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SeoPages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SeoPages.
     */
    distinct?: SeoPageScalarFieldEnum | SeoPageScalarFieldEnum[]
  }

  /**
   * SeoPage findMany
   */
  export type SeoPageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeoPage
     */
    select?: SeoPageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeoPage
     */
    omit?: SeoPageOmit<ExtArgs> | null
    /**
     * Filter, which SeoPages to fetch.
     */
    where?: SeoPageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SeoPages to fetch.
     */
    orderBy?: SeoPageOrderByWithRelationInput | SeoPageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SeoPages.
     */
    cursor?: SeoPageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SeoPages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SeoPages.
     */
    skip?: number
    distinct?: SeoPageScalarFieldEnum | SeoPageScalarFieldEnum[]
  }

  /**
   * SeoPage create
   */
  export type SeoPageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeoPage
     */
    select?: SeoPageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeoPage
     */
    omit?: SeoPageOmit<ExtArgs> | null
    /**
     * The data needed to create a SeoPage.
     */
    data: XOR<SeoPageCreateInput, SeoPageUncheckedCreateInput>
  }

  /**
   * SeoPage createMany
   */
  export type SeoPageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SeoPages.
     */
    data: SeoPageCreateManyInput | SeoPageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SeoPage createManyAndReturn
   */
  export type SeoPageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeoPage
     */
    select?: SeoPageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SeoPage
     */
    omit?: SeoPageOmit<ExtArgs> | null
    /**
     * The data used to create many SeoPages.
     */
    data: SeoPageCreateManyInput | SeoPageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SeoPage update
   */
  export type SeoPageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeoPage
     */
    select?: SeoPageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeoPage
     */
    omit?: SeoPageOmit<ExtArgs> | null
    /**
     * The data needed to update a SeoPage.
     */
    data: XOR<SeoPageUpdateInput, SeoPageUncheckedUpdateInput>
    /**
     * Choose, which SeoPage to update.
     */
    where: SeoPageWhereUniqueInput
  }

  /**
   * SeoPage updateMany
   */
  export type SeoPageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SeoPages.
     */
    data: XOR<SeoPageUpdateManyMutationInput, SeoPageUncheckedUpdateManyInput>
    /**
     * Filter which SeoPages to update
     */
    where?: SeoPageWhereInput
    /**
     * Limit how many SeoPages to update.
     */
    limit?: number
  }

  /**
   * SeoPage updateManyAndReturn
   */
  export type SeoPageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeoPage
     */
    select?: SeoPageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SeoPage
     */
    omit?: SeoPageOmit<ExtArgs> | null
    /**
     * The data used to update SeoPages.
     */
    data: XOR<SeoPageUpdateManyMutationInput, SeoPageUncheckedUpdateManyInput>
    /**
     * Filter which SeoPages to update
     */
    where?: SeoPageWhereInput
    /**
     * Limit how many SeoPages to update.
     */
    limit?: number
  }

  /**
   * SeoPage upsert
   */
  export type SeoPageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeoPage
     */
    select?: SeoPageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeoPage
     */
    omit?: SeoPageOmit<ExtArgs> | null
    /**
     * The filter to search for the SeoPage to update in case it exists.
     */
    where: SeoPageWhereUniqueInput
    /**
     * In case the SeoPage found by the `where` argument doesn't exist, create a new SeoPage with this data.
     */
    create: XOR<SeoPageCreateInput, SeoPageUncheckedCreateInput>
    /**
     * In case the SeoPage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SeoPageUpdateInput, SeoPageUncheckedUpdateInput>
  }

  /**
   * SeoPage delete
   */
  export type SeoPageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeoPage
     */
    select?: SeoPageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeoPage
     */
    omit?: SeoPageOmit<ExtArgs> | null
    /**
     * Filter which SeoPage to delete.
     */
    where: SeoPageWhereUniqueInput
  }

  /**
   * SeoPage deleteMany
   */
  export type SeoPageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SeoPages to delete
     */
    where?: SeoPageWhereInput
    /**
     * Limit how many SeoPages to delete.
     */
    limit?: number
  }

  /**
   * SeoPage without action
   */
  export type SeoPageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeoPage
     */
    select?: SeoPageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeoPage
     */
    omit?: SeoPageOmit<ExtArgs> | null
  }


  /**
   * Model Campany
   */

  export type AggregateCampany = {
    _count: CampanyCountAggregateOutputType | null
    _min: CampanyMinAggregateOutputType | null
    _max: CampanyMaxAggregateOutputType | null
  }

  export type CampanyMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    isPublished: boolean | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CampanyMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    isPublished: boolean | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CampanyCountAggregateOutputType = {
    id: number
    name: number
    description: number
    isPublished: number
    image: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CampanyMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    isPublished?: true
    image?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CampanyMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    isPublished?: true
    image?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CampanyCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    isPublished?: true
    image?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CampanyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Campany to aggregate.
     */
    where?: CampanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Campanies to fetch.
     */
    orderBy?: CampanyOrderByWithRelationInput | CampanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CampanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Campanies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Campanies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Campanies
    **/
    _count?: true | CampanyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CampanyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CampanyMaxAggregateInputType
  }

  export type GetCampanyAggregateType<T extends CampanyAggregateArgs> = {
        [P in keyof T & keyof AggregateCampany]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCampany[P]>
      : GetScalarType<T[P], AggregateCampany[P]>
  }




  export type CampanyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CampanyWhereInput
    orderBy?: CampanyOrderByWithAggregationInput | CampanyOrderByWithAggregationInput[]
    by: CampanyScalarFieldEnum[] | CampanyScalarFieldEnum
    having?: CampanyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CampanyCountAggregateInputType | true
    _min?: CampanyMinAggregateInputType
    _max?: CampanyMaxAggregateInputType
  }

  export type CampanyGroupByOutputType = {
    id: string
    name: string
    description: string
    isPublished: boolean
    image: string
    createdAt: Date
    updatedAt: Date
    _count: CampanyCountAggregateOutputType | null
    _min: CampanyMinAggregateOutputType | null
    _max: CampanyMaxAggregateOutputType | null
  }

  type GetCampanyGroupByPayload<T extends CampanyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CampanyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CampanyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CampanyGroupByOutputType[P]>
            : GetScalarType<T[P], CampanyGroupByOutputType[P]>
        }
      >
    >


  export type CampanySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    isPublished?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["campany"]>

  export type CampanySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    isPublished?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["campany"]>

  export type CampanySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    isPublished?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["campany"]>

  export type CampanySelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    isPublished?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CampanyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "isPublished" | "image" | "createdAt" | "updatedAt", ExtArgs["result"]["campany"]>

  export type $CampanyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Campany"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string
      isPublished: boolean
      image: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["campany"]>
    composites: {}
  }

  type CampanyGetPayload<S extends boolean | null | undefined | CampanyDefaultArgs> = $Result.GetResult<Prisma.$CampanyPayload, S>

  type CampanyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CampanyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CampanyCountAggregateInputType | true
    }

  export interface CampanyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Campany'], meta: { name: 'Campany' } }
    /**
     * Find zero or one Campany that matches the filter.
     * @param {CampanyFindUniqueArgs} args - Arguments to find a Campany
     * @example
     * // Get one Campany
     * const campany = await prisma.campany.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CampanyFindUniqueArgs>(args: SelectSubset<T, CampanyFindUniqueArgs<ExtArgs>>): Prisma__CampanyClient<$Result.GetResult<Prisma.$CampanyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Campany that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CampanyFindUniqueOrThrowArgs} args - Arguments to find a Campany
     * @example
     * // Get one Campany
     * const campany = await prisma.campany.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CampanyFindUniqueOrThrowArgs>(args: SelectSubset<T, CampanyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CampanyClient<$Result.GetResult<Prisma.$CampanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Campany that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampanyFindFirstArgs} args - Arguments to find a Campany
     * @example
     * // Get one Campany
     * const campany = await prisma.campany.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CampanyFindFirstArgs>(args?: SelectSubset<T, CampanyFindFirstArgs<ExtArgs>>): Prisma__CampanyClient<$Result.GetResult<Prisma.$CampanyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Campany that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampanyFindFirstOrThrowArgs} args - Arguments to find a Campany
     * @example
     * // Get one Campany
     * const campany = await prisma.campany.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CampanyFindFirstOrThrowArgs>(args?: SelectSubset<T, CampanyFindFirstOrThrowArgs<ExtArgs>>): Prisma__CampanyClient<$Result.GetResult<Prisma.$CampanyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Campanies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampanyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Campanies
     * const campanies = await prisma.campany.findMany()
     * 
     * // Get first 10 Campanies
     * const campanies = await prisma.campany.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const campanyWithIdOnly = await prisma.campany.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CampanyFindManyArgs>(args?: SelectSubset<T, CampanyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampanyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Campany.
     * @param {CampanyCreateArgs} args - Arguments to create a Campany.
     * @example
     * // Create one Campany
     * const Campany = await prisma.campany.create({
     *   data: {
     *     // ... data to create a Campany
     *   }
     * })
     * 
     */
    create<T extends CampanyCreateArgs>(args: SelectSubset<T, CampanyCreateArgs<ExtArgs>>): Prisma__CampanyClient<$Result.GetResult<Prisma.$CampanyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Campanies.
     * @param {CampanyCreateManyArgs} args - Arguments to create many Campanies.
     * @example
     * // Create many Campanies
     * const campany = await prisma.campany.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CampanyCreateManyArgs>(args?: SelectSubset<T, CampanyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Campanies and returns the data saved in the database.
     * @param {CampanyCreateManyAndReturnArgs} args - Arguments to create many Campanies.
     * @example
     * // Create many Campanies
     * const campany = await prisma.campany.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Campanies and only return the `id`
     * const campanyWithIdOnly = await prisma.campany.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CampanyCreateManyAndReturnArgs>(args?: SelectSubset<T, CampanyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampanyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Campany.
     * @param {CampanyDeleteArgs} args - Arguments to delete one Campany.
     * @example
     * // Delete one Campany
     * const Campany = await prisma.campany.delete({
     *   where: {
     *     // ... filter to delete one Campany
     *   }
     * })
     * 
     */
    delete<T extends CampanyDeleteArgs>(args: SelectSubset<T, CampanyDeleteArgs<ExtArgs>>): Prisma__CampanyClient<$Result.GetResult<Prisma.$CampanyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Campany.
     * @param {CampanyUpdateArgs} args - Arguments to update one Campany.
     * @example
     * // Update one Campany
     * const campany = await prisma.campany.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CampanyUpdateArgs>(args: SelectSubset<T, CampanyUpdateArgs<ExtArgs>>): Prisma__CampanyClient<$Result.GetResult<Prisma.$CampanyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Campanies.
     * @param {CampanyDeleteManyArgs} args - Arguments to filter Campanies to delete.
     * @example
     * // Delete a few Campanies
     * const { count } = await prisma.campany.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CampanyDeleteManyArgs>(args?: SelectSubset<T, CampanyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Campanies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampanyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Campanies
     * const campany = await prisma.campany.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CampanyUpdateManyArgs>(args: SelectSubset<T, CampanyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Campanies and returns the data updated in the database.
     * @param {CampanyUpdateManyAndReturnArgs} args - Arguments to update many Campanies.
     * @example
     * // Update many Campanies
     * const campany = await prisma.campany.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Campanies and only return the `id`
     * const campanyWithIdOnly = await prisma.campany.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CampanyUpdateManyAndReturnArgs>(args: SelectSubset<T, CampanyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampanyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Campany.
     * @param {CampanyUpsertArgs} args - Arguments to update or create a Campany.
     * @example
     * // Update or create a Campany
     * const campany = await prisma.campany.upsert({
     *   create: {
     *     // ... data to create a Campany
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Campany we want to update
     *   }
     * })
     */
    upsert<T extends CampanyUpsertArgs>(args: SelectSubset<T, CampanyUpsertArgs<ExtArgs>>): Prisma__CampanyClient<$Result.GetResult<Prisma.$CampanyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Campanies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampanyCountArgs} args - Arguments to filter Campanies to count.
     * @example
     * // Count the number of Campanies
     * const count = await prisma.campany.count({
     *   where: {
     *     // ... the filter for the Campanies we want to count
     *   }
     * })
    **/
    count<T extends CampanyCountArgs>(
      args?: Subset<T, CampanyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CampanyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Campany.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampanyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CampanyAggregateArgs>(args: Subset<T, CampanyAggregateArgs>): Prisma.PrismaPromise<GetCampanyAggregateType<T>>

    /**
     * Group by Campany.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampanyGroupByArgs} args - Group by arguments.
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
      T extends CampanyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CampanyGroupByArgs['orderBy'] }
        : { orderBy?: CampanyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CampanyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCampanyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Campany model
   */
  readonly fields: CampanyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Campany.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CampanyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Campany model
   */
  interface CampanyFieldRefs {
    readonly id: FieldRef<"Campany", 'String'>
    readonly name: FieldRef<"Campany", 'String'>
    readonly description: FieldRef<"Campany", 'String'>
    readonly isPublished: FieldRef<"Campany", 'Boolean'>
    readonly image: FieldRef<"Campany", 'String'>
    readonly createdAt: FieldRef<"Campany", 'DateTime'>
    readonly updatedAt: FieldRef<"Campany", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Campany findUnique
   */
  export type CampanyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campany
     */
    select?: CampanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campany
     */
    omit?: CampanyOmit<ExtArgs> | null
    /**
     * Filter, which Campany to fetch.
     */
    where: CampanyWhereUniqueInput
  }

  /**
   * Campany findUniqueOrThrow
   */
  export type CampanyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campany
     */
    select?: CampanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campany
     */
    omit?: CampanyOmit<ExtArgs> | null
    /**
     * Filter, which Campany to fetch.
     */
    where: CampanyWhereUniqueInput
  }

  /**
   * Campany findFirst
   */
  export type CampanyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campany
     */
    select?: CampanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campany
     */
    omit?: CampanyOmit<ExtArgs> | null
    /**
     * Filter, which Campany to fetch.
     */
    where?: CampanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Campanies to fetch.
     */
    orderBy?: CampanyOrderByWithRelationInput | CampanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Campanies.
     */
    cursor?: CampanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Campanies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Campanies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Campanies.
     */
    distinct?: CampanyScalarFieldEnum | CampanyScalarFieldEnum[]
  }

  /**
   * Campany findFirstOrThrow
   */
  export type CampanyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campany
     */
    select?: CampanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campany
     */
    omit?: CampanyOmit<ExtArgs> | null
    /**
     * Filter, which Campany to fetch.
     */
    where?: CampanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Campanies to fetch.
     */
    orderBy?: CampanyOrderByWithRelationInput | CampanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Campanies.
     */
    cursor?: CampanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Campanies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Campanies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Campanies.
     */
    distinct?: CampanyScalarFieldEnum | CampanyScalarFieldEnum[]
  }

  /**
   * Campany findMany
   */
  export type CampanyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campany
     */
    select?: CampanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campany
     */
    omit?: CampanyOmit<ExtArgs> | null
    /**
     * Filter, which Campanies to fetch.
     */
    where?: CampanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Campanies to fetch.
     */
    orderBy?: CampanyOrderByWithRelationInput | CampanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Campanies.
     */
    cursor?: CampanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Campanies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Campanies.
     */
    skip?: number
    distinct?: CampanyScalarFieldEnum | CampanyScalarFieldEnum[]
  }

  /**
   * Campany create
   */
  export type CampanyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campany
     */
    select?: CampanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campany
     */
    omit?: CampanyOmit<ExtArgs> | null
    /**
     * The data needed to create a Campany.
     */
    data: XOR<CampanyCreateInput, CampanyUncheckedCreateInput>
  }

  /**
   * Campany createMany
   */
  export type CampanyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Campanies.
     */
    data: CampanyCreateManyInput | CampanyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Campany createManyAndReturn
   */
  export type CampanyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campany
     */
    select?: CampanySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Campany
     */
    omit?: CampanyOmit<ExtArgs> | null
    /**
     * The data used to create many Campanies.
     */
    data: CampanyCreateManyInput | CampanyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Campany update
   */
  export type CampanyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campany
     */
    select?: CampanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campany
     */
    omit?: CampanyOmit<ExtArgs> | null
    /**
     * The data needed to update a Campany.
     */
    data: XOR<CampanyUpdateInput, CampanyUncheckedUpdateInput>
    /**
     * Choose, which Campany to update.
     */
    where: CampanyWhereUniqueInput
  }

  /**
   * Campany updateMany
   */
  export type CampanyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Campanies.
     */
    data: XOR<CampanyUpdateManyMutationInput, CampanyUncheckedUpdateManyInput>
    /**
     * Filter which Campanies to update
     */
    where?: CampanyWhereInput
    /**
     * Limit how many Campanies to update.
     */
    limit?: number
  }

  /**
   * Campany updateManyAndReturn
   */
  export type CampanyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campany
     */
    select?: CampanySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Campany
     */
    omit?: CampanyOmit<ExtArgs> | null
    /**
     * The data used to update Campanies.
     */
    data: XOR<CampanyUpdateManyMutationInput, CampanyUncheckedUpdateManyInput>
    /**
     * Filter which Campanies to update
     */
    where?: CampanyWhereInput
    /**
     * Limit how many Campanies to update.
     */
    limit?: number
  }

  /**
   * Campany upsert
   */
  export type CampanyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campany
     */
    select?: CampanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campany
     */
    omit?: CampanyOmit<ExtArgs> | null
    /**
     * The filter to search for the Campany to update in case it exists.
     */
    where: CampanyWhereUniqueInput
    /**
     * In case the Campany found by the `where` argument doesn't exist, create a new Campany with this data.
     */
    create: XOR<CampanyCreateInput, CampanyUncheckedCreateInput>
    /**
     * In case the Campany was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CampanyUpdateInput, CampanyUncheckedUpdateInput>
  }

  /**
   * Campany delete
   */
  export type CampanyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campany
     */
    select?: CampanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campany
     */
    omit?: CampanyOmit<ExtArgs> | null
    /**
     * Filter which Campany to delete.
     */
    where: CampanyWhereUniqueInput
  }

  /**
   * Campany deleteMany
   */
  export type CampanyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Campanies to delete
     */
    where?: CampanyWhereInput
    /**
     * Limit how many Campanies to delete.
     */
    limit?: number
  }

  /**
   * Campany without action
   */
  export type CampanyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campany
     */
    select?: CampanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campany
     */
    omit?: CampanyOmit<ExtArgs> | null
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


  export const ProfileScalarFieldEnum: {
    id: 'id',
    clerkId: 'clerkId',
    firstName: 'firstName',
    lastName: 'lastName',
    userName: 'userName',
    email: 'email',
    profileImage: 'profileImage',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProfileScalarFieldEnum = (typeof ProfileScalarFieldEnum)[keyof typeof ProfileScalarFieldEnum]


  export const PropertyScalarFieldEnum: {
    id: 'id',
    name: 'name',
    tagline: 'tagline',
    category: 'category',
    image: 'image',
    country: 'country',
    description: 'description',
    price: 'price',
    guests: 'guests',
    bedrooms: 'bedrooms',
    beds: 'beds',
    baths: 'baths',
    amenities: 'amenities',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    profileId: 'profileId'
  };

  export type PropertyScalarFieldEnum = (typeof PropertyScalarFieldEnum)[keyof typeof PropertyScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    id: 'id',
    name: 'name',
    company: 'company',
    description: 'description',
    featured: 'featured',
    image: 'image',
    price: 'price',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    clerkId: 'clerkId'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const BlogScalarFieldEnum: {
    id: 'id',
    slug: 'slug',
    title: 'title',
    content: 'content',
    summary: 'summary',
    image: 'image',
    category: 'category',
    tags: 'tags',
    isPublished: 'isPublished',
    isFeatured: 'isFeatured',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BlogScalarFieldEnum = (typeof BlogScalarFieldEnum)[keyof typeof BlogScalarFieldEnum]


  export const FairScalarFieldEnum: {
    id: 'id',
    slug: 'slug',
    name: 'name',
    description: 'description',
    summary: 'summary',
    website: 'website',
    venue: 'venue',
    type: 'type',
    category: 'category',
    logoImage: 'logoImage',
    coverImage: 'coverImage',
    displayedProducts: 'displayedProducts',
    tourGuide: 'tourGuide',
    onBanner: 'onBanner',
    isPublished: 'isPublished',
    isFeatured: 'isFeatured',
    isSectoralFairIndex: 'isSectoralFairIndex',
    isDefiniteDepartureTour: 'isDefiniteDepartureTour',
    date: 'date',
    startDate: 'startDate',
    endDate: 'endDate',
    hotelId: 'hotelId',
    fairImagesId: 'fairImagesId',
    tourImagesId: 'tourImagesId',
    paidServices: 'paidServices',
    freeServices: 'freeServices',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    tourPrograms: 'tourPrograms'
  };

  export type FairScalarFieldEnum = (typeof FairScalarFieldEnum)[keyof typeof FairScalarFieldEnum]


  export const HotelScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    images: 'images',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type HotelScalarFieldEnum = (typeof HotelScalarFieldEnum)[keyof typeof HotelScalarFieldEnum]


  export const FairImagesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    images: 'images',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FairImagesScalarFieldEnum = (typeof FairImagesScalarFieldEnum)[keyof typeof FairImagesScalarFieldEnum]


  export const TourImagesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    images: 'images',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TourImagesScalarFieldEnum = (typeof TourImagesScalarFieldEnum)[keyof typeof TourImagesScalarFieldEnum]


  export const MessageScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    subject: 'subject',
    contactMessage: 'contactMessage',
    from: 'from',
    isRead: 'isRead',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MessageScalarFieldEnum = (typeof MessageScalarFieldEnum)[keyof typeof MessageScalarFieldEnum]


  export const SeoPageScalarFieldEnum: {
    id: 'id',
    url: 'url',
    title: 'title',
    description: 'description',
    keywords: 'keywords',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SeoPageScalarFieldEnum = (typeof SeoPageScalarFieldEnum)[keyof typeof SeoPageScalarFieldEnum]


  export const CampanyScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    isPublished: 'isPublished',
    image: 'image',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CampanyScalarFieldEnum = (typeof CampanyScalarFieldEnum)[keyof typeof CampanyScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type ProfileWhereInput = {
    AND?: ProfileWhereInput | ProfileWhereInput[]
    OR?: ProfileWhereInput[]
    NOT?: ProfileWhereInput | ProfileWhereInput[]
    id?: StringFilter<"Profile"> | string
    clerkId?: StringFilter<"Profile"> | string
    firstName?: StringFilter<"Profile"> | string
    lastName?: StringFilter<"Profile"> | string
    userName?: StringFilter<"Profile"> | string
    email?: StringFilter<"Profile"> | string
    profileImage?: StringFilter<"Profile"> | string
    role?: StringFilter<"Profile"> | string
    createdAt?: DateTimeFilter<"Profile"> | Date | string
    updatedAt?: DateTimeFilter<"Profile"> | Date | string
    Property?: PropertyListRelationFilter
  }

  export type ProfileOrderByWithRelationInput = {
    id?: SortOrder
    clerkId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    userName?: SortOrder
    email?: SortOrder
    profileImage?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Property?: PropertyOrderByRelationAggregateInput
  }

  export type ProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    clerkId?: string
    AND?: ProfileWhereInput | ProfileWhereInput[]
    OR?: ProfileWhereInput[]
    NOT?: ProfileWhereInput | ProfileWhereInput[]
    firstName?: StringFilter<"Profile"> | string
    lastName?: StringFilter<"Profile"> | string
    userName?: StringFilter<"Profile"> | string
    email?: StringFilter<"Profile"> | string
    profileImage?: StringFilter<"Profile"> | string
    role?: StringFilter<"Profile"> | string
    createdAt?: DateTimeFilter<"Profile"> | Date | string
    updatedAt?: DateTimeFilter<"Profile"> | Date | string
    Property?: PropertyListRelationFilter
  }, "id" | "clerkId">

  export type ProfileOrderByWithAggregationInput = {
    id?: SortOrder
    clerkId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    userName?: SortOrder
    email?: SortOrder
    profileImage?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProfileCountOrderByAggregateInput
    _max?: ProfileMaxOrderByAggregateInput
    _min?: ProfileMinOrderByAggregateInput
  }

  export type ProfileScalarWhereWithAggregatesInput = {
    AND?: ProfileScalarWhereWithAggregatesInput | ProfileScalarWhereWithAggregatesInput[]
    OR?: ProfileScalarWhereWithAggregatesInput[]
    NOT?: ProfileScalarWhereWithAggregatesInput | ProfileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Profile"> | string
    clerkId?: StringWithAggregatesFilter<"Profile"> | string
    firstName?: StringWithAggregatesFilter<"Profile"> | string
    lastName?: StringWithAggregatesFilter<"Profile"> | string
    userName?: StringWithAggregatesFilter<"Profile"> | string
    email?: StringWithAggregatesFilter<"Profile"> | string
    profileImage?: StringWithAggregatesFilter<"Profile"> | string
    role?: StringWithAggregatesFilter<"Profile"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Profile"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Profile"> | Date | string
  }

  export type PropertyWhereInput = {
    AND?: PropertyWhereInput | PropertyWhereInput[]
    OR?: PropertyWhereInput[]
    NOT?: PropertyWhereInput | PropertyWhereInput[]
    id?: StringFilter<"Property"> | string
    name?: StringFilter<"Property"> | string
    tagline?: StringFilter<"Property"> | string
    category?: StringFilter<"Property"> | string
    image?: StringFilter<"Property"> | string
    country?: StringFilter<"Property"> | string
    description?: StringFilter<"Property"> | string
    price?: IntFilter<"Property"> | number
    guests?: IntFilter<"Property"> | number
    bedrooms?: IntFilter<"Property"> | number
    beds?: IntFilter<"Property"> | number
    baths?: IntFilter<"Property"> | number
    amenities?: StringFilter<"Property"> | string
    createdAt?: DateTimeFilter<"Property"> | Date | string
    updatedAt?: DateTimeFilter<"Property"> | Date | string
    profileId?: StringFilter<"Property"> | string
    profile?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
  }

  export type PropertyOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    tagline?: SortOrder
    category?: SortOrder
    image?: SortOrder
    country?: SortOrder
    description?: SortOrder
    price?: SortOrder
    guests?: SortOrder
    bedrooms?: SortOrder
    beds?: SortOrder
    baths?: SortOrder
    amenities?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    profileId?: SortOrder
    profile?: ProfileOrderByWithRelationInput
  }

  export type PropertyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PropertyWhereInput | PropertyWhereInput[]
    OR?: PropertyWhereInput[]
    NOT?: PropertyWhereInput | PropertyWhereInput[]
    name?: StringFilter<"Property"> | string
    tagline?: StringFilter<"Property"> | string
    category?: StringFilter<"Property"> | string
    image?: StringFilter<"Property"> | string
    country?: StringFilter<"Property"> | string
    description?: StringFilter<"Property"> | string
    price?: IntFilter<"Property"> | number
    guests?: IntFilter<"Property"> | number
    bedrooms?: IntFilter<"Property"> | number
    beds?: IntFilter<"Property"> | number
    baths?: IntFilter<"Property"> | number
    amenities?: StringFilter<"Property"> | string
    createdAt?: DateTimeFilter<"Property"> | Date | string
    updatedAt?: DateTimeFilter<"Property"> | Date | string
    profileId?: StringFilter<"Property"> | string
    profile?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
  }, "id">

  export type PropertyOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    tagline?: SortOrder
    category?: SortOrder
    image?: SortOrder
    country?: SortOrder
    description?: SortOrder
    price?: SortOrder
    guests?: SortOrder
    bedrooms?: SortOrder
    beds?: SortOrder
    baths?: SortOrder
    amenities?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    profileId?: SortOrder
    _count?: PropertyCountOrderByAggregateInput
    _avg?: PropertyAvgOrderByAggregateInput
    _max?: PropertyMaxOrderByAggregateInput
    _min?: PropertyMinOrderByAggregateInput
    _sum?: PropertySumOrderByAggregateInput
  }

  export type PropertyScalarWhereWithAggregatesInput = {
    AND?: PropertyScalarWhereWithAggregatesInput | PropertyScalarWhereWithAggregatesInput[]
    OR?: PropertyScalarWhereWithAggregatesInput[]
    NOT?: PropertyScalarWhereWithAggregatesInput | PropertyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Property"> | string
    name?: StringWithAggregatesFilter<"Property"> | string
    tagline?: StringWithAggregatesFilter<"Property"> | string
    category?: StringWithAggregatesFilter<"Property"> | string
    image?: StringWithAggregatesFilter<"Property"> | string
    country?: StringWithAggregatesFilter<"Property"> | string
    description?: StringWithAggregatesFilter<"Property"> | string
    price?: IntWithAggregatesFilter<"Property"> | number
    guests?: IntWithAggregatesFilter<"Property"> | number
    bedrooms?: IntWithAggregatesFilter<"Property"> | number
    beds?: IntWithAggregatesFilter<"Property"> | number
    baths?: IntWithAggregatesFilter<"Property"> | number
    amenities?: StringWithAggregatesFilter<"Property"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Property"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Property"> | Date | string
    profileId?: StringWithAggregatesFilter<"Property"> | string
  }

  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    id?: StringFilter<"Product"> | string
    name?: StringFilter<"Product"> | string
    company?: StringFilter<"Product"> | string
    description?: StringFilter<"Product"> | string
    featured?: BoolFilter<"Product"> | boolean
    image?: StringFilter<"Product"> | string
    price?: IntFilter<"Product"> | number
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    clerkId?: StringFilter<"Product"> | string
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    company?: SortOrder
    description?: SortOrder
    featured?: SortOrder
    image?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clerkId?: SortOrder
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    name?: StringFilter<"Product"> | string
    company?: StringFilter<"Product"> | string
    description?: StringFilter<"Product"> | string
    featured?: BoolFilter<"Product"> | boolean
    image?: StringFilter<"Product"> | string
    price?: IntFilter<"Product"> | number
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    clerkId?: StringFilter<"Product"> | string
  }, "id">

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    company?: SortOrder
    description?: SortOrder
    featured?: SortOrder
    image?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clerkId?: SortOrder
    _count?: ProductCountOrderByAggregateInput
    _avg?: ProductAvgOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
    _sum?: ProductSumOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Product"> | string
    name?: StringWithAggregatesFilter<"Product"> | string
    company?: StringWithAggregatesFilter<"Product"> | string
    description?: StringWithAggregatesFilter<"Product"> | string
    featured?: BoolWithAggregatesFilter<"Product"> | boolean
    image?: StringWithAggregatesFilter<"Product"> | string
    price?: IntWithAggregatesFilter<"Product"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
    clerkId?: StringWithAggregatesFilter<"Product"> | string
  }

  export type BlogWhereInput = {
    AND?: BlogWhereInput | BlogWhereInput[]
    OR?: BlogWhereInput[]
    NOT?: BlogWhereInput | BlogWhereInput[]
    id?: StringFilter<"Blog"> | string
    slug?: StringFilter<"Blog"> | string
    title?: StringFilter<"Blog"> | string
    content?: StringFilter<"Blog"> | string
    summary?: StringNullableFilter<"Blog"> | string | null
    image?: StringNullableFilter<"Blog"> | string | null
    category?: StringFilter<"Blog"> | string
    tags?: StringNullableFilter<"Blog"> | string | null
    isPublished?: BoolFilter<"Blog"> | boolean
    isFeatured?: BoolFilter<"Blog"> | boolean
    createdAt?: DateTimeFilter<"Blog"> | Date | string
    updatedAt?: DateTimeFilter<"Blog"> | Date | string
  }

  export type BlogOrderByWithRelationInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    content?: SortOrder
    summary?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    category?: SortOrder
    tags?: SortOrderInput | SortOrder
    isPublished?: SortOrder
    isFeatured?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BlogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: BlogWhereInput | BlogWhereInput[]
    OR?: BlogWhereInput[]
    NOT?: BlogWhereInput | BlogWhereInput[]
    title?: StringFilter<"Blog"> | string
    content?: StringFilter<"Blog"> | string
    summary?: StringNullableFilter<"Blog"> | string | null
    image?: StringNullableFilter<"Blog"> | string | null
    category?: StringFilter<"Blog"> | string
    tags?: StringNullableFilter<"Blog"> | string | null
    isPublished?: BoolFilter<"Blog"> | boolean
    isFeatured?: BoolFilter<"Blog"> | boolean
    createdAt?: DateTimeFilter<"Blog"> | Date | string
    updatedAt?: DateTimeFilter<"Blog"> | Date | string
  }, "id" | "slug">

  export type BlogOrderByWithAggregationInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    content?: SortOrder
    summary?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    category?: SortOrder
    tags?: SortOrderInput | SortOrder
    isPublished?: SortOrder
    isFeatured?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BlogCountOrderByAggregateInput
    _max?: BlogMaxOrderByAggregateInput
    _min?: BlogMinOrderByAggregateInput
  }

  export type BlogScalarWhereWithAggregatesInput = {
    AND?: BlogScalarWhereWithAggregatesInput | BlogScalarWhereWithAggregatesInput[]
    OR?: BlogScalarWhereWithAggregatesInput[]
    NOT?: BlogScalarWhereWithAggregatesInput | BlogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Blog"> | string
    slug?: StringWithAggregatesFilter<"Blog"> | string
    title?: StringWithAggregatesFilter<"Blog"> | string
    content?: StringWithAggregatesFilter<"Blog"> | string
    summary?: StringNullableWithAggregatesFilter<"Blog"> | string | null
    image?: StringNullableWithAggregatesFilter<"Blog"> | string | null
    category?: StringWithAggregatesFilter<"Blog"> | string
    tags?: StringNullableWithAggregatesFilter<"Blog"> | string | null
    isPublished?: BoolWithAggregatesFilter<"Blog"> | boolean
    isFeatured?: BoolWithAggregatesFilter<"Blog"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Blog"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Blog"> | Date | string
  }

  export type FairWhereInput = {
    AND?: FairWhereInput | FairWhereInput[]
    OR?: FairWhereInput[]
    NOT?: FairWhereInput | FairWhereInput[]
    id?: StringFilter<"Fair"> | string
    slug?: StringFilter<"Fair"> | string
    name?: StringFilter<"Fair"> | string
    description?: StringFilter<"Fair"> | string
    summary?: StringNullableFilter<"Fair"> | string | null
    website?: StringNullableFilter<"Fair"> | string | null
    venue?: StringNullableFilter<"Fair"> | string | null
    type?: StringNullableFilter<"Fair"> | string | null
    category?: StringNullableFilter<"Fair"> | string | null
    logoImage?: StringNullableFilter<"Fair"> | string | null
    coverImage?: StringNullableFilter<"Fair"> | string | null
    displayedProducts?: StringNullableFilter<"Fair"> | string | null
    tourGuide?: StringNullableFilter<"Fair"> | string | null
    onBanner?: BoolFilter<"Fair"> | boolean
    isPublished?: BoolFilter<"Fair"> | boolean
    isFeatured?: BoolFilter<"Fair"> | boolean
    isSectoralFairIndex?: BoolFilter<"Fair"> | boolean
    isDefiniteDepartureTour?: BoolFilter<"Fair"> | boolean
    date?: StringNullableFilter<"Fair"> | string | null
    startDate?: DateTimeFilter<"Fair"> | Date | string
    endDate?: DateTimeNullableFilter<"Fair"> | Date | string | null
    hotelId?: StringNullableFilter<"Fair"> | string | null
    fairImagesId?: StringNullableFilter<"Fair"> | string | null
    tourImagesId?: StringNullableFilter<"Fair"> | string | null
    paidServices?: StringNullableFilter<"Fair"> | string | null
    freeServices?: StringNullableFilter<"Fair"> | string | null
    createdAt?: DateTimeFilter<"Fair"> | Date | string
    updatedAt?: DateTimeFilter<"Fair"> | Date | string
    tourPrograms?: JsonNullableFilter<"Fair">
    hotel?: XOR<HotelNullableScalarRelationFilter, HotelWhereInput> | null
    fairImage?: XOR<FairImagesNullableScalarRelationFilter, FairImagesWhereInput> | null
    tourImage?: XOR<TourImagesNullableScalarRelationFilter, TourImagesWhereInput> | null
  }

  export type FairOrderByWithRelationInput = {
    id?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    description?: SortOrder
    summary?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    venue?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
    logoImage?: SortOrderInput | SortOrder
    coverImage?: SortOrderInput | SortOrder
    displayedProducts?: SortOrderInput | SortOrder
    tourGuide?: SortOrderInput | SortOrder
    onBanner?: SortOrder
    isPublished?: SortOrder
    isFeatured?: SortOrder
    isSectoralFairIndex?: SortOrder
    isDefiniteDepartureTour?: SortOrder
    date?: SortOrderInput | SortOrder
    startDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    hotelId?: SortOrderInput | SortOrder
    fairImagesId?: SortOrderInput | SortOrder
    tourImagesId?: SortOrderInput | SortOrder
    paidServices?: SortOrderInput | SortOrder
    freeServices?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tourPrograms?: SortOrderInput | SortOrder
    hotel?: HotelOrderByWithRelationInput
    fairImage?: FairImagesOrderByWithRelationInput
    tourImage?: TourImagesOrderByWithRelationInput
  }

  export type FairWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: FairWhereInput | FairWhereInput[]
    OR?: FairWhereInput[]
    NOT?: FairWhereInput | FairWhereInput[]
    name?: StringFilter<"Fair"> | string
    description?: StringFilter<"Fair"> | string
    summary?: StringNullableFilter<"Fair"> | string | null
    website?: StringNullableFilter<"Fair"> | string | null
    venue?: StringNullableFilter<"Fair"> | string | null
    type?: StringNullableFilter<"Fair"> | string | null
    category?: StringNullableFilter<"Fair"> | string | null
    logoImage?: StringNullableFilter<"Fair"> | string | null
    coverImage?: StringNullableFilter<"Fair"> | string | null
    displayedProducts?: StringNullableFilter<"Fair"> | string | null
    tourGuide?: StringNullableFilter<"Fair"> | string | null
    onBanner?: BoolFilter<"Fair"> | boolean
    isPublished?: BoolFilter<"Fair"> | boolean
    isFeatured?: BoolFilter<"Fair"> | boolean
    isSectoralFairIndex?: BoolFilter<"Fair"> | boolean
    isDefiniteDepartureTour?: BoolFilter<"Fair"> | boolean
    date?: StringNullableFilter<"Fair"> | string | null
    startDate?: DateTimeFilter<"Fair"> | Date | string
    endDate?: DateTimeNullableFilter<"Fair"> | Date | string | null
    hotelId?: StringNullableFilter<"Fair"> | string | null
    fairImagesId?: StringNullableFilter<"Fair"> | string | null
    tourImagesId?: StringNullableFilter<"Fair"> | string | null
    paidServices?: StringNullableFilter<"Fair"> | string | null
    freeServices?: StringNullableFilter<"Fair"> | string | null
    createdAt?: DateTimeFilter<"Fair"> | Date | string
    updatedAt?: DateTimeFilter<"Fair"> | Date | string
    tourPrograms?: JsonNullableFilter<"Fair">
    hotel?: XOR<HotelNullableScalarRelationFilter, HotelWhereInput> | null
    fairImage?: XOR<FairImagesNullableScalarRelationFilter, FairImagesWhereInput> | null
    tourImage?: XOR<TourImagesNullableScalarRelationFilter, TourImagesWhereInput> | null
  }, "id" | "slug">

  export type FairOrderByWithAggregationInput = {
    id?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    description?: SortOrder
    summary?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    venue?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
    logoImage?: SortOrderInput | SortOrder
    coverImage?: SortOrderInput | SortOrder
    displayedProducts?: SortOrderInput | SortOrder
    tourGuide?: SortOrderInput | SortOrder
    onBanner?: SortOrder
    isPublished?: SortOrder
    isFeatured?: SortOrder
    isSectoralFairIndex?: SortOrder
    isDefiniteDepartureTour?: SortOrder
    date?: SortOrderInput | SortOrder
    startDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    hotelId?: SortOrderInput | SortOrder
    fairImagesId?: SortOrderInput | SortOrder
    tourImagesId?: SortOrderInput | SortOrder
    paidServices?: SortOrderInput | SortOrder
    freeServices?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tourPrograms?: SortOrderInput | SortOrder
    _count?: FairCountOrderByAggregateInput
    _max?: FairMaxOrderByAggregateInput
    _min?: FairMinOrderByAggregateInput
  }

  export type FairScalarWhereWithAggregatesInput = {
    AND?: FairScalarWhereWithAggregatesInput | FairScalarWhereWithAggregatesInput[]
    OR?: FairScalarWhereWithAggregatesInput[]
    NOT?: FairScalarWhereWithAggregatesInput | FairScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Fair"> | string
    slug?: StringWithAggregatesFilter<"Fair"> | string
    name?: StringWithAggregatesFilter<"Fair"> | string
    description?: StringWithAggregatesFilter<"Fair"> | string
    summary?: StringNullableWithAggregatesFilter<"Fair"> | string | null
    website?: StringNullableWithAggregatesFilter<"Fair"> | string | null
    venue?: StringNullableWithAggregatesFilter<"Fair"> | string | null
    type?: StringNullableWithAggregatesFilter<"Fair"> | string | null
    category?: StringNullableWithAggregatesFilter<"Fair"> | string | null
    logoImage?: StringNullableWithAggregatesFilter<"Fair"> | string | null
    coverImage?: StringNullableWithAggregatesFilter<"Fair"> | string | null
    displayedProducts?: StringNullableWithAggregatesFilter<"Fair"> | string | null
    tourGuide?: StringNullableWithAggregatesFilter<"Fair"> | string | null
    onBanner?: BoolWithAggregatesFilter<"Fair"> | boolean
    isPublished?: BoolWithAggregatesFilter<"Fair"> | boolean
    isFeatured?: BoolWithAggregatesFilter<"Fair"> | boolean
    isSectoralFairIndex?: BoolWithAggregatesFilter<"Fair"> | boolean
    isDefiniteDepartureTour?: BoolWithAggregatesFilter<"Fair"> | boolean
    date?: StringNullableWithAggregatesFilter<"Fair"> | string | null
    startDate?: DateTimeWithAggregatesFilter<"Fair"> | Date | string
    endDate?: DateTimeNullableWithAggregatesFilter<"Fair"> | Date | string | null
    hotelId?: StringNullableWithAggregatesFilter<"Fair"> | string | null
    fairImagesId?: StringNullableWithAggregatesFilter<"Fair"> | string | null
    tourImagesId?: StringNullableWithAggregatesFilter<"Fair"> | string | null
    paidServices?: StringNullableWithAggregatesFilter<"Fair"> | string | null
    freeServices?: StringNullableWithAggregatesFilter<"Fair"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Fair"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Fair"> | Date | string
    tourPrograms?: JsonNullableWithAggregatesFilter<"Fair">
  }

  export type HotelWhereInput = {
    AND?: HotelWhereInput | HotelWhereInput[]
    OR?: HotelWhereInput[]
    NOT?: HotelWhereInput | HotelWhereInput[]
    id?: StringFilter<"Hotel"> | string
    name?: StringFilter<"Hotel"> | string
    description?: StringFilter<"Hotel"> | string
    images?: StringNullableListFilter<"Hotel">
    createdAt?: DateTimeFilter<"Hotel"> | Date | string
    updatedAt?: DateTimeFilter<"Hotel"> | Date | string
    fairs?: FairListRelationFilter
  }

  export type HotelOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    images?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    fairs?: FairOrderByRelationAggregateInput
  }

  export type HotelWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: HotelWhereInput | HotelWhereInput[]
    OR?: HotelWhereInput[]
    NOT?: HotelWhereInput | HotelWhereInput[]
    name?: StringFilter<"Hotel"> | string
    description?: StringFilter<"Hotel"> | string
    images?: StringNullableListFilter<"Hotel">
    createdAt?: DateTimeFilter<"Hotel"> | Date | string
    updatedAt?: DateTimeFilter<"Hotel"> | Date | string
    fairs?: FairListRelationFilter
  }, "id">

  export type HotelOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    images?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: HotelCountOrderByAggregateInput
    _max?: HotelMaxOrderByAggregateInput
    _min?: HotelMinOrderByAggregateInput
  }

  export type HotelScalarWhereWithAggregatesInput = {
    AND?: HotelScalarWhereWithAggregatesInput | HotelScalarWhereWithAggregatesInput[]
    OR?: HotelScalarWhereWithAggregatesInput[]
    NOT?: HotelScalarWhereWithAggregatesInput | HotelScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Hotel"> | string
    name?: StringWithAggregatesFilter<"Hotel"> | string
    description?: StringWithAggregatesFilter<"Hotel"> | string
    images?: StringNullableListFilter<"Hotel">
    createdAt?: DateTimeWithAggregatesFilter<"Hotel"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Hotel"> | Date | string
  }

  export type FairImagesWhereInput = {
    AND?: FairImagesWhereInput | FairImagesWhereInput[]
    OR?: FairImagesWhereInput[]
    NOT?: FairImagesWhereInput | FairImagesWhereInput[]
    id?: StringFilter<"FairImages"> | string
    name?: StringFilter<"FairImages"> | string
    description?: StringFilter<"FairImages"> | string
    images?: StringNullableListFilter<"FairImages">
    createdAt?: DateTimeFilter<"FairImages"> | Date | string
    updatedAt?: DateTimeFilter<"FairImages"> | Date | string
    fairs?: FairListRelationFilter
  }

  export type FairImagesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    images?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    fairs?: FairOrderByRelationAggregateInput
  }

  export type FairImagesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FairImagesWhereInput | FairImagesWhereInput[]
    OR?: FairImagesWhereInput[]
    NOT?: FairImagesWhereInput | FairImagesWhereInput[]
    name?: StringFilter<"FairImages"> | string
    description?: StringFilter<"FairImages"> | string
    images?: StringNullableListFilter<"FairImages">
    createdAt?: DateTimeFilter<"FairImages"> | Date | string
    updatedAt?: DateTimeFilter<"FairImages"> | Date | string
    fairs?: FairListRelationFilter
  }, "id">

  export type FairImagesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    images?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FairImagesCountOrderByAggregateInput
    _max?: FairImagesMaxOrderByAggregateInput
    _min?: FairImagesMinOrderByAggregateInput
  }

  export type FairImagesScalarWhereWithAggregatesInput = {
    AND?: FairImagesScalarWhereWithAggregatesInput | FairImagesScalarWhereWithAggregatesInput[]
    OR?: FairImagesScalarWhereWithAggregatesInput[]
    NOT?: FairImagesScalarWhereWithAggregatesInput | FairImagesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FairImages"> | string
    name?: StringWithAggregatesFilter<"FairImages"> | string
    description?: StringWithAggregatesFilter<"FairImages"> | string
    images?: StringNullableListFilter<"FairImages">
    createdAt?: DateTimeWithAggregatesFilter<"FairImages"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"FairImages"> | Date | string
  }

  export type TourImagesWhereInput = {
    AND?: TourImagesWhereInput | TourImagesWhereInput[]
    OR?: TourImagesWhereInput[]
    NOT?: TourImagesWhereInput | TourImagesWhereInput[]
    id?: StringFilter<"TourImages"> | string
    name?: StringFilter<"TourImages"> | string
    description?: StringFilter<"TourImages"> | string
    images?: StringNullableListFilter<"TourImages">
    createdAt?: DateTimeFilter<"TourImages"> | Date | string
    updatedAt?: DateTimeFilter<"TourImages"> | Date | string
    fairs?: FairListRelationFilter
  }

  export type TourImagesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    images?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    fairs?: FairOrderByRelationAggregateInput
  }

  export type TourImagesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TourImagesWhereInput | TourImagesWhereInput[]
    OR?: TourImagesWhereInput[]
    NOT?: TourImagesWhereInput | TourImagesWhereInput[]
    name?: StringFilter<"TourImages"> | string
    description?: StringFilter<"TourImages"> | string
    images?: StringNullableListFilter<"TourImages">
    createdAt?: DateTimeFilter<"TourImages"> | Date | string
    updatedAt?: DateTimeFilter<"TourImages"> | Date | string
    fairs?: FairListRelationFilter
  }, "id">

  export type TourImagesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    images?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TourImagesCountOrderByAggregateInput
    _max?: TourImagesMaxOrderByAggregateInput
    _min?: TourImagesMinOrderByAggregateInput
  }

  export type TourImagesScalarWhereWithAggregatesInput = {
    AND?: TourImagesScalarWhereWithAggregatesInput | TourImagesScalarWhereWithAggregatesInput[]
    OR?: TourImagesScalarWhereWithAggregatesInput[]
    NOT?: TourImagesScalarWhereWithAggregatesInput | TourImagesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TourImages"> | string
    name?: StringWithAggregatesFilter<"TourImages"> | string
    description?: StringWithAggregatesFilter<"TourImages"> | string
    images?: StringNullableListFilter<"TourImages">
    createdAt?: DateTimeWithAggregatesFilter<"TourImages"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TourImages"> | Date | string
  }

  export type MessageWhereInput = {
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    id?: StringFilter<"Message"> | string
    name?: StringFilter<"Message"> | string
    email?: StringFilter<"Message"> | string
    subject?: StringNullableFilter<"Message"> | string | null
    contactMessage?: StringNullableFilter<"Message"> | string | null
    from?: StringNullableFilter<"Message"> | string | null
    isRead?: BoolFilter<"Message"> | boolean
    createdAt?: DateTimeFilter<"Message"> | Date | string
    updatedAt?: DateTimeFilter<"Message"> | Date | string
  }

  export type MessageOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    subject?: SortOrderInput | SortOrder
    contactMessage?: SortOrderInput | SortOrder
    from?: SortOrderInput | SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    name?: StringFilter<"Message"> | string
    email?: StringFilter<"Message"> | string
    subject?: StringNullableFilter<"Message"> | string | null
    contactMessage?: StringNullableFilter<"Message"> | string | null
    from?: StringNullableFilter<"Message"> | string | null
    isRead?: BoolFilter<"Message"> | boolean
    createdAt?: DateTimeFilter<"Message"> | Date | string
    updatedAt?: DateTimeFilter<"Message"> | Date | string
  }, "id">

  export type MessageOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    subject?: SortOrderInput | SortOrder
    contactMessage?: SortOrderInput | SortOrder
    from?: SortOrderInput | SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MessageCountOrderByAggregateInput
    _max?: MessageMaxOrderByAggregateInput
    _min?: MessageMinOrderByAggregateInput
  }

  export type MessageScalarWhereWithAggregatesInput = {
    AND?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    OR?: MessageScalarWhereWithAggregatesInput[]
    NOT?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Message"> | string
    name?: StringWithAggregatesFilter<"Message"> | string
    email?: StringWithAggregatesFilter<"Message"> | string
    subject?: StringNullableWithAggregatesFilter<"Message"> | string | null
    contactMessage?: StringNullableWithAggregatesFilter<"Message"> | string | null
    from?: StringNullableWithAggregatesFilter<"Message"> | string | null
    isRead?: BoolWithAggregatesFilter<"Message"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Message"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Message"> | Date | string
  }

  export type SeoPageWhereInput = {
    AND?: SeoPageWhereInput | SeoPageWhereInput[]
    OR?: SeoPageWhereInput[]
    NOT?: SeoPageWhereInput | SeoPageWhereInput[]
    id?: StringFilter<"SeoPage"> | string
    url?: StringNullableFilter<"SeoPage"> | string | null
    title?: StringNullableFilter<"SeoPage"> | string | null
    description?: StringNullableFilter<"SeoPage"> | string | null
    keywords?: StringNullableFilter<"SeoPage"> | string | null
    createdAt?: DateTimeFilter<"SeoPage"> | Date | string
    updatedAt?: DateTimeFilter<"SeoPage"> | Date | string
  }

  export type SeoPageOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrderInput | SortOrder
    title?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    keywords?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SeoPageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    url?: string
    AND?: SeoPageWhereInput | SeoPageWhereInput[]
    OR?: SeoPageWhereInput[]
    NOT?: SeoPageWhereInput | SeoPageWhereInput[]
    title?: StringNullableFilter<"SeoPage"> | string | null
    description?: StringNullableFilter<"SeoPage"> | string | null
    keywords?: StringNullableFilter<"SeoPage"> | string | null
    createdAt?: DateTimeFilter<"SeoPage"> | Date | string
    updatedAt?: DateTimeFilter<"SeoPage"> | Date | string
  }, "id" | "url">

  export type SeoPageOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrderInput | SortOrder
    title?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    keywords?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SeoPageCountOrderByAggregateInput
    _max?: SeoPageMaxOrderByAggregateInput
    _min?: SeoPageMinOrderByAggregateInput
  }

  export type SeoPageScalarWhereWithAggregatesInput = {
    AND?: SeoPageScalarWhereWithAggregatesInput | SeoPageScalarWhereWithAggregatesInput[]
    OR?: SeoPageScalarWhereWithAggregatesInput[]
    NOT?: SeoPageScalarWhereWithAggregatesInput | SeoPageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SeoPage"> | string
    url?: StringNullableWithAggregatesFilter<"SeoPage"> | string | null
    title?: StringNullableWithAggregatesFilter<"SeoPage"> | string | null
    description?: StringNullableWithAggregatesFilter<"SeoPage"> | string | null
    keywords?: StringNullableWithAggregatesFilter<"SeoPage"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"SeoPage"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SeoPage"> | Date | string
  }

  export type CampanyWhereInput = {
    AND?: CampanyWhereInput | CampanyWhereInput[]
    OR?: CampanyWhereInput[]
    NOT?: CampanyWhereInput | CampanyWhereInput[]
    id?: StringFilter<"Campany"> | string
    name?: StringFilter<"Campany"> | string
    description?: StringFilter<"Campany"> | string
    isPublished?: BoolFilter<"Campany"> | boolean
    image?: StringFilter<"Campany"> | string
    createdAt?: DateTimeFilter<"Campany"> | Date | string
    updatedAt?: DateTimeFilter<"Campany"> | Date | string
  }

  export type CampanyOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isPublished?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CampanyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CampanyWhereInput | CampanyWhereInput[]
    OR?: CampanyWhereInput[]
    NOT?: CampanyWhereInput | CampanyWhereInput[]
    name?: StringFilter<"Campany"> | string
    description?: StringFilter<"Campany"> | string
    isPublished?: BoolFilter<"Campany"> | boolean
    image?: StringFilter<"Campany"> | string
    createdAt?: DateTimeFilter<"Campany"> | Date | string
    updatedAt?: DateTimeFilter<"Campany"> | Date | string
  }, "id">

  export type CampanyOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isPublished?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CampanyCountOrderByAggregateInput
    _max?: CampanyMaxOrderByAggregateInput
    _min?: CampanyMinOrderByAggregateInput
  }

  export type CampanyScalarWhereWithAggregatesInput = {
    AND?: CampanyScalarWhereWithAggregatesInput | CampanyScalarWhereWithAggregatesInput[]
    OR?: CampanyScalarWhereWithAggregatesInput[]
    NOT?: CampanyScalarWhereWithAggregatesInput | CampanyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Campany"> | string
    name?: StringWithAggregatesFilter<"Campany"> | string
    description?: StringWithAggregatesFilter<"Campany"> | string
    isPublished?: BoolWithAggregatesFilter<"Campany"> | boolean
    image?: StringWithAggregatesFilter<"Campany"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Campany"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Campany"> | Date | string
  }

  export type ProfileCreateInput = {
    id?: string
    clerkId: string
    firstName: string
    lastName: string
    userName: string
    email: string
    profileImage: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Property?: PropertyCreateNestedManyWithoutProfileInput
  }

  export type ProfileUncheckedCreateInput = {
    id?: string
    clerkId: string
    firstName: string
    lastName: string
    userName: string
    email: string
    profileImage: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Property?: PropertyUncheckedCreateNestedManyWithoutProfileInput
  }

  export type ProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    profileImage?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Property?: PropertyUpdateManyWithoutProfileNestedInput
  }

  export type ProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    profileImage?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Property?: PropertyUncheckedUpdateManyWithoutProfileNestedInput
  }

  export type ProfileCreateManyInput = {
    id?: string
    clerkId: string
    firstName: string
    lastName: string
    userName: string
    email: string
    profileImage: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    profileImage?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    profileImage?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyCreateInput = {
    id?: string
    name: string
    tagline: string
    category: string
    image: string
    country: string
    description: string
    price: number
    guests: number
    bedrooms: number
    beds: number
    baths: number
    amenities: string
    createdAt?: Date | string
    updatedAt?: Date | string
    profile: ProfileCreateNestedOneWithoutPropertyInput
  }

  export type PropertyUncheckedCreateInput = {
    id?: string
    name: string
    tagline: string
    category: string
    image: string
    country: string
    description: string
    price: number
    guests: number
    bedrooms: number
    beds: number
    baths: number
    amenities: string
    createdAt?: Date | string
    updatedAt?: Date | string
    profileId: string
  }

  export type PropertyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tagline?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    guests?: IntFieldUpdateOperationsInput | number
    bedrooms?: IntFieldUpdateOperationsInput | number
    beds?: IntFieldUpdateOperationsInput | number
    baths?: IntFieldUpdateOperationsInput | number
    amenities?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUpdateOneRequiredWithoutPropertyNestedInput
  }

  export type PropertyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tagline?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    guests?: IntFieldUpdateOperationsInput | number
    bedrooms?: IntFieldUpdateOperationsInput | number
    beds?: IntFieldUpdateOperationsInput | number
    baths?: IntFieldUpdateOperationsInput | number
    amenities?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profileId?: StringFieldUpdateOperationsInput | string
  }

  export type PropertyCreateManyInput = {
    id?: string
    name: string
    tagline: string
    category: string
    image: string
    country: string
    description: string
    price: number
    guests: number
    bedrooms: number
    beds: number
    baths: number
    amenities: string
    createdAt?: Date | string
    updatedAt?: Date | string
    profileId: string
  }

  export type PropertyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tagline?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    guests?: IntFieldUpdateOperationsInput | number
    bedrooms?: IntFieldUpdateOperationsInput | number
    beds?: IntFieldUpdateOperationsInput | number
    baths?: IntFieldUpdateOperationsInput | number
    amenities?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tagline?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    guests?: IntFieldUpdateOperationsInput | number
    bedrooms?: IntFieldUpdateOperationsInput | number
    beds?: IntFieldUpdateOperationsInput | number
    baths?: IntFieldUpdateOperationsInput | number
    amenities?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profileId?: StringFieldUpdateOperationsInput | string
  }

  export type ProductCreateInput = {
    id?: string
    name: string
    company: string
    description: string
    featured: boolean
    image: string
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
    clerkId: string
  }

  export type ProductUncheckedCreateInput = {
    id?: string
    name: string
    company: string
    description: string
    featured: boolean
    image: string
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
    clerkId: string
  }

  export type ProductUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    featured?: BoolFieldUpdateOperationsInput | boolean
    image?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clerkId?: StringFieldUpdateOperationsInput | string
  }

  export type ProductUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    featured?: BoolFieldUpdateOperationsInput | boolean
    image?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clerkId?: StringFieldUpdateOperationsInput | string
  }

  export type ProductCreateManyInput = {
    id?: string
    name: string
    company: string
    description: string
    featured: boolean
    image: string
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
    clerkId: string
  }

  export type ProductUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    featured?: BoolFieldUpdateOperationsInput | boolean
    image?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clerkId?: StringFieldUpdateOperationsInput | string
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    featured?: BoolFieldUpdateOperationsInput | boolean
    image?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clerkId?: StringFieldUpdateOperationsInput | string
  }

  export type BlogCreateInput = {
    id?: string
    slug: string
    title: string
    content: string
    summary?: string | null
    image?: string | null
    category?: string
    tags?: string | null
    isPublished?: boolean
    isFeatured?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BlogUncheckedCreateInput = {
    id?: string
    slug: string
    title: string
    content: string
    summary?: string | null
    image?: string | null
    category?: string
    tags?: string | null
    isPublished?: boolean
    isFeatured?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BlogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogCreateManyInput = {
    id?: string
    slug: string
    title: string
    content: string
    summary?: string | null
    image?: string | null
    category?: string
    tags?: string | null
    isPublished?: boolean
    isFeatured?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BlogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FairCreateInput = {
    id?: string
    slug: string
    name: string
    description: string
    summary?: string | null
    website?: string | null
    venue?: string | null
    type?: string | null
    category?: string | null
    logoImage?: string | null
    coverImage?: string | null
    displayedProducts?: string | null
    tourGuide?: string | null
    onBanner?: boolean
    isPublished?: boolean
    isFeatured?: boolean
    isSectoralFairIndex?: boolean
    isDefiniteDepartureTour?: boolean
    date?: string | null
    startDate?: Date | string
    endDate?: Date | string | null
    paidServices?: string | null
    freeServices?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tourPrograms?: NullableJsonNullValueInput | InputJsonValue
    hotel?: HotelCreateNestedOneWithoutFairsInput
    fairImage?: FairImagesCreateNestedOneWithoutFairsInput
    tourImage?: TourImagesCreateNestedOneWithoutFairsInput
  }

  export type FairUncheckedCreateInput = {
    id?: string
    slug: string
    name: string
    description: string
    summary?: string | null
    website?: string | null
    venue?: string | null
    type?: string | null
    category?: string | null
    logoImage?: string | null
    coverImage?: string | null
    displayedProducts?: string | null
    tourGuide?: string | null
    onBanner?: boolean
    isPublished?: boolean
    isFeatured?: boolean
    isSectoralFairIndex?: boolean
    isDefiniteDepartureTour?: boolean
    date?: string | null
    startDate?: Date | string
    endDate?: Date | string | null
    hotelId?: string | null
    fairImagesId?: string | null
    tourImagesId?: string | null
    paidServices?: string | null
    freeServices?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tourPrograms?: NullableJsonNullValueInput | InputJsonValue
  }

  export type FairUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    venue?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    logoImage?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    displayedProducts?: NullableStringFieldUpdateOperationsInput | string | null
    tourGuide?: NullableStringFieldUpdateOperationsInput | string | null
    onBanner?: BoolFieldUpdateOperationsInput | boolean
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isSectoralFairIndex?: BoolFieldUpdateOperationsInput | boolean
    isDefiniteDepartureTour?: BoolFieldUpdateOperationsInput | boolean
    date?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paidServices?: NullableStringFieldUpdateOperationsInput | string | null
    freeServices?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tourPrograms?: NullableJsonNullValueInput | InputJsonValue
    hotel?: HotelUpdateOneWithoutFairsNestedInput
    fairImage?: FairImagesUpdateOneWithoutFairsNestedInput
    tourImage?: TourImagesUpdateOneWithoutFairsNestedInput
  }

  export type FairUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    venue?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    logoImage?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    displayedProducts?: NullableStringFieldUpdateOperationsInput | string | null
    tourGuide?: NullableStringFieldUpdateOperationsInput | string | null
    onBanner?: BoolFieldUpdateOperationsInput | boolean
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isSectoralFairIndex?: BoolFieldUpdateOperationsInput | boolean
    isDefiniteDepartureTour?: BoolFieldUpdateOperationsInput | boolean
    date?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hotelId?: NullableStringFieldUpdateOperationsInput | string | null
    fairImagesId?: NullableStringFieldUpdateOperationsInput | string | null
    tourImagesId?: NullableStringFieldUpdateOperationsInput | string | null
    paidServices?: NullableStringFieldUpdateOperationsInput | string | null
    freeServices?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tourPrograms?: NullableJsonNullValueInput | InputJsonValue
  }

  export type FairCreateManyInput = {
    id?: string
    slug: string
    name: string
    description: string
    summary?: string | null
    website?: string | null
    venue?: string | null
    type?: string | null
    category?: string | null
    logoImage?: string | null
    coverImage?: string | null
    displayedProducts?: string | null
    tourGuide?: string | null
    onBanner?: boolean
    isPublished?: boolean
    isFeatured?: boolean
    isSectoralFairIndex?: boolean
    isDefiniteDepartureTour?: boolean
    date?: string | null
    startDate?: Date | string
    endDate?: Date | string | null
    hotelId?: string | null
    fairImagesId?: string | null
    tourImagesId?: string | null
    paidServices?: string | null
    freeServices?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tourPrograms?: NullableJsonNullValueInput | InputJsonValue
  }

  export type FairUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    venue?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    logoImage?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    displayedProducts?: NullableStringFieldUpdateOperationsInput | string | null
    tourGuide?: NullableStringFieldUpdateOperationsInput | string | null
    onBanner?: BoolFieldUpdateOperationsInput | boolean
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isSectoralFairIndex?: BoolFieldUpdateOperationsInput | boolean
    isDefiniteDepartureTour?: BoolFieldUpdateOperationsInput | boolean
    date?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paidServices?: NullableStringFieldUpdateOperationsInput | string | null
    freeServices?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tourPrograms?: NullableJsonNullValueInput | InputJsonValue
  }

  export type FairUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    venue?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    logoImage?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    displayedProducts?: NullableStringFieldUpdateOperationsInput | string | null
    tourGuide?: NullableStringFieldUpdateOperationsInput | string | null
    onBanner?: BoolFieldUpdateOperationsInput | boolean
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isSectoralFairIndex?: BoolFieldUpdateOperationsInput | boolean
    isDefiniteDepartureTour?: BoolFieldUpdateOperationsInput | boolean
    date?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hotelId?: NullableStringFieldUpdateOperationsInput | string | null
    fairImagesId?: NullableStringFieldUpdateOperationsInput | string | null
    tourImagesId?: NullableStringFieldUpdateOperationsInput | string | null
    paidServices?: NullableStringFieldUpdateOperationsInput | string | null
    freeServices?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tourPrograms?: NullableJsonNullValueInput | InputJsonValue
  }

  export type HotelCreateInput = {
    id?: string
    name: string
    description: string
    images?: HotelCreateimagesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    fairs?: FairCreateNestedManyWithoutHotelInput
  }

  export type HotelUncheckedCreateInput = {
    id?: string
    name: string
    description: string
    images?: HotelCreateimagesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    fairs?: FairUncheckedCreateNestedManyWithoutHotelInput
  }

  export type HotelUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    images?: HotelUpdateimagesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fairs?: FairUpdateManyWithoutHotelNestedInput
  }

  export type HotelUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    images?: HotelUpdateimagesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fairs?: FairUncheckedUpdateManyWithoutHotelNestedInput
  }

  export type HotelCreateManyInput = {
    id?: string
    name: string
    description: string
    images?: HotelCreateimagesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HotelUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    images?: HotelUpdateimagesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HotelUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    images?: HotelUpdateimagesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FairImagesCreateInput = {
    id?: string
    name: string
    description: string
    images?: FairImagesCreateimagesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    fairs?: FairCreateNestedManyWithoutFairImageInput
  }

  export type FairImagesUncheckedCreateInput = {
    id?: string
    name: string
    description: string
    images?: FairImagesCreateimagesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    fairs?: FairUncheckedCreateNestedManyWithoutFairImageInput
  }

  export type FairImagesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    images?: FairImagesUpdateimagesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fairs?: FairUpdateManyWithoutFairImageNestedInput
  }

  export type FairImagesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    images?: FairImagesUpdateimagesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fairs?: FairUncheckedUpdateManyWithoutFairImageNestedInput
  }

  export type FairImagesCreateManyInput = {
    id?: string
    name: string
    description: string
    images?: FairImagesCreateimagesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FairImagesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    images?: FairImagesUpdateimagesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FairImagesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    images?: FairImagesUpdateimagesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TourImagesCreateInput = {
    id?: string
    name: string
    description: string
    images?: TourImagesCreateimagesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    fairs?: FairCreateNestedManyWithoutTourImageInput
  }

  export type TourImagesUncheckedCreateInput = {
    id?: string
    name: string
    description: string
    images?: TourImagesCreateimagesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    fairs?: FairUncheckedCreateNestedManyWithoutTourImageInput
  }

  export type TourImagesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    images?: TourImagesUpdateimagesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fairs?: FairUpdateManyWithoutTourImageNestedInput
  }

  export type TourImagesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    images?: TourImagesUpdateimagesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fairs?: FairUncheckedUpdateManyWithoutTourImageNestedInput
  }

  export type TourImagesCreateManyInput = {
    id?: string
    name: string
    description: string
    images?: TourImagesCreateimagesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TourImagesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    images?: TourImagesUpdateimagesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TourImagesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    images?: TourImagesUpdateimagesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageCreateInput = {
    id?: string
    name: string
    email: string
    subject?: string | null
    contactMessage?: string | null
    from?: string | null
    isRead?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MessageUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    subject?: string | null
    contactMessage?: string | null
    from?: string | null
    isRead?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    contactMessage?: NullableStringFieldUpdateOperationsInput | string | null
    from?: NullableStringFieldUpdateOperationsInput | string | null
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    contactMessage?: NullableStringFieldUpdateOperationsInput | string | null
    from?: NullableStringFieldUpdateOperationsInput | string | null
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageCreateManyInput = {
    id?: string
    name: string
    email: string
    subject?: string | null
    contactMessage?: string | null
    from?: string | null
    isRead?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    contactMessage?: NullableStringFieldUpdateOperationsInput | string | null
    from?: NullableStringFieldUpdateOperationsInput | string | null
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    contactMessage?: NullableStringFieldUpdateOperationsInput | string | null
    from?: NullableStringFieldUpdateOperationsInput | string | null
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SeoPageCreateInput = {
    id?: string
    url?: string | null
    title?: string | null
    description?: string | null
    keywords?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SeoPageUncheckedCreateInput = {
    id?: string
    url?: string | null
    title?: string | null
    description?: string | null
    keywords?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SeoPageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    keywords?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SeoPageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    keywords?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SeoPageCreateManyInput = {
    id?: string
    url?: string | null
    title?: string | null
    description?: string | null
    keywords?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SeoPageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    keywords?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SeoPageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    keywords?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CampanyCreateInput = {
    id?: string
    name: string
    description: string
    isPublished: boolean
    image: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CampanyUncheckedCreateInput = {
    id?: string
    name: string
    description: string
    isPublished: boolean
    image: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CampanyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CampanyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CampanyCreateManyInput = {
    id?: string
    name: string
    description: string
    isPublished: boolean
    image: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CampanyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CampanyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type PropertyListRelationFilter = {
    every?: PropertyWhereInput
    some?: PropertyWhereInput
    none?: PropertyWhereInput
  }

  export type PropertyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProfileCountOrderByAggregateInput = {
    id?: SortOrder
    clerkId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    userName?: SortOrder
    email?: SortOrder
    profileImage?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    clerkId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    userName?: SortOrder
    email?: SortOrder
    profileImage?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProfileMinOrderByAggregateInput = {
    id?: SortOrder
    clerkId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    userName?: SortOrder
    email?: SortOrder
    profileImage?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type ProfileScalarRelationFilter = {
    is?: ProfileWhereInput
    isNot?: ProfileWhereInput
  }

  export type PropertyCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    tagline?: SortOrder
    category?: SortOrder
    image?: SortOrder
    country?: SortOrder
    description?: SortOrder
    price?: SortOrder
    guests?: SortOrder
    bedrooms?: SortOrder
    beds?: SortOrder
    baths?: SortOrder
    amenities?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    profileId?: SortOrder
  }

  export type PropertyAvgOrderByAggregateInput = {
    price?: SortOrder
    guests?: SortOrder
    bedrooms?: SortOrder
    beds?: SortOrder
    baths?: SortOrder
  }

  export type PropertyMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    tagline?: SortOrder
    category?: SortOrder
    image?: SortOrder
    country?: SortOrder
    description?: SortOrder
    price?: SortOrder
    guests?: SortOrder
    bedrooms?: SortOrder
    beds?: SortOrder
    baths?: SortOrder
    amenities?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    profileId?: SortOrder
  }

  export type PropertyMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    tagline?: SortOrder
    category?: SortOrder
    image?: SortOrder
    country?: SortOrder
    description?: SortOrder
    price?: SortOrder
    guests?: SortOrder
    bedrooms?: SortOrder
    beds?: SortOrder
    baths?: SortOrder
    amenities?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    profileId?: SortOrder
  }

  export type PropertySumOrderByAggregateInput = {
    price?: SortOrder
    guests?: SortOrder
    bedrooms?: SortOrder
    beds?: SortOrder
    baths?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    company?: SortOrder
    description?: SortOrder
    featured?: SortOrder
    image?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clerkId?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    price?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    company?: SortOrder
    description?: SortOrder
    featured?: SortOrder
    image?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clerkId?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    company?: SortOrder
    description?: SortOrder
    featured?: SortOrder
    image?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clerkId?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    price?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type BlogCountOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    content?: SortOrder
    summary?: SortOrder
    image?: SortOrder
    category?: SortOrder
    tags?: SortOrder
    isPublished?: SortOrder
    isFeatured?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BlogMaxOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    content?: SortOrder
    summary?: SortOrder
    image?: SortOrder
    category?: SortOrder
    tags?: SortOrder
    isPublished?: SortOrder
    isFeatured?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BlogMinOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    content?: SortOrder
    summary?: SortOrder
    image?: SortOrder
    category?: SortOrder
    tags?: SortOrder
    isPublished?: SortOrder
    isFeatured?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type HotelNullableScalarRelationFilter = {
    is?: HotelWhereInput | null
    isNot?: HotelWhereInput | null
  }

  export type FairImagesNullableScalarRelationFilter = {
    is?: FairImagesWhereInput | null
    isNot?: FairImagesWhereInput | null
  }

  export type TourImagesNullableScalarRelationFilter = {
    is?: TourImagesWhereInput | null
    isNot?: TourImagesWhereInput | null
  }

  export type FairCountOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    description?: SortOrder
    summary?: SortOrder
    website?: SortOrder
    venue?: SortOrder
    type?: SortOrder
    category?: SortOrder
    logoImage?: SortOrder
    coverImage?: SortOrder
    displayedProducts?: SortOrder
    tourGuide?: SortOrder
    onBanner?: SortOrder
    isPublished?: SortOrder
    isFeatured?: SortOrder
    isSectoralFairIndex?: SortOrder
    isDefiniteDepartureTour?: SortOrder
    date?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    hotelId?: SortOrder
    fairImagesId?: SortOrder
    tourImagesId?: SortOrder
    paidServices?: SortOrder
    freeServices?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tourPrograms?: SortOrder
  }

  export type FairMaxOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    description?: SortOrder
    summary?: SortOrder
    website?: SortOrder
    venue?: SortOrder
    type?: SortOrder
    category?: SortOrder
    logoImage?: SortOrder
    coverImage?: SortOrder
    displayedProducts?: SortOrder
    tourGuide?: SortOrder
    onBanner?: SortOrder
    isPublished?: SortOrder
    isFeatured?: SortOrder
    isSectoralFairIndex?: SortOrder
    isDefiniteDepartureTour?: SortOrder
    date?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    hotelId?: SortOrder
    fairImagesId?: SortOrder
    tourImagesId?: SortOrder
    paidServices?: SortOrder
    freeServices?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FairMinOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    description?: SortOrder
    summary?: SortOrder
    website?: SortOrder
    venue?: SortOrder
    type?: SortOrder
    category?: SortOrder
    logoImage?: SortOrder
    coverImage?: SortOrder
    displayedProducts?: SortOrder
    tourGuide?: SortOrder
    onBanner?: SortOrder
    isPublished?: SortOrder
    isFeatured?: SortOrder
    isSectoralFairIndex?: SortOrder
    isDefiniteDepartureTour?: SortOrder
    date?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    hotelId?: SortOrder
    fairImagesId?: SortOrder
    tourImagesId?: SortOrder
    paidServices?: SortOrder
    freeServices?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type FairListRelationFilter = {
    every?: FairWhereInput
    some?: FairWhereInput
    none?: FairWhereInput
  }

  export type FairOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HotelCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    images?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HotelMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HotelMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FairImagesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    images?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FairImagesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FairImagesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TourImagesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    images?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TourImagesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TourImagesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MessageCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    subject?: SortOrder
    contactMessage?: SortOrder
    from?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MessageMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    subject?: SortOrder
    contactMessage?: SortOrder
    from?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MessageMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    subject?: SortOrder
    contactMessage?: SortOrder
    from?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SeoPageCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    title?: SortOrder
    description?: SortOrder
    keywords?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SeoPageMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    title?: SortOrder
    description?: SortOrder
    keywords?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SeoPageMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    title?: SortOrder
    description?: SortOrder
    keywords?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CampanyCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isPublished?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CampanyMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isPublished?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CampanyMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isPublished?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PropertyCreateNestedManyWithoutProfileInput = {
    create?: XOR<PropertyCreateWithoutProfileInput, PropertyUncheckedCreateWithoutProfileInput> | PropertyCreateWithoutProfileInput[] | PropertyUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: PropertyCreateOrConnectWithoutProfileInput | PropertyCreateOrConnectWithoutProfileInput[]
    createMany?: PropertyCreateManyProfileInputEnvelope
    connect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
  }

  export type PropertyUncheckedCreateNestedManyWithoutProfileInput = {
    create?: XOR<PropertyCreateWithoutProfileInput, PropertyUncheckedCreateWithoutProfileInput> | PropertyCreateWithoutProfileInput[] | PropertyUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: PropertyCreateOrConnectWithoutProfileInput | PropertyCreateOrConnectWithoutProfileInput[]
    createMany?: PropertyCreateManyProfileInputEnvelope
    connect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PropertyUpdateManyWithoutProfileNestedInput = {
    create?: XOR<PropertyCreateWithoutProfileInput, PropertyUncheckedCreateWithoutProfileInput> | PropertyCreateWithoutProfileInput[] | PropertyUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: PropertyCreateOrConnectWithoutProfileInput | PropertyCreateOrConnectWithoutProfileInput[]
    upsert?: PropertyUpsertWithWhereUniqueWithoutProfileInput | PropertyUpsertWithWhereUniqueWithoutProfileInput[]
    createMany?: PropertyCreateManyProfileInputEnvelope
    set?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    disconnect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    delete?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    connect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    update?: PropertyUpdateWithWhereUniqueWithoutProfileInput | PropertyUpdateWithWhereUniqueWithoutProfileInput[]
    updateMany?: PropertyUpdateManyWithWhereWithoutProfileInput | PropertyUpdateManyWithWhereWithoutProfileInput[]
    deleteMany?: PropertyScalarWhereInput | PropertyScalarWhereInput[]
  }

  export type PropertyUncheckedUpdateManyWithoutProfileNestedInput = {
    create?: XOR<PropertyCreateWithoutProfileInput, PropertyUncheckedCreateWithoutProfileInput> | PropertyCreateWithoutProfileInput[] | PropertyUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: PropertyCreateOrConnectWithoutProfileInput | PropertyCreateOrConnectWithoutProfileInput[]
    upsert?: PropertyUpsertWithWhereUniqueWithoutProfileInput | PropertyUpsertWithWhereUniqueWithoutProfileInput[]
    createMany?: PropertyCreateManyProfileInputEnvelope
    set?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    disconnect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    delete?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    connect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    update?: PropertyUpdateWithWhereUniqueWithoutProfileInput | PropertyUpdateWithWhereUniqueWithoutProfileInput[]
    updateMany?: PropertyUpdateManyWithWhereWithoutProfileInput | PropertyUpdateManyWithWhereWithoutProfileInput[]
    deleteMany?: PropertyScalarWhereInput | PropertyScalarWhereInput[]
  }

  export type ProfileCreateNestedOneWithoutPropertyInput = {
    create?: XOR<ProfileCreateWithoutPropertyInput, ProfileUncheckedCreateWithoutPropertyInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutPropertyInput
    connect?: ProfileWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProfileUpdateOneRequiredWithoutPropertyNestedInput = {
    create?: XOR<ProfileCreateWithoutPropertyInput, ProfileUncheckedCreateWithoutPropertyInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutPropertyInput
    upsert?: ProfileUpsertWithoutPropertyInput
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutPropertyInput, ProfileUpdateWithoutPropertyInput>, ProfileUncheckedUpdateWithoutPropertyInput>
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type HotelCreateNestedOneWithoutFairsInput = {
    create?: XOR<HotelCreateWithoutFairsInput, HotelUncheckedCreateWithoutFairsInput>
    connectOrCreate?: HotelCreateOrConnectWithoutFairsInput
    connect?: HotelWhereUniqueInput
  }

  export type FairImagesCreateNestedOneWithoutFairsInput = {
    create?: XOR<FairImagesCreateWithoutFairsInput, FairImagesUncheckedCreateWithoutFairsInput>
    connectOrCreate?: FairImagesCreateOrConnectWithoutFairsInput
    connect?: FairImagesWhereUniqueInput
  }

  export type TourImagesCreateNestedOneWithoutFairsInput = {
    create?: XOR<TourImagesCreateWithoutFairsInput, TourImagesUncheckedCreateWithoutFairsInput>
    connectOrCreate?: TourImagesCreateOrConnectWithoutFairsInput
    connect?: TourImagesWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type HotelUpdateOneWithoutFairsNestedInput = {
    create?: XOR<HotelCreateWithoutFairsInput, HotelUncheckedCreateWithoutFairsInput>
    connectOrCreate?: HotelCreateOrConnectWithoutFairsInput
    upsert?: HotelUpsertWithoutFairsInput
    disconnect?: HotelWhereInput | boolean
    delete?: HotelWhereInput | boolean
    connect?: HotelWhereUniqueInput
    update?: XOR<XOR<HotelUpdateToOneWithWhereWithoutFairsInput, HotelUpdateWithoutFairsInput>, HotelUncheckedUpdateWithoutFairsInput>
  }

  export type FairImagesUpdateOneWithoutFairsNestedInput = {
    create?: XOR<FairImagesCreateWithoutFairsInput, FairImagesUncheckedCreateWithoutFairsInput>
    connectOrCreate?: FairImagesCreateOrConnectWithoutFairsInput
    upsert?: FairImagesUpsertWithoutFairsInput
    disconnect?: FairImagesWhereInput | boolean
    delete?: FairImagesWhereInput | boolean
    connect?: FairImagesWhereUniqueInput
    update?: XOR<XOR<FairImagesUpdateToOneWithWhereWithoutFairsInput, FairImagesUpdateWithoutFairsInput>, FairImagesUncheckedUpdateWithoutFairsInput>
  }

  export type TourImagesUpdateOneWithoutFairsNestedInput = {
    create?: XOR<TourImagesCreateWithoutFairsInput, TourImagesUncheckedCreateWithoutFairsInput>
    connectOrCreate?: TourImagesCreateOrConnectWithoutFairsInput
    upsert?: TourImagesUpsertWithoutFairsInput
    disconnect?: TourImagesWhereInput | boolean
    delete?: TourImagesWhereInput | boolean
    connect?: TourImagesWhereUniqueInput
    update?: XOR<XOR<TourImagesUpdateToOneWithWhereWithoutFairsInput, TourImagesUpdateWithoutFairsInput>, TourImagesUncheckedUpdateWithoutFairsInput>
  }

  export type HotelCreateimagesInput = {
    set: string[]
  }

  export type FairCreateNestedManyWithoutHotelInput = {
    create?: XOR<FairCreateWithoutHotelInput, FairUncheckedCreateWithoutHotelInput> | FairCreateWithoutHotelInput[] | FairUncheckedCreateWithoutHotelInput[]
    connectOrCreate?: FairCreateOrConnectWithoutHotelInput | FairCreateOrConnectWithoutHotelInput[]
    createMany?: FairCreateManyHotelInputEnvelope
    connect?: FairWhereUniqueInput | FairWhereUniqueInput[]
  }

  export type FairUncheckedCreateNestedManyWithoutHotelInput = {
    create?: XOR<FairCreateWithoutHotelInput, FairUncheckedCreateWithoutHotelInput> | FairCreateWithoutHotelInput[] | FairUncheckedCreateWithoutHotelInput[]
    connectOrCreate?: FairCreateOrConnectWithoutHotelInput | FairCreateOrConnectWithoutHotelInput[]
    createMany?: FairCreateManyHotelInputEnvelope
    connect?: FairWhereUniqueInput | FairWhereUniqueInput[]
  }

  export type HotelUpdateimagesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type FairUpdateManyWithoutHotelNestedInput = {
    create?: XOR<FairCreateWithoutHotelInput, FairUncheckedCreateWithoutHotelInput> | FairCreateWithoutHotelInput[] | FairUncheckedCreateWithoutHotelInput[]
    connectOrCreate?: FairCreateOrConnectWithoutHotelInput | FairCreateOrConnectWithoutHotelInput[]
    upsert?: FairUpsertWithWhereUniqueWithoutHotelInput | FairUpsertWithWhereUniqueWithoutHotelInput[]
    createMany?: FairCreateManyHotelInputEnvelope
    set?: FairWhereUniqueInput | FairWhereUniqueInput[]
    disconnect?: FairWhereUniqueInput | FairWhereUniqueInput[]
    delete?: FairWhereUniqueInput | FairWhereUniqueInput[]
    connect?: FairWhereUniqueInput | FairWhereUniqueInput[]
    update?: FairUpdateWithWhereUniqueWithoutHotelInput | FairUpdateWithWhereUniqueWithoutHotelInput[]
    updateMany?: FairUpdateManyWithWhereWithoutHotelInput | FairUpdateManyWithWhereWithoutHotelInput[]
    deleteMany?: FairScalarWhereInput | FairScalarWhereInput[]
  }

  export type FairUncheckedUpdateManyWithoutHotelNestedInput = {
    create?: XOR<FairCreateWithoutHotelInput, FairUncheckedCreateWithoutHotelInput> | FairCreateWithoutHotelInput[] | FairUncheckedCreateWithoutHotelInput[]
    connectOrCreate?: FairCreateOrConnectWithoutHotelInput | FairCreateOrConnectWithoutHotelInput[]
    upsert?: FairUpsertWithWhereUniqueWithoutHotelInput | FairUpsertWithWhereUniqueWithoutHotelInput[]
    createMany?: FairCreateManyHotelInputEnvelope
    set?: FairWhereUniqueInput | FairWhereUniqueInput[]
    disconnect?: FairWhereUniqueInput | FairWhereUniqueInput[]
    delete?: FairWhereUniqueInput | FairWhereUniqueInput[]
    connect?: FairWhereUniqueInput | FairWhereUniqueInput[]
    update?: FairUpdateWithWhereUniqueWithoutHotelInput | FairUpdateWithWhereUniqueWithoutHotelInput[]
    updateMany?: FairUpdateManyWithWhereWithoutHotelInput | FairUpdateManyWithWhereWithoutHotelInput[]
    deleteMany?: FairScalarWhereInput | FairScalarWhereInput[]
  }

  export type FairImagesCreateimagesInput = {
    set: string[]
  }

  export type FairCreateNestedManyWithoutFairImageInput = {
    create?: XOR<FairCreateWithoutFairImageInput, FairUncheckedCreateWithoutFairImageInput> | FairCreateWithoutFairImageInput[] | FairUncheckedCreateWithoutFairImageInput[]
    connectOrCreate?: FairCreateOrConnectWithoutFairImageInput | FairCreateOrConnectWithoutFairImageInput[]
    createMany?: FairCreateManyFairImageInputEnvelope
    connect?: FairWhereUniqueInput | FairWhereUniqueInput[]
  }

  export type FairUncheckedCreateNestedManyWithoutFairImageInput = {
    create?: XOR<FairCreateWithoutFairImageInput, FairUncheckedCreateWithoutFairImageInput> | FairCreateWithoutFairImageInput[] | FairUncheckedCreateWithoutFairImageInput[]
    connectOrCreate?: FairCreateOrConnectWithoutFairImageInput | FairCreateOrConnectWithoutFairImageInput[]
    createMany?: FairCreateManyFairImageInputEnvelope
    connect?: FairWhereUniqueInput | FairWhereUniqueInput[]
  }

  export type FairImagesUpdateimagesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type FairUpdateManyWithoutFairImageNestedInput = {
    create?: XOR<FairCreateWithoutFairImageInput, FairUncheckedCreateWithoutFairImageInput> | FairCreateWithoutFairImageInput[] | FairUncheckedCreateWithoutFairImageInput[]
    connectOrCreate?: FairCreateOrConnectWithoutFairImageInput | FairCreateOrConnectWithoutFairImageInput[]
    upsert?: FairUpsertWithWhereUniqueWithoutFairImageInput | FairUpsertWithWhereUniqueWithoutFairImageInput[]
    createMany?: FairCreateManyFairImageInputEnvelope
    set?: FairWhereUniqueInput | FairWhereUniqueInput[]
    disconnect?: FairWhereUniqueInput | FairWhereUniqueInput[]
    delete?: FairWhereUniqueInput | FairWhereUniqueInput[]
    connect?: FairWhereUniqueInput | FairWhereUniqueInput[]
    update?: FairUpdateWithWhereUniqueWithoutFairImageInput | FairUpdateWithWhereUniqueWithoutFairImageInput[]
    updateMany?: FairUpdateManyWithWhereWithoutFairImageInput | FairUpdateManyWithWhereWithoutFairImageInput[]
    deleteMany?: FairScalarWhereInput | FairScalarWhereInput[]
  }

  export type FairUncheckedUpdateManyWithoutFairImageNestedInput = {
    create?: XOR<FairCreateWithoutFairImageInput, FairUncheckedCreateWithoutFairImageInput> | FairCreateWithoutFairImageInput[] | FairUncheckedCreateWithoutFairImageInput[]
    connectOrCreate?: FairCreateOrConnectWithoutFairImageInput | FairCreateOrConnectWithoutFairImageInput[]
    upsert?: FairUpsertWithWhereUniqueWithoutFairImageInput | FairUpsertWithWhereUniqueWithoutFairImageInput[]
    createMany?: FairCreateManyFairImageInputEnvelope
    set?: FairWhereUniqueInput | FairWhereUniqueInput[]
    disconnect?: FairWhereUniqueInput | FairWhereUniqueInput[]
    delete?: FairWhereUniqueInput | FairWhereUniqueInput[]
    connect?: FairWhereUniqueInput | FairWhereUniqueInput[]
    update?: FairUpdateWithWhereUniqueWithoutFairImageInput | FairUpdateWithWhereUniqueWithoutFairImageInput[]
    updateMany?: FairUpdateManyWithWhereWithoutFairImageInput | FairUpdateManyWithWhereWithoutFairImageInput[]
    deleteMany?: FairScalarWhereInput | FairScalarWhereInput[]
  }

  export type TourImagesCreateimagesInput = {
    set: string[]
  }

  export type FairCreateNestedManyWithoutTourImageInput = {
    create?: XOR<FairCreateWithoutTourImageInput, FairUncheckedCreateWithoutTourImageInput> | FairCreateWithoutTourImageInput[] | FairUncheckedCreateWithoutTourImageInput[]
    connectOrCreate?: FairCreateOrConnectWithoutTourImageInput | FairCreateOrConnectWithoutTourImageInput[]
    createMany?: FairCreateManyTourImageInputEnvelope
    connect?: FairWhereUniqueInput | FairWhereUniqueInput[]
  }

  export type FairUncheckedCreateNestedManyWithoutTourImageInput = {
    create?: XOR<FairCreateWithoutTourImageInput, FairUncheckedCreateWithoutTourImageInput> | FairCreateWithoutTourImageInput[] | FairUncheckedCreateWithoutTourImageInput[]
    connectOrCreate?: FairCreateOrConnectWithoutTourImageInput | FairCreateOrConnectWithoutTourImageInput[]
    createMany?: FairCreateManyTourImageInputEnvelope
    connect?: FairWhereUniqueInput | FairWhereUniqueInput[]
  }

  export type TourImagesUpdateimagesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type FairUpdateManyWithoutTourImageNestedInput = {
    create?: XOR<FairCreateWithoutTourImageInput, FairUncheckedCreateWithoutTourImageInput> | FairCreateWithoutTourImageInput[] | FairUncheckedCreateWithoutTourImageInput[]
    connectOrCreate?: FairCreateOrConnectWithoutTourImageInput | FairCreateOrConnectWithoutTourImageInput[]
    upsert?: FairUpsertWithWhereUniqueWithoutTourImageInput | FairUpsertWithWhereUniqueWithoutTourImageInput[]
    createMany?: FairCreateManyTourImageInputEnvelope
    set?: FairWhereUniqueInput | FairWhereUniqueInput[]
    disconnect?: FairWhereUniqueInput | FairWhereUniqueInput[]
    delete?: FairWhereUniqueInput | FairWhereUniqueInput[]
    connect?: FairWhereUniqueInput | FairWhereUniqueInput[]
    update?: FairUpdateWithWhereUniqueWithoutTourImageInput | FairUpdateWithWhereUniqueWithoutTourImageInput[]
    updateMany?: FairUpdateManyWithWhereWithoutTourImageInput | FairUpdateManyWithWhereWithoutTourImageInput[]
    deleteMany?: FairScalarWhereInput | FairScalarWhereInput[]
  }

  export type FairUncheckedUpdateManyWithoutTourImageNestedInput = {
    create?: XOR<FairCreateWithoutTourImageInput, FairUncheckedCreateWithoutTourImageInput> | FairCreateWithoutTourImageInput[] | FairUncheckedCreateWithoutTourImageInput[]
    connectOrCreate?: FairCreateOrConnectWithoutTourImageInput | FairCreateOrConnectWithoutTourImageInput[]
    upsert?: FairUpsertWithWhereUniqueWithoutTourImageInput | FairUpsertWithWhereUniqueWithoutTourImageInput[]
    createMany?: FairCreateManyTourImageInputEnvelope
    set?: FairWhereUniqueInput | FairWhereUniqueInput[]
    disconnect?: FairWhereUniqueInput | FairWhereUniqueInput[]
    delete?: FairWhereUniqueInput | FairWhereUniqueInput[]
    connect?: FairWhereUniqueInput | FairWhereUniqueInput[]
    update?: FairUpdateWithWhereUniqueWithoutTourImageInput | FairUpdateWithWhereUniqueWithoutTourImageInput[]
    updateMany?: FairUpdateManyWithWhereWithoutTourImageInput | FairUpdateManyWithWhereWithoutTourImageInput[]
    deleteMany?: FairScalarWhereInput | FairScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type PropertyCreateWithoutProfileInput = {
    id?: string
    name: string
    tagline: string
    category: string
    image: string
    country: string
    description: string
    price: number
    guests: number
    bedrooms: number
    beds: number
    baths: number
    amenities: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PropertyUncheckedCreateWithoutProfileInput = {
    id?: string
    name: string
    tagline: string
    category: string
    image: string
    country: string
    description: string
    price: number
    guests: number
    bedrooms: number
    beds: number
    baths: number
    amenities: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PropertyCreateOrConnectWithoutProfileInput = {
    where: PropertyWhereUniqueInput
    create: XOR<PropertyCreateWithoutProfileInput, PropertyUncheckedCreateWithoutProfileInput>
  }

  export type PropertyCreateManyProfileInputEnvelope = {
    data: PropertyCreateManyProfileInput | PropertyCreateManyProfileInput[]
    skipDuplicates?: boolean
  }

  export type PropertyUpsertWithWhereUniqueWithoutProfileInput = {
    where: PropertyWhereUniqueInput
    update: XOR<PropertyUpdateWithoutProfileInput, PropertyUncheckedUpdateWithoutProfileInput>
    create: XOR<PropertyCreateWithoutProfileInput, PropertyUncheckedCreateWithoutProfileInput>
  }

  export type PropertyUpdateWithWhereUniqueWithoutProfileInput = {
    where: PropertyWhereUniqueInput
    data: XOR<PropertyUpdateWithoutProfileInput, PropertyUncheckedUpdateWithoutProfileInput>
  }

  export type PropertyUpdateManyWithWhereWithoutProfileInput = {
    where: PropertyScalarWhereInput
    data: XOR<PropertyUpdateManyMutationInput, PropertyUncheckedUpdateManyWithoutProfileInput>
  }

  export type PropertyScalarWhereInput = {
    AND?: PropertyScalarWhereInput | PropertyScalarWhereInput[]
    OR?: PropertyScalarWhereInput[]
    NOT?: PropertyScalarWhereInput | PropertyScalarWhereInput[]
    id?: StringFilter<"Property"> | string
    name?: StringFilter<"Property"> | string
    tagline?: StringFilter<"Property"> | string
    category?: StringFilter<"Property"> | string
    image?: StringFilter<"Property"> | string
    country?: StringFilter<"Property"> | string
    description?: StringFilter<"Property"> | string
    price?: IntFilter<"Property"> | number
    guests?: IntFilter<"Property"> | number
    bedrooms?: IntFilter<"Property"> | number
    beds?: IntFilter<"Property"> | number
    baths?: IntFilter<"Property"> | number
    amenities?: StringFilter<"Property"> | string
    createdAt?: DateTimeFilter<"Property"> | Date | string
    updatedAt?: DateTimeFilter<"Property"> | Date | string
    profileId?: StringFilter<"Property"> | string
  }

  export type ProfileCreateWithoutPropertyInput = {
    id?: string
    clerkId: string
    firstName: string
    lastName: string
    userName: string
    email: string
    profileImage: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProfileUncheckedCreateWithoutPropertyInput = {
    id?: string
    clerkId: string
    firstName: string
    lastName: string
    userName: string
    email: string
    profileImage: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProfileCreateOrConnectWithoutPropertyInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutPropertyInput, ProfileUncheckedCreateWithoutPropertyInput>
  }

  export type ProfileUpsertWithoutPropertyInput = {
    update: XOR<ProfileUpdateWithoutPropertyInput, ProfileUncheckedUpdateWithoutPropertyInput>
    create: XOR<ProfileCreateWithoutPropertyInput, ProfileUncheckedCreateWithoutPropertyInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutPropertyInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutPropertyInput, ProfileUncheckedUpdateWithoutPropertyInput>
  }

  export type ProfileUpdateWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    profileImage?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileUncheckedUpdateWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    profileImage?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HotelCreateWithoutFairsInput = {
    id?: string
    name: string
    description: string
    images?: HotelCreateimagesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HotelUncheckedCreateWithoutFairsInput = {
    id?: string
    name: string
    description: string
    images?: HotelCreateimagesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HotelCreateOrConnectWithoutFairsInput = {
    where: HotelWhereUniqueInput
    create: XOR<HotelCreateWithoutFairsInput, HotelUncheckedCreateWithoutFairsInput>
  }

  export type FairImagesCreateWithoutFairsInput = {
    id?: string
    name: string
    description: string
    images?: FairImagesCreateimagesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FairImagesUncheckedCreateWithoutFairsInput = {
    id?: string
    name: string
    description: string
    images?: FairImagesCreateimagesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FairImagesCreateOrConnectWithoutFairsInput = {
    where: FairImagesWhereUniqueInput
    create: XOR<FairImagesCreateWithoutFairsInput, FairImagesUncheckedCreateWithoutFairsInput>
  }

  export type TourImagesCreateWithoutFairsInput = {
    id?: string
    name: string
    description: string
    images?: TourImagesCreateimagesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TourImagesUncheckedCreateWithoutFairsInput = {
    id?: string
    name: string
    description: string
    images?: TourImagesCreateimagesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TourImagesCreateOrConnectWithoutFairsInput = {
    where: TourImagesWhereUniqueInput
    create: XOR<TourImagesCreateWithoutFairsInput, TourImagesUncheckedCreateWithoutFairsInput>
  }

  export type HotelUpsertWithoutFairsInput = {
    update: XOR<HotelUpdateWithoutFairsInput, HotelUncheckedUpdateWithoutFairsInput>
    create: XOR<HotelCreateWithoutFairsInput, HotelUncheckedCreateWithoutFairsInput>
    where?: HotelWhereInput
  }

  export type HotelUpdateToOneWithWhereWithoutFairsInput = {
    where?: HotelWhereInput
    data: XOR<HotelUpdateWithoutFairsInput, HotelUncheckedUpdateWithoutFairsInput>
  }

  export type HotelUpdateWithoutFairsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    images?: HotelUpdateimagesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HotelUncheckedUpdateWithoutFairsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    images?: HotelUpdateimagesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FairImagesUpsertWithoutFairsInput = {
    update: XOR<FairImagesUpdateWithoutFairsInput, FairImagesUncheckedUpdateWithoutFairsInput>
    create: XOR<FairImagesCreateWithoutFairsInput, FairImagesUncheckedCreateWithoutFairsInput>
    where?: FairImagesWhereInput
  }

  export type FairImagesUpdateToOneWithWhereWithoutFairsInput = {
    where?: FairImagesWhereInput
    data: XOR<FairImagesUpdateWithoutFairsInput, FairImagesUncheckedUpdateWithoutFairsInput>
  }

  export type FairImagesUpdateWithoutFairsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    images?: FairImagesUpdateimagesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FairImagesUncheckedUpdateWithoutFairsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    images?: FairImagesUpdateimagesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TourImagesUpsertWithoutFairsInput = {
    update: XOR<TourImagesUpdateWithoutFairsInput, TourImagesUncheckedUpdateWithoutFairsInput>
    create: XOR<TourImagesCreateWithoutFairsInput, TourImagesUncheckedCreateWithoutFairsInput>
    where?: TourImagesWhereInput
  }

  export type TourImagesUpdateToOneWithWhereWithoutFairsInput = {
    where?: TourImagesWhereInput
    data: XOR<TourImagesUpdateWithoutFairsInput, TourImagesUncheckedUpdateWithoutFairsInput>
  }

  export type TourImagesUpdateWithoutFairsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    images?: TourImagesUpdateimagesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TourImagesUncheckedUpdateWithoutFairsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    images?: TourImagesUpdateimagesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FairCreateWithoutHotelInput = {
    id?: string
    slug: string
    name: string
    description: string
    summary?: string | null
    website?: string | null
    venue?: string | null
    type?: string | null
    category?: string | null
    logoImage?: string | null
    coverImage?: string | null
    displayedProducts?: string | null
    tourGuide?: string | null
    onBanner?: boolean
    isPublished?: boolean
    isFeatured?: boolean
    isSectoralFairIndex?: boolean
    isDefiniteDepartureTour?: boolean
    date?: string | null
    startDate?: Date | string
    endDate?: Date | string | null
    paidServices?: string | null
    freeServices?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tourPrograms?: NullableJsonNullValueInput | InputJsonValue
    fairImage?: FairImagesCreateNestedOneWithoutFairsInput
    tourImage?: TourImagesCreateNestedOneWithoutFairsInput
  }

  export type FairUncheckedCreateWithoutHotelInput = {
    id?: string
    slug: string
    name: string
    description: string
    summary?: string | null
    website?: string | null
    venue?: string | null
    type?: string | null
    category?: string | null
    logoImage?: string | null
    coverImage?: string | null
    displayedProducts?: string | null
    tourGuide?: string | null
    onBanner?: boolean
    isPublished?: boolean
    isFeatured?: boolean
    isSectoralFairIndex?: boolean
    isDefiniteDepartureTour?: boolean
    date?: string | null
    startDate?: Date | string
    endDate?: Date | string | null
    fairImagesId?: string | null
    tourImagesId?: string | null
    paidServices?: string | null
    freeServices?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tourPrograms?: NullableJsonNullValueInput | InputJsonValue
  }

  export type FairCreateOrConnectWithoutHotelInput = {
    where: FairWhereUniqueInput
    create: XOR<FairCreateWithoutHotelInput, FairUncheckedCreateWithoutHotelInput>
  }

  export type FairCreateManyHotelInputEnvelope = {
    data: FairCreateManyHotelInput | FairCreateManyHotelInput[]
    skipDuplicates?: boolean
  }

  export type FairUpsertWithWhereUniqueWithoutHotelInput = {
    where: FairWhereUniqueInput
    update: XOR<FairUpdateWithoutHotelInput, FairUncheckedUpdateWithoutHotelInput>
    create: XOR<FairCreateWithoutHotelInput, FairUncheckedCreateWithoutHotelInput>
  }

  export type FairUpdateWithWhereUniqueWithoutHotelInput = {
    where: FairWhereUniqueInput
    data: XOR<FairUpdateWithoutHotelInput, FairUncheckedUpdateWithoutHotelInput>
  }

  export type FairUpdateManyWithWhereWithoutHotelInput = {
    where: FairScalarWhereInput
    data: XOR<FairUpdateManyMutationInput, FairUncheckedUpdateManyWithoutHotelInput>
  }

  export type FairScalarWhereInput = {
    AND?: FairScalarWhereInput | FairScalarWhereInput[]
    OR?: FairScalarWhereInput[]
    NOT?: FairScalarWhereInput | FairScalarWhereInput[]
    id?: StringFilter<"Fair"> | string
    slug?: StringFilter<"Fair"> | string
    name?: StringFilter<"Fair"> | string
    description?: StringFilter<"Fair"> | string
    summary?: StringNullableFilter<"Fair"> | string | null
    website?: StringNullableFilter<"Fair"> | string | null
    venue?: StringNullableFilter<"Fair"> | string | null
    type?: StringNullableFilter<"Fair"> | string | null
    category?: StringNullableFilter<"Fair"> | string | null
    logoImage?: StringNullableFilter<"Fair"> | string | null
    coverImage?: StringNullableFilter<"Fair"> | string | null
    displayedProducts?: StringNullableFilter<"Fair"> | string | null
    tourGuide?: StringNullableFilter<"Fair"> | string | null
    onBanner?: BoolFilter<"Fair"> | boolean
    isPublished?: BoolFilter<"Fair"> | boolean
    isFeatured?: BoolFilter<"Fair"> | boolean
    isSectoralFairIndex?: BoolFilter<"Fair"> | boolean
    isDefiniteDepartureTour?: BoolFilter<"Fair"> | boolean
    date?: StringNullableFilter<"Fair"> | string | null
    startDate?: DateTimeFilter<"Fair"> | Date | string
    endDate?: DateTimeNullableFilter<"Fair"> | Date | string | null
    hotelId?: StringNullableFilter<"Fair"> | string | null
    fairImagesId?: StringNullableFilter<"Fair"> | string | null
    tourImagesId?: StringNullableFilter<"Fair"> | string | null
    paidServices?: StringNullableFilter<"Fair"> | string | null
    freeServices?: StringNullableFilter<"Fair"> | string | null
    createdAt?: DateTimeFilter<"Fair"> | Date | string
    updatedAt?: DateTimeFilter<"Fair"> | Date | string
    tourPrograms?: JsonNullableFilter<"Fair">
  }

  export type FairCreateWithoutFairImageInput = {
    id?: string
    slug: string
    name: string
    description: string
    summary?: string | null
    website?: string | null
    venue?: string | null
    type?: string | null
    category?: string | null
    logoImage?: string | null
    coverImage?: string | null
    displayedProducts?: string | null
    tourGuide?: string | null
    onBanner?: boolean
    isPublished?: boolean
    isFeatured?: boolean
    isSectoralFairIndex?: boolean
    isDefiniteDepartureTour?: boolean
    date?: string | null
    startDate?: Date | string
    endDate?: Date | string | null
    paidServices?: string | null
    freeServices?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tourPrograms?: NullableJsonNullValueInput | InputJsonValue
    hotel?: HotelCreateNestedOneWithoutFairsInput
    tourImage?: TourImagesCreateNestedOneWithoutFairsInput
  }

  export type FairUncheckedCreateWithoutFairImageInput = {
    id?: string
    slug: string
    name: string
    description: string
    summary?: string | null
    website?: string | null
    venue?: string | null
    type?: string | null
    category?: string | null
    logoImage?: string | null
    coverImage?: string | null
    displayedProducts?: string | null
    tourGuide?: string | null
    onBanner?: boolean
    isPublished?: boolean
    isFeatured?: boolean
    isSectoralFairIndex?: boolean
    isDefiniteDepartureTour?: boolean
    date?: string | null
    startDate?: Date | string
    endDate?: Date | string | null
    hotelId?: string | null
    tourImagesId?: string | null
    paidServices?: string | null
    freeServices?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tourPrograms?: NullableJsonNullValueInput | InputJsonValue
  }

  export type FairCreateOrConnectWithoutFairImageInput = {
    where: FairWhereUniqueInput
    create: XOR<FairCreateWithoutFairImageInput, FairUncheckedCreateWithoutFairImageInput>
  }

  export type FairCreateManyFairImageInputEnvelope = {
    data: FairCreateManyFairImageInput | FairCreateManyFairImageInput[]
    skipDuplicates?: boolean
  }

  export type FairUpsertWithWhereUniqueWithoutFairImageInput = {
    where: FairWhereUniqueInput
    update: XOR<FairUpdateWithoutFairImageInput, FairUncheckedUpdateWithoutFairImageInput>
    create: XOR<FairCreateWithoutFairImageInput, FairUncheckedCreateWithoutFairImageInput>
  }

  export type FairUpdateWithWhereUniqueWithoutFairImageInput = {
    where: FairWhereUniqueInput
    data: XOR<FairUpdateWithoutFairImageInput, FairUncheckedUpdateWithoutFairImageInput>
  }

  export type FairUpdateManyWithWhereWithoutFairImageInput = {
    where: FairScalarWhereInput
    data: XOR<FairUpdateManyMutationInput, FairUncheckedUpdateManyWithoutFairImageInput>
  }

  export type FairCreateWithoutTourImageInput = {
    id?: string
    slug: string
    name: string
    description: string
    summary?: string | null
    website?: string | null
    venue?: string | null
    type?: string | null
    category?: string | null
    logoImage?: string | null
    coverImage?: string | null
    displayedProducts?: string | null
    tourGuide?: string | null
    onBanner?: boolean
    isPublished?: boolean
    isFeatured?: boolean
    isSectoralFairIndex?: boolean
    isDefiniteDepartureTour?: boolean
    date?: string | null
    startDate?: Date | string
    endDate?: Date | string | null
    paidServices?: string | null
    freeServices?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tourPrograms?: NullableJsonNullValueInput | InputJsonValue
    hotel?: HotelCreateNestedOneWithoutFairsInput
    fairImage?: FairImagesCreateNestedOneWithoutFairsInput
  }

  export type FairUncheckedCreateWithoutTourImageInput = {
    id?: string
    slug: string
    name: string
    description: string
    summary?: string | null
    website?: string | null
    venue?: string | null
    type?: string | null
    category?: string | null
    logoImage?: string | null
    coverImage?: string | null
    displayedProducts?: string | null
    tourGuide?: string | null
    onBanner?: boolean
    isPublished?: boolean
    isFeatured?: boolean
    isSectoralFairIndex?: boolean
    isDefiniteDepartureTour?: boolean
    date?: string | null
    startDate?: Date | string
    endDate?: Date | string | null
    hotelId?: string | null
    fairImagesId?: string | null
    paidServices?: string | null
    freeServices?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tourPrograms?: NullableJsonNullValueInput | InputJsonValue
  }

  export type FairCreateOrConnectWithoutTourImageInput = {
    where: FairWhereUniqueInput
    create: XOR<FairCreateWithoutTourImageInput, FairUncheckedCreateWithoutTourImageInput>
  }

  export type FairCreateManyTourImageInputEnvelope = {
    data: FairCreateManyTourImageInput | FairCreateManyTourImageInput[]
    skipDuplicates?: boolean
  }

  export type FairUpsertWithWhereUniqueWithoutTourImageInput = {
    where: FairWhereUniqueInput
    update: XOR<FairUpdateWithoutTourImageInput, FairUncheckedUpdateWithoutTourImageInput>
    create: XOR<FairCreateWithoutTourImageInput, FairUncheckedCreateWithoutTourImageInput>
  }

  export type FairUpdateWithWhereUniqueWithoutTourImageInput = {
    where: FairWhereUniqueInput
    data: XOR<FairUpdateWithoutTourImageInput, FairUncheckedUpdateWithoutTourImageInput>
  }

  export type FairUpdateManyWithWhereWithoutTourImageInput = {
    where: FairScalarWhereInput
    data: XOR<FairUpdateManyMutationInput, FairUncheckedUpdateManyWithoutTourImageInput>
  }

  export type PropertyCreateManyProfileInput = {
    id?: string
    name: string
    tagline: string
    category: string
    image: string
    country: string
    description: string
    price: number
    guests: number
    bedrooms: number
    beds: number
    baths: number
    amenities: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PropertyUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tagline?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    guests?: IntFieldUpdateOperationsInput | number
    bedrooms?: IntFieldUpdateOperationsInput | number
    beds?: IntFieldUpdateOperationsInput | number
    baths?: IntFieldUpdateOperationsInput | number
    amenities?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyUncheckedUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tagline?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    guests?: IntFieldUpdateOperationsInput | number
    bedrooms?: IntFieldUpdateOperationsInput | number
    beds?: IntFieldUpdateOperationsInput | number
    baths?: IntFieldUpdateOperationsInput | number
    amenities?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyUncheckedUpdateManyWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tagline?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    guests?: IntFieldUpdateOperationsInput | number
    bedrooms?: IntFieldUpdateOperationsInput | number
    beds?: IntFieldUpdateOperationsInput | number
    baths?: IntFieldUpdateOperationsInput | number
    amenities?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FairCreateManyHotelInput = {
    id?: string
    slug: string
    name: string
    description: string
    summary?: string | null
    website?: string | null
    venue?: string | null
    type?: string | null
    category?: string | null
    logoImage?: string | null
    coverImage?: string | null
    displayedProducts?: string | null
    tourGuide?: string | null
    onBanner?: boolean
    isPublished?: boolean
    isFeatured?: boolean
    isSectoralFairIndex?: boolean
    isDefiniteDepartureTour?: boolean
    date?: string | null
    startDate?: Date | string
    endDate?: Date | string | null
    fairImagesId?: string | null
    tourImagesId?: string | null
    paidServices?: string | null
    freeServices?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tourPrograms?: NullableJsonNullValueInput | InputJsonValue
  }

  export type FairUpdateWithoutHotelInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    venue?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    logoImage?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    displayedProducts?: NullableStringFieldUpdateOperationsInput | string | null
    tourGuide?: NullableStringFieldUpdateOperationsInput | string | null
    onBanner?: BoolFieldUpdateOperationsInput | boolean
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isSectoralFairIndex?: BoolFieldUpdateOperationsInput | boolean
    isDefiniteDepartureTour?: BoolFieldUpdateOperationsInput | boolean
    date?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paidServices?: NullableStringFieldUpdateOperationsInput | string | null
    freeServices?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tourPrograms?: NullableJsonNullValueInput | InputJsonValue
    fairImage?: FairImagesUpdateOneWithoutFairsNestedInput
    tourImage?: TourImagesUpdateOneWithoutFairsNestedInput
  }

  export type FairUncheckedUpdateWithoutHotelInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    venue?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    logoImage?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    displayedProducts?: NullableStringFieldUpdateOperationsInput | string | null
    tourGuide?: NullableStringFieldUpdateOperationsInput | string | null
    onBanner?: BoolFieldUpdateOperationsInput | boolean
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isSectoralFairIndex?: BoolFieldUpdateOperationsInput | boolean
    isDefiniteDepartureTour?: BoolFieldUpdateOperationsInput | boolean
    date?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fairImagesId?: NullableStringFieldUpdateOperationsInput | string | null
    tourImagesId?: NullableStringFieldUpdateOperationsInput | string | null
    paidServices?: NullableStringFieldUpdateOperationsInput | string | null
    freeServices?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tourPrograms?: NullableJsonNullValueInput | InputJsonValue
  }

  export type FairUncheckedUpdateManyWithoutHotelInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    venue?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    logoImage?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    displayedProducts?: NullableStringFieldUpdateOperationsInput | string | null
    tourGuide?: NullableStringFieldUpdateOperationsInput | string | null
    onBanner?: BoolFieldUpdateOperationsInput | boolean
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isSectoralFairIndex?: BoolFieldUpdateOperationsInput | boolean
    isDefiniteDepartureTour?: BoolFieldUpdateOperationsInput | boolean
    date?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fairImagesId?: NullableStringFieldUpdateOperationsInput | string | null
    tourImagesId?: NullableStringFieldUpdateOperationsInput | string | null
    paidServices?: NullableStringFieldUpdateOperationsInput | string | null
    freeServices?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tourPrograms?: NullableJsonNullValueInput | InputJsonValue
  }

  export type FairCreateManyFairImageInput = {
    id?: string
    slug: string
    name: string
    description: string
    summary?: string | null
    website?: string | null
    venue?: string | null
    type?: string | null
    category?: string | null
    logoImage?: string | null
    coverImage?: string | null
    displayedProducts?: string | null
    tourGuide?: string | null
    onBanner?: boolean
    isPublished?: boolean
    isFeatured?: boolean
    isSectoralFairIndex?: boolean
    isDefiniteDepartureTour?: boolean
    date?: string | null
    startDate?: Date | string
    endDate?: Date | string | null
    hotelId?: string | null
    tourImagesId?: string | null
    paidServices?: string | null
    freeServices?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tourPrograms?: NullableJsonNullValueInput | InputJsonValue
  }

  export type FairUpdateWithoutFairImageInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    venue?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    logoImage?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    displayedProducts?: NullableStringFieldUpdateOperationsInput | string | null
    tourGuide?: NullableStringFieldUpdateOperationsInput | string | null
    onBanner?: BoolFieldUpdateOperationsInput | boolean
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isSectoralFairIndex?: BoolFieldUpdateOperationsInput | boolean
    isDefiniteDepartureTour?: BoolFieldUpdateOperationsInput | boolean
    date?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paidServices?: NullableStringFieldUpdateOperationsInput | string | null
    freeServices?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tourPrograms?: NullableJsonNullValueInput | InputJsonValue
    hotel?: HotelUpdateOneWithoutFairsNestedInput
    tourImage?: TourImagesUpdateOneWithoutFairsNestedInput
  }

  export type FairUncheckedUpdateWithoutFairImageInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    venue?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    logoImage?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    displayedProducts?: NullableStringFieldUpdateOperationsInput | string | null
    tourGuide?: NullableStringFieldUpdateOperationsInput | string | null
    onBanner?: BoolFieldUpdateOperationsInput | boolean
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isSectoralFairIndex?: BoolFieldUpdateOperationsInput | boolean
    isDefiniteDepartureTour?: BoolFieldUpdateOperationsInput | boolean
    date?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hotelId?: NullableStringFieldUpdateOperationsInput | string | null
    tourImagesId?: NullableStringFieldUpdateOperationsInput | string | null
    paidServices?: NullableStringFieldUpdateOperationsInput | string | null
    freeServices?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tourPrograms?: NullableJsonNullValueInput | InputJsonValue
  }

  export type FairUncheckedUpdateManyWithoutFairImageInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    venue?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    logoImage?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    displayedProducts?: NullableStringFieldUpdateOperationsInput | string | null
    tourGuide?: NullableStringFieldUpdateOperationsInput | string | null
    onBanner?: BoolFieldUpdateOperationsInput | boolean
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isSectoralFairIndex?: BoolFieldUpdateOperationsInput | boolean
    isDefiniteDepartureTour?: BoolFieldUpdateOperationsInput | boolean
    date?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hotelId?: NullableStringFieldUpdateOperationsInput | string | null
    tourImagesId?: NullableStringFieldUpdateOperationsInput | string | null
    paidServices?: NullableStringFieldUpdateOperationsInput | string | null
    freeServices?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tourPrograms?: NullableJsonNullValueInput | InputJsonValue
  }

  export type FairCreateManyTourImageInput = {
    id?: string
    slug: string
    name: string
    description: string
    summary?: string | null
    website?: string | null
    venue?: string | null
    type?: string | null
    category?: string | null
    logoImage?: string | null
    coverImage?: string | null
    displayedProducts?: string | null
    tourGuide?: string | null
    onBanner?: boolean
    isPublished?: boolean
    isFeatured?: boolean
    isSectoralFairIndex?: boolean
    isDefiniteDepartureTour?: boolean
    date?: string | null
    startDate?: Date | string
    endDate?: Date | string | null
    hotelId?: string | null
    fairImagesId?: string | null
    paidServices?: string | null
    freeServices?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tourPrograms?: NullableJsonNullValueInput | InputJsonValue
  }

  export type FairUpdateWithoutTourImageInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    venue?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    logoImage?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    displayedProducts?: NullableStringFieldUpdateOperationsInput | string | null
    tourGuide?: NullableStringFieldUpdateOperationsInput | string | null
    onBanner?: BoolFieldUpdateOperationsInput | boolean
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isSectoralFairIndex?: BoolFieldUpdateOperationsInput | boolean
    isDefiniteDepartureTour?: BoolFieldUpdateOperationsInput | boolean
    date?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paidServices?: NullableStringFieldUpdateOperationsInput | string | null
    freeServices?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tourPrograms?: NullableJsonNullValueInput | InputJsonValue
    hotel?: HotelUpdateOneWithoutFairsNestedInput
    fairImage?: FairImagesUpdateOneWithoutFairsNestedInput
  }

  export type FairUncheckedUpdateWithoutTourImageInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    venue?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    logoImage?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    displayedProducts?: NullableStringFieldUpdateOperationsInput | string | null
    tourGuide?: NullableStringFieldUpdateOperationsInput | string | null
    onBanner?: BoolFieldUpdateOperationsInput | boolean
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isSectoralFairIndex?: BoolFieldUpdateOperationsInput | boolean
    isDefiniteDepartureTour?: BoolFieldUpdateOperationsInput | boolean
    date?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hotelId?: NullableStringFieldUpdateOperationsInput | string | null
    fairImagesId?: NullableStringFieldUpdateOperationsInput | string | null
    paidServices?: NullableStringFieldUpdateOperationsInput | string | null
    freeServices?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tourPrograms?: NullableJsonNullValueInput | InputJsonValue
  }

  export type FairUncheckedUpdateManyWithoutTourImageInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    venue?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    logoImage?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    displayedProducts?: NullableStringFieldUpdateOperationsInput | string | null
    tourGuide?: NullableStringFieldUpdateOperationsInput | string | null
    onBanner?: BoolFieldUpdateOperationsInput | boolean
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isSectoralFairIndex?: BoolFieldUpdateOperationsInput | boolean
    isDefiniteDepartureTour?: BoolFieldUpdateOperationsInput | boolean
    date?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hotelId?: NullableStringFieldUpdateOperationsInput | string | null
    fairImagesId?: NullableStringFieldUpdateOperationsInput | string | null
    paidServices?: NullableStringFieldUpdateOperationsInput | string | null
    freeServices?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tourPrograms?: NullableJsonNullValueInput | InputJsonValue
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