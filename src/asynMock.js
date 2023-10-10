const products = [
    {
        "id": 1,
        "price": 80,
        "name": "Mercedes AMG Petronas F1 2023 Team Stealth Hoodie",
        "productUrl": "https://images.footballfanatics.com/mercedes-amg-petronas-f1-team/mercedes-amg-petronas-f1-2023-team-stealth-hoodie_ss5_p-13376397+u-3tajvzqsjn4tdb1c2mwv+v-laviv0myn6kymyw1dyjl.jpg?_hv=2&w=340",
        "category": "apparel",
        "stock": 50
    }, 
    {
        "id": 2,
        "price": 50,
        "name": "Oracle Red Bull Racing 2023 Team Polo",
        "productUrl": "https://images.footballfanatics.com/red-bull-racing/oracle-red-bull-racing-2023-team-polo_ss4_p-13334182+u-b0ltd2b4a8klkiofqnxj+v-f5c87e271a10452a97dbd9e1a8031219.jpg?_hv=2&w=340",
        "category": "apparel",
        "stock": 50
    },
    {
        "id": 3,
        "price": 55,
        "name": "Scuderia Ferrari 2023 Team Charles Leclerc T-Shirt",
        "productUrl": "https://images.footballfanatics.com/scuderia-ferrari/scuderia-ferrari-2023-team-charles-leclerc-t-shirt_ss4_p-13368477+u-1a0txatu76m1w7bkbbaj+v-b38414ba03b0479ebc7e8f9e4116ab11.jpg?_hv=2&w=340",
        "category": "apparel",
        "stock": 50
    },
    {
        "id": 4,
        "price": 5,
        "name": "Pirelli Medium Tyre Keyring - Yellow",
        "productUrl": "https://images.footballfanatics.com/pirelli/pirelli-medium-tyre-keyring-yellow_ss4_p-13329453+u-qh6lhfin10px0efjxdma+v-d5481fc37f6f47b5b35c5b60c9913b3b.jpg?_hv=2&w=340",
        "category": "accessories",
        "stock": 50
    }, 
    {
        "id": 5,
        "price": 75, 
        "name": "Mercedes AMG Petronas F1 2023 Team Softshell Jacket",
        "productUrl": "https://images.footballfanatics.com/mercedes-amg-petronas-f1-team/mercedes-amg-petronas-f1-2023-team-softshell-jacket_ss4_p-13368587+u-3eni2ld9fe08ym6ev1gj+v-d6cf1effdc564d528cf065aad06862d4.jpg?_hv=2&w=340",
        "category": "apparel",
        "stock": 50
    },
    {
        "id": 6,
        "price": 30, 
        "name": "Oracle Red Bull Racing Backpack",
        "productUrl": "https://images.footballfanatics.com/red-bull-racing/oracle-red-bull-racing-backpack_ss4_p-13368668+u-hhkstd6oq1vwquldzdkl+v-5d576e7579b74c31abbb536f6ed9a65f.jpg?_hv=2&w=340",
        "category": "accessories",
        "stock": 50
    },
    {
        "id": 7,
        "price": 40, 
        "name": "Aston Martin Cognizant F1 Official Team Telescopic Umbrella",
        "productUrl": "https://images.footballfanatics.com/aston-martin/aston-martin-cognizant-f1-official-team-telescopic-umbrella_ss4_p-13369043+u-25pfgwbt3woptemk2zhq+v-8634833c1c25460f91f8336d5b9caa2f.jpg?_hv=2&w=340",
        "category": "accessories",
        "stock": 50
    },
    {
        "id": 8,
        "price": 38, 
        "name": "Scuderia Ferrari Compact Umbrella - Red",
        "productUrl": "https://images.footballfanatics.com/scuderia-ferrari/scuderia-ferrari-compact-umbrella-red_ss4_p-12046114+u-a85sj1hghut3yc6qf0mq+v-3a4402dae3894381a86588f6159b76e4.jpg?_hv=2&w=340",
        "category": "accessories",
        "stock": 50
    },
    {
        "id": 9,
        "price": 5, 
        "name": "Pirelli Intermediate Tyre Keyring - Green",
        "productUrl": "https://images.footballfanatics.com/pirelli/pirelli-intermediate-tyre-keyring-green_ss4_p-13329452+u-mw8iwdb5vfh1k58phzv7+v-9f90c1e58e454d6aa33aac6c7f6b3874.jpg?_hv=2&w=340",
        "category": "accessories",
        "stock": 50
    },
    {
        "id": 10,
        "price": 22, 
        "name": "McLaren Flag",
        "productUrl": "https://images.footballfanatics.com/mclaren-f1-team/mclaren-flag_ss4_p-13306577+u-tfnaopzqm004jbyut356+v-f48384fec2634d04b62925a11f00b841.jpg?_hv=2&w=340",
        "category": "accessories",
        "stock": 50
    },
    {
        "id": 11,
        "price": 18, 
        "name": "BWT Alpine F1 Team A522 No.31 Esteban Ocon 1:64 Model",
        "productUrl": "https://images.footballfanatics.com/alpine/bwt-alpine-f1-team-a522-no31-esteban-ocon-1:64-model_ss4_p-13364191+u-153fha26059aqe4d0z3s+v-0b69eb2b937f4025a089cc0a8bf036d2.jpg?_hv=2&w=340",
        "category": "accessories",
        "stock": 50
    },
    {
        "id": 12,
        "price": 28, 
        "name": "Alfa Romeo Sauber F1 F1 Team ORLEN 2022 C42 No.77 - Valtteri Bottas 1:43 Model with Figure",
        "productUrl": "https://images.footballfanatics.com/alfa-romeo-racing/alfa-romeo-sauber-f1-f1-team-orlen-2022-c42-no77-valtteri-bottas-1:43-model-with-figure_ss4_p-13365698+u-198qqicuo4adyynadb9g+v-af392f46a55f4762ad44a998dc14847d.jpg?_hv=2&w=340",
        "category": "accessories",
        "stock": 50
    },
    {
        "id": 13,
        "price": 50, 
        "name": "Ayrton Senna Lotus 97T - Horizontal Tribute - Estoril 1985 Limited Edition Poster",
        "productUrl": "https://images.footballfanatics.com/ayrton-senna/ayrton-senna-lotus-97t-horizontal-tribute-estoril-1985-limited-edition-poster_ss4_p-13385623+u-ez0vl650r3kb8j1lg2wu+v-5e8e8acff3794490a2c5acfe69fefa91.jpg?_hv=2&w=340",
        "category": "accessories",
        "stock": 50
    },
    {
        "id": 14,
        "price": 31, 
        "name": "Scuderia AlphaTauri 2023 Team Cap - White",
        "productUrl": "https://images.footballfanatics.com/alphatauri/scuderia-alphatauri-2023-team-cap-white_ss4_p-13349780+u-d9zytq9qfh7xhd0xdp3l+v-1677ba9e6ddc402198180e42768246ab.jpg?_hv=2&w=340",
        "category": "apparel",
        "stock": 50
    },
    {
        "id": 15,
        "price": 40, 
        "name": "Williams Racing 2023 Team Training Jersey - Kids",
        "productUrl": "https://images.footballfanatics.com/williams-racing/williams-racing-2023-team-training-jersey-kids_ss4_p-13347537+u-9zc1pyghlnlmn9dvz0ya+v-646e64e5f4d14e72978d1f353a948c65.jpg?_hv=2&w=340",
        "category": "apparel",
        "stock": 50
    },
    {
        "id": 16,
        "price": 33, 
        "name": "Pirelli Podium Cap",
        "productUrl": "https://images.footballfanatics.com/pirelli/pirelli-podium-cap_ss4_p-13329456+u-tn0tl87z0ahyao45mdty+v-1f7f9339cb5740a8925bf111dbf746db.jpg?_hv=2&w=340",
        "category": "apparel",
        "stock": 50
    },
    {
        "id": 17,
        "price": 50, 
        "name": "Williams Racing 2023 Team Training Jersey - Womens",
        "productUrl": "https://images.footballfanatics.com/williams-racing/williams-racing-2023-team-training-jersey-womens_ss4_p-13347535+u-jcq8iqeb1nsg7pkj4lqb+v-a0ee9463c45d48ee9fc8b8b6c7d01d8a.jpg?_hv=2&w=340",
        "category": "apparel",
        "stock": 50
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 1000)
    })
}

export const getProductsByCategory = (productCategory) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(productCategory)
            resolve(products.filter(prod => prod.category === productCategory))
        }, 1000)
    })
}

export const getProductsById = (itemId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const id = parseInt(itemId, 10)
            resolve(products.find(prod => prod.id === id))
        }, 500)
    })
}