# E commerce template

This project is under development

```



1. API Architecture
We'll follow a modular monolithic architecture initially.

This means one backend application will handle all business modules, but each module will have its own routes, controllers, services and validation schemas.
Next.js Frontend

Customer Website / Admin Dashboard

HTTPS / REST / JSON

Express.js API Server
Global Middleware

CORS · Authentication · Authorization · Rate Limiting · Error Handler

Auth Module


User Module


Product Module


Cart Module


Order Module


Payment Module


Shipping Module


Inventory Module


Coupon Module


Admin Module


Content Module


Notification Module



Prisma ORM



PostgreSQL Database


Backend module structure
Every module should follow this separation:
src/
├── modules/
│   ├── auth/
│   │   ├── auth.routes.ts
│   │   ├── auth.controller.ts
│   │   ├── auth.service.ts
│   │   ├── auth.validation.ts
│   │   └── auth.interface.ts
│   │
│   ├── product/
│   ├── user/
│   ├── cart/
│   ├── order/
│   ├── payment/
│   └── ...
│
├── middlewares/
├── config/
├── utils/
├── errors/
├── app.ts
└── server.ts


Responsibilities:
- Routes: Define endpoints and connect middleware/controllers.
- Controllers: Handle HTTP requests and responses.
- Services: Implement business logic.
- Validation: Validate incoming data.
- Interfaces: Define TypeScript types where needed.
The service layer should not depend directly on Express request or response objects.
2. Base URL & API Versioning
All API endpoints must follow a consistent base URL.
Production
https://api.yourdomain.com/api/v1



Development
http://localhost:5000/api/v1



We'll use URL-based versioning.

Example:
GET /api/v1/products
GET /api/v1/orders
POST /api/v1/auth/login


Rules:
- Always use lowercase URLs.
- Use plural nouns for resource collections.
- Separate words using hyphens if needed.
- Avoid verbs in resource URLs.
- Use /api/v2 when introducing a breaking API change.
Examples:
Good	Avoid
/products	/getProducts
/users	/userList
/orders/123	/getOrderById/123
/product-reviews	/productReviews

3. HTTP Methods & Their Responsibilities
Method	Purpose	Example
GET	Retrieve data	/products
POST	Create a resource/action	/orders
PUT	Replace a resource	/users/me/address/123
PATCH	Partially update	/users/me
DELETE	Remove a resource	/wishlist/items/123

Important rules:
- GET must not modify server state.
- POST is generally used for creation and business actions.
- PUT replaces the complete resource representation.
- PATCH updates only specified fields.
- DELETE should be idempotent where practical.
4. Standard API Response Structure
Every API should return a consistent response structure.
Successful response
{
  "success": true,
  "message": "Products retrieved successfully",
  "data": [],
  "meta": null
}


Single resource response
{
  "success": true,
  "message": "Product retrieved successfully",
  "data": {
    "id": "product_123",
    "name": "Premium T-Shirt",
    "price": 1200,
    "salePrice": 999
  },
  "meta": null
}


Error response
{
  "success": false,
  "message": "Validation failed",
  "error": {
    "code": "VALIDATION_ERROR",
    "details": [
      {
        "field": "email",
        "message": "Invalid email address"
      }
    ]
  },
  "meta": null
}


Response rules
1. Always include success.
2. Always include a human-readable message.
3. Use data for successful response payloads.
4. Use error for error information.
5. Use meta for pagination or additional metadata.
6. Never expose stack traces, SQL queries, passwords or internal server details in production responses.
5. HTTP Status Codes
Use standard HTTP status codes consistently.
Status	Meaning	When to use
200	OK	Successful GET, PATCH, PUT
201	Created	Resource successfully created
202	Accepted	Asynchronous operation accepted
204	No Content	Successful DELETE without response body
400	Bad Request	Invalid request structure
401	Unauthorized	Missing or invalid authentication
403	Forbidden	Insufficient permissions
404	Not Found	Resource does not exist
409	Conflict	Duplicate resource or conflicting state
422	Unprocessable Entity	Business rule or semantic validation failure
429	Too Many Requests	Rate limit exceeded
500	Internal Server Error	Unexpected server error
502	Bad Gateway	Upstream service failure
503	Service Unavailable	Server temporarily unavailable

Important distinctions:
- 401: The user is not authenticated.
- 403: The user is authenticated but doesn't have permission.
- 404: The requested resource cannot be found.
- 409: The operation conflicts with existing data or state.
For example, trying to order an out-of-stock product should return a suitable business error rather than silently creating an invalid order.
6. Pagination Standards
Any endpoint that returns a collection should support pagination where appropriate.

Example:
GET /api/v1/products?page=1&limit=20


Query parameters
Parameter	Type	Default	Description
page	number	1	Current page
limit	number	20	Items per page

Set a maximum limit of 100 to prevent excessively large responses.
Paginated response
{
  "success": true,
  "message": "Products retrieved successfully",
  "data": [],
  "meta": {
    "pagination": {
      "page": 1,
      "limit": 20,
      "totalItems": 150,
      "totalPages": 8,
      "hasNextPage": true,
      "hasPreviousPage": false
    }
  }
}


Pagination strategy
For your e-commerce project:
- Offset pagination (page, limit) for admin tables, reports and ordinary product listings.
- Cursor pagination for large, frequently changing datasets, such as order activity or infinite-scroll feeds.
Don't implement cursor pagination everywhere unnecessarily.
7. Filtering, Sorting & Searching
Product listings and admin management endpoints should support these capabilities.
Filtering
GET /api/v1/products?category=shirts&brand=nike&minPrice=500&maxPrice=2000


Sorting
GET /api/v1/products?sortBy=price&sortOrder=asc


Supported values:
Parameter	Values
sortBy	price, createdAt, name, popularity
sortOrder	asc, desc

Only allow predefined filter and sort fields. Never directly pass arbitrary user-supplied column names into database queries.
Searching
GET /api/v1/products?search=black%20tshirt


Combined example
GET /api/v1/products?search=tshirt&category=mens-wear&minPrice=500&maxPrice=2000&sortBy=price&sortOrder=asc&page=1&limit=20


Standard rule: Use query parameters for filtering, searching, sorting and pagination. Use path parameters to identify individual resources.
8. Request Body Standards
Use JSON for ordinary API requests.

Example:
POST /api/v1/products
Content-Type: application/json


{
  "name": "Premium T-Shirt",
  "price": "1200.00",
  "salePrice": "999.00",
  "description": "Premium cotton T-shirt"
}


Rules:
- Use camelCase for JSON properties.
- Use meaningful property names.
- Validate all incoming request data.
- Reject unexpected properties on sensitive write operations.
- Never trust frontend-calculated prices, discounts, stock quantities or order totals.
- Use multipart/form-data for file uploads.
- Never accept sensitive fields such as role, isAdmin or isVerified from ordinary customer profile update requests.
Important data conventions
Data type	Standard
IDs	String identifiers
Dates	ISO 8601
Timezone	UTC for API timestamps
Boolean	true / false
Optional fields	Omit when not applicable, or use null consistently
JSON naming	camelCase
Currency	Explicit currency code
Monetary values	Decimal strings with currency

For money, prefer decimal strings to floating-point calculations in API representations.

Example:
{
  "amount": "999.00",
  "currency": "BDT"
}


This avoids JavaScript floating-point precision problems and works well with PostgreSQL Decimal fields through Prisma.
9. Error Handling Standards
All errors should be handled through a centralized error-handling mechanism.

Recommended error codes:
Error code	Meaning
VALIDATION_ERROR	Request validation failed
AUTHENTICATION_REQUIRED	Login required
INVALID_CREDENTIALS	Incorrect login credentials
PERMISSION_DENIED	Insufficient permission
RESOURCE_NOT_FOUND	Resource not found
DUPLICATE_RESOURCE	Duplicate data
INSUFFICIENT_STOCK	Not enough stock
INVALID_COUPON	Coupon cannot be applied
PAYMENT_FAILED	Payment unsuccessful
ORDER_CANNOT_BE_CANCELLED	Invalid cancellation request
RATE_LIMIT_EXCEEDED	Too many requests
INTERNAL_SERVER_ERROR	Unexpected server error

Example:
{
  "success": false,
  "message": "Insufficient product stock",
  "error": {
    "code": "INSUFFICIENT_STOCK",
    "details": {
      "productId": "prod_123",
      "availableQuantity": 2,
      "requestedQuantity": 5
    }
  },
  "meta": null
}


Implementation standard:
- Controllers should not contain repetitive try/catch logic for every business operation.
- Use centralized error middleware.
- Use custom application error classes.
- Log internal errors securely.
- Never expose internal exception messages to customers.
10. Authentication & Authorization Conventions
Detailed authentication endpoints will be documented in Phase 2. However, establish these global rules now.
Area	Standard
Authentication	Access token + refresh token
Authorization	Role-based access control (RBAC)
Public endpoints	No login required
Protected endpoints	Valid authentication required
Admin endpoints	Authentication + permissions
Sensitive operations	Additional authorization checks

Your project has different user roles, so permission checking should happen at the backend rather than relying on frontend route protection.

For example:
Customer
├── View products
├── Manage own cart
├── Create orders
└── View own orders

Admin
├── Manage products
├── Manage orders
├── Manage customers
└── View reports


These are illustrative permissions; we'll define your complete role/permission matrix in Phase 2 and Phase 10.
11. Security & API Communication Standards
Every endpoint must follow these baseline requirements:
1. Use HTTPS in production.
2. Configure CORS with explicitly allowed frontend origins.
3. Validate and sanitize incoming data.
4. Use secure authentication cookies where applicable.
5. Apply rate limiting to sensitive endpoints.
6. Never expose passwords, tokens or secrets in API responses.
7. Use parameterized database operations through Prisma.
8. Implement authorization checks for resource ownership.
9. Validate uploaded file types, sizes and content.
10. Keep environment variables and API secrets outside source control.
Important e-commerce security rule: Never trust the frontend when processing prices, discounts, coupon eligibility, payment status, inventory or shipping charges. Recalculate and verify these on the backend.
12. API Documentation & Naming Standards
We'll maintain the API specification using OpenAPI 3.1.

Recommended documentation structure:
docs/
├── openapi.yaml
│
├── api/
│   ├── 01-global-standards.md
│   ├── 02-authentication.md
│   ├── 03-user-address.md
│   ├── 04-product-catalog.md
│   ├── 05-cart-wishlist.md
│   ├── 06-order-management.md
│   ├── 07-payment-refund.md
│   ├── 08-shipping-courier.md
│   ├── 09-coupon-inventory.md
│   ├── 10-admin-dashboard.md
│   ├── 11-content-notification.md
│   └── 12-production-standards.md
│
└── schemas/
    ├── common-responses.yaml
    ├── common-errors.yaml
    └── common-parameters.yaml


For every endpoint, document:
- Endpoint and HTTP method
- Description
- Authentication requirements
- Required role/permission
- Path parameters
- Query parameters
- Request body
- Success responses
- Error responses
- Business rules
- Related database models
13. Standard Endpoint Documentation Template
Every endpoint in the upcoming phases will follow this template.

Example:
Create Product
Property	Value
Endpoint	/api/v1/products
Method	POST
Authentication	Required
Permission	product:create
Content-Type	application/json
Success status	201

Request body:
{
  "name": "Premium T-Shirt",
  "price": "1200.00",
  "salePrice": "999.00"
}


Success response:
{
  "success": true,
  "message": "Product created successfully",
  "data": {
    "id": "prod_123",
    "name": "Premium T-Shirt",
    "price": "1200.00",
    "salePrice": "999.00"
  },
  "meta": null
}


Possible errors:
Status	Error
400	Validation error
401	Authentication required
403	Permission denied
409	Duplicate product
500	Internal server error

Business rules:
- Product name is required.
- Price must be greater than zero.
- Sale price cannot exceed regular price.
- Only authorized users can create products.
- Product data must be validated before database insertion.

Phase 1 – Final Standards Checklist
Phase 1 progress
16/16



[x] Modular monolithic architecture established
[x] REST API architecture selected
[x] API versioning established
[x] URL naming conventions established
[x] HTTP methods standardized
[x] Success response structure defined
[x] Error response structure defined
[x] HTTP status codes standardized
[x] Pagination strategy established
[x] Filtering, sorting and searching standardized
[x] Request body conventions established
[x] Date, currency and ID conventions established
[x] Centralized error handling established
[x] Authentication and authorization conventions established
[x] Security standards established
[x] OpenAPI documentation structure established

My architectural recommendations for your project:
- Keep a modular monolithic backend rather than starting with microservices.
- Use a centralized response and error-handling system.
- Keep business logic inside service layers.
- Use OpenAPI as the API contract.
- Verify all financial and inventory calculations on the backend.
- Keep API responses consistent across every module.
Next: Phase 2 – Authentication & Authorization APIs
This phase will cover registration, login, logout, refresh tokens, password recovery, email verification, session management, RBAC and permission management.

We'll also account for your customer, admin, vendor and staff role structure where applicable.

Phase 1 establishes the rules. Phase 2 starts defining the actual endpoints.
```
