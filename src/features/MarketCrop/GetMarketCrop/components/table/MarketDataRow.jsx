import { useState } from "react";
import { MoreVertical } from "react-feather";
import CrudDropdown from "@/shared/components/ui/dropdown/CrudDropdown";
import UserDeleteModal from "../modals/UserDeleteModal";
import UserEditModal from "../modals/UserEditModal";
import useStore from "@users/store";

const UserRow = ({ marketdata }) => {
    const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
    const [isEditModalOpen, setEditModalOpen] = useState(false);

    const removeUser = useStore((state) => state.removeUser);

    const deleteUser = (user) => {
        removeUser(user.id);
    };

    const editUser = (user) => {
        console.log("edit user", user.name);
    };

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
                <CrudDropdown
                    element={
                        <div className="btn btn-ghost btn-xs cursor-pointer">
                            <span className="text-xs font-bold">
                                <MoreVertical size={20} />
                            </span>
                        </div>
                    }
                    onEditClick={() => setEditModalOpen(true)}
                    onDeleteClick={() => setDeleteModalOpen(true)}
                />
                <UserDeleteModal
                    marketdata={marketdata}
                    openNow={isDeleteModalOpen}
                    onClose={() => setDeleteModalOpen(false)}
                    onDelete={(u) => deleteUser(u)}
                ></UserDeleteModal>
                <UserEditModal
                    marketdata={marketdata}
                    openNow={isEditModalOpen}
                    onClose={() => setEditModalOpen(false)}
                    onEdit={(u) => editUser(u)}
                ></UserEditModal>
            </th>
        </tr>
    );
};

export default UserRow;
