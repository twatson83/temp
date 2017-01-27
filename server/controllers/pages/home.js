/**
 * Renders home page.
 * @param {Object} req
 * @param {Object} res
 */
export function getHomePage(req, res) {
    res.sendFile(__dirname + '/index.html');
}
