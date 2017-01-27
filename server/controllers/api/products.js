import logger from '../../utils/logger';
import { find } from '../../models/products';

/**
 * Finds products using search parameters passed in query string
 * @param {Object} req
 * @param {Object} res
 */
export function getProducts(req, res) {
    let query = req.query.query,
        page = req.query.page,
        pageSize = req.query.pageSize;

    find(query, page, pageSize)
        .then(ps => res.json)
        .catch(ex => {
            logger.log("error", "Error fetching products", ex);
            res.status(500).json(ex.message);
        });
}
