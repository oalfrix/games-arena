// ===============================
        // GAMES DATABASE - EDIT THIS ONLY!
        // ===============================
        const gamesDatabase = [
            // Add your games here - USE LOCAL IMAGES FROM "images" FOLDER
            {
                id: 1,
                name: "Assassin's Creed 1",
                genre: "Action Adventure,3D",
                category: "pc", // "pc" or "free"
                rating: 7.5,
                image: "images/Assassin Creed 1.jpg", // Local image in images folder
                description: "",
                requirements: [
                    "OS: Windows 7/8/10 64-bit",
                    "Processor:  Dual core processor 2.6 GHz Intel Pentium D or AMD Athlon™ 64 X2 3800+ (Intel Core® 2 Duo 2.2 GHz or AMD Athlon 64 X2 4400+ or better recommended)",
                    "Memory: 1 GB RAM",
                    "Graphics: 256 MB DirectX® 10.0-compliant video card",
                    "Storage: 8 GB available space"
                ],
                downloadLink: "",
                size: "2.5 GB",
                developer: "",
                releaseDate: "2007"
            },
            {
                id: 2,
                name: "Assassin's Creed 2",
                genre: "Action, Adventure",
                category: "pc",
                rating: 7.7,
                image: "images/Assassin Creed 2.jpg", // Local image in images folder
                description: "",
                requirements: [
                    "OS: Windows® XP (32-64 bits) /Windows Vista®(32-64 bits)",
"Processor: Intel Core® 2 Duo 1.8 GHZ or AMD Athlon X2 64 2.4GHZ",
"Memory: 1.5 GB Windows® XP / 2 GB Windows Vista® - Windows 7®",
"Graphics: 256 MB DirectX® 9.0–compliant card with Shader Model 3.0 or higher (see supported list)",
"DirectX®: DirectX 9.0",
"Hard Drive: 8 GB free space",
"Sound: DirectX 9.0 –compliant sound card"
                ],
                downloadLink: "",
                size: " 8 GB",
                developer: "",
                releaseDate: "2010"
            },
            {
                id: 3,
                name: "Assassin's Creed Brotherhood",
                genre: "Action,Adventure",
                category: "pc",
                rating: 8,
                image: "images/Assassin Creed Brotherhood.jpg", // Local image in images folder
                description: "",
                requirements: [
                    "OS: Windows® XP (32-64 bits) /Windows Vista®(32-64 bits)",
"Processor: Intel Core® 2 Duo 1.8 GHZ or AMD Athlon X2 64 2.4GHZ",
"Memory: 1.5 GB Windows® XP / 2 GB Windows Vista® - Windows 7®",
"Graphics: 256 MB DirectX® 9.0–compliant card with Shader Model 3.0 or higher (see supported list*)",
"DirectX®: 9.0",
"Hard Drive: 8 GB",
"Sound: DirectX 9.0 –compliant sound card"
                ],
                downloadLink: "",
                size: "6.5GB",
                developer: "",
                releaseDate: "2010-07-15"
            },
            {
                id: 4,
                name: "The Witcher 3",
                genre: "RPG",
                category: "pc",
                rating: 4.9,
                image: "images/witcher3.jpg", // Local image in images folder
                description: "A story-driven open world RPG set in a visually stunning fantasy universe full of meaningful choices.",
                requirements: [
                    "OS: Windows 7/8/10 64-bit",
                    "Processor: Intel Core i5-2500K",
                    "Memory: 6 GB RAM",
                    "Graphics: NVIDIA GeForce GTX 660",
                    "Storage: 35 GB available space"
                ],
                downloadLink: "https://example.com/download/witcher3",
                size: "35 GB",
                developer: "CD Projekt Red",
                releaseDate: "2023-05-15"
            },
            {
                id: 5,
                name: "Fortnite",
                genre: "Battle Royale",
                category: "free",
                rating: 4.4,
                image: "images/fortnite.PNG", // Local image in images folder
                description: "Battle Royale game with numerous game modes for every type of game player. Build, fight, survive!",
                requirements: [
                    "OS: Windows 7/8/10 64-bit",
                    "Processor: Core i3 2.4GHz",
                    "Memory: 4 GB RAM",
                    "Graphics: Intel HD 4000",
                    "Storage: 30 GB available space"
                ],
                downloadLink: "https://example.com/download/fortnite",
                size: "30 GB",
                developer: "Epic Games",
                releaseDate: "2023-10-01"
            },
            {
                id: 6,
                name: "Call of Duty",
                genre: "FPS",
                category: "pc",
                rating: 4.3,
                image: "images/cod.jpg", // Local image in images folder
                description: "Experience the ultimate first-person shooter with intense combat and stunning graphics.",
                requirements: [
                    "OS: Windows 10 64-bit",
                    "Processor: Intel Core i5-2500K",
                    "Memory: 8 GB RAM",
                    "Graphics: NVIDIA GeForce GTX 970",
                    "Storage: 175 GB available space"
                ],
                downloadLink: "https://example.com/download/cod",
                size: "175 GB",
                developer: "Activision",
                releaseDate: "2023-11-05"
            }
            // ADD MORE GAMES HERE - JUST COPY AND PASTE THE FORMAT!
            // {
            //     id: 7,
            //     name: "Game Name",
            //     genre: "Game Genre",
            //     category: "pc", // OR "free"
            //     rating: 4.0,
            //     image: "images/your-image.jpg", // PUT YOUR IMAGE IN IMAGES FOLDER
            //     description: "Game description",
            //     requirements: ["Requirement 1", "Requirement 2"],
            //     downloadLink: "https://download-link.com",
            //     size: "File Size",
            //     developer: "Developer Name",
            //     releaseDate: "YYYY-MM-DD"
            // }
        ];
