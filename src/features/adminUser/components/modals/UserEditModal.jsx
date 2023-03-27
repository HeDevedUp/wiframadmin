import { Dialog } from "@headlessui/react";
import Modal from "@components/ui/modals/Modal";
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { Edit } from "react-feather";

const UserEditModal = ({ element, user, onEdit, openNow, onClose }) => {
    const onEditButton = () => {
        onEdit(user);
        onClose();
    };

    return (
        <Modal element={element} openNow={openNow} onClose={() => onClose()}>
            <Dialog.Title
                as="h3"
                className="text-lg font-bold leading-6 text-cyan-400 flex items-center"
            >
                <Edit size={22} className="mr-2" /> Editing user {user.name}
            </Dialog.Title>
            <div className="mt-2">
                <p className="text-sm text-darker-t">
                    The user {user.name} will be permanently edited.
                </p>
                <p className="text-sm text-darker-t">
                    Are you sure you want to continue?
                </p>
            </div>
            




          <Formik
            initialValues={{
              email: "",
              phoneNumber: "",
              userFirstName: "",
              userLastName: "",
              userName: "",
            }}
            validate={(values) => {
              const errors = {};
              if (!values.email) {
                  errors.email = 'Required';
              } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                  errors.email = 'Invalid email address';
              }
              if (!values.userFirstName) {
                  errors.userFirstName = 'Required';
              }
              if (!values.userLastName) {
                  errors.userLastName = 'Required';
              }
              if (!values.userName) {
                  errors.userName = 'Required';
              }
              if (!values.phoneNumber) {
                  errors.phoneNumber = 'Required';
              }
              
              
              return errors;
            }}
            onSubmit={() => console.log("submitted")}
          >
            {({ isSubmitting }) => {
              return (
                <Form
                  action=""
                  className="mt-6 mb-0  w-full space-y-4 rounded-lg p-8 shadow-2xl"
                >
                  <div className="   grid lg:grid-rows-1  md:grid-cols-2 grid-cols-1 lg:gap-y-[5em] gap-y-[2em] gap-x-5 pb-[1em] ">
                    <div className="relative mt-1">
                      <label htmlFor="firstName" className="sr-only text-lg">
                        {" "}
                        firstName
                      </label>
                      <div className="relative">
                        <Field
                          className="w-full rounded-lg border-2 border-black bg-white  p-4 pr-12 text-base text-black shadow-lg"
                          type="text"
                          name="firstName"
                          placeholder="First Name"
                        />

                        <ErrorMessage
                          className=" text-error mt-1 text-lg"
                          name="firstName"
                          component="div"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="userLastName" className="sr-only text-lg">
                        {" "}
                        userLastName{" "}
                      </label>
                      <div className="relative mt-1">
                        <Field
                          className="w-full border-2 border-black  shadow-lg bg-white  rounded-lg p-4 pr-12 text-base"
                          type="userLastName"
                          name="userLastName"
                          placeholder=" Last Name "
                        />

                        <ErrorMessage
                          className=" text-error mt-1 text-lg"
                          name="userLastName"
                          component="div"
                        />
                      </div>
                    </div>
                  </div>


                  <div className="relative mt-1">
                    <label htmlFor="userFirstName" className="sr-only text-lg">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Field
                        className="w-full rounded-lg  border-2 border-black bg-white  p-4 pr-12  text-base shadow-lg"
                        type="text"
                        name="phoneNumber"
                        placeholder="Phone Number"
                      />

                      <ErrorMessage
                        className=" text-error mt-1 text-lg"
                        name="phoneNumber"
                        component="div"
                      />
                    </div>
                  </div>

                  <div className="relative mt-1">
                    <label htmlFor="userFirstName" className="sr-only text-lg">
                      Email
                    </label>
                    <div className="relative">
                      <Field
                        className="w-full rounded-lg border-2 border-black  shadow-lg  bg-white  p-4 pr-12  text-base "
                        type="text"
                        name="email"
                        placeholder="Email"
                      />

                      <ErrorMessage
                        className=" text-error mt-1 text-lg"
                        name="email"
                        component="div"
                      />
                    </div>
                  </div>
                  
                  <div className="  grid lg:grid-rows-1  md:grid-cols-2 grid-cols-1 lg:gap-y-[5em] gap-y-[2em] gap-x-5 pb-[1em]">
                    <div className="relative mt-1">
                      <label
                        htmlFor="userLastName"
                        className="sr-only text-slate-900  text-lg"
                      >
                        {" "}
                        Last Name{" "}
                      </label>
                      <div className="relative">
                        <Field
                          className="w-full   bg-white text-slate-900  rounded-lg p-4 pr-12 text-base  border-2 border-black  shadow-lg "
                          type="text"
                          name="userLastName"
                          placeholder="Phone"
                        />

                        <ErrorMessage
                          className="text-lg text-error mt-1"
                          name="userLastName"
                          component="div"
                        />
                      </div>
                    </div>
                    
                    {/* <div className="relative mt-1">
                      <label htmlFor="userName" className="sr-only text-lg">
                        {" "}
                        Username{" "}
                      </label>
                      <div className="relative">
                        <Field
                          className="w-full bg-white text-slate-900  rounded-lg p-4 pr-12 text-base  border-2 border-black  shadow-lg "
                          type="text"
                          name="userName"
                          placeholder=" Website"
                        />

                        <ErrorMessage
                          className="text-lg text-error mt-1"
                          name="Email"
                          component="div"
                        />
                      </div>
                    </div>
                  </div> */}

                  {/* <div className="grid lg:grid-rows-1  md:grid-cols-2 grid-cols-1 lg:gap-y-[10em] gap-y-[2em] gap-x-10 pb-[1em] ">
                    <div className="relative mt-1">
                      <label htmlFor="password" className="sr-only text-lg">
                        Password
                      </label>
                      <div className="relative">
                        <Field
                          className="w-full   border-2 border-black  shadow-lg bg-white text-slate-900  rounded-lg p-4 pr-12 text-base "
                          type="text"
                          name="organisation"
                          placeholder="Position "
                        />

                        <ErrorMessage
                          className="text-lg text-error mt-1"
                          name="organisation"
                          component="div"
                        />
                      </div>
                    </div>

                  </div>
                  <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-y-[10em] gap-x-10 pb-[1em]  ">
                    <div className="relative mt-1">
                      <label
                        htmlFor="confirmPassword"
                        className="sr-only text-lg"
                      >
                        Password
                      </label>
                      <div className="relative">
                        <Field
                          className="w-full  border-gray-200 bg-white text-black rounded-lg p-4 pr-12 text-base shadow-sm"
                          type="password"
                          name="confirmPassword"
                          placeholder=" Address"
                        />

                        <ErrorMessage
                          className="text-lg text-error mt-1"
                          name="confirmPassword"
                          component="div"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-y-[10em] gap-y-[2em]  gap-x-10 pb-[1em]  ">
                    <div className="relative mt-1">
                      <label
                        htmlFor="confirmPassword"
                        className="sr-only text-lg"
                      >
                        Password
                      </label>
                      <div className="relative">
                        <Field
                          className="w-full   border-2 border-black  shadow-lg bg-white text-black rounded-lg p-4 pr-12 text-base "
                          type="password"
                          name="Card Number"
                          placeholder="Card Number"
                        />

                        <ErrorMessage
                          className="text-lg text-error mt-1"
                          name="confirmPassword"
                          component="div"
                        />
                      </div>
                    </div> */}
                    </div>




                  {/* <div className="flex  flex-col gap-10 items-center justify-between">
                    <button
                      disabled={isSubmitting}
                      type="submit"
                      className="block lg:w-96 w-full rounded-lg bg-pri_var_2 px-5 py-3 text-base font-medium text-white"
                    >
                      {" "}
                      Make Edit 
                    </button>
                  </div> */}
                </Form>
              );
            }}
          </Formik>
        

            <div className="mt-4">
                <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-lighter/80 px-4 py-2 text-sm font-medium text-cyan-400 hover:bg-lighter focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    onClick={() => onEditButton()}
                >
                    Got it, Edit!
                </button>
            </div>
        </Modal>
    );
};

export default UserEditModal;
