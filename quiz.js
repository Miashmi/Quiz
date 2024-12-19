const careerQuestions = [
    {
        "question": "What's your ideal way to spend a Saturday?",
        "answers": [
            { "text": "Hosting a glamorous party", "result": "Fashion Designer", "image": "https://media.istockphoto.com/id/1298329918/photo/birthday-celebratory-toast-with-string-lights-and-champagne-silhouettes.jpg?s=612x612&w=0&k=20&c=PaDeMR5-r0NdlxghuVF9tRqR5XkCdNdTzxrkofv0Syk=" },
            { "text": "Traveling the world for photo shoots", "result": "Model", "image": "https://media.cntraveler.com/photos/59cd14cb9465da68882fb4f4/16:9/w_2560%2Cc_limit/Debate_GettyImages-585587819.jpg" },
            { "text": "Performing on stage in front of a crowd", "result": "Singer", "image": "https://www.mi.edu/wp-content/uploads/2021/11/5-Ways-to-Improve-Your-On-Stage-Performance-scaled.jpg" },
            { "text": "Designing cutting-edge gadgets", "result": "Engineer", "image": "https://www.cmr.edu.in/blog/wp-content/uploads/2023/09/Designing-for-the-Future-Technology.png" }
        ]
    },
    {
        "question": "How do you like to solve problems?",
        "answers": [
            { "text": "With a creative and artistic approach", "result": "Fashion Designer", "image": "https://images.shiksha.com/mediadata/images/articles/1707905364phpqiseG5.jpeg" },
            { "text": "Using a mix of logic and innovation", "result": "Engineer", "image": "https://media.licdn.com/dms/image/C4D12AQF-P-0ETQi07w/article-cover_image-shrink_600_2000/0/1644418011951?e=2147483647&v=beta&t=7zGS1Y5PSl7n-i0g9GWkD96qJ-D8uyjSoxLJWTeqm-w" },
            { "text": "Through detailed research and analysis", "result": "Lawyer", "image": "https://blog.researcher.life/wp-content/uploads/2023/11/male-hands-with-pencil-magnifying-glass-1-1.jpg" },
            { "text": "By improvising and experimenting", "result": "Actor", "image": "https://imageio.forbes.com/specials-images/imageserve/937138568/Scientist-with-equipment-holding-tools-during-scientific-experiment-science-concept/960x0.jpg?format=jpg&width=960" }
        ]
    },
    {
        "question": "What’s your idea of a perfect work environment?",
        "answers": [
            { "text": "A dynamic, fast-paced setting with lots of interaction", "result": "Actor", "image": "https://www.culturemonkey.io/employee-engagement/content/images/2023/09/what-are-examples-of-effective-team-dynamics.png" },
            { "text": "A creative studio where you can design and innovate", "result": "Fashion Designer", "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLorxKfa1LFM9ttNWC48PZb8ND-ysa2jIESw&s" },
            { "text": "A tech-savvy lab or engineering workshop", "result": "Engineer", "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYfvtJ5TYj_Tde6L0Gh14EGnLwdG8ztjQOHQ&s" },
            { "text": "A peaceful office where you can focus on your cases", "result": "Lawyer", "image": "https://www.mmoser.com/wp-content/uploads/2023/02/office-design-ideas-focus-spaces-quiet-working-booth.jpg" }
        ]
    },
    {
        "question": "What’s your favorite type of project?",
        "answers": [
            { "text": "Creating stunning fashion collections", "result": "Fashion Designer", "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwk_223B7FkB0f-bNIqa7yYPmK3hJ62MPEXw&s" },
            { "text": "Directing a blockbuster movie", "result": "Actor", "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4Hxdu7OnSOhcEhHQgvs69S_RxbW-tr1mr6Q&s" },
            { "text": "Designing user-friendly software or gadgets", "result": "Engineer", "image": "https://media.licdn.com/dms/image/D5612AQFKSaKTUzrh6A/article-cover_image-shrink_720_1280/0/1717749493337?e=2147483647&v=beta&t=-FdxkiJ5yK8trjKrEDaexwU4m1oUCuUuahaKHccPVmA" },
            { "text": "Navigating complex legal cases and courtroom drama", "result": "Lawyer", "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwPRcXA23UlFyOxv0IQ38EdX1I_TnMCBYp9Q&s" }
        ]
    },
    {
        "question": "What motivates you the most at work?",
        "answers": [
            { "text": "Seeing your designs come to life on the runway", "result": "Fashion Designer", "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX_2cED-hLvBl5Y0l4617-oct3Gi9ZbBvBrA&s" },
            { "text": "The excitement of being in the spotlight", "result": "Actor", "image": "https://media.licdn.com/dms/image/D5612AQHpVmcSn9xrcg/article-cover_image-shrink_720_1280/0/1692123908547?e=2147483647&v=beta&t=CRpu8c5lp5FpdMH5FEEExwVtMi33MHmtHn5oD8Sau84" },
            { "text": "The challenge of solving technical problems", "result": "Engineer", "image": "https://www.workitdaily.com/media-library/problem-solving-concept-technique.jpg?id=32029977&width=1200&height=800&quality=85&coordinates=0%2C18%2C0%2C18" },
            { "text": "The satisfaction of winning a case", "result": "Lawyer", "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtst7t0wnW5N8OVWWmL6Pkv9g17WQvxmJTIg&s" }
        ]
    },
    {
        "question": "How do you handle creative block?",
        "answers": [
            { "text": "Take a break and find inspiration in nature", "result": "Fashion Designer", "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZN-oft8ePh5Qwl6Se3t5r7koLAFWFmW0rPQ&s" },
            { "text": "Experiment with new techniques or styles", "result": "Fashion Designer", "image": "https://study.com/cimages/videopreview/scientific-experiment-definition-examples-quiz_117244.jpg" },
            { "text": "Collaborate with others to brainstorm solutions", "result": "Engineer", "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQto1mpIv-Znyz9vJ9YxLhigTEqPeOdBqnQHg&s" },
            { "text": "Dive into research and learn something new", "result": "Lawyer", "image": "https://media.istockphoto.com/id/1389870118/vector/deep-dive-analysis-discover-business-problem-and-improvement-research-and-strategy-to.jpg?s=612x612&w=0&k=20&c=Zj7MCC9vFDVBT3Klfm00_NP1RESmZCzTE6m319msWAw=" }
        ]
    },
    {
        "question": "What’s your ideal project deadline?",
        "answers": [
            { "text": "Flexible and allows for creativity", "result": "Fashion Designer", "image": "https://gaper.io/wp-content/uploads/2022/03/flexibility-and-creativity.webp" },
            { "text": "Fast-paced and challenging", "result": "Engineer", "image": "https://www.culturemonkey.io/employee-engagement/content/images/2023/11/how-a-fast-paced-work-environment-can-cause-challenges-to-employee-engagement.png" },
            { "text": "Long-term with lots of collaboration", "result": "Actor", "image": "https://itsupplychain.com/wp-content/uploads/2022/11/how-to-build-long-term-partnerships-in-business-and-why-are-they-more-beneficial-for-companies-1200x488.jpg" },
            { "text": "Short-term with quick results", "result": "Lawyer", "image": "https://sprigghr.com/wp-content/uploads/2020/09/Short-Term-Goals-e1600782171977.png" }
        ]
    },
    {
        "question": "What’s your dream workday?",
        "answers": [
            { "text": "Shooting fashion spreads and attending fashion shows", "result": "Fashion Designer", "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi2RwK2JZcF3aSSnpQOaLOoEGXWqKMcN4Dwg&s" },
            { "text": "Performing live and interacting with fans", "result": "Singer", "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2-3V82VLmGA3aspdfAE8QEUzthR2mDw_T2w&s" },
            { "text": "Building and testing innovative prototypes", "result": "Engineer", "image": "https://www.simplilearn.com/ice9/free_resources_article_thumb/Prototyping_In_Design_Thinking.jpg" },
            { "text": "Winning a major legal case and making headlines", "result": "Lawyer", "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9WZ7FIQ0YJwP-6yClJH5AQhNILT0fdN387Q&s" }
        ]
    },
    {
        "question": "What kind of team environment suits you best?",
        "answers": [
            { "text": "Collaborative and creative with lots of brainstorming", "result": "Fashion Designer", "image": "https://images.squarespace-cdn.com/content/v1/62460a56418af8236d4f3fee/1692652942766-929G4G97SMBRJ776WKSD/light-bulb-ideas-creative-diagram-concept.jpg" },
            { "text": "Dynamic and fast-moving with lots of action", "result": "Actor", "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQONmUS7DP0YEt2GT58VD__UnVnpeyw3KRMWA&s" },
            { "text": "Structured and methodical with clear goals", "result": "Engineer", "image": "https://images.squarespace-cdn.com/content/v1/5fa4d1fc09e8ec7ab4c7dea7/1608636473587-LQ8CAW5R7A7HYODLGRQS/dreamstime_m_98804351-min.jpg" },
            { "text": "Supportive and focused on achieving justice", "result": "Lawyer", "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQhlwKBSCw1BxYT4hPN6aDK7JQOQAbUFOy8e7xtxoA85o7aS-mcT_K9nPjn2NLQJKaMyY&usqp=CAU" }
        ]
    },
    {
        "question": "How do you like to make an impact?",
        "answers": [
            { "text": "By designing trend-setting fashion pieces", "result": "Fashion Designer", "image": "https://images.squarespace-cdn.com/content/v1/581127cb5016e16c20de8787/1500392079490-ISQD60F6B85EDBD0XJB5/How+to+create+a+trend+board+for+fashion+design" },
            { "text": "By inspiring through performance and storytelling", "result": "Actor", "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU2OMVnApv_7J08X_tum-7PRqopiqqCW-4JA&s" },
            { "text": "By creating innovative solutions and products", "result": "Engineer", "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4md1ZagPABXvI1GejFZZdQQxnDR7KkjpivQ&s" },
            { "text": "By winning cases and advocating for justice", "result": "Lawyer", "image": "https://5.imimg.com/data5/SELLER/Default/2022/6/XG/TY/XZ/90184750/advocate-and-legal-services-and-free-advice-500x500.PNG" }
        ]
    }
]


