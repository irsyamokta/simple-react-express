import { Link } from "react-router-dom"
import axios from "axios"
import useSWR, { useSWRConfig } from "swr"
export const Table = () => {
    const { mutate } = useSWRConfig()
    const fetcher = async () => {
        const res = await axios.get("http://localhost:5000/products")
        console.log(res.data)
        return res.data
    };

    const {data} = useSWR("products", fetcher)
    if (!data) return <h2>Loading...</h2>

    const deleteProduct = async (id) => {
        await axios.delete(`http://localhost:5000/products/${id}`)
        mutate("products")
    }

    return (
        <div className="flex flex-col items-start gap-4">
            <Link to="/add" className="font-medium bg-blue-600 text-white py-1 px-3 rounded-lg dark:text-blue-500 hover:underline">Add</Link>
            <table className="w-full text-sm text-center rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            No
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Product name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Price
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((products, index) => (
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={products.id}>
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {index + 1}
                            </th>
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {products.name}
                            </th>
                            <td className="px-6 py-4">
                                Rp{products.price}
                            </td>
                            <td className="flex justify-center items-center px-6 py-4">
                                <Link to={`/edit/${products.id}`} className="font-medium bg-blue-600 text-white py-1 px-3 rounded-lg dark:text-blue-500 hover:underline">Edit</Link>
                                <Link onClick={() => deleteProduct(products.id)} className="font-medium bg-red-600 text-white py-1 px-3 rounded-lg dark:text-red-500 hover:underline ms-3">Delete</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
