import { Dialog } from "@headlessui/react";
import Modal from "@components/ui/modals/Modal";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Edit } from "react-feather";
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { UpdateMarketData } from "@/redux/slice/marketplace/marketplaceSlice";




const initialValues = {
  available: false,
  cropCategory: "",
  cropEstimatedDuration: 0,
  cropName: "",
  cropPrice: 0,
  dailyInterestRate: 0,
  datePlanted: "",
  harvestDate:"",
  description:'',
  imageUrl: "",
  photo:"",
  lifeCycleYieldRate: 0,
  monthlyInterestRate: 0,
  planted: false,
  primaryLocation:"",
  squareMeters: 0
};


const validationSchema = Yup.object().shape({
  // available: Yup.string()
  //   .required('Required'),
  //   // cropCategory: Yup.string()
  //   // .required('Category is required'),
  //   dailyInterestRate: Yup.string()
  //   .required('Required'),
  //   cropEstimatedDuration: Yup.string()
  //   .required('Required'),
  //   datePlanted: Yup.string()
  //   .required('Required'),
  //   harvestDate: Yup.string()
  //   .required('required'),
  //   description:Yup.string()
  //    .required('Required'),
  //   monthlyInterestRate: Yup.string()
  //   .required('Required'),
  //   squareMeters: Yup.string()
  //   .required('Required'),
  //   lifeCycleYieldRate: Yup.string()
  //   .required('Required'),
  //   // cropName: Yup.string()
  //   // .required('cropName is required'),
  //   cropPrice: Yup.string()
  //   .required('Required'),
  //   // imageUrl: Yup.string()
  //   // .required('Required')
  //   // .url('Must be a valid URL'),
  //   photo: Yup.string()
  //   .required('Required')
  //   .url('Must be a valid URL'),
  //   primaryLocation: Yup.string()
  //   .required('Required'),

});







