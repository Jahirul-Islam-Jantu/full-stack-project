import {CreateProductService, getProductService} from "../services/ProductsService.js";


// Create Product Service

export const createProduct = async (req, res) => {
    let result = await CreateProductService(req);
    return res.json(result);
}

export const getProduct = async (req, res) => {
    let result = await getProductService();
    return res.json(result);
}