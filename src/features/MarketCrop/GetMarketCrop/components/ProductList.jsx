import Table from "@components/ui/table/Table";

const ProductList = ({ MarketData }) => {
    return (
        <Table
            MarketData
            headers={["Crop", "Planted", "Havest Date","Price"]}
            items={MarketData}
        />
    );
};

export default ProductList;

