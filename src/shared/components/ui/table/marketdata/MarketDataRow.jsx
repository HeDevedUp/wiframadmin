import Dropdown from "@components/ui/dropdown/Dropdown";
import { MoreVertical } from "react-feather";

const MarketDataRow = ({ marketdata }) => {
    console.log(marketdata.imageUrl)
    return (
        <tr>
            <th>
                <label>
                    <input
                        type="checkbox"
                        className="checkbox checkbox-select"
                        // id={"checkbox-" + u.id}
                        onChange={(e) => handleChange(e)}
                    />
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar cursor-pointer">
                        <div className="mask mask-squircle w-16 h-12">
                            <img
                                src={marketdata.imageUrl || marketdata.imageUrl }
                                alt="user avatar"
                                className="hover:scale-110"
                            />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{marketdata.cropCategory}</div>
                        <div className="text-sm opacity-50">{marketdata.cropName}</div>
                    </div>
                </div>
            </td>
            <td>
                <span className="text-sm">{marketdata.planted}</span>
                <br />
                <div className="badge bg-accent/50 badge-sm p-3 mt-2">
                    <span className="text-primary-t">{marketdata.datePlanted}</span>
                </div>
            </td>
            <td>{marketdata.harvestDate}</td>
            <td>NGN{marketdata.cropPrice}</td>

            <th>
                <Dropdown
                    short
                    removeUser={marketdata}
                    dialog
                    element={
                        <div className="btn btn-ghost btn-xs cursor-pointer">
                            <span className="text-xs font-bold">
                                <MoreVertical size={30} />
                            </span>
                        </div>
                    }
                />
            </th>
        </tr>
    );
};

export default MarketDataRow;
