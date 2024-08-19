import { Table } from "../components/Table"
export const ProductList = () => {
    return (
        <div className="flex h-[100vh] justify-center items-center">
            <div className="flex flex-col w-full gap-3 relative overflow-x-auto mx-12">
                <Table></Table>
            </div>
        </div>
    )
}
