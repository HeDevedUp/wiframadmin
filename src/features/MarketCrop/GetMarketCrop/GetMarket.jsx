import { Suspense, lazy } from "react";
import { useEffect } from "react";
import LoadingSpinner from "@components/ui/loading/LoadingSpinner";
import { getMarketData } from "@/redux/slice/marketplace/marketplaceSlice";
import { useDispatch, useSelector } from "react-redux";
const ProductList = lazy(() => import("../GetMarketCrop/components/ProductList"));

const MarketDData = () => {
      const { loading,MarketData } = useSelector((state)=> state.marketReducers.getMarketSlice)
       const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getMarketData());
        // return () => {
        //     clearUsers();
        // };
    }, [dispatch]);

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold">MarketDData</h1>
            <div className="pt-6 w-full">
                {loading ? (
                    <LoadingSpinner className="mt-20" />
                ) : (
                    <Suspense fallback={<LoadingSpinner className="mt-20" />}>
                        <ProductList MarketData={MarketData} />
                    </Suspense>
                )}
            </div>
        </div>
    );
};

export default MarketDData;