const wouldYouRatherQuestions = [
    {
        question: "Would you rather...",
        answers: [
            { text: "Have the ability to fly", result: "Pilot", image: "https://th.bing.com/th/id/OIP.bf_Um5shxy9Snj8HbRR0ZAHaHa?rs=1&pid=ImgDetMain" },
            { text: "Have the ability to breathe underwater", result: "Marine Biologist" }
        ]
    },
    {
        question: "Would you rather...",
        answers: [
            { text: "Be able to speak every language in the world", result: "Translator" },
            { text: "Be able to play every musical instrument", result: "Musician" }
        ]
    },
    {
        question: "Would you rather...",
        answers: [
            { text: "Be a famous actor", result: "Actor" },
            { text: "Be a famous director", result: "Director" }
        ]
    },
    {
        question: "Would you rather...",
        answers: [
            { text: "Travel to space", result: "Astronaut" },
            { text: "Explore the deep sea", result: "Oceanographer" }
        ]
    },
    {
        question: "Would you rather...",
        answers: [
            { text: "Write a bestselling novel", result: "Author" },
            { text: "Create a hit TV show", result: "TV Producer" }
        ]
    },
    {
        question: "Would you rather...",
        answers: [
            { text: "Be able to talk to animals", result: "Veterinarian" },
            { text: "Be able to talk to plants", result: "Botanist" }
        ]
    },
    {
        question: "Would you rather...",
        answers: [
            { text: "Live in a big city", result: "City Planner" },
            { text: "Live in a rural area", result: "Farmer" }
        ]
    },
    {
        question: "Would you rather...",
        answers: [
            { text: "Be a famous athlete", result: "Professional Athlete" },
            { text: "Be a famous artist", result: "Artist" }
        ]
    },
    {
        question: "Would you rather...",
        answers: [
            { text: "Have a photographic memory", result: "Historian" },
            { text: "Have perfect musical pitch", result: "Composer" }
        ]
    },
    {
        question: "Would you rather...",
        answers: [
            { text: "Be able to time travel", result: "Time Traveler" },
            { text: "Be able to teleport", result: "Teleportation Expert" }
        ]
    }
];


