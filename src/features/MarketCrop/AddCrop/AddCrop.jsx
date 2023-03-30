import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import React,{useState} from 'react'
import { UploadMarketData } from '@/redux/slice/marketplace/marketplaceSlice';
import { useDispatch } from 'react-redux';
import { toast } from 'react-hot-toast';


const validationSchema = Yup.object().shape({
    available: Yup.string()
      .required('Required'),
      // cropCategory: Yup.string()
      // .required('Category is required'),
      dailyInterestRate: Yup.string()
      .required('Required'),
      cropEstimatedDuration: Yup.string()
      .required('Required'),
      datePlanted: Yup.string()
      .required('Required'),
      harvestDate: Yup.string()
      .required('required'),
      description:Yup.string()
       .required('Required'),
      monthlyInterestRate: Yup.string()
      .required('Required'),
      squareMeters: Yup.string()
      .required('Required'),
      lifeCycleYieldRate: Yup.string()
      .required('Required'),
      // cropName: Yup.string()
      // .required('cropName is required'),
      cropPrice: Yup.string()
      .required('Required'),
      // imageUrl: Yup.string()
      // .required('Required')
      // .url('Must be a valid URL'),
      photo: Yup.string()
      .required('Required')
      .url('Must be a valid URL'),
      primaryLocation: Yup.string()
      .required('Required'),

});

const cropCategories = [
  "Select a category",
  "Vegetables",
  "Fruits",
  "Herbs",
  "Grains",
  "Nuts",
];

const cropNames = {
  Vegetables: [
    { name: "Select a crop", imageUrl: null },
    { name: "Tomatoes", imageUrl:"https://i.ibb.co/CbNjhWL/tomanto-1.png"},
    { name: "Carrots", imageUrl:"https://i.ibb.co/tHsLB80/carrot.jpg"},
    { name: "Peppers", imageUrl: ""},
    { name: "Lettuce", imageUrl:""},
    { name: "Spinach", imageUrl:"" },
  ],
  Fruits: [
    { name: "Select a crop", imageUrl: null },
    { name: "Apples", imageUrl:"" },
    { name: "Bananas", imageUrl:"" },
    { name: "Oranges", imageUrl:"" },
    { name: "Grapes", imageUrl:"" },
    { name: "Strawberries", imageUrl:"" },
  ],
  Herbs: [
    { name: "Select a crop", imageUrl: null },
    { name: "Basil", imageUrl:""},
    { name: "Parsley", imageUrl:""},
    { name: "Thyme", imageUrl:""},
    { name: "Oregano", imageUrl:""},
    { name: "Rosemary", imageUrl:""},
  ],
  Grains: [
    { name: "Select a crop", imageUrl: null },
    { name: "Rice", imageUrl:"" },
    { name: "Wheat", imageUrl: "" },
    { name: "Barley", imageUrl: "" },
    { name: "Oats", imageUrl:""},
    { name: "Corn", imageUrl: ""},
  ],
  Nuts: [
    { name: "Select a crop", imageUrl: null },
    { name: "Almonds", imageUrl: "" },
    { name: "Cashews", imageUrl:"" },
    { name: "Pecans", imageUrl: "" },
    { name: "Walnuts", imageUrl:"" },
  ],
};

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

