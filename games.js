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
                rating: 4.5,
                image: "images/Assassin Creed 1.jpg", // Local image in images folder
                description: "",
                requirements: [
                    "OS: Windows 7/8/10 64-bit",
                    "Processor:  Dual core processor 2.6 GHz Intel Pentium D or AMD Athlon™ 64 X2 3800+ (Intel Core® 2 Duo 2.2 GHz or AMD Athlon 64 X2 4400+ or better recommended)",
                    "Memory: 1 GB RAM",
                    "Graphics: 256 MB DirectX® 10.0-compliant video card",
                    "Storage: 8 GB available space"
                ],
                downloadLink: "https://example.com/download/cyberpunk",
                size: "2.5 GB",
                developer: "",
                releaseDate: "2007"
            },
            {
                id: 2,
                name: "Assassin's Creed 2",
                genre: "Action, Adventure",
                category: "free",
                rating: 4.7,
                image: "images/Assassin Creed 2.jpg", // Local image in images folder
                description: "Play with 4-15 players online as you attempt to hold your spaceship together and return home, but beware of impostors!",
                requirements: [
                    "OS: Windows 7 SP1+",
                    "Processor: SSE2 instruction set",
                    "Memory: 1 GB RAM",
                    "Storage: 250 MB available space"
                ],
                downloadLink: "https://example.com/download/amongus",
                size: "250 MB",
                developer: "Innersloth",
                releaseDate: "2023-06-20"
            },
            {
                id: 3,
                name: "Valorant",
                genre: "FPS",
                category: "free",
                rating: 4.6,
                image: "images/valorant.jpg", // Local image in images folder
                description: "A 5v5 character-based tactical FPS where precise gunplay meets unique agent abilities.",
                requirements: [
                    "OS: Windows 7/8/10 64-bit",
                    "Processor: Intel Core i3-4150",
                    "Memory: 4 GB RAM",
                    "Graphics: Intel HD 3000",
                    "Storage: 8 GB available space"
                ],
                downloadLink: "https://example.com/download/valorant",
                size: "8 GB",
                developer: "Riot Games",
                releaseDate: "2023-07-15"
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