const cityQuestions = [
    {
        question: "What’s your favorite way to spend a Saturday morning?",
        answers: [
            { text: "Brunch at a chic café", result: "Paris", image: "https://example.com/paris-cafe.jpg" },
            { text: "Exploring a bustling market", result: "London", image: "https://example.com/london-market.jpg" },
            { text: "Strolling through a beautiful park", result: "New York City", image: "https://example.com/nyc-park.jpg" },
            { text: "Taking a gondola ride", result: "Venice", image: "https://example.com/venice-gondola.jpg" }
        ]
    },
    {
        question: "Which type of view do you find most appealing?",
        answers: [
            { text: "A panoramic city skyline", result: "Hong Kong", image: "https://example.com/hongkong-skyline.jpg" },
            { text: "Historic architecture and cobblestone streets", result: "Rome", image: "https://example.com/rome-architecture.jpg" },
            { text: "Tranquil canals and bridges", result: "Venice", image: "https://example.com/venice-canals.jpg" },
            { text: "Modern skyscrapers and neon lights", result: "Tokyo", image: "https://example.com/tokyo-neon.jpg" }
        ]
    },
    {
        question: "What’s your ideal way to spend an evening?",
        answers: [
            { text: "Dining at a world-renowned restaurant", result: "Paris", image: "https://example.com/paris-restaurant.jpg" },
            { text: "Catching a Broadway show", result: "New York City", image: "https://example.com/nyc-broadway.jpg" },
            { text: "Sipping cocktails at a rooftop bar", result: "Tokyo", image: "https://example.com/tokyo-rooftop.jpg" },
            { text: "Relaxing by the Grand Canal", result: "Venice", image: "https://example.com/venice-canals.jpg" }
        ]
    },
    {
        question: "What type of cuisine excites you the most?",
        answers: [
            { text: "French pastries and gourmet meals", result: "Paris", image: "https://example.com/paris-cuisine.jpg" },
            { text: "Authentic Italian pasta and pizza", result: "Rome", image: "https://example.com/rome-cuisine.jpg" },
            { text: "Fresh seafood and Asian delicacies", result: "Tokyo", image: "https://example.com/tokyo-cuisine.jpg" },
            { text: "Traditional Venetian seafood dishes", result: "Venice", image: "https://example.com/venice-cuisine.jpg" }
        ]
    },
    {
        question: "Which type of cultural activity do you enjoy most?",
        answers: [
            { text: "Exploring historic landmarks and museums", result: "London", image: "https://example.com/london-culture.jpg" },
            { text: "Experiencing world-class art and theater", result: "New York City", image: "https://example.com/nyc-culture.jpg" },
            { text: "Participating in local festivals and parades", result: "Tokyo", image: "https://example.com/tokyo-culture.jpg" },
            { text: "Enjoying traditional music and art", result: "Paris", image: "https://example.com/paris-culture.jpg" }
        ]
    },
    {
        question: "What’s your favorite way to unwind after a busy day?",
        answers: [
            { text: "Walking along the river or waterfront", result: "Venice", image: "https://example.com/venice-relax.jpg" },
            { text: "Taking a scenic train ride", result: "Zurich", image: "https://example.com/zurich-relax.jpg" },
            { text: "Relaxing in a cozy café with a book", result: "Paris", image: "https://example.com/paris-cafe.jpg" },
            { text: "Exploring vibrant city streets at night", result: "New York City", image: "https://example.com/nyc-night.jpg" }
        ]
    },
    {
        question: "What’s your ideal weekend getaway?",
        answers: [
            { text: "A sophisticated city break", result: "Paris", image: "https://example.com/paris-getaway.jpg" },
            { text: "A cultural immersion in historic sites", result: "Rome", image: "https://example.com/rome-getaway.jpg" },
            { text: "A tech-savvy urban exploration", result: "Tokyo", image: "https://example.com/tokyo-getaway.jpg" },
            { text: "A scenic and relaxing boat tour", result: "Venice", image: "https://example.com/venice-getaway.jpg" }
        ]
    },
    {
        question: "What’s your favorite kind of architecture?",
        answers: [
            { text: "Gothic cathedrals and historic buildings", result: "Paris", image: "https://example.com/paris-architecture.jpg" },
            { text: "Modern skyscrapers and high-tech designs", result: "Tokyo", image: "https://example.com/tokyo-architecture.jpg" },
            { text: "Classic and elegant buildings", result: "London", image: "https://example.com/london-architecture.jpg" },
            { text: "Venetian Gothic and Renaissance styles", result: "Venice", image: "https://example.com/venice-architecture.jpg" }
        ]
    },
    {
        question: "Which type of shopping experience do you prefer?",
        answers: [
            { text: "High-end boutiques and designer stores", result: "Paris", image: "https://example.com/paris-shopping.jpg" },
            { text: "Quaint markets and unique finds", result: "London", image: "https://example.com/london-shopping.jpg" },
            { text: "Cutting-edge fashion and technology stores", result: "Tokyo", image: "https://example.com/tokyo-shopping.jpg" },
            { text: "Luxury goods and artisan crafts", result: "Venice", image: "https://example.com/venice-shopping.jpg" }
        ]
    },
    {
        question: "What kind of nightlife are you into?",
        answers: [
            { text: "Elegant cocktails and sophisticated lounges", result: "Paris", image: "https://example.com/paris-nightlife.jpg" },
            { text: "Lively clubs and Broadway shows", result: "New York City", image: "https://example.com/nyc-nightlife.jpg" },
            { text: "Trendy bars and innovative drinks", result: "Tokyo", image: "https://example.com/tokyo-nightlife.jpg" },
            { text: "Romantic gondola rides and quiet cafes", result: "Venice", image: "https://example.com/venice-nightlife.jpg" }
        ]
    },
    {
        question: "Which seasonal experience do you enjoy the most?",
        answers: [
            { text: "Spring festivals and outdoor cafés", result: "Paris", image: "https://example.com/paris-spring.jpg" },
            { text: "Summer beach days and outdoor concerts", result: "Venice", image: "https://example.com/venice-summer.jpg" },
            { text: "Autumn leaf-watching and cozy evenings", result: "New York City", image: "https://example.com/nyc-autumn.jpg" },
            { text: "Winter snow and festive markets", result: "Tokyo", image: "https://example.com/tokyo-winter.jpg" }
        ]
    },
    {
        question: "What type of historical site interests you most?",
        answers: [
            { text: "Ancient ruins and historical landmarks", result: "Rome", image: "https://example.com/rome-historical.jpg" },
            { text: "Art museums and historical art", result: "Paris", image: "https://example.com/paris-museum.jpg" },
            { text: "Innovative modern architecture", result: "Tokyo", image: "https://example.com/tokyo-modern.jpg" },
            { text: "Venetian palaces and grand squares", result: "Venice", image: "https://example.com/venice-palace.jpg" }
        ]
    }
];


