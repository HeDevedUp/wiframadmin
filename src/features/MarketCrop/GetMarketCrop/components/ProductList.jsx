import Table from "@components/ui/table/Table";

const ProductList = ({ marketData }) => {
    return (
        <Table
            marketData
            headers={["Crop", "Planted", "Havest Date","Price"]}
            items={marketData}
        />
    );
};

export default ProductList;