const UserEditModal = ({ element, marketdata, onEdit, openNow, onClose }) => {
    const onEditButton = () => {
        onEdit(user);
        onClose();
    };
 const dispatch = useDispatch()

    const handleSubmit = async (values, { setSubmitting, resetForm }) => {
      const {cropName } =values 
      setSubmitting(true); // Set isSubmitting to true to show loading indicator
         console.log(values)
        try {
          dispatch(UpdateMarketData(values));
          toast.success(`$ added to basket`, { position: "top-center" });
        } catch (error) {
          console.error("Error adding item to basket: ", error);
          toast.error("Failed to add item to basket", { position: "top-center" });
        }

        setSubmitting(false); // Set isSubmitting back to false after action is complete
        resetForm();
      };




    return (
        <Modal element={element} openNow={openNow} onClose={() => onClose()}>
            <Dialog.Title
                as="h3"
                className="text-lg lg:mt-0 mt-12 font-bold leading-6 text-cyan-400 flex items-center"
            >
                <Edit size={22} className="mr-2" /> Editing Marketdata {marketdata.cropName}
            </Dialog.Title>
            <div className="mt-4  mb-5 ">
                <p className="text-sm text-darker-t">
                    {/* The user {user.name} will be permanently edited. */}
                </p>
                <p className="text-sm text-darker-t">
                    Are you sure you want to continue?
                </p>
            </div>
            




          <Formik
            initialValues={initialValues}
            // validate={validationSchema}
            onSubmit={handleSubmit}>
            
            {({ isSubmitting }) => {
              return (
                <Form
                  action=""
                  className=" mb-0  w-full lg:space-y-3  rounded-lg lg:p-2  p-0"
                >
                  <div className="   grid lg:grid-rows-1  md:grid-cols-2 grid-cols-2 lg:gap-y-[5em] gap-y-[0] gap-x-5 lg:pb-[1em] pb-2 ">
                    <div className="">
                    <label htmlFor="available" className="  font-medium text-base text-white">
                  Available*
                </label>

                <Field type="checkbox" name="available" id="available" className=" w-[80%] h-10 rounded-md border-gray-300 " />

                <ErrorMessage name="available" component="p"className="text-red-500 text-sm mt-1" />
                    </div>

                    <div>
                      <label htmlFor="planted" className="block text-base font-medium text-white">
                          Planted*
                          </label>
                      <div className="relative mt-1">
             
                <Field type="checkbox" name="planted" id="planted"  className=" h-10 border-2 bg-white  text-base text-black shadow-lg  block w-full rounded-md border-gray-300"/>
                <ErrorMessage name="planted" component="p"className="text-red-500 text-sm mt-1" />
                
                      </div>
                    </div>
                  </div>


                  <div className="grid lg:grid-rows-1  md:grid-cols-2 grid-cols-2 lg:gap-y-[5em] gap-y-[2em] gap-x-5 pb-[1em] ">
                    <div className="">
                      <label htmlFor="cropCategory" className="sr-only text-lg">
                        {" "}
                        CropCategory
                      </label>
                      <div className="relative">
                        <Field
                         className="  border-2 bg-white  text-base text-black shadow-lg mt-1 p-2 block w-full rounded-md border-gray-300"
                          type="text"
                          name="cropCategory"
                          placeholder="Crop Category"
                        />

                        <ErrorMessage  className=" text-error mt-1 text-lg" name="cropCategory" component="div" />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="cropName" className="sr-only text-lg">
                        {" "}
                        Crop Name{" "}
                      </label>
                      <div className="">
                        <Field
                         className="  border-2 bg-white  text-base text-black shadow-lg mt-1 p-2 block w-full rounded-md border-gray-300"
                          type="text"
                          name="cropName"
                          placeholder="cropName"
                        />

                        <ErrorMessage  className="text-error mt-1 text-lg" name="cropName" component="div" />
                      </div>
                    </div>
                  </div>

                  <div className="grid lg:grid-rows-1  md:grid-cols-2 grid-cols-1 lg:gap-y-[5em] gap-y-[0em] gap-x-5 lg:pb-[1em] pb-2">
                  <div className="relative ">
                  <label htmlFor="description" className="block text-base font-medium text-white">
                        Description*
                  </label>
                  <Field type="text" name="description" id="description"      className="  border-2 bg-white  text-base text-black shadow-lg mt-1 p-2 block w-full rounded-md border-gray-300"/>
                  <ErrorMessage name="description" component="p" className="text-red-500 text-sm mt-1" />
                        </div>

                        <div className="">
                        <label htmlFor="cropPrice" className="block text-base font-medium text-white">
                  cropPrice*
                  </label>
                  <Field type="text" name="cropPrice" id="cropPrice"      className="  border-2 bg-white  text-base text-black shadow-lg mt-1 p-2 block w-full rounded-md border-gray-300"/>
                  <ErrorMessage name="cropPrice" component="p" className="text-red-500 text-sm mt-1" />
                        </div>
                     </div>


                        <div className="pb-[2em]">
                        <label htmlFor="imageUrl" className="block text-base font-medium text-white">
                      imageUrl*
                      </label>
                      <Field type="text" name="imageUrl" id="imageUrl" className="  border-2 bg-white  text-base text-black shadow-lg mt-1 p-2 block w-full rounded-md border-gray-300" />
                      <ErrorMessage name="imageUrl" component="p" className="text-red-500 text-sm mt-1" />

                  </div>
                  
                  <div className="grid lg:grid-rows-1  md:grid-cols-2 grid-cols-2 lg:gap-y-[5em] gap-y-[0em] gap-x-5 pb-[2em]">
                  
                    <div className="">
                    <label htmlFor="dailyInterestRate" className="block text-base font-medium text-white">
                    Daily Interest 
                  </label>
                  <Field type="text" name="dailyInterestRate" id="dailyInterestRate"  className="  border-2 bg-white  text-base text-black shadow-lg mt-1 p-2 block w-full rounded-md border-gray-300"/>
                  <ErrorMessage name="dailyInterestRate" component="p" className="text-red-500 text-sm mt-1" />
                
                          </div>
                          <div>
                  <label htmlFor="cropEstimatedDuration" className="block text-base font-medium text-white">
                    Crop Estimated*
                  </label>
                  <Field type="number" name="cropEstimatedDuration" id="cropEstimatedDuration" className="  border-2 bg-white  text-base text-black shadow-lg mt-1 p-2 block w-full rounded-md border-gray-300" />
                  <ErrorMessage name="cropEstimatedDuration" component="p" className="text-red-500 text-sm mt-1" />
                </div>

                    </div>

                 <div className="grid lg:grid-rows-1  md:grid-cols-2 grid-cols-2 lg:gap-y-[10em] gap-y-[5em] gap-x-10 pb-[1em] ">
                    <div className="">
                          <label htmlFor="monthlyInterestRate" className="block w-full text-base font-medium text-white">
                    Monthly Interest*
                  </label>
                  <Field type="text" name="monthlyInterestRate" id="monthlyInterestRate"  className="  border-2 bg-white  text-base text-black shadow-lg mt-1 p-2 block w-full rounded-md border-gray-300" />
                  <ErrorMessage name="monthlyInterestRate" component="p" className="text-red-500 text-sm mt-1" />
                </div>
                            <div className="">
                            <label htmlFor="squareMeters" className="block text-base font-medium text-white">
                    Square Meters*
                  </label>
                  <Field type="number" name="squareMeters" id="squareMeters"  className="  border-2 bg-white  text-base text-black shadow-lg mt-1 p-2 block w-full rounded-md border-gray-300"/>
                  <ErrorMessage name="squareMeters" component="p" className="text-red-500 text-sm mt-1" />
                  </div>

                  </div>

                  <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-2 gap-y-[1em] gap-x-10 pb-[1em]  ">
                    <div className="relative ">
                    <label htmlFor="harvestDate" className="block text-base font-medium text-white">
                    Harvest Date*
                    </label>
                    <Field type="date" name="harvestDate" id="harvestDate"  className="  border-2 bg-white text-lg   text-black shadow-lg mt-1 p-2 block w-full rounded-md border-gray-300" />
                    <ErrorMessage name="harvestDate" component="p" className="text-red-500 text-sm mt-1" />
                  </div>
                   

                    <div className="">
                    <label htmlFor="datePlanted" className="block text-base font-medium text-white">
                      Date Planted*
                    </label>
                    <Field type="date" name="datePlanted" id="datePlanted"  className="  border-2 bg-white text-lg   text-black shadow-lg mt-1 p-2 block w-full rounded-md border-gray-300" />
                    <ErrorMessage name="datePlanted" component="p" className="text-red-500 text-sm mt-1" />
                  </div>

                  </div>

                    {/* <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-y-[10em] gap-y-[2em]  gap-x-10 pb-[1em]  "> */}
                    <div className=" ">
                          <label htmlFor="primaryLocation" className="block text-base font-medium text-white">
                    Square Meters*
                  </label>
                  <Field type="text" name="primaryLocation" id="primaryLocation"  className="  border-2 bg-white  text-base text-black shadow-lg mt-1 p-2 block w-full rounded-md border-gray-300"/>
                  <ErrorMessage name="primaryLocation" component="p" className="text-red-500 text-sm mt-1" />
                  </div>
                          {/* </div>  */}
                        
                  <div className="flex m-10  flex-col items-center">
                    <button
                      disabled={isSubmitting}
                      type="submit"
                      className="block lg:w-96 w-full  bg-green-600 rounded-lg bg-pri_var_2 px-5 py-3 text-base font-medium text-white"
                    >
                      {" "}
                      Got it, Edit!
                    </button>
                  </div>
                </Form>
              );
            }}
          </Formik>
        


        </Modal>
    );
};

export default UserEditModal;