const fruitQuestions = [
    {
        "question": "What's your favorite breakfast item?",
        "answers": [
            { "text": "Pancakes with syrup", "result": "Sweet Tooth", "image": "https://images.unsplash.com/photo-1589256559344-b0d1a546dc29" },
            { "text": "Avocado toast", "result": "Health Enthusiast", "image": "https://images.unsplash.com/photo-1584338968402-dc5ed16a5e6d" },
            { "text": "Eggs Benedict", "result": "Classic Breakfast Lover", "image": "https://images.unsplash.com/photo-1545697160-917e0b2954cf" },
            { "text": "Smoothie bowl", "result": "Smoothie Fan", "image": "https://images.unsplash.com/photo-1580748835635-769ecdfd29b0" }
        ]
    },
    {
        "question": "What's your go-to lunch?",
        "answers": [
            { "text": "Grilled chicken salad", "result": "Healthy Eater", "image": "https://images.unsplash.com/photo-1591644724237-09c7d5c382f4" },
            { "text": "Cheeseburger and fries", "result": "Comfort Food Lover", "image": "https://images.unsplash.com/photo-1590495305784-75b0e6f7bb2d" },
            { "text": "Vegetarian wrap", "result": "Vegetarian", "image": "https://images.unsplash.com/photo-1585775850071-d267f4edce87" },
            { "text": "Sushi rolls", "result": "Sushi Enthusiast", "image": "https://images.unsplash.com/photo-1571155886641-d08968c45fd4" }
        ]
    },
    {
        "question": "What's your preferred dinner?",
        "answers": [
            { "text": "Spaghetti Carbonara", "result": "Italian Cuisine Lover", "image": "https://images.unsplash.com/photo-1579666087630-c64592c7487e" },
            { "text": "Chicken Stir-Fry", "result": "Asian Food Lover", "image": "https://images.unsplash.com/photo-1582500840537-02f969dbdd68" },
            { "text": "BBQ Ribs", "result": "Grill Master", "image": "https://images.unsplash.com/photo-1605631337835-d49a7a357c0e" },
            { "text": "Vegetable Curry", "result": "Curry Lover", "image": "https://images.unsplash.com/photo-1560301334-38a6b7fcdd35" }
        ]
    },
    {
        "question": "What's your favorite dessert?",
        "answers": [
            { "text": "Chocolate Cake", "result": "Chocoholic", "image": "https://images.unsplash.com/photo-1565374267-7e0c4e2c45d0" },
            { "text": "Fruit Tart", "result": "Fruit Lover", "image": "https://images.unsplash.com/photo-1600099449911-b9b8682513c0" },
            { "text": "Cheesecake", "result": "Cheesecake Fan", "image": "https://images.unsplash.com/photo-1567315723-6bfb0bfb5d2e" },
            { "text": "Ice Cream Sundae", "result": "Ice Cream Lover", "image": "https://images.unsplash.com/photo-1545091663-88d7b68b2d90" }
        ]
    },
    {
        "question": "What's your ideal snack?",
        "answers": [
            { "text": "Granola Bars", "result": "Health-Conscious", "image": "https://images.unsplash.com/photo-1575304303492-1f33b800bf7b" },
            { "text": "Chips and Dip", "result": "Snack Enthusiast", "image": "https://images.unsplash.com/photo-1544251632-24664c7b01f3" },
            { "text": "Nuts and Seeds", "result": "Nut Lover", "image": "https://images.unsplash.com/photo-1552911232-46060b38efb2" },
            { "text": "Fresh Fruit", "result": "Fruit Fan", "image": "https://images.unsplash.com/photo-1568577987-d0f25a4b8e42" }
        ]
    },
    {
        "question": "What's your go-to comfort food?",
        "answers": [
            { "text": "Mac and Cheese", "result": "Comfort Food Lover", "image": "https://images.unsplash.com/photo-1607889898340-004fb6f97b3b" },
            { "text": "Chicken Pot Pie", "result": "Classic Comfort Eater", "image": "https://images.unsplash.com/photo-1580376834244-06d7c9e3d4e7" },
            { "text": "Beef Stew", "result": "Hearty Meal Fan", "image": "https://images.unsplash.com/photo-1602497074217-6f16d3d86b6e" },
            { "text": "Pizza", "result": "Pizza Lover", "image": "https://images.unsplash.com/photo-1565372777-d9c3bb0378a1" }
        ]
    },
    {
        "question": "How do you prefer your coffee?",
        "answers": [
            { "text": "Black", "result": "No-Nonsense", "image": "https://images.unsplash.com/photo-1502745672328-e9df14e0d16e" },
            { "text": "With Cream and Sugar", "result": "Sweet and Creamy", "image": "https://images.unsplash.com/photo-1517430816045-df4b7b2e6b84" },
            { "text": "Latte", "result": "Latte Lover", "image": "https://images.unsplash.com/photo-1561130575-2c1d5293a3f0" },
            { "text": "Espresso", "result": "Espresso Enthusiast", "image": "https://images.unsplash.com/photo-1564968002-5a75b95d4d7e" }
        ]
    },
    {
        "question": "What's your preferred type of pizza?",
        "answers": [
            { "text": "Margherita", "result": "Traditionalist", "image": "https://images.unsplash.com/photo-1578584532314-792b5fbb31d6" },
            { "text": "Pepperoni", "result": "Meat Lover", "image": "https://images.unsplash.com/photo-1603088652632-e71182be6c1b" },
            { "text": "Veggie", "result": "Vegetarian", "image": "https://images.unsplash.com/photo-1532930587860-e20510e1f16e" },
            { "text": "BBQ Chicken", "result": "BBQ Fan", "image": "https://images.unsplash.com/photo-1558971297-68c8d99fbb78" }
        ]
    },
    {
        "question": "What's your favorite type of cuisine?",
        "answers": [
            { "text": "Italian", "result": "Italian Food Lover", "image": "https://images.unsplash.com/photo-1529423377438-6b6e61cbb9a7" },
            { "text": "Mexican", "result": "Mexican Cuisine Enthusiast", "image": "https://images.unsplash.com/photo-1590318376745-70611a55e73a" },
            { "text": "Chinese", "result": "Chinese Food Lover", "image": "https://images.unsplash.com/photo-1571162390-f208c72aa09e" },
            { "text": "Indian", "result": "Indian Cuisine Aficionado", "image": "https://images.unsplash.com/photo-1611150951914-08f0654694a8" }
        ]
    },
    {
        "question": "What's your ideal weekend brunch?",
        "answers": [
            { "text": "Eggs Florentine", "result": "Brunch Enthusiast", "image": "https://images.unsplash.com/photo-1584342214377-8c7e7fc5ad79" },
            { "text": "French Toast", "result": "Sweet Brunch Lover", "image": "https://images.unsplash.com/photo-1567838249-4f8d8e2e12aa" },
            { "text": "Bagels with Lox", "result": "Classic Bruncher", "image": "https://images.unsplash.com/photo-1592279783084-05b5706cfb28" },
            { "text": "Chia Seed Pudding", "result": "Healthy Bruncher", "image": "https://images.unsplash.com/photo-1584483575721-139e5e4c2d6b" }
        ]
    }
];


