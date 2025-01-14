import { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate, useParams } from "react-router-dom"

export const EditProduct = () => {
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const navigate = useNavigate()
    const { id } = useParams()

    useEffect(() => {
        const getProduct = async () => {
            const response = await axios.get(`http://localhost:5000/products/${id}`)
            setName(response.data.name)
            setPrice(response.data.price)
        }
        getProduct()
    }, [id])

    const editProduct = async (e) => {
        e.preventDefault()
        await axios.patch(`http://localhost:5000/products/${id}`, {
            name: name,
            price: Number(price),
        })
        navigate("/")
    }
    return (
        <>
            <div className="flex h-[100vh] justify-center items-center">
                <form onSubmit={editProduct} encType="multipart/form-data" className="max-w-md mx-auto w-full">
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="text" name="name" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" value={name} onChange={(e) => setName(e.target.value)} placeholder="" required />
                        <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Product Name</label>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="number" name="price" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="" required />
                        <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Price</label>
                    </div>
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Edit Product</button>
                </form>
            </div>
        </>
    )
}
