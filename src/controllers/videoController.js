export const trending = (req, res) => res.send("Trending")
export const search = (req, res) => res.send("Search");
export const see = (req, res) => {
    res.send(`Watch Video #${req.params.id}`);
}
export const edit = (req, res) => {
    res.send("Edit Video");
}
export const upload = (req, res) => res.send("Upload Video");
export const deleteVideo = (req, res) => {
    return res.send("Delete Video");
}