let currentQuiz = [];
let currentQuestionIndex = 0;
let results = [];

const questionContainer = document.getElementById('question-container');
const resultContainer = document.getElementById('result-container');
const homeButton = document.getElementById('home-button');

function startQuiz(type) {
    switch (type) {
        case 'career':
            currentQuiz = careerQuestions;
            break;
        case 'wouldYouRather':
            currentQuiz = wouldYouRatherQuestions;
            break;
        case 'city':
            currentQuiz = cityQuestions;
            break;
        case 'fruit':
            currentQuiz = fruitQuestions;
            break;
    }
    currentQuestionIndex = 0;
    results = [];
    showQuestion();
    document.querySelector('.quiz-choice-container').style.display = 'none';
    questionContainer.style.display = 'block';
}

function showQuestion() {
    resetState();
    const currentQuestion = currentQuiz[currentQuestionIndex];
    const questionElement = document.createElement('div');
    questionElement.className = 'question';
    questionElement.innerText = currentQuestion.question;
    questionContainer.appendChild(questionElement);

    const optionsElement = document.createElement('ul');
    optionsElement.className = 'options';
    currentQuestion.answers.forEach(answer => {
        const optionElement = document.createElement('li');
        optionElement.classList.add('option');
        optionElement.addEventListener('click', () => selectAnswer(answer.result));

        const imageElement = document.createElement('img');
        imageElement.src = answer.image;
        imageElement.alt = answer.device;
        imageElement.classList.add('option-image');

        const textElement = document.createElement('span');
        textElement.innerText = answer.text;
        
        optionElement.appendChild(imageElement);
        optionElement.appendChild(textElement);
        optionsElement.appendChild(optionElement);
    });

    questionContainer.appendChild(optionsElement);
}

function resetState() {
    questionContainer.innerHTML = '';
    resultContainer.style.display = 'none';
    resultContainer.innerHTML = '';
    homeButton.style.display = 'none';
}

function selectAnswer(result) {
    results.push(result);
    currentQuestionIndex++;
    if (currentQuestionIndex < currentQuiz.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    resetState();
    questionContainer.style.display = 'none';
    const randomResult = results[Math.floor(Math.random() * results.length)];
    const resultText = document.createElement('div');
    resultText.innerText = `Your result is: ${randomResult}`;
    resultContainer.appendChild(resultText);
    resultContainer.style.display = 'block';
    homeButton.style.display = 'block';
}

function showHome() {
    document.querySelector('.quiz-choice-container').style.display = 'block';
    questionContainer.style.display = 'none';
    resultContainer.style.display = 'none';
    homeButton.style.display = 'none';
}
