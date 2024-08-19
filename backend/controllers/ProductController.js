import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

const getProducts = async (req, res) => {
    try{
        const response = await prisma.products.findMany();
        res.status(200).json(response);
    }catch(e){
        res.status(500).json({message: e.message});
    }
}

const getProductById = async (req, res) => {
    try{
        const response = await prisma.products.findUnique({
            where: {
                id: Number(req.params.id)
            }
        });
        res.status(200).json(response);
    }catch(e){
        res.status(404).json({message: e.message});
    }
}

const createProduct = async (req, res) => {
    const {name, price} = req.body;
    try{
        const response = await prisma.products.create({
            data: {
                name: name,
                price: price
            }
        });
        res.status(201).json(response);
    }catch(e){
        res.status(400).json({message: e.message});
    }
}

const updateProduct = async (req, res) => {
    const {name, price} = req.body;
    try{
        const response = await prisma.products.update({
            where: {
                id: Number(req.params.id)
            },
            data: {
                name: name,
                price: price
            }
        });
        res.status(200).json(response);
    }catch(e){
        res.status(400).json({message: e.message});
    }
}

const deleteProduct = async (req, res) => {
    try{
        const response = await prisma.products.delete({
            where: {
                id: Number(req.params.id)
            }
        });
        res.status(200).json(response);
    }catch(e){
        res.status(400).json({message: e.message});
    }
}

export {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
}