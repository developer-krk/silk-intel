import banarasiSilk from "../assets/banarasiSilk.webp";

const products = [
    {
        id: 1,
        name: "Banarasi Silk",
        category: "Silk",
        city: "Varanasi",
        supplier: "Kashi Textiles",
        supplierId: 101,
        price: 420,
        unit: "meter",
        rating: 4.8,
        reviewCount: 2,
        stock: 250,
        availability: "In Stock",
        description:
            "Premium handcrafted Banarasi silk fabric ideal for bridal wear, sarees and luxury garments.",

        image: banarasiSilk,

        priceHistory: [
            { month: "Jan", price: 390 },
            { month: "Feb", price: 400 },
            { month: "Mar", price: 415 },
            { month: "Apr", price: 410 },
            { month: "May", price: 425 },
            { month: "Jun", price: 420 }
        ],

        reviews: [
            {
                id: 1,
                user: "Rahul Sharma",
                rating: 5,
                comment: "Excellent quality silk."
            },
            {
                id: 2,
                user: "Priya Patel",
                rating: 4,
                comment: "Beautiful texture and finish."
            }
        ]
    },

    {
        id: 2,
        name: "Cotton Fabric",
        category: "Cotton",
        city: "Surat",
        supplier: "Surat Cotton Mills",
        supplierId: 102,
        price: 180,
        unit: "meter",
        rating: 4.6,
        reviewCount: 2,
        stock: 420,
        availability: "In Stock",
        description:
            "Soft breathable cotton fabric suitable for shirts, kurtas and casual wear.",

        image: "https://img.magnific.com/free-photo/cream-linen-fabric_23-2151932234.jpg?semt=ais_hybrid&w=740&q=80",

        priceHistory: [
            { month: "Jan", price: 170 },
            { month: "Feb", price: 175 },
            { month: "Mar", price: 178 },
            { month: "Apr", price: 182 },
            { month: "May", price: 185 },
            { month: "Jun", price: 180 }
        ],

        reviews: [
            {
                id: 3,
                user: "Amit",
                rating: 5,
                comment: "Very comfortable."
            },
            {
                id: 4,
                user: "Neha",
                rating: 4,
                comment: "Good value for money."
            }
        ]
    },

    {
        id: 3,
        name: "Linen Blend",
        category: "Linen",
        city: "Jaipur",
        supplier: "Pink City Fabrics",
        supplierId: 103,
        price: 310,
        unit: "meter",
        rating: 4.7,
        reviewCount: 2,
        stock: 150,
        availability: "In Stock",
        description:
            "Premium linen blend offering comfort with wrinkle resistance.",

        image: "https://static.fibre2fashion.com/MemberResources/LeadResources/8/2020/7/Seller/20182301/Images/20182301_0_cotton-linen.jpg",

        priceHistory: [
            { month: "Jan", price: 295 },
            { month: "Feb", price: 300 },
            { month: "Mar", price: 305 },
            { month: "Apr", price: 315 },
            { month: "May", price: 320 },
            { month: "Jun", price: 310 }
        ],

        reviews: [
            {
                id: 5,
                user: "Riya",
                rating: 5,
                comment: "Perfect for summer."
            },
            {
                id: 6,
                user: "Karan",
                rating: 4,
                comment: "Nice premium feel."
            }
        ]
    },

    {
        id: 4,
        name: "Rayon Printed Fabric",
        category: "Rayon",
        city: "Ahmedabad",
        supplier: "Gujarat Prints",
        supplierId: 104,
        price: 220,
        unit: "meter",
        rating: 4.5,
        reviewCount: 2,
        stock: 380,
        availability: "In Stock",
        description:
            "Designer rayon fabric with attractive floral prints.",

        image: "",

        priceHistory: [
            { month: "Jan", price: 205 },
            { month: "Feb", price: 210 },
            { month: "Mar", price: 215 },
            { month: "Apr", price: 225 },
            { month: "May", price: 230 },
            { month: "Jun", price: 220 }
        ],

        reviews: [
            {
                id: 7,
                user: "Sneha",
                rating: 5,
                comment: "Loved the print."
            },
            {
                id: 8,
                user: "Pooja",
                rating: 4,
                comment: "Good quality."
            }
        ]
    },
    {
        id: 5,
        name: "Kanchipuram Silk",
        category: "Silk",
        city: "Kanchipuram",
        supplier: "Tamil Silk House",
        supplierId: 105,
        price: 550,
        unit: "meter",
        rating: 4.9,
        reviewCount: 2,
        stock: 90,
        availability: "In Stock",
        description:
            "Authentic Kanchipuram silk known for its durability and rich weaving.",

        image: "https://kantagiri.com/cdn/shop/files/photo_2024-08-03_20-41-10_2000x2000_crop_top.jpg?v=1722705079",

        priceHistory: [
            { month: "Jan", price: 520 },
            { month: "Feb", price: 530 },
            { month: "Mar", price: 535 },
            { month: "Apr", price: 545 },
            { month: "May", price: 555 },
            { month: "Jun", price: 550 }
        ],

        reviews: [
            {
                id: 9,
                user: "Anjali",
                rating: 5,
                comment: "Luxury quality."
            },
            {
                id: 10,
                user: "Meena",
                rating: 5,
                comment: "Worth every rupee."
            }
        ]
    },

    {
        id: 6,
        name: "Organic Cotton",
        category: "Cotton",
        city: "Coimbatore",
        supplier: "Eco Cotton India",
        supplierId: 106,
        price: 260,
        unit: "meter",
        rating: 4.7,
        reviewCount: 2,
        stock: 300,
        availability: "In Stock",
        description:
            "Eco-friendly organic cotton with premium softness.",

        image: "https://images.squarespace-cdn.com/content/v1/5981c7129f7456741cde6662/1508506929759-TZVHTB5CRG3BFXBP26UE/GUJOC-T25-B-handwoven-organic-cotton-fabric-bleached.jpg?format=1500w",

        priceHistory: [
            { month: "Jan", price: 245 },
            { month: "Feb", price: 250 },
            { month: "Mar", price: 255 },
            { month: "Apr", price: 265 },
            { month: "May", price: 270 },
            { month: "Jun", price: 260 }
        ],

        reviews: [
            {
                id: 11,
                user: "Harsh",
                rating: 5,
                comment: "Very soft."
            },
            {
                id: 12,
                user: "Komal",
                rating: 4,
                comment: "Good eco-friendly product."
            }
        ]
    },

    {
        id: 7,
        name: "Pure Linen",
        category: "Linen",
        city: "Ludhiana",
        supplier: "Punjab Linen",
        supplierId: 107,
        price: 390,
        unit: "meter",
        rating: 4.8,
        reviewCount: 2,
        stock: 170,
        availability: "In Stock",
        description:
            "High-quality breathable pure linen fabric.",

        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLfG0mX1oGznc8Xx25UTdpxMRFj094uy5KhSg304snbDu0PUR0AfqUUIk5&s=10",

        priceHistory: [
            { month: "Jan", price: 365 },
            { month: "Feb", price: 370 },
            { month: "Mar", price: 380 },
            { month: "Apr", price: 395 },
            { month: "May", price: 400 },
            { month: "Jun", price: 390 }
        ],

        reviews: [
            {
                id: 13,
                user: "Saurabh",
                rating: 5,
                comment: "Premium quality."
            },
            {
                id: 14,
                user: "Akash",
                rating: 4,
                comment: "Nice fabric."
            }
        ]
    },

    {
        id: 8,
        name: "Designer Rayon",
        category: "Rayon",
        city: "Surat",
        supplier: "Surat Fashion Fabrics",
        supplierId: 108,
        price: 240,
        unit: "meter",
        rating: 4.4,
        reviewCount: 2,
        stock: 260,
        availability: "In Stock",
        description:
            "Lightweight designer rayon fabric for trendy garments.",

        image: "",

        priceHistory: [
            { month: "Jan", price: 225 },
            { month: "Feb", price: 230 },
            { month: "Mar", price: 235 },
            { month: "Apr", price: 245 },
            { month: "May", price: 250 },
            { month: "Jun", price: 240 }
        ],

        reviews: [
            {
                id: 15,
                user: "Divya",
                rating: 4,
                comment: "Looks stylish."
            },
            {
                id: 16,
                user: "Rohit",
                rating: 5,
                comment: "Satisfied with quality."
            }
        ]
    }
];

export default products;