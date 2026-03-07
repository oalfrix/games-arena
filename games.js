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
                name: "Grand Theft Auto V",
                genre: "Action,shooting",
                category: "pc",
                rating: 10,
                image: "images/GTA5.jpg", // Local image in images folder
                description: "",
                requirements: [
                    "OS: Windows 8.1 64 Bit, Windows 8 64 Bit, Windows 7 64 Bit Service Pack 1, Windows Vista 64 Bit Service Pack 2* (*NVIDIA video card recommended if running Vista OS)",
                    "Processor:  Intel Core 2 Quad CPU Q6600 @ 2.40GHz (4 CPUs) / AMD Phenom 9850 Quad-Core Processor (4 CPUs) @ 2.5GHz - actually works on dual-core CPUs as well",
                    "Memory: 4 GB RAM",
                    "Graphics: NVIDIA 9800 GT 1GB / AMD HD 4870 1GB (DX 10, 10.1, 11)",
                    "DirectX: 10",
                    "Storage: 90 available space"
                ],
                downloadLink: "",
                size: " 40 GB",
                developer: "Rockstar North, Rockstar San Diego, Rockstar Leeds, Rockstar Toronto, Rockstar New England, Rockstar London",
                releaseDate: "2015-04-14"
            },
            {
                id: 5,
                name: "Assassin's Creed Revelations",
                genre: "Action",
                category: "pc",
                rating: 8.4,
                image: "images/Assassin Creed Revelations.jpg", // Local image in images folder
                description: "",
                requirements: [
                    "OS: Windows XP / Windows Vista / Windows 7",
"CPU: Intel Core 2 Duo 2.8 GHz or AMD Athlon X2 Dual-Core 5200+",
"RAM: 2 GB",
"Video card: Nvidia Geforce 9800 или Radeon HD 4750",
"Hard disk space: 10 GB"
                ],
                downloadLink: "",
                size: "10 GB",
                developer: " Ubisoft Montreal",
                releaseDate: "11-10-01"
            },
            {
                id: 6,
                name: "Assassin's Creed III",
                genre: "FPS",
                category: "pc",
                rating: 8.3,
                image: "images/Assassin Creed 3.jpg", // Local image in images folder
                description: "",
                requirements: [
                    "Supported OS: Windows Vista (SP2) / Windows 7 (SP1) / Windows 8",
"Processor: 2.66 GHz Intel Core2 Duo E6700 or 3.00 GHz AMD Athlon 64 X2 6000+ or better recommended",
"RAM: 2 GB (4 GB recommended)",
"Video Card: 512 MB DirectX 9.0c-compliant with Shader Model 4.0 or higher (see supported list)",
"Sound Card: DirectX 9.0c-compliant (5.1 surround sound recommended)",
"DVD-ROM: Dual-layer drive",
"Hard Drive Space: 17 GB"
                ],
                downloadLink: "",
                size: "17 GB",
                developer: "Ubisoft Montreal",
                releaseDate: "2012-11-05"
            },
            {
                id: 7,
                name: "Assassin's Creed Liberation",
                 genre: "Action",
                 category: "pc",
                 rating: 5.0,
                 image: "images/Assassin Creed Liberation.jpg",
                 description: "",
                 requirements: [
                         "Operating system: Windows Vista SP2, Windows 7 SP1, Windows 8 / 8.1 (both 32 / 64bit versions)",
"Processor: Intel Core i3 2105 @ 3.1 GHz or AMD Phenom 2 X4 955 @ 3.2GHz",
"Memory: 2 GB",
"Graphics Card: Nvidia GeForce 8800GT or AMD Radeon HD4870 (512MB VRAM u0026 Shader Model 4.0)",
"Sound Card: Sound device compatible with DirectX® 9.0",
"Free space on hard drive: 3 GB"
                                  ],
                 downloadLink: "",
                 size: "File Size",
                 developer: "3 GB",
                 releaseDate: "2014"
            },
            {
                id: 8,
                name: "Assassin's Creed IV Black Flag",
                genre: "action",
                category: "pc",
                rating: 7.0,
                image: "images/Assassin Creed Black Flag.jpg",
                description: "",
                requirements: [
                    "OS: Windows Vista SP2 or Windows 7 SP1 or Windows 8 (both 32/64bit versions)",
                  "CPU: Intel Core2Quad Q8400 @ 2.6 GHz or AMD Athlon II X4 620 @ 2.6 GHz",
"RAM: 2 Gb",
"Video card: Nvidia Geforce GTX 260 or AMD Radeon HD 4870 (512MB VRAM with shader Model 4.0 or higher)",
                ],
                downloadLink: "",
                size: "15 GB",
                developer: "Ubisoft Montreal ",
                releaseDate: "October 29, 2013 "
            },
            {
                id: 9,
                name: "Assassin's Creed 3 Remastered",
                genre: "Action, Adventure",
                category: "pc",
                rating: 7.0,
                image: "images/Assassin Creed 3 Remastered.jpg",
                description: "",
                requirements: [
                    "Operating System: Windows 7 SP1, Windows 8.1, Windows 10 (64-bit versions only)",
"Processor: Intel Core i5 2400 @ 3.1 GHz, AMD FX 6350 @ 3.9 GHz",
"RAM: 8GB",
"Video Card: Nvidia GeForce GTX 660, AMD Radeon R9 270X (2GB VRAM with Shader Model 5.0)"
                ],
                downloadLink: "",
                size: " 43 GB",
                developer: "Ubisoft",
                releaseDate: "March 29th 2019"
            },
            {
                id: 10,
                name: "",
                genre: "",
                category: "pc",
                rating: 4.0,
                image: "images/",
                description: "",
                requirements: [""],
                downloadLink: "",
                size: "",
                developer: "",
                releaseDate: ""
            },
            {
                id: 11,
                name: "",
                genre: "",
                category: "pc",
                rating: 4.0,
                image: "images/",
                description: "",
                requirements: [""],
                downloadLink: "",
                size: "",
                developer: "",
                releaseDate: ""
            },
            {
                id: 11,
                name: "",
                genre: "",
                category: "pc",
                rating: 4.0,
                image: "images/",
                description: "",
                requirements: [""],
                downloadLink: "",
                size: "",
                developer: "",
                releaseDate: ""
            },
            {
                id: 11,
                name: "",
                genre: "",
                category: "pc",
                rating: 4.0,
                image: "images/",
                description: "",
                requirements: [""],
                downloadLink: "",
                size: "",
                developer: "",
                releaseDate: ""
            },
            {
                id: 11,
                name: "",
                genre: "",
                category: "pc",
                rating: 4.0,
                image: "images/",
                description: "",
                requirements: [""],
                downloadLink: "",
                size: "",
                developer: "",
                releaseDate: ""
            },
            {
                id: 11,
                name: "",
                genre: "",
                category: "pc",
                rating: 4.0,
                image: "images/",
                description: "",
                requirements: [""],
                downloadLink: "",
                size: "",
                developer: "",
                releaseDate: ""
            },
            {
                id: 11,
                name: "",
                genre: "",
                category: "pc",
                rating: 4.0,
                image: "images/",
                description: "",
                requirements: [""],
                downloadLink: "",
                size: "",
                developer: "",
                releaseDate: ""
            },
            {
                id: 11,
                name: "",
                genre: "",
                category: "pc",
                rating: 4.0,
                image: "images/",
                description: "",
                requirements: [""],
                downloadLink: "",
                size: "",
                developer: "",
                releaseDate: ""
            },
            {
                id: 11,
                name: "",
                genre: "",
                category: "pc",
                rating: 4.0,
                image: "images/",
                description: "",
                requirements: [""],
                downloadLink: "",
                size: "",
                developer: "",
                releaseDate: ""
            },
            {
                id: 11,
                name: "",
                genre: "",
                category: "pc",
                rating: 4.0,
                image: "images/",
                description: "",
                requirements: [""],
                downloadLink: "",
                size: "",
                developer: "",
                releaseDate: ""
            },
            {
                id: 11,
                name: "",
                genre: "",
                category: "pc",
                rating: 4.0,
                image: "images/",
                description: "",
                requirements: [""],
                downloadLink: "",
                size: "",
                developer: "",
                releaseDate: ""
            },
            {
                id: 11,
                name: "",
                genre: "",
                category: "pc",
                rating: 4.0,
                image: "images/",
                description: "",
                requirements: [""],
                downloadLink: "",
                size: "",
                developer: "",
                releaseDate: ""
            },
            {
                id: 11,
                name: "",
                genre: "",
                category: "pc",
                rating: 4.0,
                image: "images/",
                description: "",
                requirements: [""],
                downloadLink: "",
                size: "",
                developer: "",
                releaseDate: ""
            },
            {
                id: 11,
                name: "",
                genre: "",
                category: "pc",
                rating: 4.0,
                image: "images/",
                description: "",
                requirements: [""],
                downloadLink: "",
                size: "",
                developer: "",
                releaseDate: ""
            },
            {
                id: 11,
                name: "",
                genre: "",
                category: "pc",
                rating: 4.0,
                image: "images/",
                description: "",
                requirements: [""],
                downloadLink: "",
                size: "",
                developer: "",
                releaseDate: ""
            },
            {
                id: 11,
                name: "",
                genre: "",
                category: "pc",
                rating: 4.0,
                image: "images/",
                description: "",
                requirements: [""],
                downloadLink: "",
                size: "",
                developer: "",
                releaseDate: ""
            },


            // ADD MORE GAMES HERE - JUST COPY AND PASTE THE FORMAT!
            // {
            //     id: 7,
            //     name: "",
            //     genre: "",
            //     category: "pc", // OR "free"
            //     rating: 4.0,
            //     image: "images/",
            //     description: "",
            //     requirements: [
            //             
            //                      ],
            //     downloadLink: "",
            //     size: "File Size",
            //     developer: "",
            //     releaseDate: ""
            // }
        ];
