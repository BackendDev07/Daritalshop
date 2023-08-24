
# Authorithation {
    1. POST http://localhost:3000/auth/register => {
        {
            "email": string
            "password": string
        },
    }

    2. POST http://localhost:3000/auth/login => {
        {
            "email": string
            "password": string
        }
    }

    3. POST http://localhost:3000/auth/verification => {
        {
            "verificationId": number
            "code": number
        }
    }

    4. POST http://localhost:3000/auth/resend => {
        {
            "verificationId": number
            "email": string
            "userId": nummber
        }
    }
}

# Category {
    1. POST http://localhost:3000/category {
        {
            "name": string
        }
    }

    2. GET http://localhost:3000/category {
        {
            message: 'All CAtegories',
            "categories": [
                {
                    "id": 1,
                    "name": "Apple"
                }
            ]
        }
    }

    2. GET http://localhost:3000/category/:id {
        {
            message: 'All CAtegories',
            "message": "Category",
            "category": {
                id": 1,
                "name": "Apple",
                "productCount": 2
            }
        }
    }

    3. GET http://localhost:3000/category/:id/products {
        {
            "message": "Products By Category",
            "category": {
                "id": 1,
                "name": "Apple",
                "products": [
                    {
                        "id": 1,
                        "name": "Macbook pro 14 m2 pro",
                        "price": 1800,
                        "description": "design by apple",
                        "categoryId": 1
                    },
                    {
                        "id": 2,
                        "name": "Macbook pro 14 m1 pro",
                        "price": 1500,
                        "description": "design by apple",
                        "categoryId": 1
                    }
                ]  
            }
        }
    }

    4. PUT http://localhost:3000/category/:id {
        {
            "name": string
        }
    }

    5. DELETED http://localhost:3000/category/:id {
        {
            "message": "Product deleted"
            "category": {
                "id": number
                "name": string
            }
        }
    }
}


# Product {
    1. POST http://localhost:3000/product {
        {
            "name": string
            "price": number
            "description": string
            "categoryId": number
        }
    }

    2. PUT http://localhost:3000/product/:id {
        {
            "name": string
            "price": number
            "description": string
        }
    }

    3. DELETE http://localhost:3000/product/:id {
        {
            "message": "Product deleted",
            "product": {
                data...
            }
        }
    }

    4. GET http://localhost:3000/product/:id {
        {
            "message": "Product data",
            "product": {
                data...
            }
        }
    }
}


# Banner {
    1. POST http://localhost:3000/banner/:id/product {
        {
            "name": string
        }
    }

    2. DELETE http://localhost:3000/banner/:id {
        {
            "message": "Banner deleted",
            "banner": {
                data...
            }
        }
    }

    3. GET http://localhost:3000/banner {
        {
            "message": "All banners",
            "banners": {
                {
                    data...
                },
                {
                    data...
                }
            }
        }
    }
}


# Cart {
    1. POST http://localhost:3000/cart {
        {
            "productId": number
        }
    }

    2. DELETE http://localhost:3000/cart/:id {
        {
            "message": "Cart deleted"
        }
    }

    3. GET http://localhost:3000/cart {
        {
            "message": "User cart",
            "cart": {
                {
                    data...
                },
                {
                    data...
                }
            }
        }
    }
}