import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
// import Image from "next/image";
// import { money } from '../assets';
// import { CustomButton, Loader } from "../components";
// import { checkIfImage } from '../utils';
import React from 'react'

const AddCrop = () => {

  const formInitialState = {
    accruedAmount: 0,
    availablle: true,
    cropCategory: "",
    cropEstimatedDuration: 0,
    cropName: "",
    cropPrice: 0,
    dailyInterestRate: 0,
    datePlanted: "",
    id: 0,
    imageUrl: "",
    lifeCycleYieldRate: 0,
    monthlyInterestRate: 0,
    planted: true,
    squareMeters: 0
  }

//   const navigate = useNavigate();
//   const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="bg-[#1c1c24] flex justify-center items-center flex-col rounded-[10px] sm:p-10 p-4">
      {/* {isLoading && <Loader />} */}
      <div className="flex justify-center items-center p-[16px] sm:min-w-[380px] bg-[#3a3a43] rounded-[10px]">
        <h1 className="font-epilogue font-bold sm-text-[25px] leading-[38px] text-white">
          update a crop 
        </h1>
      </div>
      <Formik
        initialValues={formInitialState}
        validationSchema={Yup.object({
            availablle: Yup.string()
            .required('Required'),
            cropCategory: Yup.string()
            .required('Required'),
            dailyInterestRate: Yup.string()
            .required('Required'),
            cropEstimatedDuration: Yup.string()
            .required('Required'),
            datePlanted: Yup.string()
            .required('Required'),
            monthlyInterestRate: Yup.string()
            .required('Required'),
            squareMeters: Yup.string()
            .required('Required'),
            lifeCycleYieldRate: Yup.string()
            .required('Required'),
            cropName: Yup.string()
            .required('Required'),
            cropPrice: Yup.string()
            .required('Required'),
            imageUrl: Yup.string()
            .required('Required')
            .url('Must be a valid URL'),
        })}
        onSubmit={async (values, { setSubmitting }) => {
          checkIfImage(values.image, async (exists) => {
            if (exists) {
              setIsLoading(true);
              setIsLoading(false);
              navigate('/');
            } else {
              alert('Provide valid image URL');
              setSubmitting(false);
            }
          })
        }}
      >
        {({ isSubmitting }) => (
          <Form className='w-full mt-[65px] flex  items-center flex-col gap-[30px]'>

                  {/* <div className="  items-center w-full grid lg:grid-rows-1  md:grid-cols-2 grid-cols-1 lg:gap-y-[0em] gap-y-[0em] gap-x-0 pb-[1em] "> */}
                  <div className="w-full sm:w-1/2">
                <label htmlFor="available" className="  relative bottom-4 font-medium text-lg text-white">
                  Available*
                </label>
                <Field type="checkbox" name="available" id="available" className=" w-[80%] h-10 rounded-md border-gray-300 " />

                <ErrorMessage name="available" component="p"className="text-red-500 text-sm mt-1" />
                </div>

                <div className="w-full sm:w-1/2">
                <label htmlFor="cropCategory" className="block text-base font-medium text-white">
                cropCategory*
                </label>
                <Field type="text" name="cropCategory" id="cropCategory"  className="  border-2 bg-white  text-base text-black shadow-lg mt-1 p-2 block w-full rounded-md border-gray-300"/>
                <ErrorMessage name="cropCategory" component="p" className="text-red-500 text-sm mt-1" />
              </div>
            {/* </div> */}

          <div className="w-full sm:w-1/2">
            <label htmlFor="cropName" className=" block sm:w-1/2 text-base font-medium text-white">
            cropName*
            </label>
            <Field type="text" name="cropName" id="cropName"   className="  border-2 bg-white  text-base text-black shadow-lg mt-1 p-2 block w-full rounded-md border-gray-300"/>
            <ErrorMessage name="cropName" component="p" className="text-red-500 text-sm mt-1" />
          </div>
          <div className="w-full sm:w-1/2">
            <label htmlFor="cropPrice" className="block text-base font-medium text-white">
            cropPrice*
            </label>
            <Field type="text" name="cropPrice" id="cropPrice"      className="  border-2 bg-white  text-base text-black shadow-lg mt-1 p-2 block w-full rounded-md border-gray-300"/>
            <ErrorMessage name="cropPrice" component="p" className="text-red-500 text-sm mt-1" />
          </div>
          

          <div className="w-full sm:w-1/2">
                <label htmlFor="imageUrl" className="block text-base font-medium text-white">
                imageUrl*
                </label>
                <Field type="text" name="imageUrl" id="imageUrl" className="  border-2 bg-white  text-base text-black shadow-lg mt-1 p-2 block w-full rounded-md border-gray-300" />
                <ErrorMessage name="imageUrl" component="p" className="text-red-500 text-sm mt-1" />
              </div>


            
          <div className="w-full sm:w-1/2">
            <label htmlFor="dailyInterestRate" className="block text-base font-medium text-white">
              Daily Interest Rate*
            </label>
            <Field type="text" name="dailyInterestRate" id="dailyInterestRate"  className="  border-2 bg-white  text-base text-black shadow-lg mt-1 p-2 block w-full rounded-md border-gray-300"/>
            <ErrorMessage name="dailyInterestRate" component="p" className="text-red-500 text-sm mt-1" />
          </div>
          <div className="w-full sm:w-1/2">
            <label htmlFor="cropEstimatedDuration" className="block text-base font-medium text-white">
              Crop Estimated Duration*
            </label>
            <Field type="number" name="cropEstimatedDuration" id="cropEstimatedDuration" className="  border-2 bg-white  text-base text-black shadow-lg mt-1 p-2 block w-full rounded-md border-gray-300" />
            <ErrorMessage name="cropEstimatedDuration" component="p" className="text-red-500 text-sm mt-1" />
          </div>
      
          <div className="w-full sm:w-1/2">
            <label htmlFor="datePlanted" className="block text-base font-medium text-white">
              Date Planted*
            </label>
            <Field type="date" name="datePlanted" id="datePlanted"  className="  border-2 bg-white text-lg   text-black shadow-lg mt-1 p-2 block w-full rounded-md border-gray-300" />
            <ErrorMessage name="datePlanted" component="p" className="text-red-500 text-sm mt-1" />
          </div>
          <div className="w-full sm:w-1/2">
            <label htmlFor="lifeCycleYieldRate" className="block text-base font-medium text-white">
              Life Cycle Yield Rate*
            </label>
            <Field type="text" name="lifeCycleYieldRate" id="lifeCycleYieldRate"  className="  border-2 bg-white  text-base text-black shadow-lg mt-1 p-2 block w-full rounded-md border-gray-300" />
            <ErrorMessage name="lifeCycleYieldRate" component="p" className="text-red-500 text-sm mt-1" />
          </div>
    
    
          <div className="w-full sm:w-1/2">
            <label htmlFor="monthlyInterestRate" className="block text-base font-medium text-white">
              Monthly Interest Rate*
            </label>
            <Field type="text" name="monthlyInterestRate" id="monthlyInterestRate"  className="  border-2 bg-white  text-base text-black shadow-lg mt-1 p-2 block w-full rounded-md border-gray-300" />
            <ErrorMessage name="monthlyInterestRate" component="p" className="text-red-500 text-sm mt-1" />
          </div>
          <div className="w-full sm:w-1/2">
            <label htmlFor="squareMeters" className="block text-base font-medium text-white">
              Square Meters*
            </label>
            <Field type="number" name="squareMeters" id="squareMeters"  className="  border-2 bg-white  text-base text-black shadow-lg mt-1 p-2 block w-full rounded-md border-gray-300"/>
            <ErrorMessage name="squareMeters" component="p" className="text-red-500 text-sm mt-1" />
            </div>
       
        <div className="w-full sm:w-1/2">
        <label htmlFor="yieldRate" className="block text-base font-medium text-white">
        Yield Rate*
        </label>
        <Field type="text" name="yieldRate" id="yieldRate"  className="  border-2 bg-white  text-base text-black shadow-lg mt-1 p-2 block w-full rounded-md border-gray-300" />
        <ErrorMessage name="yieldRate" component="p" className="text-red-500 text-sm mt-1" />
        </div>
      
        <div className="w-full sm:w-1/2">
                <label htmlFor="planted" className="block text-base font-medium text-white">
                Planted*
                </label>
                <Field type="checkbox" name="planted" id="planted"  className=" h-10 border-2 bg-white  text-base text-black shadow-lg mt-1 p-2 block w-full rounded-md border-gray-300"/>
                <ErrorMessage name="planted" component="p"className="text-red-500 text-sm mt-1" />
                </div> 

        <div className="flex  w-full justify-center mt-10">
        <button type="submit" className="py-3  px-6 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
        Submit
        </button>
        </div>

</Form>
        )}
        </Formik>
        </div>
)}

export default AddCrop