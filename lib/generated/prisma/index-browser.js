
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.6.0
 * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
 */
Prisma.prismaVersion = {
  client: "6.6.0",
  engine: "f676762280b54cd07c770017ed3711ddde35f37a"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.ProfileScalarFieldEnum = {
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

exports.Prisma.PropertyScalarFieldEnum = {
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

exports.Prisma.ProductScalarFieldEnum = {
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

exports.Prisma.BlogScalarFieldEnum = {
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

exports.Prisma.FairScalarFieldEnum = {
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

exports.Prisma.HotelScalarFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description',
  images: 'images',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.FairImagesScalarFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description',
  images: 'images',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.TourImagesScalarFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description',
  images: 'images',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.MessageScalarFieldEnum = {
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

exports.Prisma.SeoPageScalarFieldEnum = {
  id: 'id',
  url: 'url',
  title: 'title',
  description: 'description',
  keywords: 'keywords',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullableJsonNullValueInput = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
};


exports.Prisma.ModelName = {
  Profile: 'Profile',
  Property: 'Property',
  Product: 'Product',
  Blog: 'Blog',
  Fair: 'Fair',
  Hotel: 'Hotel',
  FairImages: 'FairImages',
  TourImages: 'TourImages',
  Message: 'Message',
  SeoPage: 'SeoPage'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }

        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
