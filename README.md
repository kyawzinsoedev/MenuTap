# 🍽️ MenuTap – Digital Menu & QR Ordering System

MenuTap is a **digital menu and QR-based ordering system** designed for restaurants.

Customers can scan a QR code placed on their table, browse the restaurant menu, add items to their cart, and place orders directly from their mobile browser without installing an application or creating an account.

---

# ✨ Features

## 📱 Customer Portal

A mobile-first ordering experience for customers.

Features:

- 📷 Scan QR code to open menu
- 🚫 No app installation required
- 🔐 No customer login required
- 🍽️ Browse menu by category
- 🛒 Add items to cart
- 📝 Place orders
- 📦 Track order status
- 🪑 Automatic table identification via QR code


---

# 🏪 Restaurant Admin Dashboard

Restaurant owners can manage daily operations.

Features:

## Dashboard

- Today's orders
- Today's sales
- Pending orders
- Completed orders
- Popular menu items


## Menu Management

- Create menu categories
- Add food items
- Upload food images
- Manage prices
- Enable/disable availability


## Table Management

- Create restaurant tables
- Generate QR codes
- Download QR labels
- Print QR codes


## Order Management

- View incoming orders
- Accept orders
- Update order status
- Track order history


## Reports

- Daily sales report
- Monthly sales report
- Order analytics


---

# 👨‍🍳 Kitchen Dashboard (KDS)

Kitchen staff can manage food preparation workflow.

Features:

- Real-time new order display
- Order queue management
- Update cooking status
- Completed order tracking


Order Workflow:

```
New Order

    |

Accepted

    |

Preparing

    |

Ready

    |

Completed
```


---

# 🔄 Customer Order Workflow

```
Customer

    |
    ▼

Scan QR Code

    |
    ▼

Open Digital Menu

    |
    ▼

Browse Food Items

    |
    ▼

Add To Cart

    |
    ▼

Confirm Order

    |
    ▼

Kitchen Dashboard

    |
    ▼

Preparing

    |
    ▼

Served

    |
    ▼

Completed
```

---

# 🏗️ System Architecture


```
              Customer Mobile


                    |

                    |

          React TypeScript App


                    |

                    |

             Laravel REST API


                    |

        ----------------------------

        |            |             |

        ▼            ▼             ▼


   PostgreSQL     Redis       Storage

   Database       Queue       S3/R2


                    |

                    |

             Laravel Reverb

                    |

                    |

          Real-time Notifications

```

---

# 🛠️ Tech Stack


## Backend

```
Laravel 12
PHP 8.4
Laravel REST API
Laravel Sanctum
Laravel Reverb
Laravel Queue
```


## Frontend

```
React
TypeScript
Vite
Tailwind CSS
shadcn/ui
```


## Database

```
PostgreSQL
```


## Cache & Queue

```
Redis
```


## Storage

```
AWS S3
Cloudflare R2
```


## Development

```
Docker
Docker Compose
Nginx
```


---

# 🗄️ Database Design


## users

Restaurant staff accounts.

```
id
name
email
password
role
created_at
updated_at
```

Roles:

```
admin
kitchen
cashier
```


---

## categories

Food categories.

```
id
name
image
status
created_at
updated_at
```

Example:

```
Pizza
Drinks
Dessert
```


---

## menus

Restaurant food items.

```
id
category_id
name
description
image
price
is_available
created_at
updated_at
```


Example:

```
Chicken Pizza

Price: 12000 MMK

Available: YES
```


---

## tables

Restaurant tables.

```
id
table_number
qr_token
status
created_at
updated_at
```


Example:

```
Table 01

QR URL:

/menu/table/{qr_token}
```


---

## orders

Customer orders.

```
id
table_id
order_number
status
total_amount
created_at
updated_at
```

Order Status:

```
pending

accepted

preparing

ready

completed

cancelled
```


---

## order_items

Order details.

```
id
order_id
menu_id
quantity
price
created_at
updated_at
```


---

## payments

Payment records.

```
id
order_id
method
amount
status
paid_at
created_at
updated_at
```


---

# 🔌 API Structure


## Authentication

```
POST /api/login

POST /api/logout

GET /api/user
```


---

## Menu API

```
GET    /api/menu

POST   /api/menu

PUT    /api/menu/{id}

DELETE /api/menu/{id}
```


---

## Category API

```
GET    /api/categories

POST   /api/categories

PUT    /api/categories/{id}

DELETE /api/categories/{id}
```


---

## Customer API

```
GET /api/customer/menu/{table_token}

POST /api/customer/orders

GET /api/customer/orders/{id}
```


---

## Order API

```
GET /api/orders

PUT /api/orders/{id}/status
```


---

# 📂 Project Structure


## Backend

```
menutap-api


app/

 ├── Http/
 │    ├── Controllers/
 │    ├── Requests/
 │    └── Resources/
 │
 ├── Models/
 │
 ├── Services/
 │
 ├── Events/
 │
 └── Jobs/


routes/

 └── api.php


database/

 ├── migrations/
 └── seeders/

```


---

## Frontend

```
menutap-web


src/

 ├── api/

 ├── components/

 ├── features/

 │    ├── auth/
 │    ├── menu/
 │    ├── order/
 │    └── dashboard/

 ├── hooks/

 ├── types/

 └── utils/

```


---

# 🚀 Installation


## Backend Setup


```bash
cd api

composer install

cp .env.example .env

php artisan key:generate

php artisan migrate --seed

php artisan serve
```


Environment:

```
DB_CONNECTION=pgsql

DB_DATABASE=menutap

DB_USERNAME=postgres

DB_PASSWORD=password
```


---

# Frontend Setup


```bash
cd web

npm install

npm run dev
```


---

# 🐳 Docker Setup


Start services:

```bash
docker compose up -d
```


Services:

```
Laravel API

React Application

PostgreSQL

Redis

Nginx
```


---

# 🔔 Real-time Order System


Technology:

```
Laravel Reverb

Laravel Echo

WebSocket
```


Flow:

```
Customer places order

        |

Laravel Event

        |

Broadcast Event

        |

Kitchen Dashboard

        |

Instant Update
```


---

# 🔐 Security


Implemented:

- Laravel Sanctum authentication
- Role-based authorization
- API validation
- Secure file uploads
- Rate limiting
- Protected admin routes


---

# 🚀 Future Improvements


- Online payment integration
- Receipt printing
- Inventory management
- Reservation system
- Customer feedback
- Loyalty system
- Multi-language support
- Analytics dashboard
- Progressive Web App (PWA)


---

# 📸 Screenshots

Screenshots will be added after UI completion.


---

# 📄 License


This project is developed for learning and portfolio purposes.

Commercial usage requires an appropriate license.
