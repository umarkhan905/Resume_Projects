const products = [
  {
    id: 1,
    shippingPrice: 20,
    name: "Nike React Infinity Run Flyknit ",
    brand: "NIKE",
    gender: "Men's Shoes",
    category: "RUNNING",
    price: 160,
    isFeatured: true,
    rating: 5.0,
    items_left: 3,
    imageURL:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-665455a5-45de-40fb-945f-c1852b82400d/react-infinity-run-flyknit-mens-running-shoe-zX42Nc.jpg",
    otherImages: [
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-665455a5-45de-40fb-945f-c1852b82400d/react-infinity-run-flyknit-mens-running-shoe-zX42Nc.jpg",
      "https://www.swag-kicks.com/cdn/shop/products/20240202_055855_IMG_6738_20copy.jpg?v=1706853560&width=823",
      "https://www.swag-kicks.com/cdn/shop/products/20240202_055855_IMG_6743_20copy.jpg?v=1706853560&width=823",
      "https://www.swag-kicks.com/cdn/shop/products/20240202_055856_IMG_6740_20copy.jpg?v=1706853560&width=823",
      "https://www.swag-kicks.com/cdn/shop/products/20240202_055856_IMG_6742_20copy.jpg?v=1706853560&width=823",
    ],
    description:
      "Made in Vietnam. Imported from USA. Not a fake / Not a first copy / Not a replica. 100% Original & Genuine Sneakers. All are inspected by our team for originality and quality. ",
    reviews: [
      {
        id: 1,
        name: "Sarah87",
        rating: 5.0,
        avatar:
          "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHVzZXJ8ZW58MHx8MHx8fDA%3D",
        comment:
          "The Nike React Infinity Run Flyknit shoes are designed for runners who want a lightweight and flexible shoe that provides a smooth and responsive ride. The knit upper is breathable and comfortable, while the React foam cushioning provides a responsive and energy-returning feel. The flexible outsole provides traction and stability.",
      },
      {
        id: 2,
        name: "FitnessFanatic24",
        rating: 5.0,
        avatar:
          "https://cdn.pixabay.com/photo/2017/07/18/23/23/user-2517433_1280.png",
        comment:
          "I love how stylish and lightweight the Nike React Infinity Run Flyknits are. Perfect for long-distance running!",
      },
      {
        id: 3,
        name: "MarathonRunnerX",
        rating: 5.0,
        avatar:
          "https://images.unsplash.com/flagged/photo-1573740144655-bbb6e88fb18a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
        comment:
          "I've tried many running shoes, but nothing compares to the comfort and performance of the Nike React Infinity Run Flyknits. Highly recommend them to all runners!",
      },
    ],
  },
  {
    id: 2,
    shippingPrice: 18,
    name: "Nike Miler Shoes",
    brand: "NIKE",
    gender: "Men's Shoes",
    category: "RUNNING",
    price: 130,
    isFeatured: true,
    rating: 4.9,
    items_left: 3,
    imageURL:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-5cc7de3b-2afc-49c2-a1e4-0508997d09e6/react-miler-mens-running-shoe-DgF6nr.jpg",
    otherImages: [
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-5cc7de3b-2afc-49c2-a1e4-0508997d09e6/react-miler-mens-running-shoe-DgF6nr.jpg",
      "https://i5.walmartimages.com/asr/e7a21ffd-ab8e-4151-a221-0811aa7c05ce.d27c6fe21581c097029e561b11cc8624.jpeg?odnHeight=160&odnWidth=160&odnBg=FFFFFF",
      "https://i5.walmartimages.com/asr/c7d67237-6ee6-4e07-b1c1-2f5bbf6eae88.69753d985d2a44e8b8740ca64dbc22b5.jpeg?odnHeight=160&odnWidth=160&odnBg=FFFFFF",
      "https://i5.walmartimages.com/asr/47d6b7c6-80da-4d5a-88e4-56d08b2b316f.64c4c227d5592e8117e0136bd30b5543.jpeg?odnHeight=160&odnWidth=160&odnBg=FFFFFF",
    ],
    description:
      " Giving you trusted stability, the Nike Men's React Miler running shoes bring athlete-informed performance. These dependable running shoes offer a locked-in fit and a durable feel so you can take on those miles.",
    reviews: [
      {
        id: 1,
        name: "Menta Ray",
        rating: 4.8,
        avatar:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        comment:
          "The Nike Miler Shoes are a great option for runners who want a comfortable and supportive shoe. The mesh upper allows for breathability, while the foam midsole provides cushioning and impact protection. The rubber outsole provides traction and durability.",
      },
      {
        id: 2,
        name: "John Smith",
        rating: 4.9,
        avatar:
          "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
        comment:
          "The Nike Miler Shoes are designed with a breathable mesh upper that allows air to circulate, keeping your feet cool and dry during your run. The midfoot strap provides a secure fit, while the foam midsole provides cushioning and impact protection.",
      },
      {
        id: 3,
        name: "Georgia",
        rating: 5.0,
        avatar:
          "https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
        comment:
          "TThe Nike Miler Shoes are designed with a flexible and lightweight mesh upper that allows your feet to move naturally during your run. The midfoot strap provides a secure fit, while the foam midsole provides cushioning and impact protection.",
      },
    ],
  },
  {
    id: 3,
    shippingPrice: 15,
    name: "Nike Air Zoom Shoes",
    brand: "NIKE",
    gender: "Women's Shoes",
    category: "RUNNING",
    price: 120,
    isFeatured: true,
    rating: 4.0,
    items_left: 3,
    imageURL:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-33b0a0a5-c171-46cc-ad20-04a768703e47/air-zoom-pegasus-37-womens-running-shoe-Jl0bDf.jpg",
    otherImages: [
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-33b0a0a5-c171-46cc-ad20-04a768703e47/air-zoom-pegasus-37-womens-running-shoe-Jl0bDf.jpg",
      "https://i.ebayimg.com/images/g/Hl0AAOSw-LVgs~f1/s-l500.jpg",
      "https://i.ebayimg.com/images/g/kJQAAOSwOVtgs~f4/s-l1600.jpg",
      "https://i.ebayimg.com/images/g/5tgAAOSwt1xgs~f8/s-l1600.jpg",
      "https://i.ebayimg.com/images/g/-~EAAOSwhMtgs~gC/s-l1600.jpg",
    ],
    description:
      "Nike Air Zoom Pegasus 37 Cz9308-001 Multi-col Running Shoes Lace Up women Sz 10. Condition is Pre-owned. Insoles not included for hygienic reasons.",
    reviews: [
      {
        id: 1,
        name: "Emily23",
        rating: 4.4,
        avatar:
          "https://cdn.pixabay.com/photo/2018/05/12/18/31/pets-3394234_1280.jpg",
        comment:
          "Just got my hands on a pair of Nike Air Zoom shoes, and I'm blown away by the comfort and responsiveness! Definitely worth the investment.",
      },
      {
        id: 2,
        name: "Lily_Run4Fun",
        rating: 4.2,
        avatar:
          "https://cdn.pixabay.com/photo/2019/10/10/18/51/smartphone-4540273_1280.jpg",
        comment:
          "I've been using Nike Air Zoom shoes for my daily runs, and I can't believe how lightweight they feel without sacrificing support. A must-have for any runner!",
      },
      {
        id: 3,
        name: "Alex_in_motion",
        rating: 4.0,
        avatar:
          "https://cdn.pixabay.com/photo/2017/08/31/09/01/woman-2699801_1280.jpg",
        comment:
          "These Nike Air Zoom shoes are not only stylish but also incredibly versatile. Whether I'm hitting the gym or going for a run, they always deliver maximum comfort and support.",
      },
    ],
  },
  {
    id: 4,
    shippingPrice: 30,
    name: "Nike Joyride Shoes",
    brand: "NIKE",
    gender: "Women's Shoes",
    category: "RUNNING",
    price: 180,
    isFeatured: true,
    rating: 3.8,
    items_left: 3,
    imageURL:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/99a7d3cb-e40c-4474-91c2-0f2e6d231fd2/joyride-run-flyknit-womens-running-shoe-HcfnJd.jpg",
    otherImages: [
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/99a7d3cb-e40c-4474-91c2-0f2e6d231fd2/joyride-run-flyknit-womens-running-shoe-HcfnJd.jpg",
      "https://i.ebayimg.com/images/g/FicAAOSwr~hjHVix/s-l1600.jpg",
      "https://i.ebayimg.com/images/g/peMAAOSwhi9jHViy/s-l960.jpg",
      "https://i.ebayimg.com/images/g/qM0AAOSwf5FjHViy/s-l960.jpg",
      "https://i.ebayimg.com/images/g/b8MAAOSwXkJjHViy/s-l960.jpg",
      "https://i.ebayimg.com/images/g/gcMAAOSwI39jHViy/s-l960.jpg",
      "https://i.ebayimg.com/images/g/vUMAAOSwO6xjHViz/s-l960.jpg",
    ],
    description:
      "Nike Joyride Shoes Multi-col Running Shoes Lace Up women Sz 10. Condition is Pre-owned. Insoles not included for hygienic reasons.",
    reviews: [
      {
        id: 1,
        name: "GlideStrider",
        rating: 2.8,
        avatar:
          "https://cdn.pixabay.com/photo/2018/05/11/22/25/computer-user-3391894_1280.jpg",
        comment:
          "I had high hopes for the Nike Joyride shoes, but I found them to be lacking in support and stability. The beads felt gimmicky and didn't provide the cushioning I expected. Disappointed with my purchase.",
      },
      {
        id: 2,
        name: "ZenithSole",
        rating: 4.0,
        avatar:
          "https://images.unsplash.com/photo-1546961329-78bef0414d7c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHVzZXJ8ZW58MHx8MHx8fDA%3D",
        comment:
          "Just got my pair of Nike Joyride shoes, and they're like walking on clouds! So much cushioning and comfort.",
      },
      {
        id: 3,
        name: "PulsePacer",
        rating: 4.5,
        avatar:
          "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHVzZXJ8ZW58MHx8MHx8fDA%3D",
        comment:
          "After trying out the Nike Joyride shoes, I can't imagine going back to regular sneakers. The responsiveness and bounce are unmatched!",
      },
    ],
  },

  {
    id: 5,
    shippingPrice: 5,
    name: "Nizza X Disney Shoes",
    brand: "ADIDAS",
    gender: "Kid's Shoes",
    category: "CASUAL",
    price: 55,
    isFeatured: true,
    rating: 4.9,
    items_left: 6,
    imageURL:
      "https://assets.adidas.com/images/h_320,f_auto,q_auto:sensitive,fl_lossy/ef901c7aeac042578eceab9d0159196c_9366/Nizza_x_Disney_Sport_Goofy_Shoes_White_FW0651_01_standard.jpg",
    otherImages: [
      "https://assets.adidas.com/images/h_320,f_auto,q_auto:sensitive,fl_lossy/ef901c7aeac042578eceab9d0159196c_9366/Nizza_x_Disney_Sport_Goofy_Shoes_White_FW0651_01_standard.jpg",
      "https://2app.kicksonfire.com/kofapp/upload/events_images/ipad_disney-x-adidas-nizza-sport-gs-goofy-cloud-white-1.jpg",
      "https://2app.kicksonfire.com/kofapp/upload/events_images/ipad_disney-x-adidas-nizza-sport-gs-goofy-cloud-white-2.jpg",
      "https://2app.kicksonfire.com/kofapp/upload/events_images/ipad_disney-x-adidas-nizza-sport-gs-goofy-cloud-white-3.jpg",
      "https://2app.kicksonfire.com/kofapp/upload/events_images/ipad_disney-x-adidas-nizza-sport-gs-goofy-cloud-white-4.jpg",
      "https://2app.kicksonfire.com/kofapp/upload/events_images/ipad_disney-x-adidas-nizza-sport-gs-goofy-cloud-white-5.jpg",
      "https://2app.kicksonfire.com/kofapp/upload/events_images/ipad_disney-x-adidas-nizza-sport-gs-goofy-cloud-white-6.jpg",
    ],
    description:
      "Introducing the Adidas Nizza x Disney Sport Goofy Pack in white, a limited-edition sneaker released in 2020. This sneaker is designed for men and comes in a UK shoe size of 9.5 and US shoe size of 10.5. The upper material is made of canvas and features a lace-up closure for a secure fit. The sneaker is part of the Adidas Nizza product line and has a style code of FW0645. It is perfect for various occasions including casual wear, activewear, and workwear. The Disney and Sports theme of the sneaker is highlighted by the presence of Goofy character on the sneaker. Made in Vietnam, the sneaker is suitable for all seasons, including winter, summer, fall, and spring.",
    reviews: [
      {
        id: 1,
        name: "WanderFeetNomad",
        rating: 5.0,
        avatar:
          "https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHVzZXJ8ZW58MHx8MHx8fDA%3D",
        comment:
          "As a Disney fanatic, I was thrilled to get my hands on the Nizza X Disney shoes. The design is whimsical and nostalgic, and the quality is top-notch. They're comfortable to wear all day, and I've received so many compliments on them!",
      },
      {
        id: 2,
        name: "TrailBlazeDreamer",
        rating: 4.7,
        avatar:
          "https://cdn.pixabay.com/photo/2018/04/13/23/48/horsetail-3317962_1280.jpg",
        comment:
          "I've been a collector of Disney memorabilia for years, so when I saw the Nizza X Disney shoes, I knew I had to have them. The attention to detail is incredible, from the embroidered Mickey Mouse logo to the hidden Disney references on the sole. They're a true collector's item!",
      },
      {
        id: 3,
        name: "PixelatedPaws",
        rating: 5.0,
        avatar:
          "https://cdn.pixabay.com/photo/2014/09/03/05/10/matrix-434035_1280.jpg",
        comment:
          "The collaboration between Nizza and Disney is pure magic! These shoes are a perfect blend of style and comfort. The Mickey Mouse details are subtle yet charming, and they add a playful touch to any outfit. Definitely a must-have for Disney fans!",
      },
    ],
  },
  {
    id: 6,
    shippingPrice: 6,
    name: "X_PLR Shoes",
    brand: "ADIDAS",
    gender: "Kid's Shoes",
    category: "CASUAL",
    price: 65,
    isFeatured: true,
    rating: 4.9,
    items_left: 5,
    imageURL:
      "https://assets.adidas.com/images/h_320,f_auto,q_auto:sensitive,fl_lossy/a36518227134495da766ab9d01772fa2_9366/X_PLR_Shoes_Red_FY9063_01_standard.jpg",
    otherImages: [
      "https://assets.adidas.com/images/h_320,f_auto,q_auto:sensitive,fl_lossy/a36518227134495da766ab9d01772fa2_9366/X_PLR_Shoes_Red_FY9063_01_standard.jpg",
      "https://static.ftshp.digital/img/p/1/1/0/4/7/3/110473-full_product.jpg",
      "https://static.ftshp.digital/img/p/1/1/0/4/7/4/110474-full_product.jpg",
      "https://static.ftshp.digital/img/p/1/1/0/4/7/5/110475-full_product.jpg",
      "https://static.ftshp.digital/img/p/1/1/0/4/7/8/110478-full_product.jpg",
      "https://static.ftshp.digital/img/p/1/1/0/4/7/6/110476-full_product.jpg",
      "https://static.ftshp.digital/img/p/1/1/0/4/7/7/110477-full_product.jpg",
    ],
    description:
      "If you’re one of those people who prefer functionality and don’t want to spend astronomical prices for sneakers, we have good news for you. The adidas X PLR sneakers are a more affordable version of the super-successful NMD model. They have inherited a similar slip-on silhouette, which is not complemented by boost but by a well-washable and tested EVA sole. That allowed adidas to reduce the price and finally offer sneakers with a colorful midsole too. Pick your pair from the endless offer!",
    reviews: [
      {
        id: 1,
        name: "NebulaSneaks",
        rating: 4.8,
        avatar:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHVzZXJ8ZW58MHx8MHx8fDA%3D",
        comment:
          "The cushioning in the X_PLR shoes is on point! My feet feel like they're walking on clouds with every step.",
      },
      {
        id: 2,
        name: "QuillAndSole",
        rating: 4.9,
        avatar:
          "https://plus.unsplash.com/premium_photo-1675626492183-865d6d8e2e8a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHVzZXJ8ZW58MHx8MHx8fDA%3D",
        comment:
          "The X_PLR shoes are so versatile! Whether I'm running errands or hitting the gym, they provide the support and style I need.",
      },
      {
        id: 3,
        name: "SolarStride",
        rating: 5.0,
        avatar:
          "https://plus.unsplash.com/premium_photo-1664099905313-f391570783fe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
        comment:
          "Just picked up a pair of X_PLR shoes and I'm loving the sleek design and comfort. Perfect for everyday wear!",
      },
    ],
  },
  {
    id: 7,
    shippingPrice: 10,
    name: "Superstar Shoes",
    brand: "ADIDAS",
    gender: "Women's Shoes",
    category: "CASUAL",
    price: 90,
    isFeatured: true,
    rating: 4.2,
    items_left: 3,
    imageURL:
      "https://assets.adidas.com/images/h_320,f_auto,q_auto:sensitive,fl_lossy/12365dbc7c424288b7cdab4900dc7099_9366/Superstar_Shoes_White_FW3553_FW3553_01_standard.jpg",
    otherImages: [
      "https://assets.adidas.com/images/h_320,f_auto,q_auto:sensitive,fl_lossy/12365dbc7c424288b7cdab4900dc7099_9366/Superstar_Shoes_White_FW3553_FW3553_01_standard.jpg",
      "https://i.ebayimg.com/images/g/iHMAAOSwOEVgs70R/s-l1600.jpg",
      "https://i.ebayimg.com/images/g/fhEAAOSwhA5gs70T/s-l960.jpg",
      "https://i.ebayimg.com/images/g/B44AAOSwOV9gs70U/s-l960.jpg",
      "https://i.ebayimg.com/images/g/qn0AAOSw~Xhgs70W/s-l960.jpg",
    ],
    description:
      "Constructed with White leather uppers, Black Three Stripes and heels along with Gold branding. Highlighting each release is its translucent shell toes and outsoles.",
    reviews: [
      {
        id: 1,
        name: "Nova",
        rating: 4.0,
        avatar:
          "https://images.unsplash.com/photo-1619895862022-09114b41f16f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHVzZXJ8ZW58MHx8MHx8fDA%3D",
        comment:
          "I'm loving the retro vibe of Superstar shoes. They give my outfits a cool, vintage edge.",
      },
      {
        id: 2,
        name: "Luminary",
        rating: 4.2,
        avatar:
          "https://cdn.pixabay.com/photo/2017/07/14/07/39/matrix-2502945_1280.jpg",
        comment:
          "I've been wearing Superstar shoes for years, and they never disappoint. The quality and durability are unmatched.",
      },
      {
        id: 3,
        name: "CelestialSneaks",
        rating: 4.5,
        avatar:
          "https://cdn.pixabay.com/photo/2019/01/28/11/56/registration-3960205_1280.jpg",
        comment:
          "Superstar shoes are iconic for a reason! Classic style meets comfort in these timeless kicks.",
      },
    ],
  },
  {
    id: 8,
    shippingPrice: 8,
    name: "SK80-Low Shoes",
    brand: "Vans",
    gender: "Men's Shoes",
    category: "CASUAL",
    price: 70,
    isFeatured: true,
    rating: 4.4,
    items_left: 3,
    imageURL: "https://images.vans.com/is/image/Vans/UUK24I-HERO?$583x583$",
    otherImages: [
      "https://images.vans.com/is/image/Vans/UUK24I-HERO?$583x583$",
      "https://melzooshop.com/cdn/shop/products/VN0A4UUK24I1_VN0A4UUK24I1_03_compact.jpg?v=1625638243",
      "https://images.vans.com/is/image/Vans/UUK24I-HERO?$583x583$",
      "https://melzooshop.com/cdn/shop/products/VN0A4UUK24I1_VN0A4UUK24I1_02_compact.jpg?v=1625638243",
      "https://melzooshop.com/cdn/shop/products/VN0A4UUK24I1_VN0A4UUK24I1_04_compact.jpg?v=1625638243",
      "https://melzooshop.com/cdn/shop/products/VN0A4UUK24I1_VN0A4UUK24I1_05_compact.jpg?v=1625638243",
    ],
    description:
      "Vans Mens Old Skool Sneakers Ivory Blue 721356 Skate Shoes Low Top 10M",
    reviews: [
      {
        id: 1,
        name: "Aim bot",
        rating: 4.8,
        avatar:
          "https://plus.unsplash.com/premium_photo-1664541336896-b3d5f7dec9a3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fHVzZXJ8ZW58MHx8MHx8fDA%3D",
        comment:
          "SK80-Low Shoes are incredibly lightweight, making them ideal for long walks or runs. Plus, the cushioning provides excellent support for my feet.",
      },
      {
        id: 2,
        name: "LunarLuxe",
        rating: 4.2,
        avatar:
          "https://plus.unsplash.com/premium_photo-1688350808212-4e6908a03925?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHVzZXJ8ZW58MHx8MHx8fDA%3D",
        comment:
          "The quality of SK80-Low Shoes is outstanding. From the durable materials to the attention to detail, they're worth every penny.",
      },
      {
        id: 3,
        name: "VelocityVibes",
        rating: 4.4,
        avatar:
          "https://cdn.pixabay.com/photo/2024/02/15/22/58/technology-8576321_1280.jpg",
        comment:
          "SK80-Low Shoes are a game-changer! The sleek design and comfortable fit make them my new go-to sneakers for every occasion.",
      },
    ],
  },
  {
    id: 9,
    shippingPrice: 8,
    name: "SK80-Low Shoes 222222222",
    brand: "Vans",
    gender: "Men's Shoes",
    category: "CASUAL",
    price: 70,
    isFeatured: true,
    rating: 4.4,
    items_left: 0,
    imageURL: "https://images.vans.com/is/image/Vans/UUK24I-HERO?$583x583$",
    otherImages: [
      "https://images.vans.com/is/image/Vans/UUK24I-HERO?$583x583$",
      "https://melzooshop.com/cdn/shop/products/VN0A4UUK24I1_VN0A4UUK24I1_03_compact.jpg?v=1625638243",
      "https://images.vans.com/is/image/Vans/UUK24I-HERO?$583x583$",
      "https://melzooshop.com/cdn/shop/products/VN0A4UUK24I1_VN0A4UUK24I1_02_compact.jpg?v=1625638243",
      "https://melzooshop.com/cdn/shop/products/VN0A4UUK24I1_VN0A4UUK24I1_04_compact.jpg?v=1625638243",
      "https://melzooshop.com/cdn/shop/products/VN0A4UUK24I1_VN0A4UUK24I1_05_compact.jpg?v=1625638243",
    ],
    description:
      "Vans Mens Old Skool Sneakers Ivory Blue 721356 Skate Shoes Low Top 10M",
    reviews: [
      {
        id: 1,
        name: "Aim bot",
        rating: 4.8,
        avatar:
          "https://plus.unsplash.com/premium_photo-1664541336896-b3d5f7dec9a3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fHVzZXJ8ZW58MHx8MHx8fDA%3D",
        comment:
          "SK80-Low Shoes are incredibly lightweight, making them ideal for long walks or runs. Plus, the cushioning provides excellent support for my feet.",
      },
      {
        id: 2,
        name: "LunarLuxe",
        rating: 4.2,
        avatar:
          "https://plus.unsplash.com/premium_photo-1688350808212-4e6908a03925?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHVzZXJ8ZW58MHx8MHx8fDA%3D",
        comment:
          "The quality of SK80-Low Shoes is outstanding. From the durable materials to the attention to detail, they're worth every penny.",
      },
      {
        id: 3,
        name: "VelocityVibes",
        rating: 4.4,
        avatar:
          "https://cdn.pixabay.com/photo/2024/02/15/22/58/technology-8576321_1280.jpg",
        comment:
          "SK80-Low Shoes are a game-changer! The sleek design and comfortable fit make them my new go-to sneakers for every occasion.",
      },
    ],
  },
];

export default products;