const AddCrop = () => {

  const [availableCrops, setAvailableCrops] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [selectedCropimageUrl, setSelectedCropimageUrl] = useState('');
  const dispatch = useDispatch()

  const handleCategoryChange = (event) => {
    const category = event.target.value;
    setSelectedCategory(category);
    setAvailableCrops(cropNames[category] || []);
  };
  
      const handleCropChange = (event, setFieldValue) => {
        setFieldValue("cropName", event.target.value);
        setSelectedCropimageUrl(cropNames[selectedCategory].find(crop => crop.name === event.target.value).imageUrl);

      };

      const handleSubmit = async (values, { setSubmitting, resetForm }) => {
      const { cropName} = values
        setSubmitting(true); // Set isSubmitting to true to show loading indicator
         console.log(values)
        try {
          dispatch(UploadMarketData(values));
          toast.success(`${cropName} added to basket`, { position: "top-center" });
        } catch (error) {
          console.error("Error adding item to basket: ", error);
          toast.error("Failed to add item to basket", { position: "top-center" });
        }

        setSubmitting(false); // Set isSubmitting back to false after action is complete
        resetForm();
      };






  return (
    <div className="bg-[#1c1c24] flex justify-center items-center flex-col rounded-[10px] sm:p-10 p-4">
      {/* {isLoading && <Loader />} */}
      <div className="flex justify-center items-center p-[16px] sm:min-w-[380px] bg-[#3a3a43] rounded-[10px]">
        <h1 className="font-epilogue font-bold sm-text-[25px] leading-[38px] text-white">
          update a crop 
        </h1>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}>
        {({values, setFieldValue, isSubmitting, errors, touched }) => (
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
                <label htmlFor="cropCategory" className="block text-base font-medium ">
                Crop Category*
                </label>
                <select
                  id="cropCategory"
                  name="cropCategory"
                  onChange={(event) => {
                    handleCategoryChange(event);
                    setFieldValue("cropCategory", event.target.value);
                    setFieldValue("cropName", "");
                  }}
                  value={selectedCategory}
                  className="block w-full max-w-3xl h-10 border-green-500 border-2  rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm">

                  {cropCategories.map((category,index) => (
                    <option key={index} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
                {errors.cropCategory && touched.cropCategory && (
                  <div className="text-red-500">{errors.cropCategory}</div>
                )}
              </div>

            {/* </div> */}

          <div className="w-full sm:w-1/2">
            <label htmlFor="cropName" className=" block sm:w-1/2 text-base font-medium ">
            cropName*
            </label>
            <select
          id="cropName"
          name="cropName"
          disabled={!selectedCategory}
          onChange={(event) =>{
            handleCropChange(event, setFieldValue)
          } }
          value={values.cropName}
          className="block w-full max-w-3xl h-10 border-green-500 border-2  rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm">

              {availableCrops.map((crop, index) => (
                <option key={index} value={crop.name}>
                  {crop.name}
                </option>
              ))}

        </select>
        {errors.name && touched.name && (
          <div className="text-red-500">{errors.name}</div>
        )}

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
                <Field type="text" name="imageUrl" id="photo" className="  border-2 bg-white  text-base text-black shadow-lg mt-1 p-2 block w-full rounded-md border-gray-300" />
                <ErrorMessage name="imageUrl" component="p" className="text-red-500 text-sm mt-1" />

              </div>

              <div className="w-full sm:w-1/2">
                <label htmlFor="photo" className="block text-base font-medium text-white">
                Photo*
                </label>
                <Field type="text" name="photo" id="photo" className="  border-2 bg-white  text-base text-black shadow-lg mt-1 p-2 block w-full rounded-md border-gray-300" />
                <ErrorMessage name="photo" component="p" className="text-red-500 text-sm mt-1" />
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
            <label htmlFor="datePlanted" className="block text-base font-medium text-white">
            Harvest Date*
            </label>
            <Field type="date" name="harvestDate" id="harvestDate"  className="  border-2 bg-white text-lg   text-black shadow-lg mt-1 p-2 block w-full rounded-md border-gray-300" />
            <ErrorMessage name="harvestDate" component="p" className="text-red-500 text-sm mt-1" />
          </div>

          <div className="w-full sm:w-1/2">
            <label htmlFor="description" className="block text-base font-medium text-white">
            Description*
            </label>
            <Field type="text" name="description" id="description"  className="  border-2 bg-white  text-base text-black shadow-lg mt-1 p-2 block w-full rounded-md border-gray-300" />
            <ErrorMessage name="description" component="p" className="text-red-500 text-sm mt-1" />
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
        <label htmlFor="primaryLocation" className="block text-base font-medium text-white">
        Primary Location*
        </label>
        <Field type="text" name="primaryLocation" id="primaryLocation"  className="  border-2 bg-white  text-base text-black shadow-lg mt-1 p-2 block w-full rounded-md border-gray-300" />
        <ErrorMessage name="primaryLocation" component="p" className="text-red-500 text-sm mt-1" />
        </div>
      
        <div className="w-full sm:w-1/2">
                <label htmlFor="planted" className="block text-base font-medium text-white">
                Planted*
                </label>
                <Field type="checkbox" name="planted" id="planted"  className=" h-10 border-2 bg-white  text-base text-black shadow-lg mt-1 p-2 block w-full rounded-md border-gray-300"/>
                <ErrorMessage name="planted" component="p"className="text-red-500 text-sm mt-1" />
                </div> 

        <div className="flex  w-full justify-center mt-10">
        <button   disabled={isSubmitting} type="submit" className="py-3 w-full  px-6 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
        Submit
        </button>
        </div>

</Form>
        )}
        </Formik>
        </div>
)}

export default AddCrop