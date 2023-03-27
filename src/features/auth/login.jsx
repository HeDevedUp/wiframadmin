import { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/slice/auth/AuthenticationSlice";
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';



const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, isLoggedIn} = useSelector((state) => state.authReducers.Authentication);
  const failed = useSelector((state) => state.authReducers.Authentication.error);

  useEffect(() => {
    if (isLoggedIn) {
      toast.success("Login successful!");
       navigate("/");
     } else if (failed) {
       toast.error(failed);
      //  dispatch(removeError())
     }
 }, [isLoggedIn, failed, navigate]);


  
  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    event.preventDefault();
    const { userName, userPassword } = values;
    await dispatch(login({ userName, userPassword }));  
    setSubmitting(false);
    resetForm();
  };
  


  return (
    <>
      <ToastContainer />
      
      <section  className="mx-auto max-w-screen-xl flex flex-col items-center  px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg justify-center ">
          <div className="mx-auto max-w-lg text-center">
            <h1 className="text-2xl font-bold sm:text-3xl">Get started today!</h1>

            <p className="mt-4 text-gray-500 text-xl">
              Welcome to Wifahrm
            </p>
          </div>

          <Formik
            initialValues={{
              userName: '',
              userPassword: '',
            }}
            validate={(values) => {
              const errors = {};

              if (!values.userName) {
                errors.userName = 'Required';
              }
              if (!values.userPassword) {
                errors.userPassword = 'Required';
              }

              return errors;
            }}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (

              <Form action="" className="mx-auto  mt-8 mb-0 max-w-md space-y-4">
                <div>
                  <label htmlFor="email" className="sr-only text-lg"> Username</label>
                  <div className="relative">
                    <Field

                      className="w-full rounded-lg  border-gray-200 bg-white  p-4 pr-12  text-sm shadow-sm"
                      type="text"
                      name="userName"
                      placeholder="Username" />

                    <ErrorMessage
                      className=" text-error mt-1 text-lg"
                      name="userName"
                      component="div"
                    />

                    <span className="absolute inset-y-0 right-4 inline-flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          sstrokelinejoin="round"
                          strokeWidth="2"
                          d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                        />
                      </svg>
                    </span>
                  </div>
                </div>

                <div>
                  <label htmlFor="password" className="sr-only text-lg">Password</label>
                  <div className="relative">

                    <Field
                      className="w-full  border-gray-200 bg-white  rounded-lg p-4 pr-12 text-sm shadow-sm"
                      type="password"
                      name="userPassword"
                      placeholder="Password"

                    />

                    <ErrorMessage
                      className="text-sm text-error mt-1"
                      name="userPassword"
                      component="div"
                    />

                    <span className="absolute inset-y-0 right-4 inline-flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          sstrokelinejoin="round"
                          strokeWidth="2"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          sstrokelinejoin="round"
                          strokeWidth="2"
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    </span>
                  </div>
                </div>





                <div className="flex items-center justify-between">
                  <p className=" text-gray-500 text-base">
                    No account?
                    <a href="/signup" className="underline text-base ml-2" >

                      Sign Up

                    </a>
                  </p>

                  <button
                    type="submit"
                    className="ml-3 inline-block rounded-lg bg-[#017d3f] px-5 py-3  font-medium text-white text-lg"
                    disabled={isSubmitting}>
                    Sign in
                  </button>

                </div>
              </Form>
            )}
          </Formik>

        </div>



      </section>
     
    </>

  );
};

export default Login;





