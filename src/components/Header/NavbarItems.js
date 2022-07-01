const NavbarItems = [
    {
        key: 1,
        name: "categories",
        url: "/categories",
        type: "dropdown",
        dropdownItems: [
            {
                key: 1,
                name: "shonen",
                url: "/categories/shonen"
            },
            {
                key: 2,
                name: "iseksi",
                url: "/categories/iseksi"
            },
            {
                key: 3,
                name: "slice of life",
                url: "/categories/slice-of-life"
            },
            {
                key: 4,
                name: "romance",
                url: "/categories/romance"
            },
            {
                key: 5,
                name: "sci-fi",
                url: "/categories/sci-fi"
            },
            {
                key: 2,
                name: "comedy",
                url: "/categories/comedy"
            }
        ]
    },
    {
        key: 2,
        name: "my-list",
        url: "/my-list",
        type: "link"
    },
    {
        key: 3,
        name: "movies",
        url: "/movies",
        type: "link"
    },
    {
        key: 4,
        name: "top-20",
        url: "/top-20",
        type: "link"
    }
]

export default NavbarItems;