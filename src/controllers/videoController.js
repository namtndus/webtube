const fakeUser = {
    username: "suyeon",
    loggedIn: true
}

let videos = [
    {
        title: "First Video",
        rating: 5,
        comments: 2,
        createdAt: "2 minutes ago",
        id: 1
    },
    {
        title: "Second Video",
        rating: 5,
        comments: 2,
        createdAt: "2 minutes ago",
        id: 2
    }, {
        title: "third Video",
        rating: 5,
        comments: 2,
        createdAt: "2 minutes ago",
        id: 1
    }
];

export const trending = (req, res) => {
    return res.render("home", { pageTitle: 'Home', fakeUser, videos })
};
export const search = (req, res) => res.send("Search");
export const see = (req, res) => res.render("watch", { pageTitle: 'Watch' });
export const edit = (req, res) => res.render("edit", { pageTitle: 'Edit' });
export const upload = (req, res) => res.send("Upload Video");
export const deleteVideo = (req, res) => {
    return res.send("Delete Video");
};